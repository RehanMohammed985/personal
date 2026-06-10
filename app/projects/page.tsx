'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'

const projects = [
  {
    title: 'Orbiter',
    desc: 'A macOS desktop app that delivers the tech stories that actually matter. Pulls from HN, TechCrunch, Ars, The Verge, and NYT Tech, scores every story, and only shows what is relevant.',
  },
  {
    title: '1600',
    desc: 'A free, modern SAT prep platform that uses a growth formula and a machine learning model to understand each student and help them improve the smart way. Actively being used by 25 high school students. The smarter way to study.',
  },
  {
    title: 'Scalable Multi-Agent Coordination Platform',
    desc: 'A multi-agent system for dynamic role assignment and efficient communication through graph-based protocols. Supports scalable coordination for complex distributed tasks.',
  },
  {
    title: 'Modular Causal Inference Server',
    desc: 'A modular server for causal inference analysis using FastMCP and DoWhy frameworks. Enables researchers to perform complex causal analysis with high performance.',
  },
  {
    title: 'JARVIS',
    desc: 'An intelligent assistant combining research capabilities, voice interaction, and automated scripting. Designed to streamline research workflows and enhance productivity.',
  },
  {
    title: 'Neural Architecture Search Engine',
    desc: 'Automated discovery of optimal neural network architectures using reinforcement learning and evolutionary algorithms. Reduces manual hyperparameter tuning by 67%.',
  },
  {
    title: 'Real-time Emotion Recognition System',
    desc: 'Multi-modal emotion recognition processing facial expressions, voice tone, and physiological signals to predict emotional states with 71% accuracy.',
  },
  {
    title: 'Autonomous Drone Navigation System',
    desc: 'AI-powered autonomous drone navigation using computer vision and reinforcement learning. Enables safe flight with dynamic obstacle avoidance.',
  },
]

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 pb-6" style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
      <Link href="/" className="text-black text-base hover:opacity-60 transition-opacity mb-8 inline-block">
        &larr; Back
      </Link>

      <p className="text-black font-bold text-base uppercase tracking-wider mb-8">Projects</p>

      <div className="space-y-8">
        {projects.map((proj, i) => (
          <div key={i}>
            <p className="text-black font-bold text-lg mb-1">{proj.title}</p>
            <p className="text-black text-base leading-relaxed">{proj.desc}</p>
          </div>
        ))}
      </div>

      <a href="https://github.com/RehanMohammed985" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-black text-base hover:opacity-60 transition-opacity mt-6">
        <Github className="w-4 h-4" /> View on GitHub
      </a>
    </div>
  )
}
