"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NetworkBackground from "@/components/NetworkBackground";
import MatrixRain from "@/components/MatrixRain";
import {
  Trophy,
  Code,
  Users,
  Medal,
  Timer,
  Award,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import BUET2022 from "../../../public/images/achievements/BUET(1).jpg";
import ICPC2022 from "../../../public/images/achievements/ICPC-22.jpg";
import ICPC2023 from "../../../public/images/achievements/ICPC-23.jpg";
import EDU from "../../../public/images/achievements/EDU.jpeg";
import SEC from "../../../public/images/achievements/SEC.jpeg";
import CUET_IJC from "../../../public/images/achievements/CUET_IJC.jpg";

// Add required keyframe animations
const keyframes = `
  @keyframes slide-right {
    from { transform: translateX(-100%); }
    to { transform: translateX(100%); }
  }
  @keyframes slide-left {
    from { transform: translateX(100%); }
    to { transform: translateX(-100%); }
  }
`;

const AchievementCard = ({ achievement, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative mb-8 md:mb-12"
    >
      <div className="relative group">
        <div
          className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-lg blur-lg transition-opacity ${
            isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-50"
          }`}
        />
        <div className="relative bg-black/90 border border-green-500/30 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Image Section with Enhanced Creative Design */}
            <div className="relative h-48 sm:h-64 lg:h-full overflow-hidden group">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-purple-500/50 z-30" />
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-green-500/50 z-30" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-green-500/50 z-30" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-purple-500/50 z-30" />

              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-green-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* Glowing Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.1),transparent_70%)] group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Animated Lines */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-slide-right" />
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-slide-left" />
              </div>

              {/* Main Image with Enhanced Effects */}
              <div className="relative group-hover:scale-105 transition-transform duration-700 ease-out">
                <Image
                  src={achievement.img.src}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110 rounded"
                  width={600}
                  height={400}
                />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 z-30 flex flex-col gap-2"
              >
                <div className="flex items-center space-x-2 bg-purple-500/30 backdrop-blur-md rounded-full px-3 py-1.5">
                  <Trophy className="w-4 h-4 text-purple-300" />
                  <span className="text-purple-200 font-mono text-sm md:text-base">
                    Rank: {achievement.rank}
                  </span>
                </div>
                {achievement.teamName && (
                  <div className="flex items-center space-x-2 bg-green-500/30 backdrop-blur-md rounded-full px-3 py-1.5">
                    <Users className="w-4 h-4 text-green-300" />
                    <span className="text-green-200 font-mono text-sm md:text-base">
                      {achievement.teamName}
                    </span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-4 md:p-6">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-mono text-green-400 leading-tight">
                  {achievement.title}
                </h3>

                {isMobile ? (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center space-x-2 text-cyan-400/60 hover:text-cyan-400 transition-colors bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-500/20 w-full justify-center"
                  >
                    <span className="text-sm font-mono">
                      {isExpanded ? "Hide Details" : "View Details"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : null}

                <AnimatePresence>
                  {(!isMobile || isExpanded) && (
                    <motion.div
                      initial={
                        isMobile ? { opacity: 0, height: 0 } : { opacity: 1 }
                      }
                      animate={{ opacity: 1, height: "auto" }}
                      exit={isMobile ? { opacity: 0, height: 0 } : {}}
                      className="overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-green-500/5 to-purple-500/5 rounded-lg p-4 border border-green-500/20">
                        <p className="text-gray-300 text-sm md:text-base">
                          {achievement.summary}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatsOverview = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center py-6 md:py-8"
  >
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg blur-lg opacity-100" />
      <div className="bg-black/80 border border-green-500/30 rounded-lg p-4 md:p-8">
        <div className="text-xl md:text-2xl text-green-400 font-mono mb-4 md:mb-8">
          {"<"} Competitive Programming Stats {"/>"}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8 md:my-16">
          {[
            { icon: Trophy, value: "20+", label: "Competitions" },
            { icon: Medal, value: "1st", label: "Place Achievement" },
            { icon: Code, value: "2000+", label: "Problems Solved" },
            { icon: Timer, value: "4+", label: "Years CP Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-2 md:space-y-3"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
              </div>
              <div className="text-2xl md:text-4xl text-green-400 font-mono animate-pulse">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

// Add custom styles to head
const addCustomStyles = () => {
  if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slide-right {
        from { transform: translateX(-100%); }
        to { transform: translateX(100%); }
      }
      @keyframes slide-left {
        from { transform: translateX(100%); }
        to { transform: translateX(-100%); }
      }
      .animate-slide-right {
        animation: slide-right 3s linear infinite;
      }
      .animate-slide-left {
        animation: slide-left 3s linear infinite;
      }
    `;
    document.head.appendChild(style);
  }
};

const AchievementsPage = () => {
  useEffect(() => {
    addCustomStyles();
  }, []);
  const achievements = [
    {
      img: ICPC2023,
      title: "ICPC Asia Dhaka Regional Contest 2022-23",
      summary:
        "My second participation in the ICPC took place at Green University, Bangladesh. Our team successfully tackled four problems, and although we came close to solving another, we fell short. Despite that, the overall experience was highly positive. I had the opportunity to meet and engage in lengthy conversations with Sahjalal Shohag vai, which added to the enjoyment of the event.",
      teamName: "CUET_Infinite_Tsukuyomi",
      rank: "40",
    },
    {
      img: ICPC2022,
      title: "ICPC Asia Dhaka Regional Contest 2021-22",
      summary:
        "It marked my inaugural participation in the ICPC, during which our team successfully tackled five problems. I personally contributed by solving a task that involved a combination of dynamic programming and number theory. The overall contest proved to be enjoyable, and we wrapped up the day with friendly matches of chess and table tennis.",
      teamName: "CUET_AugniPaksha",
      rank: "48",
    },
    {
      img: EDU,
      title: "EDU Engineering Day Inter University Programming Contest",
      summary:
        "Finally, we clinched the championship in an IUPC, marking an unforgettable experience. Our team successfully solved 7 out of 10 problems, with Asad and Tanzim delivering outstanding performances. The thrilling moment came when we solved the last problem just 10 minutes before the contest concluded, securing our championship title. Our mentor, Billal Sir, expressed great joy and satisfaction with our team's performance.",
      teamName: "CUET_AugniPaksha",
      rank: "1",
    },
    // Add other achievements similarly
  ];

  return (
    <>
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
                  ACHIEVEMENT LOGS
                </span>
                <p className="text-green-400 font-mono text-lg md:text-xl">
                  {"<Achieve. Inspire. Repeat />"}
                </p>
              </motion.h1>
            </motion.section>
          </MatrixRain>

          <StatsOverview />

          <section className="space-y-6 md:space-y-8">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={achievement}
                index={index}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default AchievementsPage;
