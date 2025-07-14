import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Users, 
  BookOpen, 
  Globe, 
  Trophy, 
  Bot, 
  GitBranch, 
  Lightbulb, 
  Briefcase,
  Target,
  Calendar,
  Award,
  ArrowRight
} from "lucide-react";
import SEO from "@/components/SEO";

const domains = [
  {
    id: "social",
    title: "Social Initiatives",
    icon: Users,
    description: "Drive meaningful social change through community-focused projects",
    examples: ["Community Development Programs", "Healthcare Initiatives", "Education Access Projects", "Environmental Conservation"],
    color: "bg-blue-500/10 text-blue-600 border-blue-200"
  },
  {
    id: "author",
    title: "Author",
    icon: BookOpen,
    description: "Develop writing and content creation skills across various mediums",
    examples: ["Technical Documentation", "Research Papers", "Creative Writing", "Content Strategy"],
    color: "bg-purple-500/10 text-purple-600 border-purple-200"
  },
  {
    id: "collaboration",
    title: "Collaboration",
    icon: Globe,
    description: "Connect with international students and projects to enhance global network",
    examples: ["Cross-Cultural Projects", "International Partnerships", "Global Hackathons", "Exchange Programs"],
    color: "bg-green-500/10 text-green-600 border-green-200"
  },
  {
    id: "challenges",
    title: "Challenges & Problem Solving",
    icon: Trophy,
    description: "Enhance analytical thinking through competitive programming and challenges",
    examples: ["Coding Competitions", "Case Study Challenges", "Innovation Contests", "Problem-Solving Workshops"],
    color: "bg-orange-500/10 text-orange-600 border-orange-200"
  },
  {
    id: "ai",
    title: "AI & Automation",
    icon: Bot,
    description: "Learn AI creation and automation to achieve 10X efficiency gains",
    examples: ["Machine Learning Projects", "Process Automation", "AI Tool Development", "Smart Solutions"],
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-200"
  },
  {
    id: "opensource",
    title: "Open-Source Contribution",
    icon: GitBranch,
    description: "Contribute to open-source projects and build a strong developer profile",
    examples: ["GitHub Contributions", "Open Source Maintenance", "Documentation", "Community Building"],
    color: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
  },
  {
    id: "initiatives",
    title: "Student Initiatives",
    icon: Lightbulb,
    description: "Initiate and execute projects to develop leadership and management skills",
    examples: ["Leadership Programs", "Event Management", "Team Building", "Project Coordination"],
    color: "bg-pink-500/10 text-pink-600 border-pink-200"
  },
  {
    id: "unsip",
    title: "UNSIP",
    icon: Briefcase,
    description: "Self-initiated internship program for engineering and management students",
    examples: ["Real-world Projects", "Industry Partnerships", "Skill Development", "Professional Networking"],
    color: "bg-yellow-500/10 text-yellow-600 border-yellow-200"
  }
];

const roadmapSteps = [
  {
    step: 1,
    title: "Domain Selection",
    description: "Choose one theme from each domain that aligns with your interests and career goals"
  },
  {
    step: 2,
    title: "Project Execution",
    description: "Work on your selected themes with guidance from mentors and industry experts"
  },
  {
    step: 3,
    title: "Report Preparation",
    description: "Document your learning journey, challenges faced, and solutions implemented"
  },
  {
    step: 4,
    title: "Pitch Presentation",
    description: "Present your work on PitchBurg and Uni-Pitch platforms to global audiences"
  },
  {
    step: 5,
    title: "Global Opportunities",
    description: "Connect with worldwide opportunities through your profile and report audit"
  }
];

export default function Frontliner() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [showMembersOnly, setShowMembersOnly] = useState(false);

  const handleViewDetails = (domainId: string) => {
    setSelectedDomain(domainId);
  };

  const handleButtonClick = () => {
    setShowMembersOnly(true);
  };

  const selectedDomainData = domains.find(d => d.id === selectedDomain);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <SEO 
        title="Frontliner Program - UNCIF"
        description="Join the Frontliner Program and develop skills across multiple domains through our innovative Project School curriculum"
        keywords="frontliner, program, curriculum, project school, students, skills development"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 text-sm px-3 py-1">Project School Curriculum</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Frontliner Program
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A comprehensive curriculum designed to develop multi-domain expertise through hands-on projects, 
            global collaboration, and real-world applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">8 Core Domains</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Global Network</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Real Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Roadmap</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow our structured approach to maximize your learning and career opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {roadmapSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < roadmapSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Domains</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose one theme from each domain to build a comprehensive skill set
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain) => {
              const IconComponent = domain.icon;
              return (
                <Card key={domain.id} className="hover:shadow-xl transition-shadow group cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${domain.color}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">{domain.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleViewDetails(domain.id)}
                      >
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={handleButtonClick}
                      >
                        Start Journey
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Integration Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Global Platform Integration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">PitchBurg Platform</h3>
              <p className="text-muted-foreground mb-4">
                Present your projects and reports to a global audience of investors, mentors, and industry leaders.
              </p>
              <Button variant="outline" onClick={handleButtonClick}>
                Access Platform
              </Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Uni-Pitch Platform</h3>
              <p className="text-muted-foreground mb-4">
                Connect with universities and academic institutions worldwide for research and collaboration opportunities.
              </p>
              <Button variant="outline" onClick={handleButtonClick}>
                Explore Opportunities
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Domain Details Modal */}
      <Dialog open={!!selectedDomain} onOpenChange={() => setSelectedDomain(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedDomainData && (
                <>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedDomainData.color}`}>
                    <selectedDomainData.icon className="h-5 w-5" />
                  </div>
                  {selectedDomainData.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedDomainData && (
            <div className="space-y-6">
              <p className="text-muted-foreground">{selectedDomainData.description}</p>
              
              <div>
                <h4 className="font-semibold mb-3">Example Themes & Projects:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedDomainData.examples.map((example, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={handleButtonClick} className="flex-1">
                  Enroll in Domain
                </Button>
                <Button variant="outline" onClick={handleButtonClick} className="flex-1">
                  View Resources
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Members Only Modal */}
      <Dialog open={showMembersOnly} onOpenChange={setShowMembersOnly}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl">🔒 Access Restricted</DialogTitle>
          </DialogHeader>
          <div className="py-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">UNCIF Members Only</h3>
            <p className="text-muted-foreground mb-6">
              This content is exclusively available to UNCIF community members. 
              Join our community to access premium resources and opportunities.
            </p>
            <Button className="w-full">
              Become a Member
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}