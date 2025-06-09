import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'chimique', emoji: '🧪', title: 'Traitement Chimique' },
  { id: 'vapeur', emoji: '💨', title: 'Traitement Vapeur' },
  { id: 'cryo', emoji: '❄️', title: 'Traitement Cryogénique' },
  { id: 'thermique', emoji: '🔥', title: 'Traitement Thermique' },
  { id: 'canine', emoji: '🐶', title: 'Détection Canine' },
  { id: 'deratisation', emoji: '🐀', title: 'Dératisation' },
];

const TarifsDetail = () => {
  return (
    <div className="bg-[#f0fbfd] min-h-screen py-10 px-6 md:px-20">
      {/* Navigation d’ancrage */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-[#104051] mb-4">Tarifs Détaillés</h1>
        <p className="text-gray-600 mb-6">Cliquez pour accéder directement à un traitement</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="bg-white border border-[#03A9C9] text-[#104051] font-semibold px-4 py-2 rounded-full hover:bg-[#03A9C9] hover:text-white transition"
            >
              {s.emoji} {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Sections de tarifs */}
      {sections.map((s) => (
        <div key={s.id} id={s.id} className="mb-16">
          <h2 className="text-2xl font-bold text-[#104051] mb-4">
            {s.emoji} {s.title}
          </h2>
          <table className="w-full bg-white rounded-lg shadow overflow-hidden">
            <thead className="bg-[#03A9C9] text-white">
              <tr>
                <th className="text-left px-4 py-3">Prestation</th>
                <th className="text-left px-4 py-3">Prix TTC</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="px-4 py-3">Exemple de prestation pour {s.title.toLowerCase()}</td>
                <td className="px-4 py-3">À partir de XX €</td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-white">
                <td className="px-4 py-3">Prestation spécifique 2</td>
                <td className="px-4 py-3">À définir</td>
              </tr>
              {/* Ajouter les vraies lignes selon ton Figma ici */}
            </tbody>
          </table>
        </div>
      ))}

      {/* Bouton de prise de contact */}
      <div className="text-center mt-12">
        <a
          href="/#contact"
          className="bg-[#104051] text-white px-6 py-3 text-lg rounded-lg shadow hover:bg-[#0c3641] transition"
        >
          📞 Prendre un rendez-vous
        </a>
      </div>

      {/* Retour accueil */}
      <div className="text-center mt-6">
        <Link to="/" className="text-[#03A9C9] underline font-medium">
          ⬅ Retour à l’accueil
        </Link>
      </div>
    </div>
  );
};

export default TarifsDetail;
