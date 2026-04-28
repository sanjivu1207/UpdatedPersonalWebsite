import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: '01. about', href: '#about' },
  { label: '02. skills', href: '#skills' },
  { label: '03. experience', href: '#experience' },
  { label: '04. projects', href: '#projects' },
  { label: '05. contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(5, 10, 20, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,229,255,0.08)' : 'none',
        transition: 'all 0.4s ease',
        padding: scrolled ? '16px 0' : '24px 0',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em', textDecoration: 'none' }}>
          SU<span style={{ color: 'var(--purple)' }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a
            href="mailto:jakes@gmail.com"
            className="btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.78rem', textDecoration: 'none' }}
          >
            Hire me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              animate={menuOpen
                ? i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 8 } : { rotate: -45, y: -8 }
                : { rotate: 0, y: 0, opacity: 1 }
              }
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: 'var(--cyan)',
                borderRadius: '2px',
                transformOrigin: 'center',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(5,10,20,0.97)', borderTop: '1px solid rgba(0,229,255,0.1)' }}
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map(l => (
                <a key={l.href} href={l.href} className="nav-link text-base" onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
