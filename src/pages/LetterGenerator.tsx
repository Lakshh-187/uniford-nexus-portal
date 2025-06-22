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
      greeting: `${formData.name || '[Distinguished Name]'}`,
      title: `${formData.title || '[Your Title]'} of ${formData.organization || '[Your Organization]'}`,
      date: currentDate,
    };

    switch (formData.letterType) {
      case 'invitation':
        return {
          ...baseContent,
          mainTitle: `OFFICIAL INVITATION`,
          subtitle: `UNCIF Council of Excellence`,
          message: `We cordially invite you to join our Digital Excellence Program`,
          benefits: [
            '🌐 Professional Website Creation',
            '💡 Expert Technical Guidance', 
            '📋 Official Documentation Services',
            '🏆 Exclusive Membership Benefits',
            '🚀 Advanced Technology Resources'
          ],
          note: formData.customNote || 'Join thousands of innovators transforming their digital presence',
          closing: `We eagerly await your distinguished presence in our community of excellence.`,
        };

      case 'appreciation':
        return {
          ...baseContent,
          mainTitle: `CERTIFICATE OF APPRECIATION`,
          subtitle: `UNCIF Council of Excellence`,
          message: `We express heartfelt appreciation for your outstanding contributions`,
          benefits: [
            '⭐ Leadership in Digital Innovation',
            '🎯 Excellence in Professional Development', 
            '💼 Outstanding Organizational Impact',
            '🌟 Inspiring Community Leadership',
            '🏅 Commitment to Digital Transformation'
          ],
          note: formData.customNote || 'Your achievements inspire others in our community',
          closing: `We honor your exceptional contributions and continued excellence.`,
        };

      case 'congratulation':
        return {
          ...baseContent,
          mainTitle: `CONGRATULATIONS`,
          subtitle: `UNCIF Council of Excellence`,  
          message: `We celebrate your remarkable achievement and outstanding success`,
          benefits: [
            '🎉 Professional Milestone Achievement',
            '💫 Excellence in Leadership',
            '🔥 Outstanding Performance',
            '✨ Successful Digital Implementation', 
            '🎊 Community Impact Recognition'
          ],
          note: formData.customNote || 'Your success motivates our entire community',
          closing: `May this success lead to even greater achievements ahead.`,
        };

      default:
        return {
          ...baseContent,
          mainTitle: `OFFICIAL INVITATION`,
          subtitle: `UNCIF Council of Excellence`,
          message: `We cordially invite you to join our Digital Excellence Program`,
          benefits: [
            '🌐 Professional Website Creation',
            '💡 Expert Technical Guidance', 
            '📋 Official Documentation Services',
            '🏆 Exclusive Membership Benefits',
            '🚀 Advanced Technology Resources'
          ],
          note: formData.customNote || 'Join thousands of innovators transforming their digital presence',
          closing: `We eagerly await your distinguished presence in our community of excellence.`,
        };
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
    const fullContent = `${content.greeting}\n\n${content.mainTitle}\n${content.subtitle}\n\n${content.message}\n\n${content.note}\n\n${content.closing}`;
    
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
        {/* Simplified Header */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex items-center justify-center mb-6">
              <UShapeLogo size={56} />
              <h1 className="text-4xl md:text-5xl font-bold ml-4" style={{ fontFamily: 'serif' }}>
                UNCIF Letter Generator
              </h1>
            </div>
            <p className="text-lg text-amber-100">
              Professional Documentation Made Simple
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Simplified Form */}
            <Card className="border-2 border-amber-400 shadow-2xl bg-gradient-to-br from-amber-50 to-yellow-50">
              <CardHeader className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <Scroll className="w-6 h-6 mr-3" />
                  Letter Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="letterType" className="text-lg font-semibold text-purple-900">Type</Label>
                  <Select value={formData.letterType} onValueChange={(value) => handleInputChange('letterType', value)}>
                    <SelectTrigger className="border-2 border-amber-300 focus:border-purple-500">
                      <SelectValue placeholder="Select letter type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="invitation">Invitation</SelectItem>
                      <SelectItem value="appreciation">Appreciation</SelectItem>
                      <SelectItem value="congratulation">Congratulation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold text-purple-900">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter name"
                      className="border-2 border-amber-300 focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title" className="font-semibold text-purple-900">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="CEO, Founder, etc."
                      className="border-2 border-amber-300 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="font-semibold text-purple-900">Organization</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    placeholder="Organization name"
                    className="border-2 border-amber-300 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customNote" className="font-semibold text-purple-900">Custom Message</Label>
                  <Textarea
                    id="customNote"
                    value={formData.customNote}
                    onChange={(e) => handleInputChange('customNote', e.target.value)}
                    placeholder="Your personalized message..."
                    className="border-2 border-amber-300 focus:border-purple-500 min-h-[80px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Simplified Letter Preview */}
            <Card className="border-2 border-purple-600 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <Scroll className="w-6 h-6 mr-3" />
                  Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-auto max-h-[600px]">
                  <div 
                    ref={letterRef}
                    className="p-8 bg-gradient-to-br from-white to-gray-50"
                    style={{ fontFamily: '"Times New Roman", serif' }}
                  >
                    {/* Scroll-style document */}
                    <div className="border-8 border-double border-purple-700 rounded-lg p-8 bg-gradient-to-br from-purple-50 to-indigo-50 relative">
                      {/* Decorative corners */}
                      <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-amber-500 rounded-tl-lg"></div>
                      <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-amber-500 rounded-tr-lg"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 border-amber-500 rounded-bl-lg"></div>
                      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 border-amber-500 rounded-br-lg"></div>

                      {/* Header */}
                      <div className="text-center mb-8">
                        <UShapeLogo size={48} />
                        <div className="text-3xl font-bold text-purple-900 mt-4 mb-2">UNCIF</div>
                        <div className="text-lg text-purple-700 font-semibold">Uniford National Council of Institutes & Frontliners</div>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto mt-4"></div>
                      </div>

                      {/* Main Title */}
                      <div className="text-center bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg border-4 border-amber-400 mb-8">
                        <h1 className="text-2xl font-bold text-purple-900 mb-2">{content.mainTitle}</h1>
                        <p className="text-lg text-purple-700 italic">{content.subtitle}</p>
                      </div>

                      {/* Greeting */}
                      <div className="text-center mb-6">
                        <h2 className="text-xl font-bold text-purple-900 mb-2">
                          {content.greeting}
                        </h2>
                        <p className="text-lg text-purple-700 italic">
                          {content.title}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="space-y-6 text-justify">
                        <p className="text-lg text-gray-800 leading-relaxed font-medium text-center">
                          {content.message}
                        </p>

                        <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                          <div className="space-y-3">
                            {content.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center text-purple-800">
                                <span className="text-lg font-medium">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <p className="text-lg text-purple-800 font-medium leading-relaxed text-center bg-amber-50 p-4 rounded-lg">
                          {content.note}
                        </p>

                        <p className="text-lg text-purple-900 font-bold text-center">
                          {content.closing}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="mt-12 pt-8 border-t-2 border-purple-300">
                        <div className="flex justify-between items-end">
                          <div className="text-left">
                            <p className="text-sm text-gray-600 mb-4">Date: {content.date}</p>
                            <div className="space-y-2">
                              <div className="text-lg font-bold text-purple-900">
                                UNCIF Official Seal
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <UShapeLogo size={40} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <Card className="mt-8 border-2 border-amber-400 shadow-2xl bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-4 text-purple-900 flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['pdf', 'png', 'jpg'].map((format) => (
                      <Button
                        key={format}
                        onClick={() => handleDownload(format as any)}
                        disabled={isDownloading}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold"
                      >
                        {format.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-4 text-purple-900 flex items-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      onClick={() => handleShare('email')}
                      className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </Button>
                    <Button
                      onClick={() => handleShare('whatsapp')}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={() => handleShare('link')}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold"
                    >
                      <Link className="w-4 h-4 mr-1" />
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
