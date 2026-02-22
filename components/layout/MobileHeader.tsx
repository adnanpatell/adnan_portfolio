"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Menu
} from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/adnanpatell", label: "GitHub", hoverClass: "hover:text-[#333] dark:hover:text-white" },
  { icon: Linkedin, href: "https://linkedin.com/in/mohammed-adnan-patel", label: "LinkedIn", hoverClass: "hover:text-[#0A66C2]" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", hoverClass: "hover:text-black dark:hover:text-white" },
  { icon: Mail, href: "mailto:adnanpatel229@gmail.com", label: "Email", hoverClass: "hover:text-primary" },
]

const contactInfo = [
  { icon: Mail, label: "adnanpatel229@gmail.com" },
  { icon: MapPin, label: "Edmonton, AB, Canada" },
]

export function MobileHeader() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 lg:hidden border-b bg-gradient-to-r from-background/90 to-background/80 backdrop-blur-xl shadow-lg shadow-primary/5"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Avatar className="size-10 ring-2 ring-primary/20">
            <AvatarImage src="/ln__profimg.jpeg" alt="Mohammed Adnan Patel" />
            <AvatarFallback className="text-sm font-semibold bg-primary text-primary-foreground">MA</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-sm font-semibold text-foreground">Mohammed Adnan Patel</h1>
            <p className="text-xs text-primary">Full Stack Architect</p>
          </div>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <div className="max-h-[85vh] overflow-y-auto px-4 py-6">
              <div className="flex flex-col items-center pt-4">
                <Avatar className="size-24 max-w-full ring-4 ring-primary/20 ring-offset-2 ring-offset-background">
                  <AvatarImage src="/ln__profimg.jpeg" alt="Mohammed Adnan Patel" />
                  <AvatarFallback className="text-xl font-semibold bg-primary text-primary-foreground">MA</AvatarFallback>
                </Avatar>

                <div className="mt-4 w-full text-center">
                  <h2 className="text-lg font-semibold text-foreground break-words">
                    Mohammed Adnan Patel
                  </h2>
                  <p className="text-sm font-medium text-primary">
                    Full Stack Architect
                  </p>
                </div>
                
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors duration-200 hover:bg-secondary/80 ${social.hoverClass}`}
                      aria-label={social.label}
                    >
                      <social.icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <item.icon className="size-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground break-words">{item.label}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <Button 
                asChild 
                className="w-full gap-2 rounded-xl"
              >
                <a href="/cv.pdf" download>
                  <Download className="size-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
