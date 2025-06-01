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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-neon-blue/20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green p-0.5 animate-pulse-neon">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-sm font-bold gradient-text">ABINASH</span>
              </div>
            </div>
          </div>
          <Link to="/admin">
            <Button variant="outline" size="sm" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300">
              <Settings className="w-4 h-4 mr-2" />
              Admin
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-pink/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-float mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-3xl font-bold gradient-text">ABINASH</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text animate-pulse-neon">
            Abinash Dash
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="border-neon-blue/50 text-neon-blue bg-neon-blue/5 hover:bg-neon-blue/10 transition-all duration-300">
              <Palette className="w-4 h-4 mr-2" />
              UI/UX Designer
            </Badge>
            <Badge variant="outline" className="border-neon-pink/50 text-neon-pink bg-neon-pink/5 hover:bg-neon-pink/10 transition-all duration-300">
              <Code className="w-4 h-4 mr-2" />
              Frontend Developer
            </Badge>
            <Badge variant="outline" className="border-neon-green/50 text-neon-green bg-neon-green/5 hover:bg-neon-green/10 transition-all duration-300">
              <Briefcase className="w-4 h-4 mr-2" />
              Software Developer
            </Badge>
          </div>

          <p className="text-xl md:text-3xl mb-12 h-20 flex items-center justify-center">
            <span className="gradient-text font-medium">
              {typewriterText}
              <span className="animate-pulse text-neon-blue">|</span>
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-pink hover:from-neon-pink hover:to-neon-blue text-black font-semibold px-8 py-3 animate-glow transition-all duration-500">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            <Button variant="outline" className="border-neon-green/50 text-neon-green hover:bg-neon-green/10 hover:border-neon-green px-8 py-3 transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black/80 backdrop-blur-xl border border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="text-neon-blue flex items-center group-hover:text-neon-pink transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-lg bg-neon-blue/5 border border-neon-blue/20">
                  <h4 className="font-semibold text-white mb-2">B.Tech in Computer Science & Engineering (AI)</h4>
                  <p className="text-gray-300 mb-1">GIFT Autonomous College</p>
                  <p className="text-neon-green font-medium">CGPA: 6.5 | Expected: 2025</p>
                </div>
                <Separator className="bg-neon-blue/20" />
                <div className="space-y-3">
                  <div className="p-3 rounded bg-gray-900/50">
                    <h4 className="font-semibold text-white">CHSE Intermediate</h4>
                    <p className="text-gray-400">2022 | 52%</p>
                  </div>
                  <div className="p-3 rounded bg-gray-900/50">
                    <h4 className="font-semibold text-white">Matriculation</h4>
                    <p className="text-gray-400">2020 | 40%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/80 backdrop-blur-xl border border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="text-neon-pink flex items-center group-hover:text-neon-blue transition-colors duration-300">
                  <Star className="w-6 h-6 mr-3" />
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

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-pink/50 transition-all duration-500">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-neon-blue text-2xl mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-gray-300 font-medium text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <Badge variant="outline" className="border-neon-green/50 text-neon-green bg-neon-green/5 mb-2">
                        {exp.duration}
                      </Badge>
                      <p className="text-sm text-gray-400">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">{exp.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-neon-pink mb-4 flex items-center">
                        <Star className="w-5 h-5 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-300 flex items-start">
                            <div className="w-2 h-2 bg-neon-yellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neon-blue mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-gray-900/80 text-white border border-gray-700">
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
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-green/50 transition-all duration-500 hover:scale-105 group">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-neon-green transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-neon-pink mb-3">Key Features</h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-neon-blue/30 text-neon-blue bg-neon-blue/5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-neon-green/50 text-neon-green hover:bg-neon-green/10 flex-1">
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

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <Card key={index} className="bg-black/80 backdrop-blur-xl border border-gray-800 hover:border-neon-blue/50 transition-all duration-500 hover:scale-105 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-pink/20 flex items-center justify-center group-hover:from-neon-blue/40 group-hover:to-neon-pink/40 transition-all duration-300">
                    <skill.icon className="w-8 h-8 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">{skill.name}</h3>
                  <Badge variant="secondary" className="mb-3 bg-gray-900/80 text-gray-300 border border-gray-700">
                    {skill.category}
                  </Badge>
                  <p className="text-sm font-medium text-neon-green">{skill.level}</p>
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
          
          <Card className="bg-black/80 backdrop-blur-xl border border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-500 group max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-neon-blue flex items-center group-hover:text-neon-pink transition-colors duration-300">
                <GraduationCap className="w-6 h-6 mr-3" />
                Academic Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg bg-neon-blue/5 border border-neon-blue/20">
                <h4 className="font-semibold text-white mb-2">B.Tech in Computer Science & Engineering (AI)</h4>
                <p className="text-gray-300 mb-1">GIFT Autonomous College</p>
                <p className="text-neon-green font-medium">CGPA: 6.5 | Expected: 2025</p>
              </div>
              <Separator className="bg-neon-blue/20" />
              <div className="space-y-3">
                <div className="p-3 rounded bg-gray-900/50">
                  <h4 className="font-semibold text-white">CHSE Intermediate</h4>
                  <p className="text-gray-400">2022 | 52%</p>
                </div>
                <div className="p-3 rounded bg-gray-900/50">
                  <h4 className="font-semibold text-white">Matriculation</h4>
                  <p className="text-gray-400">2020 | 40%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section id="certifications" className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Certifications & Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-yellow/50 transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="w-6 h-6 mr-3 text-neon-yellow" />
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-pink/50 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-neon-pink flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Workshops & Seminars
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {workshops.map((workshop, index) => (
                  <div key={index} className="flex items-center p-3 rounded bg-gray-900/50 hover:bg-gray-900/80 transition-colors duration-300">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-blue/50 transition-all duration-500">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
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
                        <p className="text-gray-400">Binjhagiri, Khordha, Odisha</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center p-4 rounded-lg bg-neon-blue/5 border border-neon-blue/20 hover:bg-neon-blue/10 transition-colors duration-300">
                      <Linkedin className="w-6 h-6 mr-4 text-neon-blue" />
                      <div>
                        <p className="font-semibold text-white">LinkedIn</p>
                        <a href="https://linkedin.com/in/abinashdashh" className="text-neon-blue hover:underline">
                          linkedin.com/in/abinashdashh
                        </a>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-pink hover:from-neon-pink hover:to-neon-blue text-black font-semibold py-4 animate-glow">
                      <Mail className="w-5 h-5 mr-2" />
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
      <footer className="py-8 bg-black border-t border-neon-blue/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Abinash Dash. Built with React & Tailwind CSS.
          </p>
          <p className="gradient-text text-sm font-medium">
            Designing with Vision. Developing with Precision. Delivering with Impact.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-14 h-14 p-0 bg-gradient-to-r from-neon-blue to-neon-pink hover:from-neon-pink hover:to-neon-blue text-black animate-glow"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default Index;
