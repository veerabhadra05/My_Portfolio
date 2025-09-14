import { Code, Database, Lightbulb, MessageSquare, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const technicalSkills = [
    { name: 'Python', icon: Code, level: 90 },
    { name: 'Java', icon: Code, level: 85 },
    { name: 'JavaScript', icon: Code, level: 80 },
    { name: 'HTML & CSS', icon: Code, level: 95 },
    { name: 'SQL & MySQL', icon: Database, level: 85 },
    { name: 'C Programming', icon: Code, level: 80 },
  ];

  const softSkills = [
    { name: 'Analytical Thinking', icon: Lightbulb },
    { name: 'Problem Solving', icon: Zap },
    { name: 'Adaptability', icon: Users },
    { name: 'Effective Communication', icon: MessageSquare },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-orange-primary">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate B.Tech student specializing in Computer Science and Engineering, 
            currently studying at St. John's College of Engineering & Technology. 
            I love turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Education & Overview */}
          <div className="space-y-8 fade-in fade-in-delay-1">
            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-primary rounded-full mr-3"></span>
                  Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-700">
                      Bachelor of Technology
                    </h4>
                    <p className="text-orange-primary font-medium">
                      Computer Science & Engineering
                    </p>
                    <p className="text-gray-600">
                      St. John's College of Engineering & Technology
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-sky-primary rounded-full mr-3"></span>
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="p-2 bg-sky-primary/10 rounded-lg">
                        <skill.icon className="w-5 h-5 text-sky-primary" />
                      </div>
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Skills */}
          <div className="fade-in fade-in-delay-2">
            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-orange-primary rounded-full mr-3"></span>
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="w-5 h-5 text-orange-primary" />
                          <span className="font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-primary to-orange-light h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;