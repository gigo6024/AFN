import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: '🛏️ PUNAISES DE LIT',
    description:
      'Élimination rapide des punaises de lit grâce à des traitements chimiques, vapeur ou thermiques. Résultats garantis dès la première visite.',
    link: '/service/punaises-de-lit',
  },
  {
    title: '🌬️ ACARIENS',
    description:
      'Traitement anti-acariens efficace pour un environnement plus sain, limitant les réactions allergiques respiratoires.',
    link: '/service/acariens',
  },
  {
    title: '🪳 CAFARDS / BLATTES',
    description:
      'Traitement anti-cafards radical. Nos techniciens utilisent des produits professionnels pour éradiquer les foyers même dans les recoins.',
    link: '/service/cafards-blattes',
  },
  {
    title: '🐭 RATS ET SOURIS',
    description:
      'Dératisation complète de votre logement : pièges, méthodes mécaniques, répulsifs. Service rapide et garanti.',
    link: '/service/rats-souris',
  },
  {
    title: '🕊️ PIGEON',
    description:
      'Protection anti-pigeons sur mesure : filets, pics, solutions discrètes pour protéger vos façades ou balcons.',
    link: '/service/pigeons',
  },
  {
    title: '🐶 DÉTECTION CANINE',
    description:
      'Nos chiens détecteurs identifient les punaises de lit avec une précision redoutable. Intervention non invasive et ultra rapide.',
    link: '/service/detection-canine',
  },
  {
    title: '🐝 NID DE GUÊPE',
    description:
      'Intervention rapide et sécurisée pour détruire les nids de guêpes. Protection de votre famille et de votre maison garantie.',
    link: '/service/nid-de-guepes',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f9f9f9] py-16 px-6 lg:px-32">
      <h2 className="text-3xl font-bold text-center text-[#104051] mb-12">Nos services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border-t-4 border-[#03A9C9] rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#104051] mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
            </div>
            <Link
              to={service.link}
              className="mt-6 inline-block bg-[#03A9C9] text-white text-sm px-4 py-2 rounded-full hover:bg-[#028da7] transition self-start"
            >
              En savoir +
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
