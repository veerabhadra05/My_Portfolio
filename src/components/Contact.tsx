import { useState } from 'react';
import { Mail, Phone, Send, MapPin, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://ayezayunrounkxnekubl.supabase.co/functions/v1/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: result.message,
          duration: 5000,
        });
        // Reset the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error Sending Message",
        description: error.message || "There was an error sending your message. Please try again or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ulthiveera05@gmail.com',
      href: 'mailto:ulthiveera05@gmail.com',
      color: 'orange-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7330776100',
      href: 'tel:+917330776100',
      color: 'sky-primary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Adoni, Andhra Pradesh India',
      href: '#',
      color: 'orange-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/veerabhadrappa-ulthi-5073631b6',
      color: 'sky-primary'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In <span className="text-orange-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8 fade-in fade-in-delay-1">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking for a collaborator on your next project, 
                have questions about my work, or just want to connect, I'd love to hear from you. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group p-4 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4"
                    >
                      <div className={`p-3 bg-${info.color}/10 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`w-6 h-6 text-${info.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">
                          {info.label}
                        </p>
                        <p className={`text-${info.color} font-medium hover:underline`}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in fade-in-delay-2">
            <Card className="p-8 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-gray-300 focus:border-orange-primary focus:ring-orange-primary"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-gray-300 focus:border-orange-primary focus:ring-orange-primary"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full border-gray-300 focus:border-orange-primary focus:ring-orange-primary resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-primary to-sky-primary hover:from-orange-dark hover:to-sky-dark text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;