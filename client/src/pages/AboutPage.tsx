
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

const AboutPage = () => {
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

  const tabs = [
    {
      id: "vision",
      label: "Vision & Mission",
      icon: Eye,
      content: {
        title: "Our Vision & Mission",
        description: siteContent.mission.vision,
        mission: siteContent.mission.mission,
        motto: siteContent.mission.motto
      }
    },
    {
      id: "team",
      label: "Our Team",
      icon: Users,
      content: {
        title: "Meet Our Dedicated Team",
        description: "Our experienced team of social workers, educators, and environmental activists work tirelessly to create positive change in communities across India.",
        members: [
          {
            name: "Dr. Anubha Vashishth",
            role: "Founder & President",
            image: "/images/anubha-vashishth.jpg",
            bio: "Rex Karamveer Chakra Gold 2022 recipient, leading environmental and social initiatives for over a decade."
          },
          {
            name: "Team Member 2",
            role: "Program Director",
            image: "/images/team-member.jpg",
            bio: "Dedicated to empowering communities through sustainable development programs."
          }
        ]
      }
    },
    {
      id: "allies",
      label: "Our Allies",
      icon: Handshake,
      content: {
        title: "Our Valued Partners & Allies",
        description: "We collaborate with various organizations, government bodies, and community leaders to amplify our impact and reach more communities in need.",
        partners: [
          {
            name: "Community Partners",
            type: "Local Organizations",
            description: "Grassroots organizations helping us reach remote communities"
          },
          {
            name: "Educational Institutions",
            type: "Schools & Colleges",
            description: "Academic partners supporting our education initiatives"
          },
          {
            name: "Government Bodies",
            type: "Official Support",
            description: "Working with local and state governments for policy implementation"
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      <div className="fixed inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(139,92,246,0.05)_60deg,transparent_120deg)]" />

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${12 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative spacing-responsive-xl safe-area-inset">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/20 to-transparent" />

          <div className="container-responsive" ref={ref}>
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full glass border border-green-500/30 mb-4 sm:mb-6">
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2" />
                <span className="text-green-400 text-xs sm:text-sm font-medium">Our Story</span>
              </div>

              <h1 className="text-responsive-4xl font-bold mb-4 sm:mb-6">
                <span className="text-white">Empowering Communities</span>
                <br />
                <span className="gradient-text">Since 2014</span>
              </h1>

              <p className="text-responsive-base text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
                From a small initiative to replace plastic bags with eco-friendly jhola bags, 
                we've grown into a movement that empowers women, protects the environment, and builds sustainable communities.
              </p>
            </div>

            {/* Stats counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {[
                { number: counters.years, label: "Years of Service", suffix: "+" },
                { number: counters.communities, label: "Communities Reached", suffix: "+" },
                { number: counters.women, label: "Women Empowered", suffix: "+" },
                { number: counters.children, label: "Children Educated", suffix: "+" }
              ].map((stat, index) => (
                <div key={index} className="text-center glass p-6 rounded-xl border border-green-500/20">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tab navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "outline"}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                        : "glass border-green-500/30 text-gray-300 hover:border-green-400/50"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </Button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="mb-20">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-all duration-500 ${
                    activeTab === tab.id ? "opacity-100 block" : "opacity-0 hidden"
                  }`}
                >
                  <Card className="glass border-green-500/20 p-8 rounded-2xl">
                    <CardContent className="space-y-8">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold gradient-text mb-4">
                          {tab.content.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                          {tab.content.description}
                        </p>
                      </div>

                      {/* Vision & Mission specific content */}
                      {tab.id === "vision" && (
                        <div className="space-y-12">
                          {/* Vision Section */}
                          <div className="glass p-8 rounded-xl border border-blue-500/20">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                              <div>
                                <div className="flex items-center mb-6">
                                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                                    <span className="text-2xl font-bold text-blue-400">1</span>
                                  </div>
                                  <h4 className="text-2xl font-bold text-blue-400">Vision</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                  To envision a harmonious world of not using single use plastic 
                                  bags and other products among people (of this whole planet) 
                                  that they choose Jhola to use such plastic products without but 
                                  instead of plastic bags against to giving up life saving 
                                  nature.
                                </p>
                              </div>
                              <div className="relative">
                                <div className="w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                  <img 
                                    src="/images/traditional-crafts.jpg" 
                                    alt="Traditional Handwoven Crafts"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl" style={{display: 'none'}}>
                                    🧵
                                  </div>
                                </div>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-pulse" />
                              </div>
                            </div>
                          </div>

                          {/* Mission Section */}
                          <div className="glass p-8 rounded-xl border border-green-500/20">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                              <div className="order-2 md:order-1 relative">
                                <div className="w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-green-500/20 to-teal-500/20">
                                  <img 
                                    src="/images/jhola-mission.jpg" 
                                    alt="Jhola Bags Mission"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center text-6xl" style={{display: 'none'}}>
                                    👜
                                  </div>
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500/30 rounded-full animate-pulse" />
                              </div>
                              <div className="order-1 md:order-2">
                                <div className="flex items-center mb-6">
                                  <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                                    <span className="text-2xl font-bold text-green-400">2</span>
                                  </div>
                                  <h4 className="text-2xl font-bold text-green-400">Mission</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                  We are committed to introducing alternative, improved, and 
                                  innovative environmentally friendly products that serve as safe 
                                  alternatives to plastic bags through our affordable, 
                                  practical housekeepers aim to meet eco-conscious habits in 
                                  people by actively disrupting the unconscious cycle of plastic.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                  Our journey includes sharing of food, providing employment, 
                                  teaching thinking awareness, gender reinforcement, mass 
                                  media campaign, and community enhancement, we strive to 
                                  make plastic free environment around us & for all the people. 
                                  through our efforts, our aim is to foster positive social 
                                  change across multiple dimensions of sustainable development 
                                  learning others and creating a powerful, for supporting action 
                                  that turns to the movement toward a plastic-free future.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Our Values */}
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="glass p-6 rounded-xl border border-purple-500/20 text-center">
                              <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                                <Lightbulb className="w-8 h-8 text-purple-400 mx-auto" />
                              </div>
                              <h4 className="text-xl font-semibold text-white mb-3">Innovation</h4>
                              <p className="text-gray-400 text-sm">
                                Creating innovative eco-friendly alternatives through traditional craftsmanship and modern sustainability practices.
                              </p>
                            </div>

                            <div className="glass p-6 rounded-xl border border-yellow-500/20 text-center">
                              <div className="bg-yellow-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                                <Heart className="w-8 h-8 text-yellow-400 mx-auto" />
                              </div>
                              <h4 className="text-xl font-semibold text-white mb-3">Compassion</h4>
                              <p className="text-gray-400 text-sm">
                                Driven by genuine care for our planet and communities, creating lasting positive environmental impact.
                              </p>
                            </div>

                            <div className="glass p-6 rounded-xl border border-green-500/20 text-center">
                              <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                                <UserCheck className="w-8 h-8 text-green-400 mx-auto" />
                              </div>
                              <h4 className="text-xl font-semibold text-white mb-3">Empowerment</h4>
                              <p className="text-gray-400 text-sm">
                                Empowering women through employment opportunities while preserving traditional weaving skills and crafts.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Team specific content */}
                      {tab.id === "team" && (
                        <div className="space-y-8">
                          {/* Founder Section */}
                          <div className="glass p-8 rounded-xl border border-green-500/20">
                            <div className="grid md:grid-cols-3 gap-8 items-start">
                              <div className="text-center">
                                <div className="w-64 h-80 mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-green-500/20 to-blue-500/20">
                                  <img 
                                    src="/images/dr-anubha-singh.jpg" 
                                    alt="Dr. Anubha Singh"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                      (e.target as HTMLImageElement).nextElementSibling!.setAttribute('style', 'display: flex');
                                    }}
                                  />
                                  <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center text-6xl" style={{display: 'none'}}>
                                    👩‍💼
                                  </div>
                                </div>
                              </div>

                              <div className="md:col-span-2">
                                <div className="mb-4">
                                  <h3 className="text-2xl font-bold text-white mb-2">DR. ANUBHA SINGH</h3>
                                  <p className="text-lg text-green-400 font-semibold mb-1">Founder & Jhola Woman</p>
                                  <p className="text-gray-400 italic">Multi-award winner</p>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed">
                                  Dr. Anubha Singh is not just any professional, talented alumni performer but systems, environmentalists and social worker for problem. Men in natural traditional towards social work she has not simply identified the problem also provided the solution. She has own been the witness of numerous social issues during her Pratour Adragan, an axis between our personality wholistic and Athenian.
                                </p>

                                <div className="mb-6">
                                  <h4 className="text-lg font-semibold text-white mb-3">Awards & Recognition</h4>
                                  <div className="grid gap-3">
                                    <div className="flex items-center space-x-3">
                                      <Award className="w-5 h-5 text-yellow-500" />
                                      <span className="text-gray-300">Rex Karamveer Chakra Gold 2022</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                      <Award className="w-5 h-5 text-yellow-500" />
                                      <span className="text-gray-300">Devbhoomi Rashtriya Ratan Award 2025</span>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-3">Expertise</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {["Environmental Leadership", "Social Innovation", "Women Empowerment", "Sustainable Development"].map((skill, skillIndex) => (
                                      <span 
                                        key={skillIndex}
                                        className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Allies specific content */}
                      {tab.id === "allies" && (
                        <div className="space-y-8">
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Sample ally card */}
                            <div className="glass p-6 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                              <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                                  <Users className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white">Community Partners</h4>
                                  <p className="text-green-400 text-sm">Local Organizations</p>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm">Grassroots organizations helping us reach remote communities and implement sustainable development programs.</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Achievements grid */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-center gradient-text mb-12">
                Our Key Achievements
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <Card key={index} className="glass border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                        </div>
                        <p className="text-gray-300">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Self-sustainability model */}
            <div className="text-center">
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
      </div>
    </div>
  );
};

export default AboutPage;
