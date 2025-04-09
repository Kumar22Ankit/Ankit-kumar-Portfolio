import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { handleDownloadResume } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // In a real implementation, send this data to a server
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-16 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-12 text-center font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary">
            Get In Touch
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white transition-all" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Your email" 
                          {...field} 
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white transition-all" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Subject of your message" 
                          {...field} 
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white transition-all" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          {...field} 
                          rows={5}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white transition-all" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary dark:bg-secondary text-white rounded-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <i className="fas fa-circle-notch fa-spin mr-2"></i> Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 dark:bg-secondary/10 rounded-full mr-4">
                    <i className="fas fa-envelope text-primary dark:text-secondary"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a 
                      href="mailto:Ankitkumar6034651@gmail.com" 
                      className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-secondary transition-colors"
                    >
                      Ankitkumar6034651@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 dark:bg-secondary/10 rounded-full mr-4">
                    <i className="fab fa-linkedin text-primary dark:text-secondary"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/ankit-kumar-a20478230" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-secondary transition-colors"
                    >
                      linkedin.com/in/ankit-kumar-a20478230
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 dark:bg-secondary/10 rounded-full mr-4">
                    <i className="fab fa-github text-primary dark:text-secondary"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                    <a 
                      href="https://github.com/Kumar22Ankit" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-secondary transition-colors"
                    >
                      github.com/Kumar22Ankit
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Let's connect</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Feel free to reach out for job opportunities, collaborations, or just to say hello!
                </p>
                <Button 
                  onClick={handleDownloadResume}
                  className="inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-md hover:bg-primary/20 dark:hover:bg-secondary/20 transition-colors"
                >
                  <i className="fas fa-download mr-2"></i> Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
