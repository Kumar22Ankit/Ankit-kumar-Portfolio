import React from 'react';
import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
  { href: 'https://linkedin.com/in/ankit-kumar-a20478230', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://github.com/Kumar22Ankit', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'mailto:Ankitkumar6034651@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
  { href: 'https://medium.com/@ankitkumar6034651', icon: 'fab fa-medium', label: 'Medium' },
];

const TECH_STACK = ['Docker', 'K8s', 'AWS', 'Terraform', 'GitHub Actions'];

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-12 pb-8 overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, #06b6d4, #a855f7, transparent)'
      }} />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 opacity-20 blur-3xl rounded-full"
        style={{ background: 'radial-gradient(circle, #06b6d4, #a855f7)' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black font-mono gradient-text cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            &lt;AK/&gt;
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors duration-200 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20"
              >
                <i className={`${icon} text-lg`} />
              </motion.a>
            ))}
          </motion.div>

          {/* Built with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full border border-slate-700 text-slate-500 bg-slate-800/50"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-sm text-center"
          >
            © {new Date().getFullYear()} Ankit Kumar. Built with React & Framer Motion.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
