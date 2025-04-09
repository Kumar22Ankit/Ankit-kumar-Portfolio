import React from 'react';
import ArticleCard from '@/components/ui/article-card';

const ARTICLES = [
  {
    id: 1,
    title: 'Docker vs Kubernetes: When to Use What',
    category: 'Containerization',
    description: 'A comprehensive comparison of Docker and Kubernetes, explaining their use cases and how to choose between them.'
  },
  {
    id: 2,
    title: 'Building a Serverless Architecture on AWS',
    category: 'Cloud Computing',
    description: 'Step-by-step guide to creating a scalable and cost-effective serverless architecture using AWS Lambda and API Gateway.'
  },
  {
    id: 3,
    title: 'Implementing GitOps with ArgoCD',
    category: 'DevOps',
    description: 'Learn how to implement GitOps practices using ArgoCD for continuous deployment and application management.'
  }
];

const Articles: React.FC = () => {
  return (
    <section 
      id="articles" 
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary">
            Technical Articles
          </span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Sharing knowledge on cloud computing, DevOps, and emerging technologies
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article, index) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              category={article.category}
              description={article.description}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 border border-primary dark:border-secondary text-primary dark:text-secondary rounded-md shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
          >
            View All Articles <i className="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
