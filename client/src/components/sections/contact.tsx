import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialLinks } from "@/lib/constants";
import { CardHover } from "@/components/ui/card-hover";
import { SocialIcon } from "@/components/ui/social-icon";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-secondary-dark">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Contact Me" 
          description="Have a project in mind or just want to connect? I'd love to hear from you!"
        />
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2" data-aos="fade-right">
            <CardHover className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-light dark:border-secondary-dark dark:text-white" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-light dark:border-secondary-dark dark:text-white" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-light dark:border-secondary-dark dark:text-white" 
                    placeholder="Project Collaboration" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-light dark:border-secondary-dark dark:text-white" 
                    placeholder="Your message here..." 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors relative overflow-hidden disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </CardHover>
          </div>
          
          <div className="lg:w-1/2" data-aos="fade-left">
            <CardHover className="p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Email</h4>
                    <a 
                      href={`mailto:${socialLinks.email}`} 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                    >
                      {socialLinks.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Phone</h4>
                    <a 
                      href={`tel:${socialLinks.phone}`} 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                    >
                      {socialLinks.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">{socialLinks.location}</p>
                  </div>
                </div>
              </div>
            </CardHover>
            
            <CardHover className="p-8">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-6">Connect With Me</h3>
              
              <div className="flex justify-around">
                <SocialIcon 
                  icon="fa-linkedin-in" 
                  href={socialLinks.linkedin} 
                  label="LinkedIn"
                  size="lg"
                />
                
                <SocialIcon 
                  icon="fa-github" 
                  href={socialLinks.github} 
                  label="GitHub"
                  size="lg"
                />
                
                <SocialIcon 
                  icon="fa-medium-m" 
                  href={socialLinks.medium} 
                  label="Medium"
                  size="lg"
                />
                
                <SocialIcon 
                  icon="fa-envelope" 
                  href={`mailto:${socialLinks.email}`} 
                  label="Email"
                  size="lg"
                />
              </div>
            </CardHover>
          </div>
        </div>
      </div>
    </section>
  );
}
