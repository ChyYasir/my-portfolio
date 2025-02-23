"use client";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import NetworkBackground from "@/components/NetworkBackground";
import MatrixRain from "@/components/MatrixRain";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Code,
  ChevronDown,
  Github,
  ExternalLink,
  Cpu,
  Server,
  Database,
  AlertTriangle,
  CheckCircle2,
  Globe,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";
import Project11 from "../../../public/images/projects/project1-1.jpeg";
import Project12 from "../../../public/images/projects/project1-2.jpeg";
import Project13 from "../../../public/images/projects/project1-3.jpeg";
import Project14 from "../../../public/images/projects/project1-4.jpeg";
import Project15 from "../../../public/images/projects/project1-5.jpeg";
import Project16 from "../../../public/images/projects/project1-6.jpeg";
import Project21 from "../../../public/images/projects/project2-1.jpeg";
import Project22 from "../../../public/images/projects/project2-2.jpeg";
import Project23 from "../../../public/images/projects/project2-3.jpeg";
import Project24 from "../../../public/images/projects/project2-4.jpeg";
import Project25 from "../../../public/images/projects/project2-5.jpeg";
import Project26 from "../../../public/images/projects/project2-6.jpeg";
import ProjectCard from "@/components/projects/ProjectCard";
// Project Data Array
const projectsData = [
  {
    title: "Tuition Media Internal Management System",
    status: "Paid Project",
    type: "Web Application",
    overview:
      "A comprehensive internal system for managing tuition media operations, featuring advanced search capabilities and business analytics.",
    images: [Project11, Project12, Project13, Project14, Project15, Project16],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongo",
    ],
    features: [
      "Advanced server-side search and filtering",
      "Real-time pagination system",
      "Comprehensive business analytics dashboard",
      "User role management",
      "Performance monitoring tools",
    ],
    challenges: [
      {
        challenge: "Complex Data Relationships",
        solution:
          "Implemented sophisticated MongoDB schemas with proper indexing and relationship management",
      },
      {
        challenge: "Performance Optimization",
        solution:
          "Utilized Redis caching and query optimization to improve response times",
      },
    ],
    deployment: {
      platform: "AWS EC2",
      tools: ["NGINX", "PM2", "Docker"],
    },
  },
  // ... other projects
];

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

// const ProjectCard = ({ project, index }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.2 }}
//       className="relative mb-8"
//     >
//       <div className="bg-black/90 border border-green-500/30 rounded-lg overflow-hidden">
//         <div className="p-4 md:p-6">
//           {/* Header */}
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
//             <div className="flex items-center space-x-4">
//               <div className="bg-green-500/10 p-2 rounded-lg">
//                 <Sparkles className="w-6 h-6 text-green-400" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-mono text-green-400">
//                   {project.title}
//                 </h3>
//                 <span className="px-3 py-1 bg-green-500/10 rounded-full text-green-400 text-sm font-mono mt-2 inline-block">
//                   {project.status}
//                 </span>
//               </div>
//             </div>

//             <button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className="flex items-center space-x-2 text-cyan-400/60 hover:text-cyan-400 transition-colors bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-500/20"
//             >
//               <span className="text-sm font-mono">
//                 {isExpanded ? "Hide Features" : "View Features"}
//               </span>
//               <ChevronDown
//                 className={`w-4 h-4 transition-transform ${
//                   isExpanded ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//           </div>

//           {/* Main Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//             {/* Left Column: Overview and Challenges */}
//             <div className="lg:col-span-7 space-y-6">
//               {/* Overview */}
//               <div className="bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-lg p-4 border border-green-500/20">
//                 <h4 className="text-lg font-mono text-green-400 mb-2">
//                   Overview
//                 </h4>
//                 <p className="text-gray-300 text-sm">{project.overview}</p>
//               </div>

