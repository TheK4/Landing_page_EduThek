import portrait1 from "../assets/portrait1.jpg";
import portrait2 from "../assets/portrait2.jpg";
import portrait3 from "../assets/portrait3.jpg";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const easing = [0.25, 0.1, 0.25, 1];

const Testimonials = () => {
  return (
    <div id="depoimentos" className="flex flex-col justify-center items-center py-6 pb-24 my-6 border-b">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5, ease: easing }}
        className="tracking-tight text-gray-950 text-3xl font-extrabold md:!leading-[25px] text-center"
      >
        Depoimentos
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5, ease: easing }}
        className="my-4 max-w-6xl text-gray-600 tracking-wide leading-relaxed text-center py-4 text-lg"
      >
        Veja o que nossos usuários estão dizendo.
      </motion.p>

      {/* Container Responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {[ 
          { img: portrait1, name: "Jorge Tunner", role: "Designer @ Google", rating: 5 },
          { img: portrait2, name: "Steve Souza", role: "Backend Dev @ Amazon", rating: 4 },
          { img: portrait3, name: "Tania Andrew", role: "Frontend Dev @ Adobe", rating: 5 }
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 + index * 2, ease: easing }}
            className="relative flex w-full max-w-sm flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none p-6 mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <img className="w-12 h-12 rounded-full object-top object-cover" src={testimonial.img} alt="Foto" />
              <div>
                <h2 className="font-bold tracking-tight text-gray-600 text-xl">{testimonial.name}</h2>
                <p className="font-medium tracking-wider text-gray-400 text-sm">{testimonial.role}</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-1 ml-auto">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className={`text-lg ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 tracking-wide leading-relaxed font-thin">
              <span className="font-extrabold text-lg text-gray-600">"</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat ut esse cumque voluptate facilis.
              <span className="font-extrabold text-lg text-gray-600">"</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
