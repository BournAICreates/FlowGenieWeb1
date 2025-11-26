'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-royal-50">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-royal-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-primary-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-royal-300/20 rounded-full blur-lg"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-display mb-6"
          >
            Automate Growth with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-primary-600">
              AI Workflows
            </span>{' '}
            & Chat Widgets
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We design intelligent automations that generate leads, start conversations, and scale your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-4 flex items-center gap-2"
            >
              Get a Free Consultation
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-10 py-4"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-royal-100 rounded-full flex items-center justify-center mb-3"
              >
                <Sparkles className="w-8 h-8 text-royal-600" />
              </motion.div>
              <span className="text-sm font-medium text-gray-600">AI-Powered</span>
            </div>
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-royal-100 rounded-full flex items-center justify-center mb-3"
              >
                <Zap className="w-8 h-8 text-royal-600" />
              </motion.div>
              <span className="text-sm font-medium text-gray-600">Automation</span>
            </div>
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-royal-100 rounded-full flex items-center justify-center mb-3"
              >
                <Target className="w-8 h-8 text-royal-600" />
              </motion.div>
              <span className="text-sm font-medium text-gray-600">Lead Generation</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-royal-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-royal-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
