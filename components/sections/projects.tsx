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
import { ExternalLink, Github } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { MotionWrapper } from '@/components/ui/motion-wrapper'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured shopping platform with cart, checkout, and admin dashboard functionality.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    image: '', // Placeholder
    demoUrl: '#',
    repoUrl: '#',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative task manager with drag-and-drop kanban boards.',
    tags: ['React', 'Firebase', 'Redux', 'DnD'],
    image: '', // Placeholder
    demoUrl: '#',
    repoUrl: '#',
    color: 'bg-green-500/10 text-green-500'
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful localized weather application using OpenWeatherMap API and geolocation.',
    tags: ['TypeScript', 'API Integration', 'Chart.js'],
    image: '', // Placeholder
    demoUrl: '#',
    repoUrl: '#',
    color: 'bg-orange-500/10 text-orange-500'
  },
]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
}

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <MotionWrapper>
        <div className="flex flex-col items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="text-muted-foreground text-center max-w-[600px] text-lg">
            Here are some of the recent projects I've worked on. Each represents a unique challenge and solution.
          </p>
        </div>
      </MotionWrapper>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-muted-foreground/10 group">
              <div className="h-48 bg-muted w-full relative overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5 z-10 dark:bg-white/5`} />
                <motion.div 
                  className="w-full h-full flex items-center justify-center bg-secondary/30 text-secondary-foreground/50"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                    <span className="text-5xl">💻</span>
                </motion.div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 w-full pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button variant="outline" size="sm" className="flex-1 cursor-pointer" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 cursor-pointer" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

