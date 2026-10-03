import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const STATS = [
  { value: '1.5', label: 'Years DevOps' },
  { value: '10+', label: 'Projects Built' },
  { value: '3+', label: 'Internships' },
  { value: '5+', label: 'Articles on Medium' },
];

const TAGS = ['DevOps', 'Cloud Computing', 'Infrastructure as Code', 'Containerization', 'CI/CD', 'Kubernetes', 'AWS', 'GitLab CI', 'Monitoring'];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="gradient-text">About Me</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Image column */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative max-w-sm mx-auto">
              <div
                className="relative p-[2px] rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#0a0f1e]">
                  <img
                    src="/Profile_pic.jpeg"
                    alt="Ankit Kumar"
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg">Ankit Kumar</p>
                    <p className="text-cyan-400 text-sm font-medium">Jr. DevOps Engineer · Qualtech Edge</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass-card p-3 rounded-xl flex items-center gap-2"
                style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)' }}
              >
                <i className="fas fa-cloud text-cyan-400 text-lg" />
                <div>
                  <p className="text-xs font-bold text-white">GDG Lead</p>
                  <p className="text-xs text-slate-400">IEC College</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text column */}
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-1">
                Jr. DevOps Engineer
              </h3>
              <p className="text-cyan-400 text-sm font-medium mb-4">Qualtech Edge · GDG Organizer · Technical Writer · Community Builder</p>

              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Cloud and DevOps Engineer with hands-on experience in AWS, CI/CD, and containerization 
                  technologies (Docker, Kubernetes). Proven ability to design and deploy scalable infrastructure, 
                  automate critical workflows, and optimize application performance.
                </p>
                <p>
                  Currently at Qualtech Edge managing GitLab CI/CD pipelines, building monitoring stacks with 
                  Prometheus & Grafana, and working with Oracle databases and Node.js/React-based QMS portals.
                </p>
                <p>
                  I actively share knowledge through technical writing on Medium, creating practical guides 
                  on cloud computing, DevOps, and containerization for the community.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span key={tag} className="skill-pill text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Stats row */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {STATS.map(({ value, label }) => (
            <StaggerItem key={label}>
              <div className="glass-card p-6 text-center rounded-2xl">
                <div className="text-3xl font-black gradient-text mb-1">{value}</div>
                <div className="text-sm text-slate-500 font-medium">{label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Terminal block */}
        <AnimatedSection delay={0.3} className="mt-12 max-w-3xl mx-auto">
          <div className="terminal">
            <div className="terminal-header">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-slate-500 text-xs ml-2">ankit@qualtech-edge:~$</span>
            </div>
            <div className="terminal-body text-sm">
              <p className="text-slate-400">$ kubectl describe engineer ankit-kumar</p>
              <div className="mt-2 border-t border-slate-800 pt-2 space-y-1">
                <p><span className="text-cyan-400">Name:</span>         Ankit Kumar</p>
                <p><span className="text-cyan-400">Role:</span>         Jr. DevOps Engineer @ Qualtech Edge</p>
                <p><span className="text-cyan-400">Status:</span>       <span className="text-green-400">Active 🟢</span></p>
                <p><span className="text-cyan-400">Stack:</span>        [GitLab CI, Docker, K8s, Prometheus, Grafana, AWS]</p>
                <p><span className="text-cyan-400">Experience:</span>   1+ year · 3+ internships</p>
                <p><span className="text-cyan-400">Education:</span>    B.Tech CSE · Minor Cloud Computing · IEC College</p>
                <p><span className="text-cyan-400">Location:</span>     Delhi, India</p>
                <p className="animate-blink text-cyan-400">▌</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
