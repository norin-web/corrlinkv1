import Btn, { StoreButton } from "../components/Btn";
import { features, steps, site } from "../content/site";
import { img } from "../utils/img";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <h1 className="h-display">Write to someone in a correctional facility from your iPhone.</h1>
            <p className="lead">
              CorrLink keeps your conversation in one place. Messages are checked by the facility before they are delivered.
            </p>
            <div className="hero__actions">
              <StoreButton />
              <Btn to="/app" variant="ghost">See the app</Btn>
            </div>
          </div>
          <div className="hero__shot">
            <img src={img("/images/screen-messages-default.webp")} alt="Conversation list in CorrLink" width={393} height={852} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h-section">What you can do</h2>
          <div className="features">
            {features.map((f, i) => (
              <div className={`feature${i % 2 ? " feature--flip" : ""}`} key={f.title}>
                <div className="feature__text">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
                <div className="shots">
                  {f.shots.map((s) => (
                    <img key={s.src} src={img(s.src)} alt={s.alt} width={393} height={852} loading="lazy" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--band">
        <div className="container">
          <h2 className="h-section">How to start</h2>
          <ol className="steps">
            {steps.map((s) => (
              <li className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container closing">
          <h2 className="h-section">Questions before you download?</h2>
          <p className="lead">Write to <a className="link" href={`mailto:${site.email}`}>{site.email}</a> or read the answers in Support.</p>
          <div className="hero__actions">
            <Btn to="/support" variant="ghost">Support</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
