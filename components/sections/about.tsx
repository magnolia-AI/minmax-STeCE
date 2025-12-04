'use client'

import { MotionWrapper } from '@/components/ui/motion-wrapper'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-background/50 to-transparent pointer-events-none" />

      <MotionWrapper>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto relative z-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-b-2 border-primary/20 pb-2 inline-block">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I have been working as a developer for over 5 years, specializing in modern web technologies. 
                My journey began with a curiosity for how things work on the internet, which quickly turned into a passion for coding.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading about space exploration, or experimenting with new cooking recipes.
                I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-background shadow-2xl bg-muted rotate-3"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
               <div className="w-full h-full flex items-center justify-center bg-secondary text-secondary-foreground/50">
                  <span className="text-6xl animate-pulse">👋</span>
               </div>
            </motion.div>
          </div>
        </div>
      </MotionWrapper>
    </section>
  )
}

