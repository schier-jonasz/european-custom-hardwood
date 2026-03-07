import { motion } from "framer-motion";
import woodDetail from "@/assets/wood-detail.jpg";
import { Check } from "lucide-react";

const values = [
  "Handcrafted with precision and care",
  "Premium European hardwoods",
  "Built for durability and longevity",
  "Meticulous attention to every detail",
  "Custom solutions for every home",
  "Traditional joinery techniques",
];

const CraftsmanshipSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              The Art of Fine Woodwork
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              We believe that great woodwork is more than just construction — it's an art form.
              Every grain pattern tells a story, every joint reflects our commitment to perfection.
              We use time-honored European techniques combined with modern precision to create
              pieces that will be cherished for generations.
            </p>
            <ul className="space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-walnut flex-shrink-0" />
                  <span className="font-sans text-sm text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden"
          >
            <img
              src={woodDetail}
              alt="Close-up of dovetail wood joinery detail"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
