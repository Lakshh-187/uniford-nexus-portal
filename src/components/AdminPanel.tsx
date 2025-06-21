
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Settings, FileText, Award, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthenticationModal from './AuthenticationModal';

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string>('');
  const navigate = useNavigate();

  const adminPages = [
    {
      id: 'template-generator',
      name: 'Document Templates',
      icon: FileText,
      path: '/template-generator'
    },
    {
      id: 'letter-generator', 
      name: 'Letter Composer',
      icon: Award,
      path: '/letter-generator'
    },
    {
      id: 'advanced-document-generator',
      name: 'Advanced Creator',
      icon: Crown,
      path: '/advanced-document-generator'
    }
  ];

  const handlePageAccess = (page: any) => {
    setSelectedPage(page.path);
    setShowAuth(true);
  };

  const handleAuthSuccess = () => {
    setShowAuth(false);
    navigate(selectedPage);
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917347099610', '_blank');
  };

  return (
    <>
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsApp}
          className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 p-0 shadow-lg hover:shadow-xl transition-all"
          title="Contact Admin on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>

        {/* Admin Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 p-0 shadow-lg hover:shadow-xl transition-all"
          title="Admin Panel"
        >
          <Settings className="w-6 h-6" />
        </Button>

        {/* Admin Panel */}
        {isOpen && (
          <Card className="ml-16 bg-white/95 backdrop-blur-sm shadow-2xl border-purple-200">
            <CardContent className="p-4 space-y-2">
              <div className="text-sm font-semibold text-gray-700 mb-3">Admin Access</div>
              {adminPages.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => handlePageAccess(page)}
                  variant="ghost"
                  className="w-full justify-start text-left hover:bg-purple-50"
                >
                  <page.icon className="w-4 h-4 mr-2" />
                  {page.name}
                </Button>
              ))}
            </CardContent>
          </Card>
        )}
      </div>

      <AuthenticationModal
        isOpen={showAuth}
        onSuccess={handleAuthSuccess}
        onClose={() => setShowAuth(false)}
        title={adminPages.find(p => p.path === selectedPage)?.name || ''}
      />
    </>
  );
};

export default AdminPanel;
