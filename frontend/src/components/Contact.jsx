import React from 'react';
import { contactInfo } from '../data/mock';
import { Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-stone-900">
              Get In Touch
            </h2>
            <div className="w-20 h-0.5 bg-stone-900 mx-auto"></div>
            <p className="text-lg lg:text-xl font-light text-stone-600 leading-relaxed max-w-2xl mx-auto">
              For inquiries, project consultations, or to learn more about our bespoke marble creations, please reach out.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {/* Email */}
            <div className="space-y-4 group">
              <div className="flex justify-center">
                <div className="p-6 bg-stone-50 group-hover:bg-stone-100 transition-colors duration-300">
                  <Mail size={32} className="text-stone-900" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-light text-stone-500 tracking-wide uppercase">Email</p>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg lg:text-xl font-light text-stone-900 hover:text-stone-600 transition-colors duration-300 block"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="space-y-4 group">
              <div className="flex justify-center">
                <div className="p-6 bg-stone-50 group-hover:bg-stone-100 transition-colors duration-300">
                  <Instagram size={32} className="text-stone-900" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-light text-stone-500 tracking-wide uppercase">Instagram</p>
                <a 
                  href={contactInfo.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg lg:text-xl font-light text-stone-900 hover:text-stone-600 transition-colors duration-300 block"
                >
                  {contactInfo.instagram.handle}
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 pt-16 border-t border-stone-200">
            <p className="text-base font-light text-stone-600 leading-relaxed">
              Our atelier is open for consultations by appointment. We welcome architects, designers, and collectors to experience our craftsmanship firsthand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
