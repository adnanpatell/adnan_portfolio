"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code, Server, Database, Cloud } from "lucide-react"

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

const education = [
  {
    institution: "Gujarat Technological University",
    degree: "Bachelor of Engineering in Computer Science",
    period: "Sep 2020 - May 2024",
    location: "Gujarat, India",
    gpa: "GPA: 3.54/4.0 ",
  },
]

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive, performant UIs with React, Next.js, and modern CSS frameworks.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Creating scalable APIs and services with Node.js, Express, and real-time systems.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient schemas with MongoDB, PostgreSQL, and MySQL for optimal performance.",
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    description: "Containerizing apps with Docker and deploying to cloud platforms with CI/CD pipelines.",
  },
]

export function About() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Introduction */}
      <motion.section variants={itemVariants}>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I&apos;m a <span className="text-foreground font-medium">Full Stack Architect</span> specializing in Next.js, PostgreSQL, and AWS.
          I build scalable multi-tenant systems, real-time processing applications, and government-grade platforms.
          Based in <span className="text-foreground font-medium">Edmonton, AB, Canada</span>, I&apos;ve architected solutions serving thousands of users
          across healthcare, wellness, and eCommerce domains.
        </p>
      </motion.section>

      {/* Education */}
      <motion.section variants={itemVariants} className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 6, scale: 1.02 }}
              className="group rounded-2xl border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-5 transition-all hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">
                      {edu.institution}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.degree}
                    {edu.gpa && (
                      <span className="ml-2 text-primary font-medium">
                        {edu.gpa}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {edu.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What I Do */}
      <motion.section variants={itemVariants} className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          What I Do
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              className="group rounded-2xl border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-5 transition-all hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-md group-hover:shadow-lg group-hover:shadow-primary/30">
                <service.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