//               {/* Challenges and Solutions */}
//               <div className="space-y-4">
//                 <h4 className="text-lg font-mono text-green-400">
//                   Challenges & Solutions
//                 </h4>
//                 {project.challenges.map((item, idx) => (
//                   <div key={idx} className="space-y-3">
//                     <div className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-lg p-3 border border-yellow-500/20">
//                       <div className="flex items-center space-x-2 mb-1">
//                         <AlertTriangle className="w-4 h-4 text-yellow-500" />
//                         <h6 className="font-mono text-yellow-500 text-sm">
//                           Challenge {idx + 1}
//                         </h6>
//                       </div>
//                       <p className="text-gray-300 text-sm">{item.challenge}</p>
//                     </div>
//                     <div className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-lg p-3 border border-green-500/20">
//                       <div className="flex items-center space-x-2 mb-1">
//                         <CheckCircle2 className="w-4 h-4 text-green-500" />
//                         <h6 className="font-mono text-green-500 text-sm">
//                           Solution
//                         </h6>
//                       </div>
//                       <p className="text-gray-300 text-sm">{item.solution}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Expandable Features Section */}
//               <AnimatePresence>
//                 {isExpanded && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="space-y-4 overflow-hidden"
//                   >
//                     <div className="bg-gradient-to-r from-purple-500/5 to-green-500/5 rounded-lg p-4 border border-green-500/20">
//                       <h4 className="text-lg font-mono text-green-400 mb-3">
//                         Key Features
//                       </h4>
//                       <ul className="space-y-2">
//                         {project.features.map((feature, idx) => (
//                           <li key={idx} className="flex items-start space-x-2">
//                             <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
//                             <span className="text-gray-300 text-sm">
//                               {feature}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-lg p-4 border border-green-500/20">
//                       <h4 className="text-lg font-mono text-green-400 mb-3">
//                         Deployment
//                       </h4>
//                       <div className="space-y-3">
//                         <div className="flex items-start space-x-2">
//                           <Server className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
//                           <span className="text-gray-300 text-sm">
//                             Platform: {project.deployment.platform}
//                           </span>
//                         </div>
//                         <div className="space-y-2">
//                           <h5 className="text-sm font-mono text-blue-400">
//                             Tools & Services
//                           </h5>
//                           <div className="flex flex-wrap gap-2">
//                             {project.deployment.tools.map((tool, idx) => (
//                               <span
//                                 key={idx}
//                                 className="px-2 py-1 bg-blue-500/10 rounded-full text-blue-400 text-xs"
//                               >
//                                 {tool}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Right Column: Image Carousel and Tech Stack */}
//             <div className="lg:col-span-5 space-y-4">
//               {/* Image Carousel */}
//               <div className="relative rounded-lg overflow-hidden group">
//                 {/* Decorative Corners */}
//                 <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-green-500/50 z-30" />
//                 <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-blue-500/50 z-30" />
//                 <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-blue-500/50 z-30" />
//                 <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-green-500/50 z-30" />

//                 <Carousel
//                   plugins={[
//                     Autoplay({
//                       delay: 3000,
//                     }),
//                   ]}
//                   className="w-full"
//                 >
//                   <CarouselContent>
//                     {project.images.map((image, idx) => (
//                       <CarouselItem key={idx} className="relative">
//                         <motion.div
//                           whileHover={{ scale: 1.02 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <Image
//                             src={image}
//                             alt={`${project.title} - Image ${idx + 1}`}
//                             className="w-full h-[250px] object-cover rounded-lg"
//                             width={400}
//                             height={250}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//                         </motion.div>
//                       </CarouselItem>
//                     ))}
//                   </CarouselContent>
//                   <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center z-20">
//                     <CarouselPrevious className="h-8 w-8 bg-black/50 hover:bg-black/70 border-none" />
//                     <CarouselNext className="h-8 w-8 bg-black/50 hover:bg-black/70 border-none" />
//                   </div>
//                 </Carousel>
//               </div>

//               {/* Technology Tags */}
//               <div className="flex flex-wrap gap-2">
//                 {project.technologies.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="px-2 py-1 bg-blue-500/10 rounded-full text-blue-400 text-xs font-mono border border-blue-500/30"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Yasir | Projects</title>
        <meta
          name="description"
          content="Showcase of my development projects"
        />
      </Head>
      <NetworkBackground />
      <main className="min-h-screen pt-16 md:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <MatrixRain>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 md:space-y-8 py-8 md:py-12"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl md:text-7xl font-bold font-mono"
              >
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
                  PROJECT LOGS
                </span>
              </motion.h1>
              <p className="text-green-400 font-mono text-lg md:text-xl">
                {"<Build. Deploy. Inspire />"}
              </p>
            </motion.section>
          </MatrixRain>

          {/* Projects Section */}
          <section className="space-y-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </section>

          {/* Projects Stats Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <GlowingBorder isActive={true}>
              <div className="bg-black/80 border border-green-500/30 rounded-lg p-8">
                <div className="text-green-400 font-mono text-2xl mb-8">
                  {"<"} Project Stats {"/>"}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                      <Globe className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-4xl text-green-400 font-mono animate-pulse">
                      2+
                    </div>
                    <div className="text-gray-400 text-lg">Live Projects</div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                      <Code className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-4xl text-green-400 font-mono animate-pulse">
                      10k+
                    </div>
                    <div className="text-gray-400 text-lg">Lines of Code</div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                      <Database className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-4xl text-green-400 font-mono animate-pulse">
                      6+
                    </div>
                    <div className="text-gray-400 text-lg">Technologies</div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                      <Server className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-4xl text-green-400 font-mono animate-pulse">
                      100%
                    </div>
                    <div className="text-gray-400 text-lg">Uptime</div>
                  </div>
                </div>
              </div>
            </GlowingBorder>
          </motion.section>

          {/* Technology Stack Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-16"
          >
            <h2 className="text-2xl font-mono text-green-400 text-center mb-12">
              {"<"} Technology Stack {"/>"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Technologies",
                  icon: Cpu,
                  skills: [
                    "React.js",
                    "Redux Toolkit",
                    "Material UI",
                    "TailwindCSS",
                  ],
                },
                {
                  title: "Backend Services",
                  icon: Server,
                  skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"],
                },
                {
                  title: "DevOps & Database",
                  icon: Database,
                  skills: ["MongoDB", "AWS EC2", "NGINX", "Docker", "PM2"],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
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
                            <span className="text-gray-300 text-lg font-mono">
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

export default ProjectsPage;
