import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-surface-light rounded-[2.5rem] transform rotate-3 scale-105 opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1554046920-90dcac023691?q=80&w=1000&auto=format&fit=crop"
              alt="Photographer portrait"
              className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-4 block"
            >
              The Artist
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
            >
              Visual storytelling with a cinematic soul.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-300 text-lg font-light leading-relaxed"
            >
              <p>
                With over a decade of experience behind the lens, I specialize in capturing the raw, authentic emotions of your most important days. My approach blends documentary-style candidness with editorial elegance.
              </p>
              <p>
                Whether it's the quiet intimacy of a wedding vow, the electric energy of a live concert, or the professional polish of a corporate event, my goal is to create timeless visuals that tell your unique story.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
                alt="Signature" 
                className="h-12 opacity-60 invert"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
