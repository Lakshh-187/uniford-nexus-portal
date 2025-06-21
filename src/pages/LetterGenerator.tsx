
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar, Download, Share2, Mail, MessageCircle, Link, FileText, Award } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import SEO from '@/components/SEO';

const LetterGenerator = () => {
  const [letterType, setLetterType] = useState<'appreciation' | 'invitation'>('appreciation');
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    date: new Date().toISOString().split('T')[0],
    purpose: '',
    customNote: ''
  });
  const [previewMode, setPreviewMode] = useState<'letter' | 'certificate'>('letter');
  const letterRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateLetterContent = () => {
    if (letterType === 'appreciation') {
      return `Dear ${formData.name || '[Name]'},

On behalf of the Uniford National Council of Institutes & Frontliners (UNCIF), I am delighted to extend our heartfelt appreciation and best wishes to you for your remarkable contributions to ${formData.purpose || '[Purpose/Achievement]'}.

Your dedication and exceptional work in your role as ${formData.title || '[Title]'} at ${formData.organization || '[Organization]'} exemplifies the spirit of excellence that UNCIF proudly supports and recognizes.

The UNCIF Council proudly congratulates initiators for their remarkable contributions. This letter serves as both appreciation and an invitation to join our UNCIF-Backed Mentorship Program. Through this program, members can access technical support, credibility endorsements, networking, and volunteering assistance to scale their impact with confidence.

${formData.customNote ? `\n${formData.customNote}\n` : ''}

We look forward to witnessing your continued success and would be honored to support your future endeavors through our comprehensive mentorship and networking initiatives.

With warm regards and best wishes,

Dr. Rajesh Kumar
Director General
UNCIF - Uniford National Council of Institutes & Frontliners`;
    } else {
      return `Dear ${formData.name || '[Name]'},

Greetings from the Uniford National Council of Institutes & Frontliners (UNCIF)!

We are pleased to extend a cordial invitation to you to join our prestigious UNCIF Mentorship Program, recognizing your outstanding work as ${formData.title || '[Title]'} at ${formData.organization || '[Organization]'}.

Your exceptional contributions to ${formData.purpose || '[Field/Industry]'} have come to our attention, and we believe your expertise would be invaluable to our growing community of innovators and thought leaders.

The UNCIF Council proudly congratulates initiators for their remarkable contributions. This letter serves as both appreciation and an invitation to join our UNCIF-Backed Mentorship Program. Through this program, members can access technical support, credibility endorsements, networking, and volunteering assistance to scale their impact with confidence.

Program Benefits Include:
• Technical Support & Guidance
• Credibility Endorsements
• Professional Networking Opportunities
• Volunteering & Community Impact Initiatives
• Access to Exclusive Resources & Events

${formData.customNote ? `\n${formData.customNote}\n` : ''}

We would be honored to have you as part of our distinguished community. Please feel free to reach out to discuss this opportunity further.

Warm regards,

Dr. Rajesh Kumar
Director General
UNCIF - Uniford National Council of Institutes & Frontliners`;
    }
  };

  const handleDownload = (format: 'pdf' | 'png' | 'jpg' | 'docx') => {
    // Implementation would use libraries like jspdf, html-to-image, etc.
    console.log(`Downloading as ${format.toUpperCase()}`);
    // For demo purposes, we'll show an alert
    alert(`Download functionality for ${format.toUpperCase()} will be implemented with appropriate libraries.`);
  };

  const handleShare = (method: 'email' | 'whatsapp' | 'link') => {
    const letterContent = generateLetterContent();
    
    switch (method) {
      case 'email':
        const emailSubject = `UNCIF ${letterType === 'appreciation' ? 'Appreciation' : 'Invitation'} Letter`;
        window.open(`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(letterContent)}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(letterContent)}`);
        break;
      case 'link':
        navigator.clipboard.writeText(letterContent);
        alert('Letter content copied to clipboard!');
        break;
    }
  };

  return (
    <>
      <SEO 
        title="Letter Generator - Appreciation & Invitation Letters"
        description="Generate professional appreciation and invitation letters with UNCIF's modern letter generator. Create, customize, and download formal letters with royal aesthetics and professional formatting."
        keywords="UNCIF letter generator, appreciation letter, invitation letter, professional templates, Uniford National Council, formal letters, certificate generator"
        canonical="/letter-generator"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Letter Generator</h1>
                <p className="text-xl text-purple-200">Appreciation & Invitation Letters</p>
              </div>
            </div>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              Create professional, royal-styled letters with UNCIF's modern letter generator. 
              Perfect for appreciation letters and mentorship program invitations.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <Card className="h-fit border-2 border-purple-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                <CardTitle className="text-2xl text-purple-900">Letter Configuration</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {/* Letter Type Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-gray-800">Letter Type</Label>
                  <RadioGroup value={letterType} onValueChange={(value) => setLetterType(value as 'appreciation' | 'invitation')}>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                      <RadioGroupItem value="appreciation" id="appreciation" />
                      <Label htmlFor="appreciation" className="flex items-center cursor-pointer">
                        <Award className="w-5 h-5 mr-2 text-amber-600" />
                        Letter of Appreciation & Best Wishes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                      <RadioGroupItem value="invitation" id="invitation" />
                      <Label htmlFor="invitation" className="flex items-center cursor-pointer">
                        <Mail className="w-5 h-5 mr-2 text-purple-600" />
                        Invitation to UNCIF Mentorship Program
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Recipient Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter full name"
                      className="border-purple-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title/Designation</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="e.g., CEO, Director, Professor"
                      className="border-purple-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Institute/Organization</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    placeholder="Enter organization name"
                    className="border-purple-200"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <div className="relative">
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="border-purple-200"
                      />
                      <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="purpose">
                      {letterType === 'appreciation' ? 'Achievement/Purpose' : 'Field/Industry'}
                    </Label>
                    <Input
                      id="purpose"
                      value={formData.purpose}
                      onChange={(e) => handleInputChange('purpose', e.target.value)}
                      placeholder={letterType === 'appreciation' ? 'What are you appreciating?' : 'Area of expertise'}
                      className="border-purple-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customNote">Custom Note (Optional)</Label>
                  <Textarea
                    id="customNote"
                    value={formData.customNote}
                    onChange={(e) => handleInputChange('customNote', e.target.value)}
                    placeholder="Add any additional message or note..."
                    className="border-purple-200 min-h-[100px]"
                  />
                </div>

                {/* Preview Mode Toggle */}
                <div className="flex items-center space-x-4 pt-4 border-t">
                  <Label className="font-semibold">Preview Style:</Label>
                  <RadioGroup 
                    value={previewMode} 
                    onValueChange={(value) => setPreviewMode(value as 'letter' | 'certificate')}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="letter" id="letter-mode" />
                      <Label htmlFor="letter-mode">Letter Format</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="certificate" id="certificate-mode" />
                      <Label htmlFor="certificate-mode">Certificate Style</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Preview Section */}
            <Card className="border-2 border-purple-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                <CardTitle className="text-2xl text-amber-900 flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div 
                  ref={letterRef}
                  className={`min-h-[600px] bg-white relative overflow-hidden ${
                    previewMode === 'certificate' ? 'border-8 border-double border-amber-600' : ''
                  }`}
                  style={{
                    fontFamily: '"Lora", "Garamond", serif',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Ctext x="50%" y="50%" font-size="24" fill="rgba(147,51,234,0.05)" text-anchor="middle" dominant-baseline="middle"%3EUNCIF%3C/text%3E%3C/svg%3E")',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px 200px'
                  }}
                >
                  {/* Letter Header */}
                  <div className="text-center p-8 border-b-2 border-purple-900">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">U</span>
                    </div>
                    <h1 className="text-2xl font-bold text-purple-900 mb-2">
                      UNIFORD NATIONAL COUNCIL
                    </h1>
                    <h2 className="text-lg text-purple-700 mb-1">
                      OF INSTITUTES & FRONTLINERS
                    </h2>
                    <p className="text-sm text-gray-600">(UNCIF)</p>
                  </div>

                  {/* Letter Content */}
                  <div className="p-8">
                    <div className="text-right mb-6">
                      <p className="text-gray-600">Date: {new Date(formData.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <pre className="whitespace-pre-wrap font-serif text-gray-800 leading-7">
                        {generateLetterContent()}
                      </pre>
                    </div>

                    {/* Signature Section */}
                    <div className="mt-12 pt-8 border-t border-gray-300">
                      <div className="text-center">
                        <div className="w-32 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded mx-auto mb-2 flex items-center justify-center">
                          <span className="text-purple-600 font-cursive text-lg">Signature</span>
                        </div>
                        <p className="font-semibold text-gray-800">Dr. Rajesh Kumar</p>
                        <p className="text-gray-600">Director General</p>
                        <p className="text-gray-600">UNCIF - Uniford National Council</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <Card className="mt-8 border-2 border-purple-200 shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Download Options */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Options
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['pdf', 'png', 'jpg', 'docx'].map((format) => (
                      <Button
                        key={format}
                        onClick={() => handleDownload(format as any)}
                        variant="outline"
                        className="border-purple-200 hover:bg-purple-50"
                      >
                        {format.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Share Options */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share Options
                  </h3>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleShare('email')}
                      variant="outline"
                      className="border-purple-200 hover:bg-purple-50 flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button
                      onClick={() => handleShare('whatsapp')}
                      variant="outline"
                      className="border-purple-200 hover:bg-purple-50 flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={() => handleShare('link')}
                      variant="outline"
                      className="border-purple-200 hover:bg-purple-50 flex-1"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
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

export default LetterGenerator;
