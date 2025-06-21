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
  Calculator,
  Eye
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
  sampleUrl: string;
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
      whatsappNumber: "+917347099610",
      sampleUrl: "https://portfolio-sample.uncif.org"
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
      whatsappNumber: "+917347099610",
      sampleUrl: "https://business-sample.uncif.org"
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
      whatsappNumber: "+919876543210",
      sampleUrl: "https://ecommerce-sample.uncif.org"
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
      whatsappNumber: "+919876543210",
      sampleUrl: "https://portfolio-blog-sample.uncif.org"
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
      whatsappNumber: "+919876543210",
      sampleUrl: "https://education-sample.uncif.org"
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
      whatsappNumber: "+919876543210",
      sampleUrl: "https://corporate-sample.uncif.org"
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
      whatsappNumber: "+919876543210",
      sampleUrl: "https://webapp-sample.uncif.org"
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
      whatsappNumber: "+919876543210",
      sampleUrl: "https://enterprise-sample.uncif.org"
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

  const handleViewSample = (sampleUrl: string) => {
    window.open(sampleUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
      <SEO 
        title="Tech Support Portal"
        description="Empowering Innovators, Scholars, Creators & Frontliners with a Powerful Digital Identity. Professional websites, applications, and digital solutions."
        keywords="tech support, digital identity, website development, portfolio, web applications, UNCIF tech services"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
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
        <Card className="bg-white shadow-2xl border-purple-200 mb-16">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center text-gray-900">
              <Zap className="w-8 h-8 mr-3 text-amber-500" />
              💡 What is Tech Support?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-gray-700">
              In today's fast-moving digital world, your presence is your power. Whether you are a business, scholar, innovator, or creator — your digital identity is your first impression.
            </p>
            <blockquote className="text-xl italic text-purple-700 border-l-4 border-purple-400 pl-6 my-8 bg-purple-50 py-4 rounded">
              "Imagine being an expert archer with no bow — that's what it's like being talented without a digital profile."
            </blockquote>
            <p className="text-lg text-gray-700">
              At UNCIF, we believe your work deserves to be seen. That's why our Tech Support Program helps you build:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Verified digital identity</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-blue-500" />
                <span className="text-gray-700">Professional portfolio or website</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-purple-500" />
                <span className="text-gray-700">Custom tools or automation solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="w-6 h-6 text-pink-500" />
                <span className="text-gray-700">Applications or platform-based systems</span>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">🧠 Did you know?</h3>
              <p className="text-lg text-gray-700">Over 37% of scholars, creators & innovators don't have a basic digital portfolio. Let's change that.</p>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🖥️ Tech Support: Starter Packages</h2>
            <p className="text-xl text-gray-600">Transparent, Modern Project Cards Design</p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectCards.map((project) => (
              <Card key={project.id} className="bg-white shadow-xl border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{project.pages}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors">{project.title}</CardTitle>
                  <p className="text-gray-600">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-gray-600"><Palette className="w-3 h-3 mr-1" />Design:</span>
                        <span className="text-green-600 font-medium">₹0</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-gray-600"><Search className="w-3 h-3 mr-1" />SEO:</span>
                        <span className="text-green-600 font-medium">₹0</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-lg font-bold border-t border-gray-200 pt-3">
                      <span className="text-gray-900">💰 Total Price:</span>
                      <span className="text-purple-600">₹{project.totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <Button 
                      onClick={() => handleViewSample(project.sampleUrl)}
                      variant="outline"
                      className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Sample Website
                    </Button>
                    <Button 
                      onClick={() => handleWhatsAppConnect(project.whatsappNumber, project.title)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Connect via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Support Components */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🤝 Other UNCIF Support Components</h2>
            <p className="text-xl text-gray-600">Comprehensive support beyond just technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {supportComponents.map((component, index) => (
              <Card key={index} className="bg-white shadow-xl border-gray-200 hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-gray-900">
                    <component.icon className="w-8 h-8 mr-3 text-purple-600" />
                    {component.title}
                  </CardTitle>
                  <p className="text-gray-600">{component.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {component.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
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
          <Card className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-2xl">
            <CardContent className="py-16">
              <h3 className="text-4xl font-bold mb-4">Ready to Build Your Digital Identity?</h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of innovators, scholars, and creators who have transformed their digital presence with UNCIF Tech Support.
              </p>
              <Button 
                onClick={() => handleWhatsAppConnect("+917347099610", "General Inquiry")}
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
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
