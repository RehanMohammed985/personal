'use client'

import { motion } from 'framer-motion'
import { Building, Calendar, MapPin, ExternalLink, Brain, Users, BookOpen, Zap, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Experience() {
  const experiences = [
    {
      title: "AI Researcher",
      company: "Cohere Labs",
      location: "Remote",
      period: "June 2025 - Present",
      description: "Working on developing models and dynamic role assignment and efficient communication through graph-based protocols. Working with MARL (Multi Agent Reinforcement Learning)",
      skills: ["AI Research", "NLP", "LLMs", "Python", "Machine Learning"],
      icon: Brain,
      link: "#"
    },
    {
      title: "Tech Researcher",
      company: "The VONG Movement",
      location: "Remote",
      period: "June 2024 - July 2024",
      description: "Researching predictive models and creating trends. Used for weather prediction and pollution management",
      skills: ["Technology Research", "Social Impact", "Innovation", "Project Management"],
      icon: Zap,
      link: "#"
    },
    {
      title: "Pre-Calculus Teaching Assistant",
      company: "NCSSM",
      location: "Durham, NC",
      period: "August 2023 - May 2024",
      description: "Assisted in teaching pre-calculus to high school students at the #1 public school in the USA. Provided one-on-one tutoring and helped develop curriculum materials.",
      skills: ["Teaching", "Mathematics", "Curriculum Development", "Student Support"],
      icon: BookOpen,
      link: "#"
    },
    {
      title: "Summer Researcher",
      company: "Lenovo Innovation Program",
      location: "Raleigh, NC",
      period: "July 2023 - July 2023",
      description: "Researched and built applications for Lead Poisoning Awareness.",
      skills: ["Research", "Innovation", "Technology", "Collaboration"],
      icon: Building,
      link: "#"
    },
    {
      title: "Scientific LLM Summer Researcher",
      company: "NCSSM",
      location: "Durham, NC",
      period: "June 2023 - July 2023",
      description: "Conducted research on large language models for scientific applications. Fine tuned models with multiple prompt engineering techniques to analyze efficiency.",
      skills: ["LLMs", "Scientific Research", "Python", "Machine Learning", "NLP"],
      icon: Brain,
      link: "#"
    },
    {
      title: "AI/ML Researcher",
      company: "Algoverse",
      location: "Remote",
      period: "May 2025 - Present",
      description: "Building a fake news detection system combining BERT-based text classification with graph-based source credibility modeling to identify and flag misinformation with higher accuracy.",
      skills: ["Machine Learning", "AI", "Computer Vision", "NLP", "Python", "TensorFlow"],
      icon: Brain,
      link: "#"
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
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-20"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white">
              Experience
            </h1>
            <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              My research and professional experience across various organizations, focusing on AI, machine learning, and technology innovation.
            </p>
          </motion.div>
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center">
                      <exp.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.title}</h3>
                      <span className="text-sm sm:text-base text-gray-400 mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mb-3">
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4 text-gray-400" />
                        <span className="text-sm sm:text-base text-gray-300">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm sm:text-base text-gray-300">{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
