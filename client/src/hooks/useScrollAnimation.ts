import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-scroll-animation]');
    const triggers: ScrollTrigger[] = [];
    
    elements.forEach((element) => {
      const animationType = element.getAttribute('data-scroll-animation');
      
      let trigger: ScrollTrigger | undefined;
      
      if (animationType === 'fade-up') {
        const anim = gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none',
              onRefresh: (self) => triggers.push(self),
            },
          }
        );
        trigger = anim.scrollTrigger;
      } else if (animationType === 'fade-in') {
        const anim = gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
        trigger = anim.scrollTrigger;
      } else if (animationType === 'scale') {
        const anim = gsap.fromTo(
          element,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
        trigger = anim.scrollTrigger;
      }
      
      if (trigger) triggers.push(trigger);
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach(trigger => trigger.kill());
      gsap.set(elements, { clearProps: 'all' });
    };
  }, []);
}

export function useParallax(ref: React.RefObject<HTMLElement>, speed: number = 0.5) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let trigger: ScrollTrigger | undefined;
    
    const anim = gsap.to(element, {
      y: () => -window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element.parentElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    
    trigger = anim.scrollTrigger;
    ScrollTrigger.refresh();

    return () => {
      if (trigger) trigger.kill();
      gsap.set(element, { clearProps: 'all' });
    };
  }, [ref, speed]);
}
