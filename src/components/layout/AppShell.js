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
import Footer from "./Footer";
import { cn } from "@/lib/utils";

const roles = ["Software Engineer", "Adjunct Lecturer", "Researcher"];

function Identity({ onNavigate }) {
  return (
    <div>
      <Link href="/" onClick={onNavigate} className="inline-block group">
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

      <Link href="/" onClick={onNavigate}>
        <h1 className="font-display font-bold text-3xl text-foreground mt-5 leading-tight tracking-tight hover:text-accent transition-colors">
          {siteConfig.name}
        </h1>
      </Link>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {roles.map((role) => (
          <span key={role} className="text-[13px] font-medium text-muted">
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

function NavLinks({ pathname, onNavigate }) {
  const [hash, setHash] = useState("");

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);

  return (
    <nav className="flex flex-col gap-0.5">
      {siteConfig.nav.map((item) => {
        const active = isActive(item.path);
        const isExperience = item.path === "/experience";
        return (
          <div key={item.path}>
            <Link
              href={item.path}
              onClick={onNavigate}
              className={cn(
                "group relative flex items-center rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors",
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

            {isExperience && (
              <div className="mt-0.5 mb-1 ml-[22px] flex flex-col border-l border-border pl-3">
                {siteConfig.experienceTabs.map((tab) => {
                  const subActive =
                    pathname.startsWith("/experience") &&
                    hash === `#${tab.id}`;
                  return (
                    <Link
                      key={tab.id}
                      href={`/experience#${tab.id}`}
                      onClick={onNavigate}
                      className={cn(
                        "py-1.5 pl-2 text-sm rounded-md transition-colors",
                        subActive
                          ? "text-accent font-medium"
                          : "text-tertiary hover:text-foreground"
                      )}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
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
      href={siteConfig.cv}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-subtle hover:border-accent/40 transition-colors"
    >
      <FileText className="w-4 h-4" />
      CV
      <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
    </a>
  );
}

export default function AppShell({ children }) {
  // null = not yet mounted (fall back to CSS responsive default)
  const [open, setOpen] = useState(null);
  const pathname = usePathname();

  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 1023px)").matches;

  // On mount, open by default on desktop and closed on mobile.
  useEffect(() => {
    setOpen(!isMobile());
  }, []);

  // Lock body scroll while the sidebar overlays content on mobile.
  useEffect(() => {
    const lock = open && isMobile();
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeOnMobile = () => {
    if (isMobile()) setOpen(false);
  };

  const panelTransform =
    open === null
      ? "-translate-x-full lg:translate-x-0"
      : open
        ? "translate-x-0"
        : "-translate-x-full";

  const contentPad =
    open === null || open ? "lg:pl-[336px]" : "lg:pl-0";

  return (
    <>
      {/* Burger toggle - top-left on every breakpoint */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Collapse sidebar" : "Open sidebar"}
        aria-expanded={!!open}
        className="fixed top-4 left-4 z-[70] p-2.5 rounded-lg border border-border bg-elevated/90 backdrop-blur-md text-foreground hover:bg-subtle transition-colors"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop (mobile only, when open) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-[336px] max-w-[85vw]",
          "flex flex-col border-r border-border bg-elevated",
          "px-8 pt-16 pb-10 overflow-y-auto",
          "transition-transform duration-300 ease-out",
          panelTransform
        )}
      >
        <Identity onNavigate={closeOnMobile} />

        <div className="mt-10 -mx-3">
          <NavLinks pathname={pathname} onNavigate={closeOnMobile} />
        </div>

        <div className="mt-auto pt-10 space-y-4">
          <ResumeButton />
          <SocialRow />
          <p className="text-xs text-tertiary pt-2">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </aside>

      {/* Main content */}
      <div
        className={cn("transition-[padding] duration-300 ease-out", contentPad)}
      >
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </div>
    </>
  );
}
