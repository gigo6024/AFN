import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fermer le menu si clic hors de la zone
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src="/logo-afn.png" alt="Logo AFN" className="h-32 w-auto" />
      </div>

      {/* Menu hamburger mobile */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#104051] focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menu desktop */}
      <ul className="hidden md:flex gap-6 text-[#104051] font-medium text-base">
        <li><a href="#qui-sommes-nous" className="hover:text-[#03A9C9]">Qui sommes nous</a></li>
        <li><a href="#services" className="hover:text-[#03A9C9]">Nos services</a></li>
        <li><a href="#temoignages" className="hover:text-[#03A9C9]">Témoignages</a></li>
        <li><a href="#tarifs" className="hover:text-[#03A9C9]">Tarifs</a></li>
        <li><a href="#contact" className="hover:text-[#03A9C9]">Contact</a></li>
      </ul>

      {/* Bouton desktop */}
      <a
        href="#contact"
        className="hidden md:inline-block ml-4 bg-[#03A9C9] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#028da7] transition duration-200"
      >
        Nous contacter
      </a>

      {/* Menu mobile responsive */}
      {menuOpen && (
        <div ref={menuRef} className="absolute top-[80px] left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 md:hidden z-50">
          <a href="#qui-sommes-nous" onClick={closeMenu} className="text-[#104051] hover:text-[#03A9C9]">Qui sommes nous</a>
          <a href="#services" onClick={closeMenu} className="text-[#104051] hover:text-[#03A9C9]">Nos services</a>
          <a href="#temoignages" onClick={closeMenu} className="text-[#104051] hover:text-[#03A9C9]">Témoignages</a>
          <a href="#tarifs" onClick={closeMenu} className="text-[#104051] hover:text-[#03A9C9]">Tarifs</a>
          <a href="#contact" onClick={closeMenu} className="text-[#104051] hover:text-[#03A9C9]">Contact</a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="bg-[#03A9C9] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#028da7] transition duration-200 text-center"
          >
            Nous contacter
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
