import { ExternalLink, Github, Code, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Credits Management Website',
      description: 'A comprehensive web application for managing academic credits and course tracking. Built with modern web technologies to provide students with an intuitive interface for monitoring their academic progress.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      icon: Database,
      gradient: 'from-orange-primary to-orange-light',
      features: [
        'User authentication system',
        'Credit tracking dashboard',
        'Course management interface',
        'Progress visualization'
      ]
    },
    {
      title: 'ToDo List Website',
      description: 'A feature-rich task management application with a clean, user-friendly interface. Includes task categorization, priority levels, and deadline tracking to boost productivity.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      icon: Code,
      gradient: 'from-sky-primary to-sky-light',
      features: [
        'Task creation and editing',
        'Priority level assignment',
        'Deadline management',
        'Data persistence'
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="text-orange-primary">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            database management, and user interface design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group p-6 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 fade-in ${
                index % 2 === 0 ? 'fade-in-delay-1' : 'fade-in-delay-2'
              }`}
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}></div>
                  <div className={`relative bg-gradient-to-r ${project.gradient} p-4 rounded-lg`}>
                    <div className="flex items-center justify-between">
                      <project.icon className="w-8 h-8 text-white" />
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30 text-white border-0"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30 text-white border-0"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 fade-in fade-in-delay-3">
          <p className="text-gray-600 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-primary to-sky-primary hover:from-orange-dark hover:to-sky-dark text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;