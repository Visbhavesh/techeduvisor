import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ArrowRight,
  Calendar,
  Clock,
  User,
  Search,
  TrendingUp,
  Brain,
  GraduationCap,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI in Business: 2024 Trends and Predictions",
    excerpt: "Explore how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the AI-driven economy.",
    author: "Dr. Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/api/placeholder/800/400",
    tags: ["AI", "Business Strategy", "Future Tech"]
  };

  const blogPosts = [
    {
      title: "Building Effective EdTech Solutions: A Complete Guide",
      excerpt: "Learn the essential principles and best practices for creating educational technology that truly engages learners and improves outcomes.",
      author: "Michael Rodriguez",
      date: "December 12, 2024", 
      readTime: "6 min read",
      category: "EdTech",
      tags: ["Education", "Technology", "UX Design"],
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      title: "SEO in 2024: Advanced Strategies That Actually Work",
      excerpt: "Discover the latest SEO techniques and algorithm updates that are driving organic traffic growth for businesses worldwide.",
      author: "Jennifer Walsh",
      date: "December 10, 2024",
      readTime: "7 min read", 
      category: "SEO & Marketing",
      tags: ["SEO", "Digital Marketing", "Growth"],
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Data Annotation Best Practices for AI Success",
      excerpt: "Master the art of data preparation with proven techniques that ensure your AI models perform at their peak potential.",
      author: "Dr. Rajesh Kumar",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "AI & Data",
      tags: ["Data Science", "Machine Learning", "AI"],
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: "Digital Transformation: A Step-by-Step Business Guide",
      excerpt: "Navigate your organization's digital transformation journey with practical strategies and real-world case studies.",
      author: "David Chen",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Business Growth",
      tags: ["Digital Transformation", "Strategy", "Leadership"],
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Content Marketing ROI: Measuring Success in 2024",
      excerpt: "Learn how to track, measure, and optimize your content marketing efforts for maximum return on investment.",
      author: "Maria Rodriguez",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Content Marketing",
      tags: ["Content Strategy", "Analytics", "ROI"],
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Building AI-Powered Learning Management Systems",
      excerpt: "Explore how artificial intelligence is revolutionizing educational platforms and creating personalized learning experiences.",
      author: "Dr. Sarah Johnson", 
      date: "December 1, 2024",
      readTime: "8 min read",
      category: "EdTech",
      tags: ["AI", "Education", "LMS"],
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const categories = [
    { name: "All Posts", count: 50, active: true },
    { name: "AI & Technology", count: 15 },
    { name: "EdTech", count: 12 },
    { name: "SEO & Marketing", count: 18 },
    { name: "Business Growth", count: 8 },
    { name: "Thought Leadership", count: 7 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-white/20 text-white">
              Insights & Knowledge
            </Badge>
            <h1 className="text-display text-white mb-6">
              Stay Ahead with
              <span className="block text-accent">Expert Insights</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the latest trends, strategies, and innovations in AI, EdTech, 
              digital marketing, and business transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <Input 
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category.name}
                variant={category.active ? "hero" : "outline"}
                size="sm"
                className={`animate-fade-in ${!category.active && 'hover:bg-primary hover:text-primary-foreground'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-heading-1 text-foreground mb-4">Featured Article</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-video lg:aspect-auto">
                <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-10 w-10 text-white" />
                    </div>
                    <Badge className="bg-accent text-white">Featured</Badge>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h3 className="text-heading-2 text-foreground mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-foreground">{featuredPost.author}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="hero" className="group" asChild>
                  <Link to="/blog/ai-future-business-2024">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 text-foreground mb-4">Latest Articles</h2>
            <p className="text-body-large text-muted-foreground">
              Fresh insights and actionable strategies from our team of experts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.title}
                className="hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-gradient-primary rounded-lg text-white">
                      {post.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline-primary" className="w-full group" asChild>
                    <Link to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-heading-1 text-white mb-6">
              Never Miss an Insight
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for weekly updates on AI, EdTech, and business growth strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="accent" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-sm text-white/60 mt-4">
              Join 10,000+ professionals getting actionable insights weekly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;