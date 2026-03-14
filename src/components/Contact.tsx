import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = '6289617323344'; // 089617323344 in international format
    const text = `Halo, saya tertarik dengan layanan Anda.

Nama: ${formData.name}
Email: ${formData.email}
Tanggal Event: ${formData.date || '-'}

Pesan:
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-background rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="font-serif text-4xl md:text-5xl text-white mb-6"
              >
                Let's create something beautiful.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 mb-12 text-lg font-light"
              >
                Available for assignments worldwide. Reach out to discuss your upcoming event or project.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <a href="mailto:hello@lumiere.com" className="block text-xl font-medium text-white hover:text-gray-300 transition-colors">
                  hello@lumiere.com
                </a>
                <div className="flex gap-6 pt-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                    <Youtube size={20} />
                  </a>
                  <a href="https://wa.me/6289617323344" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 flex flex-col"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-surface border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full bg-surface border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="date" className="sr-only">Event Date</label>
                <input
                  type="text"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Event Date (Optional)"
                  className="w-full bg-surface border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-medium rounded-2xl px-6 py-4 hover:bg-gray-200 transition-colors mt-2"
              >
                Send via WhatsApp
              </button>
            </motion.form>

          </div>
        </div>
      </div>
    </section>
  );
}
