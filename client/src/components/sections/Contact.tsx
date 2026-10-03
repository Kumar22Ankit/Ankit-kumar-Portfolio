import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { handleDownloadResume } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/ui/AnimatedSection';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const CONTACT_INFO = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'Ankitkumar6034651@gmail.com',
    href: 'mailto:Ankitkumar6034651@gmail.com',
    color: '#06b6d4',
  },
  {
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ankit-kumar-a20478230',
    href: 'https://linkedin.com/in/ankit-kumar-a20478230',
    color: '#0A66C2',
  },
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    value: 'github.com/Kumar22Ankit',
    href: 'https://github.com/Kumar22Ankit',
    color: '#fff',
  },
];

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({ title: 'Message sent!', description: "Thank you for reaching out. I'll get back to you soon." });
      form.reset();
    } catch {
      toast({ title: 'Error', description: 'Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #06b6d4, #a855f7)' }} />

      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Let's Talk</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Open to job opportunities, collaborations, or just to say hello!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div
              className="p-[1px] rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(168,85,247,0.3))' }}
            >
              <div className="glass p-7 rounded-2xl" style={{ background: 'rgba(10,15,30,0.9)' }}>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-400 text-xs font-semibold uppercase tracking-wide">Name</FormLabel>
                            <FormControl>
                              <input
                                placeholder="Your name"
                                {...field}
                                className="glow-input"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-400 text-xs font-semibold uppercase tracking-wide">Email</FormLabel>
                            <FormControl>
                              <input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                                className="glow-input"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400 text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-400 text-xs font-semibold uppercase tracking-wide">Subject</FormLabel>
                          <FormControl>
                            <input
                              placeholder="What's this about?"
                              {...field}
                              className="glow-input"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-400 text-xs font-semibold uppercase tracking-wide">Message</FormLabel>
                          <FormControl>
                            <textarea
                              placeholder="Your message..."
                              rows={5}
                              {...field}
                              className="glow-input resize-none"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )}
                    />

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(6,182,212,0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl font-semibold text-white text-sm relative overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <i className="fas fa-circle-notch fa-spin" /> Sending...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane" /> Send Message
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                </Form>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact info sidebar */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2 space-y-4">
            {CONTACT_INFO.map(({ icon, label, value, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 4, boxShadow: `0 0 20px ${color}15` }}
                className="glass-card p-4 rounded-xl flex items-center gap-4 group cursor-pointer block no-underline"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm transition-all duration-200"
                  style={{ background: `${color}12`, border: `1px solid ${color}25`, color }}
                >
                  <i className={icon} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-600 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-slate-300 text-sm font-medium truncate group-hover:text-cyan-400 transition-colors duration-200">
                    {value}
                  </p>
                </div>
                <i className="fas fa-arrow-right text-xs text-slate-700 group-hover:text-cyan-400 transition-colors ml-auto flex-shrink-0" />
              </motion.a>
            ))}

            {/* Resume download card */}
            <div className="glass-card p-5 rounded-xl mt-4">
              <p className="text-slate-300 text-sm font-semibold mb-1">Download Resume</p>
              <p className="text-slate-600 text-xs mb-4">Get a copy of my latest resume in PDF format.</p>
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(168,85,247,0.2))', border: '1px solid rgba(6,182,212,0.25)' }}
              >
                <i className="fas fa-download text-cyan-400" />
                <span className="text-slate-200">Download CV</span>
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
