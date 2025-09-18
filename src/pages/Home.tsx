import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-banner.jpg';
import aiServicesImage from '@/assets/ai-services.jpg';
import edtechServicesImage from '@/assets/edtech-services.jpg';
import marketingServicesImage from '@/assets/marketing-services.jpg';
import MovingImageCarousel from './Crousel';

const Home = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "500+", label: "Happy Clients" },
    { icon: <Award className="h-8 w-8" />, value: "1000+", label: "Projects Completed" },
    { icon: <TrendingUp className="h-8 w-8" />, value: "98%", label: "Success Rate" },
    { icon: <Star className="h-8 w-8" />, value: "4.9/5", label: "Client Rating" }
  ];

  const services = [
    {
      title: "AI & Data Services",
      description: "Advanced AI solutions, data procurement, annotation, and machine learning services to power your business intelligence.",
      image: aiServicesImage,
      link: "/services/ai-data",
      features: ["Data Procurement", "AI Model Training", "Expert Annotation", "Quality Assurance"]
    },
    {
      title: "EdTech Solutions", 
      description: "Comprehensive educational technology solutions from K-12 to higher education and professional training programs.",
      image: edtechServicesImage,
      link: "/services/edtech",
      features: ["Curriculum Development", "LMS Solutions", "Assessment Tools", "Teacher Training"]
    },
    {
      title: "Digital Marketing & SEO",
      description: "Complete digital marketing ecosystem including SEO, social media management, and integrated marketing campaigns.",
      image: marketingServicesImage,
      link: "/services/marketing",
      features: ["Technical SEO", "Content Marketing", "Social Media", "Paid Advertising"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CEO",
      content: "Their AI solutions transformed our data processing capabilities. Outstanding expertise and delivery.",
      rating: 5
    },
    {
      name: "Dr. Rajesh Kumar",
      company: "EduTech India",
      role: "Founder",
      content: "The EdTech solutions provided helped us scale our online education platform to 100K+ students.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Marketing Inc",
      role: "Marketing Director", 
      content: "Their SEO and digital marketing strategies increased our organic traffic by 300% in 6 months.",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: "TechCorp", logo: "TC" },
    { name: "EduTech", logo: "ET" },
    { name: "GlobalMark", logo: "GM" },
    { name: "DataFlow", logo: "DF" },
    { name: "InnovateLab", logo: "IL" },
    { name: "SmartSolutions", logo: "SS" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>

       <MovingImageCarousel />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Our Core Services</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-heading-3 text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline-primary" className="w-full group" asChild>
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Trusted by industry leaders worldwide</p>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={client.name}
                className="flex items-center justify-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-card rounded-lg flex items-center justify-center border border-border">
                  <span className="font-bold text-lg text-muted-foreground">{client.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-body-large text-muted-foreground">
              Real results and success stories from our valued clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive solutions can drive your growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;