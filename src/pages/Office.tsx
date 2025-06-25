
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { Building, Users, Calendar, FileText, Phone, Mail } from "lucide-react";
import SEO from "@/components/SEO";

interface OfficeInfo {
  officeName: string;
  officeCode: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  manager: string;
  established: string;
  employees: string;
  department: string;
  status: string;
  description: string;
}

const Office = () => {
  const [officeData, setOfficeData] = useState<OfficeInfo>({
    officeName: '',
    officeCode: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    manager: '',
    established: '',
    employees: '',
    department: '',
    status: 'active',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      const requiredFields = ['officeName', 'officeCode', 'address', 'city', 'manager'];
      const missingFields = requiredFields.filter(field => !officeData[field as keyof OfficeInfo]);
      
      if (missingFields.length > 0) {
        toast({
          title: "Validation Error",
          description: `Please fill in all required fields: ${missingFields.join(', ')}`,
          variant: "destructive",
        });
        return;
      }

      // In a real application, this would call your backend API
      console.log('Office data submitted:', officeData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Success",
        description: "Office information has been saved successfully",
      });

      // Reset form after successful submission
      setOfficeData({
        officeName: '',
        officeCode: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        email: '',
        manager: '',
        established: '',
        employees: '',
        department: '',
        status: 'active',
        description: ''
      });

    } catch (error) {
      console.error('Error submitting office data:', error);
      toast({
        title: "Error",
        description: "Failed to save office information",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof OfficeInfo, value: string) => {
    setOfficeData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <SEO 
        title="Office Management - UNCIF"
        description="Manage office information and administrative details for UNCIF locations"
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Building className="w-10 h-10 text-blue-600" />
            Office Management
          </h1>
          <p className="text-lg text-gray-600">Manage office information and administrative details</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                Office Information Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="officeName">Office Name *</Label>
                    <Input
                      id="officeName"
                      value={officeData.officeName}
                      onChange={(e) => handleInputChange('officeName', e.target.value)}
                      placeholder="Enter office name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="officeCode">Office Code *</Label>
                    <Input
                      id="officeCode"
                      value={officeData.officeCode}
                      onChange={(e) => handleInputChange('officeCode', e.target.value)}
                      placeholder="Enter office code (e.g., UNCIF-001)"
                      required
                    />
                  </div>
                </div>

                <Separator />

                {/* Address Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Address Information
                  </h3>
                  
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={officeData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter street address"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={officeData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Enter city"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={officeData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        placeholder="Enter state"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={officeData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        placeholder="Enter ZIP code"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={officeData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={officeData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Administrative Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Administrative Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="manager">Office Manager *</Label>
                      <Input
                        id="manager"
                        value={officeData.manager}
                        onChange={(e) => handleInputChange('manager', e.target.value)}
                        placeholder="Enter manager name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="established">Date Established</Label>
                      <Input
                        id="established"
                        type="date"
                        value={officeData.established}
                        onChange={(e) => handleInputChange('established', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Input
                        id="employees"
                        type="number"
                        value={officeData.employees}
                        onChange={(e) => handleInputChange('employees', e.target.value)}
                        placeholder="Enter number"
                        min="1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select value={officeData.department} onValueChange={(value) => handleInputChange('department', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="administration">Administration</SelectItem>
                          <SelectItem value="operations">Operations</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="hr">Human Resources</SelectItem>
                          <SelectItem value="it">Information Technology</SelectItem>
                          <SelectItem value="legal">Legal</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="status">Office Status</Label>
                      <Select value={officeData.status} onValueChange={(value) => handleInputChange('status', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                          <SelectItem value="pending">Pending Setup</SelectItem>
                          <SelectItem value="maintenance">Under Maintenance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Office Description</Label>
                  <Textarea
                    id="description"
                    value={officeData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Enter a brief description of the office, its functions, or special notes"
                    rows={4}
                  />
                </div>

                <div className="flex justify-end pt-6">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="px-8"
                  >
                    {isSubmitting ? 'Saving...' : 'Save Office Information'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Office Summary Card */}
          {(officeData.officeName || officeData.officeCode) && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Office Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <strong className="text-sm text-gray-600">Office Name:</strong>
                      <p className="font-medium">{officeData.officeName || 'Not specified'}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-gray-600">Office Code:</strong>
                      <p className="font-medium">{officeData.officeCode || 'Not specified'}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-gray-600">Manager:</strong>
                      <p className="font-medium">{officeData.manager || 'Not specified'}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-gray-600">Status:</strong>
                      <Badge 
                        variant={
                          officeData.status === 'active' ? 'default' :
                          officeData.status === 'inactive' ? 'destructive' :
                          officeData.status === 'pending' ? 'secondary' : 'outline'
                        }
                        className="w-fit"
                      >
                        {officeData.status || 'Not specified'}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-sm text-gray-600">Address:</strong>
                      <p className="font-medium">
                        {officeData.address && officeData.city ? 
                          `${officeData.address}, ${officeData.city}${officeData.state ? `, ${officeData.state}` : ''}${officeData.zipCode ? ` ${officeData.zipCode}` : ''}` : 
                          'Not specified'}
                      </p>
                    </div>
                    <div>
                      <strong className="text-sm text-gray-600">Contact:</strong>
                      <p className="font-medium">
                        {officeData.phone && `Phone: ${officeData.phone}`}
                        {officeData.phone && officeData.email && <br />}
                        {officeData.email && `Email: ${officeData.email}`}
                        {!officeData.phone && !officeData.email && 'Not specified'}
                      </p>
                    </div>
                    <div>
                      <strong className="text-sm text-gray-600">Department:</strong>
                      <p className="font-medium">{officeData.department || 'Not specified'}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-gray-600">Employees:</strong>
                      <p className="font-medium">{officeData.employees || 'Not specified'}</p>
                    </div>
                  </div>
                </div>
                {officeData.description && (
                  <div className="mt-4 pt-4 border-t">
                    <strong className="text-sm text-gray-600">Description:</strong>
                    <p className="mt-1 text-gray-700">{officeData.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Office;
