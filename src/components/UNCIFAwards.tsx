
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Trophy, 
  Star, 
  Users, 
  ExternalLink,
  Calendar,
  MapPin,
  Sparkles
} from 'lucide-react';

const UNCIFAwards = () => {
  const awards = [
    {
      title: "UNITALK Surat Initiative",
      description: "Launching educational talks and community engagement in Surat",
      image: "/lovable-uploads/442fc71b-5ed2-4762-b9d7-ed474d04bc54.png",
      location: "Surat",
      status: "Coming Soon"
    },
    {
      title: "Scholar Program Launch",
      description: "Innovative scholar program with 3D avatar presentation",
      image: "/lovable-uploads/d003cb78-6ee7-48a1-9ae9-152066b39d38.png",
      location: "Surat",
      status: "Active"
    },
    {
      title: "Student Excellence Award",
      description: "Recognizing outstanding academic achievements",
      image: "/lovable-uploads/ca859a72-d554-4452-b0c6-c2a414f80471.png",
      location: "Surat",
      status: "Ongoing"
    },
    {
      title: "UNITALK Delhi Expansion",
      description: "Expanding educational initiatives to Delhi region",
      image: "/lovable-uploads/ea403405-ba5e-46e5-85ef-ee1328c3ebe6.png",
      location: "Delhi",
      status: "Coming Soon"
    },
    {
      title: "UNI DPS Delhi Partnership",
      description: "Collaborative program with DPS Delhi for enhanced learning",
      image: "/lovable-uploads/e5e14576-c2df-494f-97d5-b346a7099a50.png",
      location: "Delhi",
      status: "Active"
    },
    {
      title: "UNI TALKS Educational Series",
      description: "Comprehensive educational talk series for students",
      image: "/lovable-uploads/40fa36cb-8d9d-496c-86f3-12bd321e1ff1.png",
      location: "Delhi",
      status: "Active"
    },
    {
      title: "Campus Engagement Program",
      description: "Building stronger connections with educational institutions",
      image: "/lovable-uploads/133fd93d-f977-41fa-903a-ed628ffb9b7a.png",
      location: "Delhi",
      status: "Ongoing"
    }
  ];

  const achievements = [
    { title: "Awards Distributed", count: "150+", icon: Trophy },
    { title: "Students Recognized", count: "500+", icon: Star },
    { title: "Partner Institutions", count: "75+", icon: Users },
    { title: "Cities Covered", count: "25+", icon: MapPin }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700 border-green-200';
      case 'Coming Soon': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Ongoing': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-yellow-200">
            UNCIF AWARDS & RECOGNITION
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            UNCIF Awards & Excellence Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence in education through our award programs and recognition initiatives 
            across multiple cities and institutions.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-yellow-200 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">{achievement.count}</div>
                <div className="text-sm text-gray-600">{achievement.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards Gallery */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Sparkles className="w-8 h-8 text-yellow-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Recognition Programs & Initiatives</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="overflow-hidden border-yellow-200 hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getStatusColor(award.status)}>
                      {award.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-700 border-gray-200">
                      <MapPin className="w-3 h-3 mr-1" />
                      {award.location}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{award.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-yellow-600 border-yellow-200 hover:bg-yellow-50"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-none">
            <CardContent className="py-12">
              <Award className="w-16 h-16 mx-auto mb-6 text-white" />
              <h3 className="text-3xl font-bold mb-4">Nominate for UNCIF Awards</h3>
              <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
                Recognize outstanding achievements in education. Nominate deserving students, 
                teachers, and institutions for UNCIF awards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8 py-3"
                >
                  Submit Nomination
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-yellow-600 text-lg px-8 py-3"
                >
                  View All Awards
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UNCIFAwards;
