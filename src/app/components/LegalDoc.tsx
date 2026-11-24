import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router";
import PageHead from "./PageHead";
import { site } from "../content/site";
import type { LegalBlock, LegalDoc as Doc } from "../content/legal";

const docs = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Use" },
];

const blockText = (b: LegalBlock) => (typeof b === "string" ? b : "lead" in b ? `${b.lead} ${b.text}` : b.strong);

/** Wraps the query in <mark> and turns the operator email into a link. */
function rich(text: string, query: string): ReactNode {
  const parts = text.split(new RegExp(`(${site.email.replace(/\./g, "\\.")})`));
  return parts.map((part, i) =>
    part === site.email ? (
      <a key={i} href={`mailto:${site.email}`}>{mark(part, query)}</a>
    ) : (
      <Fragment key={i}>{mark(part, query)}</Fragment>
    ),
  );
}

function mark(text: string, query: string): ReactNode {
  if (!query) return text;
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.split(new RegExp(`(${q})`, "gi")).map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? <mark key={i}>{part}</mark> : <Fragment key={i}>{part}</Fragment>,
  );
}

/**
 * Privacy and Terms share this reader: a segmented switch like the app's message filter,
 * a search field like the app's contact search, and the document text as given by the operator.
 */
export default function LegalDoc({ title, tone, doc, current }: { title: string; tone: string; doc: Doc; current: string }) {
  const [query, setQuery] = useState("");
  const q = query.trim();

  const shown = useMemo(() => {
    if (!q) return doc.sections;
    const needle = q.toLowerCase();
    return doc.sections.filter((s) => `${s.n}. ${s.title} ${s.body.map(blockText).join(" ")}`.toLowerCase().includes(needle));
  }, [doc, q]);

  // The count is announced to screen readers once typing pauses, not on every key.
  const countText = q ? (shown.length ? `${shown.length} of ${doc.sections.length} sections` : "No sections match.") : `${doc.sections.length} sections`;
  const [announced, setAnnounced] = useState(countText);
  useEffect(() => {
    const t = setTimeout(() => setAnnounced(countText), 500);
    return () => clearTimeout(t);
  }, [countText]);

  const renderBlock = (b: LegalBlock, i: number) => {
    if (typeof b === "string") return <p key={i}>{rich(b, q)}</p>;
    if ("lead" in b)
      return (
        <li key={i}>
          <b>{mark(b.lead, q)}</b> {rich(b.text, q)}
        </li>
      );
    return <p key={i}><b>{mark(b.strong, q)}</b></p>;
  };

  // Bullets sit in one <ul>; everything else stays a paragraph.
  const renderBody = (body: LegalBlock[]) => {
    const out: ReactNode[] = [];
    let list: ReactNode[] = [];
    body.forEach((b, i) => {
      if (typeof b !== "string" && "lead" in b) list.push(renderBlock(b, i));
      else {
        if (list.length) out.push(<ul key={`ul${i}`}>{list}</ul>), (list = []);
        out.push(renderBlock(b, i));
      }
    });
    if (list.length) out.push(<ul key="ul-end">{list}</ul>);
    return out;
  };

  return (
    <>
      <PageHead tone={tone} rest={title} sub={`Operated by ${site.operator}, ${site.location}`}>
        <nav className="docswitch" aria-label="Legal documents">
          {docs.map((d) => (
            <Link key={d.to} to={d.to} className={d.to === current ? "is-on" : ""} aria-current={d.to === current ? "page" : undefined}>
              {d.label}
            </Link>
          ))}
        </nav>
      </PageHead>

      <section className="section section--tight">
        <div className="container narrow">
          <div className="docbar">
          <label className="docsearch">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            <span className="sr-only">Search this document</span>
            <input type="search" placeholder={`Search the ${title === "Policy" ? "policy" : "terms"}`} value={query} onChange={(e) => setQuery(e.target.value)} />
            <span className="docsearch__count" aria-hidden="true">{countText}</span>
          </label>
          </div>
          <p className="sr-only" aria-live="polite">{announced}</p>

          <article className="legal">
            {!q && <div className="legal__intro">{renderBody(doc.intro)}</div>}
            {shown.map((s) => (
              <section className="legal__sec" id={`s${s.n}`} key={s.n}>
                <h2>
                  {s.n}. {mark(s.title, q)}
                </h2>
                {renderBody(s.body)}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
