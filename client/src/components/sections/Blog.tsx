import { useInView } from "react-intersection-observer";
import { Calendar, User, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const blogPosts = [
    {
      title: "देवभूमि राष्ट्रीय रत्न पुरस्कार 2025 की घोषणा, देशभर के उत्कृष्ट योगदानकर्ताओं को मिलेगा सम्मान",
      excerpt: "Institution of Engineers, देहरादून, उत्तराखंड द्वारा आयोजित राष्ट्रीय रत्न पुरस्कार 2025 में उत्कृष्ट योगदान के लिए सम्मानित किया गया।",
      image: "/images/award-2025.jpg",
      date: "July 5, 2025",
      author: "Raghukul Aryawart Team",
      category: "Awards",
      readTime: "3 min read"
    },
    {
      title: "Prof. Dr. Anubha Pundir Honoured with Devbhoomi Rashtriya Ratan Award 2025",
      excerpt: "Dr. Anubha Pundir, the driving force behind Raghukul Aryawart's environmental initiatives, has been honored with the prestigious Devbhoomi Rashtriya Ratan Award 2025.",
      image: "/images/award-2025.jpg",
      date: "July 5, 2025",
      author: "Editorial Team",
      category: "Recognition",
      readTime: "4 min read"
    },
    {
      title: "Dr. Anubha Awarded (The jhola woman – jholapreneur) Rex Karamveer Chakra Gold 2022",
      excerpt: "Recognition of outstanding contribution to environmental protection and women empowerment through the innovative Jhola movement.",
      image: "/images/karmaveer-award.jpg",
      date: "January 19, 2025",
      author: "Awards Committee",
      category: "Achievement",
      readTime: "5 min read"
    },
    {
      title: "Anti-Plastic Campaign: Raghukul Aryawart Got Mayor's Support",
      excerpt: "Local government extends full support to our anti-plastic campaign, recognizing the significant impact of our Jhola movement on reducing plastic waste.",
      image: "/images/jhola-movement-1.jpg",
      date: "May 25, 2019",
      author: "Campaign Team",
      category: "Campaign",
      readTime: "3 min read"
    },
    {
      title: "Fight Against Plastic & Non-Woven Bags Started with Fresh Mart",
      excerpt: "Our partnership with Fresh Mart marks a significant milestone in promoting eco-friendly alternatives to plastic bags in retail environments.",
      image: "/images/jhola-movement-2.jpg",
      date: "November 12, 2019",
      author: "Partnership Team",
      category: "Collaboration",
      readTime: "4 min read"
    },
    {
      title: "Empowering Rural Women Through Sustainable Livelihoods",
      excerpt: "How our Jhola production program is creating economic opportunities for women in rural areas while promoting environmental sustainability.",
      image: "/images/jhola-movement-3.jpg",
      date: "March 15, 2024",
      author: "Women Empowerment Division",
      category: "Empowerment",
      readTime: "6 min read"
    }
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <section id="blog" className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <Calendar className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Latest Updates</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Stories of</span>
            <br />
            <span className="gradient-text">Impact & Change</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with our latest achievements, community stories, and environmental 
            initiatives that are making a real difference in the world.
          </p>
        </div>

        {/* Featured post */}
        <div className={`mb-16 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <Card className="glass border-green-500/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Featured post image */}
                <div className="relative min-h-[300px] overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="glass px-3 py-1 rounded-full text-white text-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Featured post content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <Button className="self-start bg-green-600 hover:bg-green-700 text-white">
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recentPosts.map((post, index) => (
            <Card 
              key={index}
              className={`glass border-green-500/20 hover:border-green-500/50 smooth-animation group cursor-pointer transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Post image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="glass px-2 py-1 rounded text-white text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-3 leading-tight group-hover:text-green-400 smooth-animation line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto glass p-8 rounded-2xl border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Stay Updated with Our Journey
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Follow our progress, read inspiring stories from our community, and learn 
              about the latest developments in our environmental and social initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                View All Blog Posts
              </Button>
              <Button variant="outline" size="lg" className="glass border-green-500/50 text-white hover:bg-green-500/20">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
