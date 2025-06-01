
import { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useProjects } from '@/hooks/useProjects';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { data: projects, isLoading } = useProjects(activeTab);

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-blue-50 dark:bg-slate-900">
        <div className="section-container flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-blue-50 dark:bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">My Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
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
          
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project) => (
                <Card key={project.id} className="overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md dark:bg-slate-800">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image_url || 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3'} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies?.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {project.github_url && (
                        <a 
                          href={project.github_url}
                          className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                          aria-label="View GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.demo_url && (
                        <a 
                          href={project.demo_url}
                          className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                          aria-label="View Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white">
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
