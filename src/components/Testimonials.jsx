import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Safia Ommani',
    text: 'Merci les yeux fermés ! Service irréprochable, techniciens à toute épreuve et tarifs abordables. Merci à toute l’équipe.',
    stars: 5,
    emoji: '👩‍🔧',
  },
  {
    name: 'Stéphane Deni',
    text: 'Je recommande à 1000%, ils sont venus éradiquer des punaises de lit chez moi par traitement chimique, et au top pour les détails et sérieux dans le protocole.',
    stars: 5,
    emoji: '🧔‍♂️',
  },
  {
    name: 'Zaou Ben',
    text: 'Super expérience, personnel compétent, rapide, efficace contre cafards. Non recommandé de plus d’une trois heures.',
    stars: 4,
    emoji: '👨🏽‍🔧',
  },
];

const Star = ({ filled }) => (
  <span className={`text-[#FFD700] text-xl ${filled ? '' : 'opacity-30'}`}>★</span>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="temoignages" className="bg-gradient-to-b from-[#f0fbfd] to-white py-20 px-6 lg:px-32">
      <h2 className="text-4xl font-extrabold text-center text-[#104051] mb-14">❤️ Ce que disent nos clients</h2>

      <div className="relative max-w-2xl mx-auto h-[340px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-3">{testimonials[current].emoji}</div>
            <div className="text-[#FFD700] text-xl mb-2 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < testimonials[current].stars} />
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-4 italic leading-relaxed">“{testimonials[current].text}”</p>
            <p className="font-semibold text-[#104051]">{testimonials[current].name}</p>
            <span className="text-green-600 text-xs mt-2 bg-green-100 rounded-full px-3 py-1 font-medium">
              ✅ Avis vérifié
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-12 text-center">
        <div className="text-3xl">📍</div>
        <p className="font-semibold text-[#104051] mt-2">Google Avis</p>
        <p className="text-sm text-gray-500">Note moyenne : 4,9 / 5 sur Google</p>
      </div>
    </section>
  );
};

export default Testimonials;
