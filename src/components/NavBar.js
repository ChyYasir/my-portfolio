import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Linkedin, Facebook } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
  ];

  const socialLinks = [
    {
      icon: "/images/svgs/github.svg",
      href: "https://github.com/ChyYasir",
      color: "hover:text-purple-400",
      label: "GitHub",
    },
    {
      // icon: Linkedin,
      icon: "/images/svgs/linkedin-2.svg",
      href: "https://www.linkedin.com/in/yasir-rahman-chy/",
      color: "hover:text-blue-400",
      label: "LinkedIn",
    },
    {
      icon: "/images/svgs/facebook.svg",
      href: "https://www.facebook.com/profile.php?id=100042767077083",
      color: "hover:text-cyan-400",
      label: "Facebook",
    },
  ];

  const isActive = (path) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="text-2xl md:text-3xl font-mono relative group"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">
              <div className="cursor-pointer relative px-3 py-2">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative">
                  <span className="text-gray-400">&lt;</span>
                  <span className="text-green-400">YR</span>
                  <span className="text-gray-400">/&gt;</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-3">
              {navItems.map((item, index) => {
                const active = isActive(item.path);
                return (
                  <Link key={index} href={item.path}>
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="px-5 py-3">
                        <div
                          className={`absolute inset-0 rounded-lg transition-all duration-300
                          ${
                            active
                              ? "bg-gradient-to-r from-green-500/20 via-green-500/10 to-green-500/20 border border-green-500/30"
                              : "bg-transparent group-hover:bg-gradient-to-r from-green-500/10 via-green-500/5 to-green-500/10"
                          }`}
                        />
                        <div className="relative flex items-center">
                          <span
                            className={`font-mono text-lg tracking-wide transition-all duration-300
                            ${
                              active
                                ? "text-green-400"
                                : "text-gray-400 group-hover:text-green-400"
                            }`}
                          >
                            {item.name}
                          </span>
                          {active && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400/50 via-green-400 to-green-400/50"
                            />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-5">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group ${social.color} transition-colors duration-300`}
                whileHover={{ scale: 1.1 }}
                title={social.label}
              >
                <div
                  className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 
                              rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
                />
                <div className="relative text-gray-400 group-hover:text-inherit">
                  {typeof social.icon === "string" ? (
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={28}
                      height={28}
                      className="transform group-hover:rotate-12 transition-transform duration-300"
                    />
                  ) : (
                    <social.icon
                      size={28}
                      className="transform group-hover:rotate-12 transition-transform duration-300"
                    />
                  )}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative group p-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-200" />
              <div className="relative text-green-400 hover:text-green-300 transition-colors">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </div>
            </motion.button>
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
            <div className="px-3 pt-3 pb-4 space-y-2 bg-black/90 rounded-lg border border-green-500/20 mb-2">
              {navItems.map((item, index) => {
                const active = isActive(item.path);
                return (
                  <Link key={index} href={item.path}>
                    <motion.div
                      className="relative overflow-hidden"
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className={`px-4 py-3 rounded-lg relative
                        ${
                          active
                            ? "bg-gradient-to-r from-green-500/20 via-green-500/10 to-green-500/20 border border-green-500/30"
                            : "hover:bg-gradient-to-r hover:from-green-500/10 hover:via-green-500/5 hover:to-green-500/10"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span
                            className={`font-mono text-lg transition-colors duration-300
                            ${active ? "text-green-400" : "text-gray-400"}`}
                          >
                            {item.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}

              {/* Social Links - Mobile */}
              <div className="flex items-center justify-around pt-4 border-t border-green-500/20 mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} p-2 relative group`}
                    whileHover={{ scale: 1.15 }}
                    title={social.label}
                  >
                    <div
                      className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 
                                  rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
                    />
                    <div className="relative">
                      {typeof social.icon === "string" ? (
                        <Image
                          src={social.icon}
                          alt={social.label}
                          width={24}
                          height={24}
                          className="transform group-hover:rotate-12 transition-transform duration-300"
                        />
                      ) : (
                        <social.icon
                          size={24}
                          className="transform group-hover:rotate-12 transition-transform duration-300"
                        />
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;
