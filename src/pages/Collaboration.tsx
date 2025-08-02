import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Download, FileText, Users } from 'lucide-react';
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel } from 'docx';

const Collaboration = () => {
  const proposalRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!proposalRef.current) return;
    
    try {
      const canvas = await html2canvas(proposalRef.current, {
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
      
      pdf.save('UNCIF_Collaboration_Proposal.pdf');
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      toast.error('Failed to generate PDF');
      console.error('PDF generation error:', error);
    }
  };

  const downloadWord = () => {
    try {
      const doc = new Document({
        sections: [{
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "🤝 Proposal for Collaboration",
                  bold: true,
                  size: 32,
                }),
              ],
              alignment: AlignmentType.CENTER,
              heading: HeadingLevel.HEADING_1,
              spacing: { after: 400 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Between",
                  size: 24,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "UNCIF (United Nations Council for Innovation & Future)",
                  bold: true,
                  size: 24,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "and",
                  size: 24,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "[Partner Organization Name]",
                  bold: true,
                  size: 24,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 600 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "This proposal is intended to build a friendly and collaborative relationship between UNCIF and [Partner Organization Name]. The goal is to work together on education, innovation, environmental, and student empowerment programs in schools, colleges, and communities — supported through CSR and UNCIF-driven initiatives.",
                  size: 22,
                }),
              ],
              spacing: { after: 400 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "📌 Scope",
                  bold: true,
                  size: 28,
                }),
              ],
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 300 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "• Collaborate on future campaigns, drives, workshops, and educational programs\n• Share ideas and co-create impactful projects aligned with common themes\n• Support each other's initiatives by providing space, volunteers, tools, or training wherever possible\n• Explore joint visibility, recognition, and participation opportunities\n• Build meaningful impact through combined strengths and resources",
                  size: 22,
                }),
              ],
              spacing: { after: 400 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "✨ Understanding",
                  bold: true,
                  size: 28,
                }),
              ],
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 300 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "• This is a non-binding collaboration, formed in mutual goodwill\n• Both parties may contribute as per their capacity and availability\n• Each project or program will have its own discussion and execution plan",
                  size: 22,
                }),
              ],
              spacing: { after: 400 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "📝 Signatories",
                  bold: true,
                  size: 28,
                }),
              ],
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 300 },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "For UNCIF\nName: Lakshay Choudhary\nDesignation: Founder\nSignature: ___________________\nDate: ______________________\n\nFor [Partner Organization Name]\nName: ______________________\nDesignation: __________________\nSignature: ___________________\nDate: ______________________",
                  size: 22,
                }),
              ],
            }),
          ],
        }],
      });

      Packer.toBlob(doc).then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'UNCIF_Collaboration_Proposal.docx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success('Word document downloaded successfully!');
      });
    } catch (error) {
      toast.error('Failed to generate Word document');
      console.error('Word generation error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Collaboration Portal
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download our collaboration proposal to establish partnerships and joint initiatives
          </p>
        </div>

        {/* Download Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            onClick={downloadPDF}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white"
            size="lg"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
          <Button 
            onClick={downloadWord}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            <FileText className="h-4 w-4" />
            Download Word
          </Button>
        </div>

        {/* Proposal Preview */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white">
            <CardContent className="p-0">
              <div 
                ref={proposalRef}
                className="p-12 bg-white text-black min-h-[297mm] w-full"
                style={{ 
                  fontFamily: 'serif',
                  lineHeight: '1.6',
                  fontSize: '16px'
                }}
              >
                {/* Header */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold mb-6 text-gray-800">
                    🤝 Proposal for Collaboration
                  </h1>
                  <div className="text-2xl mb-4 text-gray-700">Between</div>
                  <div className="text-2xl font-semibold mb-4 text-blue-800">
                    UNCIF (United Nations Council for Innovation & Future)
                  </div>
                  <div className="text-2xl mb-4 text-gray-700">and</div>
                  <div className="text-2xl font-semibold text-blue-800 border-b-2 border-blue-200 pb-2 inline-block">
                    [Partner Organization Name]
                  </div>
                </div>

                <Separator className="my-8 bg-gray-300" />

                {/* Introduction */}
                <div className="mb-8 text-justify leading-relaxed text-gray-700">
                  <p className="text-lg">
                    This proposal is intended to build a friendly and collaborative relationship between UNCIF and [Partner Organization Name]. The goal is to work together on education, innovation, environmental, and student empowerment programs in schools, colleges, and communities — supported through CSR and UNCIF-driven initiatives.
                  </p>
                </div>

                {/* Scope Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-800 flex items-center gap-2">
                    📌 Scope
                  </h2>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        Collaborate on future campaigns, drives, workshops, and educational programs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        Share ideas and co-create impactful projects aligned with common themes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        Support each other's initiatives by providing space, volunteers, tools, or training wherever possible
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        Explore joint visibility, recognition, and participation opportunities
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        Build meaningful impact through combined strengths and resources
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Understanding Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-purple-800 flex items-center gap-2">
                    ✨ Understanding
                  </h2>
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        This is a non-binding collaboration, formed in mutual goodwill
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        Both parties may contribute as per their capacity and availability
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        Each project or program will have its own discussion and execution plan
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator className="my-8 bg-gray-300" />

                {/* Signatories Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-2">
                    📝 Signatories
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* UNCIF Signatory */}
                    <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                      <h3 className="text-xl font-semibold mb-4 text-green-800">For UNCIF</h3>
                      <div className="space-y-4">
                        <div>
                          <strong className="text-gray-700">Name:</strong> Lakshay Choudhary
                        </div>
                        <div>
                          <strong className="text-gray-700">Designation:</strong> Founder
                        </div>
                        <div>
                          <strong className="text-gray-700">Signature:</strong> 
                          <div className="border-b-2 border-gray-400 mt-2 h-8"></div>
                        </div>
                        <div>
                          <strong className="text-gray-700">Date:</strong> 
                          <div className="border-b-2 border-gray-400 mt-2 h-8"></div>
                        </div>
                      </div>
                    </div>

                    {/* Partner Organization Signatory */}
                    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                      <h3 className="text-xl font-semibold mb-4 text-blue-800">For [Partner Organization Name]</h3>
                      <div className="space-y-4">
                        <div>
                          <strong className="text-gray-700">Name:</strong> 
                          <div className="border-b-2 border-gray-400 mt-2 h-8"></div>
                        </div>
                        <div>
                          <strong className="text-gray-700">Designation:</strong> 
                          <div className="border-b-2 border-gray-400 mt-2 h-8"></div>
                        </div>
                        <div>
                          <strong className="text-gray-700">Signature:</strong> 
                          <div className="border-b-2 border-gray-400 mt-2 h-8"></div>
                        </div>
                        <div>
                          <strong className="text-gray-700">Date:</strong> 
                          <div className="border-b-2 border-gray-400 mt-2 h-8"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-12 pt-8 border-t-2 border-gray-200">
                  <p className="text-sm text-gray-500">
                    This document represents a mutual understanding between the parties for collaborative initiatives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;