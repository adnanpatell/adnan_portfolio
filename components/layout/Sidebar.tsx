"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Calendar
} from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "adnanpatel229@gmail.com" },
  { icon: MapPin, label: "Edmonton, AB, Canada" },
  { icon: Phone, label: "+1 (780) 267-7551" },
]

export function Sidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hidden lg:flex flex-col w-[280px] xl:w-[320px] shrink-0 sticky top-8"
    >
      <div className="rounded-2xl border bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-shadow">
        <div className="flex flex-col items-center p-6 pt-8">
          {/* Avatar */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: [0, -2, 2, -2, 0] }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Avatar className="size-32 ring-4 ring-primary/30 ring-offset-2 ring-offset-background shadow-xl shadow-primary/20">
              <AvatarImage src="/ln__profimg.jpeg" alt="Mohammed Adnan Patel" />
              <AvatarFallback className="text-2xl font-semibold bg-primary text-primary-foreground">MA</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Name & Title */}
          <div className="mt-5 text-center">
            <h1 className="text-xl font-semibold text-foreground">
              Mohammed Adnan
            </h1>
            <p className="text-lg text-foreground">Patel</p>
            <p className="mt-2 text-sm font-medium text-primary">
              Intermediate Software Engineer
            </p>
          </div>
          
          {/* Social Icons - Individual styling for brand colors */}
          <div className="mt-5 flex items-center gap-2">
            {/* GitHub */}
            <motion.a
              href="https://github.com/adnanpatell"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-200 hover:bg-[#24292e] hover:text-white"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/mohammed-adnan-patel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-200 hover:bg-[#0A66C2] hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:adnanpatel229@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-200 hover:bg-white hover:text-red-500 hover:ring-1 hover:ring-red-500"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </motion.a>
          </div>
        </div>
        
        <Separator className="" />
        
        {/* Contact Info */}
        <div className="p-6 space-y-3">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-sm">
              <item.icon className="size-4 text-muted-foreground shrink-0" />
              <span className="text-muted-foreground truncate">{item.label}</span>
            </div>
          ))}
        </div>
        
        <Separator className="" />
        
        {/* Download CV Button */}
        <div className="p-6">
          <Button
            asChild
            className="w-full gap-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <a href="/cv.pdf" download="Mohammed_Adnan_Patel_Resume.pdf">
              <Download className="size-4" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </motion.aside>
  )
}