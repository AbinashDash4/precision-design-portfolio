import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin, Code, Palette, Briefcase, GraduationCap, Award, Calendar, Star, Home, User, FolderOpen, Zap, BookOpen, Trophy, MessageCircle, Send, Instagram, X, Globe, Eye, CheckCircle } from "lucide-react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [currentProfessionText, setCurrentProfessionText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Designing with Vision. Developing with Precision. Delivering with Impact.";

  const professions = [
    "UI/UX Designer",
    "Frontend Developer", 
    "Software Developer",
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
    { name: "Java", category: "Programming", level: "Advanced", icon: Code, description: "Object-oriented programming, Spring Boot, Enterprise applications" },
    { name: "Python", category: "Programming", level: "Advanced", icon: Code, description: "Data Science, Machine Learning, Web Development, Automation" },
    { name: "React", category: "Frontend", level: "Intermediate", icon: Code, description: "Component-based UI, Hooks, State Management, Modern React patterns" },
    { name: "TypeScript", category: "Frontend", level: "Intermediate", icon: Code, description: "Type-safe JavaScript, Enhanced IDE support, Better code quality" },
    { name: "UI/UX Design", category: "Design", level: "Advanced", icon: Palette, description: "User Research, Wireframing, Prototyping, Design Systems" },
    { name: "Figma", category: "Design", level: "Advanced", icon: Palette, description: "Interface Design, Prototyping, Design Systems, Collaboration" },
    { name: "Leadership", category: "Soft Skills", level: "Advanced", icon: Star, description: "Team Management, Project Leadership, Strategic Planning" },
    { name: "Problem Solving", category: "Soft Skills", level: "Advanced", icon: Star, description: "Analytical Thinking, Creative Solutions, Debugging" },
    { name: "AI/ML", category: "Technology", level: "Intermediate", icon: Code, description: "TensorFlow, Computer Vision, Deep Learning, Neural Networks" },
    { name: "Data Structures", category: "Programming", level: "Advanced", icon: Code, description: "Algorithms, Optimization, Efficient Programming" },
    { name: "HTML/CSS", category: "Frontend", level: "Advanced", icon: Code, description: "Semantic HTML, Advanced CSS, Responsive Design, Animations" },
    { name: "MySQL", category: "Database", level: "Intermediate", icon: Code, description: "Database Design, Query Optimization, Data Management" }
  ];

  const projects = [
    {
      title: "Contacts Management System",
      description: "A comprehensive contact management application with CRUD operations, advanced search functionality, data export capabilities, and intuitive user interface designed for efficient contact organization.",
      tech: ["Java", "MySQL", "Swing", "JDBC"],
      github: "https://github.com/abinashdash",
      features: ["CRUD Operations", "Advanced Search & Filter", "Data Export to CSV/Excel", "Contact Categories", "Backup & Restore"],
      highlights: ["Handles 10,000+ contacts efficiently", "Real-time search with instant results", "User-friendly interface with modern design"],
      status: "Production Ready"
    },
    {
      title: "Face Detection System",
      description: "Advanced AI-powered face detection system using computer vision and machine learning algorithms with real-time processing capabilities and high accuracy recognition.",
      tech: ["Python", "OpenCV", "TensorFlow", "NumPy", "Matplotlib"],
      github: "https://github.com/abinashdash",
      features: ["Real-time Detection", "Multi-face Recognition", "Performance Analytics", "Age & Gender Detection", "Emotion Recognition"],
      highlights: ["95%+ accuracy rate", "Real-time processing at 30 FPS", "Works with multiple camera inputs"],
      status: "Active Development"
    },
    {
      title: "Age & Gender Detection",
      description: "Sophisticated deep learning model for predicting age and gender from facial images with high accuracy, efficient processing, and comprehensive analytics dashboard.",
      tech: ["Python", "Deep Learning", "CNN", "Keras", "OpenCV"],
      github: "https://github.com/abinashdash",
      features: ["High Accuracy Prediction", "Fast Processing", "Batch Analysis", "Analytics Dashboard", "Model Training Interface"],
      highlights: ["92% age accuracy within 5 years", "98% gender classification accuracy", "Processes 100+ images per minute"],
      status: "Research Phase"
    }
  ];

  const experiences = [
    {
      title: "CTTC Internship",
      company: "Center for Technology Transfer & Commercialization",
      duration: "45 days",
      period: "2024",
      description: "Specialized in deep learning and image processing. Developed computer vision projects and worked on AI model development with industry-standard practices. Collaborated with senior developers on production systems.",
      skills: ["Deep Learning", "Image Processing", "Computer Vision", "AI Models", "Python", "TensorFlow", "OpenCV"],
      achievements: [
        "Developed 3 AI models with 95%+ accuracy for real-world applications",
        "Implemented real-time image processing algorithms optimized for performance",
        "Collaborated with senior developers on production systems serving 1000+ users",
        "Presented research findings to industry experts and stakeholders",
        "Contributed to open-source computer vision libraries"
      ],
      projects: ["Face Detection System", "Age & Gender Recognition", "Object Detection Pipeline"]
    },
    {
      title: "IIG Varsity Internship", 
      company: "IIG Varsity",
      duration: "1 month",
      period: "2023",
      description: "Gained foundational knowledge in programming and database management. Worked on software development fundamentals, best practices, and built practical applications.",
      skills: ["Programming Basics", "Database Management", "Software Development", "Java", "MySQL", "Problem Solving"],
      achievements: [
        "Built comprehensive contact management system from scratch",
        "Learned database design principles and normalization techniques",
        "Completed 5+ coding projects with increasing complexity",
        "Received recognition for exceptional problem-solving skills",
        "Mentored junior interns in programming fundamentals"
      ],
      projects: ["Contact Management System", "Student Database", "Library Management System"]
    }
  ];

  const certifications = [
    {
      title: "Google UI/UX Certificate",
      issuer: "Coursera",
      date: "2023",
      type: "certification",
      link: "https://coursera.org/verify/certificate",
      description: "Comprehensive program covering user research, wireframing, prototyping, and usability testing",
      skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Thinking"]
    },
    {
      title: "NPTEL - Design and Analysis of Algorithms",
      issuer: "NPTEL",
      date: "2023",
      type: "certification",
      link: "https://nptel.ac.in/verify",
      description: "Advanced course covering algorithm design, complexity analysis, and optimization techniques",
      skills: ["Algorithm Design", "Complexity Analysis", "Data Structures", "Optimization"]
    },
    {
      title: "1st Place - SIP 2024 (CSE-AI)",
      issuer: "GIFT Autonomous College",
      date: "2024",
      type: "achievement",
      link: "#",
      description: "Won first place in Summer Internship Program presentation for AI/ML project",
      skills: ["Presentation", "Research", "AI/ML", "Project Management"]
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2023",
      type: "certification",
      link: "https://ibm.com/verify",
      description: "Comprehensive course on Python programming for data analysis and machine learning",
      skills: ["Python", "Data Analysis", "Machine Learning", "Pandas", "NumPy"]
    }
  ];

  const workshops = [
    { name: "Cloud Computing & Security", organizer: "AWS", year: "2024" },
    { name: "Cybersecurity Fundamentals", organizer: "Cisco", year: "2023" },
    { name: "Communicative English", organizer: "British Council", year: "2023" },
    { name: "IDE Bootcamp", organizer: "GIFT Autonomous", year: "2022" },
    { name: "Machine Learning Workshop", organizer: "Google", year: "2024" },
    { name: "Full Stack Development", organizer: "Meta", year: "2023" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-gradient-to-r from-neon-blue/30 via-neon-pink/30 to-neon-green/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative">
                <span className="text-3xl font-bold bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green bg-clip-text text-transparent animate-pulse">
                  ABINASH
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Enhanced Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-neon-blue/20 hover:to-neon-pink/20 transition-all duration-300 rounded-full px-4 py-2 group"
                >
                  <item.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {item.label}
                </Button>
              ))}
            </nav>

            {/* Enhanced Download CV Button */}
            <Button className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green hover:from-neon-green hover:via-neon-blue hover:to-neon-pink text-black font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full px-6 py-2">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-pink/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,240,255,0.15),transparent_40%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,0,255,0.15),transparent_40%)] animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-float mb-12">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green p-2 animate-spin-slow shadow-2xl">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-inner">
                <span className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">AD</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green bg-clip-text text-transparent animate-pulse">
            Abinash Dash
          </h1>
          
          {/* Enhanced Profession display */}
          <div className="mb-12 h-20 flex items-center justify-center">
            <div className="text-2xl md:text-3xl text-center">
              <span className="text-gray-300">Hi I'm Abinash, I am a </span>
              <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent font-bold text-3xl md:text-4xl">
                {currentProfessionText}
                {isTyping && <span className="animate-pulse text-neon-green">|</span>}
              </span>
            </div>
          </div>

          <p className="text-2xl md:text-4xl mb-16 h-24 flex items-center justify-center">
            <span className="bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent font-medium">
              {typewriterText}
              <span className="animate-pulse text-neon-yellow">|</span>
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green hover:from-neon-green hover:via-neon-yellow hover:to-neon-blue text-black font-bold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-neon transform hover:scale-110 transition-all duration-500">
              <Download className="w-6 h-6 mr-3" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-neon transform hover:scale-110 transition-all duration-500"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-6 h-6 mr-3" />
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900/80 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green bg-clip-text text-transparent">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <Card className="bg-black/90 backdrop-blur-2xl border-2 border-neon-pink/30 hover:border-neon-pink/80 transition-all duration-500 group rounded-3xl shadow-2xl hover:shadow-neon transform hover:scale-105">
              <CardHeader className="pb-6">
                <CardTitle className="text-neon-pink flex items-center group-hover:text-neon-blue transition-colors duration-300 text-2xl">
                  <Star className="w-8 h-8 mr-4 animate-pulse" />
                  Vision & Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I envision a future where technology seamlessly integrates with human creativity to solve complex problems. 
                  My mission is to bridge the gap between innovative design and robust development, creating digital solutions 
                  that are not only functional but also meaningful and accessible to everyone.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Through continuous learning in AI, machine learning, and user experience design, I aim to contribute to 
                  projects that make a positive impact on society while pushing the boundaries of what's possible in technology.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["Innovation", "Quality", "Impact", "Creativity"].map((value, index) => (
                    <Badge key={index} variant="outline" className="border-neon-pink/50 text-neon-pink bg-neon-pink/10 px-4 py-2 text-sm">
                      {value}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/90 backdrop-blur-2xl border-2 border-neon-blue/30 hover:border-neon-blue/80 transition-all duration-500 group rounded-3xl shadow-2xl hover:shadow-neon transform hover:scale-105">
              <CardHeader className="pb-6">
                <CardTitle className="text-neon-blue flex items-center group-hover:text-neon-green transition-colors duration-300 text-2xl">
                  <Code className="w-8 h-8 mr-4 animate-pulse" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Full-Stack Development</h4>
                      <p className="text-gray-400 text-sm">Building end-to-end web applications with modern technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-neon-pink rounded-full mt-2 animate-pulse delay-200"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">AI/ML Solutions</h4>
                      <p className="text-gray-400 text-sm">Developing intelligent systems using machine learning</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-neon-green rounded-full mt-2 animate-pulse delay-400"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">UI/UX Design</h4>
                      <p className="text-gray-400 text-sm">Creating intuitive and beautiful user experiences</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-neon-green font-semibold mb-3 text-lg">Core Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "Web Development", "UI/UX Design", "Innovation", "Technology"].map((interest, index) => (
                      <Badge key={index} variant="outline" className="border-neon-green/30 text-neon-green bg-neon-green/5 hover:bg-neon-green/20 transition-colors duration-300">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green bg-clip-text text-transparent">Professional Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-black/95 backdrop-blur-2xl border-2 border-gray-800 hover:border-neon-pink/60 transition-all duration-500 rounded-3xl shadow-2xl hover:shadow-neon transform hover:scale-105">
                <CardHeader className="pb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-neon-blue text-3xl mb-3 font-bold">{exp.title}</CardTitle>
                      <CardDescription className="text-gray-300 font-medium text-xl">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right mt-6 md:mt-0">
                      <Badge variant="outline" className="border-neon-green/50 text-neon-green bg-neon-green/10 mb-3 px-4 py-2 text-lg">
                        {exp.duration}
                      </Badge>
                      <p className="text-sm text-gray-400 font-medium">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-10 leading-relaxed text-lg">{exp.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-bold text-neon-pink mb-6 flex items-center text-xl">
                        <CheckCircle className="w-6 h-6 mr-3 animate-pulse" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-300 flex items-start text-lg">
                            <div className="w-2 h-2 bg-neon-yellow rounded-full mr-4 mt-3 flex-shrink-0 animate-pulse"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-neon-blue mb-6 flex items-center text-xl">
                        <Code className="w-6 h-6 mr-3 animate-pulse" />
                        Technologies & Projects
                      </h4>
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-3">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-gray-900/80 text-white border border-gray-600 hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300 px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-400 mb-3">Key Projects:</h5>
                          <ul className="text-sm text-gray-300 space-y-2">
                            {exp.projects.map((project, projectIndex) => (
                              <li key={projectIndex} className="flex items-center">
                                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3 animate-pulse"></div>
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-gray-900/50 via-black to-gray-900/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,240,255,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green bg-clip-text text-transparent">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card key={index} className="bg-black/95 backdrop-blur-2xl border-2 border-gray-800 hover:border-neon-green/60 transition-all duration-500 hover:scale-105 group rounded-3xl shadow-2xl hover:shadow-neon overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <Badge variant="outline" className={`
                    ${project.status === 'Production Ready' ? 'border-neon-green text-neon-green bg-neon-green/10' : ''}
                    ${project.status === 'Active Development' ? 'border-neon-blue text-neon-blue bg-neon-blue/10' : ''}
                    ${project.status === 'Research Phase' ? 'border-neon-yellow text-neon-yellow bg-neon-yellow/10' : ''}
                    animate-pulse
                  `}>
                    {project.status}
                  </Badge>
                </div>
                <CardHeader className="pb-6">
                  <CardTitle className="text-white group-hover:text-neon-green transition-colors duration-300 text-2xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400 leading-relaxed text-lg">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-neon-pink mb-4 flex items-center">
                        <Star className="w-5 h-5 mr-2 animate-pulse" />
                        Key Features
                      </h4>
                      <ul className="text-sm text-gray-300 space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-neon-blue rounded-full mr-4 animate-pulse"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-neon-yellow mb-4 flex items-center">
                        <Trophy className="w-5 h-5 mr-2 animate-pulse" />
                        Project Highlights
                      </h4>
                      <ul className="text-sm text-gray-300 space-y-3">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-neon-yellow mr-3 animate-pulse" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-neon-blue/30 text-neon-blue bg-neon-blue/10 hover:bg-neon-blue/20 transition-colors duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button size="lg" variant="outline" className="border-neon-green/50 text-neon-green hover:bg-neon-green/20 flex-1 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green bg-clip-text text-transparent">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => (
              <Card key={index} className="bg-black/90 backdrop-blur-2xl border-2 border-gray-800 hover:border-neon-blue/60 transition-all duration-500 hover:scale-110 group cursor-pointer rounded-3xl shadow-2xl hover:shadow-neon">
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-neon-blue/30 to-neon-pink/30 flex items-center justify-center group-hover:from-neon-blue/60 group-hover:to-neon-pink/60 transition-all duration-300 shadow-2xl">
                    <skill.icon className="w-10 h-10 text-neon-blue group-hover:text-neon-pink transition-colors duration-300 animate-pulse" />
                  </div>
                  <h3 className="font-bold text-white mb-3 text-center group-hover:text-neon-blue transition-colors duration-300 text-xl">{skill.name}</h3>
                  <div className="text-center mb-4">
                    <Badge variant="secondary" className="mb-3 bg-gray-900/80 text-gray-300 border border-gray-700 px-3 py-1">
                      {skill.category}
                    </Badge>
                    <p className="text-lg font-bold text-neon-green">{skill.level}</p>
                  </div>
                  <p className="text-sm text-gray-400 text-center leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Education</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/80 backdrop-blur-xl border border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="text-neon-blue flex items-center group-hover:text-neon-pink transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Academic Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 rounded-lg bg-gradient-to-r from-neon-blue/10 to-neon-pink/10 border border-neon-blue/20">
                  <h4 className="font-semibold text-white mb-3 text-xl">B.Tech in Computer Science & Engineering (Artificial Intelligence)</h4>
                  <p className="text-gray-300 mb-2 text-lg">GIFT Autonomous College, Bhubaneswar</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="text-neon-green font-medium">CGPA: 6.5</span>
                    <span className="text-neon-blue font-medium">Expected: 2025</span>
                    <span className="text-neon-pink font-medium">Final Year</span>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-2">Key Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {["Artificial Intelligence", "Machine Learning", "Data Structures", "Algorithms", "Computer Vision", "Database Systems", "Software Engineering", "Web Technologies"].map((course, index) => (
                        <Badge key={index} variant="outline" className="border-neon-blue/30 text-neon-blue bg-neon-blue/5">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Separator className="bg-neon-blue/20" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded bg-gray-900/50 border border-gray-700">
                    <h4 className="font-semibold text-white mb-2">CHSE Intermediate (Science)</h4>
                    <p className="text-gray-400 mb-1">Board of Secondary Education, Odisha</p>
                    <p className="text-neon-green">2022 | 52%</p>
                  </div>
                  <div className="p-4 rounded bg-gray-900/50 border border-gray-700">
                    <h4 className="font-semibold text-white mb-2">Matriculation (10th)</h4>
                    <p className="text-gray-400 mb-1">Board of Secondary Education, Odisha</p>
                    <p className="text-neon-green">2020 | 40%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section id="certifications" className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Certifications & Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-yellow/50 transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="w-6 h-6 mr-3 text-neon-yellow" />
                      {cert.title}
                    </div>
                    {cert.link && cert.link !== "#" && (
                      <Button size="sm" variant="outline" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-gray-900/80 text-white border border-gray-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Badge variant="outline" className="border-neon-yellow/50 text-neon-yellow">
                    {cert.type === 'certification' ? 'Certificate' : 'Achievement'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-pink/50 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-neon-pink flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Workshops & Seminars
              </CardTitle>
              <CardDescription className="text-gray-400">
                Continuous learning through industry workshops and professional development programs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {workshops.map((workshop, index) => (
                  <div key={index} className="flex flex-col p-4 rounded bg-gray-900/50 hover:bg-gray-900/80 transition-colors duration-300 border border-gray-700">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                      <span className="font-medium text-white">{workshop.name}</span>
                    </div>
                    <div className="text-sm text-gray-400 ml-5">
                      <span>{workshop.organizer}</span>
                      <span className="mx-2">•</span>
                      <span>{workshop.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <Card className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-blue/50 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-neon-blue flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center p-4 rounded-lg bg-neon-blue/5 border border-neon-blue/20 hover:bg-neon-blue/10 transition-colors duration-300">
                    <Phone className="w-6 h-6 mr-4 text-neon-blue" />
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-gray-400">+91 7978825471</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 rounded-lg bg-neon-pink/5 border border-neon-pink/20 hover:bg-neon-pink/10 transition-colors duration-300">
                    <Mail className="w-6 h-6 mr-4 text-neon-pink" />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-400">abinashdash2022@gift.edu.in</p>
                      <p className="text-gray-400">abinashdash019@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 rounded-lg bg-neon-green/5 border border-neon-green/20 hover:bg-neon-green/10 transition-colors duration-300">
                    <MapPin className="w-6 h-6 mr-4 text-neon-green" />
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-gray-400">Binjhagiri, Khordha, Odisha, India</p>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="pt-6">
                    <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Button size="sm" variant="outline" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button size="sm" variant="outline" className="border-neon-green/50 text-neon-green hover:bg-neon-green/10">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button size="sm" variant="outline" className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10">
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                      </Button>
                      <Button size="sm" variant="outline" className="border-neon-yellow/50 text-neon-yellow hover:bg-neon-yellow/10">
                        <X className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Send Message Form */}
              <Card className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-pink/50 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-neon-pink flex items-center">
                    <Send className="w-6 h-6 mr-3" />
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Let's discuss your project or just say hello! I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-gray-300 block mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-300 block mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-300 block mb-2">Subject *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-300 block mb-2">Message *</label>
                      <textarea
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-pink hover:from-neon-pink hover:to-neon-blue text-black font-semibold py-4 animate-glow">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                  
                  <div className="mt-6 p-4 bg-neon-blue/5 border border-neon-blue/20 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <strong className="text-neon-blue">Note:</strong> Messages sent through this form will be received via email. 
                      You can also reach me directly at <span className="text-neon-pink">abinashdash019@gmail.com</span> for immediate responses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-neon-blue/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">Abinash Dash</h3>
              <p className="text-gray-400 leading-relaxed">
                Passionate about creating innovative solutions through technology, design, and artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-neon-green/30 text-neon-green hover:bg-neon-green/10">
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-neon-pink/30 text-neon-pink hover:bg-neon-pink/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-neon-yellow/30 text-neon-yellow hover:bg-neon-yellow/10">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-800 mb-6" />
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © 2025 Abinash Dash. Built with React, TypeScript & Tailwind CSS.
            </p>
            <p className="gradient-text text-sm font-medium">
              Designing with Vision. Developing with Precision. Delivering with Impact.
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-16 h-16 p-0 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green hover:from-neon-green hover:via-neon-yellow hover:to-neon-blue text-black shadow-2xl hover:shadow-neon transform hover:scale-110 transition-all duration-500"
        >
          <ArrowUp className="w-8 h-8 animate-pulse" />
        </Button>
      )}
    </div>
  );
};

export default Index;
