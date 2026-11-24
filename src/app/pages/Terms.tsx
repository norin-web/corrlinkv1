import LegalDoc from "../components/LegalDoc";
import { terms } from "../content/legal";

export default function Terms() {
  return <LegalDoc tone="Terms" title="of Use" doc={terms} current="/terms" />;
}
