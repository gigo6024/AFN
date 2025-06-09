import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuiSommesNous from '../components/QuiSommesNous';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Tarifs from '../components/Tarifs';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => (
  <div className="font-sans">
    <Navbar />
    <Hero />
    <QuiSommesNous />
    <Services />
    <Testimonials />
    <Tarifs />
    <ContactForm />
    <Footer />
  </div>
);

export default Home;
