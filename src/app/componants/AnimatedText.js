import { useAnimation, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimatedText({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset animation for every visibility change (when it enters viewport)
          controls.start({ opacity: 1, y: 0 });
        } else {
          // Reset it to initial state when it's out of viewport
          controls.start({ opacity: 0, y: 50 });
        }
      },
      { threshold: 1 }  // 20% visibility to trigger animation
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 40, y: 50 }}
      animate={controls}
      transition={{ duration: 1.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}