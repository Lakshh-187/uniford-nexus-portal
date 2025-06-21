
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, User, Building, Mail, Phone, MapPin } from 'lucide-react';
import { DocumentData } from '@/pages/AdvancedDocumentGenerator';

interface DocumentFormProps {
  formData: DocumentData;
  onInputChange: (field: keyof DocumentData, value: string) => void;
  documentType: string;
}

interface FieldConfig {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
}

const DocumentForm: React.FC<DocumentFormProps> = ({
  formData,
  onInputChange,
  documentType
}) => {
  const getFieldsForDocumentType = () => {
    const baseFields = ['name', 'title', 'organization', 'date', 'purpose'];
    
    switch (documentType) {
      case 'id-card':
        return [...baseFields, 'email', 'phone', 'department', 'certificateNumber', 'validUntil'];
      case 'certificate':
        return [...baseFields, 'customNote', 'certificateNumber', 'authority'];
      case 'letterhead':
        return ['date', 'customNote'];
      case 'lor':
      case 'loa':
        return [...baseFields, 'customNote', 'email', 'phone'];
      default:
        return [...baseFields, 'customNote'];
    }
  };

  const renderField = (fieldName: keyof DocumentData) => {
    const fieldConfig: Record<keyof DocumentData, FieldConfig> = {
      name: { label: 'Full Name', icon: User, placeholder: 'Enter recipient name' },
      title: { label: 'Title/Position', icon: User, placeholder: 'e.g., CEO, Director, Professor' },
      organization: { label: 'Organization', icon: Building, placeholder: 'Enter organization name' },
      date: { label: 'Date', icon: Calendar, type: 'date' },
      purpose: { label: 'Purpose/Achievement', icon: User, placeholder: 'Achievement or purpose' },
      email: { label: 'Email Address', icon: Mail, placeholder: 'Enter email address' },
      phone: { label: 'Phone Number', icon: Phone, placeholder: 'Enter phone number' },
      address: { label: 'Address', icon: MapPin, placeholder: 'Enter address' },
      department: { label: 'Department', icon: Building, placeholder: 'Enter department' },
      certificateNumber: { label: 'Certificate/ID Number', icon: User, placeholder: 'Auto-generated if empty' },
      validUntil: { label: 'Valid Until', icon: Calendar, type: 'date' },
      authority: { label: 'Issuing Authority', icon: Building, placeholder: 'Issuing authority' },
      customNote: { label: 'Additional Notes', icon: User, placeholder: 'Enter additional information...', multiline: true }
    };

    const config = fieldConfig[fieldName];
    if (!config) return null;

    const IconComponent = config.icon;

    return (
      <div key={fieldName} className="space-y-2">
        <Label htmlFor={fieldName} className="flex items-center text-white">
          <IconComponent className="w-4 h-4 mr-2" />
          {config.label}
        </Label>
        {config.multiline ? (
          <Textarea
            id={fieldName}
            value={formData[fieldName]}
            onChange={(e) => onInputChange(fieldName, e.target.value)}
            placeholder={config.placeholder || ''}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[100px]"
          />
        ) : (
          <div className="relative">
            <Input
              id={fieldName}
              type={config.type || 'text'}
              value={formData[fieldName]}
              onChange={(e) => onInputChange(fieldName, e.target.value)}
              placeholder={config.placeholder || ''}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            {config.type === 'date' && (
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-white/60" />
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <User className="w-6 h-6 mr-2" />
          Document Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {getFieldsForDocumentType().map(field => renderField(field as keyof DocumentData))}
      </CardContent>
    </Card>
  );
};

export default DocumentForm;
