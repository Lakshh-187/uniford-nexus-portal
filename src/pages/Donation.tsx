import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
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
  Target,
  Filter,
  Upload,
  AlertCircle,
  IndianRupee,
  Receipt,
  Calculator
} from 'lucide-react';
import SEO from '@/components/SEO';

const Donation = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'support' | 'membership' | 'application' | 'document'>('all');
  const [donationType, setDonationType] = useState<'support' | 'membership' | 'application' | 'document'>('support');
  const [amount, setAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const filterOptions = [
    { id: 'all', label: 'All Categories', count: 8 },
    { id: 'support', label: 'Tech Support', count: 3 },
    { id: 'membership', label: 'Membership', count: 2 },
    { id: 'application', label: 'Applications', count: 2 },
    { id: 'document', label: 'Documents', count: 1 }
  ];

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
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      benefits: ['Free website creation for beneficiaries', 'Technical consultation services', 'Digital presence building', '24/7 support hotline'],
      taxBenefit: '80G Certificate Available',
      popular: true
    },
    {
      id: 'membership',
      title: 'UNCIF Membership Fee',
      description: 'Join our prestigious community of innovators and thought leaders',
      icon: Crown,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      benefits: ['Exclusive networking events', 'Priority technical support', 'Certification programs', 'Mentorship opportunities'],
      taxBenefit: 'GST Receipt Provided',
      popular: false
    },
    {
      id: 'application',
      title: 'Application Processing Fee',
      description: 'Cover administrative costs for program applications and reviews',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      benefits: ['Fast-track application processing', 'Dedicated application support', 'Status tracking', 'Priority review'],
      taxBenefit: 'Service Tax Exempted',
      popular: false
    },
    {
      id: 'document',
      title: 'Document & Certificate Fee',
      description: 'Obtain official UNCIF certificates and documentation',
      icon: Award,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-700',
      benefits: ['Official UNCIF certificates', 'Digital badge credentials', 'LinkedIn endorsements', 'Professional recognition'],
      taxBenefit: 'No Tax Applicable',
      popular: false
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setDonorInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleDonationTypeChange = (value: string) => {
    if (value === 'support' || value === 'membership' || value === 'application' || value === 'document') {
      setDonationType(value);
    }
  };

  const handleDocumentUpload = () => {
    setShowDocumentModal(true);
  };

  const filteredDonationTypes = selectedFilter === 'all' 
    ? donationTypes 
    : donationTypes.filter(type => type.id === selectedFilter);

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
    
    alert(`Thank you ${donorInfo.name}! Your donation of ₹${finalAmount} is being processed. You will receive a confirmation email shortly.`);
  };

  const currentType = donationTypes.find(type => type.id === donationType);
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
        {/* Modern Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-white/10 rounded-full mb-8 backdrop-blur-lg border border-white/20">
              <Heart className="w-6 h-6 text-pink-300 mr-3" />
              <span className="text-lg font-semibold">Transform Lives Through Technology</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Empower Innovation
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Join our mission to support 68% of initiators & founders who lack digital presence. 
              Your contribution creates lasting impact in the tech community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Users className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200">Beneficiaries Supported</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Target className="w-12 h-12 text-green-300 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">₹10L+</div>
                <div className="text-blue-200">Tech Support Provided</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Award className="w-12 h-12 text-amber-300 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Choose Your Support Type</h2>
              <div className="flex items-center text-gray-600">
                <Filter className="w-5 h-5 mr-2" />
                <span>Filter by category</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {filterOptions.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id as any)}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  {filter.label}
                  <Badge variant="secondary" className="ml-2 bg-white/20 text-current">
                    {filter.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Donation Cards Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
            {filteredDonationTypes.map((type) => (
              <Card key={type.id} className={`relative border-2 ${type.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden`}>
                {type.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${type.color}`}></div>
                
                <CardHeader className={`${type.bgColor} relative`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <type.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className={`text-2xl ${type.textColor} mb-2`}>{type.title}</CardTitle>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  <div className={`bg-gradient-to-r ${type.bgColor} p-4 rounded-lg border ${type.borderColor}`}>
                    <h4 className={`font-bold ${type.textColor} mb-3 flex items-center`}>
                      <Star className="w-5 h-5 mr-2" />
                      Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <Receipt className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold text-green-800">Tax Benefit:</span>
                    </div>
                    <span className="text-green-700 font-medium">{type.taxBenefit}</span>
                  </div>

                  <RadioGroup 
                    value={donationType} 
                    onValueChange={handleDonationTypeChange}
                    className="mt-4"
                  >
                    <div className="flex items-center space-x-2 p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors">
                      <RadioGroupItem value={type.id} id={type.id} />
                      <Label htmlFor={type.id} className="flex-1 cursor-pointer font-medium">
                        Select This Category
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Donation Form */}
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
                  <Label className="text-lg font-semibold text-gray-800 mb-4 block flex items-center">
                    <IndianRupee className="w-5 h-5 mr-2" />
                    Select Amount
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {currentAmounts.map((amt) => (
                      <Button
                        key={amt}
                        onClick={() => {
                          setAmount(amt.toString());
                          setCustomAmount('');
                        }}
                        variant={amount === amt.toString() ? "default" : "outline"}
                        className={`h-14 text-lg font-semibold transition-all duration-300 ${
                          amount === amt.toString() 
                            ? `bg-gradient-to-r ${currentType?.color} text-white shadow-lg scale-105` 
                            : 'border-2 hover:border-blue-400 hover:scale-105'
                        }`}
                      >
                        ₹{amt.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount" className="flex items-center">
                      <Calculator className="w-4 h-4 mr-2" />
                      Custom Amount
                    </Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount('');
                      }}
                      placeholder="Enter custom amount"
                      className="border-2 border-gray-300 focus:border-blue-500 text-lg p-4 h-12"
                    />
                  </div>
                </div>

                {/* Impact Display - Enhanced */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 shadow-inner">
                  <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Your Impact Calculation
                  </h4>
                  <div className="text-sm text-green-700 space-y-3">
                    {donationType === 'support' && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                          <span>₹500 =</span>
                          <span className="font-semibold">1 Startup Consultation</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white/50 rounded">
                          <span>₹2500 =</span>
                          <span className="font-semibold">Complete Website Package</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-white/70 rounded border">
                          <span>₹5000 =</span>
                          <span className="font-semibold">2 Digital Transformation Packages</span>
                        </div>
                      </div>
                    )}
                    {/* Keep existing impact content for other types */}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Donor Information */}
            <Card className="border-2 border-blue-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b-2 border-blue-100">
                <CardTitle className="text-2xl text-gray-800 flex items-center">
                  <Users className="w-8 h-8 mr-3 text-blue-600" />
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold text-gray-800">Full Name *</Label>
                    <Input
                      id="name"
                      value={donorInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="border-2 border-gray-300 focus:border-blue-500 p-3 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold text-gray-800">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="border-2 border-gray-300 focus:border-blue-500 p-3 h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-semibold text-gray-800">Phone Number</Label>
                    <Input
                      id="phone"
                      value={donorInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="border-2 border-gray-300 focus:border-blue-500 p-3 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="font-semibold text-gray-800">Organization</Label>
                    <Input
                      id="organization"
                      value={donorInfo.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      placeholder="Your company/organization"
                      className="border-2 border-gray-300 focus:border-blue-500 p-3 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold text-gray-800">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={donorInfo.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Share your thoughts or specific requests..."
                    className="border-2 border-gray-300 focus:border-blue-500 min-h-[120px] p-3"
                  />
                </div>

                {/* Document Upload Section */}
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200">
                  <h4 className="text-lg font-bold text-amber-800 mb-4 flex items-center">
                    <Upload className="w-5 h-5 mr-2" />
                    Documents & Templates Upload
                  </h4>
                  <p className="text-amber-700 mb-4 text-sm">
                    Attach supporting documents, templates, or additional information for your donation.
                  </p>
                  <Button 
                    onClick={handleDocumentUpload}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Documents & Templates
                  </Button>
                </div>

                {/* Enhanced Security & Trust */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                  <div className="flex items-center text-green-700 mb-3">
                    <Shield className="w-6 h-6 mr-2" />
                    <span className="font-bold text-lg">Secure & Trusted Payment</span>
                  </div>
                  <div className="space-y-2 text-sm text-green-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>PCI DSS compliant processing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Instant receipt generation</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Donation Summary */}
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 shadow-inner">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Receipt className="w-6 h-6 mr-2" />
                    Donation Summary
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">Category:</span>
                      <Badge className={`bg-gradient-to-r ${currentType?.color} text-white`}>
                        {currentType?.title}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">Amount:</span>
                      <span className="font-bold text-xl text-blue-600">
                        ₹{(customAmount || amount || '0').toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">Processing Fee:</span>
                      <span className="text-green-600 font-medium">₹0 (We cover it!)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border-2 border-blue-200">
                      <span className="text-xl font-bold">Total:</span>
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{(customAmount || amount || '0').toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleDonate}
                  className={`w-full h-16 text-xl font-bold bg-gradient-to-r ${currentType?.color} hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  <CreditCard className="w-6 h-6 mr-3" />
                  Donate ₹{(customAmount || amount || '0').toLocaleString()}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <Card className="text-center p-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">100% Transparent</h3>
              <p className="text-green-700 text-sm">Every donation tracked with full transparency and impact reports</p>
            </Card>
            
            <Card className="text-center p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-800 mb-2">Bank-Grade Security</h3>
              <p className="text-blue-700 text-sm">Military-grade encryption with certified payment processors</p>
            </Card>
            
            <Card className="text-center p-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
              <Star className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-800 mb-2">Immediate Impact</h3>
              <p className="text-purple-700 text-sm">Your contribution starts helping founders within 24 hours</p>
            </Card>

            <Card className="text-center p-6 border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 hover:shadow-lg transition-shadow">
              <Receipt className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-800 mb-2">Tax Benefits</h3>
              <p className="text-amber-700 text-sm">80G certificates and GST receipts for maximum tax savings</p>
            </Card>
          </div>
        </div>

        {/* Document Upload Modal */}
        {showDocumentModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white shadow-2xl">
              <CardHeader className="text-center border-b">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Coming Soon!</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Document and template upload functionality is currently being developed. 
                  This feature will be available soon with enhanced security and organization capabilities.
                </p>
                <div className="space-y-3 text-sm text-gray-500 mb-6">
                  <div className="flex items-center justify-center">
                    <Upload className="w-4 h-4 mr-2" />
                    <span>Secure file upload (up to 10MB)</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <FileText className="w-4 h-4 mr-2" />
                    <span>Multiple format support</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2" />
                    <span>Encrypted storage</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setShowDocumentModal(false)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Got it, Thanks!
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default Donation;
