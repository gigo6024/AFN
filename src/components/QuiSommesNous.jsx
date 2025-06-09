import React from 'react';

const QuiSommesNous = () => {
  return (
    <section id="qui-sommes-nous" className="bg-white py-16 px-4 lg:px-32 text-[#104051]">
      <h2 className="text-3xl font-bold text-center mb-10">Qui sommes nous <span className="text-[#03A9C9]">?</span></h2>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Texte */}
        <div className="lg:w-1/2 text-lg leading-relaxed">
          <p className="mb-4">
            AFN France Nuisibles est une entreprise spécialisée dans le traitement des punaises de lit,
            ainsi que dans l’éradication des autres nuisibles pouvant porter atteinte à votre quotidien.
          </p>
          <p className="mb-4">
            Nous vous proposons un service anti-nuisibles de qualité, pensé pour votre sérénité.
          </p>
          <p>
            Grâce à notre réseau et nos compétences à l’échelle nationale, nous sommes en mesure
            d’intervenir efficacement contre tous types d’infestations.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/images/desinfection-woman.jpg"
            alt="Technicienne AFN"
            className="rounded-xl shadow-lg max-w-sm"
          />
        </div>
      </div>

      {/* Icônes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
        <div>
          <img src="/icons/expertise.png" alt="Expertise" className="mx-auto h-12" />
          <p className="mt-2 font-semibold">Expertise spécialisée</p>
        </div>
        <div>
          <img src="/icons/traitement.png" alt="Traitement" className="mx-auto h-12" />
          <p className="mt-2 font-semibold">Traitement efficace</p>
        </div>
        <div>
          <img src="/icons/garantie.png" alt="Garantie" className="mx-auto h-12" />
          <p className="mt-2 font-semibold">Suivi garanti</p>
        </div>
        <div>
          <img src="/icons/horloge.png" alt="24/7" className="mx-auto h-12" />
          <p className="mt-2 font-semibold">Intervention 24h/7</p>
        </div>
      </div>
    </section>
  );
};

export default QuiSommesNous;
