import PageHead from "../components/PageHead";
import Btn from "../components/Btn";

export default function About() {
  return (
    <>
      <PageHead label="About" tone="About" rest="CorrLink" />
      <section className="section section--tight">
        <div className="container narrow">
          <div className="panel prose">
            <p>
              CorrLink is a messaging app for keeping in touch with someone in a correctional facility. The conversation stays in one place: you write, read and reply from your iPhone.
            </p>
            <p>Every message is checked by the facility before it’s delivered, and the app shows where each message is: in review or read.</p>
            <p>The assistant helps you find the right words. It answers questions about contacts, messages and facility rules, and suggests drafts you can edit.</p>
            <div className="row-btns">
              <Btn to="/app" variant="light">See the app</Btn>
              <Btn to="/contact" variant="light">Contact us</Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
