'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Brain, Database, Bot, Globe, Cpu, Zap, Mail, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: "Scalable Multi-Agent Coordination Platform",
      subtitle: "Dynamic Role Assignment and Graph-Based Communication",
      description: "Developed a sophisticated multi-agent system that enables dynamic role assignment and efficient communication through graph-based protocols. The platform supports scalable coordination for complex distributed tasks.",
      technologies: ["Python", "Graph Theory", "Multi-Agent Systems", "Distributed Computing"],
      icon: Bot,
      category: "AI/ML"
    },
    {
      title: "Modular Causal Inference Server",
      subtitle: "Using FastMCP and DoWhy",
      description: "Built a modular server for causal inference analysis using FastMCP and DoWhy frameworks. Enables researchers to perform complex causal analysis with high performance and scalability.",
      technologies: ["Python", "FastMCP", "DoWhy", "Causal Inference", "API Development"],
      icon: Database,
      category: "AI/ML"
    },
    {
      title: "JARVIS",
      subtitle: "Joint Assistant for Research, Voice, Interaction, and Scripting",
      description: "Created an intelligent assistant system that combines research capabilities, voice interaction, and automated scripting. Designed to streamline research workflows and enhance productivity.",
      technologies: ["Python", "NLP", "Voice Processing", "Automation", "API Integration"],
      icon: Brain,
      category: "AI/ML"
    },
    {
      title: "Neural Architecture Search Engine",
      subtitle: "Automated Deep Learning Model Discovery",
      description: "Developed an automated system for discovering optimal neural network architectures using reinforcement learning and evolutionary algorithms. Reduces manual hyperparameter tuning by 67%.",
      technologies: ["Python", "TensorFlow", "Reinforcement Learning", "Evolutionary Algorithms", "AutoML"],
      icon: Cpu,
      category: "AI/ML"
    },
    {
      title: "Real-time Emotion Recognition System",
      subtitle: "Multi-modal Affective Computing",
      description: "Built a real-time emotion recognition system that processes facial expressions, voice tone, and physiological signals to accurately predict emotional states with 71% accuracy.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Signal Processing", "Computer Vision"],
      icon: Brain,
      category: "AI/ML"
    },
    {
      title: "Autonomous Drone Navigation System",
      subtitle: "AI-Powered Obstacle Avoidance and Path Planning",
      description: "Implemented an autonomous navigation system for drones using computer vision and reinforcement learning. Enables safe flight in complex environments with dynamic obstacle avoidance.",
      technologies: ["Python", "ROS", "Computer Vision", "Reinforcement Learning", "Robotics"],
      icon: Globe,
      category: "AI/ML"
    }
  ]

  const categories = ["All", "AI/ML", "Web Development", "Mobile", "Research"]

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
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white">
                Projects
              </h1>
              <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                A collection of my technical projects, research work, and innovative solutions in AI, machine learning, and software development.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 cursor-pointer group border border-gray-800 hover:border-gray-700 transition-all duration-200"
                >
                  <div className="flex items-start space-x-4 sm:space-x-6 mb-4 sm:mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center">
                        <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-3">{project.subtitle}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ExternalLink className="w-4 h-4 text-black" />
                      </div>
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Github className="w-4 h-4 text-black" />
                      </div>
                    </div>
                    <Zap className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-20"
            >
              <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Interested in Collaborating?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  I'm always open to discussing new projects, research opportunities, or collaborations. 
                  Let's build something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="mailto:rehanmoin91@gmail.com"
                    className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                  <a
                    href="https://github.com/RehanMohammed985"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200 inline-flex items-center justify-center"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
} 
