import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';

const categories = ['All', 'Wedding', 'Concert', 'Event'];

const portfolioItems = [
  {
    id: 1,
    title: 'Summer Wedding',
    category: 'Wedding',
    type: 'image',
    src: 'https://github.com/user-attachments/assets/2d4ba1a5-6b05-408e-a4db-25b56fc8b713',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 2,
    title: 'Tech Conference 2025',
    category: 'Event',
    type: 'image',
    src: 'https://github.com/user-attachments/assets/d0764eac-2b00-4070-af1a-94704bc5c527',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: 3,
    title: 'Neon Nights Festival',
    category: 'Concert',
    type: 'image',
    src: 'https://github.com/user-attachments/assets/0c778bb0-a7b1-40a6-b2b1-8f3d6f04d349',
    aspectRatio: 'aspect-square',
  },
  {
    id: 4,
    title: 'Autumn Elopement',
    category: 'Wedding',
    type: 'image',
    src: 'https://github.com/user-attachments/assets/8f6062eb-b4d4-4897-b78a-0a4f781cf992',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 5,
    title: 'Corporate Gala',
    category: 'Event',
    type: 'image',
    src: 'https://github.com/user-attachments/assets/2d4ba1a5-6b05-408e-a4db-25b56fc8b713',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 6,
    title: 'Indie Rock Tour',
    category: 'Concert',
    type: 'image',
    src: 'https://github.com/user-attachments/assets/d0764eac-2b00-4070-af1a-94704bc5c527',
    aspectRatio: 'aspect-[3/4]',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-surface relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl text-white mb-4"
            >
              Selected Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 max-w-xl"
            >
              A curated collection of my favorite moments captured through the lens.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid (Simulated with columns) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative group overflow-hidden rounded-3xl break-inside-avoid bg-surface-light ${item.aspectRatio}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/70 mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-serif text-white">{item.title}</h3>
                </div>

                {/* Video Play Icon */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <Play className="w-6 h-6 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
