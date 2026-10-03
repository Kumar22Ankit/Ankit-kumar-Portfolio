import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Cloud Computing Certificate Workshop',
    organization: 'Cloud Counselage Pvt. Ltd.',
    year: '2024',
    description: 'Demonstrated proficiency in cloud infrastructure, services, and best practices with hands-on experience in cloud technologies and architecture.',
    icon: 'fas fa-cloud',
    color: '#06b6d4',
    badge: 'Cloud',
  },
  {
    id: 2,
    title: 'Google Cloud Digital Leader',
    organization: 'Coursera',
    year: '2023',
    description: 'Comprehensive understanding of Google Cloud Platform services, architecture, and best practices for designing and managing cloud solutions.',
    icon: 'fab fa-google',
    color: '#4285F4',
    badge: 'GCP',
  },
  {
    id: 3,
    title: 'AWS Cloud Computing Intern',
    organization: 'LinuxWorld Informatics Pvt. Ltd.',
    year: '2023',
    description: 'Certified in managing and navigating AWS Cloud Computing for scalable solutions, seamless deployments, and optimal performance.',
    icon: 'fab fa-aws',
    color: '#FF9900',
    badge: 'AWS',
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Validated expertise in cloud and infrastructure technologies.
          </p>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map(({ id, title, organization, year, description, icon, color, badge }) => (
            <StaggerItem key={id} direction="up">
              <motion.div
                whileHover={{ y: -6, boxShadow: `0 0 40px ${color}20` }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden h-full"
              >
                {/* Glow top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />

                {/* Badge label */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: `${color}12`, border: `1px solid ${color}30`, color }}
                  >
                    <i className={icon} />
                  </div>
                  <span
                    className="text-xs font-black px-3 py-1.5 rounded-full tracking-wider uppercase"
                    style={{ background: `${color}12`, color, border: `1px solid ${color}30` }}
                  >
                    {badge}
                  </span>
                </div>

                <h3 className="font-bold text-slate-100 text-base mb-1 leading-snug">{title}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color }}>
                  {organization} · {year}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>

                {/* Verified badge */}
                <div className="flex items-center gap-1.5 mt-4 text-xs text-slate-600">
                  <i className="fas fa-check-circle text-green-400" />
                  <span>Verified</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Certifications;
