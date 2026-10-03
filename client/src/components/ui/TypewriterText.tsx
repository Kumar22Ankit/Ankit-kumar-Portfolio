import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  pauseDuration?: number;
  cursor?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  className = '',
  speed = 80,
  pauseDuration = 1800,
  cursor = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, speed / 2);
      return () => clearTimeout(timer);
    }

    if (displayedText.length < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsPaused(true);
    }
  }, [displayedText, isDeleting, isPaused, currentIndex, texts, speed, pauseDuration]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span className="animate-blink" style={{ color: '#06b6d4', fontWeight: 300 }}>|</span>
      )}
    </span>
  );
};

export default TypewriterText;
