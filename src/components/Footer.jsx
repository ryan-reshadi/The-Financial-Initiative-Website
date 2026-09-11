import { Link } from 'react-router-dom';
import tfiLogo from '../assets/TFI.png';
import { CONTACT_EMAIL } from '../data/programs';

const footerNav = [
  { label: 'Home', to: '/' },
  { label: 'Programs', to: '/programs' },
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Get Involved', to: '/get-involved' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#060e1c',
        color: 'rgba(255,255,255,0.65)',
        padding: '64px 24px 40px',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img src={tfiLogo} alt="The Financial Initiative Logo" style={{ height: 40 }} />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>
                  The Financial Initiative
                </div>
                <div
                  style={{
                    color: '#17a2d8',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Student-Led Nonprofit
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>
              Free financial literacy education for every student.
            </p>
          </div>

          <div>
            <div
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: 13,
                marginBottom: 16,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Navigate
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {footerNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: 14,
                    transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: 13,
                marginBottom: 16,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Partners
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                PinkAware
              </span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                The Bridge Network
              </span>
            </div>
          </div>

          <div>
            <div
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: 13,
                marginBottom: 16,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Contact
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{
                color: '#17a2d8',
                textDecoration: 'none',
                fontSize: 14,
              }}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            fontSize: 12,
          }}
        >
          <span>© 2026 The Financial Initiative. All rights reserved.</span>
          <span>Student-Led Nonprofit</span>
        </div>
      </div>
    </footer>
  );
}
