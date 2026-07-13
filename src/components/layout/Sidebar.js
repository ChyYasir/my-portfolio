"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const roles = ["Software Engineer", "Adjunct Lecturer", "Researcher"];

function Identity() {
  return (
    <div>
      <Link href="/" className="inline-block group">
        <div className="relative w-24 h-24 overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/profile/yasir-2.png"
            alt={siteConfig.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
      </Link>

      <Link href="/">
        <h1 className="font-display font-bold text-3xl text-foreground mt-5 leading-tight tracking-tight hover:text-accent transition-colors">
          {siteConfig.name}
        </h1>
      </Link>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {roles.map((role) => (
          <span
            key={role}
            className="text-[13px] font-medium text-muted"
          >
            {role}
            {role !== roles[roles.length - 1] && (
              <span className="text-tertiary ml-1.5">·</span>
            )}
          </span>
        ))}
      </div>

      <p className="text-sm text-tertiary mt-3 leading-relaxed">
        Building data systems at Bevy Commerce. Teaching CSE at IIUC.
        Published in a Q1 journal.
      </p>
    </div>
  );
}

function NavLinks({ pathname, onNavigate, size = "desktop" }) {
  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav
      className={cn(
        "flex flex-col",
        size === "desktop" ? "gap-0.5" : "gap-1"
      )}
    >
      {siteConfig.nav.map((item) => {
        const active = isActive(item.path);
        return (
          <Link
            key={item.path}
            href={item.path}
            onClick={onNavigate}
            className={cn(
              "group relative flex items-center rounded-lg transition-colors",
              size === "desktop"
                ? "px-3 py-2.5 text-[15px] font-medium"
                : "px-4 py-3.5 text-2xl font-display font-semibold",
              active
                ? "text-foreground bg-subtle"
                : "text-muted hover:text-foreground hover:bg-subtle/60"
            )}
          >
            <span
              className={cn(
                "mr-3 h-1.5 w-1.5 rounded-full transition-all",
                active
                  ? "bg-accent scale-100"
                  : "bg-transparent scale-0 group-hover:bg-tertiary group-hover:scale-100"
              )}
            />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

function SocialRow() {
  return (
    <div className="flex items-center gap-1">
      <a
        href={siteConfig.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-subtle transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-[18px] h-[18px]" />
      </a>
      <a
        href={siteConfig.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-subtle transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-[18px] h-[18px]" />
      </a>
      <a
        href={siteConfig.social.email}
        className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-subtle transition-colors"
        aria-label="Email"
      >
        <Mail className="w-[18px] h-[18px]" />
      </a>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}

function ResumeButton() {
  return (
    <a
      href={siteConfig.resume}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-subtle hover:border-accent/40 transition-colors"
    >
      <FileText className="w-4 h-4" />
      Résumé
      <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
    </a>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 z-40 h-screen w-[336px] flex-col border-r border-border bg-elevated px-8 py-10 overflow-y-auto">
        <Identity />

        <div className="mt-10 -mx-3">
          <NavLinks pathname={pathname} />
        </div>

        <div className="mt-auto pt-10 space-y-4">
          <ResumeButton />
          <SocialRow />
          <p className="text-xs text-tertiary pt-2">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-40 h-16 flex items-center justify-between px-4 sm:px-6 border-b border-border bg-elevated/90 backdrop-blur-md">
        <Link
          href="/"
          className="font-display font-bold text-lg text-foreground tracking-tight"
        >
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setOpen(true)}
            className="p-2 text-muted hover:text-foreground"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-canvas lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-full px-6 py-6">
              <div className="flex items-center justify-between mb-8">
                <Identity />
                <button
                  onClick={close}
                  className="p-2 -mt-1 text-muted hover:text-foreground shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="-mx-4 flex-1">
                <NavLinks
                  pathname={pathname}
                  onNavigate={close}
                  size="mobile"
                />
              </div>

              <div className="border-t border-border pt-6 mt-6 space-y-4">
                <ResumeButton />
                <SocialRow />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
