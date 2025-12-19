
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage }) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (barFillRef.current) {
          if (entry.isIntersecting) {
            // Anima a entrada
            gsap.to(barFillRef.current, {
              width: `${percentage}%`,
              duration: 1.5,
              ease: 'power3.out',
              delay: 0.2,
            });
          } else {
            // Reseta ao sair
            gsap.to(barFillRef.current, {
              width: '0%',
              duration: 0.5,
              ease: 'power3.in',
            });
          }
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = componentRef.current;
    if (currentRef) {
      gsap.set(barFillRef.current, { width: '0%' });
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [percentage]);

  return (
    <div className="w-full" ref={componentRef}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-white uppercase tracking-wider">{label}</span>
        <span className="text-sm font-bold text-primary">{percentage}%</span>
      </div>
      <div className="w-full bg-surface-dark h-2.5">
        <div 
          ref={barFillRef}
          className="bg-primary h-2.5"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;