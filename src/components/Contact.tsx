import { motion } from "framer-motion";

const easing = [0.25, 0.1, 0.25, 1];

const Contact = () => {
  return (
    <div id="contato" className="flex flex-col md:flex-row justify-between py-20">
      {/* Informações de Contato */}
      <div className="flex flex-col gap-16 p-6 md:p-12">
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5, ease: easing }}>
          <h2 className="font-bold tracking-tight text-gray-600 text-xl">Suporte</h2>
          <p className="text-gray-400 tracking-wide leading-relaxed font-thin">suporte@eduthek.com</p>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2.5, ease: easing }}>
          <h2 className="font-bold tracking-tight text-gray-600 text-xl">Endereço</h2>
          <p className="text-gray-400 tracking-wide leading-relaxed font-thin">Rua Ataíde Demaro, Nº1</p>
          <p className="text-gray-400 tracking-wide leading-relaxed font-thin">CEP: 03875-098</p>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 3.5, ease: easing }}>
          <h2 className="font-bold tracking-tight text-gray-600 text-xl">Fale Conosco</h2>
          <p className="text-gray-400 tracking-wide leading-relaxed font-thin">+55 21 99999-9999</p>
        </motion.div>
      </div>

      {/* Formulário de Contato */}
      <div className="p-8 rounded-lg w-full max-w-4xl">
        <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5, ease: easing }} className="text-2xl font-bold mb-6 text-gray-800">
          Entre em contato
        </motion.h2>
        <form className="space-y-4">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5, ease: easing }}>
            <label htmlFor="name" className="block text-gray-600 font-medium">Nome</label>
            <input type="text" id="name" name="name" required className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:ring focus:ring-emerald-500" placeholder="Seu Nome" aria-label="Nome" />
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 2.5, ease: easing }}>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input type="email" id="email" name="email" required className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:ring focus:ring-emerald-500" placeholder="email@exemplo.com" aria-label="Email" />
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 3.5, ease: easing }}>
            <label htmlFor="message" className="block text-gray-600 font-medium">Mensagem</label>
            <textarea id="message" name="message" required className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:ring focus:ring-emerald-500" placeholder="Sua mensagem..." aria-label="Mensagem"></textarea>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 4.5, ease: easing }}>
            <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-500">
              Enviar Mensagem
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
