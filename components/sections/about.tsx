'use client'

import { MotionWrapper } from '@/components/ui/motion-wrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, MapPin, Briefcase, GraduationCap, Heart, Coffee, Code, Rocket } from 'lucide-react'

const timeline = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of enterprise SaaS platforms',
    icon: Rocket
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Digital Agency Pro',
    description: 'Built 20+ client projects using React & Node.js',
    icon: Code
  },
  {
    year: '2020',
    title: 'Junior Developer',
    company: 'StartupHub',
    description: 'Started my professional journey in tech',
    icon: Briefcase
  },
  {
    year: '2019',
    title: 'Computer Science Degree',
    company: 'State University',
    description: 'Graduated with honors in CS',
    icon: GraduationCap
  }
]

const funFacts = [
  { icon: Coffee, label: 'Coffee Cups/Day', value: '5+' },
  { icon: Code, label: 'Lines of Code', value: '500K+' },
  { icon: Heart, label: 'Open Source Projects', value: '15+' },
]

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/5 via-transparent to-transparent" />
        
        {/* Floating shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-48 h-48 border border-accent/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4">
        <MotionWrapper>
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
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
              Get to know me
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Image & Fun Facts */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Profile Image with effects */}
              <div className="relative group">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  whileHover={{ scale: 1.02, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-2xl overflow-hidden border-4 border-background shadow-2xl"
                >
                  <Image
                    src="/images/flux_KW7hsujtwj.png"
                    alt="Developer portrait"
                    width={500}
                    height={500}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4 text-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">San Francisco, CA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Since 2019</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Fun Facts Cards */}
              <div className="grid grid-cols-3 gap-4">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card border border-border rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all"
                  >
                    <fact.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground">{fact.value}</div>
                    <div className="text-xs text-muted-foreground">{fact.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Bio & Timeline */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Bio Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Passionate about building exceptional digital experiences
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a <span className="text-foreground font-medium">Full Stack Developer</span> with 
                    over 5 years of experience crafting modern web applications. My journey began with 
                    a simple curiosity about how websites work, which quickly evolved into a deep 
                    passion for creating intuitive, performant, and accessible digital solutions.
                  </p>
                  <p>
                    I specialize in <span className="text-primary font-medium">React</span>, 
                    <span className="text-primary font-medium"> Next.js</span>, and 
                    <span className="text-primary font-medium"> Node.js</span>, with a strong focus 
                    on user experience and clean code architecture. I believe in continuous learning 
                    and staying at the forefront of web technologies.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">My Journey</h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                  
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="relative pl-16 pb-6 last:pb-0"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 w-12 h-12 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div className="bg-card/50 border border-border/50 rounded-xl p-4 hover:bg-card hover:border-border transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                        <p className="text-sm text-muted-foreground/80 mt-1">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}

