import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Assure-toi que le chemin est correct

const PunaiseDetail = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#f0fbfd] min-h-screen py-16 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-[#03A9C9] font-semibold hover:underline block mb-6">
            ← Retour à l’accueil
          </Link>

          <h1 className="text-3xl font-bold text-[#104051] mb-6">Traitement contre les punaises de lit 🛏️</h1>

          <p className="mb-6 text-lg text-gray-700">
            Les punaises de lit sont des nuisibles difficiles à éradiquer. Chez France All Nuisibles, nous utilisons
            des techniques professionnelles éprouvées pour garantir un résultat dès la première visite.
          </p>

          <h2 className="text-2xl font-semibold text-[#104051] mb-4">Notre méthode d’intervention</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700">
            <li>Inspection des zones infestées</li>
            <li>Choix du traitement adapté : vapeur, thermique ou chimique</li>
            <li>Préparation et traitement minutieux</li>
            <li>Suivi post-intervention si nécessaire</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#104051] mb-4">Pourquoi nous faire confiance ?</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700">
            <li>Équipe formée et réactive</li>
            <li>Résultats garantis dès la première visite</li>
            <li>Produits certifiés et sans danger pour la santé</li>
            <li>Intervention possible 7j/7</li>
          </ul>

          <div className="bg-white p-6 rounded-lg shadow mt-8">
            <h3 className="text-xl font-bold text-[#104051] mb-2">Tarif indicatif</h3>
            <p className="text-gray-700 mb-4">
              À partir de <strong>79€</strong> selon la superficie.
            </p>
            <Link
              to="/tarifs"
              className="inline-block bg-[#03A9C9] text-white px-5 py-2 rounded hover:bg-[#028aa7] transition"
            >
              Voir tous les tarifs →
            </Link>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="bg-[#104051] text-white px-6 py-3 rounded-lg shadow hover:bg-[#0c3641] transition"
            >
              📞 Demander un devis gratuit
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PunaiseDetail;
