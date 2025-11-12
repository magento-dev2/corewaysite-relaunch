"use client";

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export function ScrollFadeIn({ children, delay = 0, direction = 'up', duration = 1 }: ScrollFadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const directionProps = {
      up: { y: 100 },
      down: { y: -100 },
      left: { x: 100 },
      right: { x: -100 }
    };

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        ...directionProps[direction]
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [delay, direction, duration]);

  return <div ref={elementRef}>{children}</div>;
}

interface ScrollScaleProps {
  children: ReactNode;
  delay?: number;
}

export function ScrollScale({ children, delay = 0 }: ScrollScaleProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [delay]);

  return <div ref={elementRef}>{children}</div>;
}

interface ScrollStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
}

export function ScrollStagger({ children, staggerDelay = 0.1 }: ScrollStaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.children;

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 60,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: staggerDelay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [staggerDelay]);

  return <div ref={containerRef}>{children}</div>;
}

interface ScrollParallaxProps {
  children: ReactNode;
  speed?: number;
}

export function ScrollParallax({ children, speed = 0.5 }: ScrollParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      y: () => -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, [speed]);

  return <div ref={elementRef}>{children}</div>;
}

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
}

export function ScrollReveal({ children, direction = 'vertical' }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || !overlayRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse'
      }
    });

    if (direction === 'horizontal') {
      tl.to(overlayRef.current, {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease: 'power3.inOut'
      });
    } else {
      tl.to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
        ease: 'power3.inOut'
      });
    }
  }, [direction]);

  return (
    <div ref={elementRef} className="relative overflow-hidden">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 z-10"
      />
      {children}
    </div>
  );
}

interface ScrollPinProps {
  children: ReactNode;
  pinSpacing?: boolean;
}

export function ScrollPin({ children, pinSpacing = true }: ScrollPinProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    ScrollTrigger.create({
      trigger: elementRef.current,
      start: 'top top',
      end: '+=500',
      pin: true,
      pinSpacing,
      anticipatePin: 1
    });
  }, [pinSpacing]);

  return <div ref={elementRef}>{children}</div>;
}

interface ScrollRotateProps {
  children: ReactNode;
  degrees?: number;
}

export function ScrollRotate({ children, degrees = 360 }: ScrollRotateProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        rotation: -degrees / 2
      },
      {
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [degrees]);

  return <div ref={elementRef}>{children}</div>;
}

interface ScrollCounterProps {
  children: (value: number) => ReactNode;
  from?: number;
  to: number;
  duration?: number;
}

export function ScrollCounter({ children, from = 0, to, duration = 2 }: ScrollCounterProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef({ value: from });

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.to(counterRef.current, {
      value: to,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      onUpdate: () => {
        if (elementRef.current) {
          elementRef.current.textContent = Math.round(counterRef.current.value).toString();
        }
      }
    });
  }, [from, to, duration]);

  return <div ref={elementRef}>{children(from)}</div>;
}
