import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Shield, Zap, Globe, Cpu, Cloud } from 'lucide-react';

const DigitalBackbone = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-blue-500/20 rounded-3xl transform rotate-2"></div>
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              <img 
                src="/lovable-uploads/78ff1690-2b5c-46bd-ae46-cc2e3828f202.png" 
                alt="Digital Backbone - Tech Support Infrastructure" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-white/90 text-slate-700 mb-2">24/7 Tech Support</Badge>
              </div>
            </Card>
          </div>
          
          <div>
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200">
              DIGITAL BACKBONE
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive{' '}
              <span className="text-slate-600">Tech Support</span> for Frontliners
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our Digital Backbone provides robust technological infrastructure and support systems 
              that empower frontliners with cutting-edge tools, platforms, and resources needed 
              for global competitiveness and innovation.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Cloud Infrastructure</div>
                  <div className="text-sm text-gray-600">Scalable, secure, and reliable platforms</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Cybersecurity Solutions</div>
                  <div className="text-sm text-gray-600">Advanced protection and data security</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-green-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">AI-Powered Tools</div>
                  <div className="text-sm text-gray-600">Smart automation and analytics</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800"
              >
                Access Tech Support
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalBackbone;