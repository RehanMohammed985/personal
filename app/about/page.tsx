'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Brain, Rocket, Users, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const education = [
    {
      school: "NC State University",
      degree: "Bachelor of Science in Computer Science",
      details: "Rising Sophomore • Honors CS Student • Merit School of Engineering Scholar ($5k annual)",
      year: "2024 - Present",
      icon: GraduationCap
    },
    {
      school: "NCSSM (North Carolina School of Science and Mathematics)",
      degree: "High School Diploma",
      details: "#1 Public School in USA • Pre-Calculus Teaching Assistant",
      year: "2022 - 2024",
      icon: GraduationCap
    }
  ]

  const interests = [
    {
      title: "AI & Machine Learning",
      description: "Passionate about artificial intelligence, neural networks, and cognitive architectures",
      icon: Brain
    },
    {
      title: "Startups & Innovation",
      description: "Interested in building scalable solutions and exploring new technologies",
      icon: Rocket
    },
    {
      title: "Cognitive Science",
      description: "Fascinated by human thinking, decision-making processes, and brain-computer interfaces",
      icon: Brain
    },
    {
      title: "Tech & Research",
      description: "Love exploring new technologies and contributing to research projects",
      icon: Users
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/RehanMohammed985"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      link: "https://www.linkedin.com/in/rehan-mohammed-237bab273/"
    },
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/rehan_m0"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Buttons */}
      <div>
        {/* Mobile Nav Bar */}
        <div className="sm:hidden fixed top-0 left-0 w-full z-50 bg-black/80 px-2 py-2 flex overflow-x-auto space-x-3 border-b border-gray-800" style={{ WebkitOverflowScrolling: 'touch' }}>
          <Link href="/">
            <button className="text-white text-xs px-3 py-1 rounded hover:bg-gray-800 transition">Home</button>
          </Link>
          <Link href="/about">
            <button className="text-white text-xs px-3 py-1 rounded hover:bg-gray-800 transition">About</button>
          </Link>
          <Link href="/projects">
            <button className="text-white text-xs px-3 py-1 rounded hover:bg-gray-800 transition">Projects</button>
          </Link>
          <Link href="/experience">
            <button className="text-white text-xs px-3 py-1 rounded hover:bg-gray-800 transition">Experience</button>
          </Link>
          <Link href="/contact">
            <button className="text-white text-xs px-3 py-1 rounded hover:bg-gray-800 transition">Contact</button>
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="hidden sm:fixed sm:top-8 sm:left-1/2 sm:-translate-x-1/2 sm:z-50 sm:flex sm:space-x-8">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group text-sm sm:text-base"
            >
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </motion.button>
          </Link>
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group text-sm sm:text-base"
            >
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </motion.button>
          </Link>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group text-sm sm:text-base"
            >
              Projects
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </motion.button>
          </Link>
          <Link href="/experience">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group text-sm sm:text-base"
            >
              Experience
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group text-sm sm:text-base"
            >
              Contact
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </motion.button>
          </Link>
        </div>
      </div>
      {/* Social Links - Left Side (Desktop) */}
      <div className="hidden sm:block fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col space-y-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.1, x: 5 }}
              className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-gray-100 transition-all duration-200 group"
            >
              <social.icon className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
            </motion.a>
          ))}
        </motion.div>
      </div>
      {/* Social Links - Bottom Left (Mobile) */}
      <div className="sm:hidden fixed bottom-4 left-4 z-40 flex flex-row space-x-3 bg-black/80 p-2 rounded-xl border border-gray-800">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.1, x: 5 }}
            className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-gray-100 transition-all duration-200 group"
          >
            <social.icon className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
          </motion.a>
        ))}
      </div>
      {/* Add top padding for mobile nav bar */}
      <div className="pt-14 sm:pt-0">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-32">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white">
                About Me
              </h1>
              <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Computer Science student passionate about AI, startups, and understanding how the brain works.
              </p>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl p-6 sm:p-10 border border-gray-800 mb-12 sm:mb-16"
            >
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Background</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-2">Location</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Charlotte, NC</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-2">Current Status</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Rising Sophomore at NC State University</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-2">Program</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Honors Computer Science</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-2">Scholarship</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Merit School of Engineering Scholar ($5k annual)</p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Education</h2>
              <div className="space-y-6 sm:space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800"
                  >
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center">
                          <edu.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h3 className="text-lg sm:text-xl font-semibold text-white">{edu.school}</h3>
                          <span className="text-sm sm:text-base text-gray-400 mt-1 sm:mt-0">{edu.year}</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-medium text-gray-300 mb-2">{edu.degree}</h4>
                        <p className="text-sm sm:text-base text-gray-400">{edu.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Interests & Passions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800"
                  >
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center">
                          <interest.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{interest.title}</h3>
                        <p className="text-sm sm:text-base text-gray-400">{interest.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
} 
