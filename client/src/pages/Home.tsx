import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Articles from '@/components/sections/Articles';
import Contact from '@/components/sections/Contact';
import LoadingScreen from '@/components/ui/LoadingScreen';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Ankit Kumar | DevOps Engineer';
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Articles />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
