
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Book, Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: "Institution Development",
      description: "Transform educational institutions to international standards with tech, establishment, licenses, programs, grants & tenders.",
      icon: <Book className="w-6 h-6" />,
    },
    {
      title: "Frontliner Support",
      description: "Building frontliners with each initiative and technology integration for worldwide opportunities.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Global Network",
      description: "Worldwide opportunities and partnerships through our extensive network of institutes and frontliners.",
      icon: <Plus className="w-6 h-6" />,
    },
  ];

  const stats = [
    { number: "500+", label: "Institutes Supported" },
    { number: "200+", label: "Active Programs" },
    { number: "10M+", label: "Students Impacted" },
    { number: "50+", label: "Countries Reached" },
  ];

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
              <div key={index} className="text-center">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join the UNCIF Network
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Become part of a transformative network that's reshaping education through innovation, 
            collaboration, and sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-purple-50"
              asChild
            >
              <Link to="/mou">Explore UNCIF Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
