import { Link } from 'react-router-dom';
import CountUpNumber from '../components/CountUpNumber';
import PageLayout from '../components/PageLayout';
import { impactStats, partners } from '../data/programs';

export default function Home() {
  return (
    <PageLayout>
      <section
        className="motion-hero"
        style={{
          background:
            'linear-gradient(135deg, #0a1628 0%, #0d2347 60%, #1a3a6b 100%)',
          color: '#fff',
          padding: '140px 24px 100px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="motion-hero__glow"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 60% 40%, rgba(23,162,216,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="motion-hero__content" style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(23,162,216,0.15)',
              border: '1px solid rgba(23,162,216,0.4)',
              color: '#5bc4f0',
              borderRadius: 20,
              padding: '6px 18px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            Student-Led Nonprofit · Est. 2024
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 28,
              letterSpacing: '-0.02em',
            }}
          >
            Financial Literacy
            <br />
            <span style={{ color: '#17a2d8' }}>for Every Student.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              opacity: 0.75,
              lineHeight: 1.7,
              maxWidth: 600,
              margin: '0 auto 40px',
            }}
          >
            The Financial Initiative delivers free, high-impact workshops on
            budgeting, investing, credit, and more — directly to students who
            need it most.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              className="motion-button"
              to="/programs"
              style={{
                background: '#17a2d8',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Explore Programs
            </Link>
            <Link
              className="motion-button motion-button--ghost"
              to="/get-involved"
              style={{
                border: '2px solid rgba(255,255,255,0.35)',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                display: 'inline-block',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <section className="motion-section" style={{ background: '#f7f9fc', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
                marginBottom: 16,
              }}
            >
              Our Impact
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem,3vw,2.8rem)',
                fontWeight: 800,
                color: '#0a1628',
                margin: 0,
              }}
            >
              Making a Real Difference
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 32,
            }}
          >
            {impactStats.map((stat, index) => (
              <div
                className="motion-card"
                key={stat.label}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: '36px 28px',
                  textAlign: 'center',
                  boxShadow: '0 2px 16px rgba(10,22,40,0.07)',
                  border: '1px solid #e8edf5',
                }}
              >
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  delay={index * 120}
                  style={{
                    fontSize: '3.6rem',
                    fontWeight: 800,
                    color: '#17a2d8',
                    marginBottom: 8,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                />
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#0a1628',
                    marginBottom: 6,
                  }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: 13, color: '#7a8ca8' }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="motion-section"
        style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p
            style={{
              color: '#7a8ca8',
              fontWeight: 600,
              letterSpacing: '0.1em',
              fontSize: 12,
              textTransform: 'uppercase',
              marginBottom: 36,
            }}
          >
            Trusted Partners
          </p>
          <div
            style={{
              display: 'flex',
              gap: 40,
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {partners.map((p) => (
              <div
                key={p.name}
                style={{
                  width: 180,
                  height: 70,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  className="motion-partner"
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'grayscale(20%)',
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link
              className="motion-link"
              to="/about#partnerships"
              style={{
                color: '#17a2d8',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: 14,
              }}
            >
              Learn about our partnerships →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
