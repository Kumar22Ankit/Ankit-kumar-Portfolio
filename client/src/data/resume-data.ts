import { ResumeData } from "@/types/data";

export const skills: ResumeData["skills"] = [
  {
    name: "Cloud Providers",
    icon: "fas fa-cloud",
    items: [
      { name: "AWS", level: 90 },
      { name: "Google Cloud", level: 85 },
      { name: "OpenStack", level: 75 }
    ]
  },
  {
    name: "Containerization",
    icon: "fab fa-docker",
    items: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 85 }
    ]
  },
  {
    name: "Infrastructure as Code",
    icon: "fas fa-code",
    items: [
      { name: "Terraform", level: 90 },
      { name: "Ansible", level: 80 }
    ]
  },
  {
    name: "Programming Languages",
    icon: "fas fa-code",
    items: [
      { name: "Python", level: 90 },
      { name: "Bash", level: 85 },
      { name: "C++", level: 70 }
    ]
  },
  {
    name: "CI/CD Tools",
    icon: "fas fa-sync-alt",
    items: [
      { name: "GitHub Actions", level: 95 },
      { name: "ArgoCD", level: 90 }
    ]
  },
  {
    name: "Operating Systems",
    icon: "fas fa-server",
    items: [
      { name: "Ubuntu", level: 95 },
      { name: "Red Hat", level: 85 },
      { name: "Windows", level: 80 }
    ]
  }
];

export const experience: ResumeData["experience"] = [
  {
    company: "Edunet Foundation",
    role: "Cloud Intern",
    period: "July 2024 – August 2024",
    achievements: [
      "Participated in industry training sessions and worked on assigned projects",
      "Gained hands-on experience in IT and management consulting services",
      "Followed company policies and procedures throughout the internship"
    ]
  },
  {
    company: "Cloud Counselage Pvt. Ltd.",
    role: "Cloud Intern",
    period: "June 2024 – July 2024",
    achievements: [
      "Attended industry training sessions on cloud technologies",
      "Worked on assigned projects to apply learned concepts",
      "Gained practical experience in IT consulting services"
    ]
  },
  {
    company: "LinuxWorld Informatics Pvt. Ltd.",
    role: "Cloud Computing Intern",
    period: "June 2023 – August 2023",
    achievements: [
      "Designed and implemented user-friendly cloud infrastructure using AWS, Docker, Linux, and Networking",
      "Learned various AWS services and their industry-level use cases",
      "Created a project using AWS LEX, COGNITO, DynamoDB for a food ordering website bot service"
    ]
  }
];

export const education: ResumeData["education"] = [
  {
    institution: "IEC College of Engineering and Technology",
    degree: "Bachelor of Technology in Computer Science",
    period: "August 2022 – present",
    details: [
      "Pursuing B.Tech in Computer Science",
      "Focus on cloud computing, DevOps, and software development",
      "Active participation in technical communities and events"
    ]
  },
  {
    institution: "G.B Pant Institute of Technology",
    degree: "Diploma in Production Engineering",
    period: "August 2019 – April 2022",
    details: [
      "Completed Diploma with focus on engineering principles",
      "Participated in NCC as a cadet, developing leadership skills",
      "Led a platoon of 60 cadets with the motto \"Unity & Discipline\""
    ]
  }
];

export const projects: ResumeData["projects"] = [
  {
    title: "PreProdSync: A Kubernetes Solution",
    description: "A Kubernetes-based solution for integrating and testing features in a CI/CD pipeline, enabling streamlined development and deployment processes.",
    categories: ["kubernetes", "ci-cd"],
    technologies: ["Kubernetes", "Docker", "GitHub Actions", "ArgoCD", "Node.js", "PostgreSQL"],
    completed: "Completed in 2023",
    github: "https://github.com/Kumar22Ankit",
    bgColor: "#0e7490"
  },
  {
    title: "Two-Tier Architecture Deployment using Terraform",
    description: "Deployed a two-tier architecture on AWS using Terraform to create a modular and scalable infrastructure with separate web and application layers.",
    categories: ["terraform", "aws"],
    technologies: ["AWS", "Terraform", "VPC", "EC2", "IAM"],
    completed: "Completed in 2023",
    github: "https://github.com/Kumar22Ankit",
    bgColor: "#0284c7"
  },
  {
    title: "Portfolio Deployment Using GitHub Actions and ArgoCD",
    description: "Deployed a personal portfolio website using GitHub Actions for CI/CD and ArgoCD for GitOps management, ensuring automatic updates with each commit.",
    categories: ["ci-cd", "aws"],
    technologies: ["GitHub Actions", "ArgoCD", "AWS S3", "HTML", "CSS"],
    completed: "Completed in 2023",
    github: "https://github.com/Kumar22Ankit",
    live: "#",
    bgColor: "#0891b2"
  },
  {
    title: "EC2 Timekeeper: Automating Server Instances",
    description: "Harnesses serverless technology to automate EC2 instance scheduling based on company working hours, eliminating manual management and optimizing resource utilization.",
    categories: ["aws"],
    technologies: ["AWS", "Python", "EC2", "Lambda"],
    completed: "Completed in 2023",
    github: "https://github.com/Kumar22Ankit",
    bgColor: "#06b6d4"
  }
];

