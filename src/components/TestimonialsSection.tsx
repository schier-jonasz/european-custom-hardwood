import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The craftsmanship is absolutely stunning. Our new hardwood staircase has become the centerpiece of our home. Every detail is perfect.",
    name: "Michael & Sarah K.",
    project: "Custom Staircase",
  },
  {
    quote: "Professional, precise, and passionate about their work. The floor refinishing exceeded our expectations — it looks brand new.",
    name: "James T.",
    project: "Floor Refinishing",
  },
  {
    quote: "We've worked with many contractors, but none compare to the quality and dedication of Custom European Hardwood. True artisans.",
    name: "Elena V.",
    project: "Custom Flooring & Railings",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-accent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-accent-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background p-8 border border-border"
            >
              <Quote className="w-6 h-6 text-walnut/40 mb-4" />
              <p className="font-sans text-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-serif text-sm text-foreground">{t.name}</p>
                <p className="font-sans text-xs text-muted-foreground">{t.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
