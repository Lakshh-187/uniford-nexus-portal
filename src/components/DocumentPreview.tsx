
import React, { forwardRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Award, Star, Crown, Shield } from 'lucide-react';
import { DocumentData } from '@/pages/AdvancedDocumentGenerator';

interface DocumentPreviewProps {
  documentType: string;
  format: string;
  data: DocumentData;
}

const DocumentPreview = forwardRef<HTMLDivElement, DocumentPreviewProps>(
  ({ documentType, format, data }, ref) => {
    const renderCertificate = () => (
      <div className="relative min-h-[600px] bg-gradient-to-br from-blue-50 to-purple-50 p-8 border-8 border-double border-amber-600">
        {/* UNCIF Logo Area */}
        <div className="text-center mb-8 border-b-2 border-amber-600 pb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">U</span>
          </div>
          <h1 className="text-3xl font-bold text-purple-900 mb-2">UNCIF</h1>
          <h2 className="text-lg text-purple-700">Uniford National Council of Institutes & Frontliners</h2>
        </div>

        {/* Certificate Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-serif text-gray-800 mb-4" style={{ fontFamily: 'Old English Text MT, serif' }}>
            Certificate
          </h1>
          <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-8 py-3 inline-block">
            <h2 className="text-2xl font-bold">OF ACHIEVEMENT</h2>
          </div>
        </div>

        {/* Certificate Content */}
        <div className="text-center mb-8 space-y-6">
          <p className="text-lg text-gray-700 mb-6">PROUDLY PRESENTED TO</p>
          
          <div className="text-4xl font-script text-amber-800 mb-6" style={{ fontFamily: 'Brush Script MT, cursive' }}>
            {data.name || '[Recipient Name]'}
          </div>
          
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            This certificate is proudly presented in recognition of outstanding contributions and achievements 
            in {data.purpose || '[Field/Achievement]'}, demonstrating excellence and expertise in their domain.
          </p>
          
          {data.customNote && (
            <p className="text-sm text-gray-600 italic max-w-xl mx-auto mt-4">
              {data.customNote}
            </p>
          )}
        </div>

        {/* Certificate Footer */}
        <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-300">
          <div className="text-center">
            <div className="w-32 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded mb-2 flex items-center justify-center">
              <span className="text-purple-600 font-script text-lg">Signature</span>
            </div>
            <p className="font-semibold text-gray-800">Dr. Rajesh Kumar</p>
            <p className="text-sm text-gray-600">Director General, UNCIF</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-2">
              <Award className="w-8 h-8 text-white" />
            </div>
            <p className="text-xs text-gray-600">Certificate No: {data.certificateNumber || 'UNCIF2024001'}</p>
            <p className="text-xs text-gray-600">Date: {new Date(data.date).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    );

    const renderIDCard = () => (
      <div className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 text-white shadow-2xl">
        {/* Header */}
        <div className="text-center mb-4 border-b border-white/20 pb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-white font-bold">U</span>
          </div>
          <h2 className="text-sm font-bold">UNCIF</h2>
          <p className="text-xs text-blue-100">Official ID Card</p>
        </div>

        {/* Photo Area */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">{data.name || '[Name]'}</h3>
            <p className="text-sm text-blue-100">{data.title || '[Position]'}</p>
            <p className="text-xs text-blue-200">{data.department || '[Department]'}</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-blue-200">ID:</span>
            <span>{data.certificateNumber || 'UNCIF2024001'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200">Valid Until:</span>
            <span>{data.validUntil || '2025-12-31'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200">Authority:</span>
            <span>UNCIF</span>
          </div>
        </div>

        {/* QR Code Area */}
        <div className="mt-4 pt-4 border-t border-white/20 text-center">
          <div className="w-16 h-16 bg-white/20 rounded mx-auto mb-2 flex items-center justify-center">
            <span className="text-xs">QR</span>
          </div>
          <p className="text-xs text-blue-200">Scan for verification</p>
        </div>
      </div>
    );

    const renderBadge = () => (
      <div className="w-48 h-48 mx-auto relative">
        <div className="w-full h-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl">
          <div className="w-36 h-36 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full flex items-center justify-center">
            <div className="text-center">
              <Shield className="w-12 h-12 text-amber-800 mx-auto mb-2" />
              <p className="text-xs font-bold text-amber-900">UNCIF</p>
              <p className="text-xs text-amber-800">{data.purpose || 'Excellence'}</p>
              <p className="text-xs font-semibold text-amber-900 mt-1">{new Date(data.date).getFullYear()}</p>
            </div>
          </div>
        </div>
        {/* Ribbon */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-b from-red-500 to-red-700"></div>
      </div>
    );

    const renderLetterhead = () => (
      <div className="bg-white min-h-[700px] p-8 shadow-lg">
        {/* Header */}
        <div className="border-b-4 border-purple-600 pb-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-purple-900">UNCIF</h1>
                <p className="text-sm text-purple-700">Uniford National Council of Institutes & Frontliners</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>📧 info@uncif.org</p>
              <p>📞 +91 98765 43210</p>
              <p>🌐 www.uncif.org</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          <div className="text-right text-gray-600 mb-8">
            Date: {new Date(data.date).toLocaleDateString()}
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-800">{data.customNote || 'Your official letterhead content goes here...'}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-600">
            <p>This is an official document from UNCIF - Uniford National Council of Institutes & Frontliners</p>
            <p className="mt-2">New Delhi, India | Empowering Excellence in Education & Innovation</p>
          </div>
        </div>
      </div>
    );

    const renderContent = () => {
      switch (documentType) {
        case 'certificate':
          return renderCertificate();
        case 'id-card':
          return renderIDCard();
        case 'badge':
          return renderBadge();
        case 'letterhead':
          return renderLetterhead();
        case 'lor':
        case 'loa':
          return renderCertificate(); // Use certificate format for letters
        case 'stamp':
          return renderBadge(); // Use badge format for stamps
        default:
          return renderCertificate();
      }
    };

    return (
      <Card className="bg-white border-2 border-purple-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
          <CardTitle className="text-2xl text-amber-900 flex items-center">
            <Eye className="w-6 h-6 mr-2" />
            Live Preview
            <Badge variant="secondary" className="ml-2 bg-amber-200 text-amber-800">
              {format.replace('-', ' ').toUpperCase()}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div ref={ref} className="overflow-hidden">
            {renderContent()}
          </div>
        </CardContent>
      </Card>
    );
  }
);

DocumentPreview.displayName = 'DocumentPreview';

export default DocumentPreview;
