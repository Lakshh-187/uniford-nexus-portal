
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Download, Share2, Mail, MessageCircle, Link, Scroll, Crown, Star } from 'lucide-react';
import SEO from '@/components/SEO';

const LetterGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    techChallenges: '',
    customNote: ''
  });
  const letterRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateInvitationContent = () => {
    const currentDate = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    return {
      greeting: `Hearken, Noble ${formData.name || '[Esteemed Name]'}`,
      title: `${formData.title || '[Your Title]'} of ${formData.organization || '[Your Realm]'}`,
      invitation: `By Royal Decree of the UNCIF Council`,
      message: `Thy presence is humbly requested to join our Sacred Order of Digital Artisans, for we have witnessed thy noble endeavors and seek to bestow upon thee the ancient wisdom of technological mastery.`,
      purpose: `Our Royal Academy stands ready to grant thee:`,
      benefits: [
        'Digital Presence Creation (Websites & Portals)',
        'Technical Guidance & Support',
        'Royal Documentation Services',
        'Membership in Our Distinguished Order'
      ],
      mission: `For we know that 68% of noble initiators & founders lack digital footprint due to financial constraints or lack of awareness. Our Sacred Mission is to serve thee with unwavering dedication.`,
      customMessage: formData.customNote || 'Share thy technological challenges, and our wise council shall provide thee with solutions befitting thy noble status.',
      closing: `Let thy voice be heard, that we may craft solutions worthy of thy greatness.`,
      date: currentDate,
      signature: 'By the Grace of Innovation'
    };
  };

  const handleDownload = (format: 'pdf' | 'png' | 'jpg') => {
    console.log(`Downloading royal invitation as ${format.toUpperCase()}`);
    alert(`Royal invitation will be prepared in ${format.toUpperCase()} format for thee.`);
  };

  const handleShare = (method: 'email' | 'whatsapp' | 'link') => {
    const content = generateInvitationContent();
    const fullContent = `${content.greeting}\n\n${content.invitation}\n\n${content.message}\n\n${content.mission}\n\n${content.customMessage}\n\n${content.closing}\n\n${content.signature}`;
    
    switch (method) {
      case 'email':
        window.open(`mailto:?subject=Royal Invitation from UNCIF&body=${encodeURIComponent(fullContent)}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(fullContent)}`);
        break;
      case 'link':
        navigator.clipboard.writeText(fullContent);
        alert('Royal invitation has been copied to thy clipboard!');
        break;
    }
  };

  const content = generateInvitationContent();

  return (
    <>
      <SEO 
        title="Royal Invitation Generator - UNCIF Tech Support"
        description="Create royal-style invitation letters for UNCIF's tech support program. Join our sacred order of digital artisans and receive technical guidance for your digital presence."
        keywords="UNCIF royal invitation, tech support invitation, digital presence, website creation, technical support, royal decree"
        canonical="/letter-generator"
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        {/* Majestic Header */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex items-center justify-center mb-8">
              <Crown className="w-16 h-16 text-yellow-200 mr-4" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'serif' }}>
                  Royal Invitation Generator
                </h1>
                <p className="text-2xl text-amber-100 font-medium">
                  Sacred Decree for Tech Support
                </p>
              </div>
              <Crown className="w-16 h-16 text-yellow-200 ml-4" />
            </div>
            <p className="text-lg text-amber-50 max-w-4xl mx-auto leading-relaxed">
              Join our noble quest to empower 68% of initiators & founders who lack digital presence. 
              Let UNCIF bestow upon thee the gift of technological mastery.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Royal Form */}
            <Card className="border-4 border-amber-400 shadow-2xl bg-gradient-to-br from-amber-50 to-yellow-50">
              <CardHeader className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Scroll className="w-8 h-8 mr-3" />
                  Royal Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-semibold text-purple-900">Noble Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter thy distinguished name"
                    className="border-2 border-amber-300 focus:border-purple-500 text-lg p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-lg font-semibold text-purple-900">Royal Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g., Founder, CEO, Director"
                    className="border-2 border-amber-300 focus:border-purple-500 text-lg p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-lg font-semibold text-purple-900">Your Kingdom/Organization</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    placeholder="Enter thy realm's name"
                    className="border-2 border-amber-300 focus:border-purple-500 text-lg p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="techChallenges" className="text-lg font-semibold text-purple-900">Thy Tech Challenges</Label>
                  <Textarea
                    id="techChallenges"
                    value={formData.techChallenges}
                    onChange={(e) => handleInputChange('techChallenges', e.target.value)}
                    placeholder="Describe thy digital needs (website, portal, technical support...)"
                    className="border-2 border-amber-300 focus:border-purple-500 min-h-[100px] text-lg p-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customNote" className="text-lg font-semibold text-purple-900">Additional Royal Message</Label>
                  <Textarea
                    id="customNote"
                    value={formData.customNote}
                    onChange={(e) => handleInputChange('customNote', e.target.value)}
                    placeholder="Any special message for thy royal invitation..."
                    className="border-2 border-amber-300 focus:border-purple-500 min-h-[100px] text-lg p-4"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Royal Scroll Preview */}
            <Card className="border-4 border-purple-600 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Scroll className="w-8 h-8 mr-3" />
                  Royal Invitation Scroll
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div 
                  ref={letterRef}
                  className="min-h-[700px] relative"
                  style={{
                    background: 'linear-gradient(45deg, #f8f4e6 0%, #f0f0f0 50%, #f8f4e6 100%)',
                    fontFamily: '"Times New Roman", "Book Antiqua", serif'
                  }}
                >
                  {/* Decorative Border */}
                  <div className="absolute inset-4 border-8 border-double border-purple-600 rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50">
                    {/* Corner Decorations */}
                    <div className="absolute top-2 left-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-purple-800" />
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-purple-800" />
                    </div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-purple-800" />
                    </div>
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-purple-800" />
                    </div>

                    {/* Royal Content */}
                    <div className="p-8 space-y-6">
                      {/* Header Crown */}
                      <div className="text-center">
                        <Crown className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                        <div className="text-3xl font-bold text-purple-900 mb-2">UNCIF</div>
                        <div className="text-lg text-purple-700 font-semibold">Uniford National Council of Institutes & Frontliners</div>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-amber-500 mx-auto mt-4"></div>
                      </div>

                      {/* Royal Greeting */}
                      <div className="text-center">
                        <h2 className="text-2xl font-bold text-purple-900 mb-3" style={{ fontFamily: 'serif' }}>
                          {content.greeting}
                        </h2>
                        <p className="text-lg text-purple-700 font-medium italic">
                          {content.title}
                        </p>
                      </div>

                      {/* Royal Decree */}
                      <div className="text-center bg-gradient-to-r from-amber-100 to-yellow-100 p-4 rounded-lg border-2 border-amber-400">
                        <p className="text-xl font-bold text-purple-900">
                          {content.invitation}
                        </p>
                      </div>

                      {/* Main Message */}
                      <div className="space-y-4 text-center">
                        <p className="text-lg text-gray-800 leading-relaxed font-medium">
                          {content.message}
                        </p>

                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                          <p className="text-lg font-semibold text-purple-900 mb-3">{content.purpose}</p>
                          <ul className="space-y-2 text-left">
                            {content.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center text-purple-800">
                                <Star className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                                <span className="font-medium">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p className="text-base text-gray-700 italic leading-relaxed">
                          {content.mission}
                        </p>

                        <p className="text-lg text-purple-800 font-medium">
                          {content.customMessage}
                        </p>

                        <p className="text-lg text-purple-900 font-semibold">
                          {content.closing}
                        </p>
                      </div>

                      {/* Royal Signature */}
                      <div className="text-center pt-6 border-t border-purple-300">
                        <p className="text-sm text-gray-600 mb-2">On this {content.date}</p>
                        <div className="text-lg font-bold text-purple-900">
                          {content.signature}
                        </div>
                        <div className="text-base text-purple-700">
                          UNCIF Royal Council
                        </div>
                        <Crown className="w-8 h-8 text-amber-600 mx-auto mt-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Royal Action Buttons */}
          <Card className="mt-12 border-4 border-amber-400 shadow-2xl bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-6 text-purple-900 flex items-center">
                    <Download className="w-6 h-6 mr-3" />
                    Download Royal Scroll
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {['pdf', 'png', 'jpg'].map((format) => (
                      <Button
                        key={format}
                        onClick={() => handleDownload(format as any)}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3"
                      >
                        {format.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-6 text-purple-900 flex items-center">
                    <Share2 className="w-6 h-6 mr-3" />
                    Share Royal Decree
                  </h3>
                  <div className="flex gap-4">
                    <Button
                      onClick={() => handleShare('email')}
                      className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button
                      onClick={() => handleShare('whatsapp')}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={() => handleShare('link')}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold flex-1"
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
