
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Lightbulb, 
  Target, 
  Clock,
  Users,
  Star,
  Filter,
  Search,
  BookOpen,
  Award,
  Zap,
  Briefcase,
  ArrowRight,
  FileText,
  CheckCircle
} from 'lucide-react';
import SEO from '@/components/SEO';

const UIS3 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Web Development', 'Data Science', 'Mobile Apps', 'AI/ML', 'IoT', 'Blockchain'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const projects = [
    {
      id: 1,
      title: "E-commerce Analytics Dashboard",
      category: "Web Development",
      difficulty: "Intermediate",
      description: "Build a comprehensive analytics dashboard for e-commerce businesses with real-time sales tracking, customer insights, and inventory management.",
      duration: "4-6 weeks",
      participants: 245,
      rating: 4.8,
      tags: ["React", "Node.js", "MongoDB", "Analytics"],
      skills: ["Frontend Development", "Backend APIs", "Database Design", "Data Visualization"],
      objectives: [
        "Create responsive dashboard interface",
        "Implement real-time data updates",
        "Design efficient database schema",
        "Add user authentication system"
      ],
      deliverables: ["Live deployed application", "Source code repository", "Technical documentation", "Presentation video"],
      mentorSupport: true,
      certificateEligible: true,
      difficulty_level: 7
    },
    {
      id: 2,
      title: "Smart Home IoT System",
      category: "IoT",
      difficulty: "Advanced",
      description: "Develop an IoT-based smart home automation system with sensor integration, mobile control, and energy optimization features.",
      duration: "6-8 weeks",
      participants: 156,
      rating: 4.9,
      tags: ["IoT", "Arduino", "Mobile App", "Cloud"],
      skills: ["Hardware Programming", "Mobile Development", "Cloud Integration", "Sensor Networks"],
      objectives: [
        "Design IoT hardware architecture",
        "Develop mobile control application",
        "Implement cloud data storage",
        "Create energy optimization algorithms"
      ],
      deliverables: ["Working IoT prototype", "Mobile application", "Cloud dashboard", "Technical report"],
      mentorSupport: true,
      certificateEligible: true,
      difficulty_level: 9
    },
    {
      id: 3,
      title: "AI-Powered Chatbot Assistant",
      category: "AI/ML",
      difficulty: "Intermediate",
      description: "Create an intelligent chatbot using natural language processing that can handle customer service queries and provide personalized responses.",
      duration: "3-5 weeks",
      participants: 389,
      rating: 4.7,
      tags: ["Python", "NLP", "Machine Learning", "API"],
      skills: ["Natural Language Processing", "Machine Learning", "API Development", "Model Training"],
      objectives: [
        "Train NLP model for intent recognition",
        "Develop conversational flow logic",
        "Integrate with messaging platforms",
        "Implement learning capabilities"
      ],
      deliverables: ["Trained chatbot model", "Web interface", "API documentation", "Performance analysis"],
      mentorSupport: true,
      certificateEligible: true,
      difficulty_level: 6
    },
    {
      id: 4,
      title: "Cryptocurrency Portfolio Tracker",
      category: "Blockchain",
      difficulty: "Advanced",
      description: "Build a comprehensive cryptocurrency portfolio management system with real-time price tracking, portfolio analysis, and trading insights.",
      duration: "5-7 weeks",
      participants: 198,
      rating: 4.6,
      tags: ["Blockchain", "React", "APIs", "Finance"],
      skills: ["Blockchain Integration", "Financial APIs", "Data Analysis", "Security Implementation"],
      objectives: [
        "Integrate multiple crypto exchanges",
        "Implement portfolio analytics",
        "Create price alert system",
        "Add security features"
      ],
      deliverables: ["Portfolio tracking application", "API integrations", "Security audit report", "User guide"],
      mentorSupport: true,
      certificateEligible: true,
      difficulty_level: 8
    },
    {
      id: 5,
      title: "Social Media Content Analyzer",
      category: "Data Science",
      difficulty: "Beginner",
      description: "Analyze social media content trends using data science techniques to provide insights on engagement, sentiment, and viral content patterns.",
      duration: "2-4 weeks",
      participants: 567,
      rating: 4.5,
      tags: ["Python", "Data Analysis", "Visualization", "APIs"],
      skills: ["Data Collection", "Statistical Analysis", "Data Visualization", "API Integration"],
      objectives: [
        "Collect social media data",
        "Perform sentiment analysis",
        "Create trend visualizations",
        "Generate insights report"
      ],
      deliverables: ["Data analysis notebook", "Visualization dashboard", "Insights report", "Presentation slides"],
      mentorSupport: true,
      certificateEligible: true,
      difficulty_level: 4
    },
    {
      id: 6,
      title: "Fitness Tracking Mobile App",
      category: "Mobile Apps",
      difficulty: "Intermediate",
      description: "Develop a comprehensive fitness tracking mobile application with workout planning, progress monitoring, and social features.",
      duration: "4-6 weeks",
      participants: 423,
      rating: 4.8,
      tags: ["React Native", "Mobile", "Health", "Firebase"],
      skills: ["Mobile Development", "UI/UX Design", "Database Integration", "Health APIs"],
      objectives: [
        "Design intuitive user interface",
        "Implement workout tracking",
        "Add social sharing features",
        "Integrate health data APIs"
      ],
      deliverables: ["Mobile application", "Backend services", "Design documentation", "App store listing"],
      mentorSupport: true,
      certificateEligible: true,
      difficulty_level: 6
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Web Development': 'bg-blue-100 text-blue-700 border-blue-200',
      'Data Science': 'bg-purple-100 text-purple-700 border-purple-200',
      'Mobile Apps': 'bg-green-100 text-green-700 border-green-200',
      'AI/ML': 'bg-orange-100 text-orange-700 border-orange-200',
      'IoT': 'bg-teal-100 text-teal-700 border-teal-200',
      'Blockchain': 'bg-indigo-100 text-indigo-700 border-indigo-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <SEO 
        title="UIS-3: Projects Portal | UNCIF"
        description="Explore project ideas, problem statements, and hands-on challenges for UNSIP participants."
        keywords="projects, coding challenges, problem statements, hands-on learning"
      />

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              UIS-3 PORTAL
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Projects Portal
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Discover hands-on projects and problem statements designed to challenge 
              your skills and showcase your capabilities to potential employers.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Available Projects ({filteredProjects.length})
            </h2>
            <p className="text-gray-600 mt-2">
              Choose projects that match your interests and skill level
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-all duration-300 border-purple-200">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex gap-2">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                      <Badge className={getDifficultyColor(project.difficulty)}>
                        {project.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.mentorSupport && (
                        <Badge variant="outline" className="text-xs">
                          <Users className="w-3 h-3 mr-1" />
                          Mentor
                        </Badge>
                      )}
                      {project.certificateEligible && (
                        <Badge variant="outline" className="text-xs">
                          <Award className="w-3 h-3 mr-1" />
                          Certificate
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    {project.rating}
                    <span className="mx-2">•</span>
                    <Users className="w-4 h-4 mr-1" />
                    {project.participants} participants
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    {project.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Key Objectives
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.objectives.slice(0, 3).map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-1 text-green-500 flex-shrink-0" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Skills You'll Gain
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.skills.slice(0, 4).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} className="bg-purple-100 text-purple-700 border-purple-200 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                      Start Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UIS3;
