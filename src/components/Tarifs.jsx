import React from 'react';
import { Link } from 'react-router-dom';

const tarifs = [
  {
    title: 'Traitement Chimique',
    price: 'À partir de 160€',
    description:
      'Méthode radicale contre les insectes nuisibles. Efficacité rapide, nécessite parfois un retrait temporaire du domicile.',
    emoji: '🧴',
    anchor: 'chimique',
  },
  {
    title: 'Traitement Vapeur',
    price: 'À partir de 290€',
    description:
      'Solution écologique à haute température. Idéal pour matelas, textiles et recoins difficiles d’accès.',
    emoji: '💨',
    anchor: 'vapeur',
  },
  {
    title: 'Traitement Cryogénique',
    price: 'À partir de 879€',
    description:
      'Gèle instantanément les nuisibles avec du CO2 à -78°C. Sans produits chimiques, idéal pour les environnements sensibles.',
    emoji: '❄️',
    anchor: 'cryogenique',
  },
  {
    title: 'Traitement Thermique',
    price: 'À partir de 1280€',
    description:
      'Éradique tous les stades des nuisibles par chaleur. Efficace en une seule intervention.',
    emoji: '🔥',
    anchor: 'thermique',
  },
  {
    title: 'Détection canine',
    price: 'À partir de 259€',
    description:
      'Inspection précise des zones infestées grâce à un chien spécialement entraîné à la détection des punaises de lit.',
    emoji: '🐶',
    anchor: 'canine',
  },
  {
    title: 'Dératisation',
    price: 'À partir de 109€',
    description:
      'Traitement anti-rongeurs efficace et sécurisé pour tous types de locaux.',
    emoji: '🐭',
    anchor: 'deratisation',
  },
];

const Tarifs = () => {
  return (
    <section id="tarifs" className="py-16 px-6 lg:px-32 bg-[#f0fbfd]">
      <h2 className="text-3xl font-bold text-center text-[#104051] mb-12">Nos Tarifs</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tarifs.map((item, index) => (
          <a
            key={index}
            href={`/tarifs#${item.anchor}`}
            className="h-full"
          >
            <div className="bg-[#03A9C9] text-white rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center cursor-pointer hover:scale-105 h-full">
              <div className="text-3xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-2 min-h-[56px]">{item.title}</h3>
              <p className="text-sm mb-4 flex-grow">{item.description}</p>
              <span className="font-bold text-lg mt-auto">{item.price}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/tarifs"
          className="text-[#03A9C9] font-semibold hover:underline text-lg"
        >
          Voir les tarifs détaillés →
        </Link>
      </div>
    </section>
  );
};

export default Tarifs;
