import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-xl font-bold">
        <a className="text-gray-950 hover:text-emerald-400 transition-colors duration-200 font-extrabold" href="#">EduThek</a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-l">
        <Link to="home" smooth={true} duration={800} className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium">Home</Link>
        <Link to="cursos" smooth={true} duration={800} className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium">Cursos</Link>
        <Link to="planos" smooth={true} duration={800} className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium">Planos</Link>
        <Link to="sobre" smooth={true} duration={800} className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium">Sobre</Link>
        <Link to="depoimentos" smooth={true} duration={800} className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium">Depoimentos</Link>
        <Link to="contato" smooth={true} duration={800} className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium">Contato</Link>
      </div>
      <div className="flex items-center justify-center gap-4 text-l">
        <button type='button' className="bg-cognac-500 hover:bg-transparent hover:text-cognac-500 border-2 border-cognac-500 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-4 py-2">Login</button>
        <button type='button' className="bg-transparent hover:bg-cognac-500 hover:text-white border-2 border-cognac-500 transition-all text-cognac-500 font-semibold text-sm tracking-wide rounded-md px-4 py-2">Registre-se</button>
      </div>
    </nav>
  );
};

export default Navbar;
