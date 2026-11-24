import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose">
        <h1 className="h-display">Page not found</h1>
        <p className="lead">The page you are looking for does not exist.</p>
        <div className="hero__actions">
          <Btn to="/" variant="ghost">Back to home</Btn>
        </div>
      </div>
    </section>
  );
}
