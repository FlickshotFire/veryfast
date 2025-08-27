import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the Raghukul Aryawart website
  
  // Get pledge statistics
  app.get("/api/pledges/stats", (req, res) => {
    try {
      // In a real implementation, this would query the database
      // For now, returning sample stats that would be realistic
      const stats = {
        totalPledges: 1247, // Base count from existing pledges
        citiesReached: 45,
        impactScore: 98,
        recentPledges: [] // This would contain recent pledge data
      };
      
      res.json(stats);
    } catch (error) {
      console.error("Error fetching pledge stats:", error);
      res.status(500).json({ message: "Failed to fetch pledge statistics" });
    }
  });

  // Submit a new pledge
  app.post("/api/pledges", async (req, res) => {
    try {
      const { fullName, email, phone, city } = req.body;
      
      if (!fullName || !email) {
        return res.status(400).json({ 
          message: "Full name and email are required" 
        });
      }

      // In a real implementation, this would save to database
      // For now, just validate and return success
      const pledge = {
        id: Date.now().toString(),
        fullName,
        email,
        phone: phone || null,
        city: city || null,
        createdAt: new Date().toISOString()
      };

      console.log("New pledge submitted:", pledge);

      res.status(201).json({ 
        message: "Pledge submitted successfully!",
        pledgeId: pledge.id
      });
    } catch (error) {
      console.error("Error submitting pledge:", error);
      res.status(500).json({ message: "Failed to submit pledge" });
    }
  });

  // Get organization statistics
  app.get("/api/stats", (req, res) => {
    try {
      const stats = {
        yearsOfExperience: 11,
        communitiesServed: 50,
        womenEmpowered: 500,
        childrenEducated: 1000,
        weaversSupported: 200,
        remoteLocationsServed: 50,
        womenReachedHygiene: 300
      };

      res.json(stats);
    } catch (error) {
      console.error("Error fetching organization stats:", error);
      res.status(500).json({ message: "Failed to fetch statistics" });
    }
  });

  // Get blog posts
  app.get("/api/blog", (req, res) => {
    try {
      const blogPosts = [
        {
          id: 1,
          title: "देवभूमि राष्ट्रीय रत्न पुरस्कार 2025 की घोषणा",
          excerpt: "Institution of Engineers, देहरादून, उत्तराखंड द्वारा आयोजित राष्ट्रीय रत्न पुरस्कार 2025 में उत्कृष्ट योगदान के लिए सम्मानित किया गया।",
          date: "2025-07-05",
          author: "Raghukul Aryawart Team",
          category: "Awards",
          readTime: "3 min read",
          slug: "devbhoomi-rashtriya-ratan-2025"
        },
        {
          id: 2,
          title: "Prof. Dr. Anubha Pundir Honoured with Devbhoomi Rashtriya Ratan Award 2025",
          excerpt: "Dr. Anubha Pundir, the driving force behind Raghukul Aryawart's environmental initiatives, has been honored with the prestigious award.",
          date: "2025-07-05",
          author: "Editorial Team",
          category: "Recognition",
          readTime: "4 min read",
          slug: "anubha-pundir-devbhoomi-award"
        },
        {
          id: 3,
          title: "Dr. Anubha Awarded Rex Karamveer Chakra Gold 2022",
          excerpt: "Recognition of outstanding contribution to environmental protection and women empowerment through the innovative Jhola movement.",
          date: "2025-01-19",
          author: "Awards Committee",
          category: "Achievement",
          readTime: "5 min read",
          slug: "rex-karamveer-chakra-gold-2022"
        }
      ];

      res.json(blogPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  // Get testimonials
  app.get("/api/testimonials", (req, res) => {
    try {
      const testimonials = [
        {
          id: 1,
          name: "Mr. Ramesh Menon",
          role: "Entrepreneur",
          location: "Mumbai",
          quote: "The concept of using cloth Jholas is so very Indian and logical. Its reusable, it's practical, it's attractive. Raghukul Aryawart seems to have hit the right button in promoting the Cloth Bag with its committed dedicated group of young volunteers."
        },
        {
          id: 2,
          name: "Mrs. Shanker",
          role: "School Administrator",
          location: "Sultanpur, UP",
          quote: "She is Administrator and Coordinator of Surya Academy Senior Secondary Public School, Sultanpur (UP), committed for environment protection she is highly determine to connect Jhola-Abhiyan in her school, parents and locality."
        },
        {
          id: 3,
          name: "Mrinalini Gupta",
          role: "Social Activist",
          location: "Faridabad",
          quote: "Lady with full on Jhose and Junoon, she is executive member and heading many groups, societies and committees that work for many social causes. She has not only approached us first also gave so many ideas to make this project successful."
        }
      ];

      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message, subject } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Name, email, and message are required" 
        });
      }

      // In a real implementation, this would save to database and/or send email
      const contactSubmission = {
        id: Date.now().toString(),
        name,
        email,
        phone: phone || null,
        subject: subject || "Website Contact",
        message,
        createdAt: new Date().toISOString()
      };

      console.log("Contact form submission:", contactSubmission);

      res.status(201).json({ 
        message: "Message sent successfully! We'll get back to you soon.",
        submissionId: contactSubmission.id
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Get work areas information
  app.get("/api/work-areas", (req, res) => {
    try {
      const workAreas = [
        {
          id: "women-employment",
          title: "Women Employment Opportunities",
          description: "We create income-generating opportunities for women in rural and urban areas through skill development and employment in eco-friendly product manufacturing.",
          impact: "500+ women empowered",
          details: [
            "Skill development programs",
            "Sustainable employment creation",
            "Economic empowerment initiatives",
            "Rural and urban outreach"
          ]
        },
        {
          id: "free-education",
          title: "Free BPL Education",
          description: "We offer free education to children from below poverty line families, ensuring no child is denied the right to learn due to financial constraints.",
          impact: "1000+ children educated",
          details: [
            "Free education programs",
            "Learning materials provision",
            "Teacher training initiatives",
            "Scholarship programs"
          ]
        },
        {
          id: "remote-education",
          title: "Remote Location Education",
          description: "We bridge the education gap in remote and underserved areas by providing access to quality learning resources through mobile classrooms, trained volunteers, and digital tools.",
          impact: "50+ remote locations served",
          details: [
            "Mobile classrooms",
            "Digital learning tools",
            "Volunteer teacher programs",
            "Educational resource distribution"
          ]
        },
        {
          id: "swadeshi-hathkargha",
          title: "Swadeshi Hathkargha",
          description: "Our flagship initiative to revive traditional handloom weaving, providing sustainable livelihoods to artisans while preserving India's rich textile heritage.",
          impact: "500+ artisans empowered",
          details: [
            "Traditional handloom revival",
            "Artisan skill development",
            "Fair trade practices",
            "Heritage preservation",
            "Market linkage support"
          ]
        },
        {
          id: "green-warriors",
          title: "Green Warriors",
          description: "Environmental champions program training youth and communities to become ambassadors for sustainable living and environmental protection.",
          impact: "2000+ green warriors trained",
          details: [
            "Youth environmental training",
            "Community awareness programs",
            "Sustainable living workshops",
            "Green leadership development",
            "Environmental action projects"
          ]
        },
        {
          id: "project-vaatsalya",
          title: "Project Vaatsalya",
          description: "Comprehensive child welfare program focusing on nutrition, education, and holistic development of underprivileged children.",
          impact: "800+ children supported",
          details: [
            "Nutritional support programs",
            "Educational assistance",
            "Health and wellness care",
            "Skill development for children",
            "Psychosocial support"
          ]
        },
        {
          id: "project-naari-samaan",
          title: "Project Naari Samaan",
          description: "Women empowerment initiative focusing on dignity, equality, and economic independence through comprehensive support systems.",
          impact: "1200+ women empowered",
          details: [
            "Women's rights awareness",
            "Economic empowerment programs",
            "Leadership training",
            "Healthcare access",
            "Legal support and guidance"
          ]
        },
        {
          id: "project-pahel",
          title: "Project Pahel",
          description: "Community development initiative creating pathways for sustainable growth and self-reliance in rural and urban communities.",
          impact: "600+ community members benefited",
          details: [
            "Community infrastructure development",
            "Livelihood generation programs",
            "Capacity building initiatives",
            "Resource mobilization",
            "Sustainable development planning"
          ]
        },
        {
          id: "hygiene-awareness",
          title: "Women Hygiene Awareness",
          description: "We conduct awareness programs about women's health and hygiene, providing education and resources to improve quality of life.",
          impact: "300+ women reached",
          details: [
            "Health awareness campaigns",
            "Hygiene education programs",
            "Resource distribution",
            "Community health initiatives"
          ]
        },
        {
          id: "anti-honking",
          title: "Do Not Honk Awareness on Road",
          description: "Our road safety and noise pollution awareness campaigns aim to create peaceful and safe transportation environments in urban areas.",
          impact: "Multiple cities covered",
          details: [
            "Noise pollution awareness",
            "Road safety campaigns",
            "Community engagement",
            "Behavioral change initiatives"
          ]
        }
      ];

      res.json(workAreas);
    } catch (error) {
      console.error("Error fetching work areas:", error);
      res.status(500).json({ message: "Failed to fetch work areas" });
    }
  });

  // Bulk order inquiry for Jhola bags
  app.post("/api/bulk-order", async (req, res) => {
    try {
      const { name, email, phone, quantity, purpose, city, message } = req.body;
      
      if (!name || !email || !phone || !quantity) {
        return res.status(400).json({ 
          message: "Name, email, phone, and quantity are required" 
        });
      }

      // In a real implementation, this would save to database and notify the team
      const bulkOrder = {
        id: Date.now().toString(),
        name,
        email,
        phone,
        quantity: parseInt(quantity),
        purpose: purpose || "Not specified",
        city: city || null,
        message: message || null,
        createdAt: new Date().toISOString(),
        status: "pending"
      };

      console.log("Bulk order inquiry:", bulkOrder);

      res.status(201).json({ 
        message: "Bulk order inquiry submitted successfully! Our team will contact you within 24 hours.",
        orderId: bulkOrder.id,
        contactNumber: "8449199211"
      });
    } catch (error) {
      console.error("Error processing bulk order:", error);
      res.status(500).json({ message: "Failed to submit bulk order inquiry" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      service: "Raghukul Aryawart API"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
