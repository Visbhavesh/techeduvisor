import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Award,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "EduTech Platform Transformation",
      client: "Global Learning Corp",
      industry: "Education Technology",
      challenge: "Outdated learning management system serving 50K+ students with poor engagement rates",
      solution: "Complete platform redesign with AI-powered personalization and modern UX",
      results: [
        "300% increase in student engagement",
        "45% improvement in completion rates", 
        "60% reduction in support tickets",
        "2M+ active users within 6 months"
      ],
      technologies: ["React", "AI/ML", "Cloud Infrastructure", "Mobile Apps"],
      duration: "4 months",
      image: "/api/placeholder/600/400",
      testimonial: "The transformation exceeded all our expectations. Student satisfaction is at an all-time high.",
      testimonialAuthor: "Dr. Sarah Johnson, CTO"
    },
    {
      title: "AI Data Pipeline for Healthcare",
      client: "MedTech Innovations",
      industry: "Healthcare",
      challenge: "Manual data processing taking 40+ hours weekly, delaying critical research insights",
      solution: "Automated AI data pipeline with real-time processing and quality validation",
      results: [
        "95% reduction in processing time",
        "99.8% data accuracy achieved",
        "$2M+ annual cost savings",
        "Real-time insights delivery"
      ],
      technologies: ["Python", "Machine Learning", "Cloud Computing", "API Integration"],
      duration: "3 months", 
      image: "/api/placeholder/600/400",
      testimonial: "This AI solution revolutionized our research capabilities and accelerated time-to-market.",
      testimonialAuthor: "Dr. Michael Chen, Research Director"
    },
    {
      title: "Digital Marketing Transformation",
      client: "RetailMax Group",
      industry: "E-commerce",
      challenge: "Declining organic traffic and poor conversion rates across multiple channels",
      solution: "Comprehensive SEO strategy with content marketing and paid advertising optimization",
      results: [
        "400% increase in organic traffic",
        "250% improvement in conversion rate",
        "180% boost in revenue",
        "#1 rankings for 50+ keywords"
      ],
      technologies: ["SEO Tools", "Analytics", "Marketing Automation", "A/B Testing"],
      duration: "6 months",
      image: "/api/placeholder/600/400", 
      testimonial: "Our online presence completely transformed. We're now the market leader in our segment.",
      testimonialAuthor: "Jennifer Walsh, Marketing Director"
    }
  ];

  const stats = [
    { value: "300+", label: "Successful Projects", icon: <Award className="h-6 w-6" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Users className="h-6 w-6" /> },
    { value: "250%", label: "Average ROI", icon: <TrendingUp className="h-6 w-6" /> },
    { value: "45 days", label: "Average Delivery", icon: <Clock className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-white/20 text-white">
              Success Stories
            </Badge>
            <h1 className="text-display text-white mb-6">
              Real Results from
              <span className="block text-accent">Real Businesses</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve remarkable growth 
              and transformation through our comprehensive solutions.
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
                className="text-center animate-bounce-in"
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

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Featured Case Studies</h2>
            <p className="text-body-large text-muted-foreground">
              In-depth look at how we've solved complex challenges and delivered exceptional results.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.title}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative aspect-video lg:aspect-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <TrendingUp className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{study.client}</h3>
                        <p className="text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-3 mb-6">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <Badge variant="outline">{study.duration}</Badge>
                    </div>

                    <h3 className="text-heading-2 text-foreground mb-4">{study.title}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {study.results.map((result) => (
                            <div key={result} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-muted-foreground italic mb-2">"{study.testimonial}"</p>
                        <p className="text-sm font-medium text-foreground">— {study.testimonialAuthor}</p>
                      </div>

                      <Button variant="hero" className="group" asChild>
                        <Link to="/contact">
                          Start Similar Project
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Our Success Process</h2>
            <p className="text-body-large text-muted-foreground">
              The proven methodology behind every successful project.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Deep dive into your challenges and goals" },
              { step: "02", title: "Strategy", description: "Custom solution design and planning" },
              { step: "03", title: "Execution", description: "Agile implementation with regular updates" },
              { step: "04", title: "Success", description: "Launch, optimization, and ongoing support" }
            ].map((process, index) => (
              <div 
                key={process.step}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto animate-pulse-glow">
                    {process.step}
                  </div>
                  {index < 3 && (
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the growing list of businesses that have transformed with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/solutions">View Our Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;