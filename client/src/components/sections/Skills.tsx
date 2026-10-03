import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const SKILL_GROUPS = [
  {
    title: 'Cloud Platforms',
    icon: 'fas fa-cloud',
    color: '#06b6d4',
    skills: [
      { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
      { name: 'Google Cloud', icon: 'fab fa-google', color: '#4285F4' },
      { name: 'OpenStack', icon: 'fas fa-server', color: '#ED1944' },
    ],
  },
  {
    title: 'CI/CD & GitOps',
    icon: 'fas fa-sync-alt',
    color: '#10b981',
    skills: [
      { name: 'GitHub Actions', icon: 'fab fa-github', color: '#fff' },
      { name: 'GitLab CI', icon: 'fab fa-gitlab', color: '#FC6D26' },
      { name: 'ArgoCD', icon: 'fas fa-circle-notch', color: '#EF7B4D' },
    ],
  },
  {
    title: 'Containers & Orchestration',
    icon: 'fab fa-docker',
    color: '#2496ED',
    skills: [
      { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
      { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326CE5' },
      { name: 'Helm', icon: 'fas fa-anchor', color: '#0F1689' },
    ],
  },
  {
    title: 'Infrastructure as Code',
    icon: 'fas fa-code-branch',
    color: '#a855f7',
    skills: [
      { name: 'Terraform', icon: 'fas fa-layer-group', color: '#7B42BC' },
      { name: 'Ansible', icon: 'fas fa-cog', color: '#EE0000' },
      { name: 'CloudFormation', icon: 'fas fa-cloud-upload-alt', color: '#FF9900' },
    ],
  },
  {
    title: 'Monitoring & Observability',
    icon: 'fas fa-chart-line',
    color: '#f59e0b',
    skills: [
      { name: 'Prometheus', icon: 'fas fa-chart-line', color: '#E6522C' },
      { name: 'Grafana', icon: 'fas fa-chart-bar', color: '#F46800' },
      { name: 'Alertmanager', icon: 'fas fa-bell', color: '#E6522C' },
    ],
  },
  {
    title: 'Languages & OS',
    icon: 'fas fa-terminal',
    color: '#ec4899',
    skills: [
      { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
      { name: 'Bash / Shell', icon: 'fas fa-terminal', color: '#4EAA25' },
      { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624' },
    ],
  },
  {
    title: 'Databases',
    icon: 'fas fa-database',
    color: '#06b6d4',
    skills: [
      { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
      { name: 'Oracle DB', icon: 'fas fa-database', color: '#F80000' },
    ],
  },
  {
    title: 'Networking',
    icon: 'fas fa-network-wired',
    color: '#a855f7',
    skills: [
      { name: 'DNS', icon: 'fas fa-globe', color: '#06b6d4' },
      { name: 'Load Balancers', icon: 'fas fa-balance-scale', color: '#10b981' },
      { name: 'Firewalls', icon: 'fas fa-shield-alt', color: '#f59e0b' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">What I Work With</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            A curated stack of tools I use to build and ship production-grade infrastructure.
          </p>
        </AnimatedSection>

        {/* Skill Groups Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {SKILL_GROUPS.map(({ title, icon, color, skills }) => (
            <StaggerItem key={title}>
              <div className="glass-card p-5 rounded-2xl h-full">
                {/* Group header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
                    style={{ background: `${color}22`, border: `1px solid ${color}33` }}
                  >
                    <i className={icon} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-slate-200 text-xs leading-tight">{title}</h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ name, icon: skillIcon, color: skillColor }) => (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="skill-pill"
                    >
                      <i className={skillIcon} style={{ color: skillColor, fontSize: '0.85rem' }} />
                      <span className="text-xs font-medium text-slate-300">{name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
