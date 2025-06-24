
import React, { forwardRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { AgreementData } from '@/pages/PolicyAgreement';

interface AgreementPreviewProps {
  data: AgreementData;
}

const AgreementPreview = forwardRef<HTMLDivElement, AgreementPreviewProps>(
  ({ data }, ref) => {
    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    return (
      <Card ref={ref} className="bg-white">
        <CardHeader className="text-center border-b">
          <div className="mb-4">
            <img 
              src="/lovable-uploads/d954a96f-5369-4a48-91dd-004734611509.png" 
              alt="UNCIF Logo" 
              className="mx-auto h-16 w-auto"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            UNCIF TECH SUPPORT AGREEMENT
          </CardTitle>
          <p className="text-sm text-gray-500 mt-2">
            United Nations Confederation of International Federations
          </p>
          <p className="text-sm text-gray-500">
            Digital Backbone Campaign - Tech Support Services
          </p>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          {/* Agreement Header */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">SERVICE AGREEMENT</h3>
            <p className="text-sm text-gray-600 mt-1">Agreement Date: {formatDate(data.agreementDate)}</p>
          </div>

          <Separator />

          {/* Applicant Information */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              APPLICANT INFORMATION
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-medium">Name:</span> {data.applicantName || 'Not provided'}
                </div>
                <div>
                  <span className="font-medium">Email:</span> {data.applicantEmail || 'Not provided'}
                </div>
                <div>
                  <span className="font-medium">Phone:</span> {data.applicantPhone || 'Not provided'}
                </div>
                <div>
                  <span className="font-medium">Organization:</span> {data.organizationName || 'Individual'}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
              PROJECT SPECIFICATIONS
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Project Type:</span>
                <Badge variant={data.projectType === 'business-portfolio' ? 'default' : 'secondary'}>
                  {data.projectType === 'business-portfolio' ? 'Business & Portfolio' : 'E-commerce & AI'}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Number of Pages:</span>
                <span>{data.numberOfPages} pages</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Applicant Category:</span>
                <Badge variant="outline">
                  {data.specialCategory.charAt(0).toUpperCase() + data.specialCategory.slice(1).replace('-', ' ')}
                </Badge>
              </div>
              {data.requestedFeatures && (
                <div>
                  <span className="font-medium">Requested Features:</span>
                  <p className="text-sm text-gray-600 mt-1">{data.requestedFeatures}</p>
                </div>
              )}
            </div>
          </div>

          {/* Cost Breakdown */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              FINANCIAL BREAKDOWN
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Editing & Formatting Fee:</span>
                  <span>₹{data.editingFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Documentation Fee:</span>
                  <span>₹{data.documentationFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Application Fee:</span>
                  <span>₹{data.applicationFee}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Amount (20% share):</span>
                  <span className="text-green-600">₹{data.totalAmount}</span>
                </div>
                <div className="text-sm text-gray-600 text-center mt-2">
                  UNCIF contributes 80% of the project cost
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
              TERMS & CONDITIONS
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-2">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>We provide free graphics, content, code, and website development services.</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Charges apply only for editing, formatting, documentation, and application processing.</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Base fee covers up to 3 pages. Additional pages charged at ₹140 per page.</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Project follows 20:80 cost-sharing model (20% applicant, 80% UNCIF).</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Project starts after application fee submission of ₹300.</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Code transfer occurs after applicant review and approval.</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Document includes all requirements and features requested by client.</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  Domain & hosting: {data.domainHosting === 'self' 
                    ? 'Purchased by applicant' 
                    : 'UNCIF assistance requested'}
                </span>
              </div>
              {(data.specialCategory === 'student' || data.specialCategory === 'financial-aid' || data.specialCategory === 'founder') && (
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-green-600 font-medium">
                    Special frontliner benefits: Only editing & formatting fees apply.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="text-center">
              <Separator className="mb-4" />
              <p className="text-sm font-medium">Applicant Signature</p>
              <p className="text-xs text-gray-500 mt-1">{data.applicantName}</p>
              <p className="text-xs text-gray-500">Date: {formatDate(data.agreementDate)}</p>
            </div>
            <div className="text-center">
              <Separator className="mb-4" />
              <p className="text-sm font-medium">UNCIF Representative</p>
              <p className="text-xs text-gray-500 mt-1">Authorized Signatory</p>
              <p className="text-xs text-gray-500">Date: {formatDate(data.agreementDate)}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 mt-6 pt-4 border-t">
            <p>This agreement is governed by the terms and conditions of UNCIF Tech Support Services.</p>
            <p>For queries, contact: tech-support@uncif.org | +91-XXXX-XXXX-XX</p>
          </div>
        </CardContent>
      </Card>
    );
  }
);

AgreementPreview.displayName = 'AgreementPreview';

export default AgreementPreview;
