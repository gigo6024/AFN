import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const GuepeDetail = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#f0fbfd] min-h-screen py-16 px-6 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-[#03A9C9] font-semibold hover:underline">← Retour à l’accueil</Link>

          <h1 className="text-4xl font-bold text-[#104051] mt-6 mb-4">🐝 Intervention Nids de Guêpes</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Intervention rapide et sécurisée pour éliminer les nids de guêpes autour de votre domicile. Nos experts sont équipés pour neutraliser les foyers en toute sécurité, même en hauteur ou dans les zones difficiles d’accès.
          </p>

          <h2 className="text-2xl font-bold text-[#104051] mb-2">Notre méthode d’intervention</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Inspection visuelle du nid et de son emplacement</li>
            <li>Traitement professionnel avec produits adaptés</li>
            <li>Retrait du nid si nécessaire</li>
            <li>Prévention pour éviter le retour</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#104051] mb-2">Pourquoi nous faire confiance ?</h2>
          <ul className="list-disc list-inside text-gray-700 mb-10">
            <li>Intervention rapide sous 24h</li>
            <li>Techniciens équipés et certifiés</li>
            <li>Respect des normes de sécurité</li>
            <li>Devis gratuit et sans engagement</li>
          </ul>

          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h3 className="text-xl font-bold text-[#104051] mb-2">Tarif indicatif</h3>
            <p className="text-gray-700 mb-4">À partir de <strong>109€</strong> selon la localisation et l’accessibilité du nid.</p>
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

export default GuepeDetail;
