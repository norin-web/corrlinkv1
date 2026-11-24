import PageHead from "../components/PageHead";
import Phone from "../components/Phone";
import { StoreBadge } from "../components/Btn";
import { phones, specs } from "../content/site";

const screens = [
  { ...phones.messages, title: "Messages", text: "All conversations, with All, Unread and In review filters." },
  { ...phones.chat, title: "Chat", text: "Each sent message is marked Read once it’s been read." },
  { ...phones.helpWrite, title: "Help me write", text: "A suggested draft you can use and edit before sending." },
  { ...phones.contacts, title: "Contacts", text: "Approved, Waiting for approval and Not available." },
];

export default function OurApp() {
  return (
    <>
      <PageHead label="The app" tone="CorrLink" rest="for iPhone" sub="Messages, chat, contacts and a writing assistant in one app.">
        <StoreBadge />
      </PageHead>

      <section className="section section--tight">
        <div className="container">
          <div className="screens">
            {screens.map((s) => (
              <figure className="screens__item" key={s.src}>
                <Phone src={s.src} alt={s.alt} />
                <figcaption>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="head">
            <p className="label">Details</p>
            <h2 className="h2"><span className="tone">What to</span> expect</h2>
          </div>
          <dl className="specs">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
