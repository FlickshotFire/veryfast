
import { ArrowRight, Play, Sparkles, Globe, Users, Award } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { icon: Users, label: "Communities Served", value: "50+" },
    { icon: Award, label: "Years of Impact", value: "11+" },
    { icon: Globe, label: "Lives Touched", value: "10K+" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-blue-500/30 mb-6 group hover:border-blue-400/50 transition-colors">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2 group-hover:rotate-12 transition-transform" />
              <span className="text-blue-400 text-sm font-medium">Transforming Lives Since 2013</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white block">Building</span>
              <span className="gradient-text block">Sustainable</span>
              <span className="text-white block">Futures</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
              Empowering communities through eco-friendly solutions, education, and women empowerment. 
              Join us in creating a plastic-free, sustainable world for future generations.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-modern bg-gradient-bg hover:shadow-xl hover:shadow-blue-500/25 text-white border-0 px-8 py-4 text-lg group">
                Explore Our Mission
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="glass border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass border border-white/10 mb-3 group-hover:border-blue-400/50 transition-colors">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Interactive card */}
          <div className="relative">
            <div className="glass-strong rounded-3xl p-8 card-hover">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/logo.webp')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white/80 text-sm">Watch Our Impact Story</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Join the <span className="gradient-text-eco">Green Revolution</span>
              </h3>
              
              <p className="text-white/70 mb-6">
                Discover how we're transforming communities through sustainable practices, 
                education, and empowerment initiatives across India.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-white/80 text-sm">500+ Women Empowered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-white/80 text-sm">1000+ Children Educated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-white/80 text-sm">50+ Communities Served</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-bg rounded-full float-animation opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-bg-eco rounded-full float-animation opacity-60" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
