import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Partner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Começa quando entra na tela, termina quando sai
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div ref={containerRef} className="relative my-24 py-14 border-b overflow-hidden">
      <motion.div
        style={{ x }}
        className="flex items-center justify-between whitespace-nowrap space-x-12 md:space-x-24 lg:space-x-32"
      >
        {["Alura", "Origamid", "Duolingo", "Udemy", "DankiCode"].map((partner, index) => (
          <div key={index} className="text-2xl md:text-3xl flex items-center justify-center">
            <a
              className="text-gray-500 hover:text-emerald-400 font-bold tracking-tight transition-colors duration-200"
              href="#"
            >
              {partner}
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partner;
