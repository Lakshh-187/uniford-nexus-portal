
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, 
  Target, 
  Users, 
  Award, 
  Brain, 
  Presentation,
  CheckCircle,
  Star,
  ArrowRight,
  FileText,
  Briefcase,
  GraduationCap,
  Zap,
  Crown,
  Shield
} from 'lucide-react';
import SEO from '@/components/SEO';

const UNSIP = () => {
  const features = [
    {
      icon: Target,
      title: "Self-Initiated Learning",
      description: "Choose your own tasks, problems, and themes based on your interests and career goals."
    },
    {
      icon: Brain,
      title: "AI-Powered Review",
      description: "Advanced AI models evaluate your submissions for technical accuracy and innovation."
    },
    {
      icon: Users,
      title: "Peer Assessment",
      description: "Junior scholars review your presentations to ensure clarity and understanding."
    },
    {
      icon: Presentation,
      title: "Skill Demonstration",
      description: "Focus on presenting knowledge effectively, not just acquiring it."
    },
    {
      icon: Award,
      title: "UNCIF Certification",
      description: "Receive highly valuable, verified certificates based on submission quality."
    },
    {
      icon: Crown,
      title: "Career Opportunities",
      description: "Get recommendations to partner companies and organizations based on your profile."
    }
  ];

  const problems = [
    { title: "Outsourcing & Cheating", icon: "⚠️" },
    { title: "Copy-Paste Culture", icon: "📋" },
    { title: "Passive Learning", icon: "😴" },
    { title: "Lack of Practical Skills", icon: "🔧" }
  ];

  const solutions = [
    { title: "Self-Motivated Selection", icon: "🎯" },
    { title: "Original Implementation", icon: "💡" },
    { title: "Active Engagement", icon: "⚡" },
    { title: "Real-World Application", icon: "🌍" }
  ];

  const portals = [
    {
      title: "UIS-1: Opportunities Portal",
      description: "Browse internship opportunities, company partnerships, and career pathways.",
      link: "/uis-1",
      color: "from-blue-500 to-blue-600",
      icon: Briefcase
    },
    {
      title: "UIS-2: Resources Portal", 
      description: "Access learning materials, project templates, and skill development resources.",
      link: "/uis-2",
      color: "from-green-500 to-green-600",
      icon: FileText
    },
    {
      title: "UIS-3: Projects Portal",
      description: "Explore project ideas, problem statements, and submission guidelines.",
      link: "/uis-3", 
      color: "from-purple-500 to-purple-600",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <SEO 
        title="UNSIP - Self-Initiated Internship Program | UNCIF"
        description="Join UNSIP, a revolutionary self-initiated and motivated internship program that empowers students to choose their own learning path and demonstrate skills through practical implementation."
        keywords="internship, self-initiated learning, UNCIF, career development, skill demonstration"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
              <Zap className="w-5 h-5 mr-2" />
              UNSIP - Revolutionary Learning
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Uniford National Self-Initiated & 
              <span className="text-yellow-300"> Motivated Internship</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Break free from traditional learning constraints. Choose your path, 
              demonstrate your skills, and earn recognition that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Learning Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional academic approaches often lead to passive learning. UNSIP addresses these challenges with innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800 flex items-center">
                  <span className="text-3xl mr-3">⚠️</span>
                  Common Problems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-red-200">
                      <span className="text-2xl mr-4">{problem.icon}</span>
                      <span className="text-gray-800 font-medium">{problem.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center">
                  <span className="text-3xl mr-3">✅</span>
                  UNSIP Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-green-200">
                      <span className="text-2xl mr-4">{solution.icon}</span>
                      <span className="text-gray-800 font-medium">{solution.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
              PROGRAM FEATURES
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose UNSIP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative approach combines self-directed learning with rigorous evaluation to ensure genuine skill development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group border-indigo-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How UNSIP Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured yet flexible approach to skill development and demonstration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Choose Your Path", desc: "Select tasks, problems, or themes that align with your interests" },
              { step: "02", title: "Learn & Implement", desc: "Research, learn, and build your solution independently" },
              { step: "03", title: "Submit & Present", desc: "Create compelling presentations showcasing your work" },
              { step: "04", title: "Get Certified", desc: "Receive UNCIF-verified certificates based on quality" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-indigo-400 mx-auto mt-6 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              ACCESS PORTALS
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              UNSIP Learning Portals
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Access specialized portals designed to support your learning journey with opportunities, resources, and projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
              <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${portal.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <portal.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{portal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-indigo-200 mb-6">{portal.description}</p>
                  <Link to={portal.link}>
                    <Button className="w-full bg-white text-indigo-900 hover:bg-indigo-50">
                      Access Portal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-800" />
          <h2 className="text-3xl lg:text-4xl font-bold text-yellow-900 mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-xl text-yellow-800 mb-8 max-w-2xl mx-auto">
            Join UNSIP today and experience the power of self-initiated learning with professional recognition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-900 hover:bg-yellow-800 text-white font-semibold text-lg px-8 py-4">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-900 text-yellow-900 hover:bg-yellow-900 hover:text-white text-lg px-8 py-4">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UNSIP;
