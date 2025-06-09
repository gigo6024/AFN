import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yk1ewfm',
      'template_0wkdtdo',
      form.current,
      'bVEkzNShP4S-pCcjM'
    )
    .then((result) => {
      alert('✅ Message envoyé avec succès ! Nous vous répondrons rapidement.');
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert('❌ Une erreur est survenue. Merci de réessayer plus tard.');
    });
  };

  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image à gauche */}
        <div>
          <img
            src="/images/contact-ouvrier.jpg"
            alt="Technicien AFN"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Formulaire à droite */}
        <div>
          <h2 className="text-3xl font-bold text-[#104051] mb-6">Nous Contacter</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Nom</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Votre nom"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#03A9C9]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Votre email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#03A9C9]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">Téléphone</label>
              <input
                type="tel"
                name="user_phone"
                id="phone"
                placeholder="Votre numéro de téléphone"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#03A9C9]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Expliquez-nous votre problème"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#03A9C9]"
              ></textarea>
            </div>

            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <button
              type="submit"
              className="bg-[#104051] text-white px-6 py-2 rounded hover:bg-[#0d3646] transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
