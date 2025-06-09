// DetailTemplate.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const DetailTemplate = ({ title, emoji, description, subtitle, points }) => {
  return (
    <div className="min-h-screen bg-[#f0fbfd] text-[#104051]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/" className="text-[#03A9C9] hover:underline text-sm mb-4 inline-block">
          ← Retour à l’accueil
        </Link>

        <h1 className="text-3xl font-bold mb-6">
          <span className="mr-2">{emoji}</span>{title}
        </h1>

        <p className="mb-6 text-lg leading-relaxed">{description}</p>

        <h2 className="text-xl font-semibold mb-4">{subtitle}</h2>
        <ul className="list-disc list-inside space-y-2">
          {points.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailTemplate;
