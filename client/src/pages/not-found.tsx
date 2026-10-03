import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

// Floating cloud icons scattered around
const CLOUDS = [
  { x: '8%',  y: '15%', size: 'text-4xl', opacity: 0.07, delay: 0 },
  { x: '85%', y: '10%', size: 'text-5xl', opacity: 0.05, delay: 0.5 },
  { x: '75%', y: '70%', size: 'text-3xl', opacity: 0.08, delay: 0.3 },
  { x: '12%', y: '72%', size: 'text-6xl', opacity: 0.04, delay: 0.8 },
  { x: '50%', y: '5%',  size: 'text-2xl', opacity: 0.06, delay: 1.0 },
  { x: '92%', y: '40%', size: 'text-4xl', opacity: 0.05, delay: 0.2 },
  { x: '3%',  y: '45%', size: 'text-3xl', opacity: 0.07, delay: 0.7 },
];

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050a18 0%, #0d1b35 50%, #0a0e1a 100%)' }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: '#06b6d4' }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: '#a855f7' }}
      />

      {/* Scattered floating cloud icons */}
      {CLOUDS.map(({ x, y, size, opacity, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity, y: [0, -12, 0] }}
          transition={{ opacity: { delay, duration: 1 }, y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay } }}
          className={`absolute pointer-events-none ${size}`}
          style={{ left: x, top: y }}
        >
          ☁️
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 140, damping: 15, delay: 0.1 }}
          className="relative mb-2"
        >
          <span
            className="text-[9rem] md:text-[13rem] font-black leading-none select-none"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.25) 0%, rgba(168,85,247,0.2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 50px rgba(6,182,212,0.25))',
            }}
          >
            404
          </span>
        </motion.div>

        {/* Main slang line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-3"
        >
          <p className="text-2xl md:text-3xl font-black text-white leading-snug">
            The owner is{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              above the clouds ☁️
            </span>
          </p>
          <p className="text-slate-500 text-sm mt-2 font-mono">
            (Literally — running pods somewhere on AWS)
          </p>
        </motion.div>

        {/* Terminal error block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mx-auto max-w-md rounded-2xl p-5 mb-8 text-left font-mono text-sm"
          style={{
            background: 'rgba(6,182,212,0.04)',
            border: '1px solid rgba(6,182,212,0.15)',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-slate-500 text-xs ml-2">ankit@cloud:~$</span>
          </div>
          <p className="text-slate-400 text-xs">$ kubectl get page --namespace=this-url</p>
          <p className="text-red-400 text-xs mt-1">Error: page not found in any namespace</p>
          <p className="text-yellow-400/70 text-xs mt-1">Hint: Maybe it's still in a pending pod? 🤔</p>
          <p className="text-slate-600 text-xs mt-1">Status: <span className="text-cyan-400">Ankit</span> is deployed — this page is not.</p>
          <motion.p
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="text-cyan-400 text-xs mt-2"
          >
            ▌
          </motion.p>
        </motion.div>

        {/* Sub-message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-slate-500 text-sm mb-8"
        >
          This page got lost in transit between microservices. <br />
          Let's route you somewhere that actually exists.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(6,182,212,0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
          >
            <i className="fas fa-home" />
            Back to Base
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(6,182,212,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/#projects')}
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
          >
            <i className="fab fa-github" />
            View Projects
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
