
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Plus, Edit, Trash2, Save, X, User, Briefcase, Code, Award, Mail, Settings } from "lucide-react";
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
    ]
  });

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Projects</p>
                <p className="text-2xl font-bold text-neon-blue">{portfolioData.projects.length}</p>
              </div>
              <Code className="w-8 h-8 text-neon-blue" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Experience</p>
                <p className="text-2xl font-bold text-neon-green">{portfolioData.experience.length}</p>
              </div>
              <Briefcase className="w-8 h-8 text-neon-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Skills</p>
                <p className="text-2xl font-bold text-neon-pink">12</p>
              </div>
              <Award className="w-8 h-8 text-neon-pink" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Certifications</p>
                <p className="text-2xl font-bold text-neon-yellow">3</p>
              </div>
              <Award className="w-8 h-8 text-neon-yellow" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card border-gray-700">
        <CardHeader>
          <CardTitle className="text-neon-blue">Personal Information</CardTitle>
          <CardDescription>Manage your basic profile information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-300">Name</label>
              <div className="mt-1 p-3 bg-gray-800 rounded border border-gray-600 text-white">
                {portfolioData.personal.name}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300">Email</label>
              <div className="mt-1 p-3 bg-gray-800 rounded border border-gray-600 text-white">
                {portfolioData.personal.email}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-300">Tagline</label>
              <div className="mt-1 p-3 bg-gray-800 rounded border border-gray-600 text-white">
                {portfolioData.personal.tagline}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button className="bg-neon-blue hover:bg-neon-blue/80 text-black">
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
        <h3 className="text-xl font-semibold text-white">Manage Projects</h3>
        <Button className="bg-neon-green hover:bg-neon-green/80 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      <div className="grid gap-6">
        {portfolioData.projects.map((project) => (
          <Card key={project.id} className="glass-card border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className={`${project.status === 'Published' ? 'text-neon-green border-neon-green' : 'text-neon-yellow border-neon-yellow'}`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-800 text-white">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="neon-border text-neon-blue border-neon-blue">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="neon-border text-neon-pink border-neon-pink">
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

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'projects':
        return renderProjects();
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="neon-border text-neon-blue border-neon-blue">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Admin Dashboard</h1>
                <p className="text-gray-400">Manage your portfolio content</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="bg-neon-green hover:bg-neon-green/80 text-black">
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
            <Card className="glass-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-neon-blue">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-4 py-3 text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-neon-blue/20 text-neon-blue border-r-2 border-neon-blue'
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
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
