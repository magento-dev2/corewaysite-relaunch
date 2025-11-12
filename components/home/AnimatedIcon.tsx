"use client";

import { useEffect, useRef, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface AnimatedIconProps {
  animationPath: string;
  staticFallbackPath: string;
  ariaLabel: string;
  className?: string;
  playOnHover?: boolean;
  autoplay?: boolean;
}

export default function AnimatedIcon({
  animationPath,
  staticFallbackPath,
  ariaLabel,
  className = '',
  playOnHover = false,
  autoplay = true,
}: AnimatedIconProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<unknown>(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldAnimate(!prefersReducedMotion.matches);

    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      setShouldAnimate(!e.matches);
    };

    prefersReducedMotion.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      prefersReducedMotion.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate) return;

    fetch(animationPath)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => setShouldAnimate(false));
  }, [animationPath, shouldAnimate]);

  useEffect(() => {
    if (!lottieRef.current || !isInView) return;

    if (autoplay && !playOnHover) {
      lottieRef.current.play();
    } else {
      lottieRef.current.stop();
    }
  }, [isInView, autoplay, playOnHover]);

  const handleMouseEnter = () => {
    if (playOnHover && lottieRef.current && isInView) {
      lottieRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (playOnHover && lottieRef.current) {
      lottieRef.current.stop();
    }
  };

  if (!shouldAnimate || !animationData) {
    return (
      <div
        ref={containerRef}
        className={className}
        aria-hidden="true"
      >
        <img
          src={staticFallbackPath}
          alt=""
          className="w-full h-full opacity-80"
          style={{
            filter: 'brightness(0) saturate(100%) invert(65%) sepia(12%) saturate(1200%) hue-rotate(180deg) brightness(95%) contrast(95%)'
          }}
        />
        <span className="sr-only">{ariaLabel}</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={false}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid meet',
          progressiveLoad: true,
        }}
      />
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
}
