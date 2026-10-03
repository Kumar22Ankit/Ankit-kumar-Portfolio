import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const ARTICLES = [
  {
    id: 1,
    title: 'AWS Secrets Manager for ECS & EKS: Secure Runtime Secrets',
    category: 'AWS Security',
    readTime: '6 min read',
    date: 'Dec 6, 2025',
    description:
      'Managing sensitive information like database credentials, API tokens, and certificates in containerised environments. A deep dive into AWS Secrets Manager for ECS & EKS.',
    link: 'https://ankitkumar6034651.medium.com/aws-secrets-manager-for-ecs-eks-secure-runtime-secrets-a90d801a956f',
    emoji: '🔐',
    color: '#06b6d4',
    tags: ['AWS', 'Security', 'ECS', 'EKS'],
  },
  {
    id: 2,
    title: 'Automating Container Image Scanning with Amazon Inspector and CodeBuild',
    category: 'DevSecOps',
    readTime: '8 min read',
    date: 'Nov 8, 2025',
    description:
      'How to integrate AWS CodeBuild, ECR, and Amazon Inspector to automate end-to-end container image security scanning — catching vulnerabilities before they reach production.',
    link: 'https://awstip.com/automating-container-image-scanning-with-amazon-inspector-and-codebuild-292d6dd0b4e8',
    emoji: '🛡️',
    color: '#a855f7',
    tags: ['AWS Inspector', 'CodeBuild', 'ECR', 'Docker'],
  },
  {
    id: 3,
    title: 'Secure Pod Access: EKS IRSA Least-Privilege Guide',
    category: 'Kubernetes',
    readTime: '7 min read',
    date: 'Nov 1, 2025',
    description:
      'How to use IAM Roles for Service Accounts (IRSA) to securely grant EKS pods least-privilege access to AWS services — without hardcoded credentials.',
    link: 'https://ankitkumar6034651.medium.com/secure-pod-access-eks-irsa-least-privilege-guide-6554079861be',
    emoji: '☸️',
    color: '#10b981',
    tags: ['EKS', 'IRSA', 'IAM', 'Kubernetes'],
  },
];

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Knowledge Sharing</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="gradient-text">Technical Articles</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Sharing hands-on knowledge on cloud computing, DevOps, and AWS security.
          </p>
        </AnimatedSection>

        {/* Article cards */}
        <StaggerContainer staggerDelay={0.1} className="space-y-4 max-w-3xl mx-auto">
          {ARTICLES.map(({ id, title, category, readTime, date, description, link, emoji, color, tags }) => (
            <StaggerItem key={id} direction="left">
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, boxShadow: `0 0 30px ${color}15` }}
                className="glass-card p-5 rounded-2xl flex gap-5 items-start group cursor-pointer no-underline block"
              >
                {/* Emoji icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                >
                  {emoji}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <span
                      className="text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                      style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}
                    >
                      {category}
                    </span>
                    <span className="text-xs text-slate-600 flex items-center gap-1">
                      <i className="fas fa-clock text-xs" />
                      {readTime}
                    </span>
                    <span className="text-xs text-slate-600">
                      {date}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-100 text-base mb-1.5 leading-snug group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-2">{description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full text-slate-500 border border-slate-800 bg-slate-900/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <motion.div
                  className="text-slate-600 group-hover:text-cyan-400 flex-shrink-0 self-center transition-colors duration-200"
                  whileHover={{ x: 4 }}
                >
                  <i className="fas fa-arrow-right" />
                </motion.div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View all button */}
        <AnimatedSection delay={0.3} className="text-center mt-10">
          <motion.a
            href="https://medium.com/@ankitkumar6034651"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(6,182,212,0.2)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
          >
            <i className="fab fa-medium" />
            View All Articles on Medium
            <i className="fas fa-external-link-alt text-xs" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Articles;
