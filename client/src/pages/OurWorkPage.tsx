
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowLeft, 
  Users, 
  BookOpen, 
  Heart, 
  Shield, 
  Lightbulb,
  Target,
  Calendar,
  MapPin,
  Award
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Swadeshi Hathakargha",
    description: "Promoting traditional handloom weaving and supporting local artisans through sustainable practices and fair trade.",
    image: "/images/traditional-crafts.jpg",
    category: "Traditional Crafts",
    icon: Shield,
    details: [
      "Supporting local handloom weavers",
      "Preserving traditional weaving techniques",
      "Creating sustainable employment",
      "Promoting Indian handicrafts"
    ],
    stats: { 
      beneficiaries: "200+ artisans", 
      impact: "High", 
      duration: "2+ years",
      location: "Multiple states"
    },
    fullDescription: "Our Swadeshi Hathakargha project focuses on reviving and promoting traditional Indian handloom weaving. We work directly with artisan communities to provide them with sustainable employment opportunities while preserving age-old weaving techniques that are at risk of being lost to modernization."
  },
  {
    id: 2,
    title: "Green Warriors",
    description: "Environmental awareness and action programs engaging youth and communities in sustainable practices.",
    image: "/images/jhola-movement-1.jpg",
    category: "Environment",
    icon: Lightbulb,
    details: [
      "Youth environmental education",
      "Community awareness campaigns",
      "Tree plantation drives",
      "Waste management initiatives"
    ],
    stats: { 
      beneficiaries: "1000+ participants", 
      impact: "Very High", 
      duration: "Ongoing",
      location: "Pan-India"
    },
    fullDescription: "Green Warriors is our flagship environmental program that mobilizes youth and communities to take concrete action against environmental degradation. Through workshops, campaigns, and hands-on activities, we're building a generation of environmental stewards."
  },
  {
    id: 3,
    title: "Project Vaatsalya",
    description: "Child welfare and development program focusing on education, health, and overall well-being of underprivileged children.",
    image: "/images/education.jpg",
    category: "Child Welfare",
    icon: Heart,
    details: [
      "Child education support",
      "Health and nutrition programs",
      "Skill development for children",
      "Family support services"
    ],
    stats: { 
      beneficiaries: "500+ children", 
      impact: "Very High", 
      duration: "3+ years",
      location: "Rural areas"
    },
    fullDescription: "Project Vaatsalya embodies our commitment to child welfare. We provide comprehensive support to underprivileged children including education, healthcare, nutrition, and skill development, ensuring they have the foundation they need for a bright future."
  },
  {
    id: 4,
    title: "Project Naari Samaan",
    description: "Women empowerment initiative providing skills training, employment opportunities, and support for women's independence.",
    image: "/images/women-employment.jpg",
    category: "Women Empowerment",
    icon: Users,
    details: [
      "Skills training for women",
      "Employment generation",
      "Entrepreneurship support",
      "Financial literacy programs"
    ],
    stats: { 
      beneficiaries: "300+ women", 
      impact: "High", 
      duration: "2+ years",
      location: "Urban & Rural"
    },
    fullDescription: "Project Naari Samaan is dedicated to empowering women through comprehensive skill development and employment opportunities. We focus on creating sustainable livelihoods that enable women to achieve financial independence and social recognition."
  },
  {
    id: 5,
    title: "Project Pahel",
    description: "Initiative for social change and community development through grassroots engagement and sustainable solutions.",
    image: "/images/remote-education.jpg",
    category: "Community Development",
    icon: Target,
    details: [
      "Community mobilization",
      "Grassroots development",
      "Social awareness campaigns",
      "Sustainable development practices"
    ],
    stats: { 
      beneficiaries: "750+ community members", 
      impact: "High", 
      duration: "Ongoing",
      location: "Multiple districts"
    },
    fullDescription: "Project Pahel represents our grassroots approach to social change. We work at the community level to identify local challenges and implement sustainable solutions that are developed with and by the communities themselves."
  }
];

const OurWorkPage = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative spacing-responsive-xl safe-area-inset overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-transparent to-green-950/20" />

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
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-xs sm:text-sm font-medium">Our Projects</span>
            </div>

            <h1 className="text-responsive-4xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Our</span>
              <br />
              <span className="gradient-text">Work</span>
            </h1>

            <p className="text-responsive-base text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
              Discover our comprehensive projects that are creating lasting impact across communities,
              from traditional craft preservation to environmental conservation and social empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="spacing-responsive-lg" ref={ref}>
        <div className="container-responsive">
          <div className="grid-responsive-1-2-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="relative overflow-hidden bg-black border border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl hover:shadow-green-500/20">
                    {/* Elegant accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600" />

                    <CardContent className="relative p-8 z-20 h-full bg-gradient-to-br from-black via-gray-900 to-black">
                      {/* Category Badge */}
                      <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-green-400 to-green-500 text-black text-xs font-bold rounded-full shadow-lg">
                        {project.category}
                      </div>

                      {/* Icon */}
                      <div className="bg-green-500/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-green-400" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                          <div className="text-green-400 text-xs font-medium mb-1">Beneficiaries</div>
                          <div className="text-white font-bold text-sm">{project.stats.beneficiaries}</div>
                        </div>
                        <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                          <div className="text-green-400 text-xs font-medium mb-1">Duration</div>
                          <div className="text-white font-bold text-sm">{project.stats.duration}</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {project.details.slice(0, 3).map((detail, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>

                      {/* Learn More Button */}
                      <Button
                        onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0"
                      >
                        {selectedProject === project.id ? 'Show Less' : 'Learn More'}
                      </Button>

                      {/* Expanded Details */}
                      {selectedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-gray-700"
                        >
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {project.fullDescription}
                          </p>
                          
                          <div className="space-y-2">
                            <h4 className="text-green-400 font-semibold text-sm">Key Activities:</h4>
                            {project.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-400">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                                {detail}
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 flex items-center text-sm text-gray-400">
                            <MapPin className="w-4 h-4 mr-2 text-green-400" />
                            <span>{project.stats.location}</span>
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="max-w-4xl mx-auto glass p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                Join Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Every project we undertake is designed to create sustainable, long-term impact.
                Join us in our mission to build a better, more equitable society for all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => navigate('/#contact')}
                >
                  Get Involved
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                  onClick={() => navigate('/#pledge')}
                >
                  Take Our Pledge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;
