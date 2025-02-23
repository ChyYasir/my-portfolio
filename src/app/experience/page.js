"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NetworkBackground from "@/components/NetworkBackground";
import {
  Terminal,
  Building2,
  Calendar,
  ChevronDown,
  Code,
  AlertTriangle,
  CheckCircle2,
  Server,
  MapPin,
  Cpu,
  Users,
  Brain,
  Database,
  Pen,
  Sparkles,
} from "lucide-react";
import MatrixRain from "@/components/MatrixRain";

const GlowingBorder = ({ children, isActive }) => (
  <div className="relative group">
    <div
      className={`absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg blur-lg transition-opacity ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
      }`}
    />
    {children}
  </div>
);

const ExperienceNode = ({ experience, isActive, onClick }) => {
  const { company, duration, role, location } = experience;

  return (
    <div className="relative">
      <GlowingBorder isActive={isActive}>
        <div className="bg-black/90 border border-green-500/30 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start sm:items-center">
            {/* Company Info - Left Side */}
            <div className="col-span-full sm:col-span-7">
              <div className="flex items-center space-x-4 mb-3 sm:mb-4">
                <div className="bg-purple-400/10 p-2 rounded-lg">
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-mono text-purple-400 leading-tight">
                  {company}
                </h3>
              </div>
              <p className="text-lg sm:text-xl font-mono text-gray-300 mb-2">
                {role}
              </p>
            </div>

            {/* Status & Details - Right Side */}
            <div className="col-span-full sm:col-span-5 flex flex-col space-y-3 sm:text-right">
              {/* Expand/Collapse Button */}
              <button
                onClick={onClick}
                className="flex items-center space-x-2 text-green-400/60 hover:text-green-400 transition-colors bg-green-500/5 px-3 py-1 rounded-full border border-green-500/20 w-fit sm:ml-auto"
              >
                <span className="text-xs sm:text-sm font-mono">
                  {isActive ? "Click to Minimize" : "Click to Expand"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isActive ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Duration with enhanced visibility */}
              <div className="flex items-center sm:justify-end space-x-2 bg-green-500/10 rounded-full px-3 py-1.5 w-fit sm:ml-auto">
                <Calendar className="w-4 h-4 text-green-400" />
                <span className="text-sm sm:text-base font-mono text-green-400">
                  {duration}
                </span>
              </div>

              {/* Location with enhanced visibility */}
              <div className="flex items-center sm:justify-end space-x-2 bg-purple-500/10 rounded-full px-3 py-1.5 w-fit sm:ml-auto">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm sm:text-base font-mono text-purple-400">
                  {location}
                </span>
              </div>
            </div>
          </div>

          {/* <button
            onClick={onClick}
            className="inline-flex items-center space-x-2 text-green-400/60 text-sm mt-4 cursor-pointer hover:text-green-400 transition-colors"
          >
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                isActive ? "rotate-180" : ""
              }`}
            />
            <span>{isActive ? "Click to minimize" : "Click for details"}</span>
          </button> */}
        </div>
      </GlowingBorder>
    </div>
  );
};

const HighlightBox = ({ children }) => (
  <div className="bg-green-500/10 border border-green-500/30 rounded-md p-3 my-2">
    {children}
  </div>
);

