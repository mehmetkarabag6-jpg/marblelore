import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Commission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    emailjs.send(
      "service_rcf0mtn",
      "template_g2304dd",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        message: formData.message,
        title: "New Commission Request"
      }
    )
    .then(() => {
      toast.success('Thank you! Your commission inquiry has been sent.');

      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
    })
  .catch((error) => {
    console.error(error);
    toast.error('Something went wrong. Please try again.');
  });
};

  return (
    <section id="commission" className="py-24 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-light text-stone-900 leading-tight">
                  Create Your Own Marble Legacy
                </h2>
                <div className="w-20 h-0.5 bg-stone-900"></div>
                <p className="text-lg lg:text-xl font-light text-stone-600 leading-relaxed">
                  Commission a bespoke marble portrait or mosaic installation tailored to your architectural vision.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-light text-stone-900">Who We Work With</h3>
                  <ul className="space-y-2 text-base font-light text-stone-600">
                    <li>• Architects and Interior Designers</li>
                    <li>• Private Collectors and Art Enthusiasts</li>
                    <li>• Property Developers and Hospitality Groups</li>
                    <li>• Building Material Warehouses and Showrooms</li>
                    <li>• Kitchen and Bath Retailers</li>
                    <li>• Cultural Institutions and Public Spaces</li>
                  </ul>
                </div>

                <div className="space-y-3 pt-4">
                  <h3 className="text-xl font-light text-stone-900">Our Process</h3>
                  <div className="space-y-4 text-base font-light text-stone-600">
                    <div className="flex gap-4">
                      <span className="text-2xl font-light text-stone-400">01</span>
                      <div>
                        <p className="font-normal text-stone-900">Initial Consultation</p>
                        <p className="text-sm">Discuss your vision, space, and requirements</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-2xl font-light text-stone-400">02</span>
                      <div>
                        <p className="font-normal text-stone-900">Design Development</p>
                        <p className="text-sm">Create detailed renderings and material selection</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-2xl font-light text-stone-400">03</span>
                      <div>
                        <p className="font-normal text-stone-900">Production</p>
                        <p className="text-sm">Precision craftsmanship by master artisans</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white p-8 lg:p-12 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-light text-stone-700 tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-colors duration-300 text-base font-light"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-light text-stone-700 tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-colors duration-300 text-base font-light"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-light text-stone-700 tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-colors duration-300 text-base font-light"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-sm font-light text-stone-700 tracking-wide">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-colors duration-300 text-base font-light bg-white"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="retail">Retail / Showroom</option>
                    <option value="public">Public Space</option>
                    <option value="custom">Custom Portrait</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-light text-stone-700 tracking-wide">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-colors duration-300 text-base font-light resize-none"
                    placeholder="Tell us about your vision, space dimensions, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-stone-900 text-white hover:bg-stone-700 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span className="text-base font-light tracking-wide">Submit Inquiry</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p className="text-xs font-light text-stone-500 text-center pt-2">
                  * Required fields. We typically respond within 24-48 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commission;
