"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NetworkBackground from "@/components/NetworkBackground";
import { Terminal, Shield, Cpu, Database, Code, Server } from "lucide-react";

const MatrixRain = ({ children }) => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-green-500 text-xs font-mono"
          style={{
            left: `${i * 10}%`,
            animation: `matrixRain ${1 + Math.random() * 2}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j}>{"01"[Math.floor(Math.random() * 2)]}</div>
          ))}
        </div>
      ))}
    </div>
    {children}
  </div>
);

const SuperComputerDisplay = ({ title, content }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black/80 border border-green-500/30 rounded-lg p-4"
    >
      <div className="flex items-center justify-between mb-2 border-b border-green-500/20 pb-2">
        <div className="flex items-center space-x-2">
          <Server className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-mono text-sm">{title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-400 font-mono text-xs">
            {isLoading ? "LOADING..." : "SYSTEM READY"}
          </span>
        </div>
      </div>
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-300 font-mono"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-black/70 border border-green-500/20 rounded-lg p-4 backdrop-blur-sm"
  >
    <div className="flex items-center space-x-2 mb-2">
      <project.icon className="w-5 h-5 text-green-400" />
      <h3 className="text-green-400 font-mono">{project.title}</h3>
    </div>
    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, index) => (
        <span
          key={index}
          className="text-xs px-2 py-1 bg-green-500/10 rounded-full text-green-400"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      icon: Shield,
      title: "Secure Payment Gateway",
      description: "Engineered a highly secure payment processing system",
      tech: ["Node.js", "AWS", "Encryption"],
    },
    {
      icon: Database,
      title: "Data Pipeline Architecture",
      description: "Built scalable data processing pipeline",
      tech: ["Python", "Apache Kafka", "MongoDB"],
    },
    {
      icon: Code,
      title: "AI-Powered Analytics",
      description: "Developed machine learning models for data analysis",
      tech: ["TensorFlow", "Python", "React"],
    },
  ];

  return (
    <>
      <NetworkBackground />
      <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <MatrixRain>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8 py-12"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-6xl font-bold font-mono"
              >
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
                  YASIR RAHMAN
                </span>
              </motion.h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SuperComputerDisplay
                  title="SYSTEM STATUS"
                  content={
                    <div className="space-y-2">
                      <p>{">"} Role: Senior Software Engineer</p>
                      <p>{">"} Status: Active Development</p>
                      <p>{">"} Location: Bangladesh</p>
                      <p>{">"} Systems: Operational</p>
                    </div>
                  }
                />
                <SuperComputerDisplay
                  title="MISSION OBJECTIVES"
                  content={
                    <div className="space-y-2">
                      <p>{">"} Build Scalable Systems</p>
                      <p>{">"} Optimize Performance</p>
                      <p>{">"} Lead Tech Innovation</p>
                      <p>{">"} Mentor Future Engineers</p>
                    </div>
                  }
                />
              </div>
            </motion.section>
          </MatrixRain>

          {/* Skills Dashboard */}
          <section className="space-y-6">
            <h2 className="text-2xl font-mono text-green-400 text-center mb-8">
              {"<"} Technical Capabilities {">"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Coding Languages",
                  skills: ["C", "C++", "Python", "Javascript", "Typescript"],
                },
                {
                  title: "Core Systems",
                  skills: [
                    "React",
                    "Node.js",
                    "Python",
                    "TypeScript",
                    "GraphQL",
                  ],
                },
                {
                  title: "Infrastructure",
                  skills: [
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "MongoDB",
                    "PostgreSQL",
                  ],
                },
                {
                  title: "Architecture",
                  skills: [
                    "System Design",
                    "Microservices",
                    "API Design",
                    "Security",
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-black/80 border border-green-500/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-mono text-green-400 mb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 + index * 0.2 }}
                      >
                        <span className="text-green-500">→</span>
                        <span className="text-gray-300 font-mono">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects Showcase */}
          <section className="space-y-6">
            <h2 className="text-2xl font-mono text-green-400 text-center mb-8">
              {"<"} Recent Deployments {">"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-center space-y-8 py-12"
          >
            <SuperComputerDisplay
              title="CONTACT PROTOCOLS"
              content={
                <div className="space-y-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/Resume_of_Yasir_Rahman.pdf"
                    className="block px-6 py-3 bg-green-500 text-black rounded-lg font-mono hover:bg-green-400 transition-colors mb-4"
                  >
                    {">"} ACCESS CREDENTIALS [CV]
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:chyyasir2000@gmail.com"
                    className="block px-6 py-3 border border-green-500 text-green-400 rounded-lg font-mono hover:bg-green-500/10 transition-colors"
                  >
                    {">"} INITIALIZE COMMUNICATION
                  </motion.a>
                </div>
              }
            />
          </motion.section>
        </div>
      </main>
    </>
  );
}
