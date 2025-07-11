'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to your backend
    const mailtoLink = `mailto:rehanmoin91@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.open(mailtoLink)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rehanmoin91@gmail.com",
      link: "mailto:rehanmoin91@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Charlotte, NC",
      link: null
    },
    {
      icon: Phone,
      label: "Available for",
      value: "Research, Internships, Collaborations",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/RehanMohammed985",
      link: "https://github.com/RehanMohammed985"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rehan-mohammed-237bab273",
      link: "https://www.linkedin.com/in/rehan-mohammed-237bab273/"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@rehan_m0",
      link: "https://x.com/rehan_m0"
    }
  ]

  const leftSideSocialLinks = [
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
          {leftSideSocialLinks.map((social, index) => (
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
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              I'm always interested in new opportunities, research collaborations, and interesting conversations about AI, technology, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black px-6 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all duration-200 text-sm sm:text-base"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-white mb-1">{info.label}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-800">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Connect With Me</h2>
                <div className="space-y-4 sm:space-y-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-white">{social.label}</h3>
                        <p className="text-sm sm:text-base text-gray-400">{social.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 