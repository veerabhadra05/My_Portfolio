import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional <span className="text-sky-primary">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gaining hands-on experience in data science and technology through practical internships 
            and real-world projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in fade-in-delay-1">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-primary to-orange-primary opacity-30"></div>
            
            {/* Experience Card */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-sky-primary rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <Card className="ml-16 p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                        <Briefcase className="w-6 h-6 text-sky-primary mr-3" />
                        Data Science Intern
                      </h3>
                      <p className="text-xl font-semibold text-sky-primary">
                        SkillDzire
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1 mt-2 md:mt-0">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">May 2025 - June 2025</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Completed an intensive data science internship focusing on real-world applications 
                      of machine learning and data analytics. Gained valuable experience in data processing, 
                      analysis, and visualization techniques.
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Key Responsibilities & Achievements:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Analyzed large datasets using Python and pandas for data preprocessing and cleaning
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Created data visualizations and insights using matplotlib and seaborn
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Collaborated on machine learning projects and predictive modeling
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Developed technical documentation and presented findings to stakeholders
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {['Python', 'Pandas', 'Machine Learning', 'Data Analysis', 'Visualization'].map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-sky-primary/10 text-sky-primary text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;