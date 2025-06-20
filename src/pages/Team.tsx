import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SEO from '@/components/SEO';
import { 
  Users, 
  Award, 
  Globe, 
  Star, 
  Crown, 
  Shield,
  Brain,
  Target
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  region?: string;
  domain?: string;
  photo?: string;
  specialization?: string;
}

const Team = () => {
  const advisoryBoard: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Rajesh Kumar',
      designation: 'Chief Advisor',
      region: 'National',
      domain: 'Technology & Innovation',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      specialization: 'AI & Machine Learning'
    },
    {
      id: '2',
      name: 'Prof. Priya Sharma',
      designation: 'Senior Advisor',
      region: 'North India',
      domain: 'Academic Excellence',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b9d1e049?w=150&h=150&fit=crop&crop=face',
      specialization: 'Educational Policy'
    },
    {
      id: '3',
      name: 'Mr. Arjun Patel',
      designation: 'Strategic Advisor',
      region: 'West India',
      domain: 'Industry Relations',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      specialization: 'Corporate Partnerships'
    }
  ];

  const appointedMentors: TeamMember[] = [
    {
      id: '4',
      name: 'Dr. Meera Gupta',
      designation: 'Senior Mentor',
      region: 'South India',
      domain: 'Research & Development',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      specialization: 'Innovation Management'
    },
    {
      id: '5',
      name: 'Prof. Vikram Singh',
      designation: 'Technical Mentor',
      region: 'Central India',
      domain: 'STEM Education',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      specialization: 'Robotics & Automation'
    },
    {
      id: '6',
      name: 'Ms. Anita Desai',
      designation: 'Program Mentor',
      region: 'East India',
      domain: 'Student Development',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      specialization: 'Career Guidance'
    }
  ];

  const regionalHeads: TeamMember[] = [
    {
      id: '7',
      name: 'Mr. Rohit Agarwal',
      designation: 'North Regional Head',
      region: 'Delhi, Punjab, Haryana, UP',
      domain: 'Regional Operations',
      photo: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
      specialization: 'Institute Management'
    },
    {
      id: '8',
      name: 'Dr. Kavita Nair',
      designation: 'South Regional Head',
      region: 'Karnataka, Tamil Nadu, Kerala',
      domain: 'Regional Coordination',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      specialization: 'Program Implementation'
    },
    {
      id: '9',
      name: 'Prof. Rahul Joshi',
      designation: 'West Regional Head',
      region: 'Maharashtra, Gujarat, Rajasthan',
      domain: 'Strategic Planning',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      specialization: 'Quality Assurance'
    }
  ];

  const panellists: TeamMember[] = [
    {
      id: '10',
      name: 'Dr. Sunita Rao',
      designation: 'Expert Panellist',
      domain: 'Biotechnology',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      specialization: 'Biotech Innovation'
    },
    {
      id: '11',
      name: 'Mr. Amit Khanna',
      designation: 'Industry Expert',
      domain: 'Cybersecurity',
      photo: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
      specialization: 'Information Security'
    }
  ];

  const honoraryMembers: TeamMember[] = [
    {
      id: '12',
      name: 'Padma Shri Dr. A.K. Verma',
      designation: 'Honorary President',
      domain: 'Lifetime Achievement',
      photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
      specialization: 'Educational Leadership'
    }
  ];

  const TeamSection = ({ 
    title, 
    members, 
    icon: Icon, 
    description, 
    gradient 
  }: { 
    title: string; 
    members: TeamMember[]; 
    icon: any; 
    description: string;
    gradient: string;
  }) => (
    <section className="mb-16">
      <div className={`rounded-2xl p-8 mb-8 ${gradient}`}>
        <div className="flex items-center mb-4">
          <Icon className="w-8 h-8 text-white mr-4" />
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-white/90 text-lg">{description}</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-24 h-24 ring-4 ring-purple-100 group-hover:ring-purple-300 transition-all">
                  <AvatarImage src={member.photo} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-br from-purple-600 to-purple-800 text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {member.name}
                  </h3>
                  <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                    {member.designation}
                  </Badge>
                </div>
                
                <div className="space-y-2 w-full">
                  {member.region && (
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <Globe className="w-4 h-4 mr-2" />
                      <span>{member.region}</span>
                    </div>
                  )}
                  
                  {member.domain && (
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <Target className="w-4 h-4 mr-2" />
                      <span>{member.domain}</span>
                    </div>
                  )}
                  
                  {member.specialization && (
                    <div className="flex items-center justify-center text-sm text-purple-600 font-medium">
                      <Star className="w-4 h-4 mr-2" />
                      <span>{member.specialization}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <SEO 
        title="Leadership Team & Advisory Board"
        description="Meet UNCIF's distinguished leadership team, advisory board, mentors, and regional heads driving innovation and excellence across educational institutions nationwide through CSR grants and technology initiatives."
        keywords="UNCIF team, Uniford leadership, educational advisors, regional heads, mentors, institutes, CSR grants, frontliners, academic excellence, innovation leaders, Pitchburg, Un-pitch, Uniwave"
        canonical="/team"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full mb-8">
              <Users className="w-6 h-6 mr-3" />
              <span className="text-lg font-medium">Meet Our Leadership Team</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              UNCIF Council & Leadership
            </h1>
            
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Our distinguished team of advisors, mentors, and regional heads work together to drive 
              innovation and excellence across educational institutions nationwide.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50+</div>
                <div className="text-blue-200">Expert Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">15+</div>
                <div className="text-blue-200">Regions Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">100+</div>
                <div className="text-blue-200">Institutes Guided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">25+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <TeamSection
            title="Advisory Board"
            members={advisoryBoard}
            icon={Crown}
            description="Strategic leaders providing vision and direction for UNCIF's mission to transform educational excellence."
            gradient="bg-gradient-to-r from-purple-600 to-purple-800"
          />
          
          <TeamSection
            title="Appointed Mentors"
            members={appointedMentors}
            icon={Brain}
            description="Experienced professionals dedicated to guiding institutions towards innovation and academic excellence."
            gradient="bg-gradient-to-r from-blue-600 to-blue-800"
          />
          
          <TeamSection
            title="Regional Heads"
            members={regionalHeads}
            icon={Globe}
            description="Regional coordinators ensuring effective implementation of UNCIF programs across different geographical areas."
            gradient="bg-gradient-to-r from-indigo-600 to-indigo-800"
          />
          
          <TeamSection
            title="Panellists & Experts"
            members={panellists}
            icon={Shield}
            description="Subject matter experts bringing specialized knowledge and industry insights to our initiatives."
            gradient="bg-gradient-to-r from-teal-600 to-teal-800"
          />
          
          <TeamSection
            title="Honorary Members"
            members={honoraryMembers}
            icon={Award}
            description="Distinguished personalities who have made significant contributions to education and innovation."
            gradient="bg-gradient-to-r from-amber-600 to-amber-800"
          />
        </div>
      </div>
    </>
  );
};

export default Team;
