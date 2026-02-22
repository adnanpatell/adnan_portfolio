"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const experiences = [
  {
    company: "BookaTherapy",
    role: "Intermediate Software Engineer",
    period: "Apr 2025 - Present",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "AWS S3", "AWS Amplify"],
    highlights: [
      "Building an AI-powered wellness marketplace connecting therapists, clients, and space owners across North America — multi-role platform serving three distinct user personas on a shared data model",
      "Architected a multi-tenant relational data model in PostgreSQL using Prisma ORM, designing schema relations that cleanly separated client, therapist, and space-owner entities while maintaining referential integrity under concurrent booking operations",
      "Engineered a secure, scalable file storage system on AWS S3 with fine-grained bucket policies and pre-signed URL workflows — bringing the platform into compliance with data privacy requirements",
      "Orchestrated the full deployment pipeline on AWS Amplify with environment-specific build configurations for staging and production, enabling zero-downtime releases and a repeatable, auditable release process",
      "Spearheaded resolution of complex asynchronous state management issues in React and Next.js, refactoring component trees to eliminate redundant re-renders and race conditions in booking flows",
    ],
  },
  {
    company: "Vaani Foundation | MedConnect Gujarat",
    role: "Software Engineer",
    period: "Jan 2024 - Apr 2025",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "Express.js", "Docker", "Role-Based Access Control"],
    highlights: [
      "Built a government-grade public health digitization platform deployed across 1,400+ Primary Health Centers (PHCs) throughout Gujarat, actively used by 7,000+ healthcare workers",
      "Architected a multi-tier role-based access system serving PHC workers, District Health Officers, the Chief Medical Officer, and the Health Minister — each with scoped dashboards ensuring sensitive state-wide health data reached the right authority level",
      "Engineered a real-time disease monitoring engine that aggregated reports from 1,400+ PHCs, identified geographic clustering of communicable diseases, and triggered early alerts before outbreaks escalated",
      "Spearheaded full digitization of PHC reporting workflows, replacing paper-based submissions with a structured digital system — eliminating state-wide reporting lag",
      "Orchestrated executive monitoring dashboards consumed directly by the Health Minister with filtering by district, disease type, and PHC performance",
    ],
  },
  {
    company: "HubX | US-Based eCommerce Client",
    role: "Software Engineering Intern",
    period: "Sep 2023 - Jan 2024",
    tech: ["React", "Node.js", "REST APIs", "State Management"],
    highlights: [
      "Engineered a bulk ordering system handling variable quantity tiers, dynamic pricing logic, and cart state management across large product selections for wholesale buyers",
      "Architected a product customization engine allowing end users to configure product attributes in real time before adding to cart, managing complex interdependent state across a React-based interface",
      "Spearheaded direct client communication with US-based stakeholders, translating ambiguous briefs into precise technical specifications",
    ],
  },
  {
    company: "Expert IT World",
    role: "Frontend Developer Intern",
    period: "Jan 2023 - Sep 2023",
    tech: ["React", "JavaScript", "Performance Optimization", "Component Libraries"],
    highlights: [
      "Engineered a reusable React component library with clearly defined prop interfaces and co-located documentation, reducing duplicated UI code across projects and cutting average onboarding time for new developers joining active codebases",
      "Architected targeted performance optimizations - including code splitting, lazy loading, and memoization of expensive renders - that produced measurable improvements in Core Web Vitals scores and cut initial page load times on key user-facing routes",
      "Spearheaded the adoption of consistent documentation standards across the frontend codebase, creating component usage guides that reduced cross-team integration errors and accelerated the pace of parallel feature development",
    ],
  },
]

export function Experience() {
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
        Experience
      </motion.h2>
      
      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-8"
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute left-0 top-2 size-[15px] rounded-full border-[3px] border-primary bg-background shadow-lg shadow-primary/30"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />

            <motion.div
              whileHover={{ x: 6, scale: 1.01 }}
              className="rounded-2xl border-l-4 border-l-primary border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-5 transition-all hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {exp.role}
                    {exp.roleNote && (
                      <span className="text-muted-foreground font-normal">
                        {" "}{exp.roleNote}
                      </span>
                    )}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              {/* Tech Stack */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-full text-xs font-normal hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              {/* Highlights */}
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li 
                    key={hIndex}
                    className="relative pl-4 text-sm text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-muted-foreground/50"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
