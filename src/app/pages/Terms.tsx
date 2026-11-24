import PageHead from "../components/PageHead";
import { site } from "../content/site";

export default function Terms() {
  return (
    <>
      <PageHead label="Legal" tone="Terms" rest="of Use" />
      <section className="section section--tight">
        <div className="container narrow">
          <div className="panel prose">
            <p>This page is not available yet.</p>
            <p>Questions: <a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
