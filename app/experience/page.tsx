'use client'

import Link from 'next/link'

const experiences = [
  {
    title: 'AI-Human Simulation Researcher',
    org: 'ARNAV Lab @ NC State Department of CSC',
    period: 'Spring 2025 \u2013 Present',
    desc: 'Building AI teaching assistants that combine large language models, retrieval-augmented generation (RAG), and autonomous agent architectures, while researching human-simulation agents for behavioral modeling and emergent interaction studies.',
  },
  {
    title: 'Fellow',
    org: 'Telora',
    period: '2025 \u2013 Present',
    desc: 'Acquired funding and working on a startup in the edtech space. Building innovative solutions to transform educational technology and learning experiences.',
  },
  {
    title: 'AI Researcher',
    org: 'Cohere Labs',
    period: 'June 2025 \u2013 Aug 2025',
    desc: 'Developing models for dynamic role assignment and efficient communication through graph-based protocols. Working with Multi-Agent Reinforcement Learning.',
  },
  {
    title: 'AI Researcher',
    org: 'UNCC College of Computing and Informatics',
    period: 'Jan 2025 \u2013 March 2025',
    desc: 'Conducting research on causal inference and causal effect estimation using DoWhy libraries and causal models. Working under Principal Investigator Dr. Gabriel Terejanu to develop advanced methods for understanding causal relationships in complex systems and applying these techniques to real-world problems.',
  },
  {
    title: 'Tech Researcher',
    org: 'The VONG Movement',
    period: 'June 2024 \u2013 July 2024',
    desc: 'Researching predictive models and creating trends. Used for weather prediction and pollution management.',
  },
  {
    title: 'Pre-Calculus TA',
    org: 'NCSSM',
    period: 'Aug 2023 \u2013 May 2024',
    desc: 'Assisted in teaching pre-calculus to high school students at the #1 public school in the USA. Provided one-on-one tutoring and helped develop curriculum materials.',
  },
  {
    title: 'Summer Researcher',
    org: 'Lenovo Innovation Program',
    period: 'July 2023',
    desc: 'Researched and built applications for Lead Poisoning Awareness.',
  },
  {
    title: 'Scientific LLM Researcher',
    org: 'NCSSM',
    period: 'June 2023 \u2013 July 2023',
    desc: 'Conducted research on large language models for scientific applications. Fine-tuned models with multiple prompt engineering techniques to analyze efficiency.',
  },
]

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 pb-6" style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
      <Link href="/" className="text-black text-base hover:opacity-60 transition-opacity mb-8 inline-block">
        &larr; Back
      </Link>

      <p className="text-black font-bold text-base uppercase tracking-wider mb-8">Experience</p>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between mb-1">
              <p className="text-black font-bold text-lg">{exp.title}, <span className="font-normal">{exp.org}</span></p>
              <p className="text-black text-sm shrink-0 ml-4">{exp.period}</p>
            </div>
            <p className="text-black text-base leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
