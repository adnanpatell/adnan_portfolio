"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

const techStack = {
  Languages: [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  ],
  Frontend: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "shadcn/ui", icon: "/icons/shadcn.svg" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ],
  Backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Prisma ORM", icon: "https://cdn.simpleicons.org/prisma/2D3748", darkIcon: "https://cdn.simpleicons.org/prisma/white" },
    { name: "REST APIs", icon: "/icons/rest-api.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
    { name: "Webhooks", icon: "/icons/webhooks.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  ],
  Databases: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  ],
  "Cloud & Services": [
    { name: "AWS Amplify", icon: "/icons/amplify.png" },
    { name: "AWS S3", icon: "/icons/s3.svg" },
    { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Stripe", icon: "/icons/stripe.svg" },
    { name: "Clerk", icon: "/icons/clerk.svg" },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ],
  "AI Tools": [
    { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/191919", darkIcon: "https://cdn.simpleicons.org/anthropic/white" },
    { name: "ChatGPT", icon: "/icons/openai.svg" },
    { name: "v0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Cursor", icon: "/icons/cursor.svg" },
    { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/000000", darkIcon: "https://cdn.simpleicons.org/githubcopilot/white" },
  ],
}

export function TechStack() {
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
        Tech Stack
      </motion.h2>
      
      <div className="space-y-8">
        {Object.entries(techStack).map(([category, technologies]) => (
          <motion.section key={category} variants={itemVariants} className="space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
              {category}
            </h3>
            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap gap-3"
            >
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                    rotate: [0, -2, 2, 0],
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="group relative flex flex-col items-center gap-2 rounded-2xl border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-4 transition-all hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50"
                >
                  <div className="relative size-10 transition-transform group-hover:scale-110">
                    {/* Light mode icon */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      className={`size-full object-contain ${'darkIcon' in tech ? 'dark:hidden' : 'dark:brightness-90'}`}
                      loading="lazy"
                    />
                    {/* Dark mode icon (if different) */}
                    {'darkIcon' in tech && tech.darkIcon && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={tech.darkIcon}
                        alt={tech.name}
                        className="size-full object-contain hidden dark:block"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  )
}