import heroImg from "../assets/girl-hero-img.png";
import { motion } from "framer-motion";

const containerMotion = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const containerMotioninv = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const HeroTest = () => {
  return (
    <div id="home" className="pb-4 xl:mb-35 flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left">
      <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start px-6 xl:px-0">
        <motion.p
          variants={containerMotion(0)}
          initial="hidden"
          animate="visible"
          className="mt-4 text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent"
        >
          <span className="rotate-90 inline-block mr-2 mb-2 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text">
            |
          </span>
          Melhor plataforma de estudo online
        </motion.p>
        <motion.h2
          variants={containerMotion(0.5)}
          initial="hidden"
          animate="visible"
          className="tracking-tight text-gray-950 text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold md:!leading-[55px]"
        >
          Do primeiro código ao futuro na tecnologia!
        </motion.h2>
        <motion.p
          variants={containerMotion(1)}
          initial="hidden"
          animate="visible"
          className="my-4 text-base max-w-xl text-gray-600 tracking-tighter leading-relaxed"
        >
          O Eduthek prepara crianças e adolescentes para o mundo da programação de forma interativa e estruturada. Com uma metodologia envolvente, transformamos o aprendizado de tecnologia em uma experiência prática e acessível, desenvolvendo raciocínio lógico, criatividade e resolução de problemas – habilidades essenciais para o futuro digital.
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
        >
          <button
            type="button"
            className="mt-6 bg-cognac-500 hover:bg-transparent hover:text-cognac-500 border-2 border-cognac-500 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-20 xl:px-40 py-2.5"
          >
            Saiba Mais
          </button>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap justify-center xl:justify-start mt-16 border-t pt-12 gap-6"
        >
          <div className="text-center">
            <h2 className="tracking-tight text-gray-800 text-4xl xl:text-5xl font-extrabold hover:text-cognac-500 transition">
              5K
            </h2>
            <p className="text-m text-gray-500">Usuários Ativos</p>
          </div>
          <div className="text-center">
            <h2 className="tracking-tight text-gray-800 text-4xl xl:text-5xl font-extrabold hover:text-cognac-500 transition">
              250
            </h2>
            <p className="text-m text-gray-500">Professores Qualificados</p>
          </div>
          <div className="text-center">
            <h2 className="tracking-tight text-gray-800 text-4xl xl:text-5xl font-extrabold hover:text-cognac-500 transition">
              10
            </h2>
            <p className="text-m text-gray-500">Avaliação dos Especialistas</p>
          </div>
        </motion.div>
      </div>

      {/* Imagem removida abaixo de 1280px */}
      <div className="hidden xl:flex w-full xl:w-1/2 xl:px-10">
        <motion.div
          variants={containerMotioninv(0.5)}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <img
            src={heroImg}
            className="w-full h-full object-contain rounded-3xl"
            alt="hero-girl-image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroTest;
