import heroImg from "../assets/girl-hero-img.png"

const Hero = () => {
  return (
    <div className="pb-24 lg:mb-18">
            <div className='flex align-center justify-center xl:place-self-center max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 xl:grid'>
                <div className='mr-auto text-center place-self-center lg:col-span-7 xl:text-start'>
                    <span className='bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-base lg:text-l tracking-tight text-transparent'>
                    Melhor plataforma de estudo online
                    </span>
                    <h1 className='text-5xl font-semibold tracking-tight lg:mt-4 lg:text-6xl'>
                        Do primeiro código ao futuro na tecnologia!
                    </h1>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>O Eduthek prepara crianças e adolescentes para o mundo da programação de forma interativa e estruturada. Com uma metodologia envolvente, transformamos o aprendizado de tecnologia em uma experiência prática e acessível, desenvolvendo raciocínio lógico, criatividade e resolução de problemas – habilidades essenciais para o futuro digital.</p>
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Saiba mais</button>
                </div>
                <div className="hidden place-self-end lg:col-span-5 xl:flex">
                    <img src={heroImg} alt="hero-girl-image" className="rounded-3xl" />
                </div>
            </div>
        </div>
  )
}

export default Hero