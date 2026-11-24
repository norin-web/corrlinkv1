// Every fact about the app and the site lives here. Pages read only from this file.
// Every feature, label and status below is taken from the app's own screens.

export const site = {
  brand: "CorrLink",
  email: "elenaceo@ostermann.click",
  year: new Date().getFullYear(),
  // From the Privacy Policy and Terms of Use.
  operator: "Elena Ostermann",
  location: "Berlin, Germany",
  disclaimer:
    "The CORRLINKS trademark and associated brand elements are the property of Advanced Technologies Group, LLC or its applicable rights holders, and are used under a trademark license and brand authorization agreement.",
};

export const app = {
  id: "6832091020",
  url: "https://apps.apple.com/app/id6832091020",
  platform: "iPhone",
  languages: "English and Spanish",
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

export const phones = {
  messages: { src: "/images/phone-messages.webp", alt: "Messages: all conversations with All, Unread and In review filters" },
  chat: { src: "/images/phone-chat.webp", alt: "Chat with Danielle Brooks, messages marked Read" },
  helpWrite: { src: "/images/phone-help-write.webp", alt: "Help me write: a suggested draft with Use draft and Rewrite" },
  contacts: { src: "/images/phone-contacts.webp", alt: "Contacts grouped into Approved, Waiting for approval and Not available" },
};

// Six short facts around the phone in the Features section.
export const features = [
  { icon: "lock", title: "Assistant history", text: "Your chats with the assistant are saved on your iPhone, not on our servers." },
  { icon: "search", title: "Search contacts", text: "Find anyone in your contacts by name." },
  { icon: "type", title: "Up to 1,000 characters", text: "Each message can be up to 1,000 characters long." },
  { icon: "image", title: "Photos", text: "Add a photo to a message from the composer." },
  { icon: "read", title: "Status updates", text: "See in the app when a message is in review, delivered or rejected." },
  { icon: "globe", title: "English and Spanish", text: "Switch the app language in Settings." },
];

export const steps = [
  { icon: "download", title: "Download CorrLink", text: "Get the app on the App Store." },
  { icon: "userPlus", title: "Add a contact", text: "Tap Add a contact. Approved contacts can receive messages." },
  { icon: "send", title: "Write your first message", text: "Type it yourself or ask Help me write for a draft." },
];

export const specs: [string, string][] = [
  ["Platform", app.platform],
  ["Languages", app.languages],
  ["Messages", "May be reviewed by the facility before delivery"],
  ["Message length", "Up to 1,000 characters"],
  ["Account", "Not required"],
  ["Age", "16 and older"],
  ["Purchases", "Subscriptions through the App Store"],
];

export const faq = [
  {
    q: "How do I add a contact?",
    a: "Open Contacts and tap Add a contact. A contact can receive messages once it is Approved.",
  },
  {
    q: "Why can’t I message a contact?",
    a: "Contacts marked Waiting or Transferred are shown separately and can’t receive messages.",
  },
  {
    q: "Why is my message still in review?",
    a: "Facilities may review messages before delivery, and review can take time. The status in the app changes when the message is delivered or if it’s rejected. Delivery isn’t guaranteed.",
  },
  {
    q: "How does Help me write work?",
    a: "It suggests a draft. Use draft puts it in the message field so you can edit it before sending.",
  },
  {
    q: "Who sees my chats with the assistant?",
    a: "Your questions are sent to OpenAI to get an answer. The chat history is saved on your iPhone, not on our servers.",
  },
  {
    q: "Do I need an account?",
    a: "No. CorrLink doesn’t ask for an email address, phone number or password to use its core features.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Open your Apple Account subscription settings. Deleting the app doesn’t cancel a subscription. Access usually continues until the end of the paid period.",
  },
];
