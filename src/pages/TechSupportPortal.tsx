import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { 
  Monitor, 
  Zap, 
  Globe, 
  Smartphone, 
  Award, 
  Users, 
  MessageCircle, 
  Phone,
  Trophy,
  Network,
  UserCheck,
  Heart,
  Target,
  CheckCircle,
  ExternalLink,
  Palette,
  FileText,
  Search,
  Rocket,
  Code,
  Calculator
} from 'lucide-react';

interface ProjectCard {
  id: number;
  title: string;
  description: string;
  features: string[];
  codePrice: number;
  totalPrice: number;
  pages: string;
  category: string;
  whatsappNumber: string;
}

const TechSupportPortal = () => {
  const projectCards: ProjectCard[] = [
    {
      id: 1,
      title: "Basic Portfolio Website",
      description: "Clean, professional portfolio for individuals",
      features: ["Fully Coded Website", "Zero Maintenance", "1 Month Bug Fix & Updates", "3-5 Pages", "Figma Design: ₹0", "Content Charges: ₹0", "SEO Optimization: ₹0", "Setup & Hosting Guide: ₹0"],
      codePrice: 500,
      totalPrice: 500,
      pages: "3-5 Pages",
      category: "Portfolio",
      whatsappNumber: "+919876543210"
    },
    {
      id: 2,
      title: "Professional Business Website",
      description: "Complete business presence with modern design",
      features: ["Fully Coded Website", "Zero Maintenance", "1 Month Bug Fix & Updates", "8-10 Pages", "Contact Forms", "Business Integration", "Mobile Responsive", "Analytics Setup"],
      codePrice: 700,
      totalPrice: 700,
      pages: "8-10 Pages",
      category: "Business",
      whatsappNumber: "+919876543210"
    },
    {
      id: 3,
      title: "E-commerce Starter",
      description: "Basic online store with payment integration",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management", "Admin Panel", "Mobile Optimized", "Security Features", "Customer Support"],
      codePrice: 1000,
      totalPrice: 1000,
      pages: "12-15 Pages",
      category: "E-commerce",
      whatsappNumber: "+919876543210"
    },
    {
      id: 4,
      title: "Advanced Portfolio & Blog",
      description: "Portfolio with integrated blog and CMS",
      features: ["Dynamic Content", "Blog System", "Admin Dashboard", "SEO Optimized", "Social Integration", "Newsletter", "Comments System", "Analytics"],
      codePrice: 1200,
      totalPrice: 1200,
      pages: "10-12 Pages",
      category: "Portfolio",
      whatsappNumber: "+919876543210"
    },
    {
      id: 5,
      title: "Educational Platform",
      description: "Learning management system for educators",
      features: ["Course Management", "Student Portal", "Progress Tracking", "Quiz System", "Video Integration", "Certificate Generation", "Payment System", "Multi-user Support"],
      codePrice: 1900,
      totalPrice: 1900,
      pages: "20+ Pages",
      category: "Education",
      whatsappNumber: "+919876543210"
    },
    {
      id: 6,
      title: "Corporate Website Pro",
      description: "Enterprise-level corporate website",
      features: ["Multi-language Support", "Team Profiles", "Service Pages", "Client Portal", "Document Management", "Newsletter System", "Advanced SEO", "Performance Optimization"],
      codePrice: 2000,
      totalPrice: 2000,
      pages: "15-20 Pages",
      category: "Corporate",
      whatsappNumber: "+919876543210"
    },
    {
      id: 7,
      title: "Custom Web Application",
      description: "Tailored web application for specific needs",
      features: ["Custom Features", "Database Integration", "User Authentication", "API Development", "Third-party Integrations", "Advanced Security", "Scalable Architecture", "Documentation"],
      codePrice: 2200,
      totalPrice: 2200,
      pages: "Custom Pages",
      category: "Application",
      whatsappNumber: "+919876543210"
    },
    {
      id: 8,
      title: "Enterprise Solution",
      description: "Complete digital transformation package",
      features: ["Full-scale Development", "Multiple Integrations", "Advanced Analytics", "Custom Dashboard", "Mobile App Included", "Maintenance Package", "Training Included", "24/7 Support"],
      codePrice: 7000,
      totalPrice: 7000,
      pages: "50+ Pages",
      category: "Enterprise",
      whatsappNumber: "+919876543210"
    }
  ];

  const supportComponents = [
    {
      title: "Volunteer Support",
      icon: Heart,
      description: "UNCIF connects you with passionate volunteers who assist in development, outreach, and creative tasks — especially useful for small teams or individual founders.",
      features: ["Development Assistance", "Creative Support", "Outreach Help", "Team Collaboration"]
    },
    {
      title: "Credibility Support",
      icon: Trophy,
      description: "Build your reputation and credibility in your field",
      features: ["UNCIF Awards", "Participation Certifications", "National Recognition Nominations", "Media Campaign Features"]
    },
    {
      title: "Networking & Mentorship",
      icon: Network,
      description: "Connect with industry experts and peers",
      features: ["Peer-to-peer Mentorship", "1:1 Expert Consultations", "Initiative & Talk Invitations", "Partnership Opportunities"]
    },
    {
      title: "1:1 Sessions & Initiative Support",
      icon: UserCheck,
      description: "Personalized guidance and support for your projects",
      features: ["Industry Expert Mentors", "Weekly Open-office Sessions", "Solo Frontliner Support", "Case Submission Support"]
    }
  ];

  const handleWhatsAppConnect = (phoneNumber: string, projectTitle: string) => {
    const message = `Hi! I'm interested in the ${projectTitle} project from UNCIF Tech Support Portal. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Tech Support Portal"
        description="Empowering Innovators, Scholars, Creators & Frontliners with a Powerful Digital Identity. Professional websites, applications, and digital solutions."
        keywords="tech support, digital identity, website development, portfolio, web applications, UNCIF tech services"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl">
                <Monitor className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              🔧 UNCIF Tech Support Portal
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto mb-8">
              Empowering Innovators, Scholars, Creators & Frontliners with a Powerful Digital Identity
            </p>
          </div>
        </div>
      </div>

      {/* What is Tech Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white mb-16">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center">
              <Zap className="w-8 h-8 mr-3 text-yellow-400" />
              💡 What is Tech Support?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-gray-200">
              In today's fast-moving digital world, your presence is your power. Whether you are a business, scholar, innovator, or creator — your digital identity is your first impression.
            </p>
            <blockquote className="text-xl italic text-purple-200 border-l-4 border-purple-400 pl-6 my-8">
              "Imagine being an expert archer with no bow — that's what it's like being talented without a digital profile."
            </blockquote>
            <p className="text-lg text-gray-200">
              At UNCIF, we believe your work deserves to be seen. That's why our Tech Support Program helps you build:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>Verified digital identity</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-blue-400" />
                <span>Professional portfolio or website</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-purple-400" />
                <span>Custom tools or automation solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="w-6 h-6 text-pink-400" />
                <span>Applications or platform-based systems</span>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">🧠 Did you know?</h3>
              <p className="text-lg">Over 37% of scholars, creators & innovators don't have a basic digital portfolio. Let's change that.</p>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🖥️ Tech Support: Starter Packages</h2>
            <p className="text-xl text-purple-200">Transparent, Modern Project Cards Design</p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectCards.map((project) => (
              <Card key={project.id} className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-200">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-300">{project.pages}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-gray-300">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-white/20 pt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center"><Palette className="w-4 h-4 mr-2" />Figma Design:</span>
                      <span className="text-green-400">₹0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center"><FileText className="w-4 h-4 mr-2" />Content Charges:</span>
                      <span className="text-green-400">₹0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center"><Search className="w-4 h-4 mr-2" />SEO Optimization:</span>
                      <span className="text-green-400">₹0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center"><Rocket className="w-4 h-4 mr-2" />Setup & Hosting Guide:</span>
                      <span className="text-green-400">₹0</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold">
                      <span className="flex items-center"><Code className="w-4 h-4 mr-2" />Code Price:</span>
                      <span className="text-blue-400">₹{project.codePrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center"><Calculator className="w-4 h-4 mr-2" />GST:</span>
                      <span className="text-green-400">₹0</span>
                    </div>
                    <div className="flex items-center justify-between text-lg font-bold border-t border-white/20 pt-2">
                      <span>💰 Total Price:</span>
                      <span className="text-yellow-400">₹{project.totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleWhatsAppConnect(project.whatsappNumber, project.title)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Connect via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Support Components */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🤝 Other UNCIF Support Components</h2>
            <p className="text-xl text-purple-200">Comprehensive support beyond just technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {supportComponents.map((component, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <component.icon className="w-8 h-8 mr-3 text-purple-400" />
                    {component.title}
                  </CardTitle>
                  <p className="text-gray-300">{component.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {component.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg border-white/20 text-white">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Build Your Digital Identity?</h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of innovators, scholars, and creators who have transformed their digital presence with UNCIF Tech Support.
              </p>
              <Button 
                onClick={() => handleWhatsAppConnect("+919876543210", "General Inquiry")}
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TechSupportPortal;
