import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Users } from 'lucide-react';
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel } from 'docx';
import { CollaborationEditor } from '@/components/CollaborationEditor';
import { CollaborationPreview } from '@/components/CollaborationPreview';

interface CollaborationData {
  partnerName: string;
  introduction: string;
  scope: string[];
  understanding: string[];
  partnerSignatoryName: string;
  partnerSignatoryDesignation: string;
}

const Collaboration = () => {
  const proposalRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [collaborationData, setCollaborationData] = useState<CollaborationData>({
    partnerName: '[Partner Organization Name]',
    introduction: 'This proposal is intended to build a friendly and collaborative relationship between UNCIF and [Partner Organization Name]. The goal is to work together on education, innovation, environmental, and student empowerment programs in schools, colleges, and communities — supported through CSR and UNCIF-driven initiatives.',
    scope: [
      'Collaborate on future campaigns, drives, workshops, and educational programs',
      'Share ideas and co-create impactful projects aligned with common themes',
      'Support each other\'s initiatives by providing space, volunteers, tools, or training wherever possible',
      'Explore joint visibility, recognition, and participation opportunities',
      'Build meaningful impact through combined strengths and resources'
    ],
    understanding: [
      'This is a non-binding collaboration, formed in mutual goodwill',
      'Both parties may contribute as per their capacity and availability',
      'Each project or program will have its own discussion and execution plan'
    ],
    partnerSignatoryName: '',
    partnerSignatoryDesignation: ''
  });

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
                  text: `UNCIF & ${collaborationData.partnerName}`,
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
                  text: collaborationData.introduction,
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
                  text: collaborationData.scope.map(item => `• ${item}`).join('\n'),
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
                  text: collaborationData.understanding.map(item => `• ${item}`).join('\n'),
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
                  text: `For UNCIF\nName: Lakshay Choudhary\nDesignation: Founder\nSignature: ___________________\nDate: ______________________\n\nFor ${collaborationData.partnerName}\nName: ${collaborationData.partnerSignatoryName || '______________________'}\nDesignation: ${collaborationData.partnerSignatoryDesignation || '__________________'}\nSignature: ___________________\nDate: ______________________`,
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

        {/* Editor */}
        <div className="max-w-4xl mx-auto">
          <CollaborationEditor
            data={collaborationData}
            isEditing={isEditing}
            onEdit={() => setIsEditing(true)}
            onSave={(data) => {
              setCollaborationData(data);
              setIsEditing(false);
              toast.success('Proposal content updated successfully!');
            }}
            onCancel={() => setIsEditing(false)}
            onChange={setCollaborationData}
          />
        </div>

        {/* Proposal Preview */}
        <div className="max-w-4xl mx-auto">
          <CollaborationPreview 
            data={collaborationData}
            forwardRef={proposalRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;