import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Work Areas", href: "#work-areas" },
    { name: "Take Pledge", href: "#pledge" },
    { name: "Our Team", href: "#team" },
    { name: "Vision & Mission", href: "#vision" },
    { name: "Blog", href: "#blog" }
  ];

  const workAreas = [
    { name: "Women Employment", href: "#women-employment" },
    { name: "Free Education", href: "#education" },
    { name: "Remote Education", href: "#remote-education" },
    { name: "Weaver Empowerment", href: "#weavers" },
    { name: "Hygiene Awareness", href: "#hygiene" },
    { name: "Anti-Plastic Campaign", href: "#anti-plastic" }
  ];

  const contactInfo = [
    { icon: Phone, text: "8449199211", href: "tel:8449199211" },
    { icon: Mail, text: "contact@raghukularyawart.org", href: "mailto:contact@raghukularyawart.org" },
    { icon: MapPin, text: "India", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-green-950/20 to-black/80 border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-1">
                <img 
                  src="/attached_assets/Screenshot_1_1756218211189.png" 
                  alt="Raghukul Aryawart Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="text-xl font-bold gradient-text">
                Raghukul Aryawart
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              A decade old NGO working for environmental protection, women empowerment, 
              and education through innovative sustainable solutions.
            </p>

            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-green-400 smooth-animation"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{contact.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-green-400 smooth-animation text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Work areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Work</h3>
            <ul className="space-y-3">
              {workAreas.map((area, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(area.href)}
                    className="text-gray-300 hover:text-green-400 smooth-animation text-left"
                  >
                    {area.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to action */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Join the Movement</h3>
            <p className="text-gray-300 mb-6">
              Take a pledge against plastic and become part of India's green revolution.
            </p>
            
            <Button 
              onClick={() => scrollToSection("#pledge")}
              className="w-full bg-green-600 hover:bg-green-700 text-white mb-6"
            >
              Take Pledge Now
            </Button>

            <div className="space-y-4">
              <div className="glass p-4 rounded-lg border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">Bulk Orders</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Order eco-friendly Jhola bags for events and daily use.
                </p>
                <a 
                  href="tel:8449199211"
                  className="text-green-400 hover:text-green-300 text-sm font-medium"
                >
                  📞 Call 8449199211
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social media and additional info */}
        <div className="border-t border-green-500/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-green-400 smooth-animation"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Awards and recognition */}
            <div className="flex items-center space-x-4 text-center lg:text-right">
              <div>
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-xs text-gray-400">Rex Karamveer<br />Chakra Gold 2022</div>
              </div>
              <div>
                <div className="text-2xl mb-1">⭐</div>
                <div className="text-xs text-gray-400">Devbhoomi Rashtriya<br />Ratan Award 2025</div>
              </div>
              <div>
                <div className="text-2xl mb-1">🌱</div>
                <div className="text-xs text-gray-400">11+ Years<br />Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-green-500/20 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm text-gray-400">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <p>&copy; {currentYear} Raghukul Aryawart. All rights reserved.</p>
              <div className="flex space-x-4">
                <button className="hover:text-green-400 smooth-animation">Privacy Policy</button>
                <button className="hover:text-green-400 smooth-animation">Terms of Service</button>
                <button className="hover:text-green-400 smooth-animation">Contact</button>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="mb-1">🌍 One Jhola. A Thousand Mindsets. Infinite Impact.</p>
              <p className="text-green-400">Making India Plastic-Free, One Bag at a Time</p>
              <p className="mb-1">Created with Passion, Skills, Time and lots of Love ~Aman.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating jhola bags */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-5 float-animation"
            style={{
              left: `${10 + i * 20}%`,
              bottom: `${10 + i * 5}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${8 + i * 2}s`
            }}
          >
            🛍️
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
