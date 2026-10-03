import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_STEPS = [
  'Initializing environment...',
  'Connecting to cloud...',
  'Loading DevOps stack...',
  'Deploying portfolio...',
];

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 1.4;
      });
    }, 25);

    // Step cycling
    const stepInterval = setInterval(() => {
      setStep((s) => Math.min(s + 1, LOADING_STEPS.length - 1));
    }, 500);

    // Complete after ~1.8s
    const done = setTimeout(onComplete, 1900);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #050a18 0%, #0d1b35 50%, #0a0e1a 100%)' }}
    >
      {/* Animated grid bg */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{ background: '#06b6d4' }}
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{ background: '#a855f7' }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo / icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(168,85,247,0.2))',
            border: '2px solid rgba(6,182,212,0.4)',
            boxShadow: '0 0 40px rgba(6,182,212,0.3)',
          }}
        >
          <i className="fas fa-terminal" style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-3xl font-black text-white tracking-tight">
            Ankit <span style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Kumar</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Jr. DevOps Engineer</p>
        </motion.div>

        {/* Terminal-style step display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs font-mono text-cyan-400 min-h-[1.5rem]"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              $ {LOADING_STEPS[step]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
              boxShadow: '0 0 8px rgba(6,182,212,0.6)',
            }}
          />
        </div>

        <p className="text-slate-600 text-xs">{Math.min(Math.round(progress), 100)}%</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
