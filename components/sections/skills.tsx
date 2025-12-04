'use client'

import { Badge } from '@/components/ui/badge'
import { motion, Variants } from 'framer-motion'
import { MotionWrapper } from '@/components/ui/motion-wrapper'
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Palette, 
  Wrench,
  Zap,
  TrendingUp
} from 'lucide-react'

interface Skill {
  name: string
  level: number
  icon?: string
}

interface SkillCategory {
  title: string
  icon: React.ElementType
  color: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Next.js', level: 92, icon: '▲' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨' },
      { name: 'Framer Motion', level: 85, icon: '✨' },
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 90, icon: '💚' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'GraphQL', level: 85, icon: '◈' },
      { name: 'REST APIs', level: 92, icon: '🔌' },
      { name: 'Express', level: 88, icon: '🚂' },
    ]
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PostgreSQL', level: 88, icon: '🐘' },
      { name: 'MongoDB', level: 85, icon: '🍃' },
      { name: 'Redis', level: 78, icon: '⚡' },
      { name: 'Prisma', level: 90, icon: '💎' },
      { name: 'Drizzle', level: 85, icon: '💧' },
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'AWS', level: 82, icon: '☁️' },
      { name: 'Docker', level: 85, icon: '🐳' },
      { name: 'CI/CD', level: 80, icon: '🔄' },
      { name: 'Vercel', level: 92, icon: '▲' },
      { name: 'Git', level: 95, icon: '📦' },
    ]
  },
]

const tools = [
  'VS Code', 'Figma', 'Postman', 'GitHub', 'Linear', 
  'Notion', 'Slack', 'Chrome DevTools', 'Terminal', 'Vim'
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
}

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground flex items-center gap-2">
          <span>{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = category.icon
  
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      <div className="relative bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
        </div>
        
        {/* Skills */}
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar 
              key={skill.name} 
              skill={skill} 
              delay={index * 0.1 + skillIndex * 0.05}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
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
              <Zap className="w-4 h-4 inline mr-2" />
              Technical Expertise
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I work with modern technologies and frameworks to build scalable, 
              performant applications that deliver exceptional user experiences.
            </p>
          </motion.div>

          {/* Skill Cards Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} index={index} />
            ))}
          </motion.div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Wrench className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground">Tools & Software</h3>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
            >
              {tools.map((tool) => (
                <motion.div key={tool} variants={item}>
                  <Badge 
                    variant="secondary" 
                    className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all cursor-default hover:scale-110 shadow-sm"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-card border border-border rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Always Learning & Growing</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Technologies Mastered', value: '25+' },
                { label: 'Certifications Earned', value: '8' },
                { label: 'Open Source Contributions', value: '100+' },
                { label: 'Courses Completed', value: '50+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </MotionWrapper>
      </div>
    </section>
  )
}

