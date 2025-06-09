import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const RatDetail = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#f0fbfd] min-h-screen py-16 px-6 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-[#03A9C9] font-semibold hover:underline">← Retour à l’accueil</Link>

          <h1 className="text-4xl font-bold text-[#104051] mt-6 mb-4">🐭 Dératisation – Rats et Souris</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Éradiquez efficacement rats et souris de votre logement grâce à nos solutions professionnelles. Nous utilisons des méthodes sûres, rapides et respectueuses de votre environnement : appâts, pièges, et traitements ciblés selon le degré d’infestation.
          </p>

          <h2 className="text-2xl font-bold text-[#104051] mb-2">Notre méthode d’intervention</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Inspection complète de l’habitat</li>
            <li>Mise en place de pièges et d’appâts sécurisés</li>
            <li>Recherche et colmatage des points d’entrée</li>
            <li>Suivi et prévention pour éviter toute récidive</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#104051] mb-2">Pourquoi nous faire confiance ?</h2>
          <ul className="list-disc list-inside text-gray-700 mb-10">
            <li>Techniciens formés et discrets</li>
            <li>Intervention rapide, même en urgence</li>
            <li>Produits homologués et sans danger pour vos animaux</li>
            <li>Devis gratuit et transparence des prix</li>
          </ul>

          {/* Bloc Tarif indicatif */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h3 className="text-xl font-bold text-[#104051] mb-2">Tarif indicatif</h3>
            <p className="text-gray-700 mb-4">À partir de <strong>109€</strong> selon la superficie.</p>
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

export default RatDetail;
