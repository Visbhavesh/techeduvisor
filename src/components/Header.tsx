import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Sun, 
  Moon,
  Briefcase,
  GraduationCap,
  PenTool,
  Search,
  Users,
  Code,
  UserCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('en');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const serviceCategories = [
    {
      title: 'AI & Data Services',
      icon: <Code className="h-5 w-5" />,
      items: [
        'Data Procurement',
        'Data Annotation',
        'AI Evaluation',
        'Expert Sourcing',
        'Machine Learning Solutions'
      ]
    },
    {
      title: 'EdTech Solutions',
      icon: <GraduationCap className="h-5 w-5" />,
      items: [
        'K-12 Solutions',
        'Competitive Exams',
        'Higher Education',
        'Curriculum Development',
        'Teacher Training'
      ]
    },
    {
      title: 'Digital Content Services',
      icon: <PenTool className="h-5 w-5" />,
      items: [
        'Academic Content',
        'Marketing Content', 
        'Creative Content',
        'Thought Leadership',
        'Technical Writing'
      ]
    },
    {
      title: 'SEO & Digital Marketing',
      icon: <Search className="h-5 w-5" />,
      items: [
        'On-page SEO',
        'Off-page SEO', 
        'Technical SEO',
        'Local SEO',
        'Multilingual SEO'
      ]
    },
    {
      title: 'Social Media Management',
      icon: <Users className="h-5 w-5" />,
      items: [
        'Strategy Development',
        'Content Creation',
        'Paid Advertising',
        'Community Management',
        'Analytics & Reporting'
      ]
    },
    {
      title: 'Technology Solutions',
      icon: <Briefcase className="h-5 w-5" />,
      items: [
        'AI Tools Development',
        'LMS Solutions',
        'Exam Portals',
        'Mobile Apps',
        'Custom Dashboards'
      ]
    },
    {
      title: 'Talent & Expert Sourcing',
      icon: <UserCheck className="h-5 w-5" />,
      items: [
        'Subject Matter Experts',
        'PhD Researchers',
        'Contract Experts',
        'Full-time Talent',
        'AI Tutors'
      ]
    }
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FS</span>
              </div>
              <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform">
                Tech Eduvisor
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative",
                    location.pathname === link.href 
                      ? "text-primary" 
                      : "text-foreground/80"
                  )}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                  )}
                </Link>
              ))}
              
              {/* Services Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center space-x-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  <span>Services</span>
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    isServicesOpen && "rotate-180"
                  )} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-6xl bg-background border border-border rounded-xl shadow-xl animate-fade-in-up">
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceCategories.map((category, index) => (
                          <div key={category.title} className="group">
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="p-2 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform">
                                {category.icon}
                              </div>
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {category.title}
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item}>
                                  <Link
                                    to={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-6 border-t border-border">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">
                            Comprehensive solutions for your business growth
                          </p>
                          <Button variant="hero" size="sm" asChild>
                            <Link to="/services">View All Services</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{language === 'en' ? 'EN' : 'हिं'}</span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              {/* CTA Button */}
              <Button variant="cta" size="sm" className="hidden md:inline-flex" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-foreground"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="cta" size="lg" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="cta"
          size="icon"
          className="rounded-full w-14 h-14 shadow-2xl animate-bounce-in"
          asChild
        >
          <a 
            href="https://wa.me/+919876543210" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
            </svg>
          </a>
        </Button>
      </div>
    </>
  );
};

export default Header;