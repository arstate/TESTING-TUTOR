import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2938&auto=format&fit=crop"
          alt="Wedding photography background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 tracking-tight max-w-4xl"
        >
          Capturing Timeless Moments
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light"
        >
          Professional photography and videography for events, weddings, corporate gatherings, and the moments that matter most.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
          >
            Book a Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
