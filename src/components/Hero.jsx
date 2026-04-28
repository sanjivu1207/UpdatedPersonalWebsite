import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';

const roles = [
  'ML Researcher',
  'iOS Developer',
  'Computer Science Student @ University of Maryland',
  'NLP Engineer',
  'CyberSecurity Researcher',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 28);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid background */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
      <ParticleCanvas />

      {/* Purple glow blobs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 65%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* Hero content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '860px',
          padding: '0 24px',
        }}
      >
        {/* Code-style label */}
        <motion.p variants={item} className="section-label" style={{ marginBottom: '28px' }}>
          &lt; print('Hello World') /&gt;
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="glow-text"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(3.2rem, 9vw, 7.5rem)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            color: 'var(--text-primary)',
          }}
        >
          Sanjiv{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-bright) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Umashanker
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={item}
          style={{
            minHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.85rem, 2.5vw, 1.15rem)',
            color: 'var(--text-secondary)',
            fontWeight: 400,
          }}>
            <span style={{ color: 'var(--purple)', marginRight: '6px' }}>$</span>
            {displayed}
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1em',
              background: 'var(--purple)',
              marginLeft: '3px',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }} />
          </span>
          <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={item}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            color: 'var(--text-muted)',
            maxWidth: '500px',
            margin: '0 auto 40px',
            lineHeight: 1.9,
            fontWeight: 400,
          }}
        >
          Building AI systems that bridge cutting-edge research and real human impact.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={item} style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            View my work →
          </a>
          <a href="#contact" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Get in touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          style={{ marginTop: '72px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
        >
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.2em',
          }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--purple), transparent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
