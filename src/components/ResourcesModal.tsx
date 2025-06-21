
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Shield, X } from 'lucide-react';

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResourcesModal: React.FC<ResourcesModalProps> = ({ isOpen, onClose }) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key === 'UNCIF01') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Invalid access key. Contact UNCIF administration for official member access.');
    }
  };

  const resources = [
    { name: 'UNCIF Branding Guidelines', type: 'PDF', size: '2.5 MB' },
    { name: 'Collaboration Framework', type: 'DOCX', size: '1.8 MB' },
    { name: 'Official Templates Package', type: 'ZIP', size: '15.2 MB' },
    { name: 'Member Handbook 2024', type: 'PDF', size: '4.1 MB' },
    { name: 'Certificate Templates', type: 'ZIP', size: '8.7 MB' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl mx-4 bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mr-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl text-gray-900">Resources & Downloads</CardTitle>
              <p className="text-gray-600">Official members only</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {!authenticated ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Shield className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Official Members Only</h3>
                <p className="text-gray-600">Please enter your member access key to view and download official UNCIF resources.</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="resourceKey">Member Access Key</Label>
                <Input
                  id="resourceKey"
                  type="password"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="Enter your official member key"
                  className="border-purple-200 focus:border-purple-400"
                />
              </div>
              
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}
              
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Access Resources
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-medium">✓ Access granted! Download official UNCIF resources below.</p>
              </div>
              
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div>
                      <h4 className="font-medium text-gray-900">{resource.name}</h4>
                      <p className="text-sm text-gray-600">{resource.type} • {resource.size}</p>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourcesModal;
