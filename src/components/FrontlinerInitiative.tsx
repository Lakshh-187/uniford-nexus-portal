import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FrontlinerInitiative = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-3"></div>
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              <img 
                src="/lovable-uploads/40fa36cb-8d9d-496c-86f3-12bd321e1ff1.png" 
                alt="Frontliner Program - Transforming Students" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-white/90 text-blue-700 mb-2">500+ Students Transformed</Badge>
              </div>
            </Card>
          </div>
          
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              FRONTLINER PROGRAM
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Transform Students to{' '}
              <span className="text-blue-600">International Standards</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our Frontliner initiative empowers students with world-class skills, global perspectives, 
              and industry-ready competencies. We bridge the gap between academic learning and 
              professional excellence through comprehensive development programs.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Global Network</div>
                  <div className="text-sm text-gray-600">Worldwide connections</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certification</div>
                  <div className="text-sm text-gray-600">Industry recognized</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Global Exposure</div>
                  <div className="text-sm text-gray-600">International standards</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Career Growth</div>
                  <div className="text-sm text-gray-600">Accelerated development</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                asChild
              >
                <Link to="/frontliner">Join Frontliner Program</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontlinerInitiative;