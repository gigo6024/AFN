import React from 'react';

const Hero = () => (
  <section className="relative bg-[#e6f7f8] min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-10 overflow-hidden">
    {/* SVG décoratif animé full width */}
    <svg className="absolute top-0 left-0 w-[200%] h-64 text-[#c3f2f6] opacity-50 animate-wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" fillOpacity="1" d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,181.3C840,171,960,117,1080,112C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>

    {/* Contenu */}
    <div className="relative z-10 max-w-3xl animate-fade-in-up transition-all duration-700">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#104051] leading-tight mb-6 drop-shadow-md tracking-tight">
        Une solution rapide<br />
        & <span className="text-[#03A9C9]">efficace</span> contre les nuisibles
      </h1>

      <p className="text-lg md:text-xl text-gray-700 mb-10 opacity-90">
        Obtenez votre devis gratuit en quelques clics
      </p>

      {/* Boutons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Bouton téléphone */}
        <a
          href="tel:+33783795216"
          className="flex items-center gap-2 px-6 py-3 bg-[#104051] text-white text-lg rounded-xl shadow-lg hover:scale-105 hover:bg-[#0c3641] transition-all duration-300"
        >
          📞 07 83 79 52 16
        </a>

        {/* Bouton rendez-vous */}
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 bg-[#03A9C9] text-white text-lg rounded-xl shadow-lg hover:scale-105 hover:bg-[#028aa7] transition-all duration-300"
        >
          📅 PRENDRE UN RENDEZ VOUS
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
