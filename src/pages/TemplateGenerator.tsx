import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';
import { 
  FileText, 
  Download, 
  Share2, 
  Mail, 
  MessageCircle, 
  Linkedin,
  Eye,
  Palette,
  Zap,
  Shield
} from 'lucide-react';

interface TemplateData {
  title: string;
  date: string;
  content: string;
  footerNote: string;
}

const TemplateGenerator = () => {
  const [templateData, setTemplateData] = useState<TemplateData>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    content: '',
    footerNote: ''
  });
  const [activeTemplate, setActiveTemplate] = useState('letterhead');
  const { toast } = useToast();

  const templateTypes = [
    { id: 'letterhead', name: 'Official Letterhead', icon: FileText },
    { id: 'advisory', name: 'Advisory Notice', icon: Shield },
    { id: 'notice', name: 'General Notice', icon: Zap }
  ];

  const handleInputChange = (field: keyof TemplateData, value: string) => {
    setTemplateData(prev => ({ ...prev, [field]: value }));
  };

  const handleExport = (format: 'pdf' | 'png' | 'jpg') => {
    toast({
      title: `Exporting as ${format.toUpperCase()}`,
      description: "Your document will be downloaded shortly.",
    });
    // Mock export functionality
  };

  const handleShare = (platform: 'email' | 'whatsapp' | 'linkedin') => {
    toast({
      title: `Sharing via ${platform}`,
      description: "Share link has been generated.",
    });
    // Mock share functionality
  };

  return (
    <>
      <SEO 
        title="Digital Letterhead & Template Generator"
        description="Create professional letterheads, advisories, and notices with UNCIF's AI-powered template engine. Generate official documents for institutes, export in multiple formats, and share instantly across platforms."
        keywords="UNCIF letterhead generator, Uniford templates, digital letterhead, official documents, AI template generator, institutes letterhead, CSR grants templates, tender documents, Pitchburg, Un-pitch, Uniwave"
        canonical="/template-generator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <Palette className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">AI-Powered Document Generator</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              UNCIF Digital Letterhead Generator
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Create professional letterheads, advisories, and notices with our advanced template engine. 
              Export in multiple formats and share instantly across platforms.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-lg">
                <FileText className="w-5 h-5 mr-2" />
                <span>Multiple Formats</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-lg">
                <Shield className="w-5 h-5 mr-2" />
                <span>Official Templates</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-lg">
                <Zap className="w-5 h-5 mr-2" />
                <span>Instant Generation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-4">Document Creator</CardTitle>
                  
                  {/* Template Type Selector */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {templateTypes.map((type) => (
                      <Button
                        key={type.id}
                        variant={activeTemplate === type.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveTemplate(type.id)}
                        className={`${
                          activeTemplate === type.id 
                            ? 'bg-purple-600 hover:bg-purple-700' 
                            : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                        }`}
                      >
                        <type.icon className="w-4 h-4 mr-2" />
                        {type.name}
                      </Button>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-white">Document Title</Label>
                    <Input
                      id="title"
                      value={templateData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="Enter document title..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-white">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={templateData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content" className="text-white">Content</Label>
                    <Textarea
                      id="content"
                      value={templateData.content}
                      onChange={(e) => handleInputChange('content', e.target.value)}
                      placeholder="Enter your content here..."
                      className="min-h-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="footer" className="text-white">Footer Note</Label>
                    <Input
                      id="footer"
                      value={templateData.footerNote}
                      onChange={(e) => handleInputChange('footerNote', e.target.value)}
                      placeholder="Optional footer note..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Live Preview & Actions */}
              <div className="space-y-6">
                {/* Preview Card */}
                <Card className="bg-white border-gray-200">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center text-gray-900">
                      <Eye className="w-5 h-5 mr-2" />
                      Live Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 p-6 bg-gray-50 rounded-lg min-h-[400px]">
                      {/* UNCIF Header */}
                      <div className="text-center border-b border-gray-300 pb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-xl">U</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">UNCIF</h2>
                        <p className="text-sm text-purple-600">Uniford National Council for Innovation Framework</p>
                      </div>
                      
                      {/* Document Content */}
                      <div className="space-y-4">
                        {templateData.title && (
                          <h3 className="text-lg font-bold text-center text-gray-900">
                            {templateData.title}
                          </h3>
                        )}
                        
                        {templateData.date && (
                          <p className="text-sm text-gray-600 text-right">
                            Date: {new Date(templateData.date).toLocaleDateString()}
                          </p>
                        )}
                        
                        {templateData.content && (
                          <div className="prose prose-sm text-gray-700 whitespace-pre-wrap">
                            {templateData.content}
                          </div>
                        )}
                        
                        {templateData.footerNote && (
                          <p className="text-xs text-gray-500 mt-8 pt-4 border-t border-gray-200">
                            {templateData.footerNote}
                          </p>
                        )}
                      </div>
                      
                      {/* Auto-included elements */}
                      <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-400">
                        <div className="flex justify-between items-center">
                          <span>QR Code: [Verification]</span>
                          <span>Digital Signature Space</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Export Actions */}
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Export & Share</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Export Buttons */}
                    <div>
                      <Label className="text-white mb-2 block">Export Format</Label>
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          onClick={() => handleExport('pdf')}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          PDF
                        </Button>
                        <Button 
                          onClick={() => handleExport('png')}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          PNG
                        </Button>
                        <Button 
                          onClick={() => handleExport('jpg')}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          JPG
                        </Button>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/20" />
                    
                    {/* Share Buttons */}
                    <div>
                      <Label className="text-white mb-2 block">Share</Label>
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          onClick={() => handleShare('email')}
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                        <Button 
                          onClick={() => handleShare('whatsapp')}
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </Button>
                        <Button 
                          onClick={() => handleShare('linkedin')}
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TemplateGenerator;
