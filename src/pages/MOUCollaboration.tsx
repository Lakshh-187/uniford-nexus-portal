import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { Download, FileText, Image, File } from 'lucide-react';

const MOUCollaboration = () => {
  const [formData, setFormData] = useState({
    instituteName: '',
    instituteAddress: '',
    representativeName: '',
    representativeTitle: '',
    email: '',
    phone: '',
    specialRequirements: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDownload = (format: string) => {
    console.log(`Downloading MOU in ${format} format`);
    // Implementation for download functionality will be added
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <SEO 
        title="MOU & Collaboration Platform"
        description="Transform your institute to international standards with UNCIF's digital MOU platform. Create Memorandum of Understanding documents for collaboration with Uniford National Council and access CSR grants, technology, and innovation programs."
        keywords="UNCIF MOU, Uniford collaboration, Memorandum of Understanding, institute collaboration, CSR grants MOU, international standards, digital MOU platform, Pitchburg, Un-pitch, Uniwave, frontliners collaboration"
        canonical="/mou-collaboration"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              DIGITAL MOU & COLLABORATION
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Memorandum of Understanding
            </h1>
            <p className="text-lg text-gray-600">
              Transform to International Standard - Digital MOU Platform
            </p>
          </div>

          {/* MOU Document */}
          <Card className="mb-8 border-purple-200 shadow-lg">
            <CardContent className="p-8 lg:p-12 bg-white">
              {/* Letterhead */}
              <div className="border-b-4 border-purple-600 pb-6 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">U</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">UNCIF</h2>
                        <p className="text-purple-600 font-medium">Uniford National Council of Institutes & Frontliners</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Empowering institutes and frontliners through grants, funds, and technology
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>Document No: UNCIF/MOU/{new Date().getFullYear()}</p>
                    <p>Date: {currentDate}</p>
                  </div>
                </div>
              </div>

              {/* Document Title */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  MEMORANDUM OF UNDERSTANDING
                </h3>
                <p className="text-lg text-gray-700">
                  Between UNCIF and Member Institute
                </p>
              </div>

              {/* Form Fields */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institute Name *
                    </label>
                    <Input
                      placeholder="Enter institute name"
                      value={formData.instituteName}
                      onChange={(e) => handleInputChange('instituteName', e.target.value)}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institute Address *
                    </label>
                    <Textarea
                      placeholder="Enter complete address"
                      value={formData.instituteAddress}
                      onChange={(e) => handleInputChange('instituteAddress', e.target.value)}
                      className="border-purple-200 focus:border-purple-500"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Representative Name *
                    </label>
                    <Input
                      placeholder="Enter representative name"
                      value={formData.representativeName}
                      onChange={(e) => handleInputChange('representativeName', e.target.value)}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Representative Title *
                    </label>
                    <Input
                      placeholder="e.g., Director, Principal, etc."
                      value={formData.representativeTitle}
                      onChange={(e) => handleInputChange('representativeTitle', e.target.value)}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              {/* MOU Content */}
              <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">1. PURPOSE AND OBJECTIVES</h4>
                  <p className="mb-3">
                    This Memorandum of Understanding establishes a collaborative partnership between the Uniford National 
                    Council of Institutes & Frontliners (UNCIF) and the member institute to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Transform educational institutions to international standards</li>
                    <li>Provide access to technology, establishment support, licenses, and programs</li>
                    <li>Facilitate grants, tenders, and invitation opportunities</li>
                    <li>Develop comprehensive curriculum and training programs</li>
                    <li>Build frontliner capabilities and leadership development</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">2. UNCIF COMMITMENTS</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Provide access to UNCIF's network of educational resources and opportunities</li>
                    <li>Offer technical infrastructure support including portals, platforms, AR/VR, and AI models</li>
                    <li>Facilitate establishment of clubs, societies, chapters, and franchise programs</li>
                    <li>Support frontliner development through mentorship and innovation programs</li>
                    <li>Enable participation in national and international competitions</li>
                    <li>Provide faculty training and connect top minds through cohorts and workshops</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">3. MEMBER INSTITUTE RESPONSIBILITIES</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Implement UNCIF's 7-pillar structured curriculum framework</li>
                    <li>Maintain academic and operational standards as per UNCIF guidelines</li>
                    <li>Participate actively in UNCIF network activities and collaborations</li>
                    <li>Report progress and outcomes through designated UNCIF platforms</li>
                    <li>Foster student development beyond traditional academic parameters</li>
                    <li>Support practical, project-based learning methodologies</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">4. TERMS AND CONDITIONS</h4>
                  <p className="mb-2">
                    This MOU is effective from the date of signing and shall remain valid for a period of three (3) years, 
                    subject to review and renewal. Either party may terminate this agreement with 90 days written notice.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requirements / Additional Terms
                </label>
                <Textarea
                  placeholder="Enter any special requirements or additional terms"
                  value={formData.specialRequirements}
                  onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                  className="border-purple-200 focus:border-purple-500"
                  rows={4}
                />
              </div>

              <Separator className="my-8" />

              {/* Signatures */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="border-t-2 border-gray-300 pt-2 mt-16">
                    <p className="font-semibold">UNCIF Representative</p>
                    <p className="text-sm text-gray-600">Uniford National Council</p>
                    <p className="text-sm text-gray-600">Date: {currentDate}</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-t-2 border-gray-300 pt-2 mt-16">
                    <p className="font-semibold">Institute Representative</p>
                    <p className="text-sm text-gray-600">{formData.representativeName || '[Name]'}</p>
                    <p className="text-sm text-gray-600">{formData.representativeTitle || '[Title]'}</p>
                    <p className="text-sm text-gray-600">Date: _______________</p>
                  </div>
                </div>
              </div>

              {/* Office Use Only */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-semibold text-gray-900 mb-2">FOR OFFICE USE ONLY</h4>
                <div className="grid lg:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p>Application No: ____________</p>
                    <p>Received Date: ____________</p>
                  </div>
                  <div>
                    <p>Approved By: ____________</p>
                    <p>Approval Date: ____________</p>
                  </div>
                  <div>
                    <p>Status: ____________</p>
                    <p>Remarks: ____________</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Options */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-purple-600" />
                <span>Download Options</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  onClick={() => handleDownload('pdf')}
                  className="bg-red-600 hover:bg-red-700 flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>PDF</span>
                </Button>
                <Button
                  onClick={() => handleDownload('word')}
                  className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2"
                >
                  <File className="w-4 h-4" />
                  <span>Word</span>
                </Button>
                <Button
                  onClick={() => handleDownload('png')}
                  className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
                >
                  <Image className="w-4 h-4" />
                  <span>PNG</span>
                </Button>
                <Button
                  onClick={() => handleDownload('jpg')}
                  className="bg-yellow-600 hover:bg-yellow-700 flex items-center space-x-2"
                >
                  <Image className="w-4 h-4" />
                  <span>JPG</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MOUCollaboration;
