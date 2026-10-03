import React from 'react';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '@/lib/utils';
import TypewriterText from '@/components/ui/TypewriterText';

const ROLES = [
  'Jr. DevOps Engineer',
  'GitLab CI/CD Specialist',
  'Cloud & Infrastructure Engineer',
  'Technical Writer',
  'Open Source Contributor',
];

// Scattered positions: [x%, y%] relative to hero section + float animation offsets
const SCATTERED_TECH = [
  { icon: 'fab fa-aws',         label: 'AWS',        color: '#FF9900', x: '8%',  y: '18%', floatY: [-8, 4, -8],  delay: 0 },
  { icon: 'fab fa-docker',      label: 'Docker',     color: '#2496ED', x: '88%', y: '14%', floatY: [-6, 8, -6],  delay: 0.4 },
  { icon: 'fas fa-dharmachakra',label: 'Kubernetes', color: '#326CE5', x: '5%',  y: '62%', floatY: [-10, 4, -10], delay: 0.8 },
  { icon: 'fas fa-layer-group', label: 'Terraform',  color: '#7B42BC', x: '91%', y: '55%', floatY: [-5, 9, -5],  delay: 0.2 },
  { icon: 'fab fa-git-alt',     label: 'Git',        color: '#F05032', x: '14%', y: '82%', floatY: [-7, 5, -7],  delay: 1.0 },
  { icon: 'fab fa-linux',       label: 'Linux',      color: '#FCC624', x: '82%', y: '80%', floatY: [-9, 3, -9],  delay: 0.6 },
  { icon: 'fab fa-python',      label: 'Python',     color: '#3776AB', x: '50%', y: '88%', floatY: [-6, 7, -6],  delay: 0.3 },
  { icon: 'fas fa-sync-alt',    label: 'CI/CD',      color: '#10b981', x: '72%', y: '22%', floatY: [-8, 5, -8],  delay: 0.7 },
  { icon: 'fas fa-shield-alt',  label: 'Grafana',    color: '#F46800', x: '25%', y: '12%', floatY: [-5, 9, -5],  delay: 1.2 },
];

const SOCIAL = [
  { href: 'https://github.com/Kumar22Ankit',          icon: 'fab fa-github',   label: 'GitHub' },
  { href: 'https://linkedin.com/in/ankit-kumar-a20478230', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'mailto:Ankitkumar6034651@gmail.com',       icon: 'fas fa-envelope', label: 'Email' },
  { href: 'https://medium.com/@ankitkumar6034651',    icon: 'fab fa-medium',   label: 'Medium' },
];

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Animated dot-grid background */}
      <div className="hero-dots" />

      {/* Radial glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
      />

      {/* ── SCATTERED FLOATING TECH ICONS ── */}
      {SCATTERED_TECH.map(({ icon, label, color, x, y, floatY, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1.2, duration: 0.5, type: 'spring', stiffness: 200 }}
          className="absolute pointer-events-none hidden lg:flex flex-col items-center gap-1.5 z-0"
          style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
        >
          <motion.div
            animate={{ y: floatY }}
            transition={{
              duration: 3 + delay,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
            className="flex flex-col items-center gap-1.5"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
              style={{
                background: `${color}12`,
                border: `1px solid ${color}30`,
                backdropFilter: 'blur(4px)',
                boxShadow: `0 0 20px ${color}20`,
              }}
            >
              <i className={icon} style={{ color }} />
            </div>
            <span className="text-[10px] font-semibold text-slate-600 tracking-wide">{label}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="availability-badge">
              <span className="availability-dot" />
              Open to Opportunities
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="relative w-28 h-28">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-glow-pulse"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
              >
                <div className="w-full h-full rounded-full bg-[#060a14]" />
              </div>
              <img
                src="/Profile_pic.jpeg"
                alt="Ankit Kumar"
                className="absolute inset-[3px] rounded-full object-cover object-top"
                style={{ width: 'calc(100% - 6px)', height: 'calc(100% - 6px)' }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black tracking-tight mb-4"
            style={{ lineHeight: 1.1 }}
          >
            <span className="text-slate-100">Ankit</span>{' '}
            <span className="gradient-text text-glow-cyan">Kumar</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-slate-400 mb-6 h-9"
          >
            <TypewriterText texts={ROLES} speed={70} className="text-cyan-400" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building reliable CI/CD pipelines, cloud infrastructure &amp; monitoring stacks.
            Jr. DevOps at Qualtech Edge · Ex-GDG Lead · Technical Writer on Medium.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(6,182,212,0.35)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => smoothScrollTo('contact')}
              className="px-7 py-3 rounded-xl font-semibold text-white text-sm relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <i className="fas fa-paper-plane text-xs" />
                Get in Touch
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, borderColor: 'rgba(6,182,212,0.6)', boxShadow: '0 0 20px rgba(6,182,212,0.15)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => smoothScrollTo('projects')}
              className="px-7 py-3 rounded-xl font-semibold text-slate-300 text-sm border border-slate-700 hover:text-cyan-400 transition-colors duration-200"
              style={{ background: 'rgba(17,24,39,0.6)' }}
            >
              <span className="flex items-center gap-2">
                <i className="fas fa-code-branch text-xs" />
                View Projects
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4"
          >
            {SOCIAL.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-cyan-400 border border-slate-800 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-200"
              >
                <i className={`${icon} text-lg`} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => smoothScrollTo('about')}
        >
          <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <i className="fas fa-chevron-down text-slate-600 text-sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;