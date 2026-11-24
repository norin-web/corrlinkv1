import MailForm from "../components/MailForm";

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1 className="h-display">Contact us</h1>
          <p className="lead">Send a message and it opens in your mail app, ready to send.</p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <MailForm
            subject="CorrLink: message from the website"
            submit="Send message"
            fields={[
              { name: "name", label: "Your name", required: true, auto: "name" },
              { name: "email", label: "Email", type: "email", required: true, auto: "email" },
              { name: "topic", label: "Topic", options: ["Help with the app", "Contacts", "Feedback", "Other"] },
              { name: "message", label: "Message", textarea: true, required: true },
            ]}
          />
        </div>
      </section>
    </>
  );
}
