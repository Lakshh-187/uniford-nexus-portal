
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Palette, FileText, Search, Rocket, Calculator } from 'lucide-react';

interface EBillModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    codePrice: number;
    totalPrice: number;
  };
}

const EBillModal = ({ isOpen, onClose, project }: EBillModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Project E-Bill</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
          <CardContent className="p-6 space-y-4">
            <div className="text-center mb-4">
              <Badge className="bg-purple-100 text-purple-700 mb-2">
                UNCIF Tech Support
              </Badge>
              <h3 className="font-bold text-lg text-gray-900">{project.title}</h3>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-600">
                  <Palette className="w-4 h-4 mr-2" />
                  🎨 Figma Design:
                </span>
                <span className="text-green-600 font-medium">₹0</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  ✍️ Content Charges:
                </span>
                <span className="text-green-600 font-medium">₹0</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-600">
                  <Search className="w-4 h-4 mr-2" />
                  ⚙️ SEO Optimization:
                </span>
                <span className="text-green-600 font-medium">₹0</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-600">
                  <Rocket className="w-4 h-4 mr-2" />
                  🚀 Setup & Hosting Guide:
                </span>
                <span className="text-green-600 font-medium">₹0</span>
              </div>
              
              <div className="border-t border-gray-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-gray-700 font-medium">
                    <Calculator className="w-4 h-4 mr-2" />
                    💻 Code Price:
                  </span>
                  <span className="text-purple-600 font-bold">₹{project.codePrice.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">🧾 GST:</span>
                <span className="text-green-600 font-medium">₹0</span>
              </div>
              
              <div className="border-t border-gray-200 pt-3">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span className="text-gray-900">💰 Total Price:</span>
                  <span className="text-purple-600">₹{project.totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-100 rounded-lg">
              <p className="text-xs text-purple-700 text-center">
                All prices are inclusive of design, content, SEO, and hosting setup at no extra cost.
                GST exempted under startup policy.
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default EBillModal;
