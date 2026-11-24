import LegalDoc from "../components/LegalDoc";
import { privacy } from "../content/legal";

export default function Privacy() {
  return <LegalDoc tone="Privacy" title="Policy" doc={privacy} current="/privacy" />;
}
