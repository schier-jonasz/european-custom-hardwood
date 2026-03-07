import { motion } from "framer-motion";
import { Layers, ArrowUpRight, Fence, Hammer, RefreshCw, PencilRuler } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Custom Hardwood Flooring",
    description: "Bespoke hardwood floors designed and installed to transform any space with warmth and elegance.",
  },
  {
    icon: ArrowUpRight,
    title: "Hardwood Staircases",
    description: "Stunning custom staircases crafted from premium European hardwoods, designed to be the centerpiece of your home.",
  },
  {
    icon: Fence,
    title: "Wood Railings & Balustrades",
    description: "Elegant railings and balustrades that blend safety with artistry, handcrafted to complement any interior.",
  },
  {
    icon: Hammer,
    title: "Wood Installation",
    description: "Expert installation of hardwood elements with precision fitting and flawless finishing.",
  },
  {
    icon: RefreshCw,
    title: "Floor Refinishing & Restoration",
    description: "Breathe new life into worn hardwood floors with our professional refinishing and restoration services.",
  },
  {
    icon: PencilRuler,
    title: "Custom Interior Woodwork",
    description: "From wall paneling to built-in cabinetry, we create custom wood features tailored to your vision.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-background border border-border hover:border-walnut/30 transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-walnut mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
