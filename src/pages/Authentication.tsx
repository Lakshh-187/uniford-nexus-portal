
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, CheckCircle, XCircle, User, Shield } from 'lucide-react';

const Authentication = () => {
  const [uid, setUid] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    isValid: boolean;
    name: string;
    type: string;
    institute: string;
    status: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerification = async () => {
    if (!uid.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock verification logic
      const mockData = {
        'UNCIF001': { name: 'Dr. Sarah Johnson', type: 'Member Institute', institute: 'Harvard Business School', status: 'Active' },
        'UNCIF002': { name: 'Prof. Michael Chen', type: 'Scholar', institute: 'MIT Technology Institute', status: 'Active' },
        'UNCIF003': { name: 'Dr. Priya Sharma', type: 'Frontliner', institute: 'Indian Institute of Science', status: 'Active' },
        'UNCIF404': { name: 'John Doe', type: 'Invalid', institute: 'Unknown', status: 'Inactive' },
      };

      const result = mockData[uid as keyof typeof mockData];
      
      if (result && result.status === 'Active') {
        setVerificationResult({
          isValid: true,
          name: result.name,
          type: result.type,
          institute: result.institute,
          status: result.status,
        });
      } else {
        setVerificationResult({
          isValid: false,
          name: '',
          type: '',
          institute: '',
          status: 'Not Found',
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setUid('');
    setVerificationResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
            DIGITAL AUTHENTICATION
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Verify UNCIF Members
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter the unique identifier (UID) to verify members, scholars, and frontliners 
            in the UNCIF network.
          </p>
        </div>

        {/* Authentication Form */}
        <Card className="max-w-2xl mx-auto mb-8 border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2 text-xl">
              <Shield className="w-6 h-6" />
              <span>Identity Verification System</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Unique Identifier (UID) *
                </label>
                <div className="flex gap-3">
                  <Input
                    placeholder="Enter UID (e.g., UNCIF001)"
                    value={uid}
                    onChange={(e) => setUid(e.target.value.toUpperCase())}
                    className="flex-1 border-purple-200 focus:border-purple-500 text-lg"
                    onKeyPress={(e) => e.key === 'Enter' && handleVerification()}
                  />
                  <Button
                    onClick={handleVerification}
                    disabled={!uid.trim() || isLoading}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Verifying</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Search className="w-4 h-4" />
                        <span>Verify</span>
                      </div>
                    )}
                  </Button>
                </div>
              </div>

              {/* Demo UIDs */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-purple-700 mb-2">Demo UIDs for testing:</p>
                <div className="flex flex-wrap gap-2">
                  {['UNCIF001', 'UNCIF002', 'UNCIF003', 'UNCIF404'].map((demoUid) => (
                    <Badge
                      key={demoUid}
                      variant="outline"
                      className="cursor-pointer hover:bg-purple-100 border-purple-300 text-purple-700"
                      onClick={() => setUid(demoUid)}
                    >
                      {demoUid}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification Result */}
        {verificationResult && (
          <Card className="max-w-2xl mx-auto border-purple-200 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                {verificationResult.isValid ? (
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <CheckCircle className="w-16 h-16 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-700 mb-2">Verification Successful</h3>
                      <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
                        VERIFIED MEMBER
                      </Badge>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg text-left">
                      <div className="flex items-start space-x-4">
                        <User className="w-6 h-6 text-green-600 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-lg mb-3">Member Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-700">Name:</span>
                              <span className="text-gray-900">{verificationResult.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-700">Type:</span>
                              <span className="text-gray-900">{verificationResult.type}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-700">Institute:</span>
                              <span className="text-gray-900">{verificationResult.institute}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-700">Status:</span>
                              <Badge className="bg-green-100 text-green-700 border-green-200">
                                {verificationResult.status}
                              </Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-700">UID:</span>
                              <span className="text-gray-900 font-mono">{uid}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <XCircle className="w-16 h-16 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-700 mb-2">Verification Failed</h3>
                      <Badge className="bg-red-100 text-red-700 border-red-200 mb-4">
                        INVALID UID
                      </Badge>
                    </div>
                    
                    <div className="bg-red-50 p-6 rounded-lg">
                      <p className="text-red-700 mb-4">
                        The provided UID "{uid}" is not found in our database or is inactive.
                      </p>
                      <p className="text-sm text-red-600">
                        Please verify the UID and try again, or contact UNCIF support for assistance.
                      </p>
                    </div>
                  </div>
                )}
                
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="mt-6 border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  Verify Another UID
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Information Section */}
        <Card className="mt-8 border-purple-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">About UNCIF Authentication</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-600">
              <p>
                The UNCIF Digital Authentication system provides secure verification of members, 
                scholars, and frontliners within our network. Each verified individual receives 
                a unique identifier (UID) that can be used for authentication purposes.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">What can be verified:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Member Institute representatives</li>
                    <li>• Registered scholars and researchers</li>
                    <li>• Certified frontliners</li>
                    <li>• UNCIF program participants</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Verification includes:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Full name and credentials</li>
                    <li>• Associated institute/organization</li>
                    <li>• Current membership status</li>
                    <li>• Member type and role</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Authentication;
