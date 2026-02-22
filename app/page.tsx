"use client";

import React, { useEffect } from "react";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Background } from "@/components/layout/Background";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navigation, MobileNavigation } from "@/components/layout/Navigation";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/sonner";

type Page = "about" | "experience" | "stack" | "projects" | "contact";

const pageComponents: Record<Page, React.ComponentType> = {
  about: About,
  experience: Experience,
  stack: TechStack,
  projects: Projects,
  contact: Contact,
};

const pageTitles: Record<Page, string> = {
  about: "About Me",
  experience: "Experience",
  stack: "Tech Stack",
  projects: "Projects",
  contact: "Contact",
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>("about");

  const CurrentPageComponent = pageComponents[currentPage];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      <Background />

      <div className="relative min-h-screen">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Main Layout */}
        <div className="flex min-h-screen items-start justify-center gap-6 p-4 lg:gap-8 lg:p-8">
          {/* Left Sidebar - fixed height, no scroll */}
          <Sidebar />

          {/* Main Content - scrollable */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl flex-1 pb-24 lg:pb-8"
          >
            <div className="rounded-2xl border bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl p-6 lg:p-8 shadow-2xl shadow-primary/5 min-h-full">
              {/* Page Title */}
              <motion.h1
                key={currentPage + "-title"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 text-2xl font-semibold text-foreground"
              >
                {pageTitles[currentPage]}
              </motion.h1>

              {/* Page Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CurrentPageComponent />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.main>

          {/* Right Navigation - fixed height, no scroll */}
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      <Toaster position="bottom-center" />
    </>
  );
}