export const certifications: ResumeData["certifications"] = [
  {
    title: "Cloud Computing Certificate Workshop",
    issuer: "Cloud Counselsage Pvt. Ltd.",
    year: "2024",
    description: "Demonstrated proficiency in cloud infrastructure, services, and best practices. Gained hands-on experience with cloud technologies and architecture.",
    icon: "fas fa-cloud",
    url: "#"
  },
  {
    title: "Google Cloud Digital Leader Training",
    issuer: "Coursera",
    year: "2023",
    description: "Comprehensive understanding of Google Cloud Platform (GCP) services, architecture, and best practices. Equipped to design, deploy, and manage cloud-based solutions efficiently.",
    icon: "fab fa-google",
    url: "#"
  },
  {
    title: "AWS Cloud Computing Intern",
    issuer: "LinuxWorld Informatics Pvt. Ltd.",
    year: "2023",
    description: "Certified in managing and navigating AWS Cloud Computing for scalable solutions, seamless deployments, and optimal performance.",
    icon: "fab fa-aws",
    url: "#"
  }
];

export const articles: ResumeData["articles"] = [
  {
    title: "Docker in Production: Best Practices for Scalability",
    category: "CONTAINERIZATION",
    date: "Jun 15, 2023",
    description: "Exploring the nuances of running Docker in production environments. This article covers scaling strategies, security considerations, and performance optimizations.",
    url: "#",
    bgColor: "#0e7490"
  },
  {
    title: "Mastering Kubernetes Autoscaling for Dynamic Workloads",
    category: "KUBERNETES",
    date: "Aug 22, 2023",
    description: "A deep dive into Kubernetes autoscaling mechanisms. Learn how to configure Horizontal Pod Autoscaler, Vertical Pod Autoscaler, and Cluster Autoscaler for optimal resource utilization.",
    url: "#",
    bgColor: "#0891b2"
  },
  {
    title: "Building Reusable Terraform Modules for AWS Infrastructure",
    category: "TERRAFORM",
    date: "Oct 05, 2023",
    description: "Step-by-step guide to creating maintainable and reusable Terraform modules. Learn how to structure your code, handle inputs/outputs, and implement versioning for your AWS infrastructure.",
    url: "#",
    bgColor: "#06b6d4"
  }
];

export const involvement: ResumeData["involvement"] = [
  {
    organization: "Google Developer Groups (GDG) IEC College",
    role: "GDG on Campus Lead",
    period: "Sep 2024 – Present",
    responsibilities: [
      "Led IEC College's first GDG chapter, organizing workshops and events like Google's Gen AI Study Jam and GDG Solution's Challenge.",
      "Organised sessions on cloud computing, AI, and open-source tech, building partnerships to drive engagement.",
      "Managed a volunteer team for smooth execution and high participation."
    ],
    icon: "fab fa-google"
  },
  {
    organization: "Abhiyantrik",
    role: "Founder",
    period: "Jan 2024 – Present",
    responsibilities: [
      "Established a tech community that partners with educational institutions to promote STEM education.",
      "Organized workshops and events to encourage learning and inclusivity in tech.",
      "Led diversity initiatives and mentored students in STEM.",
      "Managed social media and content to boost community engagement."
    ],
    icon: "fas fa-users"
  },
  {
    organization: "Medium Contributor",
    role: "Technical Content Writer",
    period: "June 2022 - Present",
    responsibilities: [
      "Produce in-depth articles on cloud computing, DevOps, and emerging technologies like containerization and serverless architectures.",
      "Research the latest trends and tools to ensure the content is insightful for both beginners and professionals.",
      "Focus on creating practical, step-by-step guides, use cases, and project-based tutorials to help readers implement these solutions in real-world scenarios."
    ],
    icon: "fab fa-medium"
  },
  {
    organization: "NCC Cadet",
    role: "G. B. Pant Institute of Technology, 4 Delhi Battalion",
    period: "August 2020 – May 2022",
    responsibilities: [
      "Leadership: Commanded my college in Independence Day and other camps, following the motto \"Unity & Discipline.\"",
      "Skills Developed: Built leadership, teamwork, and coordination skills while leading a platoon of 60 cadets.",
      "Achievements: Achieved a 100% pass rate and top unit recognition in regional evaluations."
    ],
    icon: "fas fa-shield-alt"
  }
];

export const resumeData: ResumeData = {
  skills,
  experience,
  education,
  projects,
  certifications,
  articles,
  involvement
};
