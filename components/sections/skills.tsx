'use client'

import { Badge } from '@/components/ui/badge'
import { motion, Variants } from 'framer-motion'
import { MotionWrapper } from '@/components/ui/motion-wrapper'

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 
  'Tailwind CSS', 'PostgreSQL', 'GraphQL', 'Docker',
  'AWS', 'Git', 'Figma', 'CI/CD'
]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
}

export function Skills() {
  return (
    <section id="skills" className="bg-muted/50 py-16 md:py-24 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
       
       <div className="container mx-auto px-4 text-center">
         <MotionWrapper>
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Skills & Technologies</h2>
         </MotionWrapper>
         
         <motion.div 
           variants={container}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-50px" }}
           className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
         >
           {skills.map((skill) => (
             <motion.div key={skill} variants={item}>
               <Badge 
                 variant="secondary" 
                 className="text-lg px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all cursor-default hover:scale-110 hover:rotate-2 shadow-sm"
               >
                 {skill}
               </Badge>
             </motion.div>
           ))}
         </motion.div>
       </div>
    </section>
  )
}

