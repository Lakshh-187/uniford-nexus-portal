import { useState } from 'react';
import { ExternalLink, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const Blogs = () => {
  // Internal blogs that open within the website
  const internalBlogs = [
    {
      id: 1,
      title: "Digital Transformation in Educational Institutions",
      excerpt: "Exploring how technology is revolutionizing the way we learn and teach in modern educational institutions.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      category: "Initiatives",
      tags: ["Technology", "Education", "Innovation"],
      image: "/lovable-uploads/0596f386-4eca-4c2f-9abf-b6234c5d6a13.png",
      content: `
        <h2>The Future of Education</h2>
        <p>Digital transformation has become a cornerstone of modern educational institutions. At UNCIF, we believe that technology should enhance, not replace, the fundamental human connections that make education meaningful.</p>
        
        <h3>Key Areas of Focus</h3>
        <ul>
          <li>Interactive Learning Platforms</li>
          <li>Virtual Reality in Education</li>
          <li>AI-Powered Personalized Learning</li>
          <li>Collaborative Digital Workspaces</li>
        </ul>
        
        <p>Our initiatives in digital transformation have shown remarkable results across partner institutions. We've seen a 40% increase in student engagement and a 25% improvement in learning outcomes.</p>
        
        <h3>Implementation Strategy</h3>
        <p>The implementation of digital transformation requires a systematic approach that considers both technological capabilities and human factors. Our three-phase approach ensures sustainable adoption and maximum impact.</p>
      `
    },
    {
      id: 2,
      title: "UNSIP Program Achievements and Impact",
      excerpt: "A comprehensive overview of the Uniford National Strategic Innovation Program's achievements and impact on participating institutions.",
      author: "Prof. Michael Chen",
      date: "2024-01-10",
      category: "Programs",
      tags: ["UNSIP", "Innovation", "Impact"],
      image: "/lovable-uploads/133fd93d-f977-41fa-903a-ed628ffb9b7a.png",
      content: `
        <h2>UNSIP: Transforming Educational Excellence</h2>
        <p>The Uniford National Strategic Innovation Program (UNSIP) has been instrumental in driving educational innovation across participating institutions. Since its inception, UNSIP has facilitated groundbreaking research and development initiatives.</p>
        
        <h3>Program Highlights</h3>
        <ul>
          <li>500+ institutions enrolled</li>
          <li>1000+ research projects completed</li>
          <li>200+ patents filed</li>
          <li>$50M+ in funding facilitated</li>
        </ul>
        
        <p>The program's success lies in its collaborative approach, bringing together academia, industry, and research organizations to create a thriving innovation ecosystem.</p>
      `
    },
    {
      id: 3,
      title: "Collaborative Research Initiatives",
      excerpt: "How UNCIF facilitates meaningful collaborations between academic institutions and industry partners for groundbreaking research.",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-05",
      category: "Research",
      tags: ["Collaboration", "Research", "Industry"],
      image: "/lovable-uploads/2634e39f-8221-4f95-a7d2-ec8a160cd85b.png",
      content: `
        <h2>Building Bridges: Academia Meets Industry</h2>
        <p>Collaborative research initiatives represent the heart of UNCIF's mission to foster innovation through partnerships. These initiatives create valuable connections between academic researchers and industry professionals.</p>
        
        <h3>Success Stories</h3>
        <p>Our collaborative research projects have resulted in numerous breakthrough innovations, including sustainable energy solutions, advanced materials research, and cutting-edge medical technologies.</p>
        
        <h3>Partnership Framework</h3>
        <p>We've developed a comprehensive framework that ensures mutually beneficial partnerships while maintaining academic integrity and research excellence.</p>
      `
    }
  ];

  // External Medium blogs
  const mediumBlogs = [
    {
      title: "The Future of Higher Education Technology",
      excerpt: "Exploring emerging technologies that will shape the future of higher education and student learning experiences.",
      url: "https://medium.com/@unifordfoundation/future-higher-education-technology",
      date: "2024-01-20",
      category: "Technology"
    },
    {
      title: "Building Sustainable University Partnerships",
      excerpt: "Best practices for creating long-lasting partnerships between universities and industry stakeholders.",
      url: "https://medium.com/@unifordfoundation/sustainable-university-partnerships",
      date: "2024-01-18",
      category: "Partnerships"
    },
    {
      title: "Innovation in Educational Assessment",
      excerpt: "How modern assessment techniques are revolutionizing the way we measure student learning and progress.",
      url: "https://medium.com/@unifordfoundation/innovation-educational-assessment",
      date: "2024-01-12",
      category: "Assessment"
    },
    {
      title: "Global Trends in Educational Policy",
      excerpt: "Analyzing global educational policy trends and their implications for institutional development.",
      url: "https://medium.com/@unifordfoundation/global-educational-policy-trends",
      date: "2024-01-08",
      category: "Policy"
    }
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <SEO 
        title="Blogs - UNCIF"
        description="Explore our latest blogs on educational innovation, research initiatives, program achievements, and collaborative projects."
        keywords="UNCIF blogs, educational innovation, research, initiatives, programs, achievements"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary-foreground to-accent">
          <div className="absolute inset-0 bg-black/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                UNCIF Blogs & Insights
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover the latest insights on educational innovation, research achievements, 
                program developments, and collaborative initiatives shaping the future of education.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Internal Blogs Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Articles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                In-depth articles covering our programs, initiatives, and research achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internalBlogs.map((blog) => (
                <Card key={blog.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{blog.category}</Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 text-sm">
                      {blog.excerpt}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      onClick={() => openBlogModal(blog)}
                      className="w-full group-hover:shadow-md transition-shadow"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Medium Blogs Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Medium Publications</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow our external publications and thought leadership articles on Medium
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mediumBlogs.map((blog, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline">{blog.category}</Badge>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                      
                      <Button 
                        variant="outline"
                        onClick={() => window.open(blog.url, '_blank')}
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Read on Medium
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Blog Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeBlogModal}>
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover"
                />
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={closeBlogModal}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                >
                  ✕
                </Button>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <Badge className="mb-3">{selectedBlog.category}</Badge>
                  <h1 className="text-3xl font-bold mb-4">{selectedBlog.title}</h1>
                  
                  <div className="flex items-center space-x-6 text-muted-foreground text-sm mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{selectedBlog.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedBlog.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedBlog.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;