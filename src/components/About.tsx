import { motion } from "framer-motion"

const easing = [0.25, 0.1, 0.25, 1];

const About = () => {
  return (
    <div id="sobre" className="flex flex-col justify-center items-center pb-20 mb-16">
        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5, ease: easing }} className="tracking-tight text-gray-950 text-4xl lg:text-5xl font-extrabold md:!leading-[55px] mb-8">Sobre</motion.h2>
        <motion.h3 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5, ease: easing }} className="tracking-tighter text-gray-500 text-2xl lg:text-3xl md:!leading-[55px]">Porque o <span className="font-semibold text-cognac-500 hover:text-cognac-600 transition delay-100 duration-300 ease-in-out">Eduthek</span> é para você?</motion.h3>
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5, ease: easing }} className="mb-12 text-base max-w-6xl text-gray-600 tracking-wide leading-relaxed text-center py-2">Conheca a escola de tecnologia mais completa da atualidade.</motion.p>
        <div className="flex flex-wrap justify-center">
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1.5, ease: easing }} className="w-3/12 p-3">
                <h4 className="text-gray-600 text-xl font-semibold tracking-tight">Navegue na programação</h4>
                <p className="text-gray-400 text-sm font-light tracking-wider w-3/4">Estude quando e como quiser. Nossos cursos estão disponíveis 24h/dia pelo navegador ou mobile.</p>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 2.5, ease: easing }} className="w-3/12 p-3">
                <h4 className="text-gray-600 text-xl font-semibold tracking-tight">Aprofunde seus conhecimentos</h4>
                <p className="text-gray-400 text-sm font-light tracking-wider w-3/4">Garantimos conhecimento com profundidade e diversidade, para seu pequeno.</p>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 3.5, ease: easing }} className="w-3/12 p-3">
                <h4 className="text-gray-600 text-xl font-semibold tracking-tight">Conteúdo imersivo</h4>
                <p className="text-gray-400 text-sm font-light tracking-wider w-3/4">Faça parte de uma comunidade de apaixonados por tudo que é digital.</p>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 4.5, ease: easing }} className="w-3/12 p-3">
                <h4 className="text-gray-600 text-xl font-semibold tracking-tight">Novos cursos toda semana</h4>
                <p className="text-gray-400 text-sm font-light tracking-wider w-3/4">São 1400 aulas e novos lançamentos toda semana, além de atualizações e melhorias constantes.</p>
            </motion.div>
        </div>
    </div>  
    )
}

export default About