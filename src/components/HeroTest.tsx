import heroImg from "../assets/girl-hero-img.png"

const HeroTest = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <p className="mt-4 text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent ">
                <span className="rotate-90 inline-block mr-2 mb-2 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text">|</span>
                Melhor plataforma de estudo online
            </p>
            <h2 className="tracking-tight text-gray-950 text-4xl lg:text-5xl font-extrabold md:!leading-[55px]">Do primeiro código ao futuro na tecnologia!</h2>
            <p className="my-4 text-base max-w-xl text-gray-600 tracking-tighter leading-relaxed">O Eduthek prepara crianças e adolescentes para o mundo da programação de forma interativa e estruturada. Com uma metodologia envolvente, transformamos o aprendizado de tecnologia em uma experiência prática e acessível, desenvolvendo raciocínio lógico, criatividade e resolução de problemas – habilidades essenciais para o futuro digital.</p>
            <button type='button' className="mt-6 bg-cognac-500 hover:bg-transparent hover:text-cognac-500 border-2 border-cognac-500 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-24 py-2.5">Saiba Mais</button>
            <div className="flex justify-center items-center mt-16 border-t pt-12">
                <h2 className="tracking-tight text-gray-800 text-4xl lg:text-5xl font-extrabold md:!leading-[55px] mr-4">5K</h2>
                <p className="text-m tracking-tighter mr-4 text-gray-500">Usuarios Ativos</p>
                <h2 className="tracking-tight text-gray-800 text-4xl lg:text-5xl font-extrabold md:!leading-[55px] mr-4">250</h2>
                <p className="text-m tracking-tight mr-4 text-gray-500">Professores Qualificados</p>
                <h2 className="tracking-tight text-gray-800 text-4xl lg:text-5xl font-extrabold md:!leading-[55px] mr-4">10</h2>
                <p className="text-m tracking-tight text-gray-500">Avaliação dos Especialistas</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:px-10">
            <div className="flex justify-center">
                <img src={heroImg} className="w-full h-full object-contain rounded-3xl" alt="hero-girl-image" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroTest