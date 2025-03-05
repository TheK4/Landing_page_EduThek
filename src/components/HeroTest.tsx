import heroImg from "../assets/girl-hero-img.png"
import { motion } from "framer-motion"

const containerMotion = (delay: number) => ({
  hidden: { x: -100, opacity:0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
})

const containerMotioninv = (delay: number) => ({
  hidden: { x: 100, opacity:0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
})

const HeroTest = () => {
  return (
    <div id="home" className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.p variants={containerMotion(0)} initial="hidden" animate="visible" className="mt-4 text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent ">
                <span className="rotate-90 inline-block mr-2 mb-2 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text">|</span>
                Melhor plataforma de estudo online
            </motion.p>
            <motion.h2 variants={containerMotion(0.5)} initial="hidden" animate="visible" className="tracking-tight text-gray-950 text-4xl lg:text-5xl font-extrabold md:!leading-[55px]">Do primeiro código ao futuro na tecnologia!</motion.h2>
            <motion.p variants={containerMotion(1)} initial="hidden" animate="visible" className="my-4 text-base max-w-xl text-gray-600 tracking-tighter leading-relaxed">O Eduthek prepara crianças e adolescentes para o mundo da programação de forma interativa e estruturada. Com uma metodologia envolvente, transformamos o aprendizado de tecnologia em uma experiência prática e acessível, desenvolvendo raciocínio lógico, criatividade e resolução de problemas – habilidades essenciais para o futuro digital.</motion.p>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }}>
                <button type='button' className="mt-6 bg-cognac-500 hover:bg-transparent hover:text-cognac-500 border-2 border-cognac-500 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-40 py-2.5">Saiba Mais</button>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="flex justify-center items-center mt-16 border-t pt-12">
                <h2 className="tracking-tight text-gray-800 text-4xl lg:text-5xl font-extrabold md:!leading-[55px] mr-4 transition delay-150 duration-300 ease-in-out hover:text-cognac-500">5K</h2>
                <p className="text-m tracking-tighter mr-4 text-gray-500">Usuarios Ativos</p>
                <h2 className="tracking-tight text-gray-800 text-4xl lg:text-5xl font-extrabold md:!leading-[55px] mr-4 transition delay-150 duration-300 ease-in-out hover:text-cognac-500">250</h2>
                <p className="text-m tracking-tight mr-4 text-gray-500">Professores Qualificados</p>
                <h2 className="tracking-tight text-gray-800 text-4xl lg:text-5xl font-extrabold md:!leading-[55px] mr-4 transition delay-150 duration-300 ease-in-out hover:text-cognac-500">10</h2>
                <p className="text-m tracking-tight text-gray-500">Avaliação dos Especialistas</p>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:px-10">
            <motion.div variants={containerMotioninv(0.5)} initial="hidden" animate="visible" className="flex justify-center">
                <img src={heroImg} className="w-full h-full object-contain rounded-3xl" alt="hero-girl-image" />
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroTest