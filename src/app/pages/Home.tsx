import { useState } from "react";
import { StoreBadge } from "../components/Btn";
import Phone from "../components/Phone";
import Icon from "../components/Icon";
import { AskFragment, DraftFragment, EnhanceFragment, FilterFragment, StatusFragment } from "../components/Fragments";
import { faq, features, phones, site, steps } from "../content/site";
import { img } from "../utils/img";

export default function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const left = features.slice(0, 3);
  const right = features.slice(3);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__app">
            <img src={img("/images/app-icon.png")} alt="" width={44} height={44} />
            <span>CorrLink for iPhone</span>
          </div>
          <h1 className="h1">
            <span className="tone">Stay in touch with someone</span> in a correctional facility.
          </h1>
          <p className="sub">Write, read and reply from your iPhone. Messages may be reviewed by the facility, and the app shows where each one is.</p>
          <StoreBadge />
        </div>
        <div className="hero__phones">
          <Phone {...phones.chat} className="hero__back" eager />
          <Phone {...phones.messages} className="hero__front" eager />
        </div>
      </section>

      <section className="section">
        <div className="container statement">
          <p className="label">In short</p>
          <p className="statement__text">
            <span className="tone">Facilities may review messages before delivery.</span> CorrLink shows where each one is: in review or read.
          </p>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container">
          <div className="head">
            <p className="label">Key benefits</p>
            <h2 className="h2"><span className="tone">One place for</span> every conversation</h2>
          </div>
          <div className="bento">
            <article className="card card--frag">
              <div className="card__text">
                <h3>All, Unread, In review</h3>
                <p>Filter the list to see what’s new or still waiting for the facility.</p>
              </div>
              <FilterFragment />
            </article>
            <article className="card card--phone">
              <div className="card__shot">
                <Phone {...phones.contacts} />
              </div>
              <div className="card__text">
                <h3>Contacts with a status</h3>
                <p>Approved contacts can receive messages. Waiting and Transferred are shown separately.</p>
              </div>
            </article>
            <article className="card card--frag">
              <div className="card__text">
                <h3>See what’s been read</h3>
                <p>Each sent message is marked Read once it’s been read.</p>
              </div>
              <StatusFragment />
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="head">
            <p className="label">Features</p>
            <h2 className="h2"><span className="tone">What the app</span> does</h2>
          </div>
          <div className="around">
            <ul className="around__col">
              {left.map((f) => (
                <li key={f.title}><Icon name={f.icon} /><h3>{f.title}</h3><p>{f.text}</p></li>
              ))}
            </ul>
            <Phone {...phones.helpWrite} className="around__phone" />
            <ul className="around__col">
              {right.map((f) => (
                <li key={f.title}><Icon name={f.icon} /><h3>{f.title}</h3><p>{f.text}</p></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="assistant">
        <div className="container">
          <div className="head">
            <p className="label">Assistant</p>
            <h2 className="h2"><span className="tone">Help when you need</span> the right words</h2>
          </div>
          <div className="trio">
            <article className="tile">
              <div className="tile__art"><AskFragment /></div>
              <h3>Ask the assistant</h3>
              <p>Ask about contacts, messages or general facility procedures. Answers can be wrong, so check what matters.</p>
            </article>
            <article className="tile">
              <div className="tile__art"><DraftFragment /></div>
              <h3>Help me write</h3>
              <p>Get a suggested draft. Use draft puts it in the message field so you can edit it.</p>
            </article>
            <article className="tile">
              <div className="tile__art"><EnhanceFragment /></div>
              <h3>Prompt Enhancer</h3>
              <p>Turn a quick question into a clear one: add details, make it shorter or rewrite it.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container narrow">
          <div className="head">
            <p className="label">FAQ</p>
            <h2 className="h2"><span className="tone">Common</span> questions</h2>
          </div>
          <div className="faq">
            {faq.map((f, i) => (
              <div className={`faq__item${open === i ? " is-open" : ""}`} key={f.q}>
                <button className="faq__q" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                  <span>{f.q}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <div className="faq__a" hidden={open !== i}><p>{f.a}</p></div>
              </div>
            ))}
          </div>
          <p className="faq__more">Need more help? Email us at <a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head">
            <p className="label">Get started</p>
            <h2 className="h2"><span className="tone">Three steps to</span> your first message</h2>
          </div>
          <div className="steps">
            <article className="step">
              <div className="step__art"><StoreBadge className="badge--inline" /></div>
              <h3>{steps[0].title}</h3>
              <p>{steps[0].text}</p>
            </article>
            <article className="step">
              <div className="step__art" aria-hidden="true"><span className="mini-add">+ Add a contact</span></div>
              <h3>{steps[1].title}</h3>
              <p>{steps[1].text}</p>
            </article>
            <article className="step">
              <div className="step__art" aria-hidden="true">
                <span className="mini-compose"><span>Write to Danielle…</span><span className="mini-send">↑</span></span>
              </div>
              <h3>{steps[2].title}</h3>
              <p>{steps[2].text}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
