'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Code, Zap, Globe, Music, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const currentActivity = {
    title: "Exploring Cognitive Science & Human Thinking",
    description: "Starting a new project exploring how cognitive architectures can enhance AI reasoning. I'll be diving into how models like ACT-R and SOAR can be integrated with neural networks to simulate human-like decision-making, memory, and problem-solving. The goal is to build a hybrid system that combines symbolic and sub-symbolic processing.",
    icon: Brain
  }

  const currentlyListening = {
    song: "Coffee",
    artist: "Miguel"
  }

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
      <div className="fixed top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8"
        >
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
        </motion.div>
      </div>

      {/* Social Links - Left Side (Hidden on mobile) */}
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

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-32 pt-24 sm:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-white">
              Rehan Mohammed
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8">
              AI Researcher & Computer Science Student
            </p>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Rising sophomore at NC State University, Honors CS student, and passionate about 
              startups, tech, and the brain. Currently exploring the intersection of AI and cognitive science.
            </p>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all duration-200 text-sm sm:text-base"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200 text-sm sm:text-base"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Current Activity Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-6 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-900 rounded-2xl p-6 sm:p-12 border border-gray-800"
          >
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center">
                  <currentActivity.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                  What I'm Currently Working On
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-3 sm:mb-4">
                  {currentActivity.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {currentActivity.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Currently Listening Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-6 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gray-900 rounded-2xl p-6 sm:p-12 border border-gray-800"
          >
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex-shrink-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center"
                >
                  <Music className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </motion.div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Currently Listening To / Recently Listened To
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-300">
                    {currentlyListening.song}
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-400">
                    {currentlyListening.artist}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Quick Links */}
      <section className="py-16 sm:py-32 px-4 sm:px-6 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900 rounded-xl p-6 sm:p-8 cursor-pointer border border-gray-800 hover:border-gray-700 transition-all duration-200"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">About Me</h3>
                <p className="text-gray-400 text-sm sm:text-base">Learn about my background, education, and interests in AI, startups, and cognitive science.</p>
              </motion.div>
            </Link>
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900 rounded-xl p-6 sm:p-8 cursor-pointer border border-gray-800 hover:border-gray-700 transition-all duration-200"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Projects</h3>
                <p className="text-gray-400 text-sm sm:text-base">Explore my technical projects including AI research, multi-agent systems, and machine learning applications.</p>
              </motion.div>
            </Link>
            <Link href="/experience">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-900 rounded-xl p-6 sm:p-8 cursor-pointer border border-gray-800 hover:border-gray-700 transition-all duration-200"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Experience</h3>
                <p className="text-gray-400 text-sm sm:text-base">View my research experience at Cohere Labs, Lenovo, NCSSM, and other organizations.</p>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 