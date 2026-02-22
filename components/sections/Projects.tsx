"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Sparkles } from "lucide-react"

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

const projects = [
  {
    title: "BookaTherapy",
    category: "AI-Powered Wellness Marketplace",
    featured: true,
    description: "Multi-tenant wellness platform connecting therapists, clients, and space owners across North America. Architected with PostgreSQL/Prisma ORM, AWS S3 file storage, and zero-downtime CI/CD on AWS Amplify.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "AWS S3", "AWS Amplify"],
    image: "/bookatherapy.svg",
    liveUrl: "https://bookatherapy.com/",
  },
  {
    title: "MedConnect Gujarat",
    category: "Government-Grade Health Platform",
    description: "Public health digitization platform deployed across 1,400+ PHCs throughout Gujarat, actively used by 7,000+ healthcare workers. Features real-time disease monitoring and multi-tier role-based access.",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "Express.js", "Docker"],
    image: "/medconnect-ss.png",
    liveUrl: "https://www.medconnectgujarat.com/",
    githubUrl: "https://github.com/Sanan13/Vaani-Frontend",
  },
  {
    title: "Nike Landing Page",
    category: "Frontend Project",
    description: "Responsive, pixel-perfect product page with smooth animations and optimized performance.",
    tech: ["React", "Tailwind CSS"],
    image: "/nike-ss.png",
    liveUrl: "https://nike-clone-gamma.vercel.app/",

  },
  {
    title: "Narmada Park Website",
    category: "E-Commerce",
    description: "Tourism website with integrated online ticket booking system and Stripe payment gateway.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    image: "/narmada-ss.png",
    liveUrl: "https://narmada-garden.vercel.app/",
  },
]

export function Projects() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.h2 
        variants={itemVariants}
        className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
      >
        Projects
      </motion.h2>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group overflow-hidden rounded-2xl border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm transition-all hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50"
          >
            {/* Image */}
            <div className={`relative aspect-video overflow-hidden bg-gradient-to-br from-muted to-muted/50 ${project.title === "BookaTherapy" ? "flex items-center justify-center p-8" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className={`transition-transform duration-500 group-hover:scale-105 ${
                  project.title === "BookaTherapy"
                    ? "h-24 w-auto object-contain"
                    : "size-full object-cover"
                }`}
                loading="lazy"
              />
              {/* {project.featured && (
                <div className="absolute left-3 top-3">
                  <Badge className="gap-1 bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    <Sparkles className="size-3" />
                    Featured
                  </Badge>
                </div>
              )} */}
            </div>
            
            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary">
                    {project.category}
                  </p>
                </div>
              </div>
              
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-full text-xs font-normal hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              {/* Actions */}
              <div className="mt-4 flex gap-2">
                <Button
                  asChild
                  size="sm"
                  className="gap-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-3.5" />
                    Live Demo
                  </a>
                </Button>
                {project.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-1.5 rounded-full bg-transparent hover:bg-primary/10"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="size-3.5" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}
