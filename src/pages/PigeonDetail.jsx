import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const PigeonDetail = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#f0fbfd] min-h-screen py-16 px-6 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-[#03A9C9] font-semibold hover:underline">← Retour à l’accueil</Link>

          <h1 className="text-4xl font-bold text-[#104051] mt-6 mb-4">🕊️ Protection Anti-Pigeons</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Protégez vos bâtiments et balcons contre les nuisances causées par les pigeons. Nos solutions sont discrètes, durables et respectueuses des animaux : filets, pics, répulsifs visuels ou sonores.
          </p>

          <h2 className="text-2xl font-bold text-[#104051] mb-2">Notre méthode d’intervention</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Évaluation de la zone à protéger</li>
            <li>Choix de la solution la plus adaptée (pics, filets, etc.)</li>
            <li>Installation sécurisée et rapide</li>
            <li>Entretien et garantie des dispositifs</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#104051] mb-2">Pourquoi nous faire confiance ?</h2>
          <ul className="list-disc list-inside text-gray-700 mb-10">
            <li>Solutions sur mesure et esthétiques</li>
            <li>Techniciens formés et expérimentés</li>
            <li>Dispositifs sans danger pour les animaux</li>
            <li>Devis gratuit sous 24h</li>
          </ul>

          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h3 className="text-xl font-bold text-[#104051] mb-2">Tarif indicatif</h3>
            <p className="text-gray-700 mb-4">Prix sur devis, selon la surface et la solution retenue.</p>
            <Link
              to="/tarifs"
              className="inline-block bg-[#03A9C9] text-white px-5 py-2 rounded hover:bg-[#028aa7] transition"
            >
              Voir tous les tarifs →
            </Link>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-[#104051] text-white px-6 py-3 rounded-xl shadow hover:bg-[#0c3641] transition"
            >
              📞 Demander un devis gratuit
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PigeonDetail;