const ChallengeCard = ({ challenge, solution }) => (
  <div className="bg-black/60 border border-green-500/20 rounded-lg p-6 space-y-4">
    <div className="flex items-start space-x-3">
      <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
      <div>
        <h6 className="text-yellow-500 font-mono text-lg mb-2">Challenge:</h6>
        <HighlightBox>
          <p className="text-gray-300 text-lg">{challenge}</p>
        </HighlightBox>
      </div>
    </div>
    <div className="flex items-start space-x-3">
      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
      <div>
        <h6 className="text-green-500 font-mono text-lg mb-2">Solution:</h6>
        <HighlightBox>
          <p className="text-gray-300 text-lg">{solution}</p>
        </HighlightBox>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const renderTools = (tools) => {
    return tools.map((tool, idx) => (
      <span key={idx} className="inline-flex items-center space-x-1">
        <Code className="w-3 h-3 text-cyan-400" />
        <span>{tool}</span>
      </span>
    ));
  };

  return (
    <div className="relative">
      <GlowingBorder isActive={isExpanded}>
        <div className="bg-black/80 border border-green-500/20 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
          {/* Header Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Project Title */}
              <div className="flex items-center space-x-3">
                <div className="bg-cyan-400/10 p-2 rounded-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <h4 className="text-xl sm:text-2xl font-mono text-cyan-400">
                  {project.title}
                </h4>
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-2 text-green-400/60 hover:text-green-400 transition-colors bg-green-500/5 px-3 py-1 rounded-full border border-green-500/20 w-fit"
              >
                <span className="text-xs sm:text-sm font-mono">
                  {isExpanded ? "Click to Minimize" : "Cick to Expand"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Technologies Pills */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs sm:text-sm px-2 py-1 bg-green-500/10 rounded-full text-green-400 font-mono border border-green-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-6 space-y-6"
              >
                {/* Project Overview */}
                <div className="bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-lg p-4 border border-green-500/10">
                  <h5 className="text-base sm:text-lg font-mono text-green-400 mb-2">
                    Project Overview
                  </h5>
                  <p className="text-sm sm:text-base text-gray-300">
                    {project.overview}
                  </p>
                </div>

                {/* Contributions and Collaboration */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Key Contributions */}
                  <div className="bg-gradient-to-r from-purple-500/5 to-green-500/5 rounded-lg p-4 border border-green-500/10">
                    <h5 className="text-base sm:text-lg font-mono text-green-400 mb-3">
                      Key Contributions
                    </h5>
                    <ul className="space-y-3">
                      {project.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Code className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                          <span className="text-sm sm:text-base text-gray-300">
                            {contribution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Team Collaboration */}
                  <div className="bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-lg p-4 border border-green-500/10">
                    <h5 className="text-base sm:text-lg font-mono text-green-400 mb-3">
                      Team & Tools
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Users className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                        <p className="text-sm sm:text-base text-gray-300">
                          {project.collaboration}
                        </p>
                      </div>
                      <div className="border-t border-blue-500/20 pt-3">
                        <h6 className="text-sm font-mono text-blue-400 mb-2">
                          Tools & Platforms
                        </h6>
                        <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-300">
                          {renderTools([
                            "Git",
                            "GitHub",
                            project.collaboration.includes("Teams")
                              ? "MS Teams"
                              : "Discord",
                          ])}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenges and Solutions */}
                <div className="space-y-4">
                  <h5 className="text-base sm:text-lg font-mono text-green-400">
                    Challenges & Solutions
                  </h5>
                  {project.challenges.map((item, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                    >
                      {/* Challenge */}
                      <div className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-lg p-4 border border-yellow-500/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          <h6 className="text-sm sm:text-base font-mono text-yellow-500">
                            Challenge {idx + 1}
                          </h6>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300">
                          {item.challenge}
                        </p>
                      </div>
                      {/* Solution */}
                      <div className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-lg p-4 border border-green-500/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <h6 className="text-sm sm:text-base font-mono text-green-500">
                            Solution
                          </h6>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlowingBorder>
    </div>
  );
};

const ExperiencePage = () => {
  const [activeExperiences, setActiveExperiences] = useState(
    // Initialize all experiences as expanded (true)
    Array(2).fill(true)
  );

  const experiences = [
    {
      company: "Bevy Commerce",
      location: "Ontario, Canada (Remote)",
      duration: "July 2024 - Present",
      role: "Software Engineer",
      projects: [
        {
          title: "Data Migration Tool",
          overview:
            "Developed a data migration tool to transfer data from Magento to Shopify using Express.js, handling bulk data transfer efficiently.",
          contributions: [
            "Designed and implemented data extraction module for Magento SOAP API",
            "Developed synchronization pipeline using GraphQL and REST APIs",
            "Implemented rate-limiting mechanism using Bottleneck library",
            "Created robust error-handling and logging system",
          ],
          challenges: [
            {
              challenge:
                "Order Migration Complexity - Magento and Shopify handle order statuses differently, causing issues with fulfillment status, financial status, and customer email mapping.",
              solution:
                "Refined the approach by deriving fulfillment status based on quantities field, calculating financial status through monetary fields analysis, and ensuring proper customer email retention while handling anonymous orders.",
            },
            {
              challenge:
                "API Rate Limiting - Need to comply with Shopify's rate limit of 2 requests per second while handling large data sets.",
              solution:
                "Implemented the Bottleneck library for precise rate limiting and developed a queuing system for efficient request management.",
            },
          ],
          collaboration:
            "Worked closely with one Software Engineer and Project Manager, using Microsoft Teams for discussions and Git/GitHub for version control.",
          technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "GraphQL",
            "REST API",
            "Magento",
            "Shopify",
          ],
        },
        {
          title: "The Free Press",
          overview:
            "Developed an online news media platform using WordPress and React, creating a customizable, dynamic website aligned with Figma designs.",
          contributions: [
            "Customized WordPress backend using PHP",
            "Implemented custom Gutenberg blocks",
            "Integrated React components within WordPress",
            "Developed custom PHP functions",
          ],
          challenges: [
            {
              challenge:
                "Learning Curve - First time working with WordPress and PHP, requiring quick adaptation to new technologies.",
              solution:
                "Invested time in studying WordPress architecture, including themes, plugins, and hooks, while experimenting with Gutenberg block development.",
            },
            {
              challenge:
                "Frontend-Backend Integration - Bridging the gap between WordPress's PHP-based rendering and modern React-based interfaces.",
              solution:
                "Leveraged WordPress REST API for dynamic data handling and wrote custom endpoints in PHP to expose additional content fields for React components.",
            },
          ],
          collaboration:
            "Collaborated with a team of 20 members including Software Engineers, Staff Software Engineer, Product Manager, UI/UX Designer, and QA Engineers.",
          technologies: [
            "WordPress",
            "PHP",
            "React.js",
            "MySQL",
            "Gutenberg",
            "REST API",
          ],
        },
      ],
    },
    {
      company: "BreakByte",
      location: "Chittagong, Bangladesh",
      duration: "Dec 2023 - Jun 2024",
      role: "Software Engineer",
      projects: [
        {
          title: "120Hertz",
          overview:
            "Developed a blogging platform with multi-tenant architecture supporting different organizations.",
          contributions: [
            "Built backend in Express.js with scalable API structure",
            "Implemented JWT & RBAC authentication",
            "Developed RESTful API endpoints",
            "Integrated TipTap editor",
            "Implemented password reset via SMTP",
          ],
          challenges: [
            {
              challenge:
                "Multi-Tenant Architecture - Needed to ensure proper isolation of data between different organizations.",
              solution:
                "Designed specialized database schemas and leveraged MongoDB's multi-tenant features for proper data separation per organization.",
            },
            {
              challenge:
                "Authentication & Security - Required robust security measures for multiple user roles and secure password management.",
              solution:
                "Implemented hashed passwords using bcrypt.js and developed middleware-based RBAC for granular permission control.",
            },
          ],
          collaboration:
            "Partnered with one Frontend Engineer, utilizing Discord for communication and Git/GitHub for version control.",
          technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "RBAC",
            "AWS EC2",
            "NGINX",
            "PM2",
          ],
        },
      ],
    },
  ];
  // Function to toggle individual experience
  const toggleExperience = (index) => {
    setActiveExperiences((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <>
      <NetworkBackground />
      <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <MatrixRain>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8 py-12"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-7xl font-bold font-mono"
              >
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
                  EXPERIENCE LOGS
                </span>
              </motion.h1>
              {/* <div className="flex items-center justify-center space-x-4 text-green-400 font-mono">
                <Terminal className="w-8 h-8" />
                <span className="text-2xl">
                  {"<"} Experience Matrix {"/>"}
                </span>
              </div> */}
            </motion.section>
          </MatrixRain>

          <section className="grid grid-cols-1 gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-8">
                <ExperienceNode
                  experience={exp}
                  isActive={activeExperiences[index]}
                  onClick={() => toggleExperience(index)}
                />

                <AnimatePresence>
                  {activeExperiences[index] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-8 ml-12 border-l-2 border-green-500/30 pl-12"
                    >
                      {exp.projects.map((project, pIndex) => (
                        <ProjectCard key={pIndex} project={project} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <GlowingBorder isActive={true}>
              <div className="bg-black/80 border border-green-500/30 rounded-lg p-8">
                <div className="text-green-400 font-mono text-2xl mb-8">
                  {"<"} Experience Stats {"/>"}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-4xl text-green-400 font-mono animate-pulse">
                      2+
                    </div>
                    <div className="text-gray-400 text-xl">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                      <Code className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-4xl text-green-400 font-mono animate-pulse">
                      3
                    </div>
                    <div className="text-gray-400 text-xl">Major Projects</div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                      <Pen className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-4xl text-green-400 font-mono animate-pulse">
                      10+
                    </div>
                    <div className="text-gray-400 text-xl">Technologies</div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-4xl text-green-400 font-mono animate-pulse">
                      2
                    </div>
                    <div className="text-gray-400 text-xl">Companies</div>
                  </div>
                </div>
              </div>
            </GlowingBorder>
          </motion.section>

          {/* Skills Matrix */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-16"
          >
            <h2 className="text-2xl font-mono text-green-400 text-center mb-12">
              {"<"} Technology Matrix {"/>"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Arsenal",
                  icon: Cpu,
                  skills: ["React.js", "WordPress", "TypeScript", "HTML/CSS"],
                },
                {
                  title: "Backend Systems",
                  icon: Server,
                  skills: [
                    "Node.js",
                    "Express.js",
                    "PHP",
                    "REST APIs",
                    "GraphQL",
                  ],
                },
                {
                  title: "Database & Infrastructure",
                  icon: Database,
                  skills: ["MongoDB", "MySQL", "AWS EC2", "NGINX", "Docker"],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <GlowingBorder isActive={false}>
                    <div className="bg-black/80 border border-green-500/20 rounded-lg p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <category.icon className="w-8 h-8 text-green-400" />
                        <h3 className="text-2xl font-mono text-green-400">
                          {category.title}
                        </h3>
                      </div>
                      <div className="space-y-4">
                        {category.skills.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center space-x-3"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 + index * 0.2 }}
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-gray-300 text-xl font-mono">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </GlowingBorder>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default ExperiencePage;
