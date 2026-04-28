import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

const socials = [
  { icon: <EmailIcon />, href: 'mailto:jakes@gmail.com', label: 'Send email' },
  { icon: <GithubIcon />, href: 'https://github.com/jake', label: 'GitHub profile' },
  { icon: <LinkedinIcon />, href: 'https://linkedin.com/in/sanjivu1207', label: 'LinkedIn profile' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [terminalVisible, setTerminalVisible] = useState(false);

  return (
    <section id="contact" ref={ref} style={{ padding: 'clamp(80px,10vw,140px) 0', position: 'relative' }}>
      {/* Separator line */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--border), transparent)', marginBottom: 'clamp(60px,8vw,100px)' }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>// let's connect</p>
          <h2 className="section-heading" style={{ marginBottom: '20px' }}>Get In Touch</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '40px' }}>
            I'm open to research collaborations, internships, and interesting projects.
            Whether you have a question or just want to say hi — my inbox is always open.
          </p>

          <motion.a
            href="mailto:jakes@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
            style={{ textDecoration: 'none', display: 'inline-block', fontSize: '1rem', padding: '14px 36px', marginBottom: '40px' }}
          >
            Say Hello 👋
          </motion.a>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '64px' }}>
            {socials.map(s => (
              <motion.a
                key={s.href}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="social-icon"
                style={{ textDecoration: 'none' }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Terminal easter egg */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => setTerminalVisible(!terminalVisible)}
              style={{
                background: 'rgba(0,229,255,0.04)',
                border: '1px solid rgba(0,229,255,0.15)',
                borderRadius: '8px',
                padding: '14px 24px',
                cursor: 'pointer',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                transition: 'all 0.3s',
                width: '100%',
                textAlign: 'left',
              }}
              aria-label="Show terminal easter egg"
            >
              <span style={{ color: '#10b981' }}>$ </span>
              <span style={{ color: 'var(--text-secondary)' }}>./sanjiv </span>
              <span style={{ color: 'var(--cyan)' }}>--available-for-internships</span>
              <span style={{ float: 'right', fontSize: '0.7rem' }}>{terminalVisible ? '▲' : '▼'}</span>
            </button>

            {terminalVisible && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(0,229,255,0.15)',
                  borderTop: 'none',
                  borderRadius: '0 0 8px 8px',
                  padding: '16px 24px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.8rem',
                  textAlign: 'left',
                }}
              >
                {[
                  { label: 'Status', value: '✅ AVAILABLE', color: '#10b981' },
                  { label: 'Looking For', value: 'ML / AI Research Internships', color: 'var(--cyan)' },
                  { label: 'Start Date', value: 'Summer 2027', color: 'var(--text-secondary)' },
                  { label: 'Location', value: 'Remote / Hybrid OK', color: 'var(--text-secondary)' },
                  { label: 'Contact', value: 'jakes@gmail.com', color: '#7c3aed' },
                ].map(r => (
                  <div key={r.label} style={{ marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{r.label}: </span>
                    <span style={{ color: r.color }}>{r.value}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            marginTop: '80px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(0,229,255,0.06)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Designed & built by{' '}
            <span style={{ color: 'var(--cyan)' }}>Sanjiv Umashanker</span>
            {' '}· 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
