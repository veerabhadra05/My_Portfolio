import { Mail, Phone, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="font-bold text-2xl bg-gradient-to-r from-orange-primary to-sky-primary bg-clip-text text-transparent">
              Ulthi Veerabhadrappa
            </div>
            <p className="text-gray-300 leading-relaxed">
              B.Tech Computer Science & Engineering student passionate about 
              technology, innovation, and creating impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-orange-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-orange-primary transition-colors duration-200 text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-sky-primary">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:ulthiveera05@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-orange-primary transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>ulthiveera05@gmail.com</span>
              </a>
              <a 
                href="tel:+917330776100"
                className="flex items-center space-x-3 text-gray-300 hover:text-sky-primary transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>+91 7330776100</span>
              </a>
              <a 
                href="#"
                className="flex items-center space-x-3 text-gray-300 hover:text-sky-primary transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Ulthi Veerabhadrappa. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;