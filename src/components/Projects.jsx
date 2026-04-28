import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'SpeechBuddi',
    emoji: '🗣️',
    tagline: 'Empowering communication for verbal dyspraxia',
    description:
      'An iOS application designed to help people with verbal dyspraxia communicate more effectively. Uses OpenAI API for real-time speech analysis and personalized feedback, built with SwiftUI and Firebase.',
    metric: '40%',
    metricLabel: 'articulation improvement',
    stats: [
      { label: 'Audio Latency', value: '200ms' },
      { label: 'API Uptime', value: '99.9%' },
      { label: 'Improvement', value: '+40%' },
    ],
    tags: ['Swift', 'SwiftUI', 'Firebase', 'OpenAI', 'iOS', 'Alamofire'],
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(124,58,237,0.04) 100%)',
  },
  {
    id: 2,
    name: 'EduFocus',
    emoji: '🧠',
    tagline: 'AI-powered focus tracking for ADHD learners',
    description:
      'Computer vision application detecting distraction patterns in real-time using OpenCV and PyTorch. Provides adaptive learning interventions to help ADHD students maintain focus and complete tasks.',
    metric: '83%',
    metricLabel: 'distraction detection accuracy',
    stats: [
      { label: 'Task Completion', value: '+32%' },
      { label: 'Fewer Distractions', value: '-28%' },
      { label: 'CV Accuracy', value: '83%' },
    ],
    tags: ['Python', 'OpenCV', 'PyTorch', 'TensorFlow', 'NumPy'],
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(61,126,245,0.06) 100%)',
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        border: `1px solid ${hovered ? project.color + '40' : 'rgba(168,85,247,0.08)'}`,
        transition: 'border 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? `0 20px 60px ${project.color}20` : 'none',
      }}
    >
      <div style={{ background: project.gradient, padding: '32px 32px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{project.emoji}</div>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
              {project.name}
            </h3>
            <p style={{ color: project.color, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem' }}>
              {project.tagline}
            </p>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '2rem', fontWeight: 800, color: project.color, lineHeight: 1 }}>
              {project.metric}
            </div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              {project.metricLabel}
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: 'rgba(15,15,15,0.9)', padding: '24px 32px 32px', backdropFilter: 'blur(12px)' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '24px' }}>
          {project.description}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '20px' }}>
          {project.stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center', padding: '12px 6px', borderRadius: '8px', background: `${project.color}08`, border: `1px solid ${project.color}20` }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: project.color }}>{s.value}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: project.color,
              background: `${project.color}12`, border: `1px solid ${project.color}25`,
              padding: '4px 10px', borderRadius: '4px',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} style={{ padding: 'clamp(80px,10vw,140px) 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>// what i've built</p>
          <h2 className="section-heading">Featured Projects</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,460px),1fr))', gap: '28px' }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
