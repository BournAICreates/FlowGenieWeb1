'use client'

import { motion } from 'framer-motion'
import { Users, MessageCircle, Settings, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Lead Generation Workflows',
      description: 'Automate your lead capture and outreach with intelligent workflows that identify, qualify, and nurture prospects 24/7.',
      features: ['Automated lead scoring', 'Email sequences', 'CRM integration', 'Performance analytics']
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot Widgets',
      description: 'Deploy smart conversational bots that engage visitors, answer questions, and capture leads on your website.',
      features: ['Natural language processing', 'Custom branding', 'Multi-channel support', 'Real-time analytics']
    },
    {
      icon: Settings,
      title: 'Automation Setup',
      description: 'Connect your CRM, email, and AI tools for seamless data flow and automated business processes.',
      features: ['Tool integration', 'Custom workflows', 'Data synchronization', 'Ongoing support']
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6">
            Our <span className="text-royal-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating intelligent automation solutions that help businesses scale efficiently and generate more leads.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-royal-500 to-royal-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-royal-500 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Learn More Link */}
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-royal-600 font-semibold hover:text-royal-700 transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-royal-50 to-primary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">
              Ready to Automate Your Growth?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can transform your business processes and drive more leads.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-4"
            >
              Start Your Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
