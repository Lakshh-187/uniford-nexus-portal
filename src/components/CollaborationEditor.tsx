import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Edit, Save, X } from 'lucide-react';

interface CollaborationData {
  partnerName: string;
  introduction: string;
  scope: string[];
  understanding: string[];
  partnerSignatoryName: string;
  partnerSignatoryDesignation: string;
}

interface CollaborationEditorProps {
  data: CollaborationData;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (data: CollaborationData) => void;
  onCancel: () => void;
  onChange: (data: CollaborationData) => void;
}

export const CollaborationEditor: React.FC<CollaborationEditorProps> = ({
  data,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  onChange,
}) => {
  if (!isEditing) {
    return (
      <div className="flex justify-center mb-6">
        <Button onClick={onEdit} className="flex items-center gap-2">
          <Edit className="h-4 w-4" />
          Edit Proposal Content
        </Button>
      </div>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Edit Proposal Content
          <div className="flex gap-2">
            <Button onClick={() => onSave(data)} size="sm" className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save
            </Button>
            <Button onClick={onCancel} variant="outline" size="sm" className="flex items-center gap-2">
              <X className="h-4 w-4" />
              Cancel
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="partnerName">Partner Organization Name</Label>
          <Input
            id="partnerName"
            value={data.partnerName}
            onChange={(e) => onChange({ ...data, partnerName: e.target.value })}
            placeholder="Enter partner organization name"
          />
        </div>

        <div>
          <Label htmlFor="introduction">Introduction Paragraph</Label>
          <Textarea
            id="introduction"
            value={data.introduction}
            onChange={(e) => onChange({ ...data, introduction: e.target.value })}
            rows={4}
            placeholder="Enter introduction text"
          />
        </div>

        <div>
          <Label htmlFor="scope">Scope Points (one per line)</Label>
          <Textarea
            id="scope"
            value={data.scope.join('\n')}
            onChange={(e) => onChange({ ...data, scope: e.target.value.split('\n').filter(line => line.trim()) })}
            rows={6}
            placeholder="Enter scope points, one per line"
          />
        </div>

        <div>
          <Label htmlFor="understanding">Understanding Points (one per line)</Label>
          <Textarea
            id="understanding"
            value={data.understanding.join('\n')}
            onChange={(e) => onChange({ ...data, understanding: e.target.value.split('\n').filter(line => line.trim()) })}
            rows={4}
            placeholder="Enter understanding points, one per line"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="partnerSignatoryName">Partner Signatory Name</Label>
            <Input
              id="partnerSignatoryName"
              value={data.partnerSignatoryName}
              onChange={(e) => onChange({ ...data, partnerSignatoryName: e.target.value })}
              placeholder="Enter signatory name"
            />
          </div>
          <div>
            <Label htmlFor="partnerSignatoryDesignation">Partner Signatory Designation</Label>
            <Input
              id="partnerSignatoryDesignation"
              value={data.partnerSignatoryDesignation}
              onChange={(e) => onChange({ ...data, partnerSignatoryDesignation: e.target.value })}
              placeholder="Enter signatory designation"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};