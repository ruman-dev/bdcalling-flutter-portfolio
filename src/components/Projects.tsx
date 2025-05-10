
import { useState } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'A full-featured e-commerce mobile application built with Flutter, featuring product browsing, cart management, and secure checkout.',
      technologies: ['Flutter', 'Provider', 'Firebase', 'RESTful API'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Food Delivery App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'A food delivery application with real-time order tracking, restaurant discovery, and secure payment integration.',
      technologies: ['Flutter', 'GetX', 'Google Maps API', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Social Media App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'A feature-rich social media application with post sharing, messaging, and user profile management.',
      technologies: ['Flutter', 'Bloc', 'Firebase Auth', 'Cloud Firestore'],
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Task Management App',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'A productivity application with task management, reminders, and project tracking capabilities.',
      technologies: ['Flutter Web', 'Provider', 'Hive', 'Firebase'],
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive fitness tracking app with workout plans, progress monitoring, and health metrics.',
      technologies: ['Flutter', 'Bloc', 'SQLite', 'Charts'],
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['Flutter Web', 'GetX', 'Weather API', 'Google Maps'],
      github: '#',
      demo: '#',
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Explore my portfolio of Flutter applications ranging from mobile apps to web solutions.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="mx-auto flex justify-center">
            <TabsTrigger 
              value="all" 
              onClick={() => setActiveTab('all')}
              className="px-6"
            >
              All Projects
            </TabsTrigger>
            <TabsTrigger 
              value="mobile" 
              onClick={() => setActiveTab('mobile')}
              className="px-6"
            >
              Mobile Apps
            </TabsTrigger>
            <TabsTrigger 
              value="web" 
              onClick={() => setActiveTab('web')}
              className="px-6"
            >
              Web Apps
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs font-medium bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a 
                        href={project.github}
                        className="text-gray-700 hover:text-primary transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.demo}
                        className="text-gray-700 hover:text-primary transition-colors"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="mobile" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs font-medium bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a 
                        href={project.github}
                        className="text-gray-700 hover:text-primary transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.demo}
                        className="text-gray-700 hover:text-primary transition-colors"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="web" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs font-medium bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a 
                        href={project.github}
                        className="text-gray-700 hover:text-primary transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.demo}
                        className="text-gray-700 hover:text-primary transition-colors"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
