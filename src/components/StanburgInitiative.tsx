import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Users, Lightbulb, Target, Heart, Sparkles } from 'lucide-react';

const StanburgInitiative = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge className="mb-4 bg-amber-100 text-amber-700 border-amber-200">
              STANBURG INITIATIVE
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Highlighting the{' '}
              <span className="text-amber-600">Visionary Initiators</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Stanburg celebrates and showcases the remarkable individuals who initiate transformative 
              change in education and society. We honor the pioneers, innovators, and leaders who 
              dare to make a difference in building a better tomorrow.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">Visionary Leadership</div>
                  <div className="text-gray-600">Recognizing transformational leaders and their impact</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">Innovation Spotlight</div>
                  <div className="text-gray-600">Showcasing groundbreaking initiatives and solutions</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">Impact Stories</div>
                  <div className="text-gray-600">Sharing stories of change and transformation</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
              >
                Meet Our Initiators
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-amber-200 text-amber-700 hover:bg-amber-50"
              >
                Nominate an Initiator
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl transform -rotate-2"></div>
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              <img 
                src="/lovable-uploads/ca859a72-d554-4452-b0c6-c2a414f80471.png" 
                alt="Stanburg Initiative - Visionary Leaders" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-white/90 text-amber-700 mb-2">100+ Leaders Highlighted</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Sparkles className="w-8 h-8 text-amber-300" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StanburgInitiative;