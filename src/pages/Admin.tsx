
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Plus, Edit, Trash2, Save, X, User, Briefcase, Code, Award, Mail, Settings, Upload, Image, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [editMode, setEditMode] = useState(false);

  const sections = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'media', label: 'Media', icon: Image },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const [portfolioData, setPortfolioData] = useState({
    personal: {
      name: 'Abinash Dash',
      tagline: 'Designing with Vision. Developing with Precision. Delivering with Impact.',
      vision: 'Passionate about creating digital experiences that bridge creativity and technology...',
      email: 'abinashdash2022@gift.edu.in',
      phone: '+91 7978825471',
      location: 'Binjhagiri, Khordha, Odisha'
    },
    projects: [
      {
        id: 1,
        title: 'Contacts Management System',
        description: 'A comprehensive contact management application...',
        tech: ['Java', 'MySQL', 'Swing'],
        status: 'Published'
      },
      {
        id: 2,
        title: 'Face Detection System',
        description: 'AI-powered face detection system...',
        tech: ['Python', 'OpenCV', 'TensorFlow'],
        status: 'Published'
      }
    ],
    experience: [
      {
        id: 1,
        title: 'CTTC Internship',
        company: 'Center for Technology Transfer & Commercialization',
        duration: '45 days',
        period: '2024',
        status: 'Published'
      }
    ],
    media: [
      {
        id: 1,
        name: 'Profile Picture',
        type: 'image',
        url: '/placeholder-image.jpg',
        uploadDate: '2024-01-15'
      },
      {
        id: 2,
        name: 'Resume',
        type: 'document',
        url: '/resume.pdf',
        uploadDate: '2024-01-10'
      }
    ]
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newMedia = {
        id: Date.now(),
        name: file.name,
        type: file.type.startsWith('image/') ? 'image' : 'document',
        url: URL.createObjectURL(file),
        uploadDate: new Date().toISOString().split('T')[0]
      };
      
      setPortfolioData(prev => ({
        ...prev,
        media: [...prev.media, newMedia]
      }));
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-black/90 backdrop-blur-xl border border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Projects</p>
                <p className="text-3xl font-bold text-neon-blue">{portfolioData.projects.length}</p>
              </div>
              <Code className="w-10 h-10 text-neon-blue" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/90 backdrop-blur-xl border border-neon-green/30 hover:border-neon-green/60 transition-all duration-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Experience</p>
                <p className="text-3xl font-bold text-neon-green">{portfolioData.experience.length}</p>
              </div>
              <Briefcase className="w-10 h-10 text-neon-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/90 backdrop-blur-xl border border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Skills</p>
                <p className="text-3xl font-bold text-neon-pink">12</p>
              </div>
              <Award className="w-10 h-10 text-neon-pink" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/90 backdrop-blur-xl border border-neon-yellow/30 hover:border-neon-yellow/60 transition-all duration-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Media Files</p>
                <p className="text-3xl font-bold text-neon-yellow">{portfolioData.media.length}</p>
              </div>
              <Image className="w-10 h-10 text-neon-yellow" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black/90 backdrop-blur-xl border border-neon-blue/30 hover:border-neon-blue/50 transition-all duration-500">
        <CardHeader>
          <CardTitle className="text-neon-blue">Personal Information</CardTitle>
          <CardDescription className="text-gray-400">Manage your basic profile information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-300">Name</label>
              <div className="mt-2 p-4 bg-gray-900/80 rounded-lg border border-gray-700 text-white">
                {portfolioData.personal.name}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300">Email</label>
              <div className="mt-2 p-4 bg-gray-900/80 rounded-lg border border-gray-700 text-white">
                {portfolioData.personal.email}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-300">Tagline</label>
              <div className="mt-2 p-4 bg-gray-900/80 rounded-lg border border-gray-700 text-white">
                {portfolioData.personal.tagline}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-pink hover:from-neon-pink hover:to-neon-blue text-black font-semibold">
              <Edit className="w-4 h-4 mr-2" />
              Edit Information
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-white">Manage Projects</h3>
        <Button className="bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-green text-black font-semibold">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      <div className="grid gap-6">
        {portfolioData.projects.map((project) => (
          <Card key={project.id} className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-blue/50 transition-all duration-500">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className={`${project.status === 'Published' ? 'border-neon-green/50 text-neon-green' : 'border-neon-yellow/50 text-neon-yellow'}`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-900/80 text-white border border-gray-700">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderMedia = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-white">Media Management</h3>
        <div className="flex gap-3">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept="image/*,.pdf,.doc,.docx"
            onChange={handleFileUpload}
          />
          <Button
            onClick={() => document.getElementById('file-upload')?.click()}
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-black font-semibold"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload File
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.media.map((media) => (
          <Card key={media.id} className="bg-black/90 backdrop-blur-xl border border-gray-800 hover:border-neon-purple/50 transition-all duration-500 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {media.type === 'image' ? (
                    <Image className="w-8 h-8 text-neon-blue mr-3" />
                  ) : (
                    <FileText className="w-8 h-8 text-neon-green mr-3" />
                  )}
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-neon-purple transition-colors duration-300">{media.name}</h4>
                    <p className="text-sm text-gray-400">{media.uploadDate}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              
              {media.type === 'image' && (
                <div className="w-full h-32 bg-gray-900/50 rounded-lg border border-gray-700 mb-4 overflow-hidden">
                  <img src={media.url} alt={media.name} className="w-full h-full object-cover" />
                </div>
              )}
              
              <Badge variant="secondary" className="bg-gray-900/80 text-white border border-gray-700">
                {media.type}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'projects':
        return renderProjects();
      case 'media':
        return renderMedia();
      case 'experience':
        return <div className="text-center text-gray-400 py-12">Experience management coming soon...</div>;
      case 'certifications':
        return <div className="text-center text-gray-400 py-12">Certifications management coming soon...</div>;
      case 'contact':
        return <div className="text-center text-gray-400 py-12">Contact management coming soon...</div>;
      case 'settings':
        return <div className="text-center text-gray-400 py-12">Settings coming soon...</div>;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-xl border-b border-neon-blue/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
                <p className="text-gray-400">Manage your portfolio content</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-green text-black font-semibold">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-black/90 backdrop-blur-xl border border-gray-800">
              <CardHeader>
                <CardTitle className="text-neon-blue">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-4 py-3 text-left transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-neon-blue/20 to-neon-pink/20 text-neon-blue border-r-2 border-neon-blue'
                          : 'text-gray-300 hover:bg-gray-900/50 hover:text-white'
                      }`}
                    >
                      <section.icon className="w-5 h-5 mr-3" />
                      {section.label}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
