import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Users,
  TrendingUp,
  Crown,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const packages = [
    {
      name: "Basic Launch",
      price: "$2,999",
      originalPrice: "$4,999",
      description: "Perfect for startups and small businesses getting started with digital transformation.",
      badge: "Most Popular",
      badgeColor: "bg-primary",
      features: [
        "AI Data Analysis Setup",
        "Basic SEO Optimization", 
        "Social Media Strategy",
        "Content Creation (10 pieces)",
        "Monthly Performance Reports",
        "Email Support",
        "1 Month Implementation"
      ],
      included: [
        "Free consultation",
        "Basic training included",
        "30-day support"
      ]
    },
    {
      name: "Growth Launch", 
      price: "$7,999",
      originalPrice: "$12,999",
      description: "Comprehensive solution for growing businesses ready to scale their operations.",
      badge: "Best Value",
      badgeColor: "bg-accent",
      features: [
        "Advanced AI & Data Services",
        "Complete SEO & Marketing Suite",
        "Custom EdTech Solutions",
        "Content Creation (25 pieces)",
        "Social Media Management",
        "Technology Integration",
        "Bi-weekly Progress Reviews",
        "Phone & Email Support",
        "3 Month Implementation"
      ],
      included: [
        "Free strategy session",
        "Advanced training included",
        "90-day support",
        "Custom dashboard"
      ]
    },
    {
      name: "Premium Launch",
      price: "$19,999", 
      originalPrice: "$29,999",
      description: "Enterprise-grade solution with full-service support and custom development.",
      badge: "Enterprise",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      features: [
        "Full AI & Data Pipeline",
        "Enterprise SEO & Marketing",
        "Custom EdTech Platform",
        "Unlimited Content Creation",
        "Complete Social Media Suite", 
        "Custom Technology Development",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "6 Month Implementation",
        "Expert Sourcing & Training"
      ],
      included: [
        "Executive strategy consultation",
        "White-glove onboarding",
        "1-year support included",
        "Custom integrations",
        "Performance guarantees"
      ]
    }
  ];

  const addOns = [
    {
      name: "AI Tutoring System",
      oneTime: "$2,499",
      recurring: "$399/month",
      description: "Custom AI-powered tutoring and assessment platform"
    },
    {
      name: "Advanced Analytics Dashboard", 
      oneTime: "$1,999",
      recurring: "$199/month",
      description: "Real-time business intelligence and reporting system"
    },
    {
      name: "Multi-language Support",
      oneTime: "$1,499",
      recurring: "$149/month", 
      description: "Expand globally with comprehensive localization"
    },
    {
      name: "API Integration Suite",
      oneTime: "$3,499",
      recurring: "$299/month",
      description: "Connect with CRM, ERP, and third-party systems"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "EduTech Innovations",
      role: "CEO",
      content: "The Growth Launch package transformed our entire business. Revenue increased 300% in 6 months!",
      rating: 5,
      package: "Growth Launch"
    },
    {
      name: "Michael Rodriguez", 
      company: "DataFlow Analytics",
      role: "CTO",
      content: "Premium Launch delivered beyond expectations. The AI solutions are game-changing.",
      rating: 5,
      package: "Premium Launch"
    },
    {
      name: "Sarah Kim",
      company: "StartupVenture",
      role: "Founder", 
      content: "Basic Launch was perfect for our startup. Great value and excellent support throughout.",
      rating: 5,
      package: "Basic Launch"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-bounce-in" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-bounce-in" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative z-10 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-white/20 text-white animate-pulse-glow">
              SimpleStart Packages
            </Badge>
            <h1 className="text-display text-white mb-6">
              Choose Your
              <span className="block text-accent animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                Success Package
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to transform your business, packaged for success. 
              From startups to enterprises, we have the perfect solution for your growth journey.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">SimpleStart Solution Packages</h2>
            <p className="text-body-large text-muted-foreground">
              Comprehensive packages designed to accelerate your business transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up ${
                  pkg.name === 'Growth Launch' ? 'ring-2 ring-accent scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-card opacity-50" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${pkg.badgeColor} text-white`}>
                      {pkg.badge}
                    </Badge>
                    {pkg.name === 'Premium Launch' && (
                      <Crown className="h-6 w-6 text-accent animate-bounce" />
                    )}
                  </div>
                  
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    <div>
                      <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                      <div className="text-sm text-accent font-semibold">Limited Time</div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-foreground">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h5 className="font-medium text-foreground text-sm">Bonus Included:</h5>
                    {pkg.included.map((bonus) => (
                      <div key={bonus} className="flex items-center space-x-2">
                        <Star className="h-3 w-3 text-accent fill-current" />
                        <span className="text-xs text-muted-foreground">{bonus}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={pkg.name === 'Growth Launch' ? 'accent' : 'hero'} 
                    size="lg" 
                    className="w-full group animate-pulse-glow"
                    asChild
                  >
                    <Link to="/contact">
                      {pkg.name === 'Premium Launch' ? 'Contact Sales' : 'Get Started'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Enhance Your Package</h2>
            <p className="text-body-large text-muted-foreground">
              Optional add-ons to customize your solution for specific needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <Card 
                key={addon.name}
                className="hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{addon.name}</h3>
                      <p className="text-sm text-muted-foreground">{addon.description}</p>
                    </div>
                    <Rocket className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">One-time:</span>
                        <div className="font-semibold text-foreground">{addon.oneTime}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Monthly:</span>
                        <div className="font-semibold text-primary">{addon.recurring}</div>
                      </div>
                    </div>
                    <Button variant="outline-primary" size="sm" asChild>
                      <Link to="/contact">Add to Package</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Testimonials Carousel */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Success Stories</h2>
            <p className="text-body-large text-muted-foreground">
              Real results from businesses that chose SimpleStart packages.
            </p>
          </div>

          {/* Infinite scrolling testimonials */}
          <div className="relative">
            <div className="flex animate-slide-testimonials space-x-6">
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <Card 
                  key={`${testimonial.name}-${index}`}
                  className="flex-shrink-0 w-80 hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.package}
                      </Badge>
                      <div className="flex ml-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-accent fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Successful Launches", icon: <Rocket className="h-8 w-8" /> },
              { value: "98%", label: "Client Satisfaction", icon: <Star className="h-8 w-8" /> },
              { value: "300%", label: "Average ROI", icon: <TrendingUp className="h-8 w-8" /> },
              { value: "24/7", label: "Support Available", icon: <Users className="h-8 w-8" /> }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white mb-4 animate-pulse-glow">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
              Ready to Launch Your Success?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed with SimpleStart packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;