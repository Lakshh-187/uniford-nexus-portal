
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  Users, 
  FileText, 
  Clock, 
  DollarSign, 
  Award, 
  CheckCircle, 
  AlertTriangle,
  Scale,
  Lock,
  Globe,
  Phone,
  Mail
} from 'lucide-react';

const PolicyDisplay = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
        <CardHeader className="text-center pb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-purple-900 mb-2">
            UNCIF Official Policy Document
          </CardTitle>
          <p className="text-lg text-purple-700">
            Comprehensive Tech Support & Digital Services Policy
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary" className="bg-purple-200 text-purple-800">
              Version 2.1
            </Badge>
            <Badge variant="secondary" className="bg-indigo-200 text-indigo-800">
              Effective: January 2024
            </Badge>
            <Badge variant="secondary" className="bg-green-200 text-green-800">
              Last Updated: December 2024
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Table of Contents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-purple-900">
            <FileText className="w-6 h-6 mr-2" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-purple-800">1. Organization Overview</p>
              <p className="text-sm font-medium text-purple-800">2. Service Portfolio</p>
              <p className="text-sm font-medium text-purple-800">3. Pricing & Fee Structure</p>
              <p className="text-sm font-medium text-purple-800">4. Project Categories</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-purple-800">5. Terms & Conditions</p>
              <p className="text-sm font-medium text-purple-800">6. Quality Assurance</p>
              <p className="text-sm font-medium text-purple-800">7. Support Framework</p>
              <p className="text-sm font-medium text-purple-800">8. Contact Information</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Organization Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-purple-900">
            <Users className="w-6 h-6 mr-2" />
            1. Organization Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">About UNCIF</h3>
            <p className="text-gray-700 leading-relaxed">
              The Uniford National Council of Institutes and Frontliners (UNCIF) is a premier organization 
              dedicated to providing comprehensive tech support and digital transformation services to 
              educational institutions, startups, and community organizations across India.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Mission Statement</h3>
            <p className="text-gray-700 leading-relaxed">
              To democratize access to professional digital services and empower organizations with 
              cutting-edge technology solutions that drive growth, innovation, and community impact.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Core Values</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-purple-800">Excellence</p>
                  <p className="text-sm text-gray-600">Delivering highest quality solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-purple-800">Innovation</p>
                  <p className="text-sm text-gray-600">Embracing cutting-edge technologies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-purple-800">Accessibility</p>
                  <p className="text-sm text-gray-600">Making tech services affordable</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-purple-800">Integrity</p>
                  <p className="text-sm text-gray-600">Maintaining transparent practices</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Service Portfolio */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-purple-900">
            <Globe className="w-6 h-6 mr-2" />
            2. Comprehensive Service Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Website Development</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Business Portfolio Websites</li>
                <li>• E-commerce Platforms with AI Integration</li>
                <li>• Educational Institution Portals</li>
                <li>• Community Organization Websites</li>
                <li>• Custom Web Applications</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Digital Identity Services</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Brand Identity Development</li>
                <li>• Logo Design & Branding</li>
                <li>• Social Media Setup</li>
                <li>• Digital Marketing Strategy</li>
                <li>• SEO Optimization</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Technical Support</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Domain & Hosting Assistance</li>
                <li>• Technical Consultation</li>
                <li>• System Integration</li>
                <li>• Maintenance & Updates</li>
                <li>• Training & Documentation</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Additional Services</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Document Generation Tools</li>
                <li>• Template Creation</li>
                <li>• Digital Stamp & Signatures</li>
                <li>• Policy & Agreement Management</li>
                <li>• Custom Software Solutions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Pricing Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-purple-900">
            <DollarSign className="w-6 h-6 mr-2" />
            3. Transparent Pricing & Fee Structure
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">Cost-Sharing Model (20:80)</h3>
            <p className="text-gray-700 mb-4">
              UNCIF operates on an innovative cost-sharing model where clients pay only 20% of the total project cost, 
              while UNCIF absorbs 80% as part of our community support initiative.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border">
                <p className="font-semibold text-purple-800">Client Contribution: 20%</p>
                <p className="text-sm text-gray-600">Covers operational costs and client commitment</p>
              </div>
              <div className="bg-white p-4 rounded border">
                <p className="font-semibold text-purple-800">UNCIF Investment: 80%</p>
                <p className="text-sm text-gray-600">Subsidized through foundation funding</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Standard Pricing Structure</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold text-purple-800">Service Type</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold text-purple-800">Base Pages</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold text-purple-800">Total Cost</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold text-purple-800">Client Pays (20%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Business Portfolio</td>
                    <td className="border border-gray-300 p-3">3 Pages</td>
                    <td className="border border-gray-300 p-3">₹3,500</td>
                    <td className="border border-gray-300 p-3 font-semibold text-green-700">₹700</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">E-commerce with AI</td>
                    <td className="border border-gray-300 p-3">5 Pages</td>
                    <td className="border border-gray-300 p-3">₹5,000</td>
                    <td className="border border-gray-300 p-3 font-semibold text-green-700">₹1,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Additional Page</td>
                    <td className="border border-gray-300 p-3">Per Page</td>
                    <td className="border border-gray-300 p-3">₹700</td>
                    <td className="border border-gray-300 p-3 font-semibold text-green-700">₹140</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Fixed Fees</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <p className="font-semibold text-blue-800">Application Fee</p>
                <p className="text-2xl font-bold text-blue-900">₹300</p>
                <p className="text-sm text-gray-600">Non-refundable processing fee</p>
              </div>
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="font-semibold text-green-800">Domain Setup</p>
                <p className="text-2xl font-bold text-green-900">Free*</p>
                <p className="text-sm text-gray-600">*With UNCIF assistance option</p>
              </div>
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <p className="font-semibold text-purple-800">Hosting Support</p>
                <p className="text-2xl font-bold text-purple-900">Free*</p>
                <p className="text-sm text-gray-600">*First year included</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Special Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-purple-900">
            <Award className="w-6 h-6 mr-2" />
            4. Special Category Benefits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Student Category</h3>
                <p className="text-sm text-gray-700 mb-2">Additional 50% discount on client contribution</p>
                <p className="text-xs text-blue-600">Requires valid student ID verification</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Financial Aid Recipients</h3>
                <p className="text-sm text-gray-700 mb-2">Case-by-case evaluation for further discounts</p>
                <p className="text-xs text-green-600">Documentation required for verification</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Founder Category</h3>
                <p className="text-sm text-gray-700 mb-2">Startup founders get priority support</p>
                <p className="text-xs text-purple-600">Equity or partnership opportunities available</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">Educational Institutions</h3>
                <p className="text-sm text-gray-700 mb-2">Special institutional rates and bulk discounts</p>
                <p className="text-xs text-orange-600">Long-term partnership programs available</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Terms & Conditions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-purple-900">
            <Scale className="w-6 h-6 mr-2" />
            5. Terms & Conditions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Project Delivery</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Standard delivery timeline: 7-14 business days</li>
              <li>• Complex projects may require additional time with prior notice</li>
              <li>• Regular progress updates provided throughout development</li>
              <li>• Client review and feedback incorporated at key milestones</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Code Ownership & Transfer</h3>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-yellow-800 mb-2">Important Notice</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Source code will be transferred to the client only after successful project completion, 
                    final payment, and departmental review. This ensures quality standards and protects 
                    both parties' interests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Payment Terms</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Application fee: Due upon submission</li>
              <li>• Project fee: 50% advance, 50% upon completion</li>
              <li>• All payments are non-refundable once work begins</li>
              <li>• Additional charges apply for scope changes</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Intellectual Property</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Client retains full ownership of final delivered products</li>
              <li>• UNCIF retains rights to methodologies and frameworks used</li>
              <li>• All custom content and designs become client property</li>
              <li>• Third-party tools and libraries remain under respective licenses</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Quality Assurance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-purple-900">
            <CheckCircle className="w-6 h-6 mr-2" />
            6. Quality Assurance Framework
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Code Review</h3>
              <p className="text-sm text-gray-600">Multi-stage code review process ensuring best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Testing</h3>
              <p className="text-sm text-gray-600">Comprehensive testing across devices and browsers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Standards</h3>
              <p className="text-sm text-gray-600">Adherence to industry standards and best practices</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Our Quality Commitments</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Responsive design guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">SEO optimization included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Security best practices</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Performance optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Cross-browser compatibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Documentation provided</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 7: Support Framework */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-purple-900">
            <Clock className="w-6 h-6 mr-2" />
            7. Ongoing Support Framework
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Free Support Period</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 30 days free support after delivery</li>
                <li>• Bug fixes and minor adjustments included</li>
                <li>• Email and phone support available</li>
                <li>• Priority response within 24 hours</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Extended Support Options</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Monthly maintenance packages available</li>
                <li>• Content updates and feature additions</li>
                <li>• Hosting and domain management</li>
                <li>• Analytics and performance monitoring</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">Training & Knowledge Transfer</h3>
            <p className="text-gray-700 mb-4">
              UNCIF provides comprehensive training to ensure clients can effectively manage their digital assets:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <FileText className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-semibold text-amber-800">Documentation</p>
                <p className="text-xs text-gray-600">Complete user manuals and guides</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-semibold text-amber-800">Training Sessions</p>
                <p className="text-xs text-gray-600">Live training for content management</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-semibold text-amber-800">Ongoing Guidance</p>
                <p className="text-xs text-gray-600">Regular check-ins and updates</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 8: Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-purple-900">
            <Phone className="w-6 h-6 mr-2" />
            8. Official Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Primary Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-600">support@uncif.org</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p>Sunday: Closed</p>
                  <p className="text-xs text-purple-600 mt-2">
                    Emergency support available 24/7 for critical issues
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Department Contacts</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="font-medium text-blue-800">Technical Support</p>
                    <p className="text-gray-600">tech@uncif.org</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <p className="font-medium text-green-800">Project Management</p>
                    <p className="text-gray-600">projects@uncif.org</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <p className="font-medium text-purple-800">Billing & Accounts</p>
                    <p className="text-gray-600">billing@uncif.org</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Legal Information</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-medium">Registration:</span> Uniford Foundation</p>
                  <p><span className="font-medium">Address:</span> New Delhi, India</p>
                  <p><span className="font-medium">Policy Version:</span> 2.1</p>
                  <p><span className="font-medium">Last Updated:</span> December 2024</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg border border-purple-200">
            <div className="flex items-center justify-center space-x-4">
              <Lock className="w-6 h-6 text-purple-600" />
              <div className="text-center">
                <p className="font-semibold text-purple-800">This document constitutes the official policy of UNCIF</p>
                <p className="text-sm text-gray-600 mt-1">
                  By engaging our services, clients agree to these terms and conditions
                </p>
              </div>
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PolicyDisplay;
