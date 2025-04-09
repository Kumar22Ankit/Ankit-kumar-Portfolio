import { SectionHeading } from "@/components/ui/section-heading";
import { CardHover } from "@/components/ui/card-hover";
import { articles } from "@/data/resume-data";
import { socialLinks } from "@/lib/constants";

export function Articles() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-secondary-dark">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Medium Articles" 
          description="I share my knowledge and insights about DevOps, Cloud Computing, and emerging technologies."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <CardHover 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <svg
                width="100%"
                height="192"
                viewBox="0 0 600 192"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-48 object-cover"
              >
                <rect width="600" height="192" fill={article.bgColor || "#1e293b"} />
                <g opacity="0.7">
                  {article.category === "CONTAINERIZATION" && (
                    <g>
                      <rect x="200" y="46" width="200" height="100" rx="5" fill="#e2e8f0" />
                      <rect x="220" y="66" width="160" height="60" rx="3" fill="#2563eb" />
                      <path d="M240 86H290M240 96H270M240 106H280" stroke="#fff" strokeWidth="2" />
                    </g>
                  )}
                  {article.category === "KUBERNETES" && (
                    <g>
                      <path d="M300 96C300 127.48 274.48 153 243 153C211.52 153 186 127.48 186 96C186 64.52 211.52 39 243 39C274.48 39 300 64.52 300 96Z" fill="#3970e4" opacity="0.5" />
                      <path d="M414 96C414 127.48 388.48 153 357 153C325.52 153 300 127.48 300 96C300 64.52 325.52 39 357 39C388.48 39 414 64.52 414 96Z" fill="#3970e4" opacity="0.5" />
                      <path d="M300 96L330 66M300 96L330 126" stroke="#fff" strokeWidth="3" />
                    </g>
                  )}
                  {article.category === "TERRAFORM" && (
                    <g>
                      <rect x="200" y="46" width="100" height="100" fill="#7b42bc" opacity="0.6" />
                      <rect x="300" y="46" width="100" height="100" fill="#7b42bc" opacity="0.8" />
                      <rect x="250" y="96" width="100" height="50" fill="#7b42bc" />
                    </g>
                  )}
                </g>
                <path d="M50 150H550M50 170H350" stroke="#6b7280" strokeWidth="2" opacity="0.3" />
              </svg>
              
              <div className="p-6">
                <span className="text-xs font-medium text-primary dark:text-primary-light">{article.category}</span>
                <h3 className="text-xl font-bold text-secondary dark:text-white mt-2 mb-3">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{article.date}</span>
                  <a 
                    href={article.url || socialLinks.medium} 
                    className="text-primary dark:text-primary-light hover:underline text-sm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </CardHover>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <a 
            href={socialLinks.medium} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-all transform hover:scale-105 inline-flex items-center relative overflow-hidden"
          >
            <i className="fab fa-medium mr-2"></i>
            <span className="relative z-10">View All Articles</span>
          </a>
        </div>
      </div>
    </section>
  );
}
