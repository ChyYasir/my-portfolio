"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-elevated/80 backdrop-blur-md">
        <nav className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-lg text-foreground hover:text-accent transition-colors"
          >
            <span className="text-muted">&lt;</span>
            YR
            <span className="text-muted">/&gt;</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative",
                  isActive(item.path)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                )}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-1">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              className="p-2 text-muted hover:text-foreground"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-canvas md:hidden"
          >
            <div className="flex flex-col h-full px-6 py-6">
              <div className="flex justify-end mb-8">
                <button
                  onClick={close}
                  className="p-2 text-muted hover:text-foreground min-h-[44px] min-w-[44px]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                {siteConfig.nav.map((item) => (
                  <div key={item.path}>
                    <Link
                      href={item.path}
                      onClick={close}
                      className={cn(
                        "block py-3 text-2xl font-display min-h-[44px]",
                        isActive(item.path)
                          ? "text-accent"
                          : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.path === "/experience" && (
                      <div className="pl-4 pb-2 space-y-1">
                        {siteConfig.experienceTabs.map((tab) => (
                          <Link
                            key={tab.id}
                            href={`/experience#${tab.id}`}
                            onClick={close}
                            className="block py-2 text-base text-muted hover:text-foreground min-h-[44px]"
                          >
                            {tab.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6 flex items-center gap-4">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.email}
                  className="text-muted hover:text-foreground"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
