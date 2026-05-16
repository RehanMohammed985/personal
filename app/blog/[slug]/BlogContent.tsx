'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface BlogContentProps {
  post: {
    date: string
    title: string
    content: string
  }
}

export default function BlogContent({ post }: BlogContentProps) {
  const formatContent = (content: string) => {
    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]
      
      // Check if line is an image reference
      if (line.trim().startsWith('IMAGE:')) {
        const imagePath = line.trim().replace('IMAGE:', '').trim()
        elements.push(
          <div key={i} className="my-8">
            <Image 
              src={imagePath} 
              alt="Blog image" 
              width={800} 
              height={450} 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        )
        i++
      }
      // Check if line is a heading (all caps, reasonable length, not a diagram)
      else if (line.trim().length > 0 && line === line.toUpperCase() && line.trim().length < 60 && !line.includes('┌')) {
        elements.push(<h2 key={i} className="text-xl sm:text-2xl font-semibold text-gray-200 mt-8 mb-4">{line}</h2>)
        i++
      }
      // Check if line is a diagram
      else if (line.includes('┌') || line.includes('│') || line.includes('└') || line.includes('├') || line.includes('─')) {
        const diagramLines: string[] = []
        while (i < lines.length && (lines[i].includes('┌') || lines[i].includes('│') || lines[i].includes('└') || lines[i].includes('├') || lines[i].includes('─') || lines[i].trim() === '')) {
          if (lines[i].trim()) diagramLines.push(lines[i])
          i++
        }
        elements.push(
          <div key={i} className="my-6 p-4 bg-gray-900 rounded-lg overflow-x-auto">
            <pre className="font-mono text-xs sm:text-sm text-gray-200 leading-tight">{diagramLines.join('\n')}</pre>
          </div>
        )
      }
      // Check if line is a list item
      else if (line.trim().startsWith('- ')) {
        const listItems: string[] = []
        while (i < lines.length && lines[i].trim().startsWith('- ')) {
          listItems.push(lines[i])
          i++
        }
        elements.push(
          <ul key={i} className="list-disc list-inside mb-4 space-y-1">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-sm sm:text-base text-gray-200">{item.replace('- ', '')}</li>
            ))}
          </ul>
        )
      }
      // Regular paragraph - collect consecutive non-empty lines
      else if (line.trim().length > 0) {
        const paragraphLines: string[] = []
        while (i < lines.length && lines[i].trim().length > 0 && !lines[i].includes('┌') && !lines[i].trim().startsWith('- ') && !lines[i].trim().startsWith('IMAGE:') && !(lines[i] === lines[i].toUpperCase() && lines[i].trim().length < 60)) {
          paragraphLines.push(lines[i])
          i++
        }
        if (paragraphLines.length > 0) {
          elements.push(
            <p key={i} className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
              {paragraphLines.join(' ')}
            </p>
          )
        }
      }
      else {
        i++
      }
    }

    return elements
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <header className="mb-8 sm:mb-12">
        <p className="text-xs text-gray-200 mb-2">{post.date}</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-200 tracking-tight">
          {post.title}
        </h1>
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="text-sm sm:text-base text-gray-200 leading-relaxed">
          {formatContent(post.content)}
        </div>
      </div>
    </motion.div>
  )
}
