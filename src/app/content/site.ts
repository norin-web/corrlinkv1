// Every fact about the app and the site lives here. Pages read only from this file.
// Every feature, label and status below is taken from the app's own screens.

export const site = {
  brand: "CorrLink",
  email: "elenaceo@ostermann.click",
  year: new Date().getFullYear(),
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
  { icon: "lock", title: "Private assistant", text: "The assistant is private and not shared with facilities." },
  { icon: "search", title: "Search contacts", text: "Find anyone in your contacts by name." },
  { icon: "type", title: "Up to 1,000 characters", text: "Each message can be up to 1,000 characters long." },
  { icon: "image", title: "Photos", text: "Add a photo to a message from the composer." },
  { icon: "bell", title: "Notifications", text: "Get notified when a message is delivered or if it’s rejected." },
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
  ["Messages", "Checked by the facility before they are delivered"],
  ["Message length", "Up to 1,000 characters"],
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
    a: "Every message is checked by the facility before it’s delivered. This usually takes a few hours, sometimes up to 2 days. You’ll get a notification when it’s delivered or if it’s rejected.",
  },
  {
    q: "How does Help me write work?",
    a: "It suggests a draft. Use draft puts it in the message field so you can edit it before sending.",
  },
];
