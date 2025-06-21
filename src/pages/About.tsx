
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';
import { 
  Award, 
  Users, 
  Globe, 
  Shield, 
  Target, 
  Heart,
  Star,
  Trophy,
  Zap,
  Crown
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Excellence Recognition',
      description: 'Recognizing outstanding contributions in education, innovation, and community service.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Connecting like-minded individuals and organizations for collaborative growth.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating positive change that transcends geographical boundaries.'
    },
    {
      icon: Shield,
      title: 'Trust & Credibility',
      description: 'Building reliable partnerships and maintaining the highest standards of integrity.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Focused on empowering institutions and individuals to achieve their goals.'
    },
    {
      icon: Heart,
      title: 'Community-Centered',
      description: 'Putting the needs of our community at the heart of everything we do.'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'Embracing new technologies and methodologies to drive progress.'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Maintaining the highest standards in all our programs and services.'
    }
  ];

  return (
    <>
      <SEO 
        title="About UNCIF - Uniford National Council"
        description="Learn about UNCIF's mission to empower educational institutions through innovation, collaboration, and excellence. Discover our values, programs, and impact."
        keywords="UNCIF about, Uniford National Council, educational excellence, innovation framework, collaboration"
        canonical="/about"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About UNCIF</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Uniford National Council for Innovation Framework - Empowering educational institutions 
              through innovation, collaboration, and excellence since our inception.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white shadow-2xl border-purple-200 mb-16">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  To create a unified framework that empowers educational institutions, innovators, and 
                  frontliners to collaborate, innovate, and excel in their respective fields. We believe 
                  in building bridges between ideas and implementation, fostering an ecosystem where 
                  excellence thrives and impacts are multiplied.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What We Do</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white shadow-xl border-purple-200 hover:shadow-2xl transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-lg text-gray-900">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-center text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-2xl">
              <CardContent className="py-16 text-center">
                <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Be part of a growing network of institutions, innovators, and leaders who are 
                  shaping the future of education and collaboration.
                </p>
                <div className="space-x-4">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
                    Learn More
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
