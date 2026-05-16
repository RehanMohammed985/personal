import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import BlogClient from './BlogClient'
import BlogContent from './BlogContent'
import StarfieldBackground from '../../components/StarfieldBackground'

const blogPosts = [
  {
    slug: 'building-multi-agent-systems',
    title: 'Building Multi-Agent Systems with Graph-Based Protocols',
    date: 'March 2025',
    description: 'Exploring how graph theory can enable efficient communication and dynamic role assignment in distributed multi-agent systems. A deep dive into coordination strategies.',
    tags: ['Multi-Agent Systems', 'Graph Theory', 'Distributed Computing'],
    content: `
Over the past few months, I've been spending a lot of time exploring multi-agent AI systems and how groups of AI agents can work together to solve problems more efficiently than a single model alone.

Instead of one giant AI trying to do everything, the idea is to create multiple specialized agents that communicate, share information, and coordinate actions together.

For example:
One agent → planning
One agent → coding
One agent → memory retrieval
One agent → validation/testing
One agent → execution

Together, these agents can solve more complex tasks while staying modular and scalable.

What Is a Multi-Agent System?

A multi-agent system is exactly what it sounds like: multiple AI agents working together.

Think of it like a team:

┌─────────────────────────────────────────────────────────────┐
│                    Multi-Agent Team Structure                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              ┌─────────────┐                                │
│              │ User Input  │                                │
│              └──────┬──────┘                                │
│                     │                                       │
│        ┌────────────┼────────────┐                        │
│        │            │            │                        │
│        ▼            ▼            ▼                        │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                   │
│ │ Planner  │ │ Research │ │  Memory  │                   │
│ │  Agent   │ │  Agent   │ │  Agent   │                   │
│ └────┬─────┘ └────┬─────┘ └────┬─────┘                   │
│      │            │            │                          │
│      └──────┬─────┴─────┬──────┘                          │
│             ▼           ▼                                 │
│        ┌────────────────────┐                             │
│        │  Coordinator Agent │                             │
│        └────────────────────┘                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Each agent specializes in something different. The challenge is not just making the agents smart individually. The real challenge is: How do the agents communicate efficiently? That question is what pulled me deeper into graph-based communication systems.

Why Graph-Based Communication?

In a simple system, every agent talks to every other agent. That sounds good at first, but it becomes messy very quickly. If you have 20 agents all constantly sending messages to each other, communication becomes noisy and inefficient.

So instead of full communication, I started experimenting with graph-based protocols. In these systems:
- each agent is a node
- communication paths are edges
- the system learns which connections matter most

Simple visualization:

┌─────────────────────────────────────────────────────────────┐
│              Graph-Based Communication Network             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│     Agent A ───── Agent B                                   │
│        │             │                                      │
│        │             │                                      │
│     Agent C ───── Agent D                                   │
│             \\                                              │
│              \\                                             │
│             Agent E                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Not every agent needs to talk to every other agent. Some agents may only communicate when necessary. That makes the system:
- faster
- more scalable
- less noisy
- more efficient

What I've Been Learning

Most of my experimentation has been in:
- Python
- PyTorch
- reinforcement learning
- graph neural networks
- attention mechanisms
- decentralized coordination systems

One area I found especially interesting is attention-based communication. Instead of forcing communication equally, agents learn:
- who to communicate with
- when to communicate
- how much information to send

Conceptually:

┌─────────────────────────────────────────────────────────────┐
│              Attention-Based Communication                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Agent A                                                    │
│     │                                                       │
│     ├── 90% attention → Agent B                            │
│     │                                                       │
│     ├── 10% attention → Agent C                            │
│     │                                                       │
│     └── 0% attention → Agent D                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

This creates dynamic communication structures where the system adapts based on the task. Interestingly, I found that more communication does not always improve performance. Sometimes too much communication actually hurts the system because agents start sharing unnecessary or conflicting information. That was one of the biggest things I learned while experimenting.

The Technical Side

Most of the systems I've been building use shared neural policies with graph-based message passing. At a high level:

Observation → Agent Encoder → Message Passing → Decision Layer → Action

Or visually:

┌─────────────────────────────────────────────────────────────┐
│              System Architecture Flow                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│          ┌───────────────┐                                  │
│          │ Environment   │                                  │
│          └──────┬────────┘                                  │
│                 │                                           │
│                 ▼                                           │
│        ┌─────────────────┐                                  │
│        │ Individual      │                                  │
│        │ Agent Observers │                                  │
│        └──────┬──────────┘                                  │
│               │                                            │
│               ▼                                            │
│      ┌───────────────────┐                                  │
│      │ Graph Communication│                                 │
│      │ / Message Passing  │                                  │
│      └────────┬──────────┘                                  │
│               │                                            │
│               ▼                                            │
│      ┌───────────────────┐                                  │
│      │ Policy / Decision │                                  │
│      └────────┬──────────┘                                  │
│               │                                            │
│               ▼                                            │
│           Agent Actions                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘

I've also been experimenting with:
- weighted communication edges
- sparse communication
- communication entropy
- variable agent scaling
- attention masking
- decentralized execution

One interesting challenge is scaling. A system that works with 3 agents might completely break with 20 agents. So a lot of the work becomes about stability and communication efficiency.

Real-World Applications

What makes this field exciting is how many real-world systems resemble multi-agent coordination. Examples include:
- autonomous drones
- robot swarms
- traffic systems
- logistics routing
- distributed AI assistants
- autonomous coding systems
- financial simulations
- cybersecurity monitoring

One thing I'm especially interested in is autonomous AI workflows. Instead of one assistant trying to do everything, imagine:

┌─────────────────────────────────────────────────────────────┐
│              Autonomous AI Workflow                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Coding Agent                                               │
│        ↓                                                    │
│  Testing Agent                                              │
│        ↓                                                    │
│  Security Agent                                             │
│        ↓                                                    │
│  Deployment Agent                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Each agent specializes in a specific task while coordinating through learned communication protocols. That idea becomes incredibly powerful when combined with local AI systems and tool execution.

Why I Find It Interesting

What I like most about multi-agent systems is that small communication changes can completely alter the behavior of the entire system. Tiny adjustments in:
- attention
- graph structure
- communication frequency
- sparsity
- message weighting

can lead to dramatically different coordination patterns. It almost starts feeling less like traditional programming and more like observing an emergent ecosystem.

There's also still a lot researchers don't fully understand yet. Questions like:
- What is the optimal communication structure?
- How much communication is too much?
- How do agents develop specialization?
- Can communication emerge naturally?

are still active areas of research. That uncertainty is what makes the field exciting.

Final Thoughts

I'm still early in this journey and constantly learning, but building graph-based multi-agent systems has already taught me a lot about:
- distributed intelligence
- reinforcement learning
- scalability
- communication bottlenecks
- coordination dynamics
- emergent behaviors

It's one of the most technically interesting areas I've explored so far. As AI systems become more capable, I think coordination between multiple specialized agents will become increasingly important. The future probably won't be one giant monolithic AI doing everything. It'll likely be teams of intelligent systems learning how to work together.
    `
  },
  {
    slug: 'causal-inference-beyond-correlation',
    title: 'Causal Inference: Beyond Correlation',
    date: 'February 2025',
    description: 'Understanding the fundamentals of causal inference and how it differs from traditional correlation-based analysis. Practical applications using DoWhy.',
    tags: ['Causal Inference', 'Machine Learning', 'Research'],
    content: `
One of the most common phrases in statistics and machine learning is:

“Correlation does not imply causation.”

It sounds simple, but the deeper I got into AI and research, the more I realized how important that idea actually is.

Traditional machine learning models are extremely good at finding patterns in data. Give a model enough information, and it can often predict outcomes surprisingly well. But prediction and understanding are not the same thing.

Just because two things move together does not mean one causes the other.

For example:
- Ice cream sales and drowning incidents both increase during the summer
- Stock prices sometimes correlate with completely unrelated metrics
- Social trends can appear connected even when they are driven by hidden variables

A normal machine learning model might detect these patterns, but it cannot truly explain why they happen.

That is where causal inference becomes interesting.

What Is Causal Inference?

Causal inference is the study of cause-and-effect relationships.

Instead of asking:
“What patterns exist in the data?”

it asks:
“What actually causes an outcome to happen?”

That difference is huge.

Causal inference combines:
- statistics
- probability
- domain knowledge
- graphical modeling
- counterfactual reasoning

to move beyond simple correlations.

A big part of causal inference involves building causal graphs, where variables are connected based on assumed relationships.

Simple example:

┌─────────────────────────────────────────────────────────────┐
│              Causal Graph Example                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│          Weather ───► Ice Cream Sales                      │
│               │                                              │
│               ▼                                              │
│     Swimming Activity ───► Drowning Incidents                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

At first glance, ice cream sales and drowning incidents look connected.

But in reality, the hidden driver is weather.

That is the type of reasoning causal inference tries to uncover.

Why This Matters

In many real-world systems, making decisions based purely on correlation can be dangerous.

Imagine:
- medical treatment recommendations
- policy decisions
- financial systems
- autonomous systems
- scientific research

If we mistake correlation for causation, we can easily draw the wrong conclusions.

Causal inference helps us ask questions like:
- What would happen if we changed a variable?
- Did this treatment actually cause improvement?
- What is the root cause behind an observed effect?
- What would have happened under different conditions?

These are much deeper questions than standard prediction tasks.

Learning Through DoWhy

One tool I've been learning and experimenting with is DoWhy, a Python library for causal inference.

What I like about it is that it makes causal reasoning more explicit and structured instead of hiding everything inside a black-box model.

DoWhy allows you to:
- define causal graphs
- estimate causal effects
- test assumptions
- perform robustness checks
- compare different causal estimation methods

The workflow is usually something like:

┌─────────────────────────────────────────────────────────────┐
│              DoWhy Workflow                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Build causal graph                                         │
│        ↓                                                    │
│  Identify assumptions                                      │
│        ↓                                                    │
│  Estimate causal effect                                     │
│        ↓                                                    │
│  Validate robustness                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

It forces you to think carefully about why relationships exist instead of only focusing on predictive accuracy.

Applications I've Been Exploring

In my research work at UNCC, I've been exploring how causal inference can help analyze more complex systems where simple correlations are not enough.

Some areas I've looked into include:
- treatment effect analysis
- intervention modeling
- policy impact analysis
- root-cause reasoning in complex systems

One thing I find especially interesting is how causal reasoning overlaps with AI systems. As AI becomes more integrated into decision-making, understanding causality becomes increasingly important. A highly accurate model is useful, but understanding why something happens is often even more valuable.

Final Thoughts

The more I learn about causal inference, the more I realize how different it is from traditional machine learning.

Machine learning is often about prediction.

Causal inference is about understanding.

And in many real-world situations, understanding is what actually matters most.

There is still a lot I am learning, but causal reasoning has already changed the way I think about data, AI systems, and decision-making. It is one of those fields that makes you realize how easy it is to confuse patterns with truth, and how important it is to ask deeper questions about what is actually causing the outcomes we observe.
    `
  },
  {
    slug: 'the-jarvis-hype',
    title: 'The JARVIS Hype',
    date: 'April 2025',
    description: 'Building a local JARVIS-style AI assistant from scratch with real-time voice processing, local LLM orchestration, and macOS automation.',
    tags: ['AI', 'Local AI', 'macOS', 'Voice Assistant'],
    content: `
Over the past few months, I kept seeing videos of people building their own "JARVIS" style AI assistants inspired by Iron Man. Most of the videos looked impressive visually, but a lot of them either relied heavily on cloud APIs or never really explained how the systems actually worked behind the scenes.

At first, I honestly considered just asking someone for their repository and modifying it, but I had a relatively free couple of days and decided it would be more interesting to build my own version from scratch and understand every part of the stack myself.

What started as a simple experiment turned into a full local AI system involving real-time voice processing, local LLM orchestration, macOS automation, live streaming pipelines, WebSocket infrastructure, filesystem tooling, holographic UI rendering, local vector memory, and event-driven backend systems.

The project became much larger than I originally expected, but that is also what made it interesting.

Starting With the Core Interaction Loop

The first thing I focused on was getting the basic interaction cycle working.

┌─────────────────────────────────────────────────────────────┐
│              Core Interaction Loop                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Voice Input                                                │
│        ↓                                                    │
│  Speech-to-Text                                            │
│        ↓                                                    │
│  Local LLM                                                 │
│        ↓                                                    │
│  Tool Execution                                            │
│        ↓                                                    │
│  Text-to-Speech                                            │
│        ↓                                                    │
│  Voice Response                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Before touching UI or advanced automation, I wanted the assistant to listen continuously, transcribe accurately, generate responses locally, speak naturally, and stream responses in real time.

I specifically wanted the system to run mostly locally instead of depending entirely on external APIs. That meant optimizing around local inference speed, memory usage, streaming latency, GPU acceleration, and asynchronous execution.

The AI Stack

For the language model layer, I used Ollama as the local model runtime. One reason I liked Ollama was how easy it made local model management while still allowing flexibility to swap between models depending on the task.

Some of the models I experimented with included Qwen, Llama, DeepSeek, coding-focused instruct models, and lightweight conversational models. Different models behaved very differently depending on reasoning tasks, tool usage, latency requirements, coding performance, and conversational tone.

One thing I learned quickly is that local assistants are really orchestration systems more than just "one AI model." The actual intelligence comes from how everything is wired together.

Backend Architecture

The backend was built primarily using Python, FastAPI, async WebSockets, event-driven tool routing, and streaming response pipelines.

FastAPI handled WebSocket connections, audio streaming, transcript streaming, backend APIs, live HUD updates, and tool execution endpoints.

The architecture became heavily event-based because multiple systems needed to communicate simultaneously: voice input, live transcription, LLM token streaming, UI updates, filesystem events, voice playback, and tool execution states.

At one point, I realized the project was starting to resemble a miniature operating system more than a traditional chatbot.

Real-Time Speech Recognition

For speech-to-text, I used Faster-Whisper. The biggest priority here was latency. Voice assistants immediately feel unnatural if there is too much delay between speaking, transcription, response generation, and voice playback.

The pipeline eventually looked something like this:

┌─────────────────────────────────────────────────────────────┐
│              Audio Processing Pipeline                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Microphone                                                 │
│        ↓                                                    │
│  Audio Chunk Stream                                         │
│        ↓                                                    │
│  Faster-Whisper                                             │
│        ↓                                                    │
│  Partial Transcript Streaming                               │
│        ↓                                                    │
│  LLM Processing                                             │
│        ↓                                                    │
│  Streaming Response Tokens                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Streaming partial transcripts in real time made the interface feel significantly more responsive even before the final transcription completed.

Text-to-Speech and Voice System

The voice system became one of the most interesting parts technically. I wanted something inspired by the original cinematic JARVIS voice: calm, intelligent, smooth, slightly synthetic, and low latency.

I experimented with XTTS, Coqui TTS, voice conversion systems, and local voice pipelines. The hardest part was not generating speech itself. The difficult part was synchronization: interrupt handling, response timing, playback buffering, listening state transitions, preventing feedback loops, and maintaining conversational flow.

Even small timing issues made the assistant feel noticeably worse.

macOS-Native Integration

Once the assistant could reliably converse, I started integrating it directly into macOS. This introduced an entirely different layer of engineering challenges.

The backend needed Full Disk Access, Finder automation, Accessibility permissions, AppleScript integration, and native subprocess execution. The backend had to run natively on macOS rather than inside Docker because filesystem operations needed access to the actual host machine.

Once permissions were configured correctly, the assistant could search files, open Finder folders, launch applications, create files/folders, open Cursor projects, execute local commands, and manipulate the filesystem.

One surprisingly difficult problem was natural file search. Initially, the assistant searched too literally. For example, "open Rehan Mohammed resume" might incorrectly search for rehanmohammedresume instead of understanding semantic intent.

To improve this, I implemented tokenized query parsing, fuzzy matching, synonym expansion, case-insensitive matching, file ranking, recent-file prioritization, Spotlight-assisted search, and fallback directory walking. That made interactions feel much more natural.

Frontend and HUD Design

The frontend stack used Next.js, TypeScript, TailwindCSS, Framer Motion, WebSockets, and custom animation systems.

The original UI looked far too much like a developer dashboard, so I eventually redesigned it toward a more cinematic interface. The goal became minimal, holographic, ambient, responsive, and readable.

The interface evolved into a black cinematic background, glowing holographic orb, cyan/blue HUD styling, live transcript streaming, animated listening/thinking states, transparent overlays, subtle graph-style visual effects, and real-time activity updates.

IMAGE: /hud.png

The orb itself became heavily animated using layered particles, pulsing gradients, waveform motion, audio-reactive scaling, smooth interpolation, and holographic glow effects.

One thing I learned quickly is that futuristic interfaces are incredibly easy to overcomplicate. Simplicity ended up being far harder than adding effects.

Performance Optimization

A huge amount of the project eventually became performance engineering. The main bottlenecks included STT latency, TTS startup delay, token streaming speed, WebSocket synchronization, filesystem search speed, frontend rendering, and event orchestration.

I started optimizing async task execution, incremental rendering, response streaming, local caching, file indexing, event batching, and audio buffering. The goal was making the assistant feel instantaneous rather than technically functional. That difference matters a lot in conversational systems.

What I Learned

One of the biggest things this project taught me is that building AI systems is much more about systems engineering than people often realize. The difficult parts are usually orchestration, synchronization, UX flow, state management, latency reduction, and infrastructure reliability, not simply plugging a model into an interface.

I also gained a much deeper appreciation for how powerful local AI has become. Running sophisticated assistants locally is becoming increasingly realistic, especially with optimized inference runtimes and smaller high-performance models.

What It Can Currently Do

At its current stage, the assistant already functions more like a local AI operating system assistant than a normal chatbot.

Right now, it can listen continuously through voice input, transcribe speech in real time, generate responses using local LLMs, respond using a cinematic JARVIS-style voice, search the macOS filesystem intelligently, open files and folders through Finder, launch applications like Cursor, create files and folders locally, stream live transcripts and activity updates to the HUD, maintain conversational context, and display a real-time holographic interface with reactive animations.

A large amount of the engineering effort went into reducing delays, improving responsiveness, and making the interaction feel smooth and conversational instead of robotic.

Over the next couple of weeks, I plan on continuing to automate the system further and expand it with stronger memory systems, smarter autonomous workflows, better file and application management, deeper operating system integration, browser and email integration, improved voice realism, lower latency response pipelines, more advanced holographic UI rendering, and smarter planning and reasoning systems.

The long-term goal is to make the assistant feel less like a voice tool and more like an intelligent operating layer sitting on top of the computer itself.

Final Thoughts

What started as a small side project turned into one of the most technically interesting systems I have worked on recently.

It taught me that building AI assistants is much more about orchestration, infrastructure, latency, UX, and systems engineering than simply connecting a model to a microphone.

There is still a lot I want to improve, but building this project gave me a much deeper understanding of how modern AI assistants actually work beneath the surface.
    `
  }
]

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  const currentIndex = blogPosts.findIndex(p => p.slug === params.slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
        <p>Post not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 relative overflow-hidden">
      <StarfieldBackground />
      <BlogClient />

      {/* Back Button */}
      <div className="pt-20 sm:pt-24 px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gray-200 hover:text-gray-200 transition-colors mb-8 active:scale-95 touch-manipulation"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to home</span>
        </Link>
      </div>

      {/* Blog Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <BlogContent post={{ date: post.date, title: post.title, content: post.content }} />
      </article>

      {/* Navigation */}
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-gray-800 gap-4 sm:gap-0">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="flex items-center space-x-2 text-gray-200 hover:text-gray-200 transition-colors active:scale-95 touch-manipulation"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Previous: {prevPost.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="flex items-center space-x-2 text-gray-200 hover:text-gray-200 transition-colors active:scale-95 touch-manipulation"
            >
              <span className="text-sm">Next: {nextPost.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  )
}
