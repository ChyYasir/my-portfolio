import Badge from "./Badge";
import Tag from "./Tag";
import { cn } from "@/lib/utils";

// Split text on URLs (with or without a scheme) and render each URL as a link.
function linkify(text) {
  const parts = text.split(/(\bhttps?:\/\/[^\s]+|\b(?:www\.|github\.com\/)[^\s]+)/gi);
  return parts.map((part, i) => {
    if (/^(https?:\/\/|www\.|github\.com\/)/i.test(part)) {
      const clean = part.replace(/[.,);]+$/, "");
      const trailing = part.slice(clean.length);
      const href = clean.startsWith("http") ? clean : `https://${clean}`;
      return (
        <span key={i}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover underline underline-offset-4"
          >
            {clean}
          </a>
          {trailing}
        </span>
      );
    }
    return part;
  });
}

export default function PublicationCard({ publication, className }) {
  const {
    title,
    authors,
    journal,
    year,
    status,
    quartile,
    contribution,
    keywords = [],
    doi,
    pdfUrl,
    codeUrl,
  } = publication;

  return (
    <article
      className={cn(
        "p-7 md:p-9 rounded-xl bg-surface-research border border-border",
        className
      )}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {status && (
          <Badge variant="status">{status}</Badge>
        )}
        {quartile && (
          <Badge variant="accent">{quartile} Journal</Badge>
        )}
      </div>

      <h3 className="font-display font-semibold text-2xl md:text-3xl text-foreground leading-snug mb-3">
        {title}
      </h3>

      <p className="text-base text-muted mb-2">
        {authors.map((author, i) => (
          <span key={i}>
            {i > 0 && ", "}
            <span
              className={cn(
                author.highlight && "text-accent font-medium"
              )}
            >
              {author.name}
            </span>
          </span>
        ))}
      </p>

      <p className="text-sm font-mono text-tertiary mb-4">
        {journal} · {year}
        {status === "accepted" && " (in press)"}
      </p>

      {contribution && (
        <p className="text-base text-muted leading-relaxed mb-4 max-w-2xl">
          {linkify(contribution)}
        </p>
      )}

      {keywords.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((kw) => (
            <Tag key={kw}>{kw}</Tag>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-4 text-sm">
        {doi && (
          <a
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover underline underline-offset-4"
          >
            DOI ↗
          </a>
        )}
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover underline underline-offset-4"
          >
            PDF ↗
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover underline underline-offset-4"
          >
            Code on GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}
