'use client'

import { ContactForm } from '@/components/contact-form'
import { MotionWrapper } from '@/components/ui/motion-wrapper'

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
      <MotionWrapper>
        <div className="max-w-xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>
          <div className="bg-card p-6 md:p-8 rounded-xl border shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <ContactForm />
          </div>
        </div>
      </MotionWrapper>
    </section>
  )
}

