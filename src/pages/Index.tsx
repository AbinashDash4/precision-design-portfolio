import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin, Code, Palette, Briefcase, GraduationCap, Award, Calendar, Star, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');

  const fullText = "Designing with Vision. Developing with Precision. Delivering with Impact.";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skillsData = [
    { name: "Java", category: "Programming", level: "Advanced", icon: Code },
    { name: "Python", category: "Programming", level: "Advanced", icon: Code },
    { name: "React", category: "Frontend", level: "Intermediate", icon: Code },
    { name: "TypeScript", category: "Frontend", level: "Intermediate", icon: Code },
    { name: "UI/UX Design", category: "Design", level: "Advanced", icon: Palette },
    { name: "Figma", category: "Design", level: "Advanced", icon: Palette },
    { name: "Leadership", category: "Soft Skills", level: "Advanced", icon: Star },
    { name: "Problem Solving", category: "Soft Skills", level: "Advanced", icon: Star },
    { name: "AI/ML", category: "Technology", level: "Intermediate", icon: Code },
    { name: "Data Structures", category: "Programming", level: "Advanced", icon: Code },
    { name: "HTML/CSS", category: "Frontend", level: "Advanced", icon: Code },
    { name: "PHP", category: "Backend", level: "Intermediate", icon: Code }
  ];

  const projects = [
    {
      title: "Contacts Management System",
      description: "A comprehensive contact management application with CRUD operations, search functionality, and user-friendly interface.",
      tech: ["Java", "MySQL", "Swing"],
      demo: "#",
      github: "#",
      features: ["CRUD Operations", "Search & Filter", "Data Export"]
    },
    {
      title: "Face Detection System",
      description: "AI-powered face detection system using computer vision and machine learning algorithms with real-time processing.",
      tech: ["Python", "OpenCV", "TensorFlow"],
      demo: "#",
      github: "#",
      features: ["Real-time Detection", "Multi-face Recognition", "Performance Analytics"]
    },
    {
      title: "Age & Gender Detection",
      description: "Deep learning model for predicting age and gender from facial images with high accuracy and efficient processing.",
      tech: ["Python", "Deep Learning", "CNN"],
      demo: "#",
      github: "#",
      features: ["High Accuracy", "Fast Processing", "Batch Analysis"]
    }
  ];

  const experiences = [
    {
      title: "CTTC Internship",
      company: "Center for Technology Transfer & Commercialization",
      duration: "45 days",
      period: "2024",
      description: "Specialized in deep learning and image processing. Developed computer vision projects and worked on AI model development with industry-standard practices.",
      skills: ["Deep Learning", "Image Processing", "Computer Vision", "AI Models", "Python"],
      achievements: [
        "Developed 3 AI models with 95%+ accuracy",
        "Implemented real-time image processing algorithms",
        "Collaborated with senior developers on production systems"
      ]
    },
    {
      title: "IIG Varsity Internship", 
      company: "IIG Varsity",
      duration: "1 month",
      period: "2023",
      description: "Gained foundational knowledge in programming and database management. Worked on software development fundamentals and best practices.",
      skills: ["Programming Basics", "Database Management", "Software Development", "Java"],
      achievements: [
        "Built first contact management system",
        "Learned database design principles",
        "Completed 5+ coding projects"
      ]
    }
  ];

  const certifications = [
    {
      title: "Google UI/UX Certificate",
      issuer: "Coursera",
      date: "2023",
      type: "certification"
    },
    {
      title: "NPTEL - Algorithms & Analysis",
      issuer: "NPTEL",
      date: "2023",
      type: "certification"
    },
    {
      title: "1st Place - SIP 2024 (CSE-AI)",
      issuer: "GIFT College",
      date: "2024",
      type: "achievement"
    }
  ];

  const workshops = [
    "Cloud Computing & Security",
    "Cybersecurity Fundamentals", 
    "Communicative English",
    "IDE Bootcamp at GIFT Autonomous"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header with Admin Link */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink p-0.5">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-sm font-bold gradient-text">AB</span>
              </div>
            </div>
            {/* Vision Statement */}
            <div className="hidden md:block max-w-md">
              <p className="text-sm text-gray-300 leading-relaxed">
                Passionate about creating digital experiences that bridge creativity and technology. 
                I envision a world where thoughtful design meets powerful development to solve real-world problems and enhance human interaction with technology.
              </p>
            </div>
          </div>
          <Link to="/admin">
            <Button variant="outline" size="sm" className="neon-border text-neon-blue border-neon-blue">
              <Settings className="w-4 h-4 mr-2" />
              Admin
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-float mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">ABINASH</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 neon-text">
            Abinash Dash
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="neon-border text-neon-blue border-neon-blue">
              <Palette className="w-4 h-4 mr-2" />
              UI/UX Designer
            </Badge>
            <Badge variant="outline" className="neon-border text-neon-pink border-neon-pink">
              <Code className="w-4 h-4 mr-2" />
              Frontend Developer
            </Badge>
            <Badge variant="outline" className="neon-border text-neon-green border-neon-green">
              <Briefcase className="w-4 h-4 mr-2" />
              Software Developer
            </Badge>
          </div>

          <p className="text-xl md:text-2xl mb-8 h-16 flex items-center justify-center">
            <span className="gradient-text font-medium">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-neon-blue hover:bg-neon-blue/80 text-black font-semibold animate-glow">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button variant="outline" className="neon-border text-neon-blue border-neon-blue hover:bg-neon-blue/10">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-neon-blue flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white">B.Tech in Computer Science & Engineering (AI)</h4>
                    <p className="text-gray-400">GIFT Autonomous College</p>
                    <p className="text-neon-green">CGPA: 6.5 | Expected: 2025</p>
                  </div>
                  <Separator className="bg-gray-600" />
                  <div>
                    <h4 className="font-semibold text-white">CHSE Intermediate</h4>
                    <p className="text-gray-400">2022 | 52%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Matriculation</h4>
                    <p className="text-gray-400">2020 | 40%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-neon-pink flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Vision & Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I envision a future where technology seamlessly integrates with human creativity to solve complex problems. 
                  My goal is to bridge the gap between innovative design and robust development, creating digital solutions 
                  that are not only functional but also meaningful and accessible to everyone.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Through continuous learning in AI, machine learning, and user experience design, I aim to contribute to 
                  projects that make a positive impact on society while pushing the boundaries of what's possible in technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section - Individual Cards */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <Card key={index} className="glass-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-8 h-8 mx-auto mb-3 text-neon-blue" />
                  <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                  <Badge variant="secondary" className="mb-2 bg-gray-800 text-gray-300">
                    {skill.category}
                  </Badge>
                  <p className="text-sm text-neon-green">{skill.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card border-gray-700 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-neon-green mb-2">Key Features</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-neon-blue border-neon-blue/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="neon-border text-neon-blue border-neon-blue">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="neon-border text-neon-green border-neon-green">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card border-gray-700">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-neon-blue">{exp.title}</CardTitle>
                      <CardDescription className="text-gray-300 font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-neon-green border-neon-green">
                        {exp.duration}
                      </Badge>
                      <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-neon-pink mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-300 text-sm flex items-start">
                            <Star className="w-4 h-4 mr-2 text-neon-yellow mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neon-blue mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-gray-800 text-white">
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

      {/* Certifications & Achievements */}
      <section id="certifications" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Certifications & Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="w-5 h-5 mr-2 text-neon-yellow" />
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="glass-card border-gray-700">
            <CardHeader>
              <CardTitle className="text-neon-pink">Workshops & Seminars</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {workshops.map((workshop, index) => (
                  <div key={index} className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-neon-blue" />
                    <span>{workshop}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-gray-700">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-neon-blue" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-gray-400">+91 7978825471</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-neon-pink" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-400">abinashdash2022@gift.edu.in</p>
                        <p className="text-gray-400">abinashdash019@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-neon-green" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-400">Binjhagiri, Khordha, Odisha</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Linkedin className="w-5 h-5 mr-3 text-neon-blue" />
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <a href="https://linkedin.com/in/abinashdashh" className="text-neon-blue hover:underline">
                          linkedin.com/in/abinashdashh
                        </a>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-neon-blue hover:bg-neon-blue/80 text-black font-semibold">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Abinash Dash. Built with React & Tailwind CSS.
          </p>
          <p className="text-neon-blue text-sm">
            Designing with Vision. Developing with Precision. Delivering with Impact.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 bg-neon-blue hover:bg-neon-blue/80 text-black animate-glow"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
