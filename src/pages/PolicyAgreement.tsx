
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Image, FileImage, File, Shield, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AgreementForm from '@/components/AgreementForm';
import AgreementPreview from '@/components/AgreementPreview';
import PolicyDisplay from '@/components/PolicyDisplay';

export interface AgreementData {
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  organizationName: string;
  projectType: 'business-portfolio' | 'ecommerce-ai';
  numberOfPages: number;
  specialCategory: 'regular' | 'student' | 'financial-aid' | 'founder';
  requestedFeatures: string;
  domainHosting: 'self' | 'uncif-assistance';
  agreementDate: string;
  totalAmount: number;
  applicationFee: number;
  editingFee: number;
  documentationFee: number;
}

const PolicyAgreement = () => {
  const { toast } = useToast();
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'policy' | 'agreement'>('policy');
  
  const [formData, setFormData] = useState<AgreementData>({
    applicantName: '',
    applicantEmail: '',
    applicantPhone: '',
    organizationName: '',
    projectType: 'business-portfolio',
    numberOfPages: 3,
    specialCategory: 'regular',
    requestedFeatures: '',
    domainHosting: 'self',
    agreementDate: new Date().toISOString().split('T')[0],
    totalAmount: 700,
    applicationFee: 300,
    editingFee: 700,
    documentationFee: 0
  });

  const calculateFees = (pages: number, category: string, projectType: string) => {
    let editingFee = 700; // Base fee
    let documentationFee = 0;
    
    // Additional page charges
    if (pages > 3) {
      editingFee += (pages - 3) * 140;
    }
    
    // Special category adjustments
    if (category === 'student' || category === 'financial-aid' || category === 'founder') {
      documentationFee = 0; // No documentation fee for special categories
    }
    
    const totalAmount = editingFee + documentationFee;
    const applicantAmount = Math.round(totalAmount * 0.2); // 20% for applicant
    
    return {
      editingFee,
      documentationFee,
      totalAmount: applicantAmount,
      applicationFee: 300
    };
  };

  const handleInputChange = (field: keyof AgreementData, value: any) => {
    const updatedData = { ...formData, [field]: value };
    
    // Recalculate fees when relevant fields change
    if (field === 'numberOfPages' || field === 'specialCategory' || field === 'projectType') {
      const fees = calculateFees(
        field === 'numberOfPages' ? value : updatedData.numberOfPages,
        field === 'specialCategory' ? value : updatedData.specialCategory,
        field === 'projectType' ? value : updatedData.projectType
      );
      
      updatedData.editingFee = fees.editingFee;
      updatedData.documentationFee = fees.documentationFee;
      updatedData.totalAmount = fees.totalAmount;
      updatedData.applicationFee = fees.applicationFee;
    }
    
    setFormData(updatedData);
  };

  const downloadPDF = async () => {
    try {
      const jsPDF = (await import('jspdf')).default;
      const doc = new jsPDF();
      
      // Add content to PDF
      doc.setFontSize(16);
      doc.text('UNCIF - Tech Support Agreement', 20, 20);
      
      doc.setFontSize(12);
      doc.text(`Date: ${formData.agreementDate}`, 20, 40);
      doc.text(`Applicant: ${formData.applicantName}`, 20, 50);
      doc.text(`Organization: ${formData.organizationName}`, 20, 60);
      doc.text(`Project Type: ${formData.projectType}`, 20, 70);
      doc.text(`Pages: ${formData.numberOfPages}`, 20, 80);
      doc.text(`Total Amount: ₹${formData.totalAmount}`, 20, 90);
      
      // Add terms and conditions
      doc.text('Terms & Conditions:', 20, 110);
      doc.text('• 20:80 cost sharing model', 25, 120);
      doc.text('• Application fee: ₹300', 25, 130);
      doc.text('• Code transfer after review', 25, 140);
      
      doc.save('tech-support-agreement.pdf');
      
      toast({
        title: "PDF Downloaded",
        description: "Agreement has been downloaded as PDF",
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
      link.download = `tech-support-agreement.${format}`;
      link.href = canvas.toDataURL(format === 'png' ? 'image/png' : 'image/jpeg');
      link.click();
      
      toast({
        title: `${format.toUpperCase()} Downloaded`,
        description: `Agreement has been downloaded as ${format.toUpperCase()}`,
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UNCIF Policy & Agreement Center
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Modern policy management and dynamic agreement generation for tech support services
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <Button
              variant={activeTab === 'policy' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('policy')}
              className="mr-2"
            >
              <Shield className="w-4 h-4 mr-2" />
              Our Policy
            </Button>
            <Button
              variant={activeTab === 'agreement' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('agreement')}
            >
              <Users className="w-4 h-4 mr-2" />
              Agreement Generator
            </Button>
          </div>
        </div>

        {activeTab === 'policy' ? (
          <PolicyDisplay />
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <AgreementForm 
              formData={formData}
              onInputChange={handleInputChange}
            />

            {/* Preview Section */}
            <div className="space-y-6">
              <AgreementPreview ref={previewRef} data={formData} />
              
              {/* Download Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Agreement
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
        )}
      </div>
    </div>
  );
};

export default PolicyAgreement;
