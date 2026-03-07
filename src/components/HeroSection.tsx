import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stairs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Custom European hardwood staircase craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm font-sans tracking-[0.3em] uppercase text-cream/70 mb-6"
        >
          Handcrafted Excellence
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
        >
          European Craftsmanship in Custom Hardwood
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Handcrafted hardwood floors, staircases, and interior wood installations
          built with precision and passion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#portfolio">View Our Work</a>
          </Button>
          <Button variant="heroOutline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-charcoal" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
