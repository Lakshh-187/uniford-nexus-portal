
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { FileText, Download, Mail, Star, MessageSquare } from "lucide-react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import SEO from "@/components/SEO";

interface FormData {
  applicantName: string;
  applicationDate: string;
  clearanceType: string;
  purpose: string;
  additionalNotes: string;
  signature: string;
  stamp: string;
}

interface FrontlinerFormData {
  frontlinerName: string;
  representativeName: string;
  meetingDate: string;
  meetingType: string;
  responseType: string;
  responseDetails: string;
  recommendations: string;
  signature: string;
  stamp: string;
}

interface RatingFormData {
  representativeName: string;
  ratingDate: string;
  punctuality: string;
  communication: string;
  professionalism: string;
  problemSolving: string;
  overallSatisfaction: string;
  improvements: string;
  additionalComments: string;
  signature: string;
  stamp: string;
}

interface WrittenFeedbackData {
  frontlinerName: string;
  representativeName: string;
  meetingDate: string;
  meetingPurpose: string;
  feedbackType: string;
  detailedFeedback: string;
  suggestions: string;
  followUpRequired: boolean;
  priority: string;
  signature: string;
  stamp: string;
}

const LOC = () => {
  const [formData, setFormData] = useState<FormData>({
    applicantName: '',
    applicationDate: '',
    clearanceType: '',
    purpose: '',
    additionalNotes: '',
    signature: '',
    stamp: ''
  });

  const [frontlinerData, setFrontlinerData] = useState<FrontlinerFormData>({
    frontlinerName: '',
    representativeName: '',
    meetingDate: '',
    meetingType: '',
    responseType: '',
    responseDetails: '',
    recommendations: '',
    signature: '',
    stamp: ''
  });

  const [ratingData, setRatingData] = useState<RatingFormData>({
    representativeName: '',
    ratingDate: '',
    punctuality: '',
    communication: '',
    professionalism: '',
    problemSolving: '',
    overallSatisfaction: '',
    improvements: '',
    additionalComments: '',
    signature: '',
    stamp: ''
  });

  const [feedbackData, setFeedbackData] = useState<WrittenFeedbackData>({
    frontlinerName: '',
    representativeName: '',
    meetingDate: '',
    meetingPurpose: '',
    feedbackType: '',
    detailedFeedback: '',
    suggestions: '',
    followUpRequired: false,
    priority: '',
    signature: '',
    stamp: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const generatePDF = async (contentId: string, filename: string) => {
    setIsGenerating(true);
    try {
      const element = document.getElementById(contentId);
      if (!element) {
        throw new Error('Content element not found');
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        height: element.scrollHeight,
        width: element.scrollWidth
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(filename);

      toast({
        title: "Success",
        description: "PDF generated successfully",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error",
        description: "Failed to generate PDF",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const sendEmail = async (data: any, subject: string, contentType: string) => {
    setIsSending(true);
    try {
      // In a real application, this would call your backend API
      const emailData = {
        to: "info@uniford.org",
        subject: subject,
        body: `
New ${contentType} submission:

${JSON.stringify(data, null, 2)}

Submitted on: ${new Date().toLocaleString()}
        `
      };

      console.log('Email would be sent:', emailData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Success",
        description: `${contentType} sent to info@uniford.org successfully`,
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send email",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const renderStarRating = (value: string, onChange: (value: string) => void) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-6 h-6 cursor-pointer transition-colors ${
              parseInt(value) >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
            onClick={() => onChange(star.toString())}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {value ? `${value}/5` : 'Not rated'}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <SEO 
        title="Letter of Clearance - UNCIF"
        description="Generate and manage official letters of clearance and frontliner responses"
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">UNCIF Documentation Center</h1>
          <p className="text-lg text-gray-600">Generate official letters and manage feedback forms</p>
        </div>

        <Tabs defaultValue="clearance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="clearance" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Letter of Clearance
            </TabsTrigger>
            <TabsTrigger value="frontliner" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Frontliner Response
            </TabsTrigger>
            <TabsTrigger value="rating" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Representative Rating
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Written Feedback
            </TabsTrigger>
          </TabsList>

          {/* Letter of Clearance Tab */}
          <TabsContent value="clearance">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Letter of Clearance Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="applicantName">Applicant Name</Label>
                    <Input
                      id="applicantName"
                      value={formData.applicantName}
                      onChange={(e) => setFormData({...formData, applicantName: e.target.value})}
                      placeholder="Enter applicant's full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="applicationDate">Application Date</Label>
                    <Input
                      id="applicationDate"
                      type="date"
                      value={formData.applicationDate}
                      onChange={(e) => setFormData({...formData, applicationDate: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="clearanceType">Clearance Type</Label>
                    <Select value={formData.clearanceType} onValueChange={(value) => setFormData({...formData, clearanceType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select clearance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employment">Employment Clearance</SelectItem>
                        <SelectItem value="travel">Travel Clearance</SelectItem>
                        <SelectItem value="business">Business Clearance</SelectItem>
                        <SelectItem value="academic">Academic Clearance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="purpose">Purpose</Label>
                    <Textarea
                      id="purpose"
                      value={formData.purpose}
                      onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                      placeholder="Describe the purpose for this clearance"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                      placeholder="Any additional information"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="signature">Digital Signature</Label>
                    <Input
                      id="signature"
                      value={formData.signature}
                      onChange={(e) => setFormData({...formData, signature: e.target.value})}
                      placeholder="Type your full name as signature"
                    />
                  </div>

                  <div>
                    <Label htmlFor="stamp">Official Stamp/ID</Label>
                    <Input
                      id="stamp"
                      value={formData.stamp}
                      onChange={(e) => setFormData({...formData, stamp: e.target.value})}
                      placeholder="Enter stamp number or official ID"
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      onClick={() => generatePDF('clearance-preview', 'letter-of-clearance.pdf')}
                      disabled={isGenerating}
                      className="flex-1"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {isGenerating ? 'Generating...' : 'Download PDF'}
                    </Button>
                    <Button 
                      onClick={() => sendEmail(formData, 'New Letter of Clearance Application', 'Letter of Clearance')}
                      disabled={isSending}
                      variant="outline"
                      className="flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {isSending ? 'Sending...' : 'Send Email'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div id="clearance-preview" className="bg-white p-8 rounded-lg shadow-sm border min-h-[600px]">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">UNCIF</h2>
                      <h3 className="text-xl font-semibold text-gray-700">LETTER OF CLEARANCE</h3>
                      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <strong>Applicant Name:</strong>
                          <p className="border-b border-gray-300 pb-1">{formData.applicantName || '_________________'}</p>
                        </div>
                        <div>
                          <strong>Date:</strong>
                          <p className="border-b border-gray-300 pb-1">{formData.applicationDate || '_________________'}</p>
                        </div>
                      </div>

                      <div>
                        <strong>Clearance Type:</strong>
                        <p className="border-b border-gray-300 pb-1">{formData.clearanceType || '_________________'}</p>
                      </div>

                      <div>
                        <strong>Purpose:</strong>
                        <p className="min-h-[80px] border border-gray-300 p-3 rounded">
                          {formData.purpose || 'Purpose of clearance will be displayed here...'}
                        </p>
                      </div>

                      <div>
                        <strong>Additional Notes:</strong>
                        <p className="min-h-[60px] border border-gray-300 p-3 rounded">
                          {formData.additionalNotes || 'Additional notes will be displayed here...'}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-8 mt-12">
                        <div>
                          <strong>Signature:</strong>
                          <p className="border-b border-gray-300 pb-1 mt-8">{formData.signature || '_________________'}</p>
                        </div>
                        <div>
                          <strong>Official Stamp:</strong>
                          <p className="border-b border-gray-300 pb-1 mt-8">{formData.stamp || '_________________'}</p>
                        </div>
                      </div>

                      <div className="mt-12 text-center text-sm text-gray-500">
                        <p>This is an official document issued by UNCIF</p>
                        <p>Generated on: {new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Frontliner Response Tab */}
          <TabsContent value="frontliner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Frontliner Response Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="frontlinerName">Frontliner Name</Label>
                    <Input
                      id="frontlinerName"
                      value={frontlinerData.frontlinerName}
                      onChange={(e) => setFrontlinerData({...frontlinerData, frontlinerName: e.target.value})}
                      placeholder="Enter frontliner's name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="representativeName">Representative Name</Label>
                    <Input
                      id="representativeName"
                      value={frontlinerData.representativeName}
                      onChange={(e) => setFrontlinerData({...frontlinerData, representativeName: e.target.value})}
                      placeholder="Enter representative's name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="meetingDate">Meeting Date</Label>
                    <Input
                      id="meetingDate"
                      type="date"
                      value={frontlinerData.meetingDate}
                      onChange={(e) => setFrontlinerData({...frontlinerData, meetingDate: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="meetingType">Meeting Type</Label>
                    <Select value={frontlinerData.meetingType} onValueChange={(value) => setFrontlinerData({...frontlinerData, meetingType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select meeting type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="complaint">Complaint Resolution</SelectItem>
                        <SelectItem value="inquiry">General Inquiry</SelectItem>
                        <SelectItem value="follow-up">Follow-up Meeting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="responseType">Response Type</Label>
                    <Select value={frontlinerData.responseType} onValueChange={(value) => setFrontlinerData({...frontlinerData, responseType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select response type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="resolved">Issue Resolved</SelectItem>
                        <SelectItem value="escalated">Escalated to Higher Authority</SelectItem>
                        <SelectItem value="pending">Pending Further Review</SelectItem>
                        <SelectItem value="referred">Referred to Another Department</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="responseDetails">Response Details</Label>
                    <Textarea
                      id="responseDetails"
                      value={frontlinerData.responseDetails}
                      onChange={(e) => setFrontlinerData({...frontlinerData, responseDetails: e.target.value})}
                      placeholder="Describe the response provided to the representative"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="recommendations">Recommendations</Label>
                    <Textarea
                      id="recommendations"
                      value={frontlinerData.recommendations}
                      onChange={(e) => setFrontlinerData({...frontlinerData, recommendations: e.target.value})}
                      placeholder="Any recommendations for future interactions"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="frontlinerSignature">Digital Signature</Label>
                    <Input
                      id="frontlinerSignature"
                      value={frontlinerData.signature}
                      onChange={(e) => setFrontlinerData({...frontlinerData, signature: e.target.value})}
                      placeholder="Type your full name as signature"
                    />
                  </div>

                  <div>
                    <Label htmlFor="frontlinerStamp">Employee ID/Stamp</Label>
                    <Input
                      id="frontlinerStamp"
                      value={frontlinerData.stamp}
                      onChange={(e) => setFrontlinerData({...frontlinerData, stamp: e.target.value})}
                      placeholder="Enter employee ID or stamp number"
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      onClick={() => generatePDF('frontliner-preview', 'frontliner-response.pdf')}
                      disabled={isGenerating}
                      className="flex-1"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {isGenerating ? 'Generating...' : 'Download PDF'}
                    </Button>
                    <Button 
                      onClick={() => sendEmail(frontlinerData, 'New Frontliner Response Report', 'Frontliner Response')}
                      disabled={isSending}
                      variant="outline"
                      className="flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {isSending ? 'Sending...' : 'Send Email'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div id="frontliner-preview" className="bg-white p-8 rounded-lg shadow-sm border min-h-[600px]">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">UNCIF</h2>
                      <h3 className="text-xl font-semibold text-gray-700">FRONTLINER RESPONSE REPORT</h3>
                      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <strong>Frontliner Name:</strong>
                          <p className="border-b border-gray-300 pb-1">{frontlinerData.frontlinerName || '_________________'}</p>
                        </div>
                        <div>
                          <strong>Meeting Date:</strong>
                          <p className="border-b border-gray-300 pb-1">{frontlinerData.meetingDate || '_________________'}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <strong>Representative Name:</strong>
                          <p className="border-b border-gray-300 pb-1">{frontlinerData.representativeName || '_________________'}</p>
                        </div>
                        <div>
                          <strong>Meeting Type:</strong>
                          <p className="border-b border-gray-300 pb-1">{frontlinerData.meetingType || '_________________'}</p>
                        </div>
                      </div>

                      <div>
                        <strong>Response Type:</strong>
                        <p className="border-b border-gray-300 pb-1">{frontlinerData.responseType || '_________________'}</p>
                      </div>

                      <div>
                        <strong>Response Details:</strong>
                        <p className="min-h-[100px] border border-gray-300 p-3 rounded">
                          {frontlinerData.responseDetails || 'Response details will be displayed here...'}
                        </p>
                      </div>

                      <div>
                        <strong>Recommendations:</strong>
                        <p className="min-h-[80px] border border-gray-300 p-3 rounded">
                          {frontlinerData.recommendations || 'Recommendations will be displayed here...'}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-8 mt-12">
                        <div>
                          <strong>Frontliner Signature:</strong>
                          <p className="border-b border-gray-300 pb-1 mt-8">{frontlinerData.signature || '_________________'}</p>
                        </div>
                        <div>
                          <strong>Employee ID:</strong>
                          <p className="border-b border-gray-300 pb-1 mt-8">{frontlinerData.stamp || '_________________'}</p>
                        </div>
                      </div>

                      <div className="mt-12 text-center text-sm text-gray-500">
                        <p>This is an official response report by UNCIF</p>
                        <p>Generated on: {new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Representative Rating Tab */}
          <TabsContent value="rating">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Representative Rating Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="ratingRepName">Representative Name</Label>
                    <Input
                      id="ratingRepName"
                      value={ratingData.representativeName}
                      onChange={(e) => setRatingData({...ratingData, representativeName: e.target.value})}
                      placeholder="Enter representative's name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="ratingDate">Rating Date</Label>
                    <Input
                      id="ratingDate"
                      type="date"
                      value={ratingData.ratingDate}
                      onChange={(e) => setRatingData({...ratingData, ratingDate: e.target.value})}
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Punctuality</Label>
                      {renderStarRating(ratingData.punctuality, (value) => setRatingData({...ratingData, punctuality: value}))}
                    </div>

                    <div>
                      <Label className="text-base font-medium">Communication Skills</Label>
                      {renderStarRating(ratingData.communication, (value) => setRatingData({...ratingData, communication: value}))}
                    </div>

                    <div>
                      <Label className="text-base font-medium">Professionalism</Label>
                      {renderStarRating(ratingData.professionalism, (value) => setRatingData({...ratingData, professionalism: value}))}
                    </div>

                    <div>
                      <Label className="text-base font-medium">Problem Solving</Label>
                      {renderStarRating(ratingData.problemSolving, (value) => setRatingData({...ratingData, problemSolving: value}))}
                    </div>

                    <div>
                      <Label className="text-base font-medium">Overall Satisfaction</Label>
                      {renderStarRating(ratingData.overallSatisfaction, (value) => setRatingData({...ratingData, overallSatisfaction: value}))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="improvements">Areas for Improvement</Label>
                    <Textarea
                      id="improvements"
                      value={ratingData.improvements}
                      onChange={(e) => setRatingData({...ratingData, improvements: e.target.value})}
                      placeholder="Suggest areas where the representative can improve"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="ratingComments">Additional Comments</Label>
                    <Textarea
                      id="ratingComments"
                      value={ratingData.additionalComments}
                      onChange={(e) => setRatingData({...ratingData, additionalComments: e.target.value})}
                      placeholder="Any additional feedback or comments"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="ratingSignature">Digital Signature</Label>
                    <Input
                      id="ratingSignature"
                      value={ratingData.signature}
                      onChange={(e) => setRatingData({...ratingData, signature: e.target.value})}
                      placeholder="Type your full name as signature"
                    />
                  </div>

                  <div>
                    <Label htmlFor="ratingStamp">Evaluator ID/Stamp</Label>
                    <Input
                      id="ratingStamp"
                      value={ratingData.stamp}
                      onChange={(e) => setRatingData({...ratingData, stamp: e.target.value})}
                      placeholder="Enter evaluator ID or stamp number"
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      onClick={() => generatePDF('rating-preview', 'representative-rating.pdf')}
                      disabled={isGenerating}
                      className="flex-1"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {isGenerating ? 'Generating...' : 'Download PDF'}
                    </Button>
                    <Button 
                      onClick={() => sendEmail(ratingData, 'New Representative Rating Report', 'Representative Rating')}
                      disabled={isSending}
                      variant="outline"
                      className="flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {isSending ? 'Sending...' : 'Send Email'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div id="rating-preview" className="bg-white p-8 rounded-lg shadow-sm border min-h-[600px]">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">UNCIF</h2>
                      <h3 className="text-xl font-semibold text-gray-700">REPRESENTATIVE RATING REPORT</h3>
                      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <strong>Representative Name:</strong>
                          <p className="border-b border-gray-300 pb-1">{ratingData.representativeName || '_________________'}</p>
                        </div>
                        <div>
                          <strong>Rating Date:</strong>
                          <p className="border-b border-gray-300 pb-1">{ratingData.ratingDate || '_________________'}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Performance Ratings</h4>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span>Punctuality:</span>
                            <Badge variant="outline">{ratingData.punctuality ? `${ratingData.punctuality}/5` : 'Not rated'}</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span>Communication Skills:</span>
                            <Badge variant="outline">{ratingData.communication ? `${ratingData.communication}/5` : 'Not rated'}</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span>Professionalism:</span>
                            <Badge variant="outline">{ratingData.professionalism ? `${ratingData.professionalism}/5` : 'Not rated'}</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span>Problem Solving:</span>
                            <Badge variant="outline">{ratingData.problemSolving ? `${ratingData.problemSolving}/5` : 'Not rated'}</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-2 border-blue-200">
                            <span className="font-medium">Overall Satisfaction:</span>
                            <Badge className="bg-blue-600">{ratingData.overallSatisfaction ? `${ratingData.overallSatisfaction}/5` : 'Not rated'}</Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <strong>Areas for Improvement:</strong>
                        <p className="min-h-[80px] border border-gray-300 p-3 rounded">
                          {ratingData.improvements || 'Areas for improvement will be displayed here...'}
                        </p>
                      </div>

                      <div>
                        <strong>Additional Comments:</strong>
                        <p className="min-h-[80px] border border-gray-300 p-3 rounded">
                          {ratingData.additionalComments || 'Additional comments will be displayed here...'}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-8 mt-12">
                        <div>
                          <strong>Evaluator Signature:</strong>
                          <p className="border-b border-gray-300 pb-1 mt-8">{ratingData.signature || '_________________'}</p>
                        </div>
                        <div>
                          <strong>Evaluator ID:</strong>
                          <p className="border-b border-gray-300 pb-1 mt-8">{ratingData.stamp || '_________________'}</p>
                        </div>
                      </div>

                      <div className="mt-12 text-center text-sm text-gray-500">
                        <p>This is an official rating report by UNCIF</p>
                        <p>Generated on: {new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Written Feedback Tab */}
          <TabsContent value="feedback">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Written Feedback Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="feedbackFrontlinerName">Frontliner Name</Label>
                    <Input
                      id="feedbackFrontlinerName"
                      value={feedbackData.frontlinerName}
                      onChange={(e) => setFeedbackData({...feedbackData, frontlinerName: e.target.value})}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="feedbackRepresentativeName">Representative Name</Label>
                    <Input
                      id="feedbackRepresentativeName"
                      value={feedbackData.representativeName}
                      onChange={(e) => setFeedbackData({...feedbackData, representativeName: e.target.value})}
                      placeholder="Enter representative's name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="feedbackMeetingDate">Meeting Date</Label>
                    <Input
                      id="feedbackMeetingDate"
                      type="date"
                      value={feedbackData.meetingDate}
                      onChange={(e) => setFeedbackData({...feedbackData, meetingDate: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="meetingPurpose">Meeting Purpose</Label>
                    <Input
                      id="meetingPurpose"
                      value={feedbackData.meetingPurpose}
                      onChange={(e) => setFeedbackData({...feedbackData, meetingPurpose: e.target.value})}
                      placeholder="Brief description of meeting purpose"
                    />
                  </div>

                  <div>
                    <Label htmlFor="feedbackType">Feedback Type</Label>
                    <Select value={feedbackData.feedbackType} onValueChange={(value) => setFeedbackData({...feedbackData, feedbackType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select feedback type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="positive">Positive Feedback</SelectItem>
                        <SelectItem value="constructive">Constructive Criticism</SelectItem>
                        <SelectItem value="concern">Concern/Issue</SelectItem>
                        <SelectItem value="suggestion">Suggestion for Improvement</SelectItem>
                        <SelectItem value="general">General Observation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="detailedFeedback">Detailed Feedback</Label>
                    <Textarea
                      id="detailedFeedback"
                      value={feedbackData.detailedFeedback}
                      onChange={(e) => setFeedbackData({...feedbackData, detailedFeedback: e.target.value})}
                      placeholder="Provide detailed feedback about the representative's performance during the meeting"
                      rows={5}
                    />
                  </div>

                  <div>
                    <Label htmlFor="suggestions">Suggestions for Improvement</Label>
                    <Textarea
                      id="suggestions"
                      value={feedbackData.suggestions}
                      onChange={(e) => setFeedbackData({...feedbackData, suggestions: e.target.value})}
                      placeholder="Any specific suggestions for improving future interactions"
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="followUpRequired"
                      checked={feedbackData.followUpRequired}
                      onCheckedChange={(checked) => setFeedbackData({...feedbackData, followUpRequired: checked === true})}
                    />
                    <Label htmlFor="followUpRequired">Follow-up required</Label>
                  </div>

                  <div>
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select value={feedbackData.priority} onValueChange={(value) => setFeedbackData({...feedbackData, priority: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low Priority</SelectItem>
                        <SelectItem value="medium">Medium Priority</SelectItem>
                        <SelectItem value="high">High Priority</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="feedbackSignature">Digital Signature</Label>
                    <Input
                      id="feedbackSignature"
                      value={feedbackData.signature}
                      onChange={(e) => setFeedbackData({...feedbackData, signature: e.target.value})}
                      placeholder="Type your full name as signature"
                    />
                  </div>

                  <div>
                    <Label htmlFor="feedbackStamp">Employee ID/Stamp</Label>
                    <Input
                      id="feedbackStamp"
                      value={feedbackData.stamp}
                      onChange={(e) => setFeedbackData({...feedbackData, stamp: e.target.value})}
                      placeholder="Enter employee ID or stamp number"
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      onClick={() => generatePDF('feedback-preview', 'written-feedback.pdf')}
                      disabled={isGenerating}
                      className="flex-1"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {isGenerating ? 'Generating...' : 'Download PDF'}
                    </Button>
                    <Button 
                      onClick={() => sendEmail(feedbackData, 'New Written Feedback Report', 'Written Feedback')}
                      disabled={isSending}
                      variant="outline"
                      className="flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {isSending ? 'Sending...' : 'Send Email'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div id="feedback-preview" className="bg-white p-8 rounded-lg shadow-sm border min-h-[600px]">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">UNCIF</h2>
                      <h3 className="text-xl font-semibold text-gray-700">WRITTEN FEEDBACK REPORT</h3>
                      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <strong>Frontliner Name:</strong>
                          <p className="border-b border-gray-300 pb-1">{feedbackData.frontlinerName || '_________________'}</p>
                        </div>
                        <div>
                          <strong>Meeting Date:</strong>
                          <p className="border-b border-gray-300 pb-1">{feedbackData.meetingDate || '_________________'}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <strong>Representative Name:</strong>
                          <p className="border-b border-gray-300 pb-1">{feedbackData.representativeName || '_________________'}</p>
                        </div>
                        <div>
                          <strong>Meeting Purpose:</strong>
                          <p className="border-b border-gray-300 pb-1">{feedbackData.meetingPurpose || '_________________'}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <strong>Feedback Type:</strong>
                          <Badge variant="outline" className="w-fit">
                            {feedbackData.feedbackType || 'Not specified'}
                          </Badge>
                        </div>
                        <div>
                          <strong>Priority Level:</strong>
                          <Badge 
                            variant={feedbackData.priority === 'urgent' ? 'destructive' : 
                                    feedbackData.priority === 'high' ? 'destructive' : 
                                    feedbackData.priority === 'medium' ? 'default' : 'secondary'}
                            className="w-fit"
                          >
                            {feedbackData.priority || 'Not specified'}
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <strong>Detailed Feedback:</strong>
                        <p className="min-h-[120px] border border-gray-300 p-3 rounded">
                          {feedbackData.detailedFeedback || 'Detailed feedback will be displayed here...'}
                        </p>
                      </div>

                      <div>
                        <strong>Suggestions for Improvement:</strong>
                        <p className="min-h-[80px] border border-gray-300 p-3 rounded">
                          {feedbackData.suggestions || 'Suggestions will be displayed here...'}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <strong>Follow-up Required:</strong>
                        <Badge variant={feedbackData.followUpRequired ? "destructive" : "secondary"}>
                          {feedbackData.followUpRequired ? 'Yes' : 'No'}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-8 mt-12">
                        <div>
                          <strong>Frontliner Signature:</strong>
                          <p className="border-b border-gray-300 pb-1 mt-8">{feedbackData.signature || '_________________'}</p>
                        </div>
                        <div>
                          <strong>Employee ID:</strong>
                          <p className="border-b border-gray-300 pb-1 mt-8">{feedbackData.stamp || '_________________'}</p>
                        </div>
                      </div>

                      <div className="mt-12 text-center text-sm text-gray-500">
                        <p>This is an official feedback report by UNCIF</p>
                        <p>Generated on: {new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LOC;
