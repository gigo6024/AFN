import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const DetectionCanineDetail = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#f0fbfd] min-h-screen py-16 px-6 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-[#03A9C9] font-semibold hover:underline">← Retour à l’accueil</Link>

          <h1 className="text-4xl font-bold text-[#104051] mt-6 mb-4">🐶 Détection Canine</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Nos chiens détecteurs sont spécialement entraînés pour localiser les punaises de lit avec une précision exceptionnelle. Cette méthode non invasive permet d’identifier rapidement les zones infestées, même dans les recoins invisibles.
          </p>

          <h2 className="text-2xl font-bold text-[#104051] mb-2">Notre méthode d’intervention</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Inspection rapide par un chien détecteur certifié</li>
            <li>Résultats immédiats sur la présence ou non de punaises</li>
            <li>Rapport d’intervention complet fourni</li>
            <li>Plan d’action personnalisé en cas d’infestation</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#104051] mb-2">Pourquoi nous faire confiance ?</h2>
          <ul className="list-disc list-inside text-gray-700 mb-10">
            <li>Chiens dressés par des experts</li>
            <li>Procédure sans produit chimique</li>
            <li>Intervention discrète et rapide</li>
            <li>Tarifs transparents et devis gratuits</li>
          </ul>

          {/* Bloc Tarif indicatif */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h3 className="text-xl font-bold text-[#104051] mb-2">Tarif indicatif</h3>
            <p className="text-gray-700 mb-4">À partir de <strong>259€</strong> selon la superficie.</p>
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

export default DetectionCanineDetail;
