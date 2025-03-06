import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Ícones do menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-xl font-bold">
        <a
          className="text-gray-950 hover:text-emerald-400 transition-colors duration-200 font-extrabold"
          href="#"
        >
          EduThek
        </a>
      </div>

      {/* Ícone de Menu Hamburguer para telas menores que 1280px */}
      <div className="xl:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Links do Navbar - Escondidos no Mobile */}
      <div
        className={`absolute left-0 top-20 w-full bg-white shadow-md p-6 flex flex-col items-center gap-4 text-l xl:static xl:w-auto xl:p-0 xl:flex xl:flex-row xl:gap-4 xl:shadow-none xl:bg-transparent transition-all ${
          menuOpen ? "block" : "hidden"
        } xl:flex`}
      >
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium"
        >
          Home
        </Link>
        <Link
          to="cursos"
          smooth={true}
          duration={800}
          className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium"
        >
          Cursos
        </Link>
        <Link
          to="planos"
          smooth={true}
          duration={800}
          className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium"
        >
          Planos
        </Link>
        <Link
          to="sobre"
          smooth={true}
          duration={800}
          className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium"
        >
          Sobre
        </Link>
        <Link
          to="depoimentos"
          smooth={true}
          duration={800}
          className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium"
        >
          Depoimentos
        </Link>
        <Link
          to="contato"
          smooth={true}
          duration={800}
          className="cursor-pointer text-gray-600 hover:text-emerald-400 transition-colors duration-200 font-medium"
        >
          Contato
        </Link>

        {/* Botões de Login e Registro (no mobile aparecem abaixo dos links) */}
        <div className="flex flex-col xl:flex-row gap-4">
          <button
            type="button"
            className="bg-cognac-500 hover:bg-transparent hover:text-cognac-500 border-2 border-cognac-500 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-4 py-2"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-transparent hover:bg-cognac-500 hover:text-white border-2 border-cognac-500 transition-all text-cognac-500 font-semibold text-sm tracking-wide rounded-md px-4 py-2"
          >
            Registre-se
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
