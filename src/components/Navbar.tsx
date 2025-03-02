const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center text-xl font-bold">
          <a className="text-gray-950 hover:text-emerald-400 transition-colors duration-200 font-extrabold" href="#">EduThek</a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-l">
          <a className="text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium" href="#">Home</a>
          <a className="text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium" href="#">Cursos</a>
          <a className="text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium" href="#">Planos</a>
          <a className="text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium" href="#">Sobre</a>
          <a className="text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium" href="#">Depoimentos</a>
          <a className="text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium" href="#">Contato</a>
        </div>
        <div className="flex items-center justify-center gap-4 text-l">
        <button type='button' className="bg-cognac-500 hover:bg-transparent hover:text-cognac-500 border-2 border-cognac-500 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-4 py-2">Login</button>
        <button type='button' className="bg-transparent hover:bg-cognac-500 hover:text-white border-2 border-cognac-500 transition-all text-cognac-500 font-semibold text-sm tracking-wide rounded-md px-4 py-2">Registre-se</button>
        </div>
    </nav>
  )
}

export default Navbar
