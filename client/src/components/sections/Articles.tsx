import React from 'react';
import ArticleCard from '@/components/ui/article-card';

const ARTICLES = [
  {
    id: 1,
    title: 'How to Choose Redis vs Memcached for Optimal Caching Performance',
    category: 'Caching Systems',
    description: 'A detailed comparison of Redis and Memcached, exploring their features, performance characteristics, and ideal use cases for modern applications.',
    link: 'https://medium.com/@ankitkumar6034651/how-to-choose-redis-vs-memcached-for-optimal-caching-performance-39af21d18843'
  },
  {
    id: 2,
    title: 'How NGINX Outpaces Apache: Unveiling the Preferred Web Server Choice',
    category: 'Web Servers',
    description: 'An in-depth analysis of why NGINX has become the preferred choice over Apache for modern web applications, with performance benchmarks and architecture insights.',
    link: 'https://medium.com/@ankitkumar6034651/how-nginx-outpaces-apache-unveiling-the-preferred-web-server-choice-15adca09955c'
  },
  {
    id: 3,
    title: 'Empowering Innovation: Unveiling Our Private Cloud with OpenStack Mastery',
    category: 'Cloud Computing',
    description: 'A comprehensive guide to building and managing a private cloud infrastructure using OpenStack, offering organizations control, customization, and cost-efficiency.',
    link: 'https://medium.com/aws-tip/empowering-innovation-unveiling-our-private-cloud-with-openstack-mastery-429b0724a0bc'
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
              link={article.link}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://medium.com/@ankitkumar6034651" 
            target="_blank"
            rel="noopener noreferrer"
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
