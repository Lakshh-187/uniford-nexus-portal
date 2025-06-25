
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Share2, Mail, MessageCircle, Link, FileCheck, UserCheck, ClipboardCheck, Award } from 'lucide-react';
import SEO from '@/components/SEO';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const LOC = () => {
  const [clearanceData, setClearanceData] = useState({
    representativeName: '',
    representativeId: '',
    department: '',
    frontlinerName: '',
    frontlinerOrganization: '',
    meetingDate: '',
    meetingLocation: '',
    customNote: '',
    documentType: 'clearance'
  });

  const [responseData, setResponseData] = useState({
    frontlinerName: '',
    frontlinerTitle: '',
    frontlinerOrganization: '',
    contactInfo: '',
    interestLevel: '',
    specificQuestions: '',
    followUpRequired: '',
    additionalComments: '',
    representativeName: '',
    meetingDate: ''
  });

  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState('clearance');
  const clearanceRef = useRef<HTMLDivElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  const handleClearanceInputChange = (field: string, value: string) => {
    setClearanceData(prev => ({ ...prev, [field]: value }));
  };

  const handleResponseInputChange = (field: string, value: string) => {
    setResponseData(prev => ({ ...prev, [field]: value }));
  };

  const generateClearanceContent = () => {
    const currentDate = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    return {
      title: 'LETTER OF CLEARANCE',
      subtitle: 'UNCIF Representative Certification',
      representativeName: clearanceData.representativeName || '[Representative Name]',
      representativeId: clearanceData.representativeId || '[Representative ID]',
      department: clearanceData.department || '[Department]',
      frontlinerName: clearanceData.frontlinerName || '[Frontliner Name]',
      frontlinerOrganization: clearanceData.frontlinerOrganization || '[Organization]',
      meetingDate: clearanceData.meetingDate || currentDate,
      meetingLocation: clearanceData.meetingLocation || '[Meeting Location]',
      customNote: clearanceData.customNote || 'All standard information has been shared and questions answered satisfactorily.',
      currentDate: currentDate
    };
  };

  const generateResponseContent = () => {
    const currentDate = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    return {
      title: 'FRONTLINER RESPONSE FORM',
      subtitle: 'UNCIF Engagement Documentation',
      frontlinerName: responseData.frontlinerName || '[Frontliner Name]',
      frontlinerTitle: responseData.frontlinerTitle || '[Title]',
      frontlinerOrganization: responseData.frontlinerOrganization || '[Organization]',
      contactInfo: responseData.contactInfo || '[Contact Information]',
      interestLevel: responseData.interestLevel || '[Interest Level]',
      specificQuestions: responseData.specificQuestions || '[Questions Asked]',
      followUpRequired: responseData.followUpRequired || '[Follow-up Requirements]',
      additionalComments: responseData.additionalComments || '[Additional Comments]',
      representativeName: responseData.representativeName || '[Representative Name]',
      meetingDate: responseData.meetingDate || currentDate,
      currentDate: currentDate
    };
  };

  const handleDownload = async (format: 'pdf' | 'png' | 'jpg' | 'word', type: 'clearance' | 'response') => {
    const targetRef = type === 'clearance' ? clearanceRef : responseRef;
    if (!targetRef.current) return;
    
    setIsDownloading(true);
    
    try {
      if (format === 'word') {
        // For Word format, create text content based on document type
        let textContent = '';
        if (type === 'clearance') {
          const content = generateClearanceContent();
          textContent = `${content.title}\n${content.subtitle}\n\nRepresentative: ${content.representativeName}\nID: ${content.representativeId}\nDepartment: ${content.department}\n\nFrontliner: ${content.frontlinerName}\nOrganization: ${content.frontlinerOrganization}\n\nMeeting Details:\nDate: ${content.meetingDate}\nLocation: ${content.meetingLocation}\n\nCertification:\n${content.customNote}\n\nDate: ${content.currentDate}`;
        } else {
          const content = generateResponseContent();
          textContent = `${content.title}\n${content.subtitle}\n\nFrontliner Details:\nName: ${content.frontlinerName}\nTitle: ${content.frontlinerTitle}\nOrganization: ${content.frontlinerOrganization}\nContact: ${content.contactInfo}\n\nEngagement Details:\nInterest Level: ${content.interestLevel}\nQuestions: ${content.specificQuestions}\nFollow-up: ${content.followUpRequired}\nComments: ${content.additionalComments}\n\nRepresentative: ${content.representativeName}\nDate: ${content.meetingDate}`;
        }
        
        const blob = new Blob([textContent], { type: 'application/msword' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `UNCIF_${type}_${new Date().getTime()}.doc`;
        link.click();
      } else {
        const canvas = await html2canvas(targetRef.current, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          scrollX: 0,
          scrollY: 0
        });

        if (format === 'pdf') {
          const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
          });
          
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = 210;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save(`UNCIF_${type}_${new Date().getTime()}.pdf`);
        } else {
          const link = document.createElement('a');
          link.download = `UNCIF_${type}_${new Date().getTime()}.${format}`;
          link.href = canvas.toDataURL(`image/${format}`, 1.0);
          link.click();
        }
      }
      
      console.log(`${type} document downloaded successfully as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const UShapeLogo = ({ size = 40 }: { size?: number }) => (
    <div 
      className="font-bold text-purple-800 flex items-center justify-center border-4 border-purple-800 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100"
      style={{ 
        width: size, 
        height: size, 
        fontSize: size * 0.6,
        fontFamily: 'serif'
      }}
    >
      U
    </div>
  );

  const clearanceContent = generateClearanceContent();
  const responseContent = generateResponseContent();

  return (
    <>
      <SEO 
        title="Letter of Clearance - UNCIF Documentation"
        description="Generate professional Letter of Clearance documents and capture frontliner responses for UNCIF representatives."
        keywords="UNCIF LOC, letter of clearance, representative certification, frontliner response, documentation"
        canonical="/loc"
      />

      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex items-center justify-center mb-6">
              <UShapeLogo size={56} />
              <h1 className="text-4xl md:text-5xl font-bold ml-4" style={{ fontFamily: 'serif' }}>
                Letter of Clearance
              </h1>
            </div>
            <p className="text-lg text-emerald-100">
              Professional Documentation & Response Capture System
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="clearance" className="flex items-center space-x-2">
                <FileCheck className="w-4 h-4" />
                <span>Letter of Clearance</span>
              </TabsTrigger>
              <TabsTrigger value="response" className="flex items-center space-x-2">
                <ClipboardCheck className="w-4 h-4" />
                <span>Frontliner Response</span>
              </TabsTrigger>
            </TabsList>

            {/* Clearance Tab */}
            <TabsContent value="clearance">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Clearance Form */}
                <Card className="border-2 border-emerald-400 shadow-2xl bg-gradient-to-br from-emerald-50 to-teal-50">
                  <CardHeader className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white rounded-t-lg">
                    <CardTitle className="text-xl flex items-center">
                      <FileCheck className="w-6 h-6 mr-3" />
                      Clearance Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="representativeName" className="font-semibold text-emerald-900">Representative Name *</Label>
                        <Input
                          id="representativeName"
                          value={clearanceData.representativeName}
                          onChange={(e) => handleClearanceInputChange('representativeName', e.target.value)}
                          placeholder="Enter representative name"
                          className="border-2 border-emerald-300 focus:border-emerald-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="representativeId" className="font-semibold text-emerald-900">Representative ID</Label>
                        <Input
                          id="representativeId"
                          value={clearanceData.representativeId}
                          onChange={(e) => handleClearanceInputChange('representativeId', e.target.value)}
                          placeholder="ID or Badge Number"
                          className="border-2 border-emerald-300 focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department" className="font-semibold text-emerald-900">Department</Label>
                      <Input
                        id="department"
                        value={clearanceData.department}
                        onChange={(e) => handleClearanceInputChange('department', e.target.value)}
                        placeholder="Department/Division"
                        className="border-2 border-emerald-300 focus:border-emerald-500"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="frontlinerName" className="font-semibold text-emerald-900">Frontliner Name *</Label>
                        <Input
                          id="frontlinerName"
                          value={clearanceData.frontlinerName}
                          onChange={(e) => handleClearanceInputChange('frontlinerName', e.target.value)}
                          placeholder="Frontliner's name"
                          className="border-2 border-emerald-300 focus:border-emerald-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="frontlinerOrganization" className="font-semibold text-emerald-900">Organization</Label>
                        <Input
                          id="frontlinerOrganization"
                          value={clearanceData.frontlinerOrganization}
                          onChange={(e) => handleClearanceInputChange('frontlinerOrganization', e.target.value)}
                          placeholder="Frontliner's organization"
                          className="border-2 border-emerald-300 focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="meetingDate" className="font-semibold text-emerald-900">Meeting Date</Label>
                        <Input
                          id="meetingDate"
                          type="date"
                          value={clearanceData.meetingDate}
                          onChange={(e) => handleClearanceInputChange('meetingDate', e.target.value)}
                          className="border-2 border-emerald-300 focus:border-emerald-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="meetingLocation" className="font-semibold text-emerald-900">Meeting Location</Label>
                        <Input
                          id="meetingLocation"
                          value={clearanceData.meetingLocation}
                          onChange={(e) => handleClearanceInputChange('meetingLocation', e.target.value)}
                          placeholder="Meeting location"
                          className="border-2 border-emerald-300 focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customNote" className="font-semibold text-emerald-900">Custom Certification Note</Label>
                      <Textarea
                        id="customNote"
                        value={clearanceData.customNote}
                        onChange={(e) => handleClearanceInputChange('customNote', e.target.value)}
                        placeholder="Additional certification details..."
                        className="border-2 border-emerald-300 focus:border-emerald-500 min-h-[80px]"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Clearance Preview */}
                <Card className="border-2 border-emerald-600 shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-t-lg">
                    <CardTitle className="text-xl flex items-center">
                      <FileCheck className="w-6 h-6 mr-3" />
                      Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-auto max-h-[600px]">
                      <div 
                        ref={clearanceRef}
                        className="p-8 bg-gradient-to-br from-white to-gray-50"
                        style={{ fontFamily: '"Times New Roman", serif' }}
                      >
                        <div className="border-8 border-double border-emerald-700 rounded-lg p-8 bg-gradient-to-br from-emerald-50 to-teal-50 relative">
                          {/* Decorative corners */}
                          <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-emerald-500 rounded-tl-lg"></div>
                          <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-emerald-500 rounded-tr-lg"></div>
                          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 border-emerald-500 rounded-bl-lg"></div>
                          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 border-emerald-500 rounded-br-lg"></div>

                          {/* Header */}
                          <div className="text-center mb-8">
                            <UShapeLogo size={48} />
                            <div className="text-3xl font-bold text-emerald-900 mt-4 mb-2">UNCIF</div>
                            <div className="text-lg text-emerald-700 font-semibold">Uniford National Council of Institutes & Frontliners</div>
                            <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto mt-4"></div>
                          </div>

                          {/* Main Title */}
                          <div className="text-center bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-lg border-4 border-emerald-400 mb-8">
                            <h1 className="text-2xl font-bold text-emerald-900 mb-2">{clearanceContent.title}</h1>
                            <p className="text-lg text-emerald-700 italic">{clearanceContent.subtitle}</p>
                          </div>

                          {/* Content */}
                          <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg border-2 border-emerald-200">
                              <h3 className="text-lg font-bold text-emerald-900 mb-4">Representative Information</h3>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div><strong>Name:</strong> {clearanceContent.representativeName}</div>
                                <div><strong>ID:</strong> {clearanceContent.representativeId}</div>
                                <div><strong>Department:</strong> {clearanceContent.department}</div>
                                <div><strong>Date:</strong> {clearanceContent.meetingDate}</div>
                              </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg border-2 border-emerald-200">
                              <h3 className="text-lg font-bold text-emerald-900 mb-4">Frontliner Information</h3>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div><strong>Name:</strong> {clearanceContent.frontlinerName}</div>
                                <div><strong>Organization:</strong> {clearanceContent.frontlinerOrganization}</div>
                                <div><strong>Meeting Location:</strong> {clearanceContent.meetingLocation}</div>
                              </div>
                            </div>

                            <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-300">
                              <h3 className="text-lg font-bold text-emerald-900 mb-4 text-center">CERTIFICATION</h3>
                              <p className="text-emerald-800 leading-relaxed text-center">
                                This is to certify that I, <strong>{clearanceContent.representativeName}</strong>, 
                                representing UNCIF, have successfully engaged with <strong>{clearanceContent.frontlinerName}</strong> 
                                and have shared all necessary information regarding our programs and services. 
                                All questions raised by the frontliner have been answered satisfactorily.
                              </p>
                              <p className="text-emerald-800 leading-relaxed text-center mt-4">
                                {clearanceContent.customNote}
                              </p>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="mt-12 pt-8 border-t-2 border-emerald-300">
                            <div className="flex justify-between items-end">
                              <div className="text-left">
                                <p className="text-sm text-gray-600 mb-4">Issue Date: {clearanceContent.currentDate}</p>
                                <div className="text-lg font-bold text-emerald-900">
                                  UNCIF Official Seal
                                </div>
                              </div>
                              
                              <div className="text-center">
                                <UShapeLogo size={40} />
                                <p className="text-xs text-gray-500 mt-2">Verified Document</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Response Tab */}
            <TabsContent value="response">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Response Form */}
                <Card className="border-2 border-teal-400 shadow-2xl bg-gradient-to-br from-teal-50 to-emerald-50">
                  <CardHeader className="bg-gradient-to-r from-teal-800 to-emerald-800 text-white rounded-t-lg">
                    <CardTitle className="text-xl flex items-center">
                      <ClipboardCheck className="w-6 h-6 mr-3" />
                      Response Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="frontlinerName" className="font-semibold text-teal-900">Frontliner Name *</Label>
                        <Input
                          id="frontlinerName"
                          value={responseData.frontlinerName}
                          onChange={(e) => handleResponseInputChange('frontlinerName', e.target.value)}
                          placeholder="Enter frontliner name"
                          className="border-2 border-teal-300 focus:border-teal-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="frontlinerTitle" className="font-semibold text-teal-900">Title/Position</Label>
                        <Input
                          id="frontlinerTitle"
                          value={responseData.frontlinerTitle}
                          onChange={(e) => handleResponseInputChange('frontlinerTitle', e.target.value)}
                          placeholder="Title or position"
                          className="border-2 border-teal-300 focus:border-teal-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="frontlinerOrganization" className="font-semibold text-teal-900">Organization</Label>
                      <Input
                        id="frontlinerOrganization"
                        value={responseData.frontlinerOrganization}
                        onChange={(e) => handleResponseInputChange('frontlinerOrganization', e.target.value)}
                        placeholder="Organization name"
                        className="border-2 border-teal-300 focus:border-teal-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactInfo" className="font-semibold text-teal-900">Contact Information</Label>
                      <Input
                        id="contactInfo"
                        value={responseData.contactInfo}
                        onChange={(e) => handleResponseInputChange('contactInfo', e.target.value)}
                        placeholder="Phone/Email"
                        className="border-2 border-teal-300 focus:border-teal-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interestLevel" className="font-semibold text-teal-900">Interest Level</Label>
                      <Select value={responseData.interestLevel} onValueChange={(value) => handleResponseInputChange('interestLevel', value)}>
                        <SelectTrigger className="border-2 border-teal-300 focus:border-teal-500">
                          <SelectValue placeholder="Select interest level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High Interest</SelectItem>
                          <SelectItem value="moderate">Moderate Interest</SelectItem>
                          <SelectItem value="low">Low Interest</SelectItem>
                          <SelectItem value="need-info">Need More Information</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specificQuestions" className="font-semibold text-teal-900">Specific Questions Asked</Label>
                      <Textarea
                        id="specificQuestions"
                        value={responseData.specificQuestions}
                        onChange={(e) => handleResponseInputChange('specificQuestions', e.target.value)}
                        placeholder="List the questions asked by the frontliner..."
                        className="border-2 border-teal-300 focus:border-teal-500 min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="followUpRequired" className="font-semibold text-teal-900">Follow-up Required</Label>
                      <Textarea
                        id="followUpRequired"
                        value={responseData.followUpRequired}
                        onChange={(e) => handleResponseInputChange('followUpRequired', e.target.value)}
                        placeholder="Any follow-up actions needed..."
                        className="border-2 border-teal-300 focus:border-teal-500 min-h-[60px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalComments" className="font-semibold text-teal-900">Additional Comments</Label>
                      <Textarea
                        id="additionalComments"
                        value={responseData.additionalComments}
                        onChange={(e) => handleResponseInputChange('additionalComments', e.target.value)}
                        placeholder="Any additional observations or comments..."
                        className="border-2 border-teal-300 focus:border-teal-500 min-h-[60px]"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="representativeName" className="font-semibold text-teal-900">Representative Name</Label>
                        <Input
                          id="representativeName"
                          value={responseData.representativeName}
                          onChange={(e) => handleResponseInputChange('representativeName', e.target.value)}
                          placeholder="Your name"
                          className="border-2 border-teal-300 focus:border-teal-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="meetingDate" className="font-semibold text-teal-900">Meeting Date</Label>
                        <Input
                          id="meetingDate"
                          type="date"
                          value={responseData.meetingDate}
                          onChange={(e) => handleResponseInputChange('meetingDate', e.target.value)}
                          className="border-2 border-teal-300 focus:border-teal-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Preview */}
                <Card className="border-2 border-teal-600 shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-t-lg">
                    <CardTitle className="text-xl flex items-center">
                      <ClipboardCheck className="w-6 h-6 mr-3" />
                      Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-auto max-h-[600px]">
                      <div 
                        ref={responseRef}
                        className="p-8 bg-gradient-to-br from-white to-gray-50"
                        style={{ fontFamily: '"Times New Roman", serif' }}
                      >
                        <div className="border-8 border-double border-teal-700 rounded-lg p-8 bg-gradient-to-br from-teal-50 to-emerald-50 relative">
                          {/* Decorative corners */}
                          <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-teal-500 rounded-tl-lg"></div>
                          <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-teal-500 rounded-tr-lg"></div>
                          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 border-teal-500 rounded-bl-lg"></div>
                          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 border-teal-500 rounded-br-lg"></div>

                          {/* Header */}
                          <div className="text-center mb-8">
                            <UShapeLogo size={48} />
                            <div className="text-3xl font-bold text-teal-900 mt-4 mb-2">UNCIF</div>
                            <div className="text-lg text-teal-700 font-semibold">Uniford National Council of Institutes & Frontliners</div>
                            <div className="w-32 h-1 bg-gradient-to-r from-teal-600 to-emerald-500 mx-auto mt-4"></div>
                          </div>

                          {/* Main Title */}
                          <div className="text-center bg-gradient-to-r from-teal-100 to-emerald-100 p-6 rounded-lg border-4 border-teal-400 mb-8">
                            <h1 className="text-2xl font-bold text-teal-900 mb-2">{responseContent.title}</h1>
                            <p className="text-lg text-teal-700 italic">{responseContent.subtitle}</p>
                          </div>

                          {/* Content */}
                          <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg border-2 border-teal-200">
                              <h3 className="text-lg font-bold text-teal-900 mb-4">Frontliner Details</h3>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div><strong>Name:</strong> {responseContent.frontlinerName}</div>
                                <div><strong>Title:</strong> {responseContent.frontlinerTitle}</div>
                                <div><strong>Organization:</strong> {responseContent.frontlinerOrganization}</div>
                                <div><strong>Contact:</strong> {responseContent.contactInfo}</div>
                              </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg border-2 border-teal-200">
                              <h3 className="text-lg font-bold text-teal-900 mb-4">Engagement Summary</h3>
                              <div className="space-y-3 text-sm">
                                <div><strong>Interest Level:</strong> {responseContent.interestLevel}</div>
                                <div><strong>Questions Asked:</strong> {responseContent.specificQuestions}</div>
                                <div><strong>Follow-up Required:</strong> {responseContent.followUpRequired}</div>
                                <div><strong>Additional Comments:</strong> {responseContent.additionalComments}</div>
                              </div>
                            </div>

                            <div className="bg-teal-50 p-6 rounded-lg border-2 border-teal-300">
                              <h3 className="text-lg font-bold text-teal-900 mb-4 text-center">REPRESENTATIVE CERTIFICATION</h3>
                              <p className="text-teal-800 leading-relaxed text-center">
                                I, <strong>{responseContent.representativeName}</strong>, hereby certify that the above information 
                                accurately represents the engagement with <strong>{responseContent.frontlinerName}</strong> 
                                on <strong>{responseContent.meetingDate}</strong>. All responses and feedback have been 
                                documented truthfully for departmental records.
                              </p>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="mt-12 pt-8 border-t-2 border-teal-300">
                            <div className="flex justify-between items-end">
                              <div className="text-left">
                                <p className="text-sm text-gray-600 mb-4">Submitted: {responseContent.currentDate}</p>
                                <div className="text-lg font-bold text-teal-900">
                                  Representative Signature
                                </div>
                              </div>
                              
                              <div className="text-center">
                                <UShapeLogo size={40} />
                                <p className="text-xs text-gray-500 mt-2">Response Form</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <Card className="mt-8 border-2 border-emerald-400 shadow-2xl bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-4 text-emerald-900 flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download {activeTab === 'clearance' ? 'Clearance' : 'Response'}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['pdf', 'png', 'jpg', 'word'].map((format) => (
                      <Button
                        key={format}
                        onClick={() => handleDownload(format as any, activeTab as any)}
                        disabled={isDownloading}
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold"
                      >
                        {format.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LOC;
