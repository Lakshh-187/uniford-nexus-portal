
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { User, Building, Phone, Calendar, MapPin, FileText } from 'lucide-react';
import { ClearanceData } from '@/pages/LetterOfClearance';

interface ClearanceFormProps {
  formData: ClearanceData;
  onInputChange: (field: keyof ClearanceData, value: any) => void;
  onServiceChange: (service: keyof ClearanceData['requestedServices'], value: boolean | string) => void;
}

const ClearanceForm: React.FC<ClearanceFormProps> = ({
  formData,
  onInputChange,
  onServiceChange
}) => {
  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            Basic Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => onInputChange('date', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="visitDate">Visit Date</Label>
              <Input
                id="visitDate"
                type="date"
                value={formData.visitDate}
                onChange={(e) => onInputChange('visitDate', e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Visit location"
              value={formData.location}
              onChange={(e) => onInputChange('location', e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Frontliner Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            Frontliner Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="frontlinerName">Frontliner Name</Label>
            <Input
              id="frontlinerName"
              placeholder="Enter frontliner's full name"
              value={formData.frontlinerName}
              onChange={(e) => onInputChange('frontlinerName', e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="frontlinerOrganization">Organization/Initiative</Label>
            <Input
              id="frontlinerOrganization"
              placeholder="Enter organization or initiative"
              value={formData.frontlinerOrganization}
              onChange={(e) => onInputChange('frontlinerOrganization', e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="frontlinerContact">Contact Number</Label>
            <Input
              id="frontlinerContact"
              placeholder="Enter contact number"
              value={formData.frontlinerContact}
              onChange={(e) => onInputChange('frontlinerContact', e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Representative Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building className="w-5 h-5 mr-2" />
            Representative Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="representativeName">Representative Name</Label>
            <Input
              id="representativeName"
              placeholder="Enter representative's full name"
              value={formData.representativeName}
              onChange={(e) => onInputChange('representativeName', e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="representativeId">Representative ID/Badge</Label>
              <Input
                id="representativeId"
                placeholder="Enter ID or badge number"
                value={formData.representativeId}
                onChange={(e) => onInputChange('representativeId', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="representativeDepartment">Department/Team</Label>
              <Input
                id="representativeDepartment"
                placeholder="Enter department or team"
                value={formData.representativeDepartment}
                onChange={(e) => onInputChange('representativeDepartment', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Frontliner Response */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Frontliner Response Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Interest in Digital Support</Label>
            <RadioGroup
              value={formData.isInterested}
              onValueChange={(value) => onInputChange('isInterested', value as 'yes' | 'later' | 'no')}
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes, Interested</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="later" id="later" />
                <Label htmlFor="later">Wants to Connect Later</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">Not Interested</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Requested Services</Label>
            <div className="space-y-2 mt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="website"
                  checked={formData.requestedServices.website}
                  onChange={(e) => onServiceChange('website', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="website">Website Creation</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="digitalIdentity"
                  checked={formData.requestedServices.digitalIdentity}
                  onChange={(e) => onServiceChange('digitalIdentity', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="digitalIdentity">Digital Identity Consultation</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="other"
                  checked={formData.requestedServices.other}
                  onChange={(e) => onServiceChange('other', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="other">Other</Label>
              </div>
              
              {formData.requestedServices.other && (
                <Input
                  placeholder="Please specify other services"
                  value={formData.requestedServices.otherText}
                  onChange={(e) => onServiceChange('otherText', e.target.value)}
                  className="ml-6"
                />
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="additionalNotes">Additional Notes or Queries</Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any additional notes or queries from the frontliner"
              value={formData.additionalNotes}
              onChange={(e) => onInputChange('additionalNotes', e.target.value)}
              className="min-h-[80px]"
            />
          </div>

          <div>
            <Label htmlFor="overallFeedback">Overall Feedback/Remarks</Label>
            <Textarea
              id="overallFeedback"
              placeholder="Overall feedback or remarks about the visit"
              value={formData.overallFeedback}
              onChange={(e) => onInputChange('overallFeedback', e.target.value)}
              className="min-h-[80px]"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClearanceForm;
