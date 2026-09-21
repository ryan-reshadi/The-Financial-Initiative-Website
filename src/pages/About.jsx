import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import TeamMember from '../components/TeamMember';
import { Link } from 'react-router-dom';
import { partners } from '../data/programs';
import { teamMembers } from '../data/team';

const missionCards = [
  {
    icon: '🎯',
    label: 'Mission',
    text: 'Make financial education accessible to every student, regardless of background.',
  },
  {
    icon: '👥',
    label: 'Who We Are',
    text: 'A team of student leaders, educators, and community advocates.',
  },
  {
    icon: '🌍',
    label: 'Reach',
    text: 'Workshops in multiple states, with an international presence through partner organizations.',
  },
];

export default function About() {
  return (
    <PageLayout>
      <HeroBanner
        badge="Our Story"
        title="About The Financial Initiative"
        subtitle="A student-led nonprofit on a mission to close the financial literacy gap."
        animated
      />

      <section className="motion-section" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(23,162,216,0.1)',
                  border: '1px solid rgba(23,162,216,0.3)',
                  color: '#0d85b5',
                  borderRadius: 20,
                  padding: '5px 16px',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                }}
              >
                Our Mission
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  marginBottom: 20,
                }}
              >
                Why We Do This
              </h2>
              <p
                style={{
                  color: '#4a5a72',
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Financial literacy is one of the most powerful tools a young
                person can have — yet it's rarely taught in schools. The
                Financial Initiative was founded to change that.
              </p>
              <p style={{ color: '#4a5a72', lineHeight: 1.8 }}>
                We're a student-led nonprofit that designs and delivers free
                financial education workshops for students across the country.
                Every session is practical, relatable, and built around the real
                questions students have about money.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {missionCards.map((card) => (
                <div
                  className="motion-card"
                  key={card.label}
                  style={{
                    background: '#f7f9fc',
                    borderRadius: 14,
                    padding: 24,
                    border: '1px solid #d1d5db',
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ fontSize: 24 }}>{card.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>
                      {card.label}
                    </div>
                    <div
                      style={{
                        color: '#4a5a72',
                        fontSize: 14,
                        lineHeight: 1.6,
                      }}
                    >
                      {card.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="motion-section" style={{ padding: '80px 24px', background: '#f7f9fc' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(23,162,216,0.1)',
                border: '1px solid rgba(23,162,216,0.3)',
                color: '#0d85b5',
                borderRadius: 20,
                padding: '5px 16px',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Our Team
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                marginBottom: 12,
              }}
            >
              The People Behind TFI
            </h2>
            <p
              style={{
                color: '#4a5a72',
                maxWidth: 520,
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Meet the student leaders driving our mission to make financial
              education accessible to every student.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.id}
                member={member}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="motion-section" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(23,162,216,0.1)',
              border: '1px solid rgba(23,162,216,0.3)',
              color: '#0d85b5',
              borderRadius: 20,
              padding: '5px 16px',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Partnerships
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              marginBottom: 12,
            }}
          >
            Organizations We Partner With
          </h2>
          <p
            style={{
              color: '#4a5a72',
              maxWidth: 500,
              margin: '0 auto 56px',
            }}
          >
            We work alongside mission-aligned organizations to expand our reach
            and deepen our impact.
          </p>

          <div
            id="partnerships"
            style={{
              display: 'flex',
              gap: 32,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {partners.map((partner) => (
              <div
                className="motion-card motion-partner-card"
                key={partner.name}
                style={{
                  background: '#fff',
                  borderRadius: 18,
                  padding: '36px 32px',
                  minWidth: 220,
                  border: '1px solid #d1d5db',
                  boxShadow: '0 2px 16px rgba(10,22,40,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 90,
                    height: 90,
                    background: partner.bg,
                    borderRadius: 16,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={partner.img}
                    alt={partner.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>
                  {partner.name}
                </div>
                <div style={{ color: '#7a8ca8', fontSize: 13 }}>
                  {partner.role}
                </div>
              </div>
            ))}

            <Link
              className="motion-card motion-partner-card"
              to="/get-involved#contact-form"
              style={{
                background: '#fff',
                borderRadius: 18,
                padding: '36px 32px',
                minWidth: 220,
                border: '2px dashed #c8d5e8',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                opacity: 0.65,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.borderColor = '#17a2d8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.65';
                e.currentTarget.style.borderColor = '#c8d5e8';
              }}
            >
              <div
                style={{
                  width: 90,
                  height: 90,
                  background: '#f0f4f8',
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  color: '#8a9bbf',
                }}
              >
                +
              </div>
              <div style={{ fontWeight: 700, color: '#8a9bbf' }}>
                Become a Partner
              </div>
              <div
                style={{
                  color: '#17a2d8',
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Get Started
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
