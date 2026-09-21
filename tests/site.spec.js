import { expect, test } from '@playwright/test';

const contactEmail = 'thefinancialinitiative52@gmail.com';

test.describe('site-wide navigation', () => {
  const pages = [
    ['/', 'Financial Literacy'],
    ['/programs', 'Programs Built to Empower'],
    ['/legal-advocacy', 'Supporting Stronger Financial Education'],
    ['/about', 'About The Financial Initiative'],
    ['/news', 'Stay Informed with Investors Society'],
    ['/get-involved', 'Get Involved'],
  ];

  for (const [path, heading] of pages) {
    test(`${path} renders its primary content`, async ({ page }) => {
      await page.goto(path);
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
      await expect(page.getByAltText('The Financial Initiative Logo').first()).toBeVisible();
    });
  }

  test('desktop navigation reaches every primary page', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'mobile-chromium', 'Desktop links are hidden on mobile.');
    await page.goto('/');

    for (const [path, heading] of pages.slice(1)) {
      await page.locator('.desktop-nav').getByRole('link', { name: heading === 'Supporting Stronger Financial Education' ? 'Legal Advocacy' : heading === 'Programs Built to Empower' ? 'Programs' : heading === 'About The Financial Initiative' ? 'About' : heading === 'Stay Informed with Investors Society' ? 'News' : 'Get Involved' }).click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
    }
  });

  test('mobile menu opens, navigates, and closes after selection', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile menu only appears at the mobile breakpoint.');
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.getByRole('link', { name: 'Programs' }).last()).toBeVisible();
    await page.getByRole('link', { name: 'Programs' }).last().click();
    await expect(page).toHaveURL(/\/programs$/);
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
  });
});

test.describe('core journeys and outbound actions', () => {
  test('home calls to action reach their intended pages', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Explore Programs' }).click();
    await expect(page).toHaveURL(/\/programs$/);
    await page.goto('/');
    await page.getByRole('link', { name: 'Get Involved', exact: true }).first().click();
    await expect(page).toHaveURL(/\/get-involved$/);
  });

  test('home partnership link opens the partnerships section', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Learn about our partnerships →' }).click();
    await expect(page).toHaveURL(/\/about#partnerships$/);
    await expect(page.locator('#partnerships')).toBeInViewport();
  });

  test('all workshop cards and custom-session CTA are available', async ({ page }) => {
    await page.goto('/programs');
    await expect(page.getByRole('heading', { level: 3 })).toHaveCount(6);
    await expect(page.getByText('Budgeting & Saving')).toBeVisible();
    await expect(page.getByText('ESG & Sustainable Investing')).toBeVisible();
    await page.getByRole('link', { name: 'Join this workshop →' }).first().click();
    await expect(page).toHaveURL(/\/get-involved$/);
    await page.goto('/programs');
    await expect(page.getByRole('link', { name: 'Email us to get started →' })).toHaveAttribute('href', `mailto:${contactEmail}`);
  });

  test('advocacy documents can be opened and downloaded', async ({ page }) => {
    await page.goto('/legal-advocacy');
    await expect(page.getByLabel('Letter of Advocacy PDF')).toBeVisible();
    await expect(page.getByLabel('Letter of Advocacy Template PDF')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Open Original Letter' })).toHaveAttribute('href', '/legal-advocacy-letter.pdf');
    await expect(page.getByRole('link', { name: 'Open Letter Template' })).toHaveAttribute('href', '/letter-of-advocacy-template.pdf');
    await expect(page.getByRole('link', { name: 'Download PDF' }).first()).toHaveAttribute('download', '');
  });

  test('newsletter links point to Substack safely', async ({ page }) => {
    await page.goto('/news');
    const subscribeLink = page.getByRole('link', { name: 'Subscribe on Substack' });
    await expect(subscribeLink).toHaveAttribute('href', 'https://investorsociety.substack.com/');
    await expect(subscribeLink).toHaveAttribute('target', '_blank');
    await expect(subscribeLink).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(page.getByText("What You'll Find")).toBeVisible();
  });

  test('contact form validates required inputs and shows confirmation after submission', async ({ page }) => {
    await page.goto('/get-involved');
    const form = page.locator('form');
    await form.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByPlaceholder('Your name')).toBeFocused();

    await page.getByPlaceholder('Your name').fill('Taylor Student');
    await page.getByPlaceholder('you@email.com').fill('taylor@example.com');
    await page.getByPlaceholder('School, company, or group (optional)').fill('Example High School');
    await page.getByPlaceholder('How would you like to get involved?').fill('I would like to volunteer.');
    await form.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByRole('heading', { name: 'Message Sent!' })).toBeVisible();
  });

  test('all contact actions use the organization email address', async ({ page }) => {
    await page.goto('/get-involved');
    await expect(page.getByRole('link', { name: 'Request a session →' })).toHaveAttribute('href', `mailto:${contactEmail}`);
    await expect(page.getByRole('link', { name: 'Join the team →' })).toHaveAttribute('href', `mailto:${contactEmail}`);
    await expect(page.getByRole('link', { name: 'Book a session →' })).toHaveAttribute('href', `mailto:${contactEmail}`);
    await expect(page.getByRole('link', { name: 'Become a partner →' })).toHaveAttribute('href', `mailto:${contactEmail}`);
  });
});
