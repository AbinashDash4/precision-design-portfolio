
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin, Code, Palette, Briefcase, GraduationCap, Award, Calendar, Star } from "lucide-react";

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

  const skills = {
    technical: ["Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "React", "PHP", "YII", "C", "Data Structures", "AI/ML"],
    design: ["UI/UX Design", "Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
    soft: ["Self-motivated", "Leadership", "Time Management", "Problem Solving", "Team Collaboration"]
  };

  const projects = [
    {
      title: "Contacts Management System",
      description: "A comprehensive contact management application with CRUD operations and search functionality.",
      tech: ["Java", "MySQL", "Swing"],
      demo: "#",
      github: "#"
    },
    {
      title: "Face Detection System",
      description: "AI-powered face detection system using computer vision and machine learning algorithms.",
      tech: ["Python", "OpenCV", "TensorFlow"],
      demo: "#",
      github: "#"
    },
    {
      title: "Age & Gender Detection",
      description: "Deep learning model for predicting age and gender from facial images with high accuracy.",
      tech: ["Python", "Deep Learning", "CNN"],
      demo: "#",
      github: "#"
    }
  ];

  const experiences = [
    {
      title: "IIG Varsity Internship",
      duration: "1 month",
      description: "Learned basics of programming and database management. Gained hands-on experience with software development fundamentals.",
      skills: ["Programming Basics", "Database Management", "Software Development"]
    },
    {
      title: "CTTC Internship",
      duration: "45 days",
      description: "Specialized in deep learning and image processing. Worked on computer vision projects and AI model development.",
      skills: ["Deep Learning", "Image Processing", "Computer Vision", "AI Models"]
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
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-float mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">AD</span>
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
                  Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-blue mb-2">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.technical.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-800 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-pink mb-2">Design Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.design.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-800 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neon-green mb-2">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.soft.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-800 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
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

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Experience & Internships</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card border-gray-700">
                <CardHeader>
                  <CardTitle className="text-neon-blue">{exp.title}</CardTitle>
                  <CardDescription className="text-neon-green font-semibold">
                    Duration: {exp.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-gray-800 text-white">
                        {skill}
                      </Badge>
                    ))}
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
