'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, Zap, Target } from 'lucide-react'
import { useState } from 'react'

export default function Team() {
  const teamMembers = [
    {
      name: 'Tanner',
      role: 'Automation Architect & Workflow Designer',
      bio: 'Expert in designing complex automation workflows that streamline business processes and maximize efficiency.',
      initial: 'T',
      icon: Zap,
      gradient: 'from-blue-500 to-royal-500',
      social: {
        linkedin: '#',
        email: 'tanner@flowgenie.com',
        github: '#'
      }
    },
    {
      name: 'Desi',
      role: 'Sales & Marketing',
      bio: 'Drives growth through strategic sales initiatives and innovative marketing campaigns that convert prospects into customers.',
      initial: 'D',
      icon: Target,
      gradient: 'from-purple-500 to-pink-500',
      social: {
        linkedin: '#',
        email: 'desi@flowgenie.com',
        github: '#'
      }
    },
    {
      name: 'Steve Grimm',
      role: 'Business Strategy & Client Relations',
      bio: 'Leads strategic planning and maintains strong client relationships to ensure successful project outcomes and long-term partnerships.',
      initial: 'SG',
      icon: Sparkles,
      gradient: 'from-royal-500 to-blue-500',
      social: {
        linkedin: '#',
        email: 'steve@flowgenie.com',
        github: '#'
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  }

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-royal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our <span className="text-royal-600">Team</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The passionate experts behind Flowgenie, dedicated to helping businesses automate and scale.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon
            return (
              <TeamCard 
                key={member.name} 
                member={member} 
                index={index}
                IconComponent={IconComponent}
                variants={cardVariants}
              />
            )
          })}
        </motion.div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div 
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-royal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Work With Our Team
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Ready to transform your business with AI automation? Our team is here to guide you every step of the way.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-10 py-4 relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-royal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">Start Your Project</span>
                </motion.a>
                <motion.a
                  href="mailto:contactflowgenie@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-10 py-4"
                >
                  Send us an Email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Team Card Component with 3D tilt effect
function TeamCard({ member, index, IconComponent, variants }: { 
  member: any, 
  index: number, 
  IconComponent: any,
  variants: any 
}) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      variants={variants}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden"
        whileHover={{ y: -10 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Floating particles effect */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-royal-400 rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  opacity: 0.8,
                  scale: 0,
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 100}%`,
                  y: `${50 + (Math.random() - 0.5) * 100}%`,
                  opacity: [0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}

        <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
          {/* Animated Icon/Initial Circle */}
          <motion.div
            className="relative mb-6 mx-auto"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-xl relative overflow-hidden`}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
              }}
              transition={{ 
                scale: { type: "spring", stiffness: 300 },
                rotate: { duration: 0.5 }
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "linear",
                }}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
              >
                <IconComponent className="w-16 h-16 text-white" />
              </motion.div>

              {/* Glowing ring */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 border-white/50`}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)",
                    "0 0 30px rgba(59, 130, 246, 0.5)",
                    "0 0 0px rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Name and Role */}
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-2 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.4 }}
            viewport={{ once: true }}
            style={{ transform: "translateZ(30px)" }}
          >
            {member.name}
          </motion.h3>
          <motion.p
            className={`text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} font-semibold mb-4`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.5 }}
            viewport={{ once: true }}
            style={{ transform: "translateZ(30px)" }}
          >
            {member.role}
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.6 }}
            viewport={{ once: true }}
            style={{ transform: "translateZ(30px)" }}
          >
            {member.bio}
          </motion.p>

        </div>
      </motion.div>
    </motion.div>
  )
}
