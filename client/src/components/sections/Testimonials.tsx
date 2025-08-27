
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Image data extracted from the website
  const communityImages = [
    {
      id: 1,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-30-at-12.17.jpg",
      title: "Traditional Jhola Showcase",
      description: "Women displaying traditional jhola bags promoting sustainable lifestyle",
      category: "Community"
    },
    {
      id: 2,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/1-WhatsApp-Image-2025-06-30-at-12.17.jpg",
      title: "Awards & Recognition",
      description: "Honoring community members for their contribution to the eco-friendly movement",
      category: "Achievement"
    },
    {
      id: 3,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/2-WhatsApp-Image-2025-06-30-at-12.17.jpg",
      title: "Community Distribution",
      description: "Distribution of jhola bags to promote plastic-free shopping habits",
      category: "Impact"
    },
    {
      id: 4,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/jhola-group-photo.jpg",
      title: "Team Unity",
      description: "Group of dedicated volunteers spreading awareness about sustainable living",
      category: "Team"
    },
    {
      id: 5,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/men-with-jhola.jpg",
      title: "Men Supporting Movement",
      description: "Male advocates joining the jhola movement for environmental protection",
      category: "Support"
    },
    {
      id: 6,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/feeling-restaurant.jpg",
      title: "Business Partnership",
      description: "Local businesses partnering with the movement to reduce plastic usage",
      category: "Partnership"
    },
    {
      id: 7,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/dr-anubha-jhola.jpg",
      title: "Leadership in Action",
      description: "Dr. Anubha Pundir leading by example with sustainable practices",
      category: "Leadership"
    },
    {
      id: 8,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/plastic-free-banner.jpg",
      title: "Awareness Campaign",
      description: "Public awareness campaigns promoting plastic-free lifestyle",
      category: "Campaign"
    }
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-black/50 to-blue-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Echoes of the </span>
            <span className="gradient-text">Jhola Movement</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Witness the transformative power of our community-driven initiatives. These moments capture 
            the essence of our mission to create a plastic-free, sustainable future.
          </p>
        </motion.div>

        {/* Premium Image Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {communityImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Main Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-white/10 hover:border-green-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x300/1f2937/10b981?text=Jhola+Movement';
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-green-500/90 to-blue-500/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-semibold text-white">{image.category}</span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Info - Always Visible */}
                <div className="p-4 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm">
                  <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-green-400 transition-colors duration-300">
                    {image.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                    {image.description}
                  </p>
                </div>

                {/* Premium Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 shadow-lg">
                <span>🌱</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-green-400">🌿</span>
            <span className="text-white font-medium">Join Our Growing Community</span>
            <span className="text-blue-400">✨</span>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ade80' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
};

export default Testimonials;
