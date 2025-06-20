
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { 
  Bot, 
  Folder, 
  Brain, 
  School, 
  Backpack, 
  GraduationCap, 
  Users, 
  Trophy, 
  Palette, 
  Lightbulb, 
  Flag, 
  Coins
} from 'lucide-react';

interface GrantApplication {
  mik: string;
  instituteName: string;
  grantType: string;
  reason: string;
  expectedImpact: string;
  supportDocument: FileList | null;
  preferredDates: string;
  requesterName: string;
}

const Grants = () => {
  const [selectedGrant, setSelectedGrant] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mikVerified, setMikVerified] = useState(false);
  const [instituteName, setInstituteName] = useState('');
  const { toast } = useToast();

  const form = useForm<GrantApplication>();

  const grantCategories = [
    {
      title: "AI / STEM / Robotics Labs",
      icon: Bot,
      description: "Get funding for future-ready lab setups",
      category: "STEM"
    },
    {
      title: "Programs & Projects",
      icon: Folder,
      description: "Launch student/faculty-led innovation programs",
      category: "Academic"
    },
    {
      title: "Training & Cohorts",
      icon: Brain,
      description: "Access UNCIF-sponsored training tracks",
      category: "Academic"
    },
    {
      title: "Workshops & Organize",
      icon: School,
      description: "Plan certified workshops in your campus",
      category: "Academic"
    },
    {
      title: "Bags, Books & Accessories",
      icon: Backpack,
      description: "Request branded student essentials",
      category: "Resources"
    },
    {
      title: "Scholarships",
      icon: GraduationCap,
      description: "Apply for student scholarship sponsorships",
      category: "Scholarships"
    },
    {
      title: "Faculty Connect",
      icon: Users,
      description: "Train & link your faculty with experts",
      category: "Academic"
    },
    {
      title: "Sports Accessories",
      icon: Trophy,
      description: "Get kits and gear for institutional teams",
      category: "Sports"
    },
    {
      title: "Art & Culture",
      icon: Palette,
      description: "Celebrate your heritage with support",
      category: "Culture"
    },
    {
      title: "Tech Fest / Conference / Compete",
      icon: Lightbulb,
      description: "Organize tech events & receive backing",
      category: "STEM"
    },
    {
      title: "Organize Competitions",
      icon: Flag,
      description: "Host hackathons, Olympiads & more",
      category: "STEM"
    },
    {
      title: "Sponsored Benefits",
      icon: Coins,
      description: "Direct CSR or brand-funded aid",
      category: "Resources"
    },
  ];

  const handleMikVerification = (mik: string) => {
    // Simulate MIK verification
    if (mik.length >= 8) {
      setMikVerified(true);
      setInstituteName("Demo Institute of Technology"); // Mock auto-fill
      toast({
        title: "Verification Successful",
        description: "Member Institute Key verified successfully.",
      });
    } else {
      setMikVerified(false);
      toast({
        title: "Verification Failed",
        description: "Please enter a valid Member Institute Key.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = (data: GrantApplication) => {
    // Generate random application ID
    const applicationId = 'UNCIF-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    toast({
      title: "Application Submitted Successfully!",
      description: `Your application ID is: ${applicationId}. You will receive confirmation via email.`,
    });
    
    setDialogOpen(false);
    form.reset();
    setMikVerified(false);
    setSelectedGrant(null);
  };

  const handleApplyClick = (grant: any) => {
    setSelectedGrant(grant);
    setDialogOpen(true);
    form.setValue('grantType', grant.title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Apply for Premium Institutional Support through{' '}
            <span className="text-yellow-300">UNCIF Grants</span>
          </h1>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Available exclusively for verified member institutions of UNCIF. 
            All grants are powered by Uniford Foundation and CSR collaborations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
              🔐 Member Only
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
              🔁 Ongoing Cycle
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
              🧠 Tech + Talent Driven
            </Badge>
          </div>
          
          <div className="text-sm text-purple-200">
            UNCIF Grants – Powered by Uniford Funds & CSR Alliances<br />
            "Transforming Institutions with Tech, Talent, and Opportunity."
          </div>
        </div>
      </section>

      {/* Grants Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Grant Categories
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our comprehensive range of institutional support programs
            </p>
          </div>

          {/* Grant Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grantCategories.map((grant, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border border-purple-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <grant.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors">
                    {grant.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {grant.description}
                  </p>
                  <Button 
                    onClick={() => handleApplyClick(grant)}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-700">
              Grant Application - {selectedGrant?.title}
            </DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* MIK Verification */}
              <FormField
                control={form.control}
                name="mik"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Member Institute Key (MIK) *</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input
                          placeholder="Enter your MIK"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            if (e.target.value.length >= 8) {
                              handleMikVerification(e.target.value);
                            }
                          }}
                        />
                      </FormControl>
                      {mikVerified && (
                        <Badge className="bg-green-100 text-green-700 px-3 py-1">
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {mikVerified && (
                <>
                  {/* Institute Name */}
                  <FormField
                    control={form.control}
                    name="instituteName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institute Name</FormLabel>
                        <FormControl>
                          <Input {...field} value={instituteName} readOnly className="bg-gray-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Grant Type */}
                  <FormField
                    control={form.control}
                    name="grantType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grant Type</FormLabel>
                        <FormControl>
                          <Input {...field} readOnly className="bg-gray-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Reason for Application */}
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for Application *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Explain why you need this grant..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Expected Impact */}
                  <FormField
                    control={form.control}
                    name="expectedImpact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Impact (Brief) *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe the expected impact on your institution..."
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Support Document Upload */}
                  <FormField
                    control={form.control}
                    name="supportDocument"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Support Document</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => field.onChange(e.target.files)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Preferred Dates */}
                  <FormField
                    control={form.control}
                    name="preferredDates"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Dates (For event-based grants)</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Requester Name */}
                  <FormField
                    control={form.control}
                    name="requesterName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Signature/Name of Requester *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3"
                  >
                    Submit Grant Request
                  </Button>
                </>
              )}
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Grants;
