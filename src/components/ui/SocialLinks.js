import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Brand logo glyphs (24x24 viewBox). GitHub uses currentColor so it stays
   visible in both themes; the rest carry their official brand color. */
function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ScholarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="#4285F4" aria-hidden="true" {...props}>
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
    </svg>
  );
}

function GmailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="#EA4335" aria-hidden="true" {...props}>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-1.909V10.09L12 16.909 3.545 10.09v10.912H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 11.545l9.615-7.724h.749c.904 0 1.636.732 1.636 1.636z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export const socialLinks = [
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  { key: "github", label: "GitHub", href: siteConfig.social.github, Icon: GitHubIcon },
  { key: "gmail", label: "Email", href: siteConfig.social.email, Icon: GmailIcon },
  { key: "scholar", label: "Google Scholar", href: siteConfig.social.scholar, Icon: ScholarIcon },
  { key: "x", label: "X", href: siteConfig.social.twitter, Icon: XIcon },
];

export const monochromeSocials = new Set(["github", "x"]);

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {socialLinks.map(({ key, label, href, Icon }) => {
        const isMail = href?.startsWith("mailto:");
        return (
          <a
            key={key}
            href={href}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
            aria-label={label}
            title={label}
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-elevated hover:bg-subtle hover:-translate-y-0.5 transition-all duration-200"
          >
            <Icon
              className={cn(
                "w-[22px] h-[22px]",
                monochromeSocials.has(key) && "text-foreground"
              )}
            />
          </a>
        );
      })}
    </div>
  );
}
