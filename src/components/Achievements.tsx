import { Award, Trophy, FileText, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      type: 'Award',
      title: 'First Prize Paper Presentation',
      subtitle: 'Embedded Systems',
      description: 'Won first prize in a competitive paper presentation on Embedded Systems, showcasing deep understanding of hardware-software integration and innovative applications.',
      icon: Trophy,
      color: 'orange-primary',
      gradient: 'from-orange-primary to-orange-light'
    }
  ];

  const certifications = [
    {
      title: 'Python Essentials 1',
      issuer: 'CISCO',
      type: 'Programming',
      description: 'Comprehensive certification covering Python fundamentals, data types, control structures, functions, and object-oriented programming concepts.',
      icon: FileText,
      color: 'sky-primary',
      gradient: 'from-sky-primary to-sky-light',
      verifyUrl: 'https://www.credly.com/badges/c74c919a-096f-489f-b22f-f0202f7bdf6c/linked_in?t=sg1dol'
    },
    {
      title: 'Introduction to Environmental Economics',
      issuer: 'NPTEL',
      type: 'Academic',
      description: 'Certification in environmental economics principles, sustainability concepts, and economic approaches to environmental challenges.',
      icon: FileText,
      color: 'sky-primary',
      gradient: 'from-sky-primary to-sky-light'
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Achievements & <span className="text-orange-primary">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recognition of academic excellence, technical proficiency, and commitment to continuous learning 
            through various competitions and certification programs.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Achievements Section */}
          <div className="fade-in fade-in-delay-1">
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-orange-primary mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Achievements</h3>
            </div>
            
            <div className="grid md:grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="group p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 bg-gradient-to-r ${achievement.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${achievement.color}/10 text-${achievement.color}`}>
                            {achievement.type}
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-800 mb-1">
                          {achievement.title}
                        </h4>
                        <p className={`text-${achievement.color} font-semibold mb-3`}>
                          {achievement.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center">
                        <Star className={`w-6 h-6 text-${achievement.color} group-hover:animate-pulse`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="fade-in fade-in-delay-2">
            <div className="flex items-center mb-8">
              <FileText className="w-8 h-8 text-sky-primary mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="group p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 bg-gradient-to-r ${cert.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <cert.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full bg-${cert.color}/10 text-${cert.color}`}>
                          {cert.type}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">
                          {cert.title}
                        </h4>
                        <p className={`text-${cert.color} font-semibold text-sm mb-3`}>
                          Issued by {cert.issuer}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {cert.description}
                        </p>
                        {cert.verifyUrl && (
                          <a 
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-${cert.color} text-sm font-medium hover:underline`}
                          >
                            Verify Certificate →
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 fade-in fade-in-delay-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-orange-primary/5 to-orange-light/5 rounded-lg">
              <div className="text-3xl font-bold text-orange-primary mb-2">1</div>
              <div className="text-gray-600 font-medium">Award Won</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-sky-primary/5 to-sky-light/5 rounded-lg">
              <div className="text-3xl font-bold text-sky-primary mb-2">2</div>
              <div className="text-gray-600 font-medium">Certifications</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-primary/5 to-orange-light/5 rounded-lg">
              <div className="text-3xl font-bold text-orange-primary mb-2">6+</div>
              <div className="text-gray-600 font-medium">Technical Skills</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-sky-primary/5 to-sky-light/5 rounded-lg">
              <div className="text-3xl font-bold text-sky-primary mb-2">2</div>
              <div className="text-gray-600 font-medium">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;