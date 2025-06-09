import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';

const tarifsData = [
  {
    id: 'chimique',
    emoji: '🧪',
    title: 'Traitement chimique',
    rows: [
      ['De 0 à 30', '160€'],
      ['De 31 à 60', '170€'],
      ['De 61 à 90', '190€'],
      ['De 91 à 120', '210€'],
      ['De 121 à 150', '230€'],
      ['Au delà de 151', 'Tarifs sur devis'],
    ],
  },
  {
    id: 'vapeur',
    emoji: '💨',
    title: 'Traitement vapeur sèche',
    rows: [
      ['De 0 à 30', '290€'],
      ['De 31 à 60', '590€'],
      ['De 61 à 90', '840€'],
      ['De 91 à 120', '1060€'],
      ['De 121 à 150', '1260€'],
      ['Au delà de 151', 'Tarifs sur devis'],
    ],
  },
  {
    id: 'cryo',
    emoji: '❄️',
    title: 'Traitement cryogénisation',
    rows: [
      ['De 0 à 30', '879€'],
      ['De 31 à 60', '1180€'],
      ['De 61 à 90', '1440€'],
      ['De 91 à 120', '1740€'],
      ['De 121 à 150', '1940€'],
      ['Au delà de 151', 'Tarifs sur devis'],
    ],
  },
  {
    id: 'thermique',
    emoji: '🔥',
    title: 'Traitement thermique',
    rows: [
      ['De 0 à 30', '1280€'],
      ['De 31 à 60', '1680€'],
      ['De 61 à 90', '2080€'],
      ['De 91 à 120', '2480€'],
      ['De 121 à 150', '2880€'],
      ['Au delà de 151', 'Tarifs sur devis'],
    ],
  },
  {
    id: 'canine',
    emoji: '🐶',
    title: 'Tarif Détection canine',
    rows: [
      ['De 0 à 180', '259€'],
      ['Au delà de 181', 'Tarifs sur devis'],
    ],
  },
  {
    id: 'deratisation',
    emoji: '🐀',
    title: 'Tarif Dératisation',
    rows: [
      ['De 0 à 30', '109€'],
      ['De 31 à 60', '129€'],
      ['De 61 à 90', '149€'],
      ['De 91 à 120', '179€'],
      ['Au delà de 120', 'Tarifs sur devis'],
    ],
  },
];

const TarifsDetail = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      const target = document.getElementById(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section className="bg-[#f0fbfd] min-h-screen py-16 px-4 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#104051] mb-10 text-center">
          Tarifs Détaillés
        </h1>

        <div className="text-center mb-12">
          <Link to="/" className="text-[#03A9C9] font-semibold hover:underline">
            ← Retour à l’accueil
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tarifsData.map(({ id, emoji, title }) => (
            <ScrollLink
              key={id}
              to={id}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer bg-white text-[#104051] border border-[#03A9C9] px-4 py-2 rounded-full hover:bg-[#03A9C9] hover:text-white transition"
            >
              {emoji} {title}
            </ScrollLink>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {tarifsData.map(({ id, emoji, title, rows }) => (
            <Element name={id} id={id} key={id}>
              <TarifTable title={`${emoji} ${title}`} rows={rows} />
            </Element>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/#contact"
            className="bg-[#104051] text-white px-6 py-3 text-lg rounded-lg shadow hover:bg-[#0c3641] transition"
          >
            📞 Prendre un rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
};

const TarifTable = ({ title, rows }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <h3 className="text-xl font-bold text-center text-[#03A9C9] py-4 border-b">
      {title}
    </h3>
    <table className="w-full text-left">
      <thead>
        <tr className="bg-[#e6f7f8] text-[#104051] font-semibold text-sm">
          <th className="py-3 px-4">Superficie (m²)</th>
          <th className="py-3 px-4">Tarifs (€)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([range, price], idx) => (
          <tr key={idx} className={idx % 2 === 0 ? 'bg-[#03A9C9]/10' : 'bg-white'}>
            <td className="py-3 px-4 font-medium">{range}</td>
            <td className="py-3 px-4">{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TarifsDetail;
