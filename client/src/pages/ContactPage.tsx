
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Leaf, Phone, Mail, MapPin, Send, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const ContactPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '8449199211',
      description: 'Call us for immediate assistance',
      href: 'tel:8449199211'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@raghukularyawart.org',
      description: 'Send us an email anytime',
      href: 'mailto:contact@raghukularyawart.org'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      description: 'Our main operations center',
      href: '#'
    }
  ];

  const quickStats = [
    { icon: Users, label: 'Communities Served', value: '50+' },
    { icon: Clock, label: 'Years of Service', value: '11+' },
    { icon: Leaf, label: 'Environmental Projects', value: '25+' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative spacing-responsive-xl safe-area-inset">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/20 to-transparent" />
        
        <div className="container-responsive" ref={ref}>
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full glass border border-green-500/30 mb-4 sm:mb-6">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-xs sm:text-sm font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-responsive-4xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Contact</span>
              <br />
              <span className="gradient-text">Raghukul Aryawart</span>
            </h1>
            
            <p className="text-responsive-base text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
              Ready to make a difference? Reach out to us and join our mission for a sustainable future. 
              We're here to answer your questions and explore collaboration opportunities.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid-responsive-1-2-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="glass p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-green-500/20 h-full">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-3 sm:mb-4" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="grid-responsive-1-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-responsive-2xl font-bold gradient-text mb-4 sm:mb-6 text-center-mobile">
                  Let's Start a Conversation
                </h2>
                <p className="text-responsive-base text-gray-300 leading-relaxed mb-6 sm:mb-8">
                  Whether you want to volunteer, donate, partner with us, or simply learn more about our work, 
                  we'd love to hear from you. Every conversation is a step towards building a better tomorrow.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="glass border-green-500/20 hover:border-green-500/40 transition-colors">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="p-2 sm:p-3 bg-green-600/20 rounded-lg flex-shrink-0">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{info.title}</h3>
                          <p className="text-green-400 font-medium mb-1 break-all sm:break-words">{info.value}</p>
                          <p className="text-gray-400 text-xs sm:text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="glass border-green-500/20">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-white flex items-center text-base sm:text-lg">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 flex-shrink-0" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-gray-300 space-y-2 text-sm sm:text-base">
                    <p><span className="text-green-400 font-medium">Email:</span> Within 24 hours</p>
                    <p><span className="text-green-400 font-medium">Phone:</span> Monday - Saturday, 9 AM - 6 PM IST</p>
                    <p><span className="text-green-400 font-medium">Emergency:</span> Available for urgent matters</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <Card className="glass border-green-500/20">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-responsive-lg text-white text-center-mobile">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white text-sm sm:text-base">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-2 glass border-green-500/30 text-white placeholder-gray-400 h-12 text-base"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white text-sm sm:text-base">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-2 glass border-green-500/30 text-white placeholder-gray-400 h-12 text-base"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-white text-sm sm:text-base">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-2 glass border-green-500/30 text-white placeholder-gray-400 h-12 text-base"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-white text-sm sm:text-base">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className="mt-2 glass border-green-500/30 text-white placeholder-gray-400 h-12 text-base"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white text-sm sm:text-base">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-2 glass border-green-500/30 text-white placeholder-gray-400 min-h-[120px] sm:min-h-[140px] text-base resize-none"
                        placeholder="Tell us how we can help you or how you'd like to get involved..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-touch w-full bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg rounded-lg transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <Card className="glass border-green-500/20">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-responsive-lg font-bold gradient-text mb-3 sm:mb-4">
                  Ready to Make a Difference?
                </h3>
                <p className="text-responsive-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
                  Join thousands of people who are already part of our mission. 
                  Together, we can create a sustainable future for generations to come.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                  <Button className="btn-touch bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 text-base sm:text-lg">
                    Volunteer With Us
                  </Button>
                  <Button variant="outline" className="btn-touch border-green-500 text-green-400 hover:bg-green-600/10 px-6 sm:px-8 text-base sm:text-lg">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
