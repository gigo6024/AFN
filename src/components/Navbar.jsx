import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo uniquement */}
      <div className="flex items-center gap-4">
        <img src="/logo-afn.png" alt="Logo AFN" className="h-24 w-auto" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-[#104051] font-medium text-base">
        <li><a href="#qui-sommes-nous" className="hover:text-[#03A9C9]">Qui sommes nous</a></li>
        <li><a href="#services" className="hover:text-[#03A9C9]">Nos services</a></li>
        <li><a href="#temoignages" className="hover:text-[#03A9C9]">Témoignages</a></li>
        <li><a href="#tarifs" className="hover:text-[#03A9C9]">Tarifs</a></li>
        <li><a href="#contact" className="hover:text-[#03A9C9]">Contact</a></li>
      </ul>

      {/* Bouton */}
      <a
        href="#contact"
        className="ml-4 bg-[#03A9C9] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#028da7] transition duration-200"
      >
        Nous contacter
      </a>
    </nav>
  );
};

export default Navbar;
