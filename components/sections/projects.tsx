'use client'

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Star, GitFork, ArrowUpRight, Layers } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { MotionWrapper } from '@/components/ui/motion-wrapper'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
  gradient: string
  stats: {
    stars: number
    forks: number
  }
  featured: boolean
  category: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured shopping platform with cart, checkout, and admin dashboard.',
    longDescription: 'Built with Next.js 14, featuring server components, real-time inventory, Stripe integration, and comprehensive admin analytics dashboard.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    demoUrl: '#',
    repoUrl: '#',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    stats: { stars: 234, forks: 45 },
    featured: true,
    category: 'Full Stack'
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management with AI-powered prioritization and scheduling.',
    longDescription: 'Leverages OpenAI for intelligent task categorization, deadline predictions, and automated scheduling based on user patterns.',
    tags: ['React', 'OpenAI', 'Firebase', 'Redux', 'DnD Kit'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    demoUrl: '#',
    repoUrl: '#',
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    stats: { stars: 189, forks: 32 },
    featured: true,
    category: 'AI/ML'
  },
  {
    title: 'Real-time Analytics',
    description: 'Live dashboard for monitoring metrics with beautiful visualizations.',
    longDescription: 'WebSocket-powered real-time data streaming with D3.js visualizations, custom charts, and exportable reports.',
    tags: ['TypeScript', 'WebSocket', 'D3.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    demoUrl: '#',
    repoUrl: '#',
    gradient: 'from-green-600 via-emerald-500 to-teal-500',
    stats: { stars: 156, forks: 28 },
    featured: true,
    category: 'Data'
  },
  {
    title: 'Social Media App',
    description: 'Modern social platform with real-time messaging and media sharing.',
    longDescription: 'Full-featured social network with stories, live streaming, encrypted messaging, and ML-powered content moderation.',
    tags: ['Next.js', 'Socket.io', 'AWS S3', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop',
    demoUrl: '#',
    repoUrl: '#',
    gradient: 'from-orange-600 via-orange-500 to-yellow-500',
    stats: { stars: 312, forks: 67 },
    featured: false,
    category: 'Full Stack'
  },
  {
    title: 'Developer Portfolio',
    description: 'Stunning animated portfolio with 3D elements and smooth transitions.',
    longDescription: 'Showcase project built with Three.js, Framer Motion, and optimized for performance and accessibility.',
    tags: ['React', 'Three.js', 'Framer Motion', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&h=600&fit=crop',
    demoUrl: '#',
    repoUrl: '#',
    gradient: 'from-indigo-600 via-indigo-500 to-purple-500',
    stats: { stars: 445, forks: 89 },
    featured: false,
    category: 'Frontend'
  },
  {
    title: 'DevOps Dashboard',
    description: 'Infrastructure monitoring and deployment management system.',
    longDescription: 'Comprehensive DevOps tool for CI/CD pipeline visualization, container orchestration, and infrastructure as code.',
    tags: ['Go', 'Docker', 'Kubernetes', 'Prometheus'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
    demoUrl: '#',
    repoUrl: '#',
    gradient: 'from-red-600 via-rose-500 to-pink-500',
    stats: { stars: 178, forks: 34 },
    featured: false,
    category: 'DevOps'
  },
]

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML', 'Data', 'DevOps']

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      variants={item}
      className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div 
        className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 blur-xl transition-opacity duration-500`}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
      />
      
      <Card className="relative flex flex-col h-full overflow-hidden border-muted-foreground/10 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 rounded-2xl">
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 z-10`} />
          
          {/* Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-20">
              <Badge className="bg-yellow-500/90 text-yellow-950 hover:bg-yellow-500 shadow-lg">
                <Star className="w-3 h-3 mr-1 fill-current" /> Featured
              </Badge>
            </div>
          )}
          
          {/* Category badge */}
          <div className="absolute top-4 right-4 z-20">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm shadow-lg">
              {project.category}
            </Badge>
          </div>
          
          {/* Hover overlay with links */}
          <motion.div 
            className="absolute inset-0 z-20 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/90 rounded-full shadow-lg hover:bg-background transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5 text-primary-foreground" />
            </motion.a>
          </motion.div>
          
          {/* Stats */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>{project.stats.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>{project.stats.forks}</span>
            </div>
          </div>
        </div>
        
        <CardHeader className="flex-grow">
          <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
            {project.title}
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {isHovered ? project.longDescription : project.description}
          </CardDescription>
        </CardHeader>
        
        <CardFooter className="flex-col items-start gap-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="font-normal text-xs hover:bg-primary/10 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <MotionWrapper>
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Layers className="w-4 h-4 inline mr-2" />
              My Work
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent projects. Each one represents unique challenges 
              solved with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full transition-all"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="group">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </MotionWrapper>
      </div>
    </section>
  )
}

