
import React, { forwardRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, CheckCircle } from 'lucide-react';
import { ClearanceData } from '@/pages/LetterOfClearance';

interface ClearancePreviewProps {
  data: ClearanceData;
}

const ClearancePreview = forwardRef<HTMLDivElement, ClearancePreviewProps>(
  ({ data }, ref) => {
    const formatDate = (dateString: string) => {
      if (!dateString) return '___________';
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    const getInterestText = () => {
      switch (data.isInterested) {
        case 'yes': return 'Yes, Interested';
        case 'later': return 'Wants to Connect Later';
        case 'no': return 'Not Interested';
        default: return 'Not Specified';
      }
    };

    return (
      <Card className="bg-white border-2 border-purple-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardTitle className="text-xl text-purple-900 flex items-center">
            <Eye className="w-5 h-5 mr-2" />
            Live Preview
            <Badge variant="secondary" className="ml-2 bg-purple-200 text-purple-800">
              Letter of Clearance
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div ref={ref} className="bg-white p-8 min-h-[600px]">
            {/* Header */}
            <div className="text-center mb-8 border-b-2 border-blue-600 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <h1 className="text-2xl font-bold text-blue-900 mb-2">UNCIF - Digital Backbone Campaign</h1>
              <h2 className="text-lg font-semibold text-gray-700">Letter of Clearance for Representative Visit</h2>
            </div>

            {/* Basic Information */}
            <div className="space-y-3 mb-6">
              <div className="flex">
                <span className="font-medium text-gray-700 w-32">Date:</span>
                <span className="border-b border-gray-300 flex-1 min-w-0 pb-1">
                  {formatDate(data.date)}
                </span>
              </div>
              
              <div className="flex">
                <span className="font-medium text-gray-700 w-32">Frontliner Name:</span>
                <span className="border-b border-gray-300 flex-1 min-w-0 pb-1">
                  {data.frontlinerName || '________________________'}
                </span>
              </div>
              
              <div className="flex">
                <span className="font-medium text-gray-700 w-32">Organization:</span>
                <span className="border-b border-gray-300 flex-1 min-w-0 pb-1">
                  {data.frontlinerOrganization || '________________________'}
                </span>
              </div>
              
              <div className="flex">
                <span className="font-medium text-gray-700 w-32">Representative:</span>
                <span className="border-b border-gray-300 flex-1 min-w-0 pb-1">
                  {data.representativeName || '________________________'}
                </span>
              </div>
              
              <div className="flex">
                <span className="font-medium text-gray-700 w-32">Rep. ID/Badge:</span>
                <span className="border-b border-gray-300 flex-1 min-w-0 pb-1">
                  {data.representativeId || '________________________'}
                </span>
              </div>
            </div>

            {/* Declaration */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Declaration</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I hereby confirm that the representative from UNCIF, under the Digital Backbone campaign, has:
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Clearly shared all information regarding the free website creation, digital identity support, and other tech assistance provided by UNCIF.
                  </span>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Answered all my queries to my satisfaction.
                  </span>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Provided me with the option to connect further if I need additional support.
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm italic">
                I acknowledge that I have understood the information shared and this visit was purely informational and supportive in nature.
              </p>
            </div>

            {/* Response Summary */}
            {(data.isInterested !== 'yes' || data.requestedServices.website || data.requestedServices.digitalIdentity || data.requestedServices.other) && (
              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Frontliner Response Summary</h3>
                
                <div className="space-y-2">
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-40">Interest Level:</span>
                    <span className="text-gray-700">{getInterestText()}</span>
                  </div>
                  
                  {(data.requestedServices.website || data.requestedServices.digitalIdentity || data.requestedServices.other) && (
                    <div className="flex">
                      <span className="font-medium text-gray-700 w-40">Requested Services:</span>
                      <div className="flex-1">
                        {data.requestedServices.website && <span className="block text-gray-700">• Website Creation</span>}
                        {data.requestedServices.digitalIdentity && <span className="block text-gray-700">• Digital Identity Consultation</span>}
                        {data.requestedServices.other && (
                          <span className="block text-gray-700">
                            • Other: {data.requestedServices.otherText || 'Not specified'}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {data.additionalNotes && (
                    <div className="flex">
                      <span className="font-medium text-gray-700 w-40">Additional Notes:</span>
                      <span className="text-gray-700 flex-1">{data.additionalNotes}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Signatures */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-300">
              <div className="text-center">
                <div className="border-b border-gray-400 mb-2 h-16"></div>
                <p className="font-medium text-gray-700">Frontliner Signature</p>
                <p className="text-sm text-gray-600 mt-2">
                  Contact: {data.frontlinerContact || '_________________'}
                </p>
                <p className="text-sm text-gray-600">
                  Date: {formatDate(data.visitDate)}
                </p>
              </div>
              
              <div className="text-center">
                <div className="border-b border-gray-400 mb-2 h-16"></div>
                <p className="font-medium text-gray-700">Representative Signature</p>
                <p className="text-sm text-gray-600 mt-2">
                  Department: {data.representativeDepartment || '_________________'}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500">
                This document serves as official proof of information sharing and interaction completion under the UNCIF Digital Backbone Campaign
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

ClearancePreview.displayName = 'ClearancePreview';

export default ClearancePreview;
