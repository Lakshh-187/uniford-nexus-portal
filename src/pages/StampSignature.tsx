
import React, { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Download, Move, Trash2, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import AuthenticationModal from '@/components/AuthenticationModal';
import SEO from '@/components/SEO';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface DragItem {
  id: string;
  type: 'stamp' | 'signature';
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

const StampSignature = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(true);
  const [documentImage, setDocumentImage] = useState<string | null>(null);
  const [dragItems, setDragItems] = useState<DragItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const stampInputRef = useRef<HTMLInputElement>(null);
  const signatureInputRef = useRef<HTMLInputElement>(null);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };

  const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) =>
        setDocumentImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleStampUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newStamp: DragItem = {
          id: `stamp-${Date.now()}`,
          type: 'stamp',
          src: e.target?.result as string,
          x: 100,
          y: 100,
          width: 100,
          height: 100,
          rotation: 0
        };
        setDragItems(prev => [...prev, newStamp]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignatureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newSignature: DragItem = {
          id: `signature-${Date.now()}`,
          type: 'signature',
          src: e.target?.result as string,
          x: 150,
          y: 150,
          width: 150,
          height: 80,
          rotation: 0
        };
        setDragItems(prev => [...prev, newSignature]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e: React.MouseEvent, itemId: string) => {
    e.preventDefault();
    setSelectedItem(itemId);
    setIsDragging(true);
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const item = dragItems.find(item => item.id === itemId);
      if (item) {
        setDragOffset({
          x: e.clientX - rect.left - item.x,
          y: e.clientY - rect.top - item.y
        });
      }
    }
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging && selectedItem && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const newX = e.clientX - rect.left - dragOffset.x;
      const newY = e.clientY - rect.top - dragOffset.y;
      
      setDragItems(prev => prev.map(item => 
        item.id === selectedItem 
          ? { ...item, x: Math.max(0, newX), y: Math.max(0, newY) }
          : item
      ));
    }
  }, [isDragging, selectedItem, dragOffset]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setSelectedItem(null);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const resizeItem = (itemId: string, newWidth: number, newHeight: number) => {
    setDragItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, width: Math.max(20, newWidth), height: Math.max(20, newHeight) }
        : item
    ));
  };

  const rotateItem = (itemId: string, angle: number) => {
    setDragItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, rotation: (item.rotation + angle) % 360 }
        : item
    ));
  };

  const deleteItem = (itemId: string) => {
    setDragItems(prev => prev.filter(item => item.id !== itemId));
    setSelectedItem(null);
  };

  const handleDownload = async (format: 'pdf' | 'png' | 'jpg') => {
    if (!canvasRef.current) return;
    
    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(canvasRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      if (format === 'pdf') {
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`UNCIF_Stamped_Document.pdf`);
      } else {
        const link = document.createElement('a');
        link.download = `UNCIF_Stamped_Document.${format}`;
        link.href = canvas.toDataURL(`image/${format}`, 1.0);
        link.click();
      }
      
      console.log(`Document downloaded successfully as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <SEO 
          title="Stamp & Signature Tool - UNCIF"
          description="Professional document stamping and signature tool for UNCIF members"
          keywords="UNCIF stamp, signature tool, document processing, digital stamping"
          canonical="/stamp-signature"
        />
        <AuthenticationModal
          isOpen={showAuthModal}
          onSuccess={handleAuthentication}
          onClose={() => setShowAuthModal(false)}
          title="Stamp & Signature Tool"
        />
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Stamp & Signature Tool - UNCIF"
        description="Professional document stamping and signature tool for UNCIF members"
        keywords="UNCIF stamp, signature tool, document processing, digital stamping"
        canonical="/stamp-signature"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Modern Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
            <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rotate-45"></div>
            <div className="absolute bottom-20 left-32 w-12 h-12 border border-white/40 rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              UNCIF Stamp & Signature Studio
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Advanced Document Processing & Digital Authentication Platform
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Control Panel */}
            <Card className="lg:col-span-1 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <Upload className="w-6 h-6 mr-3" />
                  Control Panel
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Document Upload */}
                <div className="space-y-3">
                  <Label className="text-white text-lg font-semibold">Upload Document</Label>
                  <div className="relative">
                    <Input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleDocumentUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Choose Document
                    </Button>
                  </div>
                </div>

                {/* Stamp Upload */}
                <div className="space-y-3">
                  <Label className="text-white text-lg font-semibold">Add Stamp</Label>
                  <div className="relative">
                    <Input
                      ref={stampInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleStampUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <Button 
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3"
                      onClick={() => stampInputRef.current?.click()}
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Upload Stamp
                    </Button>
                  </div>
                </div>

                {/* Signature Upload */}
                <div className="space-y-3">
                  <Label className="text-white text-lg font-semibold">Add Signature</Label>
                  <div className="relative">
                    <Input
                      ref={signatureInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleSignatureUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3"
                      onClick={() => signatureInputRef.current?.click()}
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Upload Signature
                    </Button>
                  </div>
                </div>

                {/* Item Controls */}
                {selectedItem && (
                  <div className="space-y-3 p-4 bg-gray-700 rounded-lg border border-blue-400">
                    <Label className="text-blue-200 text-lg font-semibold">Selected Item Controls</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        size="sm"
                        onClick={() => resizeItem(selectedItem, 
                          dragItems.find(item => item.id === selectedItem)?.width! + 20,
                          dragItems.find(item => item.id === selectedItem)?.height! + 20
                        )}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => resizeItem(selectedItem, 
                          dragItems.find(item => item.id === selectedItem)?.width! - 20,
                          dragItems.find(item => item.id === selectedItem)?.height! - 20
                        )}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <ZoomOut className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => rotateItem(selectedItem, 90)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => deleteItem(selectedItem)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Download Options */}
                <div className="space-y-3">
                  <Label className="text-white text-lg font-semibold">Download Options</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {['pdf', 'png', 'jpg'].map((format) => (
                      <Button
                        key={format}
                        onClick={() => handleDownload(format as any)}
                        disabled={isDownloading || !documentImage}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white disabled:opacity-50"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {isDownloading ? 'Processing...' : format.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Canvas Area */}
            <Card className="lg:col-span-2 bg-white border-2 border-blue-500 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <Move className="w-6 h-6 mr-3" />
                  Document Canvas
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div 
                  ref={canvasRef}
                  className="relative min-h-[600px] bg-gray-100 overflow-hidden"
                  style={{ cursor: isDragging ? 'grabbing' : 'default' }}
                >
                  {/* Document Background */}
                  {documentImage ? (
                    <img 
                      src={documentImage} 
                      alt="Document" 
                      className="w-full h-auto object-contain"
                      draggable={false}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Upload className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                        <p className="text-xl font-semibold">Upload a document to get started</p>
                        <p className="text-sm mt-2">Supported formats: JPG, PNG, PDF</p>
                      </div>
                    </div>
                  )}

                  {/* Draggable Items */}
                  {dragItems.map((item) => (
                    <div
                      key={item.id}
                      className={`absolute cursor-move border-2 ${
                        selectedItem === item.id ? 'border-blue-500' : 'border-transparent'
                      } hover:border-blue-300 transition-colors`}
                      style={{
                        left: item.x,
                        top: item.y,
                        width: item.width,
                        height: item.height,
                        transform: `rotate(${item.rotation}deg)`,
                        zIndex: selectedItem === item.id ? 10 : 1
                      }}
                      onMouseDown={(e) => handleMouseDown(e, item.id)}
                    >
                      <img 
                        src={item.src} 
                        alt={item.type}
                        className="w-full h-full object-contain pointer-events-none"
                        draggable={false}
                      />
                      {selectedItem === item.id && (
                        <div className="absolute -bottom-8 left-0 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                          {item.type} - Drag to move
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default StampSignature;
