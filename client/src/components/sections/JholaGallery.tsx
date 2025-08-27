
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const JholaGallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-30-at-12.17.jpg",
      alt: "Dr. Anubha Pundir, founder of the Jhola Movement, showcasing traditional bags",
      title: "The Jhola Woman",
      description: "Dr. Anubha Pundir, fondly known as 'The Jhola Woman,' founded this revolutionary movement to replace plastic bags with traditional handwoven jholas."
    },
    {
      id: 2,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/1-WhatsApp-Image-2025-06-30-at-12.17.jpg",
      alt: "Dr. Anubha demonstrating the variety of eco-friendly jhola designs",
      title: "Innovative Vision",
      description: "With her innovative approach, Dr. Anubha created a sustainable solution that honors Indian traditions while protecting our environment."
    },
    {
      id: 3,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/2-WhatsApp-Image-2025-06-30-at-12.17.jpg",
      alt: "Dr. Anubha leading the plastic-free lifestyle revolution",
      title: "Award-Winning Leadership",
      description: "Recipient of Rex Karamveer Chakra Gold 2022 and Devbhoomi Rashtriya Ratan Award 2025, Dr. Anubha continues to inspire millions."
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

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
            <span className="text-white">Founder of the </span>
            <span className="gradient-text">Jhola Movement</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet Dr. Anubha Pundir, the visionary founder and "Jhola Woman" who pioneered India's 
            revolutionary movement against single-use plastic bags.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative cursor-pointer"
              onClick={() => openModal(index)}
            >
              {/* Premium Card Container */}
              <div className="relative overflow-hidden rounded-2xl glass border-2 border-gradient-to-r from-green-500/30 to-blue-500/30 p-1">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="text-white">
                        <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">{image.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </div>

                  {/* Premium Border Effect */}
                  <div className="absolute inset-0 rounded-xl border border-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 pointer-events-none" />
                </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                <span>🛍️</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Premium Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-gray-900/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500/50 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-500/50 transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-500/50 transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="flex-1 relative">
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-80 p-8 bg-gradient-to-b from-gray-900/95 to-black/95">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {galleryImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ade80' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </section>
  );
};

export default JholaGallery;
