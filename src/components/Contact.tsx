const Contact = () => {
  return (
        <div className="flex flex-row justify-between py-20">
            <div className="flex flex-col gap-20 p-12">
                <div>
                    <h2 className="font-bold tracking-tight text-gray-600 text-xl">Suporte</h2>
                    <p className="text-gray-400 tracking-wide leading-relaxed font-thin">suporte@eduthek.com</p>
                </div>
                <div>
                    <h2 className="font-bold tracking-tight text-gray-600 text-xl">Endereço</h2>
                    <p className="text-gray-400 tracking-wide leading-relaxed font-thin">Rua ataide demaro N1</p>
                    <p className="text-gray-400 tracking-wide leading-relaxed font-thin">Código Postal:03875-098</p>
                </div>
                <div>
                    <h2 className="font-bold tracking-tight text-gray-600 text-xl">Fale Conosco</h2>
                    <p className="text-gray-400 tracking-wide leading-relaxed font-thin">+55 21 99999-9999</p>
                </div>
            </div>
            <div className=" p-8 rounded-lg w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Entre em contato</h2>
                <form x-data="{ name: '', email: '', message: '' }" className="space-y-4">
                <div>
                    <label className="block text-gray-600 font-medium">Nome</label>
                    <input type="text" id="name" className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:ring focus:ring-emerald-500" x-model="name" placeholder="Seu Nome" />
                </div>
                <div>
                    <label className="block text-gray-600 font-medium">Email</label>
                    <input type="email" id="email" className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:ring focus:ring-emerald-500" x-model="email" placeholder="email@exemplo.com" />
                </div>
                <div>
                    <label className="block text-gray-600 font-medium">Mensagem</label>
                    <textarea id="message" className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:ring focus:ring-emerald-500" x-model="message" placeholder="Sua mensagem..."></textarea>
                </div>
                <div>
                    <button type="button" className="w-full bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-500">
                    Enviar Mensagem
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact