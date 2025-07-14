import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, CheckCircle, Star, Zap } from 'lucide-react';

const TransformationInstitutes = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              TRANSFORMATION INSTITUTES
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Elevating Institutes to{' '}
              <span className="text-purple-600">International Standards</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our Transformation Institutes initiative revolutionizes educational institutions through 
              comprehensive upgrades in infrastructure, curriculum, technology, and governance to 
              meet global standards and accreditation requirements.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Infrastructure Modernization</div>
                  <div className="text-gray-600">State-of-the-art facilities and learning environments</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <Star className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Global Curriculum</div>
                  <div className="text-gray-600">International standards-aligned educational programs</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <Zap className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Technology Integration</div>
                  <div className="text-gray-600">Advanced digital learning platforms and AI tools</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <Building className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Governance Excellence</div>
                  <div className="text-gray-600">Professional management and quality assurance</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Transform Your Institute
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                View Success Stories
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl transform -rotate-3"></div>
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              <img 
                src="/lovable-uploads/758a80cc-92bc-427f-b908-ac7fc5477b01.png" 
                alt="Transformation Institutes - Modern Education" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-white/90 text-purple-700 mb-2">200+ Institutes Transformed</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationInstitutes;