
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Download, FileText, Image, FileImage, File } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ClearancePreview from '@/components/ClearancePreview';
import ClearanceForm from '@/components/ClearanceForm';

export interface ClearanceData {
  date: string;
  frontlinerName: string;
  frontlinerOrganization: string;
  frontlinerContact: string;
  representativeName: string;
  representativeId: string;
  representativeDepartment: string;
  visitDate: string;
  location: string;
  isInterested: 'yes' | 'later' | 'no';
  requestedServices: {
    website: boolean;
    digitalIdentity: boolean;
    other: boolean;
    otherText: string;
  };
  additionalNotes: string;
  overallFeedback: string;
}

const LetterOfClearance = () => {
  const { toast } = useToast();
  const previewRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState<ClearanceData>({
    date: new Date().toISOString().split('T')[0],
    frontlinerName: '',
    frontlinerOrganization: '',
    frontlinerContact: '',
    representativeName: '',
    representativeId: '',
    representativeDepartment: '',
    visitDate: new Date().toISOString().split('T')[0],
    location: '',
    isInterested: 'yes',
    requestedServices: {
      website: false,
      digitalIdentity: false,
      other: false,
      otherText: ''
    },
    additionalNotes: '',
    overallFeedback: ''
  });

  const handleInputChange = (field: keyof ClearanceData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceChange = (service: keyof ClearanceData['requestedServices'], value: boolean | string) => {
    setFormData(prev => ({
      ...prev,
      requestedServices: {
        ...prev.requestedServices,
        [service]: value
      }
    }));
  };

  const downloadPDF = async () => {
    try {
      const jsPDF = (await import('jspdf')).default;
      const doc = new jsPDF();
      
      // Add content to PDF
      doc.setFontSize(16);
      doc.text('UNCIF - Digital Backbone Campaign', 20, 20);
      doc.text('Letter of Clearance for Representative Visit', 20, 30);
      
      doc.setFontSize(12);
      doc.text(`Date: ${formData.date}`, 20, 50);
      doc.text(`Frontliner Name: ${formData.frontlinerName}`, 20, 60);
      doc.text(`Organization: ${formData.frontlinerOrganization}`, 20, 70);
      doc.text(`Representative Name: ${formData.representativeName}`, 20, 80);
      doc.text(`Representative ID: ${formData.representativeId}`, 20, 90);
      
      doc.text('Declaration', 20, 110);
      doc.text('I hereby confirm that the representative from UNCIF has:', 20, 120);
      doc.text('✓ Clearly shared all information regarding services', 25, 130);
      doc.text('✓ Answered all my queries to my satisfaction', 25, 140);
      doc.text('✓ Provided me with option to connect further', 25, 150);
      
      doc.save('letter-of-clearance.pdf');
      
      toast({
        title: "PDF Downloaded",
        description: "Letter of Clearance has been downloaded as PDF",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Could not download PDF. Please try again.",
        variant: "destructive"
      });
    }
  };

  const downloadImage = async (format: 'png' | 'jpg') => {
    if (!previewRef.current) return;
    
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(previewRef.current);
      const link = document.createElement('a');
      link.download = `letter-of-clearance.${format}`;
      link.href = canvas.toDataURL(format === 'png' ? 'image/png' : 'image/jpeg');
      link.click();
      
      toast({
        title: `${format.toUpperCase()} Downloaded`,
        description: `Letter of Clearance has been downloaded as ${format.toUpperCase()}`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: `Could not download ${format.toUpperCase()}. Please try again.`,
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UNCIF Letter of Clearance Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate professional Letter of Clearance documents for your Digital Backbone Campaign visits
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <ClearanceForm 
            formData={formData}
            onInputChange={handleInputChange}
            onServiceChange={handleServiceChange}
          />

          {/* Preview Section */}
          <div className="space-y-6">
            <ClearancePreview ref={previewRef} data={formData} />
            
            {/* Download Buttons */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button onClick={downloadPDF} className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                  <Button onClick={() => downloadImage('png')} variant="outline" className="w-full">
                    <Image className="w-4 h-4 mr-2" />
                    PNG
                  </Button>
                  <Button onClick={() => downloadImage('jpg')} variant="outline" className="w-full">
                    <FileImage className="w-4 h-4 mr-2" />
                    JPG
                  </Button>
                  <Button variant="outline" className="w-full" disabled>
                    <File className="w-4 h-4 mr-2" />
                    Word (Coming Soon)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterOfClearance;
