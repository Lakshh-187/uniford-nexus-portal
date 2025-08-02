import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface CollaborationData {
  partnerName: string;
  introduction: string;
  scope: string[];
  understanding: string[];
  partnerSignatoryName: string;
  partnerSignatoryDesignation: string;
}

interface CollaborationPreviewProps {
  data: CollaborationData;
  forwardRef?: React.RefObject<HTMLDivElement>;
}

export const CollaborationPreview: React.FC<CollaborationPreviewProps> = ({
  data,
  forwardRef,
}) => {
  return (
    <Card className="shadow-2xl border-0 bg-white">
      <CardContent className="p-0">
        <div 
          ref={forwardRef}
          className="p-12 bg-white text-black min-h-[297mm] w-full"
          style={{ 
            fontFamily: 'serif',
            lineHeight: '1.6',
            fontSize: '16px'
          }}
        >
          {/* Header - Simplified for single page */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              🤝 Proposal for Collaboration
            </h1>
            <div className="text-xl font-semibold text-blue-800 border-b-2 border-blue-200 pb-2 inline-block">
              UNCIF & {data.partnerName || '[Partner Organization Name]'}
            </div>
          </div>

          <Separator className="my-6 bg-gray-300" />

          {/* Introduction */}
          <div className="mb-6 text-justify leading-relaxed text-gray-700">
            <p className="text-base">
              {data.introduction}
            </p>
          </div>

          {/* Scope Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-blue-800 flex items-center gap-2">
              📌 Scope
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <ul className="space-y-2 text-gray-700 text-sm">
                {data.scope.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Understanding Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-purple-800 flex items-center gap-2">
              ✨ Understanding
            </h2>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <ul className="space-y-2 text-gray-700 text-sm">
                {data.understanding.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-6 bg-gray-300" />

          {/* Signatories Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
              📝 Signatories
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* UNCIF Signatory */}
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-800">For UNCIF</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-gray-700">Name:</strong> Lakshay Choudhary
                  </div>
                  <div>
                    <strong className="text-gray-700">Designation:</strong> Founder
                  </div>
                  <div>
                    <strong className="text-gray-700">Signature:</strong> 
                    <div className="border-b-2 border-gray-400 mt-2 h-6"></div>
                  </div>
                  <div>
                    <strong className="text-gray-700">Date:</strong> 
                    <div className="border-b-2 border-gray-400 mt-2 h-6"></div>
                  </div>
                </div>
              </div>

              {/* Partner Organization Signatory */}
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  For {data.partnerName || '[Partner Organization Name]'}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-gray-700">Name:</strong> {data.partnerSignatoryName || '________________'}
                  </div>
                  <div>
                    <strong className="text-gray-700">Designation:</strong> {data.partnerSignatoryDesignation || '________________'}
                  </div>
                  <div>
                    <strong className="text-gray-700">Signature:</strong> 
                    <div className="border-b-2 border-gray-400 mt-2 h-6"></div>
                  </div>
                  <div>
                    <strong className="text-gray-700">Date:</strong> 
                    <div className="border-b-2 border-gray-400 mt-2 h-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 pt-4 border-t-2 border-gray-200">
            <p className="text-xs text-gray-500">
              This document represents a mutual understanding between the parties for collaborative initiatives.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};