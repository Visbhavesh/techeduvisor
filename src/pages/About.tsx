import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Target, 
  Award, 
  Zap,
  Globe,
  TrendingUp,
  Heart,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, ensuring superior quality and results."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, building long-term relationships based on trust."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "We create solutions that make a positive difference for businesses and communities worldwide."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      description: "15+ years in technology leadership, former VP at Microsoft and Google.",
      expertise: ["Strategic Planning", "AI & Data", "Business Growth"]
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Technology Officer", 
      description: "PhD in Computer Science, 12+ years in AI/ML and educational technology.",
      expertise: ["AI/ML", "EdTech", "Technical Architecture"]
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Marketing",
      description: "10+ years in digital marketing, former marketing director at HubSpot.",
      expertise: ["SEO", "Content Strategy", "Growth Marketing"]
    },
    {
      name: "David Chen",
      role: "Head of Operations",
      description: "MBA from Wharton, 8+ years in operations and project management.",
      expertise: ["Operations", "Quality Assurance", "Client Success"]
    }
  ];

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Started with a vision to transform businesses through technology" },
    { year: "2019", title: "First 100 Clients", description: "Reached our first major milestone in client acquisition" },
    { year: "2020", title: "AI Services Launch", description: "Expanded into AI and data services during the digital transformation boom" },
    { year: "2021", title: "EdTech Solutions", description: "Launched comprehensive educational technology solutions" },
    { year: "2022", title: "Global Expansion", description: "Opened offices in 3 countries and served 500+ clients" },
    { year: "2023", title: "Innovation Awards", description: "Recognized as Top AI Services Provider and EdTech Innovator" },
    { year: "2024", title: "1000+ Projects", description: "Successfully completed over 1000 projects across all verticals" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-white/20 text-white">
              About Our Company
            </Badge>
            <h1 className="text-display text-white mb-6">
              Transforming Businesses Through
              <span className="block text-accent">Innovation & Excellence</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Since 2018, we've been helping organizations worldwide accelerate their growth through 
              comprehensive digital solutions, AI services, and innovative technology implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-heading-1 text-foreground">Our Mission</h2>
              </div>
              <p className="text-body-large text-muted-foreground mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation while maintaining the highest standards of quality and service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Accelerate digital transformation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Deliver exceptional results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Drive sustainable business growth</span>
                </li>
              </ul>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-accent rounded-lg text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-heading-1 text-foreground">Our Vision</h2>
              </div>
              <p className="text-body-large text-muted-foreground mb-6">
                To be the global leader in full-service digital solutions, recognized for innovation, 
                excellence, and our commitment to client success across all industries.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-card rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Global Leadership</h4>
                  <p className="text-sm text-muted-foreground">Setting industry standards for service excellence</p>
                </div>
                <div className="p-4 bg-gradient-card rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Innovation Focus</h4>
                  <p className="text-sm text-muted-foreground">Pioneering next-generation business solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Our Core Values</h2>
            <p className="text-body-large text-muted-foreground">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-heading-3 text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Leadership Team</h2>
            <p className="text-body-large text-muted-foreground">
              Meet the experienced leaders driving our company's vision and success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Our Journey</h2>
            <p className="text-body-large text-muted-foreground">
              Key milestones in our company's growth and evolution.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-lg" />
                  </div>
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-heading-1 text-white mb-6">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's work together to transform your business and achieve extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;