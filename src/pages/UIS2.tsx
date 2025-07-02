
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { 
  FileText, 
  Download, 
  Eye, 
  BookOpen,
  Video,
  Code,
  Lightbulb,
  Users,
  Star,
  Filter,
  Search,
  Clock,
  Heart,
  Share
} from 'lucide-react';
import SEO from '@/components/SEO';

const UIS2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const categories = ['All', 'Templates', 'Guides', 'Videos', 'Tools', 'Case Studies'];

  const resources = [
    {
      id: 1,
      title: "Project Proposal Template",
      type: "Template",
      category: "Templates",
      description: "Comprehensive template for creating professional project proposals with sections for scope, timeline, and budget.",
      format: "PDF",
      size: "2.5 MB",
      downloads: 1234,
      rating: 4.8,
      tags: ["Project Management", "Documentation", "Professional"],
      author: "UNCIF Team",
      lastUpdated: "March 10, 2024",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Complete Guide to Technical Writing",
      type: "Guide",
      category: "Guides", 
      description: "Master the art of technical writing with this comprehensive 50-page guide covering documentation best practices.",
      format: "PDF",
      size: "8.2 MB",
      downloads: 2156,
      rating: 4.9,
      tags: ["Writing", "Documentation", "Communication"],
      author: "Dr. Sarah Johnson",
      lastUpdated: "February 28, 2024",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Python for Data Science Masterclass",
      type: "Video Series",
      category: "Videos",
      description: "12-hour video series covering Python fundamentals, data analysis, and machine learning basics.",
      format: "MP4",
      size: "4.2 GB",
      downloads: 3421,
      rating: 4.7,
      tags: ["Python", "Data Science", "Programming"],
      author: "Prof. Alex Chen",
      lastUpdated: "March 5, 2024",
      difficulty: "Beginner"
    },
    {
      id: 4,
      title: "UI/UX Design System Kit",
      type: "Tool Kit",
      category: "Tools",
      description: "Complete design system with components, color palettes, typography, and Figma templates.",
      format: "Figma + Sketch",
      size: "150 MB",
      downloads: 876,
      rating: 4.9,
      tags: ["Design", "UI/UX", "Templates"],
      author: "Design Team",
      lastUpdated: "March 12, 2024",
      difficulty: "Intermediate"
    },
    {
      id: 5,
      title: "Startup Success Case Studies",
      type: "Case Study",
      category: "Case Studies",
      description: "Analysis of 20 successful startup journeys, including challenges, solutions, and key learnings.",
      format: "PDF + Excel",
      size: "15.3 MB",
      downloads: 1598,
      rating: 4.6,
      tags: ["Startup", "Business", "Strategy"],
      author: "Business Analysis Team",
      lastUpdated: "March 1, 2024",
      difficulty: "Advanced"
    },
    {
      id: 6,
      title: "React.js Complete Development Kit",
      type: "Tool Kit",
      category: "Tools",
      description: "Boilerplate code, components library, and development tools for React.js projects.",
      format: "ZIP Package",
      size: "45 MB",
      downloads: 2987,
      rating: 4.8,
      tags: ["React", "JavaScript", "Frontend"],
      author: "Dev Community",
      lastUpdated: "March 8, 2024",
      difficulty: "Intermediate"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResources = filteredResources.slice(startIndex, startIndex + itemsPerPage);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Template': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Guide': return 'bg-green-100 text-green-700 border-green-200';
      case 'Video Series': return 'bg-red-100 text-red-700 border-red-200';
      case 'Tool Kit': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Case Study': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-50 text-green-600 border-green-200';
      case 'Intermediate': return 'bg-yellow-50 text-yellow-600 border-yellow-200';
      case 'Advanced': return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <SEO 
        title="UIS-2: Resources Portal | UNCIF"
        description="Access comprehensive learning resources, templates, guides, and tools for UNSIP participants."
        keywords="learning resources, templates, guides, tools, educational materials"
      />

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              UIS-2 PORTAL
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Resources Portal
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive collection of templates, guides, videos, and tools to support 
              your learning journey and project development.
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
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

      {/* Resources Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Learning Resources ({filteredResources.length})
            </h2>
            <p className="text-gray-600 mt-2">
              Page {currentPage} of {totalPages} - Curated resources to accelerate your learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-all duration-300 border-green-200">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={`${getTypeColor(resource.type)} text-xs`}>
                      {resource.type}
                    </Badge>
                    <Badge className={`${getDifficultyColor(resource.difficulty)} text-xs`}>
                      {resource.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-gray-900 line-clamp-2">
                    {resource.title}
                  </CardTitle>
                  <div className="flex items-center text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    {resource.rating}
                    <span className="mx-2">•</span>
                    <Download className="w-3 h-3 mr-1" />
                    {resource.downloads}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <FileText className="w-3 h-3 mr-2" />
                      {resource.format}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-3 h-3 mr-2" />
                      {resource.author}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-xs" size="sm">
                      <Download className="w-3 h-3 mr-1" />
                      Get
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                  
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink
                          onClick={() => setCurrentPage(pageNum)}
                          isActive={currentPage === pageNum}
                          className="cursor-pointer"
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  {totalPages > 5 && <PaginationEllipsis />}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UIS2;
