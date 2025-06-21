
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, Download, Share2, Mail, MessageCircle, Link, 
  Award, CreditCard, Shield, Stamp, IdCard, Crown,
  Calendar, MapPin, Phone, Globe, Star, Users
} from 'lucide-react';
import SEO from '@/components/SEO';
import DocumentPreview from '@/components/DocumentPreview';
import FormatSelector from '@/components/FormatSelector';
import DocumentForm from '@/components/DocumentForm';
import ActionPanel from '@/components/ActionPanel';

export interface DocumentData {
  name: string;
  title: string;
  organization: string;
  date: string;
  purpose: string;
  customNote: string;
  email: string;
  phone: string;
  address: string;
  certificateNumber: string;
  validUntil: string;
  authority: string;
  department: string;
}

const AdvancedDocumentGenerator = () => {
  const [documentType, setDocumentType] = useState<'certificate' | 'id-card' | 'badge' | 'letterhead' | 'lor' | 'loa' | 'stamp'>('certificate');
  const [selectedFormat, setSelectedFormat] = useState('royal-gold');
  const [formData, setFormData] = useState<DocumentData>({
    name: '',
    title: '',
    organization: '',
    date: new Date().toISOString().split('T')[0],
    purpose: '',
    customNote: '',
    email: '',
    phone: '',
    address: '',
    certificateNumber: '',
    validUntil: '',
    authority: 'UNCIF - Uniford National Council',
    department: ''
  });
  const documentRef = useRef<HTMLDivElement>(null);

  const documentTypes = [
    { id: 'certificate', name: 'Certificate of Achievement', icon: Award, color: 'bg-amber-500' },
    { id: 'id-card', name: 'Professional ID Card', icon: CreditCard, color: 'bg-blue-500' },
    { id: 'badge', name: 'Digital Badge', icon: Shield, color: 'bg-green-500' },
    { id: 'letterhead', name: 'Official Letterhead', icon: FileText, color: 'bg-purple-500' },
    { id: 'lor', name: 'Letter of Recommendation', icon: Star, color: 'bg-orange-500' },
    { id: 'loa', name: 'Letter of Appreciation', icon: Crown, color: 'bg-pink-500' },
    { id: 'stamp', name: 'Official Stamp', icon: Stamp, color: 'bg-red-500' }
  ];

  const handleInputChange = (field: keyof DocumentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDownload = (format: 'pdf' | 'png' | 'jpg' | 'docx') => {
    console.log(`Downloading ${documentType} as ${format.toUpperCase()}`);
    alert(`Download functionality for ${format.toUpperCase()} will be implemented with appropriate libraries.`);
  };

  const handleShare = (method: 'email' | 'whatsapp' | 'link') => {
    console.log(`Sharing ${documentType} via ${method}`);
    alert(`Share functionality via ${method} will be implemented.`);
  };

  return (
    <>
      <SEO 
        title="Advanced Document Generator - Professional Documents & Certificates"
        description="Generate professional certificates, ID cards, badges, letterheads, and official documents with UNCIF's advanced document generator. 15+ royal-themed formats with download and share capabilities."
        keywords="UNCIF document generator, certificates, ID cards, badges, letterheads, professional templates, digital documents, royal themes"
        canonical="/advanced-document-generator"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full mb-8 backdrop-blur-lg">
              <Crown className="w-6 h-6 mr-3 text-amber-400" />
              <span className="text-lg font-semibold">Advanced Document Generation Suite</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              UNCIF Document Generator
            </h1>
            
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create professional certificates, ID cards, badges, letterheads, and official documents 
              with our advanced AI-powered generator. Choose from 15+ royal-themed formats designed 
              for national councils and professional institutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
              {documentTypes.map((type) => (
                <div key={type.id} className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-lg hover:bg-white/20 transition-all">
                  <div className={`w-12 h-12 ${type.color} rounded-full flex items-center justify-center mb-2`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-center">{type.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Document Type Selector */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <FileText className="w-6 h-6 mr-2" />
                    Document Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={documentType} onValueChange={(value) => setDocumentType(value as any)}>
                    <div className="grid grid-cols-1 gap-3">
                      {documentTypes.map((type) => (
                        <div key={type.id} className="flex items-center space-x-3 p-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
                          <RadioGroupItem value={type.id} id={type.id} />
                          <Label htmlFor={type.id} className="flex items-center cursor-pointer flex-1">
                            <div className={`w-8 h-8 ${type.color} rounded-lg flex items-center justify-center mr-3`}>
                              <type.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">{type.name}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Format Selector */}
              <FormatSelector 
                selectedFormat={selectedFormat}
                onFormatChange={setSelectedFormat}
                documentType={documentType}
              />

              {/* Document Form */}
              <DocumentForm 
                formData={formData}
                onInputChange={handleInputChange}
                documentType={documentType}
              />
            </div>

            {/* Preview and Actions */}
            <div className="lg:col-span-2 space-y-6">
              {/* Live Preview */}
              <DocumentPreview 
                ref={documentRef}
                documentType={documentType}
                format={selectedFormat}
                data={formData}
              />

              {/* Action Panel */}
              <ActionPanel 
                onDownload={handleDownload}
                onShare={handleShare}
                documentType={documentType}
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-purple-800 to-blue-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Professional Document Suite</h2>
              <p className="text-xl text-purple-100">Everything you need for official documentation</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: '15+ Formats', desc: 'Royal & professional themes' },
                { icon: Download, title: 'Multi-Export', desc: 'PDF, PNG, JPG, DOCX' },
                { icon: Shield, title: 'Secure & Official', desc: 'Verification codes included' },
                { icon: Globe, title: 'Instant Share', desc: 'Email, WhatsApp, LinkedIn' }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-purple-200">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedDocumentGenerator;
