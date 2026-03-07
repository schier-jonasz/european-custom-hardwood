import { motion } from "framer-motion";
import craftsmanImage from "@/assets/craftsman-workshop.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden"
          >
            <img
              src={craftsmanImage}
              alt="European craftsman hand planing hardwood"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Built on Craftsmanship, Precision & Passion for Wood
            </h2>
            <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>
                Custom European Hardwood is a company rooted in the traditions of European woodworking.
                Every project we take on is handcrafted with meticulous attention to detail, from selecting
                the finest hardwoods to the final finish.
              </p>
              <p>
                We specialize in custom projects — each one unique, each one built to last generations.
                Our team brings decades of combined experience and an unwavering dedication to quality
                that sets us apart in the industry.
              </p>
              <p>
                From elegant staircases to pristine hardwood floors, we apply European craftsmanship
                standards to every piece of wood we touch.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { number: "20+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-walnut">{stat.number}</p>
                  <p className="text-sm font-sans text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
