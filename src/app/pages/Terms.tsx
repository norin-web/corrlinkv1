import { site } from "../content/site";

// The owner's Terms of Use text is not supplied yet. Insert it verbatim here when it arrives.
export default function Terms() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1 className="h-display">Terms of Use</h1>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          <p className="lead">This page is not available yet.</p>
          <p className="muted">Questions: <a className="link" href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </section>
    </>
  );
}
