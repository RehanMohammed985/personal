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
      description: "Conducting cutting-edge research in natural language processing and large language models. Working on improving model performance and developing new AI applications.",
      skills: ["AI Research", "NLP", "LLMs", "Python", "Machine Learning"],
      icon: Brain,
      link: "#"
    },
    {
      title: "Tech Researcher",
      company: "The VONG Movement",
      location: "Remote",
      period: "June 2024 - July 2024",
      description: "Researching emerging technologies and their applications in social impact. Contributing to innovative solutions that address real-world challenges.",
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
      description: "Participated in Lenovo's innovation program, working on cutting-edge technology projects and contributing to research initiatives in computer science and AI.",
      skills: ["Research", "Innovation", "Technology", "Collaboration"],
      icon: Building,
      link: "#"
    },
    {
      title: "Scientific LLM Summer Researcher",
      company: "NCSSM",
      location: "Durham, NC",
      period: "June 2023 - July 2023",
      description: "Conducted research on large language models for scientific applications. Developed and tested models for processing scientific literature and research papers.",
      skills: ["LLMs", "Scientific Research", "Python", "Machine Learning", "NLP"],
      icon: Brain,
      link: "#"
    },
    {
      title: "AI/ML Researcher",
      company: "Algoverse",
      location: "Remote",
      period: "May 2025 - Present",
      description: "Researched and developed machine learning algorithms and AI solutions. Contributed to various projects involving computer vision, natural language processing, and predictive modeling.",
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
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex space-x-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group"
            >
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </motion.button>
          </Link>
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group"
            >
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </motion.button>
          </Link>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group"
            >
              Projects
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </motion.button>
          </Link>
          <Link href="/experience">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group"
            >
              Experience
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group"
            >
              Contact
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Social Links - Left Side */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
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
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 sm:px-12 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl sm:text-7xl font-bold mb-8 text-white">
              Experience
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My research and professional experience across various organizations, focusing on AI, machine learning, and technology innovation.
            </p>
          </motion.div>
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-10 border border-gray-800"
              >
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                      <exp.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-2xl font-semibold text-gray-300 mb-1">{exp.company}</h4>
                      </div>
                      <div className="flex items-center space-x-6 text-lg text-gray-400 mt-4 sm:mt-0">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full border border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-32"
          >
            <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
              <h3 className="text-3xl font-bold text-white mb-12 text-center">
                Research Focus Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">AI & Machine Learning</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Specialized in large language models, neural networks, and cognitive architectures
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">Research & Innovation</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Experience in academic and industry research with focus on practical applications
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">Technology Leadership</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Leading projects and mentoring others in cutting-edge technology development
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 