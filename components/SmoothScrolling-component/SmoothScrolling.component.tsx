// components/SmoothScrolling.tsx
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();
  console.log("carreguei");

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      console.log(target);

      if (
        target.tagName === "A" ||
        target.tagName === "a" ||
        target.tagName === "nav" ||
        target.tagName === "li" ||
        (target.tagName === "button" &&
          target.getAttribute("href")?.startsWith("#"))
      ) {
        console.log("começa com #");
        event.preventDefault();
        const id = target.getAttribute("href")!.substring(1);
        const element = document.getElementById(id);
        if (element) {
          lenis?.scrollTo(element);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
