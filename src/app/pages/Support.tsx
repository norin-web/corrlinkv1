import { useState } from "react";
import PageHead from "../components/PageHead";
import { faq, site } from "../content/site";

/** Questions appear as chips and the answer opens as a reply bubble, like the app's assistant. */
export default function Support() {
  const [active, setActive] = useState(0);
  const current = faq[active];

  return (
    <>
      <PageHead label="Support" tone="How can we" rest="help?" sub="Tap a question to see the answer." />
      <section className="section section--tight">
        <div className="container narrow">
          <div className="panel assist">
            <div className="assist__chips">
              {faq.map((item, i) => (
                <button
                  key={item.q}
                  className={`chip${active === i ? " is-on" : ""}`}
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  {item.q}
                </button>
              ))}
            </div>
            <div className="assist__thread" aria-live="polite">
              <span className="bub bub--out">{current.q}</span>
              <span className="bub bub--in">{current.a}</span>
            </div>
          </div>
          <p className="faq__more">Still need help? Email us at <a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </section>
    </>
  );
}
