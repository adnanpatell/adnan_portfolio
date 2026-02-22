"use client"

import { motion } from "framer-motion"
import { User, Briefcase, Code2, FolderKanban, Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

type Page = "about" | "experience" | "stack" | "projects" | "contact"

interface NavigationProps {
  currentPage: Page
  onPageChange: (page: Page) => void
}

const navItems: { id: Page; icon: typeof User; label: string }[] = [
  { id: "about", icon: User, label: "About" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "stack", icon: Code2, label: "Tech Stack" },
  { id: "projects", icon: FolderKanban, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
]

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const { theme, setTheme } = useTheme()
  
  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      className="hidden lg:flex flex-col items-center w-16 shrink-0 sticky top-8"
    >
      <div className="flex flex-col items-center gap-2 rounded-2xl border bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl p-3 shadow-2xl shadow-primary/5">
        <TooltipProvider delayDuration={0}>
          {navItems.map((item) => {
            const isActive = currentPage === item.id
            return (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  <motion.button
                    onClick={() => onPageChange(item.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "relative flex size-12 items-center justify-center rounded-xl transition-colors",
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                    aria-label={item.label}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <item.icon className="size-5" />
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl bg-primary -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="left" sideOffset={12}>
                  {item.label}
                </TooltipContent>
              </Tooltip>
            )
          })}
          
          {/* Separator */}
          <div className="my-2 h-px w-8 bg-border" />
          
          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex size-12 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Toggle theme"
              >
                <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={12}>
              Toggle theme
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.nav>
  )
}

// Mobile Navigation
export function MobileNavigation({ currentPage, onPageChange }: NavigationProps) {
  const { theme, setTheme } = useTheme()
  
  return (
    <motion.nav
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-4 left-4 right-4 z-50 lg:hidden"
    >
      <div className="flex items-center justify-around rounded-2xl border bg-gradient-to-r from-card/95 to-card/85 backdrop-blur-xl p-2 shadow-2xl shadow-primary/10">
        {navItems.map((item) => {
          const isActive = currentPage === item.id
          return (
            <motion.button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative flex size-12 items-center justify-center rounded-xl transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground"
              )}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon className="size-5" />
            </motion.button>
          )
        })}
        
        {/* Theme Toggle */}
        <motion.button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          whileTap={{ scale: 0.95 }}
          className="flex size-12 items-center justify-center rounded-xl text-muted-foreground transition-colors"
          aria-label="Toggle theme"
        >
          <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </motion.button>
      </div>
    </motion.nav>
  )
}
