import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  Brain,
  GraduationCap,
  PenTool,
  Search,
  Users,
  Code,
  UserCheck,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import aiServicesImage from '@/assets/ai-services.jpg';
import edtechServicesImage from '@/assets/edtech-services.jpg';
import marketingServicesImage from '@/assets/marketing-services.jpg';

const Services = () => {
  const serviceCategories = [
    {
      title: 'AI & Data Services',
      description: 'Advanced AI solutions, data procurement, annotation, and machine learning services to power your business intelligence.',
      icon: <Brain className="h-8 w-8" />,
      image: aiServicesImage,
      link: '/services/ai-data',
      pricing: 'Starting from $2,000',
      features: [
        'Data Procurement & Sourcing',
        'Expert Data Annotation',
        'AI Model Evaluation',
        'Machine Learning Consulting',
        'Custom AI Solutions'
      ],
      industries: ['Healthcare', 'Finance', 'Retail', 'Manufacturing'],
      badge: 'Most Popular'
    },
    {
      title: 'EdTech Solutions',
      description: 'Comprehensive educational technology solutions from K-12 to higher education and professional training programs.',
      icon: <GraduationCap className="h-8 w-8" />,
      image: edtechServicesImage,
      link: '/services/edtech',
      pricing: 'Starting from $5,000',
      features: [
        'K-12 Learning Solutions',
        'Competitive Exam Platforms',
        'Higher Education Systems',
        'Curriculum Development',
        'Teacher Training Programs'
      ],
      industries: ['Education', 'Corporate Training', 'Government', 'Non-profit']
    },
    {
      title: 'Digital Content Services',
      description: 'Professional content creation including academic writing, marketing content, and thought leadership materials.',
      icon: <PenTool className="h-8 w-8" />,
      image: marketingServicesImage,
      link: '/services/content',
      pricing: 'Starting from $500',
      features: [
        'Academic Content Writing',
        'Marketing Copy Creation',
        'Technical Documentation',
        'Creative Content Design',
        'Thought Leadership Articles'
      ],
      industries: ['Publishing', 'Marketing Agencies', 'SaaS', 'Consulting']
    },
    {
      title: 'SEO & Digital Marketing',
      description: 'Complete digital marketing ecosystem including SEO, content marketing, and integrated marketing campaigns.',
      icon: <Search className="h-8 w-8" />,
      image: marketingServicesImage,
      link: '/services/marketing',
      pricing: 'Starting from $1,200/month',
      features: [
        'Technical SEO Optimization',
        'Content Marketing Strategy',
        'Local & Multilingual SEO',
        'Paid Advertising Campaigns',
        'Analytics & Reporting'
      ],
      industries: ['E-commerce', 'Local Business', 'B2B', 'Healthcare'],
      badge: 'High ROI'
    },
    {
      title: 'Social Media Management',
      description: 'Full-service social media strategy, content creation, advertising, and community management.',
      icon: <Users className="h-8 w-8" />,
      image: marketingServicesImage,
      link: '/services/social-media',
      pricing: 'Starting from $800/month',
      features: [
        'Social Media Strategy',
        'Content Creation & Design',
        'Paid Social Advertising',
        'Community Engagement',
        'Performance Analytics'
      ],
      industries: ['Retail', 'Hospitality', 'Fashion', 'Food & Beverage']
    },
    {
      title: 'Technology Solutions',
      description: 'Custom software development, AI tools, LMS platforms, and enterprise application development.',
      icon: <Code className="h-8 w-8" />,
      image: aiServicesImage,
      link: '/services/technology',
      pricing: 'Starting from $10,000',
      features: [
        'Custom Software Development',
        'LMS & Learning Platforms',
        'Exam & Assessment Portals',
        'Mobile App Development',
        'API & System Integration'
      ],
      industries: ['Enterprise', 'Startups', 'Government', 'Healthcare']
    },
    {
      title: 'Talent & Expert Sourcing',
      description: 'Connect with qualified professionals including SMEs, PhDs, and specialized talent for your projects.',
      icon: <UserCheck className="h-8 w-8" />,
      image: edtechServicesImage,
      link: '/services/talent',
      pricing: 'Starting from $50/hour',
      features: [
        'Subject Matter Experts',
        'PhD & Research Professionals',
        'Contract & Freelance Talent',
        'Full-time Recruitment',
        'AI Tutors & Trainers'
      ],
      industries: ['Consulting', 'Research', 'EdTech', 'AI/ML']
    }
  ];

  const stats = [
    { value: '1000+', label: 'Projects Completed', icon: <TrendingUp className="h-6 w-6" /> },
    { value: '500+', label: 'Happy Clients', icon: <Users className="h-6 w-6" /> },
    { value: '15+', label: 'Industries Served', icon: <Star className="h-6 w-6" /> },
    { value: '98%', label: 'Success Rate', icon: <CheckCircle className="h-6 w-6" /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your requirements, challenges, and goals to create a tailored strategy.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our experts develop a comprehensive plan with timelines, milestones, and deliverables.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the project with regular updates, quality checks, and stakeholder communication.'
    },
    {
      step: '04',
      title: 'Delivery & Support',
      description: 'Final delivery with training, documentation, and ongoing support options.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-white/20 text-white">
              Full Service Solutions
            </Badge>
            <h1 className="text-display text-white mb-6">
              Comprehensive Services for
              <span className="block text-accent">Every Business Need</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              From AI and data services to EdTech solutions and digital marketing, 
              we provide end-to-end services that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Our Service Portfolio</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise across multiple domains to accelerate your business transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  {service.badge && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      {service.badge}
                    </Badge>
                  )}
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3 text-white">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-sm opacity-90">{service.pricing}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Services:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-foreground mb-3">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry) => (
                        <Badge key={industry} variant="secondary" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="hero" className="flex-1 group" asChild>
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button variant="outline-primary" asChild>
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Our Proven Process</h2>
            <p className="text-body-large text-muted-foreground">
              A systematic approach that ensures quality delivery and client satisfaction.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div 
                key={process.step}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {process.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-y-0.5" />
                  )}
                </div>
                <h3 className="text-heading-4 text-foreground mb-3">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-heading-1 text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a customized solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/solutions">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;