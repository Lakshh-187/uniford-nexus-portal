import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Brain, Star, CheckCircle, ArrowRight } from 'lucide-react';

const WhatMatters = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-3xl transform rotate-1"></div>
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              <img 
                src="/lovable-uploads/d954a96f-5369-4a48-91dd-004734611509.png" 
                alt="What Matters - Student Mentorship" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-white/90 text-green-700 mb-2">1000+ Students Mentored</Badge>
              </div>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
              WHAT MATTERS?
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Awareness & Mentorship:{' '}
              <span className="text-green-600">Be Selective, Be Chosen</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our "What Matters?" initiative guides students to discover what truly counts in their 
              journey. Through personalized mentorship and awareness programs, we help students 
              make informed choices and become selective in their pursuits to achieve excellence.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border-l-4 border-green-500">
                <Target className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">Purpose Discovery</div>
                  <div className="text-sm text-gray-600">Help students find their true calling and passion</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border-l-4 border-teal-500">
                <Brain className="w-6 h-6 text-teal-600" />
                <div>
                  <div className="font-semibold text-gray-900">Strategic Thinking</div>
                  <div className="text-sm text-gray-600">Develop critical decision-making skills</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500">
                <Star className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Excellence Mindset</div>
                  <div className="text-sm text-gray-600">Cultivate a pursuit of excellence in chosen fields</div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-green-900">Key Philosophy:</div>
                  <div className="text-green-700 italic">"In a world of infinite possibilities, the wise choose what truly matters."</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-200 text-green-700 hover:bg-green-50"
              >
                Find a Mentor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMatters;