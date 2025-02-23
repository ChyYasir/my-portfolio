"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "[ Home ]", path: "/" },
    { name: "[ Projects ]", path: "/projects" },
    { name: "[ Experience ]", path: "/experience" },
    { name: "[ Blog ]", path: "/blog" },
    { name: "[ Achievements ]", path: "/achievements" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-green-400 text-xl font-mono"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">
              <span className="cursor-pointer">
                <span className="text-gray-400">&lt;</span>
                <span className="text-green-400">YR</span>
                <span className="text-gray-400">/&gt;</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={index} href={item.path}>
                <motion.span
                  className="text-gray-300 hover:text-green-400 cursor-pointer font-mono text-sm tracking-wider"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 8px rgb(74, 222, 128)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-b-lg">
              {navItems.map((item, index) => (
                <Link key={index} href={item.path}>
                  <motion.a
                    className="block px-3 py-2 text-green-400 font-mono text-sm hover:bg-green-500/10 rounded-md"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;
