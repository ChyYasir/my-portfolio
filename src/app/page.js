"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NetworkBackground from "@/components/NetworkBackground";
import { Code, Mail, Terminal, Lock, Server } from "lucide-react";
import Image from "next/image";

const GlitchText = ({ text }) => (
  <motion.h1
    className="text-5xl md:text-6xl font-mono text-green-400"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <span className="relative inline-block">
      {text}
      <span className="absolute top-0 left-0 text-green-400 opacity-20 animate-glitch1">
        {text}
      </span>
      <span className="absolute top-0 left-0 text-green-400 opacity-20 animate-glitch2">
        {text}
      </span>
    </span>
  </motion.h1>
);

const TypingText = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 80); // Faster typing speed for snappy feel
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <motion.p
      className="text-green-300 font-mono text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      {">"} {displayedText}
      <span className="animate-blink">|</span>
    </motion.p>
  );
};

const HackerImage = ({ alt }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className="relative w-56 h-56 md:w-72 md:h-72 mx-auto"
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ filter: isActive ? "brightness(1.2)" : "brightness(1)" }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/images/profile/yasir-2.png"
          alt={alt}
          fill
          className="object-cover rounded-full border-2 border-green-500/50"
          priority
        />
      </motion.div>
      {/* Hacker Pulse Effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-green-400/30"
        animate={{
          scale: isActive ? [1, 1.2, 1] : 1,
          opacity: isActive ? [0.5, 0, 0.5] : 0,
        }}
        transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
      />
    </motion.div>
  );
};

const TerminalCard = ({ title, content, icon: Icon }) => (
  <motion.div
    className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-3"
    whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 94, 0.8)" }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-center space-x-2 mb-2">
      <Icon className="w-5 h-5 text-green-400" />
      <h3 className="text-green-400 font-mono text-lg">{title}</h3>
    </div>
    <div className="text-green-300 font-mono text-sm">{content}</div>
  </motion.div>
);

export default function Home() {
  const cards = [
    {
      icon: Lock,
      title: "INFO",
      content: (
        <ul className="space-y-1">
          <li>{">"} Software Engineer</li>
          <li>{">"} 2+ yrs Professional Experience</li>
          <li>{">"} 3 Times ICPC Regionalist</li>
          <li>{">"} Problem Solver</li>
        </ul>
      ),
    },
    {
      icon: Code,
      title: "SKILLS",
      content: (
        <ul className="space-y-1">
          <li>{">"} C, C++, Python, JS, TS</li>
          <li>{">"} React, Node, Next.js</li>
          <li>{">"} AWS, Docker, Git</li>
          <li>{">"} System Design</li>
        </ul>
      ),
    },
    {
      icon: Server,
      title: "MISSIONS",
      content: (
        <ul className="space-y-1">
          <li>{">"} Build Cutting Edge Tech</li>
          <li>{">"} Build Scaling Systems</li>
          <li>{">"} Innovate Something </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <NetworkBackground />
      <main className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header with Gap and Typing Text */}
          <motion.section
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <HackerImage alt="Yasir Rahman" />
            <GlitchText text="YASIR RAHMAN" />
            <div className="space-y-1">
              <TypingText
                text="I love solving problems through code. Learning to code, coding to solve"
                delay={1}
              />
            </div>
          </motion.section>

          {/* Compact Terminal Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <TerminalCard
                key={index}
                title={card.title}
                content={card.content}
                icon={card.icon}
              />
            ))}
          </section>

          {/* Creative Action Bar */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="bg-black/80 border border-green-500/30 rounded-lg p-4 inline-flex space-x-4">
              <motion.a
                href="/Resume_of_Yasir_Rahman.pdf"
                className="px-4 py-2 bg-green-500 text-black font-mono text-sm rounded hover:bg-green-400 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{"> RESUME"}</span>
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </motion.a>
              <motion.a
                href="mailto:chyyasir2000@gmail.com"
                className="px-4 py-2 border border-green-500 text-green-400 font-mono text-sm rounded hover:bg-green-500/10 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{"> MAIL"}</span>
                <motion.span
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.section>
        </div>
      </main>

      {/* CSS for Glitch, Pulse, and Blink Effects */}
      <style jsx global>{`
        @keyframes glitch1 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
        @keyframes glitch2 {
          0% {
            transform: translate(0);
          }
          25% {
            transform: translate(3px, -3px);
          }
          50% {
            transform: translate(-3px, 3px);
          }
          75% {
            transform: translate(3px, 0);
          }
          100% {
            transform: translate(0);
          }
        }
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-glitch1 {
          animation: glitch1 0.3s infinite;
        }
        .animate-glitch2 {
          animation: glitch2 0.4s infinite;
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </>
  );
}
