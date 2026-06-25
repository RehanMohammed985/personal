'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'

const projects = [
  {
    title: 'Pathfinder',
    desc: 'A career guidance platform for international students, built with Flask and a scikit-learn recommendation engine. Features personalized education & career pathway plans, CPT/OPT guidance, and visa-friendly employer matching. Recommended by the NC State International Office and helped match 3 international students with career opportunities.',
    github: 'https://github.com/RehanMohammed985/GCIS',
  },
  {
    title: 'Cursor Mobile Bridge',
    desc: 'Control Cursor on your Mac straight from your phone via Discord. DM it a feature request or a bug fix, and it plans, edits, verifies, and updates your repo in real time. This is not just a text agent — it actually reasons, with persistent per-repository memory, intent classification, and a structured plan-execute-verify loop. Each user runs their own private bridge; nothing leaves your machine.',
    github: 'https://github.com/RehanMohammed985/cursor-mobile-bridge',
  },
  {
    title: 'Orbiter',
    desc: 'A macOS desktop app that delivers the tech stories that actually matter. Pulls from HN, TechCrunch, Ars, The Verge, and NYT Tech, scores every story, and only shows what is relevant.',
    github: 'https://github.com/RehanMohammed985/Orbiter',
  },
  {
    title: '1600',
    desc: 'A free, modern SAT prep platform that uses a growth formula and a machine learning model to understand each student and help them improve the smart way. Actively being used by 25 high school students. The smarter way to study.',
    github: 'https://github.com/RehanMohammed985/1600-modern-SAT-prep',
  },
  {
    title: 'Scalable Multi-Agent Coordination Platform',
    desc: 'A multi-agent system for dynamic role assignment and efficient communication through graph-based protocols. Supports scalable coordination for complex distributed tasks.',
    github: 'https://github.com/RehanMohammed985/scalable-marl-coordination',
  },
  {
    title: 'Modular Causal Inference Server',
    desc: 'A modular server for causal inference analysis using FastMCP and DoWhy frameworks. Enables researchers to perform complex causal analysis with high performance.',
    github: 'https://github.com/RehanMohammed985/mcp-causal-inference-server',
  },
  {
    title: 'JARVIS',
    desc: 'An intelligent assistant combining research capabilities, voice interaction, and automated scripting. Designed to streamline research workflows and enhance productivity.',
    github: 'https://github.com/RehanMohammed985/JARVIS',
  },
  {
    title: 'Neural Architecture Search Engine',
    desc: 'Automated discovery of optimal neural network architectures using reinforcement learning and evolutionary algorithms. Reduces manual hyperparameter tuning by 67%.',
    github: 'https://github.com/RehanMohammed985/nas-engine',
  },
  {
    title: 'Real-time Emotion Recognition System',
    desc: 'Multi-modal emotion recognition processing facial expressions, voice tone, and physiological signals to predict emotional states with 71% accuracy.',
  },
  {
    title: 'Autonomous Drone Navigation System',
    desc: 'AI-powered autonomous drone navigation using computer vision and reinforcement learning. Enables safe flight with dynamic obstacle avoidance.',
    github: 'https://github.com/RehanMohammed985/autonomous-drone-navigation',
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
            <div className="flex items-baseline gap-2 mb-1">
              <p className="text-black font-bold text-lg">{proj.title}</p>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-60 transition-opacity">
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
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
