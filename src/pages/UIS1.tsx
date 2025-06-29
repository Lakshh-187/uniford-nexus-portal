
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Star,
  Filter,
  Search,
  Building,
  Calendar,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import SEO from '@/components/SEO';

const UIS1 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Internships', 'Workshops', 'Networking', 'Competitions', 'Fellowships'];

  const opportunities = [
    {
      id: 1,
      title: "Google for Startups",
      company: "Google",
      type: "Internship",
      location: "Remote",
      duration: "3-6 months",
      stipend: "₹25,000-50,000",
      deadline: "March 15, 2024",
      description: "Work on cutting-edge projects with Google's startup ecosystem team.",
      requirements: ["Computer Science background", "Python/Java proficiency", "Problem-solving skills"],
      tags: ["Tech", "Remote", "Paid"],
      rating: 4.8,
      applicants: 1200,
      category: "Internships"
    },
    {
      id: 2,
      title: "Microsoft Student Partner Program",
      company: "Microsoft",
      type: "Fellowship",
      location: "Hybrid",
      duration: "1 year",
      stipend: "₹15,000/month",
      deadline: "April 1, 2024",
      description: "Lead technical communities and evangelize Microsoft technologies on campus.",
      requirements: ["Leadership experience", "Technical presentation skills", "Community building"],
      tags: ["Leadership", "Tech", "Community"],
      rating: 4.9,
      applicants: 800,
      category: "Fellowships"
    },
    {
      id: 3,
      title: "AWS Architecture Workshop",
      company: "Amazon Web Services",
      type: "Workshop",
      location: "Bangalore",
      duration: "2 days",
      stipend: "Certificate + Swag",
      deadline: "March 30, 2024",
      description: "Intensive hands-on workshop on cloud architecture and best practices.",
      requirements: ["Basic AWS knowledge", "Linux familiarity", "Networking concepts"],
      tags: ["Cloud", "Workshop", "Certification"],
      rating: 4.7,
      applicants: 500,
      category: "Workshops"
    },
    {
      id: 4,
      title: "Startup India Pitch Competition",
      company: "Government of India",
      type: "Competition",
      location: "Multiple Cities",
      duration: "6 months",
      stipend: "₹10 Lakhs Prize",
      deadline: "May 15, 2024",
      description: "National-level startup pitch competition for innovative business ideas.",
      requirements: ["Business plan", "MVP/Prototype", "Team of 2-4 members"],
      tags: ["Startup", "Competition", "Innovation"],
      rating: 4.6,
      applicants: 2000,
      category: "Competitions"
    },
    {
      id: 5,
      title: "Tech Networking Summit",
      company: "NASSCOM",
      type: "Networking",
      location: "Mumbai",
      duration: "3 days",
      stipend: "Free Entry",
      deadline: "April 10, 2024",
      description: "Connect with industry leaders, startups, and fellow tech enthusiasts.",
      requirements: ["Tech background", "LinkedIn profile", "Professional attire"],
      tags: ["Networking", "Industry", "Professional"],
      rating: 4.5,
      applicants: 1500,
      category: "Networking"
    },
    {
      id: 6,
      title: "Flipkart Product Management Internship",
      company: "Flipkart",
      type: "Internship",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹40,000/month",
      deadline: "March 25, 2024",
      description: "Work on product strategy and user experience for millions of customers.",
      requirements: ["MBA/Engineering background", "Analytical skills", "User research experience"],
      tags: ["Product", "E-commerce", "Strategy"],
      rating: 4.8,
      applicants: 900,
      category: "Internships"
    }
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesCategory = selectedCategory === 'All' || opp.category === selectedCategory;
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Fellowship': return 'bg-green-100 text-green-700 border-green-200';
      case 'Workshop': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Competition': return 'bg-red-100 text-red-700 border-red-200';
      case 'Networking': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <SEO 
        title="UIS-1: Opportunities Portal | UNCIF"
        description="Discover internships, workshops, competitions, and networking opportunities curated for UNSIP participants."
        keywords="internships, career opportunities, workshops, competitions, UNCIF"
      />

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              UIS-1 PORTAL
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Opportunities Portal
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover curated internships, workshops, competitions, and networking events 
              designed to accelerate your career growth.
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
                placeholder="Search opportunities..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Available Opportunities ({filteredOpportunities.length})
            </h2>
            <p className="text-gray-600 mt-2">
              Showing {selectedCategory === 'All' ? 'all' : selectedCategory.toLowerCase()} opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="hover:shadow-lg transition-all duration-300 border-blue-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getTypeColor(opportunity.type)}>
                          {opportunity.type}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {opportunity.rating}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        {opportunity.title}
                      </CardTitle>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {opportunity.company}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {opportunity.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {opportunity.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {opportunity.stipend}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      Deadline: {opportunity.deadline}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {opportunity.applicants} applicants
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {opportunity.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No opportunities found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UIS1;
