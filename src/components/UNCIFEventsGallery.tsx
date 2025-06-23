
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Camera, 
  Award, 
  Users, 
  ExternalLink,
  Heart,
  Star,
  Trophy,
  Sparkles
} from 'lucide-react';

const UNCIFEventsGallery = () => {
  const events = [
    {
      title: "UNCIF Art Exhibition",
      date: "December 2024",
      description: "Showcasing creative talents from students across institutions",
      image: "/lovable-uploads/b8f26311-fd7e-4a1b-9d47-68f1189a3060.png",
      category: "Exhibition"
    },
    {
      title: "Student Showcase Gallery",
      date: "November 2024",
      description: "Celebrating artistic achievements and creative excellence",
      image: "/lovable-uploads/0596f386-4eca-4c2f-9abf-b6234c5d6a13.png",
      category: "Gallery"
    }
  ];

  const campaigns = [
    {
      title: "UNIFORD Leadership Program",
      description: "Empowering the next generation of student leaders",
      image: "/lovable-uploads/d954a96f-5369-4a48-91dd-004734611509.png",
      impact: "500+ Students Reached"
    },
    {
      title: "Innovation & Research Initiative",
      description: "Supporting student research and innovation projects",
      image: "/lovable-uploads/35c6ec7e-46a6-4461-aa90-12d02553f8ea.png",
      impact: "200+ Projects Supported"
    },
    {
      title: "Youth Science Symposium",
      description: "Promoting STEM education and scientific research",
      image: "/lovable-uploads/cdba468a-8e1d-4bf6-a18e-6a33b4a7deaf.png",
      impact: "1000+ Participants"
    }
  ];

  const memories = [
    { title: "Award Ceremonies", count: "50+", icon: Trophy },
    { title: "Student Achievements", count: "200+", icon: Star },
    { title: "Community Events", count: "100+", icon: Users },
    { title: "Success Stories", count: "300+", icon: Heart }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
            UNCIF HIGHLIGHTS
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Events, Campaigns & Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating our journey of empowering students, institutions, and communities 
            through transformative educational initiatives and memorable experiences.
          </p>
        </div>

        {/* Events Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Calendar className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Recent Events & Exhibitions</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden border-purple-200 hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">{event.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900">{event.title}</CardTitle>
                    <span className="text-sm text-purple-600 font-medium">{event.date}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Campaigns Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Active Campaigns & Initiatives</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="border-purple-200 hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2">{campaign.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-green-700 border-green-200">
                      {campaign.impact}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Memories & Stats Section */}
        <div>
          <div className="flex items-center mb-8">
            <Camera className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Our Memories & Milestones</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {memories.map((memory, index) => (
              <Card key={index} className="text-center border-purple-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <memory.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{memory.count}</div>
                  <div className="text-sm text-gray-600">{memory.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-purple-600 to-purple-800 text-white border-none">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4">Be Part of Our Story</h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join UNCIF and become part of a transformative community that's creating 
                lasting memories and meaningful impact in education.
              </p>
              <Button 
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Join Our Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UNCIFEventsGallery;
