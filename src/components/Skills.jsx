import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = {
  Languages: [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', color: '#F05138' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
  ],
  Frameworks: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'SwiftUI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', color: '#F05138' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
    { name: 'LangChain', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain.png', color: '#00D084' },
    { name: 'NLTK', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', color: '#009688' },
  ],
  Tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
    { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: '#4285F4' },
    { name: 'Xcode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg', color: '#147EFB' },
    { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: '#FCC624' },
    { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', color: '#F37626' },
  ],
  Libraries: [
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: '#013243' },
    { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', color: '#5C3EE8' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#150458' },
  ],
};

const tabs = Object.keys(skillCategories);

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.08, y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        padding: '20px 16px',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'default',
        background: hovered
          ? `rgba(${hexToRgb(skill.color)}, 0.08)`
          : 'rgba(13,31,53,0.5)',
        border: `1px solid ${hovered ? skill.color + '50' : 'rgba(0,229,255,0.1)'}`,
        boxShadow: hovered ? `0 0 20px ${skill.color}25` : 'none',
        transition: 'background 0.3s, border 0.3s, box-shadow 0.3s',
        backdropFilter: 'blur(8px)',
      }}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        style={{ width: '36px', height: '36px', objectFit: 'contain' }}
        onError={e => { e.target.style.display = 'none'; }}
      />
      <span style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.7rem',
        color: hovered ? skill.color : 'var(--text-secondary)',
        letterSpacing: '0.05em',
        transition: 'color 0.3s',
        textAlign: 'center',
      }}>
        {skill.name}
      </span>
    </motion.div>
  );
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0,229,255';
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Languages');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} style={{ padding: 'clamp(80px,10vw,140px) 0', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px', textAlign: 'center' }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>// technical arsenal</p>
          <h2 className="section-heading">Skills & Technologies</h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}
        >
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              aria-label={`Show ${tab} skills`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
            gap: '16px',
          }}
        >
          {skillCategories[activeTab].map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
