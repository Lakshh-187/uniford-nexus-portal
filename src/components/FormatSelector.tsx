
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Crown, Star, Award, Shield, Palette } from 'lucide-react';

interface FormatSelectorProps {
  selectedFormat: string;
  onFormatChange: (format: string) => void;
  documentType: string;
}

const FormatSelector: React.FC<FormatSelectorProps> = ({
  selectedFormat,
  onFormatChange,
  documentType
}) => {
  const formats = [
    {
      id: 'royal-gold',
      name: 'Royal Gold',
      description: 'Elegant gold and burgundy theme',
      icon: Crown,
      colors: 'bg-gradient-to-r from-amber-400 to-amber-600'
    },
    {
      id: 'executive-blue',
      name: 'Executive Blue',
      description: 'Professional blue corporate theme',
      icon: Shield,
      colors: 'bg-gradient-to-r from-blue-500 to-blue-700'
    },
    {
      id: 'prestige-purple',
      name: 'Prestige Purple',
      description: 'Premium purple royal theme',
      icon: Crown,
      colors: 'bg-gradient-to-r from-purple-500 to-purple-700'
    },
    {
      id: 'excellence-green',
      name: 'Excellence Green',
      description: 'Success-oriented green theme',
      icon: Award,
      colors: 'bg-gradient-to-r from-green-500 to-green-700'
    },
    {
      id: 'distinction-red',
      name: 'Distinction Red',
      description: 'Bold red achievement theme',
      icon: Star,
      colors: 'bg-gradient-to-r from-red-500 to-red-700'
    },
    {
      id: 'modern-gradient',
      name: 'Modern Gradient',
      description: 'Contemporary multi-color theme',
      icon: Palette,
      colors: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'
    }
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Palette className="w-6 h-6 mr-2" />
          Format Selection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedFormat} onValueChange={onFormatChange}>
          <div className="grid grid-cols-1 gap-3">
            {formats.map((format) => (
              <div key={format.id} className="flex items-center space-x-3 p-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
                <RadioGroupItem value={format.id} id={format.id} />
                <Label htmlFor={format.id} className="flex items-center cursor-pointer flex-1">
                  <div className={`w-8 h-8 ${format.colors} rounded-lg flex items-center justify-center mr-3`}>
                    <format.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{format.name}</p>
                    <p className="text-xs text-gray-300">{format.description}</p>
                  </div>
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default FormatSelector;
