import { StoreButton } from "../components/Btn";
import { features, specs } from "../content/site";
import { img } from "../utils/img";

export default function OurApp() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1 className="h-display">CorrLink for iPhone</h1>
          <p className="lead">
            The conversation list, the AI chat, your contacts and settings, in one app.
          </p>
          <div className="hero__actions">
            <StoreButton size="sm" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="app-strip">
            {features.flatMap((f) => f.shots).map((s) => (
              <img key={s.src} src={img(s.src)} alt={s.alt} width={393} height={852} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h-section">Features</h2>
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

      <section className="section">
        <div className="container">
          <h2 className="h-section">Details</h2>
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
