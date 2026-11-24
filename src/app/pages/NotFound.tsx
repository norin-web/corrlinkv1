import PageHead from "../components/PageHead";
import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <PageHead label="404" tone="Page" rest="not found" sub="The page you are looking for does not exist.">
      <Btn to="/" variant="light">Back to home</Btn>
    </PageHead>
  );
}
