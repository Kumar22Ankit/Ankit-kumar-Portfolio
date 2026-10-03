import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  location?: string;
  icon: string;
  details?: string[];
  type: 'work' | 'education' | 'leadership';
  isCurrent?: boolean;
}

const WORK: TimelineEntry[] = [
  {
    title: 'Jr. DevOps Engineer',
    organization: 'Qualtech Edge',
    period: 'Sep 2025 – Present',
    location: 'New Delhi',
    icon: 'fas fa-briefcase',
    type: 'work',
    isCurrent: true,
    details: [
      'Managed and optimized GitLab CI/CD pipelines for multi-WAR WildFly application deployments, improving reliability and reducing failure rates.',
      'Diagnosed and resolved recurring pipeline issues including dependency conflicts and smoke test failures.',
      'Administered Oracle database operations supporting production deployments, including schema imports and cascading error resolution.',
      'Set up a Docker-based monitoring stack (Prometheus, Grafana, Alertmanager) for real-time infrastructure visibility.',
      'Built and maintained an internal QMS portal using Node.js, React, and PostgreSQL.',
    ],
  },
  {
    title: 'DevOps Intern',
    organization: 'Infrasity',
    period: 'Dec 2024 – Feb 2025',
    location: 'New Delhi',
    icon: 'fas fa-code-branch',
    type: 'work',
    details: [
      'Developed a CI/CD pipeline using GitHub Actions to automate build, testing, and deployment — reducing manual effort by 40%.',
      'Implemented IaC using Terraform to provision and manage AWS resources, ensuring consistency and version control.',
      'Configured Docker-based development environments, improving onboarding time and ensuring local/production parity.',
    ],
  },
  {
    title: 'AWS Cloud Intern',
    organization: 'LinuxWorld Informatics Pvt. Ltd.',
    period: 'Jun 2023 – Aug 2023',
    location: 'New Delhi',
    icon: 'fab fa-aws',
    type: 'work',
    details: [
      'Designed and deployed scalable cloud infrastructure on AWS using Docker and Linux.',
      'Built and launched an automated food ordering bot service on AWS using LEX, Cognito, and DynamoDB.',
      'Implemented cloud-based solutions that improved operational efficiency for a large-scale e-commerce platform.',
    ],
  },
];

const EDUCATION: TimelineEntry[] = [
  {
    title: 'GDG on Campus Organizer',
    organization: 'Google Developer Groups – IEC College',
    period: 'Sep 2024 – Aug 2025',
    icon: 'fab fa-google',
    type: 'leadership',
    details: [
      'Led a GDG chapter, organizing events on cloud computing, AI, and open-source for 200+ students.',
      'Managed a volunteer team of 15 members ensuring smooth execution and high participant engagement.',
    ],
  },
  {
    title: 'Founder & Contributor',
    organization: 'Abhiyantrik',
    period: 'Jan 2024 – Jan 2026',
    icon: 'fas fa-rocket',
    type: 'leadership',
    details: [
      'Founded a technical community with 100+ members, partnering with educational institutions to promote STEM.',
      'Organized workshops and events on emerging technologies to encourage learning and diversity in tech.',
    ],
  },
  {
    title: 'B.Tech — Computer Science & Engineering',
    organization: 'IEC College of Engineering and Technology · Greater Noida',
    period: '2022 – 2025',
    icon: 'fas fa-graduation-cap',
    type: 'education',
    details: ['Minor in Cloud Computing'],
  },
  {
    title: 'Diploma — Production Engineering',
    organization: 'G.B Pant Institute of Technology · New Delhi',
    period: '2019 – 2022',
    icon: 'fas fa-graduation-cap',
    type: 'education',
  },
];

const TYPE_COLORS = {
  work: '#06b6d4',
  education: '#a855f7',
  leadership: '#10b981',
};

const TimelineColumn: React.FC<{ entries: TimelineEntry[]; title: string; headerIcon: string }> = ({
  entries,
  title,
  headerIcon,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div>
      <AnimatedSection direction="up" className="mb-8">
        <h3 className="text-xl font-bold text-slate-200 flex items-center gap-3">
          <span
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
            style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)' }}
          >
            <i className={`${headerIcon} text-cyan-400`} />
          </span>
          {title}
        </h3>
      </AnimatedSection>

      <div ref={ref} className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-px overflow-hidden">
          <motion.div
            initial={{ height: '0%' }}
            animate={isInView ? { height: '100%' } : { height: '0%' }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            className="w-full"
            style={{ background: 'linear-gradient(to bottom, #06b6d4, #a855f7, transparent)' }}
          />
        </div>

        <div className="space-y-6">
          {entries.map((entry, index) => {
            const dotColor = TYPE_COLORS[entry.type];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center text-xs border-2 z-10"
                  style={{
                    background: `${dotColor}15`,
                    borderColor: `${dotColor}40`,
                    color: dotColor,
                  }}
                >
                  <i className={entry.icon} />
                </div>

                {/* Card */}
                <div className="glass-card p-4 rounded-xl">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-slate-100 text-sm leading-tight">{entry.title}</h4>
                      {entry.isCurrent && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-green-400/10 text-green-400 border border-green-400/25 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                          Now
                        </span>
                      )}
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                      style={{ background: `${dotColor}15`, color: dotColor, border: `1px solid ${dotColor}30` }}
                    >
                      {entry.period}
                    </span>
                  </div>
                  <p className="text-cyan-400 text-xs font-medium mb-2">
                    {entry.organization}
                    {entry.location && <span className="text-slate-500"> · {entry.location}</span>}
                  </p>
                  {entry.details && (
                    <ul className="space-y-1">
                      {entry.details.map((d, i) => (
                        <li key={i} className="text-slate-500 text-xs flex gap-2">
                          <span className="text-cyan-400 flex-shrink-0 mt-0.5">›</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="gradient-text">Experience & Education</span>
          </h2>
        </AnimatedSection>

        {/* Two-column timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <TimelineColumn entries={WORK} title="Professional Experience" headerIcon="fas fa-briefcase" />
          <TimelineColumn entries={EDUCATION} title="Education & Leadership" headerIcon="fas fa-graduation-cap" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
