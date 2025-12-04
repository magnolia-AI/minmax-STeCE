'use client'

import { MotionWrapper } from '@/components/ui/motion-wrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center container mx-auto px-4 py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce-subtle"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-bounce-subtle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-secondary/50 rounded-full animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce-subtle" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Enhanced gradient background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 via-transparent to-transparent pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gradient-to-r from-accent/5 via-transparent to-transparent pointer-events-none blur-3xl" />

      <MotionWrapper>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto relative z-10">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              About Me
            </span>
            <motion.span
              className="ml-2 inline-block"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              🚀
            </motion.span>
          </motion.h2>
            <div className="space-y-4 text-foreground text-lg leading-relaxed bg-background/95 backdrop-blur-sm p-6 rounded-xl border border-border/20 shadow-sm">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I have been working as a developer for over 5 years, specializing in modern web technologies.
                My journey began with a curiosity for how things work on the internet, which quickly turned into a passion for coding.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                When I'm not coding, you can find me hiking, reading about space exploration, or experimenting with new cooking recipes.
                I believe in continuous learning and staying updated with the latest industry trends.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">5+ Years Experience</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors">Modern Tech</span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/30 transition-colors">Continuous Learning</span>
                <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm font-medium hover:from-primary/20 hover:to-accent/20 transition-all">Full Stack Dev</span>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex-1 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-background shadow-2xl bg-muted rotate-3"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
               <Image
                 src="/images/high-contrast-developer-portrait.jpg"
                 alt="Software developer in scenic landscape"
                 width={320}
                 height={320}
                 className="w-full h-full object-cover rounded-2xl"
               />
            </motion.div>
          </div>
        </div>
      </MotionWrapper>
    </section>
  )
}











