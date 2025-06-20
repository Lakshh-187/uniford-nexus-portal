
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowDown, 
  Book, 
  Search, 
  Plus, 
  Download,
  FileText,
  Image,
  File,
  Users,
  Globe,
  Award,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Building,
  GraduationCap,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { toast } = useToast();

  const features = [
    {
      title: "Institution Development",
      description: "Transform educational institutions to international standards with tech, establishment, licenses, programs, grants & tenders.",
      icon: <Book className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontliner Support",
      description: "Building frontliners with each initiative and technology integration for worldwide opportunities.",
      icon: <Search className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Global Network",
      description: "Worldwide opportunities and partnerships through our extensive network of institutes and frontliners.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
  ];

  const stats = [
    { number: "500+", label: "Institutes Supported", icon: Building },
    { number: "200+", label: "Active Programs", icon: Rocket },
    { number: "10M+", label: "Students Impacted", icon: GraduationCap },
    { number: "50+", label: "Countries Reached", icon: Globe },
  ];

  const programs = [
    {
      title: "IEP Programs",
      subtitle: "Institutional Empowerment Program",
      description: "Transform educational institutions with comprehensive support and technology integration.",
      icon: Building,
      benefits: ["Digital Foundation", "Global Certification", "Tech Integration", "Quality Enhancement"]
    },
    {
      title: "Venture Group Collaboration",
      subtitle: "Strategic Partnership Initiative",
      description: "Partner with venture groups for innovative funding and development opportunities.",
      icon: Users,
      benefits: ["Venture Funding", "Strategic Growth", "Market Expansion", "Innovation Support"]
    },
    {
      title: "International Standards Certification",
      subtitle: "Global Recognition Program",
      description: "Achieve international education standards through our comprehensive quality framework.",
      icon: Award,
      benefits: ["Global Recognition", "Quality Assurance", "Standards Compliance", "Excellence Framework"]
    },
    {
      title: "Transformative Growth Initiative",
      subtitle: "Institutional Development",
      description: "Comprehensive development programs designed for rapid institutional transformation.",
      icon: TrendingUp,
      benefits: ["Strategic Planning", "Infrastructure Development", "Curriculum Enhancement", "Technology Integration"]
    }
  ];

  const grantPrograms = [
    {
      stage: "Stage 1: Digital Foundation",
      amount: "₹2,50,000",
      description: "Establish digital infrastructure and foundational systems",
      features: ["Portal Setup", "Digital Platform", "Basic Infrastructure"]
    },
    {
      stage: "Stage 2: Program Implementation", 
      amount: "₹5,00,000",
      description: "Implement comprehensive programs and curriculum",
      features: ["Curriculum Design", "Faculty Training", "Student Programs"]
    },
    {
      stage: "Stage 3: Advanced Transformation",
      amount: "₹10,00,000", 
      description: "Complete transformation with advanced technology",
      features: ["Advanced Tech", "International Certification", "Global Partnerships"]
    }
  ];

  const keyAreas = [
    { title: "CSR Grants & Funding", description: "Comprehensive funding solutions for institutional development", icon: Target },
    { title: "International Clubs & Societies", description: "Global networking opportunities for students and faculty", icon: Globe },
    { title: "TDCs, Events & Conferences", description: "Professional development through events and conferences", icon: Star },
    { title: "Entrance with Fellowships & Scholars", description: "Merit-based opportunities for academic excellence", icon: Award },
    { title: "Institutional Guidelines & Challenge Innovation", description: "Innovation frameworks and challenge-based learning", icon: Lightbulb },
    { title: "Student International Collaboration", description: "Cross-border educational partnerships and exchanges", icon: Users }
  ];

  const howWeEmpower = [
    { title: "Creative workshops and outcomes", description: "Foster innovation through hands-on creative workshops", icon: Lightbulb },
    { title: "Global digital organization programs", description: "Develop digital literacy and organizational skills", icon: Globe },
    { title: "Professional frameworks for education", description: "Implement structured educational methodologies", icon: Building },
    { title: "Support innovative academic programs", description: "Enhance learning through innovative approaches", icon: Rocket }
  ];

  const handleDownload = (format: string, type: string) => {
    toast({
      title: `Downloading ${type}`,
      description: `Your ${type} in ${format.toUpperCase()} format will be downloaded shortly.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            TRANSFORMATION THROUGH CSR
          </Badge>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Transforming Students &{' '}
                <span className="text-yellow-300">Institutes</span> Through CSR{' '}
                <span className="text-yellow-300">Grants</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed">
                Building a future where quality education is accessible to all through 
                alumni donations, modern AI platforms, and zero-fee opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/mou">Apply Now</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/grants">Explore Programs</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="/lovable-uploads/98a7f799-92ef-44fc-89af-715cfe303519.png" 
                  alt="UNCIF Student Success Story" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 text-center">
                  <p className="text-purple-100 text-sm">Empowering the next generation of leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              WHO WE ARE
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-yellow-500">Uniford</span> National Council of{' '}
              <br className="hidden lg:block" />
              Institutes & Frontliners
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Empowering institutes and frontliners through grants, funds, and technology to create worldwide 
              opportunities and drive innovation across educational ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UCPI Programs Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              UCPI PROGRAMS
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Uniford Council of Private Institutes (UCPI)
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Transforming regional institutions into world-class educational centers through 
              comprehensive support and innovative methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">{program.title}</CardTitle>
                  <p className="text-purple-200 text-sm">{program.subtitle}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 text-sm mb-4">{program.description}</p>
                  <div className="space-y-2">
                    {program.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-purple-200">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grants Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              UGIEF GRANTS
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Uniford Grants for Institutional Empowerment Program (UGIEF)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive three-stage funding program designed to empower institutions through 
              structured development and technology integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {grantPrograms.map((grant, index) => (
              <Card key={index} className="border-purple-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-purple-100 text-purple-700">{grant.stage}</Badge>
                    <div className="text-2xl font-bold text-purple-600">{grant.amount}</div>
                  </div>
                  <CardTitle className="text-lg text-gray-900">{grant.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {grant.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                    Apply for Grant
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IEP-X Transformation Section */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              IEP-X FRAMEWORK
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How IEP-X Transforms Institutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Institutional Enhancement Program (IEP-X) helps educational institutions transform and 
              reach international standards through our comprehensive support and innovative frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Areas</h3>
              <div className="space-y-4">
                {keyAreas.map((area, index) => (
                  <Card key={index} className="border-purple-200 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <area.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{area.title}</h4>
                          <p className="text-sm text-gray-600">{area.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Empower Institutions</h3>
              <div className="space-y-4">
                {howWeEmpower.map((item, index) => (
                  <Card key={index} className="border-purple-200 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads & Resources Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              RESOURCES & DOWNLOADS
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Download Official Documents & Resources
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Access our comprehensive collection of brochures, guides, and official documents 
              to learn more about UNCIF programs and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Brochure Downloads */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Official Brochures
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={() => handleDownload('pdf', 'UNCIF Program Brochure')}
                  className="w-full bg-red-600 hover:bg-red-700 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>PDF Brochure</span>
                </Button>
                <Button
                  onClick={() => handleDownload('png', 'UNCIF Visual Guide')}
                  className="w-full bg-green-600 hover:bg-green-700 flex items-center space-x-2"
                >
                  <Image className="w-4 h-4" />
                  <span>Visual Guide (PNG)</span>
                </Button>
              </CardContent>
            </Card>

            {/* Application Forms */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <File className="w-5 h-5 mr-2" />
                  Application Forms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={() => handleDownload('pdf', 'Institution Application Form')}
                  className="w-full bg-blue-600 hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Institution Form (PDF)</span>
                </Button>
                <Button
                  onClick={() => handleDownload('word', 'Grant Application Form')}
                  className="w-full bg-purple-600 hover:bg-purple-700 flex items-center space-x-2"
                >
                  <File className="w-4 h-4" />
                  <span>Grant Form (Word)</span>
                </Button>
              </CardContent>
            </Card>

            {/* Program Guidelines */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Program Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  onClick={() => handleDownload('pdf', 'UCPI Guidelines')}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>UCPI Guide (PDF)</span>
                </Button>
                <Button
                  onClick={() => handleDownload('pdf', 'IEP-X Framework')}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>IEP-X Framework</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              GRANTS & FUNDS IN TECH
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Technology-Driven Educational Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the Tech Funding Support for your institution. Creating campuses, AI platforms, 
              and institutional software through our comprehensive funding program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-purple-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">50-75%</div>
                <div className="text-sm">Funding Coverage</div>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">Tech</div>
                <div className="text-sm">Infrastructure Support</div>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">Global</div>
                <div className="text-sm">Opportunities Access</div>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">Innovation</div>
                <div className="text-sm">Program Development</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the UNCIF network and become part of a transformative ecosystem that's reshaping 
            education through innovation, collaboration, and sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-purple-50"
              asChild
            >
              <Link to="/mou">Start Your Application</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-700"
              asChild
            >
              <Link to="/templates">Generate Documents</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
