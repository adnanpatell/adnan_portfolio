"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "adnanpatel229@gmail.com",
    href: "mailto:adnanpatel229@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Edmonton, AB, Canada",
    href: "https://maps.google.com/?q=Edmonton,AB,Canada",
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as possible.",
    })
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Get In Touch
        </h2>
        <p className="mt-2 text-muted-foreground">
          Let&apos;s work together! Feel free to reach out for collaborations, 
          opportunities, or just to say hello.
        </p>
      </motion.div>
      
      {/* Map */}
      <motion.div
        variants={itemVariants}
        className="overflow-hidden rounded-2xl border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321344.0738773054!2d-113.64728!3d53.5461245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sEdmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1703584891234!5m2!1sen!2sus"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        />
      </motion.div>
      
      {/* Contact Form */}
      <motion.form
        variants={itemVariants}
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-5 shadow-lg hover:shadow-xl transition-shadow"
      >
        <h3 className="font-semibold text-foreground">Send a Message</h3>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input 
              id="name" 
              name="name"
              placeholder="John Doe" 
              required 
              disabled={isSubmitting}
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder="john@example.com" 
              required 
              disabled={isSubmitting}
              className="bg-background"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input 
            id="subject" 
            name="subject"
            placeholder="What's this about?" 
            required 
            disabled={isSubmitting}
            className="bg-background"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Your Message</Label>
          <Textarea 
            id="message" 
            name="message"
            placeholder="Tell me about your project or just say hi..." 
            rows={5}
            required 
            disabled={isSubmitting}
            className="bg-background resize-none"
          />
        </div>
        
        <Button
          type="submit"
          className="w-full gap-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </>
          ) : isSubmitted ? (
            <>
              <CheckCircle2 className="size-4" />
              Message Sent!
            </>
          ) : (
            <>
              <Send className="size-4" />
              Send Message
            </>
          )}
        </Button>
      </motion.form>
      
      {/* Direct Contact */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
          Or Reach Out Directly
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === "Location" ? "_blank" : undefined}
              rel={method.label === "Location" ? "noopener noreferrer" : undefined}
              whileHover={{ y: -4, scale: 1.03 }}
              className="group flex flex-col items-center gap-2 rounded-2xl border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-4 text-center transition-all hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-md group-hover:shadow-lg group-hover:shadow-primary/30">
                <method.icon className="size-5" />
              </div>
              <span className="text-xs text-muted-foreground">{method.label}</span>
              <span className="text-sm font-medium text-foreground">{method.value}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
