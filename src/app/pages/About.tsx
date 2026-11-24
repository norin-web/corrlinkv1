import Btn from "../components/Btn";

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1 className="h-display">About CorrLink</h1>
        </div>
      </section>
      <section className="section">
        <div className="container prose">
          <p className="lead">
            CorrLink is a messaging app for keeping in touch with someone in a correctional facility. The conversation stays in one place: you write, read and reply from your iPhone.
          </p>
          <p>
            The AI assistant helps you draft letters and improve your prompts.
          </p>
          <p>
            Messages are checked by the facility before they are delivered.
          </p>
          <div className="hero__actions">
            <Btn to="/app" variant="ghost">See the app</Btn>
            <Btn to="/contact" variant="ghost">Contact us</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
