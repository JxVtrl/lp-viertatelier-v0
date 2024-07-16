// components/PageTransition.tsx
import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const pageTransitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleStart = () => {
      if (pageTransitionRef.current) {
        // Animação de saída
        gsap.to(pageTransitionRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            gsap.set(pageTransitionRef.current, { opacity: 1 });
          },
        });
      }
    };

    const handleComplete = () => {
      if (pageTransitionRef.current) {
        // Animação de entrada
        gsap.fromTo(
          pageTransitionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }
        );
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  return <div ref={pageTransitionRef}>{children}</div>;
}
