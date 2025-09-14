import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 fade-in">
            <div className="space-y-4">
              <p className="text-orange-primary font-semibold text-lg tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Ulthi <span className="bg-gradient-to-r from-orange-primary to-sky-primary bg-clip-text text-transparent">Veerabhadrappa</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                B.Tech Computer Science & Engineering Student
              </p>
            </div>
            
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Passionate about technology and innovation, I'm dedicated to building creative solutions 
              through code. Currently pursuing my B.Tech degree while exploring the exciting worlds 
              of data science, web development, and software engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToAbout}
                className="bg-orange-primary hover:bg-orange-dark text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in fade-in-delay-1">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Ulthi Veerabhadrappa - Professional Headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative gradient circle */}
              <div className="absolute -z-10 top-4 left-4 w-80 h-80 rounded-full bg-gradient-to-br from-orange-light/30 to-sky-light/30 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in fade-in-delay-3">
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-orange-primary transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;