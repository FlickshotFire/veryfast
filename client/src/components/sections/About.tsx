
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { 
  Leaf, 
  Users, 
  GraduationCap, 
  Heart, 
  Award, 
  Target, 
  Eye, 
  Lightbulb,
  UserCheck,
  Handshake,
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState("vision");

  const [counters, setCounters] = useState({
    years: 0,
    communities: 0,
    women: 0,
    children: 0
  });

  useEffect(() => {
    if (inView) {
      const animateCounter = (target: number, key: keyof typeof counters) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      };

      animateCounter(11, 'years');
      animateCounter(50, 'communities');
      animateCounter(500, 'women');
      animateCounter(1000, 'children');
    }
  }, [inView]);

  const achievements = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Leading the fight against single-use plastic with our Jhola movement"
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Creating employment opportunities for women through sustainable practices"
    },
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "Providing free education to underprivileged children and remote communities"
    },
    {
      icon: Heart,
      title: "Community Welfare",
      description: "Comprehensive social work including health awareness and skill development"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Rex Karamveer Chakra Gold 2022 and Devbhoomi Rashtriya Ratan Award 2025"
    },
    {
      icon: Target,
      title: "Self-Sustainable Model",
      description: "Operating without external funding through our innovative Swadesi Hathkargha arm"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Anubha Pundir",
      title: "Founder & Director",
      subtitle: "The jhola woman – jholapreneur",
      image: "/images/dr-anubha-pundir.jpg",
      awards: [
        "Rex Karamveer Chakra Gold 2022",
        "Devbhoomi Rashtriya Ratan Award 2025"
      ],
      description: "Leading environmental activist and founder of the Jhola movement in India. Dr. Pundir has dedicated over a decade to transforming lives through sustainable practices and women empowerment.",
      expertise: ["Environmental Leadership", "Women Empowerment", "Social Innovation", "Sustainable Development"]
    },
    {
      name: "Team of Volunteers",
      title: "Dedicated Volunteers",
      subtitle: "Young Enthusiasts & Experienced Members",
      image: "/images/team-volunteers.jpg",
      description: "Our diverse team of experienced professionals and young enthusiasts work together to create meaningful change in communities across India.",
      expertise: ["Community Outreach", "Education", "Skill Development", "Environmental Advocacy"]
    }
  ];

  const allies = [
    {
      name: "Mr. Ramesh Menon",
      role: "Entrepreneur",
      location: "Mumbai",
      image: "/images/ramesh-menon.jpg",
      quote: "The concept of using cloth Jholas is so very Indian and logical. Its reusable, it's practical, it's attractive. Raghukul Aryawart seems to have hit the right button in promoting the Cloth Bag with its committed dedicated group of young volunteers.",
      contribution: "Supporting Jhola movement promotion"
    },
    {
      name: "Mrs. Shanker",
      role: "School Administrator",
      location: "Sultanpur, UP",
      image: "/images/mrs-shanker.jpg",
      quote: "Administrator and Coordinator of Surya Academy Senior Secondary Public School, committed for environment protection and highly determined to connect Jhola-Abhiyan in her school, parents and locality.",
      contribution: "Educational institution partnership"
    },
    {
      name: "Mrinalini Gupta",
      role: "Social Activist",
      location: "Faridabad",
      image: "/images/mrinalini-gupta.png",
      quote: "Lady with full on Jhose and Junoon, she is executive member and heading many groups, societies and committees that work for many social causes. She has not only approached us first also gave so many ideas to make this project successful.",
      contribution: "Social movement coordination"
    },
    {
      name: "Rachna Tiwary",
      role: "Educationist & Writer",
      location: "Delhi Safdarjung Enclave",
      image: "/images/rachna-tiwary.jpg",
      quote: "An educationist, trainer, Writer, Editor, Gold medalist, Member of Appellate Authority, DDA, Joint secretary and executive member of Lady Irwin College Alumni Association, executive member of Efforts Group.",
      contribution: "Educational content and training"
    },
    {
      name: "Pankaj Aggarwal",
      role: "Chartered Accountant",
      location: "Delhi Safdarjung Enclave",
      image: "/images/pankaj-aggarwal.jpg",
      quote: "Renowned CA by profession, have been associated with many environmental and social causes; he ordered 100 Jholas from us and promised us to promote it as much as he can.",
      contribution: "Financial advisory and bulk orders"
    }
  ];

  const tabs = [
    { id: "vision", label: "VISION & MISSION", icon: Eye },
    { id: "team", label: "OUR TEAM", icon: Users },
    { id: "allies", label: "OUR ALLIES", icon: Handshake }
  ];

  const renderVisionMission = () => (
    <div className="space-y-12">
      {/* Vision Statement */}
      <div className="glass p-8 md:p-12 rounded-2xl border border-green-500/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                Our Vision
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              {siteContent.mission.vision}
            </p>
          </div>
          <div className="relative">
            <div className="text-8xl opacity-20 absolute -top-4 -right-4">👁️</div>
            <div className="glass p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">
                Global Impact
              </h4>
              <p className="text-gray-300">
                Inspiring worldwide change through innovative alternatives and mass awareness campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="glass p-8 md:p-12 rounded-2xl border border-green-500/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="text-8xl opacity-20 absolute -top-4 -left-4">🎯</div>
            <div className="glass p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-green-400 mb-4">
                {siteContent.mission.tagline}
              </h4>
              <p className="text-gray-300">
                Our three-pillar approach ensures sustainable development while preserving environmental integrity.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-400">
                Our Mission
              </h3>
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {siteContent.mission.mission}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-300">Sustainable living advocacy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-300">Women empowerment through employment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-300">Education for underprivileged children</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="glass border-purple-500/20 hover:border-purple-500/50 smooth-animation">
          <CardContent className="p-6 text-center">
            <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-purple-400 mx-auto" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Innovation</h4>
            <p className="text-gray-400 text-sm">
              Creating innovative solutions to environmental challenges through traditional wisdom and modern approach.
            </p>
          </CardContent>
        </Card>

        <Card className="glass border-yellow-500/20 hover:border-yellow-500/50 smooth-animation">
          <CardContent className="p-6 text-center">
            <div className="bg-yellow-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Heart className="w-8 h-8 text-yellow-400 mx-auto" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Compassion</h4>
            <p className="text-gray-400 text-sm">
              Driven by genuine care for communities and the environment, creating lasting positive impact.
            </p>
          </CardContent>
        </Card>

        <Card className="glass border-cyan-500/20 hover:border-cyan-500/50 smooth-animation">
          <CardContent className="p-6 text-center">
            <div className="bg-cyan-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Target className="w-8 h-8 text-cyan-400 mx-auto" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Sustainability</h4>
            <p className="text-gray-400 text-sm">
              Building self-sustainable models that create long-term positive change without external dependency.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="space-y-12">
      {teamMembers.map((member, index) => (
        <Card 
          key={index}
          className="glass border-green-500/20 hover:border-green-500/50 smooth-animation"
        >
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="w-48 h-48 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mb-4 overflow-hidden">
                  <div className="text-6xl">👤</div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-lg text-green-400 font-semibold mb-1">{member.title}</p>
                  {member.subtitle && (
                    <p className="text-gray-400 italic">{member.subtitle}</p>
                  )}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {member.description}
                </p>

                {member.awards && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Awards & Recognition</h4>
                    <div className="grid gap-3">
                      {member.awards.map((award, awardIndex) => (
                        <div key={awardIndex} className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-yellow-500" />
                          <span className="text-gray-300">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {member.expertise && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderAllies = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Our allies and supporters play a crucial role in amplifying our mission. 
          These dedicated individuals and organizations share our vision for a sustainable future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {allies.map((ally, index) => (
          <Card 
            key={index}
            className="glass border-blue-500/20 hover:border-blue-500/50 smooth-animation"
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <div className="text-2xl">👤</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{ally.name}</h3>
                  <p className="text-blue-400 font-semibold text-sm mb-1">{ally.role}</p>
                  <div className="flex items-center space-x-1 text-gray-400 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{ally.location}</span>
                  </div>
                </div>
              </div>

              <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 border-l-4 border-blue-500/30 pl-4 italic">
                "{ally.quote}"
              </blockquote>

              <div className="flex items-center space-x-2 text-xs text-green-400">
                <UserCheck className="w-4 h-4" />
                <span>{ally.contribution}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Partnership Categories */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Partnership Categories</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass border-green-500/20">
            <CardContent className="p-6 text-center">
              <div className="bg-green-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-green-400 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Educational Partners</h4>
              <p className="text-gray-400 text-sm">Schools, colleges, and educational institutions promoting environmental awareness</p>
            </CardContent>
          </Card>

          <Card className="glass border-blue-500/20">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-400 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Community Leaders</h4>
              <p className="text-gray-400 text-sm">Social activists and community organizers driving grassroots change</p>
            </CardContent>
          </Card>

          <Card className="glass border-purple-500/20">
            <CardContent className="p-6 text-center">
              <div className="bg-purple-500/20 p-3 rounded-lg w-12 h-12 mx-auto mb-4">
                <Handshake className="w-6 h-6 text-purple-400 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Professional Network</h4>
              <p className="text-gray-400 text-sm">Business leaders and professionals supporting sustainable practices</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <Leaf className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Know Us Better</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">About</span>
            <br />
            <span className="gradient-text">Raghukul Aryawart</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {siteContent.about.description}
          </p>
        </div>

        {/* Stats counter */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="text-center glass p-6 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {counters.years}+
            </div>
            <div className="text-gray-400">Years of Experience</div>
          </div>
          <div className="text-center glass p-6 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {counters.communities}+
            </div>
            <div className="text-gray-400">Communities Served</div>
          </div>
          <div className="text-center glass p-6 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {counters.women}+
            </div>
            <div className="text-gray-400">Women Empowered</div>
          </div>
          <div className="text-center glass p-6 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {counters.children}+
            </div>
            <div className="text-gray-400">Children Educated</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass p-2 rounded-2xl border border-green-500/30 inline-flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`px-8 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id 
                      ? "bg-green-600 hover:bg-green-700 text-white shadow-lg" 
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {activeTab === "vision" && renderVisionMission()}
          {activeTab === "team" && renderTeam()}
          {activeTab === "allies" && renderAllies()}
        </div>

        {/* Self-sustainability model */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto glass p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Unique Self-Sustainability Model
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {siteContent.about.fundingModel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
