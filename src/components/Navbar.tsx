const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center text-xl font-bold">
          <a className="text-gray-950 hover:text-emerald-400 transition-colors duration-200" href="#">EduThek</a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-l">
          <a className="text-gray-700 hover:text-emerald-400 transition-colors duration-200 font-semibold" href="#">Home</a>
          <a className="text-gray-700 hover:text-emerald-400 transition-colors duration-200 font-semibold" href="#">Cursos</a>
          <a className="text-gray-700 hover:text-emerald-400 transition-colors duration-200 font-semibold" href="#">Preços</a>
          <a className="text-gray-700 hover:text-emerald-400 transition-colors duration-200 font-semibold" href="#">Sobre</a>
          <a className="text-gray-700 hover:text-emerald-400 transition-colors duration-200 font-semibold" href="#">Depoimentos</a>
          <a className="text-gray-700 hover:text-emerald-400 transition-colors duration-200 font-semibold" href="#">Contato</a>
        </div>
        <div className="flex items-center justify-center gap-4 text-l">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Registre-se</button>
        </div>
    </nav>
  )
}

export default Navbar
