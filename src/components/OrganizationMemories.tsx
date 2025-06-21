
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Leaf, Gift } from 'lucide-react';

const OrganizationMemories = () => {
  const memories = [
    {
      title: "Community Gardens Initiative",
      description: "Students participating in our environmental sustainability program, creating green spaces and learning about agriculture.",
      image: "/lovable-uploads/78ff1690-2b5c-46bd-ae46-cc2e3828f202.png",
      icon: Leaf,
      tag: "Environmental Impact"
    },
    {
      title: "Food Distribution Drive",
      description: "Our volunteers actively participating in community service, distributing food packages to those in need during challenging times.",
      image: "/lovable-uploads/758a80cc-92bc-427f-b908-ac7fc5477b01.png",
      icon: Heart,
      tag: "Community Service"
    },
    {
      title: "Wildlife Conservation Project",
      description: "Students engaged in urban wildlife conservation, building bird homes and learning about ecosystem preservation.",
      image: "/lovable-uploads/d8537089-5f67-4b8c-a012-433bed0b0038.png",
      icon: Users,
      tag: "Conservation"
    },
    {
      title: "Community Outreach Program",
      description: "Organizing clothing drives and essential item distribution to support local communities and foster social responsibility.",
      image: "/lovable-uploads/9dff5d52-10f0-463f-8ee9-e23029d3417b.png",
      icon: Gift,
      tag: "Social Impact"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
            OUR MEMORIES
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Moments That Define Our{' '}
            <span className="text-purple-600">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through every initiative, every helping hand, and every smile, we create lasting memories 
            that embody our commitment to educational excellence and social impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memories.map((memory, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-purple-100 overflow-hidden bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-purple-700 border-purple-200">
                    {memory.tag}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-purple-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <memory.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {memory.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {memory.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Creating Tomorrow's Leaders Today</h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Every memory we create is a step towards building a better future. Join us in making a difference 
              through education, innovation, and community service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationMemories;
