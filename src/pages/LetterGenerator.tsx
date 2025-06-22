
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Share2, Mail, MessageCircle, Link, Scroll, Star, Shield, Award } from 'lucide-react';
import SEO from '@/components/SEO';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const LetterGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    techChallenges: '',
    customNote: '',
    letterType: 'invitation'
  });
  const [isDownloading, setIsDownloading] = useState(false);
  const letterRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateLetterContent = () => {
    const currentDate = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const baseContent = {
      greeting: `Most Esteemed ${formData.name || '[Distinguished Name]'}`,
      title: `${formData.title || '[Your Title]'} of ${formData.organization || '[Your Noble Organization]'}`,
      date: currentDate,
      signature: 'By Official Decree and Sacred Oath',
      council: 'The UNCIF Council of Digital Excellence'
    };

    switch (formData.letterType) {
      case 'invitation':
        return {
          ...baseContent,
          mainTitle: `OFFICIAL INVITATION`,
          subtitle: `By the Authority of UNCIF Council of Excellence`,
          message: `We, the UNCIF (Uniford National Council of Institutes & Frontliners), hereby extend this Distinguished Invitation to join our Order of Digital Artisans and Innovation Leaders.`,
          purpose: `Your Excellency has been selected to receive our Academy's comprehensive support services:`,
          benefits: [
            'Complete Digital Presence Creation (Professional Websites & Advanced Portals)',
            'Expert Technical Guidance & Continuous Support Services',
            'Official Documentation & Legal Services for Your Organization',
            'Exclusive Membership in Our Distinguished Order of Digital Excellence',
            'Access to Advanced Technology Resources & Innovation Networks',
            'Priority Support for All Digital Infrastructure Needs'
          ],
          mission: `Our Mission addresses the critical need whereby 68% of initiators and founders lack proper digital presence due to financial constraints or insufficient technical awareness. We stand committed to serving distinguished leaders like yourself with unwavering dedication and excellence.`,
          techSupport: formData.techChallenges ? 
            `We acknowledge your specific technological requirements: "${formData.techChallenges}". Our expert council shall provide tailored solutions befitting your distinguished status and organizational needs.` :
            'We invite you to share your technological challenges and requirements, so our wise council may craft bespoke solutions worthy of your esteemed organization.',
          customMessage: formData.customNote || 'This invitation represents our commitment to excellence and our desire to support visionary leaders in achieving their digital transformation goals.',
          closing: `Let your distinguished voice be heard, that we may forge solutions worthy of your greatness and contribute to the advancement of digital excellence in your domain.`,
          callToAction: `To accept this Official Invitation and begin your journey with UNCIF, please contact our Council through the channels provided below. We eagerly await the honor of serving your distinguished organization.`
        };

      case 'appreciation':
        return {
          ...baseContent,
          mainTitle: `CERTIFICATE OF APPRECIATION`,
          subtitle: `By the Authority of UNCIF Council of Excellence`,
          message: `We, the UNCIF (Uniford National Council of Institutes & Frontliners), hereby express our heartfelt appreciation and recognition for your outstanding contributions to digital excellence and innovation.`,
          purpose: `Your exceptional dedication and achievements have been recognized in the following areas:`,
          benefits: [
            'Leadership in Digital Innovation and Technology Advancement',
            'Outstanding Contribution to Organizational Excellence',
            'Exemplary Service in Professional Development',
            'Commitment to Excellence in Digital Transformation',
            'Inspiring Leadership and Mentorship in Your Field',
            'Significant Impact on Community and Professional Growth'
          ],
          mission: `Your remarkable achievements align perfectly with UNCIF's mission to empower leaders and organizations in their digital transformation journey. Your contributions serve as an inspiration to others in our community.`,
          techSupport: formData.techChallenges ? 
            `We particularly acknowledge your expertise in: "${formData.techChallenges}". Your knowledge and experience in these areas have been invaluable to our community.` :
            'Your diverse expertise and professional excellence have contributed significantly to the advancement of digital innovation.',
          customMessage: formData.customNote || 'This certificate represents our sincere gratitude for your exceptional contributions and our appreciation for your continued partnership with UNCIF.',
          closing: `We are honored to recognize your achievements and look forward to your continued excellence and leadership in the digital innovation space.`,
          callToAction: `We encourage you to continue your exceptional work and remain an active member of our distinguished community. Your leadership and expertise are truly valued and appreciated.`
        };

      case 'congratulation':
        return {
          ...baseContent,
          mainTitle: `OFFICIAL CONGRATULATIONS`,
          subtitle: `By the Authority of UNCIF Council of Excellence`,
          message: `We, the UNCIF (Uniford National Council of Institutes & Frontliners), extend our warmest congratulations on your remarkable achievement and outstanding success.`,
          purpose: `We celebrate your exceptional accomplishment and recognize your excellence in:`,
          benefits: [
            'Achievement of Significant Professional Milestone',
            'Demonstration of Excellence in Leadership and Innovation',
            'Outstanding Performance in Your Field of Expertise',
            'Successful Implementation of Digital Solutions',
            'Recognition for Professional Growth and Development',
            'Contribution to Organizational and Community Success'
          ],
          mission: `Your success story exemplifies the values and mission of UNCIF - empowering leaders to achieve excellence through digital innovation and professional development. Your achievement serves as motivation for others in our community.`,
          techSupport: formData.techChallenges ? 
            `We are particularly impressed by your success in: "${formData.techChallenges}". Your achievement in this area demonstrates exceptional skill and dedication.` :
            'Your success across multiple areas of expertise showcases your versatility and commitment to excellence.',
          customMessage: formData.customNote || 'This congratulatory message represents our joy in celebrating your success and our pride in having you as part of the UNCIF community.',
          closing: `We wish you continued success in all your future endeavors and look forward to celebrating many more of your achievements.`,
          callToAction: `May this success be the beginning of even greater achievements. We are excited to support you in your continued journey of excellence and innovation.`
        };

      default:
        return baseContent;
    }
  };

  const handleDownload = async (format: 'pdf' | 'png' | 'jpg') => {
    if (!letterRef.current) return;
    
    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(letterRef.current, {
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
        pdf.save(`UNCIF_${formData.letterType}_${formData.name || 'Document'}.pdf`);
      } else {
        const link = document.createElement('a');
        link.download = `UNCIF_${formData.letterType}_${formData.name || 'Document'}.${format}`;
        link.href = canvas.toDataURL(`image/${format}`, 1.0);
        link.click();
      }
      
      console.log(`Letter downloaded successfully as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = (method: 'email' | 'whatsapp' | 'link') => {
    const content = generateLetterContent();
    const fullContent = `${content.greeting}\n\n${content.mainTitle}\n${content.subtitle}\n\n${content.message}\n\n${content.mission}\n\n${content.techSupport}\n\n${content.customMessage}\n\n${content.closing}\n\n${content.callToAction}\n\n${content.signature}\n${content.council}`;
    
    switch (method) {
      case 'email':
        window.open(`mailto:?subject=Official Letter from UNCIF&body=${encodeURIComponent(fullContent)}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(fullContent)}`);
        break;
      case 'link':
        navigator.clipboard.writeText(fullContent);
        alert('Letter has been copied to your clipboard!');
        break;
    }
  };

  const content = generateLetterContent();

  // U-shaped logo component
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

  return (
    <>
      <SEO 
        title="Letter Generator - UNCIF Tech Support"
        description="Create professional invitation, appreciation, and congratulation letters for UNCIF's comprehensive tech support program."
        keywords="UNCIF letter generator, tech support letters, digital presence, website creation, technical support"
        canonical="/letter-generator"
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-white py-8 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-8">
              <UShapeLogo size={64} />
              <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4" style={{ fontFamily: 'serif' }}>
                  UNCIF Letter Generator
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-amber-100 font-medium">
                  Official Documentation for Tech Support Excellence
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-amber-50 max-w-4xl mx-auto leading-relaxed px-4">
              Generate professional letters for invitations, appreciation, and congratulations with UNCIF's comprehensive digital solutions.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Form */}
            <Card className="border-2 sm:border-4 border-amber-400 shadow-2xl bg-gradient-to-br from-amber-50 to-yellow-50 order-2 lg:order-1">
              <CardHeader className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white rounded-t-lg p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl flex items-center">
                  <Scroll className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                  Letter Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-8 space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="letterType" className="text-base sm:text-lg font-semibold text-purple-900">Letter Type</Label>
                  <Select value={formData.letterType} onValueChange={(value) => handleInputChange('letterType', value)}>
                    <SelectTrigger className="border-2 border-amber-300 focus:border-purple-500 text-base sm:text-lg p-3 sm:p-4">
                      <SelectValue placeholder="Select letter type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="invitation">Invitation Letter</SelectItem>
                      <SelectItem value="appreciation">Appreciation Certificate</SelectItem>
                      <SelectItem value="congratulation">Congratulation Letter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base sm:text-lg font-semibold text-purple-900">Distinguished Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter name"
                    className="border-2 border-amber-300 focus:border-purple-500 text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base sm:text-lg font-semibold text-purple-900">Professional Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g., Founder, CEO, Director, President"
                    className="border-2 border-amber-300 focus:border-purple-500 text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-base sm:text-lg font-semibold text-purple-900">Organization/Company</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    placeholder="Enter organization name"
                    className="border-2 border-amber-300 focus:border-purple-500 text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="techChallenges" className="text-base sm:text-lg font-semibold text-purple-900">Technology Requirements/Achievements</Label>
                  <Textarea
                    id="techChallenges"
                    value={formData.techChallenges}
                    onChange={(e) => handleInputChange('techChallenges', e.target.value)}
                    placeholder="Describe relevant technical details, achievements, or requirements..."
                    className="border-2 border-amber-300 focus:border-purple-500 min-h-[80px] sm:min-h-[100px] text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customNote" className="text-base sm:text-lg font-semibold text-purple-900">Additional Message</Label>
                  <Textarea
                    id="customNote"
                    value={formData.customNote}
                    onChange={(e) => handleInputChange('customNote', e.target.value)}
                    placeholder="Any special message or requirements..."
                    className="border-2 border-amber-300 focus:border-purple-500 min-h-[80px] sm:min-h-[100px] text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Letter Preview */}
            <Card className="border-2 sm:border-4 border-purple-600 shadow-2xl order-1 lg:order-2">
              <CardHeader className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-t-lg p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl flex items-center">
                  <Scroll className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                  Letter Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-auto max-h-[600px] sm:max-h-[800px]">
                  <div 
                    ref={letterRef}
                    className="p-8 bg-gradient-to-br from-white to-gray-50"
                    style={{
                      fontFamily: '"Times New Roman", "Book Antiqua", serif',
                      minHeight: '800px'
                    }}
                  >
                    {/* Document Content */}
                    <div className="border-4 border-double border-purple-700 rounded-lg p-8 bg-gradient-to-br from-purple-50 to-indigo-50">
                      {/* Decorative Elements */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                          <Star className="w-6 h-6 text-purple-800" />
                        </div>
                        <UShapeLogo size={48} />
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                          <Award className="w-6 h-6 text-purple-800" />
                        </div>
                      </div>

                      {/* Header */}
                      <div className="text-center mb-8">
                        <div className="text-4xl font-bold text-purple-900 mb-3">UNCIF</div>
                        <div className="text-xl text-purple-700 font-semibold mb-2">Uniford National Council of Institutes & Frontliners</div>
                        <div className="text-lg text-purple-600 italic">Academy of Digital Excellence</div>
                        <div className="w-40 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto mt-6"></div>
                      </div>

                      {/* Main Title */}
                      <div className="text-center bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg border-4 border-amber-400 shadow-lg mb-8">
                        <h1 className="text-3xl font-bold text-purple-900 mb-2">{content.mainTitle}</h1>
                        <p className="text-xl text-purple-700 font-semibold italic">{content.subtitle}</p>
                      </div>

                      {/* Greeting */}
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-purple-900 mb-3">
                          {content.greeting}
                        </h2>
                        <p className="text-xl text-purple-700 font-medium italic">
                          {content.title}
                        </p>
                      </div>

                      {/* Main Content */}
                      <div className="space-y-6 text-justify">
                        <p className="text-lg text-gray-800 leading-relaxed font-medium first-letter:text-4xl first-letter:font-bold first-letter:text-purple-900 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                          {content.message}
                        </p>

                        <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200 shadow-inner">
                          <p className="text-xl font-bold text-purple-900 mb-4 text-center">{content.purpose}</p>
                          <ul className="space-y-3">
                            {content.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start text-purple-800">
                                <Star className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="font-medium text-base leading-relaxed">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p className="text-base text-gray-700 leading-relaxed font-medium bg-amber-50 p-4 rounded-lg border border-amber-200">
                          {content.mission}
                        </p>

                        <p className="text-lg text-purple-800 font-medium leading-relaxed">
                          {content.techSupport}
                        </p>

                        <p className="text-lg text-purple-800 font-medium leading-relaxed bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                          {content.customMessage}
                        </p>

                        <p className="text-lg text-purple-900 font-semibold leading-relaxed">
                          {content.closing}
                        </p>

                        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg border-2 border-purple-300">
                          <p className="text-lg text-purple-900 font-bold leading-relaxed">
                            {content.callToAction}
                          </p>
                        </div>
                      </div>

                      {/* Footer with Signature and Stamp Space */}
                      <div className="mt-12 pt-8 border-t-2 border-purple-300">
                        <div className="flex justify-between items-end">
                          <div className="text-left">
                            <p className="text-sm text-gray-600 mb-4">Sealed on this {content.date}</p>
                            <div className="space-y-2">
                              <div className="text-xl font-bold text-purple-900">
                                {content.signature}
                              </div>
                              <div className="text-lg font-semibold text-purple-700">
                                {content.council}
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg p-4 w-32 h-20 flex items-center justify-center mb-4">
                              <span className="text-sm text-gray-500 text-center">Official Stamp</span>
                            </div>
                            <div className="bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg p-4 w-40 h-16 flex items-center justify-center">
                              <span className="text-sm text-gray-500 text-center">Authorized Signature</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center mt-6">
                          <UShapeLogo size={48} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <Card className="mt-6 sm:mt-12 border-2 sm:border-4 border-amber-400 shadow-2xl bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardContent className="p-4 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-purple-900 flex items-center">
                    <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    Download Letter
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {['pdf', 'png', 'jpg'].map((format) => (
                      <Button
                        key={format}
                        onClick={() => handleDownload(format as any)}
                        disabled={isDownloading}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 text-sm sm:text-base disabled:opacity-50"
                      >
                        {isDownloading ? 'Processing...' : format.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-purple-900 flex items-center">
                    <Share2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    Share Letter
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <Button
                      onClick={() => handleShare('email')}
                      className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold py-3 sm:py-4 text-sm sm:text-base"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button
                      onClick={() => handleShare('whatsapp')}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 sm:py-4 text-sm sm:text-base"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={() => handleShare('link')}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 sm:py-4 text-sm sm:text-base"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      Copy Text
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
