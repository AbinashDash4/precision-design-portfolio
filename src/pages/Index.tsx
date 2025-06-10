import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin, Code, Palette, Briefcase, GraduationCap, Award, Calendar, Star, Home, User, FolderOpen, Zap, BookOpen, Trophy, MessageCircle, Send, Instagram, X, Globe, Eye, CheckCircle, Sparkles, Cpu, Database, Monitor } from "lucide-react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [currentProfessionText, setCurrentProfessionText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Crafting Digital Experiences That Matter";

  const professions = [
    "UI/UX Designer",
    "Frontend Developer", 
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Creative Technologist"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentProfession = professions[currentProfessionIndex];
    let charIndex = 0;
    setIsTyping(true);
    setCurrentProfessionText('');

    const typingTimer = setInterval(() => {
      if (charIndex <= currentProfession.length) {
        setCurrentProfessionText(currentProfession.slice(0, charIndex));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingTimer);
        
        // Wait before starting to type the next profession
        setTimeout(() => {
          setCurrentProfessionIndex((prevIndex) => 
            (prevIndex + 1) % professions.length
          );
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, [currentProfessionIndex]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'certifications', label: 'Certifications', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  const skillsData = [
    { name: "Java", category: "Programming", level: "Expert", icon: Code, color: "from-orange-400 to-red-500" },
    { name: "Python", category: "Programming", level: "Expert", icon: Code, color: "from-blue-400 to-blue-600" },
    { name: "React", category: "Frontend", level: "Advanced", icon: Monitor, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", category: "Frontend", level: "Advanced", icon: Code, color: "from-blue-500 to-indigo-600" },
    { name: "UI/UX Design", category: "Design", level: "Expert", icon: Palette, color: "from-pink-400 to-purple-500" },
    { name: "Figma", category: "Design", level: "Expert", icon: Palette, color: "from-purple-400 to-pink-500" },
    { name: "AI/ML", category: "Technology", level: "Advanced", icon: Cpu, color: "from-green-400 to-emerald-500" },
    { name: "MySQL", category: "Database", level: "Advanced", icon: Database, color: "from-yellow-400 to-orange-500" }
  ];

  const projects = [
    {
      title: "Smart Contact Manager",
      description: "Advanced contact management system with AI-powered search, automated categorization, and seamless data synchronization across multiple platforms.",
      tech: ["Java", "MySQL", "Swing", "JDBC", "AI Search"],
      github: "https://github.com/abinashdash",
      features: ["Smart AI Search", "Auto-categorization", "Data Export", "Cloud Sync", "Advanced Analytics"],
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      title: "AI Vision System",
      description: "Cutting-edge computer vision platform utilizing deep learning for real-time object detection, facial recognition, and behavioral analysis.",
      tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "CNN"],
      github: "https://github.com/abinashdash",
      features: ["Real-time Detection", "Multi-object Recognition", "Behavioral Analysis", "Performance Metrics", "Edge Computing"],
      gradient: "from-green-400 via-emerald-500 to-teal-600"
    },
    {
      title: "Neural Age Predictor",
      description: "Sophisticated deep learning model for accurate age and gender prediction with real-time processing and comprehensive demographic analytics.",
      tech: ["Python", "Keras", "CNN", "Computer Vision", "Analytics"],
      github: "https://github.com/abinashdash",
      features: ["High Precision ML", "Real-time Processing", "Demographic Analytics", "Batch Processing", "API Integration"],
      gradient: "from-orange-400 via-red-500 to-pink-600"
    }
  ];

  const experiences = [
    {
      title: "Deep Learning Research Intern",
      company: "Center for Technology Transfer & Commercialization",
      duration: "45 days",
      period: "2024",
      description: "Led cutting-edge research in computer vision and deep learning, developing production-ready AI models with industry applications and mentoring junior researchers.",
      skills: ["Deep Learning", "Computer Vision", "Research", "TensorFlow", "Python", "Model Optimization"],
      achievements: [
        "Developed 3 production-ready AI models with 95%+ accuracy",
        "Published research findings in industry conferences",
        "Optimized model performance by 40% through advanced techniques",
        "Led cross-functional team of 5 researchers",
        "Created comprehensive documentation and training materials"
      ],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Software Development Intern", 
      company: "IIG Varsity",
      duration: "1 month",
      period: "2023",
      description: "Gained expertise in full-stack development and database architecture, building scalable applications and establishing development best practices.",
      skills: ["Full-Stack Development", "Database Design", "Java", "MySQL", "System Architecture"],
      achievements: [
        "Built comprehensive management system serving 500+ users",
        "Designed optimized database schema reducing query time by 60%",
        "Implemented robust security measures and data validation",
        "Created automated testing suite with 90% code coverage",
        "Mentored 3 junior developers in coding best practices"
      ],
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  const certifications = [
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Coursera",
      date: "2023",
      type: "certification",
      description: "Comprehensive program covering advanced user research, design systems, and usability testing methodologies",
      skills: ["User Research", "Design Systems", "Prototyping", "Usability Testing"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "NPTEL - Advanced Algorithms & Data Structures",
      issuer: "NPTEL",
      date: "2023", 
      type: "certification",
      description: "Advanced coursework in algorithm optimization, complexity analysis, and performance engineering",
      skills: ["Algorithm Design", "Complexity Analysis", "Performance Optimization"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Excellence Award - AI/ML Project (1st Place)",
      issuer: "GIFT Autonomous College",
      date: "2024",
      type: "achievement",
      description: "First place recognition for innovative AI/ML project showcasing technical excellence and practical impact",
      skills: ["AI/ML", "Innovation", "Project Leadership"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "2023",
      type: "certification", 
      description: "Comprehensive data science program covering machine learning, data visualization, and statistical analysis",
      skills: ["Data Science", "Machine Learning", "Statistical Analysis"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering (Artificial Intelligence)",
      institution: "GIFT Autonomous College, Bhubaneswar",
      university: "Biju Patnaik University of Technology (BPUT)",
      duration: "2022 - 2025",
      cgpa: "6.5",
      achievements: [
        "Specialized in AI/ML with focus on Computer Vision and Neural Networks",
        "Led multiple research projects in deep learning applications",
        "Active contributor to open-source AI/ML libraries",
        "Winner of prestigious SIP 2024 competition"
      ],
      coursework: [
        "Artificial Intelligence & Machine Learning",
        "Data Structures & Algorithms", 
        "Computer Vision & Image Processing",
        "Database Management Systems",
        "Software Engineering & Design Patterns",
        "Web Technologies & Cloud Computing"
      ],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science Stream (Physics, Chemistry, Mathematics)",
      institution: "Kendriya Vidyalaya, Bhubaneswar",
      university: "Council of Higher Secondary Education, Odisha",
      duration: "2020 - 2022",
      percentage: "65%",
      achievements: [
        "Advanced Mathematics and Physics specialization",
        "Winner of inter-school programming competition",
        "Led computer science club initiatives",
        "Completed advanced programming fundamentals"
      ],
      coursework: [
        "Advanced Mathematics",
        "Physics & Applied Physics",
        "Chemistry & Organic Chemistry", 
        "Computer Science Programming",
        "English Literature & Communication"
      ],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "All Subjects with Science Focus",
      institution: "Government High School, Khordha",
      university: "Board of Secondary Education, Odisha",
      duration: "2019 - 2020",
      percentage: "58%",
      achievements: [
        "Strong foundation in STEM subjects",
        "Participated in state-level science exhibitions",
        "Early recognition for analytical and problem-solving skills",
        "Consistent academic performance with leadership qualities"
      ],
      coursework: [
        "Mathematics & Geometry",
        "Science (Physics, Chemistry, Biology)",
        "Social Studies & History",
        "English & Communication Skills",
        "Regional Languages (Hindi, Odia)"
      ],
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-x-hidden relative">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
      </div>

      {/* Enhanced Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center group">
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Abinash Dash
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-4 py-2 group"
                >
                  <item.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {item.label}
                </Button>
              ))}
            </nav>

            <Button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 hover:from-cyan-600 hover:via-purple-600 hover:to-emerald-600 text-black font-semibold shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 rounded-full px-6 py-2 border border-white/20">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10 max-w-7xl">
          <div className="animate-float mb-16">
            <div className="w-56 h-56 mx-auto mb-12 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 p-1 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 group">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center group-hover:from-gray-800 group-hover:to-gray-900 transition-all duration-500">
                <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">AD</span>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent leading-tight tracking-tight">
              Abinash Dash
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
          </div>
          
          <div className="mb-16 h-32 flex items-center justify-center">
            <div className="text-center space-y-4">
              <p className="text-2xl text-gray-300 font-light">I'm a passionate</p>
              <div className="h-20 flex items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent font-bold text-4xl md:text-5xl lg:text-6xl">
                  {currentProfessionText}
                  {isTyping && <span className="animate-pulse text-emerald-400">|</span>}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <p className="text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-200 max-w-5xl mx-auto leading-relaxed font-light">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">
                {typewriterText}
                <span className="animate-pulse text-emerald-400">|</span>
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 hover:from-cyan-600 hover:via-purple-600 hover:to-emerald-600 text-black font-bold px-16 py-8 text-xl rounded-full shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-110 transition-all duration-500 border border-white/20">
              <Download className="w-6 h-6 mr-3" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/20 hover:border-emerald-400 px-16 py-8 text-xl rounded-full shadow-2xl hover:shadow-emerald-500/20 transform hover:scale-110 transition-all duration-500 backdrop-blur-xl bg-white/5"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-6 h-6 mr-3" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold text-center mb-24 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 rounded-3xl shadow-2xl shadow-black/50 hover:shadow-cyan-500/20 group">
              <CardHeader className="p-8">
                <CardTitle className="text-cyan-400 flex items-center text-2xl font-bold group-hover:text-cyan-300 transition-colors duration-300">
                  <Sparkles className="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform duration-300" />
                  Vision & Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-8 pt-0">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I believe in the transformative power of technology to create meaningful experiences. My approach combines 
                  cutting-edge technical skills with human-centered design thinking to build solutions that truly matter.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Specializing in AI/ML and full-stack development, I'm passionate about creating intelligent systems 
                  that enhance human capabilities and solve real-world challenges.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["Innovation", "Excellence", "Impact", "Growth"].map((value, index) => (
                    <Badge key={index} variant="outline" className="border-cyan-400/50 text-cyan-400 bg-cyan-400/10 px-4 py-2 text-sm font-medium hover:bg-cyan-400/20 transition-colors duration-300">
                      {value}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-2xl border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-500 rounded-3xl shadow-2xl shadow-black/50 hover:shadow-emerald-500/20 group">
              <CardHeader className="p-8">
                <CardTitle className="text-emerald-400 flex items-center text-2xl font-bold group-hover:text-emerald-300 transition-colors duration-300">
                  <Code className="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform duration-300" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-8 pt-0">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group/item hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-lg">AI/ML Development</h4>
                      <p className="text-gray-400">Building intelligent systems with deep learning and computer vision</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group/item hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-lg">Full-Stack Development</h4>
                      <p className="text-gray-400">Creating scalable web applications with modern technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group/item hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-lg">UI/UX Design</h4>
                      <p className="text-gray-400">Designing intuitive and beautiful user experiences</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Experience</h2>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 rounded-2xl shadow-2xl shadow-cyan-500/5 overflow-hidden group">
                <div className={`h-1 bg-gradient-to-r ${exp.gradient}`}></div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-white text-2xl mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-lg font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <Badge variant="outline" className="border-emerald-400/50 text-emerald-400 bg-emerald-400/10 mb-2">
                        {exp.duration}
                      </Badge>
                      <p className="text-sm text-gray-400">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-300 flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-emerald-400 mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 transition-colors duration-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105 group rounded-2xl shadow-2xl shadow-cyan-500/5 overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Key Features
                      </h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-emerald-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-cyan-400/30 text-cyan-400 bg-cyan-400/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 rounded-full">
                      <Github className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Skills & Expertise</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillsData.map((skill, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-110 group cursor-pointer rounded-2xl shadow-2xl shadow-cyan-500/5">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</h3>
                  <Badge variant="secondary" className="mb-2 bg-gray-800 text-gray-300 border border-gray-600">
                    {skill.category}
                  </Badge>
                  <p className="text-sm font-medium text-emerald-400">{skill.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Education</h2>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 rounded-2xl shadow-2xl shadow-cyan-500/5 overflow-hidden group">
                <div className={`h-1 bg-gradient-to-r ${edu.gradient}`}></div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors duration-300 text-2xl">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg font-medium mb-2">
                    {edu.field}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-white text-lg font-medium">{edu.institution}</p>
                    <p className="text-gray-400">{edu.university}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="text-emerald-400 font-medium">{edu.duration}</span>
                      {edu.cgpa && <span className="text-cyan-400 font-medium">CGPA: {edu.cgpa}</span>}
                      {edu.percentage && <span className="text-cyan-400 font-medium">Score: {edu.percentage}</span>}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-4 flex items-center">
                        <Trophy className="w-5 h-5 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-300 flex items-start">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-emerald-400 mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary" className="bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 transition-colors duration-300">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Certifications & Awards</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105 rounded-2xl shadow-2xl shadow-cyan-500/5 overflow-hidden group">
                <div className={`h-1 bg-gradient-to-r ${cert.gradient}`}></div>
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="w-6 h-6 mr-3 text-emerald-400" />
                      {cert.title}
                    </div>
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-gray-800 text-white border border-gray-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Badge variant="outline" className="border-emerald-400/50 text-emerald-400 bg-emerald-400/10">
                    {cert.type === 'certification' ? 'Professional Certificate' : 'Achievement Award'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Let's Connect</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 rounded-2xl shadow-2xl shadow-cyan-500/5">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center text-xl">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Let's discuss your next project or collaboration opportunity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                  <Phone className="w-6 h-6 mr-4 text-cyan-400" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-400">+91 7978825471</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                  <Mail className="w-6 h-6 mr-4 text-emerald-400" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-400">abinashdash2022@gift.edu.in</p>
                    <p className="text-gray-400">abinashdash019@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                  <MapPin className="w-6 h-6 mr-4 text-purple-400" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-400">Binjhagiri, Khordha, Odisha, India</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="font-medium text-white mb-4">Connect With Me</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-xl">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 rounded-xl">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 rounded-xl">
                      <Instagram className="w-5 h-5 mr-2" />
                      Instagram
                    </Button>
                    <Button variant="outline" className="border-pink-400/50 text-pink-400 hover:bg-pink-400/10 rounded-xl">
                      <X className="w-5 h-5 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 hover:border-gray-600 transition-all duration-500 rounded-2xl shadow-2xl shadow-emerald-500/5">
              <CardHeader>
                <CardTitle className="text-emerald-400 flex items-center text-xl">
                  <Send className="w-6 h-6 mr-3" />
                  Send Message
                </CardTitle>
                <CardDescription className="text-gray-300">
                  I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-300 block mb-2">Message *</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-black font-semibold py-4 rounded-xl transform hover:scale-105 transition-all duration-300">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 bg-gradient-to-t from-black to-gray-900/50 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-6">Abinash Dash</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Passionate about creating innovative solutions through technology and design.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6 text-xl">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-left hover:translate-x-1 transform"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6 text-xl">Connect</h4>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 rounded-xl p-3 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="outline" className="border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20 hover:border-emerald-400 rounded-xl p-3 transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="outline" className="border-purple-400/30 text-purple-400 hover:bg-purple-400/20 hover:border-purple-400 rounded-xl p-3 transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="outline" className="border-pink-400/30 text-pink-400 hover:bg-pink-400/20 hover:border-pink-400 rounded-xl p-3 transition-all duration-300 hover:scale-110">
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="bg-white/10 mb-8" />
          <div className="text-center space-y-3">
            <p className="text-gray-400 text-lg">
              © 2025 Abinash Dash. Built with React, TypeScript & Tailwind CSS.
            </p>
            <p className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold text-xl">
              Crafting Digital Experiences That Matter
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Scroll to Top */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-16 h-16 p-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 hover:from-cyan-600 hover:via-purple-600 hover:to-emerald-600 text-black shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-125 transition-all duration-500 border border-white/20"
        >
          <ArrowUp className="w-7 h-7" />
        </Button>
      )}
    </div>
  );
};

export default Index;

}
