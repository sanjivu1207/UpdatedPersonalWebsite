import { useRef, useEffect, useState } from 'react';
import photo from '../assets/IMG_4999.jpg';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 5000, suffix: '+', label: 'bulletins processed' },
  { value: 1.2, suffix: 'M+', label: 'vector chunks stored', decimal: true },
  { value: 99.9, suffix: '%', label: 'API uptime', decimal: true },
];

function CountUp({ to, suffix, decimal, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const steps = duration / step;
    const increment = to / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span className="stat-value">
      {decimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
}

// ─── Photo Placeholder Component ────────────────────────────────────────────
// Replace the src prop with your actual image path once you have one.
// e.g. import photo from '../assets/sanjiv.jpg' and set src={photo}
function ProfilePhoto({ src }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'relative' }}>
        {/* Rotating gradient ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: '-3px',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #a855f7, #7c3aed, #4c1d95, #a855f7)',
            zIndex: 0,
          }}
        />
        {/* Inner ring mask */}
        <div style={{
          position: 'absolute',
          inset: '3px',
          borderRadius: '50%',
          background: 'var(--bg-primary)',
          zIndex: 1,
        }} />

        {/* Photo area — 240×240 circle */}
        <div style={{
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '10px',
          border: '3px solid var(--bg-primary)',
        }}>
          {src ? (
            <img
              src={src}
              alt="Sanjiv Umashanker"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            /* ── PHOTO PLACEHOLDER — drop your image here ── */
            <>
              <div style={{ fontSize: '3.5rem', opacity: 0.4 }}>📷</div>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                textAlign: 'center',
                padding: '0 16px',
              }}>
                YOUR PHOTO HERE
              </span>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.58rem',
                color: '#3f3f46',
                textAlign: 'center',
              }}>
                src/assets/photo.jpg
              </span>
            </>
          )}
        </div>

        {/* Availability badge */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '4px',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: '#0f0f0f',
          border: '1px solid rgba(168,85,247,0.2)',
          borderRadius: '20px',
          padding: '5px 12px',
        }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
            boxShadow: '0 0 6px #22c55e',
          }} />
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            color: '#22c55e',
          }}>
            open to work
          </span>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: 'clamp(80px, 10vw, 140px) 0', position: 'relative' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <p className="section-label" style={{ marginBottom: '14px' }}>// about me</p>
          <h2 className="section-heading">The Human Behind the Code</h2>
        </motion.div>

        {/* Two-column: photo left, bio right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '56px',
          alignItems: 'center',
          marginBottom: '64px',
        }}>
          {/* ── Photo placeholder ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            {/*
              TO ADD YOUR PHOTO:
              1. Place your image in: src/assets/photo.jpg  (or .png / .webp)
              2. Add this import at the top of this file:
                   import photo from '../assets/photo.jpg'
              3. Change the line below to:
                   <ProfilePhoto src={photo} />
            */}
            <ProfilePhoto src={photo} />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <p style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 2,
              marginBottom: '28px',
              fontWeight: 400,
            }}>
              I'm <span style={{ color: 'var(--purple)', fontWeight: 600 }}>Sanjiv</span> — an
              incoming CS freshman at the{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>University of Maryland</span>{' '}
              with a specialization in Machine Learning. I build things that matter: from NLP
              pipelines that parse thousands of security bulletins to iOS apps that help people
              with verbal dyspraxia speak with confidence. I care about the intersection of{' '}
              <span style={{ color: 'var(--purple)' }}>AI and real human impact</span>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: '🎓', text: 'UMD College Park · CS + ML Specialization' },
                { icon: '🔬', text: 'NLP Researcher @ UT Dallas' },
                { icon: '📱', text: 'iOS Developer · SwiftUI + Firebase' },
                { icon: '🛡️', text: 'CyberSecurity Researcher' },
              ].map(({ icon, text }) => (
                <div key={text} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  background: 'rgba(168,85,247,0.04)',
                  border: '1px solid rgba(168,85,247,0.1)',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}>
                  <span style={{ flexShrink: 0 }}>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stat counters */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } } }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {stats.map(s => (
            <motion.div
              key={s.label}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              className="glass-card shimmer"
              style={{ padding: '28px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              <CountUp to={s.value} suffix={s.suffix} decimal={s.decimal} inView={inView} />
              <p style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                marginTop: '8px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
