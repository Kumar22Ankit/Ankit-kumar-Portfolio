import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const PROJECTS = [
  {
    id: 1,
    title: 'OrderFlow K8s Migration',
    subtitle: 'Enterprise Java EE → Kubernetes',
    description:
      'Kubernetes migration of a legacy multi-module Java EE app — resolves a WildFly classloader conflict through per-service pod isolation, with production-grade patterns (StatefulSets, init containers, health probes, GitOps CI/CD).',
    tags: ['Kubernetes', 'Java EE', 'WildFly', 'GitOps', 'Docker'],
    category: 'kubernetes cicd',
    githubUrl: 'https://github.com/Kumar22Ankit/orderflow-k8s-migration',
    featured: true,
    icon: 'fas fa-dharmachakra',
    accent: '#06b6d4',
  },
  {
    id: 2,
    title: 'PreProdSync',
    subtitle: 'Kubernetes CI/CD Pre-Production Testing',
    description:
      'Engineered a Kubernetes-based CI/CD solution to automate integration and testing of new features in a pre-production environment. Reduced deployment timeline by 30% through automated container orchestration.',
    tags: ['Kubernetes', 'Docker', 'GitHub Actions', 'ArgoCD', 'Node.js'],
    category: 'kubernetes cicd',
    githubUrl: 'https://github.com/Kumar22Ankit/PreProdSync-test',
    featured: true,
    icon: 'fas fa-sync-alt',
    accent: '#a855f7',
  },
  {
    id: 3,
    title: 'AWS EKS IRSA',
    subtitle: 'Least-Privilege Pod Access on EKS',
    description:
      'Implements IAM Roles for Service Accounts (IRSA) on Amazon EKS with Terraform — giving pods fine-grained, least-privilege AWS access without hardcoded credentials. Includes full OIDC trust policy setup.',
    tags: ['EKS', 'Terraform', 'IAM', 'IRSA', 'HCL'],
    category: 'aws',
    githubUrl: 'https://github.com/Kumar22Ankit/AWS-EKS-IRSA-Least-Privilege',
    featured: false,
    icon: 'fab fa-aws',
    accent: '#FF9900',
  },
  {
    id: 4,
    title: 'CodeBuild ECR Inspector',
    subtitle: 'Automated Container Image Scanning',
    description:
      'End-to-end DevSecOps pipeline integrating AWS CodeBuild, ECR, and Amazon Inspector — every Docker image push automatically triggers a vulnerability scan with findings categorized by severity.',
    tags: ['AWS Inspector', 'CodeBuild', 'ECR', 'Docker', 'DevSecOps'],
    category: 'aws cicd',
    githubUrl: 'https://github.com/Kumar22Ankit/codebuild-ecr-inspector-demo',
    featured: false,
    icon: 'fas fa-shield-alt',
    accent: '#10b981',
  },
];

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Kubernetes', value: 'kubernetes' },
  { label: 'AWS', value: 'aws' },
  { label: 'CI/CD', value: 'cicd' },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = PROJECTS.filter((p) =>
    activeFilter === 'all' ? true : p.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Real-world DevOps & cloud projects — from Kubernetes migrations to DevSecOps pipelines.
          </p>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map(({ label, value }) => (
            <motion.button
              key={value}
              onClick={() => setActiveFilter(value)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 overflow-hidden"
              style={{
                background: activeFilter === value
                  ? 'linear-gradient(135deg, #06b6d4, #a855f7)'
                  : 'rgba(17,24,39,0.6)',
                color: activeFilter === value ? 'white' : '#94a3b8',
                border: activeFilter === value
                  ? '1px solid transparent'
                  : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {label}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -6, boxShadow: `0 0 40px ${project.accent}20` }}
                className={`project-card shimmer p-6 ${project.featured ? 'project-card-featured' : ''}`}
              >
                {/* Icon + Featured badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30`, color: project.accent }}
                  >
                    <i className={project.icon} />
                  </div>
                  {project.featured && (
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: 'rgba(6,182,212,0.12)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.25)' }}
                    >
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Title & description */}
                <h3 className="font-bold text-slate-100 text-lg mb-1">{project.title}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: project.accent }}>
                  {project.subtitle}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `${project.accent}10`,
                        color: project.accent,
                        border: `1px solid ${project.accent}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all"
                  >
                    <i className="fab fa-github" /> View Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub link */}
        <AnimatedSection delay={0.3} className="text-center mt-10">
          <motion.a
            href="https://github.com/Kumar22Ankit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(6,182,212,0.2)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
          >
            <i className="fab fa-github" />
            View All Projects on GitHub
            <i className="fas fa-external-link-alt text-xs" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
