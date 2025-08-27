import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  Scissors, 
  Droplets, 
  Heart,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const WorkAreas = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const workAreas = [
    {
      id: 1,
      title: "Women Employment Opportunities",
      description: "We create income-generating opportunities for women in rural and urban areas through skill development and employment in eco-friendly product manufacturing.",
      image: "/images/women-employment.jpg",
      category: "Empowerment",
      icon: Users,
      stats: { beneficiaries: "500+", impact: "Very High", duration: "Ongoing" }
    },
    {
      id: 2,
      title: "Free BPL Education",
      description: "We offer free education to children from below poverty line families, ensuring no child is denied the right to learn due to financial constraints.",
      image: "/images/education.jpg",
      category: "Education",
      icon: BookOpen,
      stats: { beneficiaries: "1000+", impact: "Very High", duration: "Ongoing" }
    },
    {
      id: 3,
      title: "Remote Location Education",
      description: "We bridge the education gap in remote and underserved locations by providing access to quality education through mobile teaching units and digital tools.",
      image: "/images/remote-education.jpg",
      category: "Education",
      icon: GraduationCap,
      stats: { beneficiaries: "50+", impact: "High", duration: "Ongoing" }
    },
    {
      id: 4,
      title: "Weaver Empowerment",
      description: "Supporting traditional weavers and artisans by providing them with sustainable employment opportunities and preserving traditional craft techniques.",
      image: "/images/weaver-empowerment.jpg",
      category: "Traditional Crafts",
      icon: Scissors,
      stats: { beneficiaries: "200+", impact: "High", duration: "2+ years" }
    },
    {
      id: 5,
      title: "Hygiene Awareness",
      description: "Promoting health and hygiene practices in communities through awareness campaigns, education programs, and providing access to clean facilities.",
      image: "/images/hygiene-awareness.jpg",
      category: "Health",
      icon: Droplets,
      stats: { beneficiaries: "Multiple cities", impact: "Medium", duration: "Ongoing" }
    }
  ];

  return (
    <section id="work-areas" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/10 via-transparent to-green-950/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <Heart className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Our Impact</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Areas of</span>
            <br />
            <span className="gradient-text">Social Concern</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            RA works on the following areas of social concerns, creating sustainable
            impact across communities through innovative approaches and dedicated service.
          </p>
        </div>

        {/* Work areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-black border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.02] group shadow-2xl hover:shadow-yellow-500/20">
                  {/* Elegant gold accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />

                  {/* Content Container */}
                  <div className="relative p-8 z-20 h-full bg-gradient-to-br from-black via-gray-900 to-black">
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold rounded-full shadow-lg">
                      {area.category}
                    </div>

                    {/* Icon */}
                    <div className="bg-yellow-500/20 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                      <IconComponent className="w-8 h-8 text-yellow-400" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {area.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                        <div className="text-yellow-400 text-xs font-medium mb-1">Beneficiaries</div>
                        <div className="text-white font-bold text-sm">{area.stats.beneficiaries}</div>
                      </div>
                      <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                        <div className="text-yellow-400 text-xs font-medium mb-1">Impact</div>
                        <div className="text-white font-bold text-sm">{area.stats.impact}</div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action - Link to Our Work page */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto glass p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Discover Our Detailed Projects
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Learn more about our specific projects and initiatives that are creating
              lasting impact across these areas of social concern.
            </p>
            <Button 
              onClick={() => navigate('/our-work')}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              View Our Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAreas;