import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Leaf, Award, Star, Check, X, ChevronLeft, ChevronRight, Heart, Share2, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Classic Cotton Jhola",
      price: "₹150",
      originalPrice: "₹200",
      description: "Hand-woven cotton jhola bag perfect for daily shopping and eco-friendly lifestyle.",
      images: [
        "/images/jhola-movement-1.jpg",
        "/images/jhola-movement-2.jpg",
        "/images/jhola-movement-3.jpg"
      ],
      features: [
        "100% organic cotton",
        "Hand-woven by rural artisans",
        "Machine washable",
        "Load capacity: 10kg",
        "Biodegradable material"
      ],
      category: "Jhola Bags",
      inStock: true,
      rating: 4.8,
      reviews: 124,
      colors: ["Natural", "Green", "Blue", "Red"],
      sizes: ["Small", "Medium", "Large"]
    },
    {
      id: 2,
      name: "Premium Jute Jhola",
      price: "₹250",
      originalPrice: "₹300",
      description: "Durable jute jhola with reinforced handles for heavy-duty use.",
      images: [
        "/images/jhola-movement-2.jpg",
        "/images/jhola-movement-1.jpg",
        "/images/jhola-movement-3.jpg"
      ],
      features: [
        "100% natural jute fiber",
        "Extra strong handles",
        "Water-resistant coating",
        "Load capacity: 15kg",
        "Long-lasting durability"
      ],
      category: "Jhola Bags",
      inStock: true,
      rating: 4.9,
      reviews: 89,
      colors: ["Natural", "Brown", "Olive"],
      sizes: ["Medium", "Large", "Extra Large"]
    },
    {
      id: 3,
      name: "Corporate Gift Set",
      price: "₹500",
      originalPrice: "₹650",
      description: "Elegant jhola bags perfect for corporate gifting and events.",
      images: [
        "/images/jhola-movement-3.jpg",
        "/images/jhola-movement-1.jpg",
        "/images/jhola-movement-2.jpg"
      ],
      features: [
        "Premium cotton blend",
        "Custom logo printing available",
        "Gift packaging included",
        "Bulk order discounts",
        "Corporate branding options"
      ],
      category: "Gift Sets",
      inStock: true,
      rating: 4.7,
      reviews: 45,
      colors: ["White", "Navy", "Beige"],
      sizes: ["Standard"]
    },
    {
      id: 4,
      name: "Festival Special Jhola",
      price: "₹300",
      originalPrice: "₹400",
      description: "Beautifully designed jhola bags with traditional Indian motifs.",
      images: [
        "/images/traditional-crafts.jpg",
        "/images/jhola-movement-1.jpg",
        "/images/jhola-movement-2.jpg"
      ],
      features: [
        "Traditional block printing",
        "Festive colors and designs",
        "Handcrafted by artisans",
        "Cultural heritage support",
        "Limited edition designs"
      ],
      category: "Special Edition",
      inStock: true,
      rating: 4.6,
      reviews: 67,
      colors: ["Red", "Yellow", "Purple", "Orange"],
      sizes: ["Medium", "Large"]
    },
    {
      id: 5,
      name: "Student Eco Kit",
      price: "₹400",
      originalPrice: "₹500",
      description: "Complete eco-friendly kit for students including jhola bag and accessories.",
      images: [
        "/images/education.jpg",
        "/images/jhola-movement-1.jpg",
        "/images/jhola-movement-3.jpg"
      ],
      features: [
        "Jhola bag + accessories",
        "Reusable water bottle",
        "Bamboo pen set",
        "Eco-friendly notebook",
        "Student-friendly pricing"
      ],
      category: "Eco Kits",
      inStock: true,
      rating: 4.8,
      reviews: 156,
      colors: ["Blue", "Green", "Purple"],
      sizes: ["Standard"]
    },
    {
      id: 6,
      name: "Women Empowerment Pack",
      price: "₹600",
      originalPrice: "₹750",
      description: "Supporting women artisans with every purchase of this special collection.",
      images: [
        "/images/women-employment.jpg",
        "/images/weaver-empowerment.jpg",
        "/images/jhola-movement-1.jpg"
      ],
      features: [
        "Made by women cooperatives",
        "Fair trade certified",
        "Includes artisan story card",
        "Premium quality materials",
        "Social impact purchase"
      ],
      category: "Social Impact",
      inStock: true,
      rating: 4.9,
      reviews: 78,
      colors: ["Maroon", "Pink", "Cream"],
      sizes: ["Medium", "Large"]
    }
  ];

  const categories = [
    { name: "All Products", count: products.length },
    { name: "Jhola Bags", count: 2 },
    { name: "Gift Sets", count: 1 },
    { name: "Special Edition", count: 1 },
    { name: "Eco Kits", count: 1 },
    { name: "Social Impact", count: 1 }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "All Products" || product.category === selectedCategory;
    const colorMatch = !selectedColor || product.colors.includes(selectedColor);
    const sizeMatch = !selectedSize || product.sizes.includes(selectedSize);
    return categoryMatch && colorMatch && sizeMatch;
  });

  const openProductModal = (productId: number) => {
    setSelectedProduct(productId);
    setSelectedImageIndex(0);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct) {
      const product = products.find(p => p.id === selectedProduct);
      if (product) {
        setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      const product = products.find(p => p.id === selectedProduct);
      if (product) {
        setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
      }
    }
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

  const handleAddToCart = (product: typeof products[0]) => {
    // Open contact page or phone call for ordering
    const message = `Hi! I'm interested in ordering the ${product.name} (${product.price}). Please provide more details about availability and bulk pricing.`;
    const whatsappUrl = `https://wa.me/918449199211?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative spacing-responsive-xl safe-area-inset overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-transparent to-green-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_70%)]" />

        <div className="container-responsive">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="btn-touch mb-6 sm:mb-8 text-green-400 hover:text-green-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Page header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full glass border border-green-500/30 mb-4 sm:mb-6">
              <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-xs sm:text-sm font-medium">Our Products</span>
            </div>

            <h1 className="text-responsive-4xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Eco-Friendly</span>
              <br />
              <span className="gradient-text">Jhola Collection</span>
            </h1>

            <p className="text-responsive-base text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Discover our handcrafted, sustainable jhola bags made by rural artisans. 
              Every purchase supports environmental protection and women empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-4 sm:py-6 lg:py-8 border-t border-gray-800">
        <div className="container-responsive">
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center w-full">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`btn-touch px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  <span className="ml-1">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={ref} className="spacing-responsive-lg">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid-responsive-1-2-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative cursor-pointer"
                onClick={() => openProductModal(product.id)}
              >
                {/* Product Card */}
                <div className="relative overflow-hidden rounded-2xl glass border-2 border-gray-800/50 hover:border-green-500/30 transition-all duration-300">
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                  </div>

                  {/* Stock Status */}
                  <div className="absolute top-4 right-4 z-10">
                    {product.inStock ? (
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        In Stock
                      </div>
                    ) : (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Out of Stock
                      </div>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {product.name}
                    </h3>

                    {/* Category */}
                    <p className="text-green-400 text-sm font-medium mb-3">
                      {product.category}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-green-400">
                        {product.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    </div>

                    {/* Features Preview */}
                    <div className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {product.features.length > 2 && (
                        <p className="text-sm text-green-400 font-medium">
                          +{product.features.length - 2} more features
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Hover Button */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors duration-200">
                      <Package className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Products Found */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeProductModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] bg-gray-900/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const product = products.find(p => p.id === selectedProduct);
                if (!product) return null;

                return (
                  <>
                    {/* Close Button */}
                    <button
                      onClick={closeProductModal}
                      className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500/50 transition-all duration-200"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Modal Content */}
                    <div className="flex flex-col lg:flex-row max-h-[90vh]">
                      {/* Image Gallery */}
                      <div className="lg:w-1/2 relative">
                        <div className="relative aspect-square">
                          <img
                            src={product.images[selectedImageIndex]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />

                          {/* Navigation Buttons */}
                          {product.images.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-500/50 transition-all duration-200"
                              >
                                <ChevronLeft className="w-5 h-5" />
                              </button>

                              <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-500/50 transition-all duration-200"
                              >
                                <ChevronRight className="w-5 h-5" />
                              </button>
                            </>
                          )}

                          {/* Image Indicators */}
                          {product.images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                              {product.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setSelectedImageIndex(index)}
                                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    index === selectedImageIndex
                                      ? 'bg-green-500'
                                      : 'bg-white/30 hover:bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="lg:w-1/2 p-8 overflow-y-auto">
                        <div className="space-y-6">
                          {/* Header */}
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                                {product.category}
                              </span>
                              {product.inStock ? (
                                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">
                                  In Stock
                                </span>
                              ) : (
                                <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>

                            {/* Rating */}
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-5 h-5 ${
                                      i < Math.floor(product.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-400'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-gray-300">
                                {product.rating} ({product.reviews} reviews)
                              </span>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-green-400">
                              {product.price}
                            </span>
                            <span className="text-xl text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                            <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-bold">
                              {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed">
                            {product.description}
                          </p>

                          {/* Features */}
                          <div>
                            <h3 className="text-xl font-bold text-white mb-3">Features</h3>
                            <div className="space-y-2">
                              {product.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                  <span className="text-gray-300">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Colors */}
                          <div>
                            <h3 className="text-lg font-bold text-white mb-3">Available Colors</h3>
                            <div className="flex flex-wrap gap-2">
                              {product.colors.map((color) => (
                                <span
                                  key={color}
                                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                                >
                                  {color}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Sizes */}
                          <div>
                            <h3 className="text-lg font-bold text-white mb-3">Available Sizes</h3>
                            <div className="flex flex-wrap gap-2">
                              {product.sizes.map((size) => (
                                <span
                                  key={size}
                                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                                >
                                  {size}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-4 pt-6 border-t border-gray-800">
                            <Button
                              onClick={() => handleAddToCart(product)}
                              disabled={!product.inStock}
                              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {product.inStock ? 'Contact for Order' : 'Out of Stock'}
                            </Button>
                            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="spacing-responsive-lg bg-gradient-to-r from-green-950/30 to-blue-950/30">
        <div className="container-responsive text-center">
          <h2 className="text-responsive-2xl font-bold text-white mb-4 sm:mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-responsive-base text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Every jhola bag purchased supports rural artisans and helps protect our environment. 
            Join the sustainable living movement today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button 
              className="btn-touch bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 text-base"
              onClick={() => window.open('https://wa.me/919997757749', '_blank')}
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Order via WhatsApp
            </Button>
            <Button 
              variant="outline"
              className="btn-touch border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 text-base"
              onClick={() => navigate('/about')}
            >
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Learn Our Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;