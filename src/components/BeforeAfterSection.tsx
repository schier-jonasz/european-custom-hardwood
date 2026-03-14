import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

import beforeFloor from "@/assets/before-floor.jpg";
import afterFloor from "@/assets/after-floor.jpg";
import beforeStairs from "@/assets/before-stairs.jpg";
import afterStairs from "@/assets/after-stairs.jpg";
import beforeRailing from "@/assets/before-railing.jpg";
import afterRailing from "@/assets/after-railing.jpg";
import beforeHerringbone from "@/assets/before-herringbone.jpg";
import afterHerringbone from "@/assets/after-herringbone.jpg";

const projects = [
  { before: beforeFloor, after: afterFloor, caption: "Hardwood Floor Refinishing", description: "Oak plank flooring restored to its original warmth and luster." },
  { before: beforeStairs, after: afterStairs, caption: "Custom Staircase Installation", description: "Complete staircase rebuild with European hardwood treads and iron balusters." },
  { before: beforeRailing, after: afterRailing, caption: "Railing & Balustrade Upgrade", description: "Worn wooden railing replaced with a modern wood-and-glass design." },
  { before: beforeHerringbone, after: afterHerringbone, caption: "Herringbone Parquet Restoration", description: "Damaged parquet floor sanded and refinished to a pristine glossy finish." },
];

interface ComparisonSliderProps {
  before: string;
  after: string;
  caption: string;
  description: string;
}

const ComparisonSlider = ({ before, after, caption, description }: ComparisonSliderProps) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden cursor-col-resize select-none rounded-sm"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* After image (full) */}
        <img src={after} alt={`After: ${caption}`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />

        {/* Before image (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <img src={before} alt={`Before: ${caption}`} className="block h-full object-cover" style={{ width: `${containerRef.current?.offsetWidth ?? 9999}px`, maxWidth: 'none' }} draggable={false} />
        </div>

        {/* Slider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-background/80 z-10" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 border-2 border-primary flex items-center justify-center shadow-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
              <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 text-xs font-sans font-medium tracking-widest uppercase px-2.5 py-1 rounded bg-foreground/70 text-background z-10">Before</span>
        <span className="absolute top-3 right-3 text-xs font-sans font-medium tracking-widest uppercase px-2.5 py-1 rounded bg-primary/80 text-primary-foreground z-10">After</span>
      </div>

      <div className="mt-4">
        <h3 className="font-serif text-lg text-foreground">{caption}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
};

const BeforeAfterSection = () => {
  return (
    <section id="transformations" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Transformations
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            Before &amp; After
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Drag the slider to see the craftsmanship behind every project — from worn surfaces to stunning hardwood finishes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ComparisonSlider {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
