import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'NLP Student Researcher',
    org: 'UT Dallas',
    period: 'June – July 2025',
    type: 'research',
    status: 'completed',
    color: 'var(--cyan)',
    bullets: [
      'Built automated CTI pipeline with NLTK — <strong>98.2% accuracy</strong> across 5,000+ security bulletins',
      'RAG system with FAISS storing <strong>1.2M+ vector chunks</strong>, reducing LLM hallucinations by 34%',
      'Bi-encoder retrieval model achieving <strong>0.89 MRR</strong> score on benchmark datasets',
      '200+ edge-case tests with sub-<strong>250ms</strong> query time at scale',
    ],
    tags: ['NLTK', 'FAISS', 'RAG', 'LangChain', 'Python', 'NLP'],
  },
  {
    id: 2,
    role: 'Undergraduate ML Research Assistant',
    org: 'University of Maryland',
    period: 'August 2026',
    type: 'upcoming',
    status: 'upcoming',
    color: '#7c3aed',
    bullets: [
      'Incoming role — applying ML research skills developed through prior NLP work',
      'Focus area: machine learning systems and applied AI research',
    ],
    tags: ['Machine Learning', 'Research', 'Python', 'PyTorch'],
  },
];

function TimelineNode({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{
        display: 'flex',
        gap: '32px',
        position: 'relative',
      }}
    >
      {/* Timeline node */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${exp.color}, ${exp.color}80)`,
            border: `2px solid ${exp.color}`,
            boxShadow: `0 0 20px ${exp.color}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            flexShrink: 0,
            zIndex: 2,
            position: 'relative',
          }}
        >
          {exp.status === 'upcoming' ? '🚀' : '🔬'}
        </motion.div>
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
            style={{
              width: '2px',
              flex: 1,
              background: 'linear-gradient(to bottom, var(--cyan), transparent)',
              transformOrigin: 'top',
              marginTop: '8px',
            }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4, boxShadow: `0 8px 32px ${exp.color}20` }}
        transition={{ duration: 0.3 }}
        className="glass-card"
        style={{
          flex: 1,
          padding: '28px',
          marginBottom: '40px',
          borderColor: `${exp.color}20`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div>
            <h3 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '4px',
            }}>
              {exp.role}
            </h3>
            <p style={{ color: exp.color, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>
              @ {exp.org}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              background: 'rgba(255,255,255,0.04)',
              padding: '4px 12px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              {exp.period}
            </span>

            {exp.status === 'upcoming' && (
              <span style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                color: '#10b981',
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.3)',
                padding: '4px 12px',
                borderRadius: '20px',
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10b981',
                  display: 'inline-block',
                  animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
                }} />
                <style>{`@keyframes ping{0%{transform:scale(1);opacity:1}100%{transform:scale(2);opacity:0}}`}</style>
                upcoming
              </span>
            )}
          </div>
        </div>

        <ul style={{ listStyle: 'none', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {exp.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: exp.color, flexShrink: 0, marginTop: '2px' }}>▹</span>
              <span
                style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: b.replace(/<strong>/g, `<strong style="color:var(--text-primary)">`) }}
              />
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {exp.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.68rem',
              color: exp.color,
              background: `${exp.color}15`,
              border: `1px solid ${exp.color}30`,
              padding: '3px 10px',
              borderRadius: '4px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="experience" ref={ref} style={{ padding: 'clamp(80px,10vw,140px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>// work history</p>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineNode key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
