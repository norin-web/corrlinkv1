import type { ReactNode } from "react";

/** Centered page header with a two-tone title: grey lead-in, black ending. */
export default function PageHead({ label, tone, rest, sub, children }: { label: string; tone: string; rest: string; sub?: string; children?: ReactNode }) {
  return (
    <section className="phead">
      <div className="container phead__inner">
        <p className="label">{label}</p>
        <h1 className="h1 h1--page"><span className="tone">{tone}</span> {rest}</h1>
        {sub && <p className="sub">{sub}</p>}
        {children}
      </div>
    </section>
  );
}
