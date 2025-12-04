'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Heart, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  ArrowUp,
  Coffee
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = {
  navigation: [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ],
  social: [
    { href: '#', icon: Github, label: 'GitHub' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: 'mailto:hello@alexchen.dev', icon: Mail, label: 'Email' },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-border bg-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-lg text-primary-foreground">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xl">Alex Chen</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Full Stack Developer passionate about creating beautiful, 
              functional, and user-friendly digital experiences.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-muted rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>San Francisco, CA</li>
              <li>
                <a href="mailto:hello@alexchen.dev" className="hover:text-primary transition-colors">
                  hello@alexchen.dev
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Alex Chen. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline animate-pulse" /> 
            and 
            <Coffee className="w-4 h-4 text-amber-600 inline" />
          </p>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  )
}

