import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Leaf, Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { usePledge } from "@/lib/stores/usePledge";
import { useAudio } from "@/lib/stores/useAudio";

const PledgeSystem = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { pledges, addPledge } = usePledge();
  const { playSuccess } = useAudio();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed || !formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    addPledge({
      id: Date.now().toString(),
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      createdAt: new Date()
    });

    playSuccess();
    setIsSubmitting(false);
    setShowForm(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      agreed: false
    });
  };

  const pledgeStats = [
    {
      icon: Users,
      label: "Total Pledges",
      value: pledges.length + 1247, // Adding some base count
      color: "text-green-400"
    },
    {
      icon: Target,
      label: "Cities Reached",
      value: 45,
      color: "text-blue-400"
    },
    {
      icon: Award,
      label: "Impact Score",
      value: "98%",
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="pledge" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-transparent to-green-950/20" />
      
      {/* Floating pledge particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-10 particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            🌱
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <Leaf className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Take Action</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Take a Pledge</span>
            <br />
            <span className="gradient-text">Against Plastic!</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join the movement for a cleaner earth. Make a commitment that will 
            help preserve our planet for future generations.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {pledgeStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center glass p-6 rounded-lg border border-green-500/20"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main pledge section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pledge content */}
          <div className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <Card className="glass border-green-500/20 mb-8">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🌍</div>
                  <h3 className="text-2xl font-bold gradient-text mb-4">
                    The Pledge
                  </h3>
                  <div className="text-gray-400 text-sm mb-4">- Raghukul Aryawart</div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                    <p className="text-lg text-white font-medium mb-4">
                      "I will do no harm to the mother earth due to use of single use plastic."
                    </p>
                    <p className="text-gray-300">
                      I will carry a cotton bag "jhola" wherever I go and will say 
                      <span className="text-green-400 font-semibold"> "big no"</span> to plastic, non-woven bags.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">By taking this pledge, you commit to:</h4>
                    <div className="space-y-3">
                      {[
                        "Carry reusable bags for all shopping activities",
                        "Refuse single-use plastic bags and containers",
                        "Educate others about environmental protection",
                        "Support eco-friendly alternatives in daily life"
                      ].map((commitment, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                          <span className="text-gray-300">{commitment}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {!showForm && (
              <div className="text-center">
                <Button 
                  onClick={() => setShowForm(true)}
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg rounded-full smooth-animation"
                >
                  Take the Pledge Now
                </Button>
              </div>
            )}
          </div>

          {/* Pledge form */}
          <div className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            {showForm ? (
              <Card className="glass border-green-500/20">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold gradient-text mb-2">
                      Complete Your Pledge
                    </h3>
                    <p className="text-gray-400">Join thousands of eco-warriors making a difference</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="mt-2 glass border-green-500/30 text-white placeholder-gray-400"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 glass border-green-500/30 text-white placeholder-gray-400"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-2 glass border-green-500/30 text-white placeholder-gray-400"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="city" className="text-white">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="mt-2 glass border-green-500/30 text-white placeholder-gray-400"
                        placeholder="Enter your city"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreement"
                        checked={formData.agreed}
                        onCheckedChange={(checked) => handleInputChange("agreed", !!checked)}
                        className="border-green-500 data-[state=checked]:bg-green-600"
                      />
                      <Label htmlFor="agreement" className="text-sm text-gray-300 leading-relaxed">
                        I agree to take this pledge and commit to following it. I understand 
                        that this commitment is for the betterment of our environment and future generations.
                      </Label>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="submit"
                        disabled={!formData.agreed || !formData.fullName || !formData.email || isSubmitting}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Take the Pledge"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                        className="glass border-green-500/50 text-white hover:bg-green-500/20"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="glass border-green-500/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🌟</div>
                    <h3 className="text-2xl font-bold gradient-text mb-4">
                      Switch to Sustainability
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Make a conscious choice for a greener planet. Our eco-friendly jhola bags 
                      are the perfect alternative to single-use plastics—ideal for events, 
                      daily use, and gifting.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-green-500/10 p-4 rounded-lg">
                        <p className="text-green-400 font-semibold">✓ Strong & Durable</p>
                      </div>
                      <div className="bg-green-500/10 p-4 rounded-lg">
                        <p className="text-green-400 font-semibold">✓ Stylish & Sustainable</p>
                      </div>
                      <div className="bg-green-500/10 p-4 rounded-lg">
                        <p className="text-green-400 font-semibold">✓ Bulk Orders Available</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button 
                        size="lg" 
                        className="bg-green-600 hover:bg-green-700 text-white w-full"
                      >
                        📞 Call 8449199211 for Bulk Orders
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Recent pledges */}
        {pledges.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              Recent Eco-Warriors Who Took the Pledge
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pledges.slice(-8).reverse().map((pledge) => (
                <div 
                  key={pledge.id}
                  className="glass p-4 rounded-lg border border-green-500/20 text-center"
                >
                  <div className="text-2xl mb-2">👤</div>
                  <p className="font-semibold text-white text-sm">{pledge.name}</p>
                  {pledge.city && (
                    <p className="text-gray-400 text-xs">{pledge.city}</p>
                  )}
                  <p className="text-green-400 text-xs mt-1">
                    {pledge.createdAt.toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PledgeSystem;
