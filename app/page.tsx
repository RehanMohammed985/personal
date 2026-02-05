'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  const socialLinks = [
    { icon: Github, label: 'GitHub', link: 'https://github.com/RehanMohammed985' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/rehan-mohammed-237bab273/' },
    { icon: Twitter, label: 'X', link: 'https://x.com/rehan_m0' },
  ]

  const experiences = [
    {
      title: 'Telora Fellow',
      company: 'Campanion',
      period: '2025 - Present',
      description: 'Acquired funding and working on startup in the edtech space. Building innovative solutions to transform educational technology and learning experiences.',
    },
    {
      title: 'AI Researcher',
      company: 'Cohere Labs',
      period: 'June 2025 - Present',
      description: 'Developing models for dynamic role assignment and efficient communication through graph-based protocols. Working with Multi-Agent Reinforcement Learning.',
    },
    {
      title: 'Artificial Intelligence Researcher',
      company: 'UNCC College of Computing and Informatics',
      period: '2024 - Present',
      description: 'Conducting research on causal inference and causal effect estimation using DoWhy libraries and causal models. Working under Principal Investigator Dr. Gabriel Terejanu to develop advanced methods for understanding causal relationships in complex systems and applying these techniques to real-world problems.',
    },
    {
      title: 'Tech Researcher',
      company: 'The VONG Movement',
      period: 'June 2024 - July 2024',
      description: 'Researching predictive models and creating trends. Used for weather prediction and pollution management.',
    },
    {
      title: 'Pre-Calculus Teaching Assistant',
      company: 'NCSSM',
      period: 'August 2023 - May 2024',
      description: 'Assisted in teaching pre-calculus to high school students at the #1 public school in the USA. Provided one-on-one tutoring and helped develop curriculum materials.',
    },
    {
      title: 'Summer Researcher',
      company: 'Lenovo Innovation Program',
      period: 'July 2023',
      description: 'Researched and built applications for Lead Poisoning Awareness.',
    },
    {
      title: 'Scientific LLM Researcher',
      company: 'NCSSM',
      period: 'June 2023 - July 2023',
      description: 'Conducted research on large language models for scientific applications. Fine-tuned models with multiple prompt engineering techniques to analyze efficiency.',
    },
  ]

  const projects = [
    {
      title: 'Scalable Multi-Agent Coordination Platform',
      description: 'Developed a sophisticated multi-agent system that enables dynamic role assignment and efficient communication through graph-based protocols. The platform supports scalable coordination for complex distributed tasks.',
      tags: ['Python', 'Graph Theory', 'Multi-Agent Systems', 'Distributed Computing'],
    },
    {
      title: 'Modular Causal Inference Server',
      description: 'Built a modular server for causal inference analysis using FastMCP and DoWhy frameworks. Enables researchers to perform complex causal analysis with high performance and scalability.',
      tags: ['Python', 'FastMCP', 'DoWhy', 'Causal Inference', 'API Development'],
    },
    {
      title: 'JARVIS',
      description: 'Created an intelligent assistant system that combines research capabilities, voice interaction, and automated scripting. Designed to streamline research workflows and enhance productivity.',
      tags: ['Python', 'NLP', 'Voice Processing', 'Automation', 'API Integration'],
    },
    {
      title: 'Neural Architecture Search Engine',
      description: 'Developed an automated system for discovering optimal neural network architectures using reinforcement learning and evolutionary algorithms. Reduces manual hyperparameter tuning by 67%.',
      tags: ['Python', 'TensorFlow', 'Reinforcement Learning', 'Evolutionary Algorithms', 'AutoML'],
    },
    {
      title: 'Real-time Emotion Recognition System',
      description: 'Built a real-time emotion recognition system that processes facial expressions, voice tone, and physiological signals to accurately predict emotional states with 71% accuracy.',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'Signal Processing', 'Computer Vision'],
    },
    {
      title: 'Autonomous Drone Navigation System',
      description: 'Implemented an autonomous navigation system for drones using computer vision and reinforcement learning. Enables safe flight in complex environments with dynamic obstacle avoidance.',
      tags: ['Python', 'ROS', 'Computer Vision', 'Reinforcement Learning', 'Robotics'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 sm:p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95 transition-all duration-200 touch-manipulation"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 sm:w-5 sm:h-5" />
        ) : (
          <Moon className="w-5 h-5 sm:w-5 sm:h-5" />
        )}
      </button>
      {/* Hero Section */}
      <section id="hero" className="pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-1 text-gray-900 dark:text-gray-100 tracking-tight">
              Rehan Mohammed
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 font-light">
              passionate and curious
            </p>
          </motion.div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Computer science student at NC State. Researcher. Builder. I solve high-stakes technical problems and architect solutions that scale. Currently building something innovative
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-10 text-gray-900 dark:text-gray-100 tracking-tight">
              Experience
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="border-b border-gray-200 dark:border-gray-800 pb-5 sm:pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 mb-1">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-500 mt-1 sm:mt-0 sm:ml-4">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-10 text-gray-900 dark:text-gray-100 tracking-tight">
              Projects
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="border-b border-gray-200 dark:border-gray-800 pb-5 sm:pb-6 last:border-0 last:pb-0"
                >
                  <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 text-center">
              <a
                href="https://github.com/RehanMohammed985"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 active:opacity-70 transition-all inline-flex items-center space-x-1 touch-manipulation"
              >
                <Github className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
                <span>Find all of this on my GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-6 mb-6 sm:mb-8">
              <a
                href="mailto:rehanmoin91@gmail.com"
                className="inline-flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 active:opacity-70 transition-all touch-manipulation"
              >
                <Mail className="w-4 h-4 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium break-all">rehanmoin91@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-5 sm:space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 active:opacity-70 transition-all p-2 touch-manipulation"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 sm:py-6 px-4 sm:px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Rehan Mohammed
          </p>
        </div>
      </footer>
    </div>
  )
}
