import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Download, 
  FileText, 
  Building, 
  Calendar, 
  DollarSign,
  Percent,
  Gift,
  Code,
  Globe,
  ShoppingCart,
  Receipt,
  CheckCircle
} from 'lucide-react';
import SEO from '@/components/SEO';
import { useToast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const InvoiceGenerator = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [invoiceData, setInvoiceData] = useState({
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    projectName: '',
    totalPages: '',
    functionalityAdded: '',
    format: '',
    basePrice: '',
    gstRate: '18',
    relaxationAmount: '',
    additionalNotes: ''
  });

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getInvoiceNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `UNCIF-${year}${month}-${random}`;
  };

  const calculateTotal = () => {
    const basePrice = parseFloat(invoiceData.basePrice) || 0;
    const gstRate = parseFloat(invoiceData.gstRate) || 0;
    const relaxationAmount = parseFloat(invoiceData.relaxationAmount) || 0;
    
    const gstAmount = (basePrice * gstRate) / 100;
    const subtotal = basePrice + gstAmount;
    const total = subtotal - relaxationAmount;
    
    return {
      basePrice,
      gstAmount,
      subtotal,
      relaxationAmount,
      total: Math.max(0, total)
    };
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'coded': return <Code className="w-4 h-4" />;
      case 'wordpress': return <Globe className="w-4 h-4" />;
      case 'shopify': return <ShoppingCart className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'coded': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'wordpress': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'shopify': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const downloadInvoice = async () => {
    if (!invoiceData.clientName || !invoiceData.basePrice) {
      toast({
        title: "Missing Information",
        description: "Please fill in client name and base price at minimum.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const invoiceElement = document.getElementById('invoice-preview');
      if (!invoiceElement) return;

      const canvas = await html2canvas(invoiceElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`UNCIF-Invoice-${getInvoiceNumber()}.pdf`);
      
      toast({
        title: "Invoice Downloaded",
        description: "Your invoice has been successfully generated and downloaded.",
      });
    } catch (error) {
      console.error('Error generating invoice:', error);
      toast({
        title: "Download Failed",
        description: "There was an error generating your invoice. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const calculations = calculateTotal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <SEO 
        title="Invoice Generator | UNCIF"
        description="Generate professional invoices for your UNCIF projects with automated calculations and download functionality."
        keywords="invoice generator, billing, UNCIF, project invoicing"
      />

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              BILLING PORTAL
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Professional Invoice Generator
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Create professional invoices for your UNCIF projects with automated GST calculations 
              and instant download functionality.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Invoice Form */}
          <Card className="border-indigo-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="w-5 h-5" />
                Invoice Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Client Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Client Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="clientName">Client Name *</Label>
                    <Input
                      id="clientName"
                      value={invoiceData.clientName}
                      onChange={(e) => handleInputChange('clientName', e.target.value)}
                      placeholder="Enter client name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="clientEmail">Client Email</Label>
                    <Input
                      id="clientEmail"
                      type="email"
                      value={invoiceData.clientEmail}
                      onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                      placeholder="client@example.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="clientAddress">Client Address</Label>
                  <Textarea
                    id="clientAddress"
                    value={invoiceData.clientAddress}
                    onChange={(e) => handleInputChange('clientAddress', e.target.value)}
                    placeholder="Enter client address"
                    rows={3}
                  />
                </div>
              </div>

              <Separator />

              {/* Project Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Project Information</h3>
                <div>
                  <Label htmlFor="projectName">Project Name</Label>
                  <Input
                    id="projectName"
                    value={invoiceData.projectName}
                    onChange={(e) => handleInputChange('projectName', e.target.value)}
                    placeholder="Enter project name"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="totalPages">Total Pages Created</Label>
                    <Input
                      id="totalPages"
                      type="number"
                      value={invoiceData.totalPages}
                      onChange={(e) => handleInputChange('totalPages', e.target.value)}
                      placeholder="e.g., 15"
                    />
                  </div>
                  <div>
                    <Label htmlFor="format">Development Format</Label>
                    <Select value={invoiceData.format} onValueChange={(value) => handleInputChange('format', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="coded">Custom Coded</SelectItem>
                        <SelectItem value="wordpress">WordPress</SelectItem>
                        <SelectItem value="shopify">Shopify</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="functionalityAdded">Functionality Added</Label>
                  <Textarea
                    id="functionalityAdded"
                    value={invoiceData.functionalityAdded}
                    onChange={(e) => handleInputChange('functionalityAdded', e.target.value)}
                    placeholder="Describe the functionality added to the project"
                    rows={3}
                  />
                </div>
              </div>

              <Separator />

              {/* Pricing Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Pricing Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="basePrice">Base Price (₹) *</Label>
                    <Input
                      id="basePrice"
                      type="number"
                      value={invoiceData.basePrice}
                      onChange={(e) => handleInputChange('basePrice', e.target.value)}
                      placeholder="Enter base price"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gstRate">GST Rate (%)</Label>
                    <Input
                      id="gstRate"
                      type="number"
                      value={invoiceData.gstRate}
                      onChange={(e) => handleInputChange('gstRate', e.target.value)}
                      placeholder="18"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="relaxationAmount">Relaxation Amount (₹)</Label>
                  <Input
                    id="relaxationAmount"
                    type="number"
                    value={invoiceData.relaxationAmount}
                    onChange={(e) => handleInputChange('relaxationAmount', e.target.value)}
                    placeholder="Enter any discount amount"
                  />
                </div>
                <div>
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    value={invoiceData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    placeholder="Any additional notes or terms"
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invoice Preview */}
          <div className="space-y-6">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Invoice Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div id="invoice-preview" className="bg-white p-8 rounded-lg border">
                  {/* Invoice Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">U</span>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">UNCIF</div>
                          <div className="text-sm text-gray-600">Uniford National Council</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>New Delhi, India</p>
                        <p>info@uncif.org</p>
                        <p>+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">INVOICE</h2>
                      <div className="text-sm text-gray-600">
                        <p><strong>Invoice #:</strong> {getInvoiceNumber()}</p>
                        <p><strong>Date:</strong> {getCurrentDate()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bill To Section */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Bill To:</h3>
                    <div className="text-gray-700">
                      <p className="font-medium">{invoiceData.clientName || 'Client Name'}</p>
                      {invoiceData.clientEmail && <p>{invoiceData.clientEmail}</p>}
                      {invoiceData.clientAddress && (
                        <p className="whitespace-pre-line">{invoiceData.clientAddress}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      {invoiceData.projectName && (
                        <div className="flex items-center gap-2">
                          <strong>Project:</strong> {invoiceData.projectName}
                        </div>
                      )}
                      {invoiceData.totalPages && (
                        <div className="flex items-center gap-2">
                          <strong>Total Pages:</strong> {invoiceData.totalPages}
                        </div>
                      )}
                      {invoiceData.format && (
                        <div className="flex items-center gap-2">
                          <strong>Format:</strong>
                          <Badge className={`${getFormatColor(invoiceData.format)} ml-2`}>
                            <div className="flex items-center gap-1">
                              {getFormatIcon(invoiceData.format)}
                              {invoiceData.format.charAt(0).toUpperCase() + invoiceData.format.slice(1)}
                            </div>
                          </Badge>
                        </div>
                      )}
                      {invoiceData.functionalityAdded && (
                        <div>
                          <strong>Functionality Added:</strong>
                          <p className="mt-1 text-gray-700 whitespace-pre-line">{invoiceData.functionalityAdded}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Invoice Items */}
                  <div className="mb-8">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Description</th>
                          <th className="border border-gray-300 p-3 text-right">Amount (₹)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Project Development Services</td>
                          <td className="border border-gray-300 p-3 text-right">
                            {calculations.basePrice.toLocaleString('en-IN')}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">GST ({invoiceData.gstRate}%)</td>
                          <td className="border border-gray-300 p-3 text-right">
                            {calculations.gstAmount.toLocaleString('en-IN')}
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">Subtotal</td>
                          <td className="border border-gray-300 p-3 text-right font-medium">
                            ₹{calculations.subtotal.toLocaleString('en-IN')}
                          </td>
                        </tr>
                        {calculations.relaxationAmount > 0 && (
                          <tr>
                            <td className="border border-gray-300 p-3 text-green-600">
                              <div className="flex items-center gap-2">
                                <Gift className="w-4 h-4" />
                                Organization Relaxation
                              </div>
                            </td>
                            <td className="border border-gray-300 p-3 text-right text-green-600">
                              -₹{calculations.relaxationAmount.toLocaleString('en-IN')}
                            </td>
                          </tr>
                        )}
                        <tr className="bg-indigo-600 text-white">
                          <td className="border border-gray-300 p-3 font-bold text-lg">Total Amount</td>
                          <td className="border border-gray-300 p-3 text-right font-bold text-lg">
                            ₹{calculations.total.toLocaleString('en-IN')}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Additional Notes */}
                  {invoiceData.additionalNotes && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Notes:</h3>
                      <p className="text-gray-700 whitespace-pre-line">{invoiceData.additionalNotes}</p>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="text-center text-sm text-gray-600 border-t pt-4">
                    <p>Thank you for your business!</p>
                    <p className="mt-2">This is a digitally generated invoice from UNCIF</p>
                  </div>
                </div>

                {/* Download Button */}
                <div className="mt-6">
                  <Button 
                    onClick={downloadInvoice}
                    disabled={isGenerating}
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Generating Invoice...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download Invoice PDF
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;