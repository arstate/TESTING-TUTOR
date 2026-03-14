import { motion } from 'motion/react';
import { Camera, Video, Users, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Weddings',
    description: 'Cinematic storytelling of your special day, capturing every emotion and detail.',
    icon: <Camera className="w-6 h-6" />,
  },
  {
    title: 'Corporate Events',
    description: 'Professional coverage for conferences, galas, and company gatherings.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Concerts',
    description: 'Dynamic and high-energy photography and videography for live performances.',
    icon: <Video className="w-6 h-6" />,
  },
  {
    title: 'Graduations',
    description: 'Commemorating academic achievements with elegant and timeless portraits.',
    icon: <GraduationCap className="w-6 h-6" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-white mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Specialized visual storytelling tailored to your unique event.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-white/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
