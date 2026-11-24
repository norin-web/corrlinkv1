import { useState } from "react";
import { faq, site } from "../content/site";

/** Questions appear as chips; the chosen answer opens as a reply bubble, like the app's AI chat. */
export default function Support() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : faq[active];

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1 className="h-display">Support</h1>
          <p className="lead">Tap a question to see the answer.</p>
        </div>
      </section>

      <section className="section">
        <div className="container support">
          <div className="chips" role="list">
            {faq.map((item, i) => (
              <button
                key={item.q}
                role="listitem"
                className={`chip-q${active === i ? " is-on" : ""}`}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                {item.q}
              </button>
            ))}
          </div>

          <div className="reply" aria-live="polite">
            {current ? (
              <>
                <p className="reply__q">{current.q}</p>
                <p className="bubble">{current.a}</p>
              </>
            ) : (
              <p className="muted">Choose a question above.</p>
            )}
          </div>

          <p className="muted">
            Still need help? Write to <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
