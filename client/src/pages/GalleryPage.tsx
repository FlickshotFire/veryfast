import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';
import JholaGallery from '../components/sections/JholaGallery';

const GalleryPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const galleryImages = [
    // Jhola Movement & Production
    {
      id: 1,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-30-at-12.17.jpg",
      alt: "Dr. Anubha Pundir with traditional jhola bags",
      title: "The Jhola Woman",
      category: "jhola-movement",
      description: "Dr. Anubha Pundir showcasing the traditional handwoven jhola bags that started the revolution."
    },
    {
      id: 2,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/1-WhatsApp-Image-2025-06-30-at-12.17.jpg",
      alt: "Variety of eco-friendly jhola designs",
      title: "Diverse Jhola Designs",
      category: "jhola-movement",
      description: "The innovative variety of eco-friendly jhola bags created by our artisans."
    },
    {
      id: 3,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/2-WhatsApp-Image-2025-06-30-at-12.17.jpg",
      alt: "Plastic-free lifestyle demonstration",
      title: "Plastic-Free Revolution",
      category: "jhola-movement",
      description: "Leading the movement towards a plastic-free lifestyle through sustainable alternatives."
    },
    // Awards & Recognition
    {
      id: 4,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/20191127080111_IMG_0791-1.jpg",
      alt: "Rex Karmaveer Chakra Gold Award 2022",
      title: "Karmaveer Chakra Award",
      category: "awards",
      description: "Dr. Anubha Pundir receiving the prestigious Rex Karmaveer Chakra Gold Award 2022."
    },
    {
      id: 5,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/07/5-WhatsApp-Image-2025-07-05-at-5.04-1.jpg",
      alt: "Devbhoomi Rashtriya Ratan Award 2025",
      title: "Rashtriya Ratan Award",
      category: "awards",
      description: "Recognition for outstanding contribution to environmental protection and social welfare."
    },
    // Women Empowerment
    {
      id: 6,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/4-1536x1004-1.jpg",
      alt: "Women employment through jhola production",
      title: "Women Empowerment",
      category: "women-empowerment",
      description: "Providing employment opportunities to women through sustainable jhola bag production."
    },
    {
      id: 7,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/7.jpg",
      alt: "Traditional weaver working on handloom",
      title: "Weaver Empowerment",
      category: "women-empowerment",
      description: "Supporting traditional weavers and preserving ancient handloom techniques."
    },
    // Education & Awareness
    {
      id: 8,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/6.jpg",
      alt: "Educational workshop session",
      title: "Education Initiatives",
      category: "education",
      description: "Conducting educational workshops on environmental awareness and sustainability."
    },
    {
      id: 9,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/5-1536x1024-1.jpg",
      alt: "Remote education program",
      title: "Remote Learning",
      category: "education",
      description: "Reaching remote areas with our educational programs and awareness campaigns."
    },
    {
      id: 10,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/8-1.jpg",
      alt: "Hygiene awareness campaign",
      title: "Hygiene Awareness",
      category: "health",
      description: "Promoting hygiene awareness and health education in rural communities."
    },
    // Community Impact
    {
      id: 11,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/3-1536x1024-1.jpg",
      alt: "Community engagement program",
      title: "Community Outreach",
      category: "community",
      description: "Engaging with local communities to promote sustainable living practices."
    },
    {
      id: 12,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/1-1536x1024-1.jpg",
      alt: "Environmental awareness event",
      title: "Environmental Campaigns",
      category: "environment",
      description: "Organizing environmental awareness campaigns and tree plantation drives."
    },
    // Workshops & Training
    {
      id: 13,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/9-1536x1024-1.jpg",
      alt: "Skill development workshop",
      title: "Skill Development",
      category: "training",
      description: "Training women in traditional crafts and modern sustainable practices."
    },
    {
      id: 14,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/10-1536x1024-1.jpg",
      alt: "Handicraft production training",
      title: "Handicraft Training",
      category: "training",
      description: "Teaching traditional handicraft techniques to preserve cultural heritage."
    },
    // Media & Recognition
    {
      id: 15,
      src: "https://raghukularyawart.org/wp-content/uploads/2025/06/media-coverage-1.jpg",
      alt: "Media coverage of jhola movement",
      title: "Media Recognition",
      category: "media",
      description: "National media coverage of our environmental initiatives and social impact."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Images', count: galleryImages.length },
    { id: 'jhola-movement', name: 'Jhola Movement', count: galleryImages.filter(img => img.category === 'jhola-movement').length },
    { id: 'awards', name: 'Awards', count: galleryImages.filter(img => img.category === 'awards').length },
    { id: 'women-empowerment', name: 'Women Empowerment', count: galleryImages.filter(img => img.category === 'women-empowerment').length },
    { id: 'education', name: 'Education', count: galleryImages.filter(img => img.category === 'education').length },
    { id: 'community', name: 'Community', count: galleryImages.filter(img => img.category === 'community').length },
    { id: 'training', name: 'Training', count: galleryImages.filter(img => img.category === 'training').length }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative spacing-responsive-xl safe-area-inset overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-black/50 to-blue-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_70%)]" />

        <div className="relative z-10 container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-responsive-4xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Our </span>
              <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-responsive-base text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Explore our journey through images - from the inception of the Jhola Movement to 
              empowering women, protecting the environment, and creating lasting social impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section ref={ref} className="spacing-responsive-md">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`btn-touch px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm lg:text-base ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                    : 'glass border border-gray-600 text-gray-300 hover:border-green-500/50'
                }`}
              >
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                <span className="ml-1">({category.count})</span>
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          >
            {filteredImages.map((image, index) => (
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
                <div className="relative overflow-hidden rounded-xl glass border border-gray-700/50 p-1">
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900/90 to-black/90">
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <h3 className="text-white font-bold text-sm mb-1">{image.title}</h3>
                        <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">{image.description}</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs text-green-400 font-medium">
                      {categories.find(cat => cat.id === image.category)?.name || image.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Jhola Gallery Section */}
      <JholaGallery />

      {/* Premium Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] bg-gray-900/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50"
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
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image */}
                <div className="flex-1 relative min-h-[400px] lg:min-h-[600px]">
                  <img
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-80 p-8 bg-gradient-to-b from-gray-900/95 to-black/95">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === filteredImages[selectedImage].category)?.name}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {filteredImages[selectedImage].title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {filteredImages[selectedImage].description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:from-green-600 hover:to-blue-600 transition-all duration-200">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button className="flex-1 glass border border-gray-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:border-green-500/50 transition-all duration-200">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;