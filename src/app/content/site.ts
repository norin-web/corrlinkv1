// Every fact about the app and the site lives here. Pages read only from this file.
// Every feature and status below is taken from a screen in the app design (Figma, file q43BHHMfPMpiRxGbtRgmgP).

export const site = {
  brand: "CorrLink",
  email: "elenaceo@ostermann.click",
  year: new Date().getFullYear(),
};

export const app = {
  id: "6832091020",
  // Not published yet: the store button stays "Coming soon" until this is set to
  // https://apps.apple.com/app/id6832091020 (the iTunes lookup returns nothing until release).
  url: null as string | null,
  platform: "iPhone",
  languages: "English and Spanish",
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export const features = [
  {
    title: "Writing help in the AI chat",
    text: "Ask the assistant about contacts, messages or facility rules, or let it help you write a letter. Prompt Enhancer improves your prompt with Add details, Shorter or Rewrite.",
    shots: [
      { src: "/images/screen-ai-answer.webp", alt: "AI chat with an answer about message review" },
      { src: "/images/screen-prompt-enhancer.webp", alt: "Prompt Enhancer sheet with options" },
    ],
  },
  {
    title: "Contacts with a status",
    text: "Contacts with Approved status can receive messages. Those marked Waiting or Transferred are listed under Not available yet.",
    shots: [{ src: "/images/screen-new-message.webp", alt: "New message screen with contact statuses" }],
  },
  {
    title: "Settings",
    text: "Change the language, set notifications, and open Help & FAQ or Contact support from Settings.",
    shots: [{ src: "/images/screen-settings.webp", alt: "Settings screen" }],
  },
];

export const steps = [
  { title: "Download the app", text: "CorrLink is coming soon to the App Store." },
  { title: "Add a contact", text: "Tap Add a contact. The contact can receive messages once it is Approved." },
  { title: "Send your first message", text: "Open the conversation and write. If you like, ask the AI chat for help first." },
];

export const specs: [string, string][] = [
  ["Platform", app.platform],
  ["Languages", app.languages],
  ["Messages", "Checked by the facility before they are delivered"],
];

export const faq = [
  {
    q: "How do I add a contact?",
    a: "Open Contacts and tap Add a contact. A contact can receive messages once it is Approved.",
  },
  {
    q: "Why can't I message a contact?",
    a: "A contact marked Waiting or Transferred is listed under Not available yet and cannot receive messages for now.",
  },
  {
    q: "Why is my message still in review?",
    a: "Every message is checked by the facility before it's delivered. This usually takes a few hours, sometimes up to 2 days.",
  },
  {
    q: "How does the writing help work?",
    a: "Ask the AI chat for help with a letter or a question. Prompt Enhancer improves your prompt with Add details, Shorter or Rewrite.",
  },
];
