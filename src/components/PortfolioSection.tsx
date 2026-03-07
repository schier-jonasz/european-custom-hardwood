import { motion } from "framer-motion";
import portfolioFlooring from "@/assets/portfolio-flooring.jpg";
import portfolioRailing from "@/assets/portfolio-railing.jpg";
import portfolioStaircase from "@/assets/portfolio-staircase.jpg";
import portfolioRefinish from "@/assets/portfolio-refinish.jpg";
import portfolioInterior from "@/assets/portfolio-interior.jpg";
import heroStairs from "@/assets/hero-stairs.jpg";

const projects = [
  { src: portfolioFlooring, alt: "Herringbone walnut hardwood flooring", label: "Custom Flooring" },
  { src: portfolioStaircase, alt: "Curved hardwood staircase", label: "Staircase Design" },
  { src: portfolioRailing, alt: "Custom wood and glass railing", label: "Railings" },
  { src: portfolioInterior, alt: "Custom walnut wall paneling", label: "Interior Woodwork" },
  { src: portfolioRefinish, alt: "Before and after floor refinishing", label: "Refinishing" },
  { src: heroStairs, alt: "European oak curved staircase", label: "Bespoke Stairs" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Portfolio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex items-end">
                <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-serif text-lg text-cream">{project.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Social Media
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            See how we work behind the scenes
          </h3>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            We love sharing what we create and how we do it — sometimes in a light-hearted,
            playful way and sometimes in a more technical, professional tone. If you are
            curious to see how we constantly try to do our craft as well as possible, have a
            look at our short reels and videos on YouTube, TikTok or Facebook.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#"
              aria-label="Visit our YouTube channel"
              className="px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              YouTube
            </a>
            <a
              href="#"
              aria-label="Visit our TikTok profile"
              className="px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              TikTok
            </a>
            <a
              href="#"
              aria-label="Visit our Facebook page"
              className="px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
