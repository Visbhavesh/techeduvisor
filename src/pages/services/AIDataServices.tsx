import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Brain, 
  Database, 
  Target, 
  Users, 
  CheckCircle,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import aiServicesImage from '@/assets/ai-services.jpg';

const AIDataServices = () => {
  const services = [
    {
      title: "Data Procurement",
      description: "High-quality, ethically sourced datasets tailored to your specific AI model requirements.",
      icon: <Database className="h-6 w-6" />,
      features: ["Multi-source data collection", "Quality verification", "Privacy compliance", "Custom formatting"],
      pricing: "Starting from $2,000",
      timeline: "2-4 weeks"
    },
    {
      title: "Data Annotation",
      description: "Precise labeling and annotation services by domain experts for machine learning training.",
      icon: <Target className="h-6 w-6" />,
      features: ["Image & video annotation", "Text classification", "Audio transcription", "Quality assurance"],
      pricing: "Starting from $0.10/item",
      timeline: "1-3 weeks"
    },
    {
      title: "AI Model Evaluation",
      description: "Comprehensive testing and validation of your AI models for performance optimization.",
      icon: <Brain className="h-6 w-6" />,
      features: ["Performance metrics", "Bias detection", "Accuracy testing", "Optimization recommendations"],
      pricing: "Starting from $5,000",
      timeline: "1-2 weeks"
    },
    {
      title: "Expert Sourcing",
      description: "Connect with qualified AI specialists and data scientists for your projects.",
      icon: <Users className="h-6 w-6" />,
      features: ["Vetted professionals", "Domain expertise", "Flexible engagement", "Quality guarantee"],
      pricing: "Starting from $75/hour",
      timeline: "1-7 days"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Faster Time-to-Market",
      description: "Accelerate your AI development cycle with ready-to-use, high-quality datasets."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Security & Compliance",
      description: "Enterprise-grade security and full compliance with GDPR, CCPA, and industry standards."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and project management for seamless execution."
    }
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "Automotive & Transportation", 
    "Retail & E-commerce",
    "Manufacturing",
    "Technology & Software"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your specific needs and define the scope of work."
    },
    {
      step: "02", 
      title: "Data Strategy",
      description: "Develop a comprehensive data strategy aligned with your goals."
    },
    {
      step: "03",
      title: "Execution",
      description: "Our experts execute the project with rigorous quality controls."
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final delivery with ongoing support and optimization."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge variant="outline" className="mb-4 border-white/20 text-white">
                AI & Data Services
              </Badge>
              <h1 className="text-display text-white mb-6">
                Power Your AI with 
                <span className="block text-accent">Quality Data Solutions</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From data procurement to AI model evaluation, we provide end-to-end data services 
                that accelerate your machine learning initiatives and ensure superior model performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
                <Button variant="outline-white" size="xl" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={aiServicesImage} 
                alt="AI and Data Services"
                className="rounded-xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Our AI & Data Services</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Comprehensive data solutions designed to power your AI initiatives and drive business intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-white">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span>{service.pricing}</span>
                        <span>•</span>
                        <span>{service.timeline}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline-primary" className="w-full group" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Why Choose Our AI Data Services?</h2>
            <p className="text-body-large text-muted-foreground">
              Industry-leading expertise and processes that ensure your AI projects succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-heading-3 text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Our Process</h2>
            <p className="text-body-large text-muted-foreground">
              A proven methodology that ensures quality and efficiency at every step.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div 
                key={process.step}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-y-0.5" />
                  )}
                </div>
                <h3 className="text-heading-4 text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Industries We Serve</h2>
            <p className="text-body-large text-muted-foreground">
              Specialized expertise across diverse sectors and use cases.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={industry}
                className="p-4 bg-card rounded-lg text-center hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-card-foreground font-medium">{industry}</span>
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
              Ready to Accelerate Your AI Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your data requirements and create a customized solution for your AI initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Request Consultation</Link>
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

export default AIDataServices;