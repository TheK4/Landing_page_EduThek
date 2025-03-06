import { motion } from "framer-motion";

const easing = [0.25, 0.1, 0.25, 1];

const About = () => {
  return (
    <div id="sobre" className="flex flex-col justify-center items-center pb-20 mb-16 px-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.5, ease: easing }} 
        className="tracking-tight text-gray-950 text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-center"
      >
        Sobre
      </motion.h2>
      
      <motion.h3 
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 1.5, ease: easing }} 
        className="tracking-tighter text-gray-500 text-xl md:text-2xl lg:text-3xl text-center"
      >
        Porque o <span className="font-semibold text-cognac-500 hover:text-cognac-600 transition delay-100 duration-300 ease-in-out">Eduthek</span> é para você?
      </motion.h3>
      
      <motion.p 
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: 100 }} 
        transition={{ duration: 1.5, ease: easing }} 
        className="mb-12 text-base text-gray-600 tracking-wide leading-relaxed text-center max-w-sm md:max-w-md lg:max-w-4xl"
      >
        Conheça a escola de tecnologia mais completa da atualidade.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          { title: "Navegue na programação", text: "Estude quando e como quiser. Nossos cursos estão disponíveis 24h/dia pelo navegador ou mobile." },
          { title: "Aprofunde seus conhecimentos", text: "Garantimos conhecimento com profundidade e diversidade, para seu pequeno." },
          { title: "Conteúdo imersivo", text: "Faça parte de uma comunidade de apaixonados por tudo que é digital." },
          { title: "Novos cursos toda semana", text: "São 1400 aulas e novos lançamentos toda semana, além de atualizações e melhorias constantes." }
        ].map((item, index) => (
          <motion.div 
            key={index}
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 100 }} 
            transition={{ duration: 1.5 + index, ease: easing }} 
            className="w-full sm:w-6/12 lg:w-3/12 p-4 text-center"
          >
            <h4 className="text-gray-600 text-lg md:text-xl font-semibold tracking-tight">{item.title}</h4>
            <p className="text-gray-400 text-sm font-light tracking-wider">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>  
  );
}

export default About;
