
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AgreementData } from '@/pages/PolicyAgreement';
import { FileText, User, Building, Settings } from 'lucide-react';

interface AgreementFormProps {
  formData: AgreementData;
  onInputChange: (field: keyof AgreementData, value: any) => void;
}

const AgreementForm = ({ formData, onInputChange }: AgreementFormProps) => {
  return (
    <div className="space-y-6">
      {/* Applicant Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            Applicant Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="applicantName">Full Name *</Label>
            <Input
              id="applicantName"
              value={formData.applicantName}
              onChange={(e) => onInputChange('applicantName', e.target.value)}
              placeholder="Enter full name"
            />
          </div>
          
          <div>
            <Label htmlFor="applicantEmail">Email Address *</Label>
            <Input
              id="applicantEmail"
              type="email"
              value={formData.applicantEmail}
              onChange={(e) => onInputChange('applicantEmail', e.target.value)}
              placeholder="Enter email address"
            />
          </div>
          
          <div>
            <Label htmlFor="applicantPhone">Phone Number *</Label>
            <Input
              id="applicantPhone"
              value={formData.applicantPhone}
              onChange={(e) => onInputChange('applicantPhone', e.target.value)}
              placeholder="Enter phone number"
            />
          </div>
          
          <div>
            <Label htmlFor="organizationName">Organization/Company Name</Label>
            <Input
              id="organizationName"
              value={formData.organizationName}
              onChange={(e) => onInputChange('organizationName', e.target.value)}
              placeholder="Enter organization name (if applicable)"
            />
          </div>
        </CardContent>
      </Card>

      {/* Project Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building className="w-5 h-5 mr-2" />
            Project Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Project Type *</Label>
            <RadioGroup
              value={formData.projectType}
              onValueChange={(value) => onInputChange('projectType', value)}
              className="mt-2"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="business-portfolio" id="business-portfolio" />
                <Label htmlFor="business-portfolio" className="flex-1">
                  <div className="font-medium">Business & Portfolio Website</div>
                  <div className="text-sm text-gray-500">Priority processing</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="ecommerce-ai" id="ecommerce-ai" />
                <Label htmlFor="ecommerce-ai" className="flex-1">
                  <div className="font-medium">E-commerce & AI Integrated Website</div>
                  <div className="text-sm text-gray-500">Standard processing</div>
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="numberOfPages">Number of Pages *</Label>
            <Select
              value={formData.numberOfPages.toString()}
              onValueChange={(value) => onInputChange('numberOfPages', parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select number of pages" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} page{num > 1 ? 's' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="requestedFeatures">Requested Features & Requirements</Label>
            <Textarea
              id="requestedFeatures"
              value={formData.requestedFeatures}
              onChange={(e) => onInputChange('requestedFeatures', e.target.value)}
              placeholder="Describe the features and requirements for your website..."
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* Special Categories & Pricing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Category & Pricing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Applicant Category *</Label>
            <RadioGroup
              value={formData.specialCategory}
              onValueChange={(value) => onInputChange('specialCategory', value)}
              className="mt-2"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="regular" id="regular" />
                <Label htmlFor="regular">Regular Applicant</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student (Special Pricing)</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="financial-aid" id="financial-aid" />
                <Label htmlFor="financial-aid">Financial Aid Recipient</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="founder" id="founder" />
                <Label htmlFor="founder">Startup Founder</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label>Domain & Hosting</Label>
            <RadioGroup
              value={formData.domainHosting}
              onValueChange={(value) => onInputChange('domainHosting', value)}
              className="mt-2"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="self" id="self" />
                <Label htmlFor="self">I will purchase domain & hosting myself</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="uncif-assistance" id="uncif-assistance" />
                <Label htmlFor="uncif-assistance">Need UNCIF assistance for domain & hosting</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Cost Breakdown */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center text-green-800">
            <FileText className="w-5 h-5 mr-2" />
            Cost Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Editing & Formatting Fee:</span>
              <span className="font-semibold">₹{formData.editingFee}</span>
            </div>
            <div className="flex justify-between">
              <span>Documentation Fee:</span>
              <span className="font-semibold">₹{formData.documentationFee}</span>
            </div>
            <div className="flex justify-between">
              <span>Application Fee:</span>
              <span className="font-semibold">₹{formData.applicationFee}</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-lg font-bold text-green-800">
              <span>Your Total (20%):</span>
              <span>₹{formData.totalAmount}</span>
            </div>
            <div className="text-sm text-green-600">
              UNCIF contributes 80% of the project cost
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgreementForm;
