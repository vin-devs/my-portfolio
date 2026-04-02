"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Smoother exit to reveal the Hero section
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        // Randomize increments to feel like "data processing"
        const increment = Math.random() * (prev > 80 ? 2 : 15);
        return prev + increment;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700",
        progress === 100 ? "opacity-0" : "opacity-100",
      )}
    >
      {/* Background Grid Pattern (Matches your Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 flex flex-col items-center space-y-10">
        {/* The Monogram Badge */}
        <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/20 animate-pulse">
          <span className="text-primary-foreground font-mono font-black text-2xl tracking-tighter">
            &lt;V/&gt;
          </span>
        </div>

        <div className="space-y-6 w-72 text-center">
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/70">
              Full Stack Solutions Architect
            </p>
            <p className="text-xs font-mono text-muted-foreground animate-pulse">
              {progress < 40 && "Fetching Modules..."}
              {progress >= 40 && progress < 80 && "Optimizing Assets..."}
              {progress >= 80 && "Finalizing Build..."}
            </p>
          </div>

          {/* Minimalist Progress Bar */}
          <div className="relative w-full">
            <div className="w-full bg-muted/30 rounded-full h-[3px] overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_8px_rgba(var(--primary),0.6)]"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>

            {/* Monospace Counter */}
            <div className="flex justify-between mt-3">
              <span className="text-[10px] font-mono text-muted-foreground/50">
                EST. 2026
              </span>
              <span className="text-[10px] font-mono font-bold text-primary tracking-widest">
                {Math.round(Math.min(progress, 100))}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
