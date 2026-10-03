import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  useEffect(() => {
    document.title = 'Ankit Kumar | Resume';
  }, []);

  return (
    <>
      {/* Print controls */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-[rgba(6,182,212,0.12)] px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
          <i className="fas fa-arrow-left text-xs" />
          Back to Portfolio
        </a>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-600 hidden sm:block">Ctrl+P → Save as PDF</span>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
          >
            <i className="fas fa-download text-xs" />
            Download PDF
          </motion.button>
        </div>
      </div>

      {/* Resume Document */}
      <div id="resume-page" className="min-h-screen bg-white text-gray-900 pt-16">
        <div className="max-w-[820px] mx-auto p-8 font-sans">

          {/* ── HEADER ── */}
          <div className="pb-5 mb-5" style={{ borderBottom: '2px solid #e5e7eb' }}>
            <h1 className="text-4xl font-black tracking-tight text-gray-900">Ankit Kumar</h1>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-600">
              <span>Delhi, India</span>
              <span>·</span>
              <a href="mailto:Ankitkumar6034651@gmail.com" className="text-cyan-600">Ankitkumar6034651@gmail.com</a>
              <span>·</span>
              <span>+91 8882092012</span>
              <span>·</span>
              <a href="https://linkedin.com/in/ankit-kumar-a20478230" className="text-cyan-600">linkedin.com/in/ankit-kumar-a20478230</a>
              <span>·</span>
              <a href="https://ankit-kr-portfolio.vercel.app" className="text-cyan-600">ankit-kr-portfolio.vercel.app</a>
            </div>
          </div>

          {/* ── SUMMARY ── */}
          <section className="mb-5">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-2 border-l-4 border-cyan-500 pl-3">
              Summary
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Cloud and DevOps Engineer with hands-on experience in AWS, CI/CD, and containerization technologies
              (Docker, Kubernetes). Proven ability to design and deploy scalable infrastructure, automate critical
              workflows, and optimize application performance. Eager to leverage a strong foundation in Linux,
              scripting, and problem-solving to contribute to a dynamic engineering team.
            </p>
          </section>

          {/* ── SKILLS ── */}
          <section className="mb-5">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3 border-l-4 border-cyan-500 pl-3">
              Skills
            </h2>
            <div className="space-y-1 text-sm">
              {[
                { label: 'Cloud Platforms', value: 'AWS, Google Cloud, OpenStack' },
                { label: 'CI/CD', value: 'GitHub Actions, GitLab CI, ArgoCD' },
                { label: 'Containerization', value: 'Docker, Kubernetes' },
                { label: 'Infrastructure as Code (IaC)', value: 'Terraform, Ansible' },
                { label: 'Scripting & Automation', value: 'Python, Bash, Shell' },
                { label: 'Operating Systems', value: 'Linux (Ubuntu, Mint, Red Hat), Windows' },
                { label: 'Monitoring', value: 'Prometheus, Grafana, Alertmanager' },
                { label: 'Networking', value: 'DNS, Load Balancers, Firewalls' },
                { label: 'Databases', value: 'PostgreSQL, Oracle DB' },
              ].map(({ label, value }) => (
                <p key={label} className="text-gray-700">
                  <span className="font-bold text-gray-800">• {label}:</span> {value}
                </p>
              ))}
            </div>
          </section>

          {/* ── EXPERIENCE ── */}
          <section className="mb-5">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3 border-l-4 border-cyan-500 pl-3">
              Experience
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: 'Jr. DevOps Engineer',
                  company: 'Qualtech Edge',
                  period: 'September 2025 – Present',
                  location: 'New Delhi',
                  bullets: [
                    'Managed and optimized GitLab CI/CD pipelines for multi-WAR WildFly application deployments, improving deployment reliability and reducing failure rates.',
                    'Diagnosed and resolved recurring pipeline issues including dependency conflicts and smoke test failures, minimizing deployment downtime.',
                    'Administered Oracle database operations supporting production deployments, including schema imports and cascading error resolution.',
                    'Set up a Docker-based monitoring stack (Prometheus, Grafana, Alertmanager) for real-time infrastructure visibility.',
                    'Built and maintained an internal QMS portal using Node.js, React, and PostgreSQL.',
                  ],
                },
                {
                  title: 'DevOps Intern',
                  company: 'Infrasity',
                  period: 'December 2024 – February 2025',
                  location: 'New Delhi',
                  bullets: [
                    'Developed a CI/CD pipeline using GitHub Actions to automate application build, testing, and deployment, reducing manual effort by 40%.',
                    'Implemented Infrastructure as Code (IaC) principles using Terraform to provision and manage AWS resources, ensuring consistency and version control.',
                    'Configured Docker-based development environments, improving developer onboarding time and ensuring parity between local and production environments.',
                    'Collaborated with the development team to troubleshoot and resolve deployment issues, ensuring high availability and system reliability.',
                  ],
                },
                {
                  title: 'AWS Cloud Intern',
                  company: 'LinuxWorld Informatics Pvt. Ltd.',
                  period: 'June 2023 – August 2023',
                  location: 'New Delhi',
                  bullets: [
                    'Designed and deployed scalable cloud infrastructure on AWS using Docker and Linux to support high-performance applications.',
                    'Built and launched an automated food ordering bot service on AWS for a major e-commerce platform using LEX, Cognito, and DynamoDB.',
                    'Implemented cloud-based solutions that improved operational efficiency and supported critical business functions.',
                  ],
                },
              ].map(({ title, company, period, location, bullets }) => (
                <div key={title}>
                  <div className="flex items-start justify-between mb-0.5">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
                      <p className="text-xs font-semibold text-cyan-600">{company}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-xs text-gray-500">{period}</p>
                      <p className="text-xs text-gray-400">{location}</p>
                    </div>
                  </div>
                  <ul className="space-y-0.5 mt-1">
                    {bullets.map((b, i) => (
                      <li key={i} className="text-xs text-gray-600 flex gap-2">
                        <span className="text-cyan-500 flex-shrink-0 mt-0.5">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROJECTS ── */}
          <section className="mb-5">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3 border-l-4 border-cyan-500 pl-3">
              Projects
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-start justify-between mb-0.5">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">PreProdSync: A Kubernetes Solution for DevOps Integration and Testing</h3>
                    <p className="text-xs text-cyan-600">github.com/Kumar22Ankit/PreProdSync-test</p>
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-4">Dec 2024 – Feb 2025</span>
                </div>
                <ul className="space-y-0.5 mt-1">
                  <li className="text-xs text-gray-600 flex gap-2"><span className="text-cyan-500 flex-shrink-0">•</span>Engineered a robust, Kubernetes-based CI/CD solution to automate integration and testing of new features in a preproduction environment.</li>
                  <li className="text-xs text-gray-600 flex gap-2"><span className="text-cyan-500 flex-shrink-0">•</span><strong>Technologies:</strong> Kubernetes, Docker, GitHub Actions, ArgoCD, Node.js, React, PostgreSQL</li>
                  <li className="text-xs text-gray-600 flex gap-2"><span className="text-cyan-500 flex-shrink-0">•</span>Reduced deployment timeline by 30% by automating build and container orchestration using Kubernetes.</li>
                  <li className="text-xs text-gray-600 flex gap-2"><span className="text-cyan-500 flex-shrink-0">•</span>Ensured system reliability by implementing an automated testing framework for every new commit.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start justify-between mb-0.5">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Portfolio Deployment Using GitHub Actions and ArgoCD</h3>
                    <p className="text-xs text-cyan-600">github.com/Kumar22Ankit/Ankit-kumar-Portfolio</p>
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-4">Jun 2024 – Jul 2024</span>
                </div>
                <ul className="space-y-0.5 mt-1">
                  <li className="text-xs text-gray-600 flex gap-2"><span className="text-cyan-500 flex-shrink-0">•</span>Automated the end-to-end deployment of a portfolio website to production using a CI/CD pipeline.</li>
                  <li className="text-xs text-gray-600 flex gap-2"><span className="text-cyan-500 flex-shrink-0">•</span><strong>Technologies:</strong> GitHub Actions, ArgoCD, AWS S3, HTML, CSS</li>
                  <li className="text-xs text-gray-600 flex gap-2"><span className="text-cyan-500 flex-shrink-0">•</span>Utilized ArgoCD for GitOps management, maintaining state synchronization between the git repository and the live environment.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── EDUCATION ── */}
          <section className="mb-5">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3 border-l-4 border-cyan-500 pl-3">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">B.Tech — Computer Science & Engineering</h3>
                  <p className="text-xs text-gray-500">Minor in Cloud Computing · IEC College of Engineering and Technology · Greater Noida, UP</p>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0 ml-4">2022 – 2025</span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Diploma — Production Engineering</h3>
                  <p className="text-xs text-gray-500">G.B Pant Institute of Technology · New Delhi</p>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0 ml-4">2019 – 2022</span>
              </div>
            </div>
          </section>

          {/* ── CERTIFICATIONS ── */}
          <section className="mb-5">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3 border-l-4 border-cyan-500 pl-3">
              Certifications
            </h2>
            <div className="space-y-1.5">
              {[
                { name: 'Google Cloud Digital Leader Training Specialization', issuer: 'Coursera', year: '2023' },
                { name: 'AWS Cloud Computing Intern', issuer: 'LinuxWorld Informatics Pvt. Ltd.', year: '2023' },
              ].map(({ name, issuer, year }) => (
                <p key={name} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-cyan-500 flex-shrink-0">•</span>
                  <span><strong className="text-gray-800">{name}</strong> — {issuer} · {year}</span>
                </p>
              ))}
            </div>
          </section>

          {/* ── INVOLVEMENT ── */}
          <section>
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3 border-l-4 border-cyan-500 pl-3">
              Involvement
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Founder & Contributor',
                  org: 'Abhiyantrik · IEC College of Engineering and Technology',
                  period: 'January 2024 – January 2026',
                  bullets: [
                    'Founded and established a technical community with over 100 members, partnering with educational institutions to promote STEM education.',
                    'Organized workshops and events on emerging technologies to encourage learning and diversity in tech.',
                  ],
                },
                {
                  title: 'GDG on Campus Organizer',
                  org: 'Google Developer Groups on Campus · IEC College',
                  period: 'September 2024 – August 2025',
                  bullets: [
                    'Led a GDG chapter, organizing events on cloud computing, AI, and open-source technologies for 200+ students.',
                    'Managed a volunteer team of 15 members to ensure smooth execution of events, resulting in high participant engagement.',
                  ],
                },
                {
                  title: 'Contributor',
                  org: 'Medium',
                  period: 'March 2022 – Present',
                  bullets: [
                    'Produced in-depth technical articles on cloud computing, DevOps, and containerization.',
                    'Focused on creating practical, step-by-step guides and use cases to help readers implement real-world solutions.',
                  ],
                },
                {
                  title: 'National Cadet Corps Cadet',
                  org: 'G. B. Pant Institute of Technology, 4 Delhi Battalion',
                  period: 'August 2020 – May 2022',
                  bullets: [
                    'Commanded a platoon of 60 cadets at the national level, demonstrating strong leadership, teamwork, and discipline.',
                    'Achieved a 100% pass rate and top unit recognition in regional evaluations.',
                  ],
                },
              ].map(({ title, org, period, bullets }) => (
                <div key={title}>
                  <div className="flex items-start justify-between mb-0.5">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
                      <p className="text-xs text-cyan-600">{org}</p>
                    </div>
                    <span className="text-xs text-gray-500 flex-shrink-0 ml-4">{period}</span>
                  </div>
                  <ul className="space-y-0.5 mt-1">
                    {bullets.map((b, i) => (
                      <li key={i} className="text-xs text-gray-600 flex gap-2">
                        <span className="text-cyan-500 flex-shrink-0">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          #resume-page { padding-top: 0 !important; }
        }
      `}</style>
    </>
  );
};

export default Resume;
