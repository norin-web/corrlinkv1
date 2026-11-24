import { useState, type FormEvent } from "react";
import PageHead from "../components/PageHead";
import { site } from "../content/site";

const topics = ["Help with the app", "Contacts", "Feedback", "Other"];

/**
 * The message field looks like the app's composer: topic chips above, a send button inside.
 * No backend on a static site, so sending opens the visitor's mail app with everything filled in.
 */
export default function Contact() {
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return setError("Write a message first.");
    if (email && !/^\S+@\S+\.\S+$/.test(email)) return setError("That email doesn’t look right.");
    setError("");
    const body = `${message}\n\n${name ? `Name: ${name}\n` : ""}${email ? `Email: ${email}\n` : ""}`;
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`CorrLink: ${topic}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHead label="Contact" tone="Write" rest="to us" sub="Your mail app opens with the message ready to send." />
      <section className="section section--tight">
        <div className="container narrow">
          <form className="compose" onSubmit={onSubmit} noValidate>
            <div className="compose__chips" role="group" aria-label="Topic">
              {topics.map((t) => (
                <button type="button" key={t} className={`chip${topic === t ? " is-on" : ""}`} aria-pressed={topic === t} onClick={() => setTopic(t)}>
                  {t}
                </button>
              ))}
            </div>
            <div className="compose__who">
              <label>
                <span>Name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
              </label>
            </div>
            <div className="compose__box">
              <label className="sr-only" htmlFor="msg">Message</label>
              <textarea
                id="msg"
                placeholder="Write your message…"
                maxLength={1000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={!!error && !message.trim()}
              />
              <div className="compose__bar">
                <span className="compose__count">{message.length} / 1000</span>
                <button type="submit" className="compose__send" aria-label="Send message">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
            {error && <p className="err" role="alert">{error}</p>}
            {sent && <p className="ok" role="status">Your mail app should open with the message. If it didn’t, write to {site.email}.</p>}
          </form>
          <p className="faq__more">Or email us directly: <a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </section>
    </>
  );
}
