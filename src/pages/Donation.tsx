
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { 
  Heart, 
  Users, 
  FileText, 
  CreditCard, 
  Star, 
  CheckCircle, 
  Monitor,
  Crown,
  Award,
  Zap,
  Shield,
  Target
} from 'lucide-react';
import SEO from '@/components/SEO';

const Donation = () => {
  const [donationType, setDonationType] = useState<'support' | 'membership' | 'application' | 'document'>('support');
  const [amount, setAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  // Predefined amounts for different donation types
  const donationAmounts = {
    support: [500, 1000, 2500, 5000, 10000],
    membership: [1500, 3000, 5000],
    application: [200, 500, 1000],
    document: [100, 250, 500]
  };

  const donationTypes = [
    {
      id: 'support',
      title: 'Tech Support Donation',
      description: 'Support UNCIF in providing free technical assistance to initiators and founders',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Free website creation for beneficiaries', 'Technical consultation services', 'Digital presence building', '24/7 support hotline']
    },
    {
      id: 'membership',
      title: 'UNCIF Membership Fee',
      description: 'Join our prestigious community of innovators and thought leaders',
      icon: Crown,
      color: 'from-purple-500 to-indigo-500',
      benefits: ['Exclusive networking events', 'Priority technical support', 'Certification programs', 'Mentorship opportunities']
    },
    {
      id: 'application',
      title: 'Application Processing Fee',
      description: 'Cover administrative costs for program applications and reviews',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      benefits: ['Fast-track application processing', 'Dedicated application support', 'Status tracking', 'Priority review']
    },
    {
      id: 'document',
      title: 'Document & Certificate Fee',
      description: 'Obtain official UNCIF certificates and documentation',
      icon: Award,
      color: 'from-amber-500 to-orange-500',
      benefits: ['Official UNCIF certificates', 'Digital badge credentials', 'LinkedIn endorsements', 'Professional recognition']
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setDonorInfo(prev => ({ ...prev, [field]: value }));
  };

  const getCurrentType = () => donationTypes.find(type => type.id === donationType);

  const handleDonate = () => {
    const finalAmount = customAmount || amount;
    if (!finalAmount || !donorInfo.name || !donorInfo.email) {
      alert('Please fill in all required fields');
      return;
    }
    
    console.log('Processing donation:', {
      type: donationType,
      amount: finalAmount,
      donor: donorInfo
    });
    
    alert(`Thank you ${donorInfo.name}! Your donation of ₹${finalAmount} for ${getCurrentType()?.title} is being processed. You will receive a confirmation email shortly.`);
  };

  const currentType = getCurrentType();
  const currentAmounts = donationAmounts[donationType as keyof typeof donationAmounts];

  return (
    <>
      <SEO 
        title="Donation Portal - Support UNCIF's Mission"
        description="Support UNCIF's mission to empower initiators and founders with free technical assistance. Donate for tech support, become a member, or pay for services."
        keywords="UNCIF donation, tech support funding, membership fee, application fee, document fee, support initiators, founders assistance"
        canonical="/donation"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-20 h-20 text-pink-300 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empower Innovation Together
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Join our mission to support 68% of initiators & founders who lack digital presence. 
              Your contribution creates lasting impact in the tech community.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-8 text-blue-200">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                <span>500+ Beneficiaries Supported</span>
              </div>
              <div className="flex items-center">
                <Target className="w-6 h-6 mr-2" />
                <span>₹10L+ in Tech Support Provided</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Donation Type Selection */}
          <Card className="mb-12 border-2 border-blue-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="text-3xl text-center text-gray-800">Choose Your Support Type</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <RadioGroup value={donationType} onValueChange={setDonationType}>
                <div className="grid md:grid-cols-2 gap-6">
                  {donationTypes.map((type) => (
                    <div key={type.id} className="relative">
                      <RadioGroupItem value={type.id} id={type.id} className="sr-only" />
                      <Label
                        htmlFor={type.id}
                        className={`block p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          donationType === type.id
                            ? 'border-blue-500 bg-gradient-to-r ' + type.color + ' text-white shadow-lg transform scale-105'
                            : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${donationType === type.id ? 'bg-white/20' : 'bg-blue-100'}`}>
                            <type.icon className={`w-8 h-8 ${donationType === type.id ? 'text-white' : 'text-blue-600'}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                            <p className={`text-sm mb-4 ${donationType === type.id ? 'text-blue-100' : 'text-gray-600'}`}>
                              {type.description}
                            </p>
                            <div className="space-y-2">
                              {type.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center text-sm">
                                  <CheckCircle className={`w-4 h-4 mr-2 ${donationType === type.id ? 'text-green-300' : 'text-green-500'}`} />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Amount Selection */}
            <Card className="border-2 border-purple-200 shadow-xl">
              <CardHeader className={`bg-gradient-to-r ${currentType?.color} text-white`}>
                <CardTitle className="text-2xl flex items-center">
                  {currentType && <currentType.icon className="w-8 h-8 mr-3" />}
                  {currentType?.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <Label className="text-lg font-semibold text-gray-800 mb-4 block">
                    Select Amount (₹)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {currentAmounts.map((amt) => (
                      <Button
                        key={amt}
                        onClick={() => {
                          setAmount(amt.toString());
                          setCustomAmount('');
                        }}
                        variant={amount === amt.toString() ? "default" : "outline"}
                        className={`h-12 text-lg font-semibold ${
                          amount === amt.toString() 
                            ? `bg-gradient-to-r ${currentType?.color} text-white` 
                            : 'border-2 hover:border-blue-400'
                        }`}
                      >
                        ₹{amt.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">Custom Amount</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount('');
                      }}
                      placeholder="Enter custom amount"
                      className="border-2 border-gray-300 focus:border-blue-500 text-lg p-4"
                    />
                  </div>
                </div>

                {/* Impact Display */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Your Impact
                  </h4>
                  <div className="text-sm text-green-700 space-y-2">
                    {donationType === 'support' && (
                      <>
                        <p>• ₹500 = Technical consultation for 1 startup</p>
                        <p>• ₹2500 = Complete website for 1 founder</p>
                        <p>• ₹5000 = Digital presence package for 2 initiators</p>
                      </>
                    )}
                    {donationType === 'membership' && (
                      <>
                        <p>• Access to exclusive UNCIF community</p>
                        <p>• Priority support for all your projects</p>
                        <p>• Networking with 500+ innovators</p>
                      </>
                    )}
                    {donationType === 'application' && (
                      <>
                        <p>• Fast-track processing within 24 hours</p>
                        <p>• Dedicated application manager</p>
                        <p>• Real-time status updates</p>
                      </>
                    )}
                    {donationType === 'document' && (
                      <>
                        <p>• Official UNCIF certification</p>
                        <p>• Digital badge for LinkedIn</p>
                        <p>• Professional recognition certificate</p>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donor Information */}
            <Card className="border-2 border-blue-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="text-2xl text-gray-800 flex items-center">
                  <Users className="w-8 h-8 mr-3" />
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={donorInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="border-2 border-gray-300 focus:border-blue-500 p-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="border-2 border-gray-300 focus:border-blue-500 p-3"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={donorInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="border-2 border-gray-300 focus:border-blue-500 p-3"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input
                      id="organization"
                      value={donorInfo.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      placeholder="Your company/organization"
                      className="border-2 border-gray-300 focus:border-blue-500 p-3"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={donorInfo.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Share your thoughts or specific requests..."
                    className="border-2 border-gray-300 focus:border-blue-500 min-h-[100px] p-3"
                  />
                </div>

                {/* Security & Trust */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center text-green-700 mb-2">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Secure & Trusted</span>
                  </div>
                  <p className="text-sm text-green-600">
                    Your payment is processed securely. We use industry-standard encryption 
                    and never store your payment details.
                  </p>
                </div>

                {/* Donation Summary */}
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Donation Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="font-semibold">{currentType?.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="font-semibold text-lg text-blue-600">
                        ₹{(customAmount || amount || '0').toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee:</span>
                      <span className="text-green-600">₹0 (We cover it!)</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-blue-600">
                        ₹{(customAmount || amount || '0').toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleDonate}
                  className={`w-full h-14 text-lg font-bold bg-gradient-to-r ${currentType?.color} hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  <CreditCard className="w-6 h-6 mr-3" />
                  Donate ₹{(customAmount || amount || '0').toLocaleString()}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center p-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">100% Transparent</h3>
              <p className="text-green-700">Every donation is tracked and reported with full transparency</p>
            </Card>
            
            <Card className="text-center p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-800 mb-2">Secure Payments</h3>
              <p className="text-blue-700">Bank-grade security with encrypted payment processing</p>
            </Card>
            
            <Card className="text-center p-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-800 mb-2">Immediate Impact</h3>
              <p className="text-purple-700">Your contribution starts helping founders within 24 hours</p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;
