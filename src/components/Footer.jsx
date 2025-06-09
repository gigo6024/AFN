import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#104051] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt />
            <span>07 83 79 52 16</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>contact@allfrancenuisibles.com</span>
          </div>
        </div>

        {/* Liens internes */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#accueil" className="hover:underline">Accueil</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#tarifs" className="hover:underline">Tarifs</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#03A9C9]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#03A9C9]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#03A9C9]"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm opacity-70">
        © {new Date().getFullYear()} All France Nuisibles — Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
