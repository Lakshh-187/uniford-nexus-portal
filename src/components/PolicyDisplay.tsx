
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, DollarSign, Clock, Users, Star, FileText } from 'lucide-react';

const PolicyDisplay = () => {
  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Shield className="w-6 h-6 mr-3 text-purple-600" />
            UNCIF Tech Support Policy Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide comprehensive tech support services with transparent pricing and 
            flexible payment options. Our mission is to make quality web development 
            accessible to everyone while maintaining professional standards.
          </p>
        </CardContent>
      </Card>

      {/* Service Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Priority Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold text-green-700 mb-3">Business & Portfolio Websites</h3>
            <ul className="space-y-2 text-green-600">
              <li>• Corporate websites</li>
              <li>• Personal portfolios</li>
              <li>• Business landing pages</li>
              <li>• Professional showcases</li>
            </ul>
            <Badge className="mt-3 bg-green-100 text-green-800">Priority Processing</Badge>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Standard Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold text-blue-700 mb-3">E-commerce & AI Integrated</h3>
            <ul className="space-y-2 text-blue-600">
              <li>• Online stores</li>
              <li>• AI-powered websites</li>
              <li>• Complex web applications</li>
              <li>• Custom integrations</li>
            </ul>
            <Badge className="mt-3 bg-blue-100 text-blue-800">Standard Processing</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Pricing Structure */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center text-orange-800">
            <DollarSign className="w-6 h-6 mr-3" />
            Transparent Pricing Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">₹0</div>
              <div className="text-sm text-gray-600">
                Graphics, Content, Code & Website Development
              </div>
              <Badge className="mt-2 bg-orange-100 text-orange-800">Completely Free</Badge>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">₹700</div>
              <div className="text-sm text-gray-600">
                Base Fee for Editing, Formatting & Documentation (3 pages)
              </div>
              <Badge className="mt-2 bg-orange-100 text-orange-800">Standard Rate</Badge>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">₹140</div>
              <div className="text-sm text-gray-600">
                Per Additional Page (after 3 pages)
              </div>
              <Badge className="mt-2 bg-orange-100 text-orange-800">Per Page</Badge>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg border-2 border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-3">Cost Sharing Model (20:80)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center p-3 bg-orange-100 rounded-lg">
                <div className="text-xl font-bold text-orange-700">20%</div>
                <div className="text-sm text-orange-600">Applicant Responsibility</div>
              </div>
              <div className="text-center p-3 bg-orange-100 rounded-lg">
                <div className="text-xl font-bold text-orange-700">80%</div>
                <div className="text-sm text-orange-600">UNCIF Contribution</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Process Timeline */}
      <Card className="border-indigo-200 bg-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center text-indigo-800">
            <Clock className="w-6 h-6 mr-3" />
            Project Process & Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-indigo-800">Application Submission</h4>
                <p className="text-indigo-600">Submit ₹300 application fee to start the process</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-indigo-800">Project Development</h4>
                <p className="text-indigo-600">We develop your website with all requested features</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-indigo-800">Review & Approval</h4>
                <p className="text-indigo-600">Applicant reviews the completed project</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold text-indigo-800">Code Transfer</h4>
                <p className="text-indigo-600">Code is transferred after successful review</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Categories */}
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center text-purple-800">
            <Users className="w-6 h-6 mr-3" />
            Special Frontliner Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border-2 border-purple-200">
              <div className="text-2xl mb-2">🎓</div>
              <h4 className="font-semibold text-purple-800">Students</h4>
              <p className="text-sm text-purple-600 mt-2">Only editing & formatting fees apply</p>
              <Badge className="mt-2 bg-purple-100 text-purple-800">No Documentation Fee</Badge>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg border-2 border-purple-200">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-semibold text-purple-800">Financial Aid Recipients</h4>
              <p className="text-sm text-purple-600 mt-2">Reduced fee structure available</p>
              <Badge className="mt-2 bg-purple-100 text-purple-800">Special Pricing</Badge>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg border-2 border-purple-200">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold text-purple-800">Startup Founders</h4>
              <p className="text-sm text-purple-600 mt-2">Entrepreneur-friendly rates</p>
              <Badge className="mt-2 bg-purple-100 text-purple-800">Founder Benefits</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Services */}
      <Card className="border-teal-200 bg-teal-50">
        <CardHeader>
          <CardTitle className="text-teal-800">Additional Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="font-medium text-teal-800">Domain & Hosting Purchase</span>
              <Badge className="bg-teal-100 text-teal-800">Applicant Responsibility</Badge>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="font-medium text-teal-800">Domain & Hosting Assistance</span>
              <Badge className="bg-teal-100 text-teal-800">Available on Request</Badge>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="font-medium text-teal-800">Website Go-Live Support</span>
              <Badge className="bg-teal-100 text-teal-800">Full Support Provided</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PolicyDisplay;
