
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Download, Share2, Mail, MessageCircle, Linkedin, 
  FileText, Image, FileIcon, Globe
} from 'lucide-react';

interface ActionPanelProps {
  onDownload: (format: 'pdf' | 'png' | 'jpg' | 'docx') => void;
  onShare: (method: 'email' | 'whatsapp' | 'linkedin') => void;
  documentType: string;
}

const ActionPanel: React.FC<ActionPanelProps> = ({
  onDownload,
  onShare,
  documentType
}) => {
  const downloadFormats = [
    { format: 'pdf', label: 'PDF', icon: FileText, color: 'bg-red-600 hover:bg-red-700', description: 'High-quality document' },
    { format: 'png', label: 'PNG', icon: Image, color: 'bg-blue-600 hover:bg-blue-700', description: 'High-resolution image' },
    { format: 'jpg', label: 'JPG', icon: Image, color: 'bg-green-600 hover:bg-green-700', description: 'Compressed image' },
    { format: 'docx', label: 'DOCX', icon: FileIcon, color: 'bg-purple-600 hover:bg-purple-700', description: 'Editable document' }
  ];

  const shareOptions = [
    { method: 'email', label: 'Email', icon: Mail, color: 'bg-gray-600 hover:bg-gray-700' },
    { method: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: 'bg-green-600 hover:bg-green-700' },
    { method: 'linkedin', label: 'LinkedIn', icon: Linkedin, color: 'bg-blue-600 hover:bg-blue-700' }
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Download className="w-6 h-6 mr-2" />
          Export & Share Options
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Download Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Download Formats
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {downloadFormats.map(({ format, label, icon: Icon, color, description }) => (
              <Button
                key={format}
                onClick={() => onDownload(format as any)}
                className={`${color} text-white h-auto p-4 flex flex-col items-center space-y-2`}
              >
                <Icon className="w-6 h-6" />
                <div className="text-center">
                  <div className="font-semibold">{label}</div>
                  <div className="text-xs opacity-90">{description}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Share Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Share2 className="w-5 h-5 mr-2" />
            Share Options
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {shareOptions.map(({ method, label, icon: Icon, color }) => (
              <Button
                key={method}
                onClick={() => onShare(method as any)}
                variant="outline"
                className={`${color} border-white/20 text-white h-auto p-4 flex flex-col items-center space-y-2`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </Button>
            ))}
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            Quick Actions
          </h3>
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
              onClick={() => navigator.clipboard.writeText(`Check out my ${documentType} from UNCIF!`)}
            >
              Copy Share Link
            </Button>
            <Button
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
              onClick={() => window.print()}
            >
              Print Document
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionPanel;
