// Privacy Policy and Terms of Use, verbatim from the operator's documents
// (Privacy_Policy_Elena_Ostermann.docx, Terms_of_Use_Elena_Ostermann.docx).
// Generated from the .docx files; only the markup is ours. The "Last updated" line is not shown on the site.

export type LegalBlock = string | { lead: string; text: string } | { strong: string };
export type LegalSection = { n: number; title: string; body: LegalBlock[] };
export type LegalDoc = { intro: LegalBlock[]; sections: LegalSection[] };

export const privacy: LegalDoc = {
  "intro": [
    "This Privacy Policy explains how Elena Ostermann (the “Operator”, “we”, “us” or “our”), as the operator of the iOS mobile software (the “Application”), handles information when you search for facilities or persons in custody, exchange correspondence, use AI assistance, and manage paid access. It also explains the role of local device storage, external communications systems, OpenAI, Apple and Apphud."
  ],
  "sections": [
    {
      "n": 1,
      "title": "Data controller and scope",
      "body": [
        "Elena Ostermann, Carstennstraße 25H, 12205 Berlin, Germany, is the data controller for personal information processed under the Operator’s responsibility. Privacy requests may be sent to elenaceo@ostermann.click. This Policy applies to the Application and the Operator’s associated backend functions; it does not replace the policies of correctional institutions, communication providers, Apple, OpenAI or Apphud where they independently process information."
      ]
    },
    {
      "n": 2,
      "title": "Information processed when you use the Application",
      "body": [
        "The types of information depend on the features you choose to use. The Application does not require a separate user account and does not ask you to provide an email address, phone number or password for registration.",
        {
          "lead": "Correspondence and contact information.",
          "text": "Text messages, letters, photographs that you select, facility names, inmate names or reference numbers, contact requests, and delivery, review or approval status information may be processed to provide communication functions."
        },
        {
          "lead": "Locally stored information.",
          "text": "Conversation history, selected photographs and AI chat history are stored on your device. Local copies remain under your device’s storage and backup settings."
        },
        {
          "lead": "Technical connection information.",
          "text": "The backend may process an app-generated device key (UUID), platform or build information, technical session credentials, recipient or contact references and message request identifiers so that service requests can be routed and responses matched. These technical values are not used for cross-app advertising tracking."
        },
        {
          "lead": "Subscription information.",
          "text": "Apple and Apphud may process subscription status, transaction or entitlement details and necessary app or device-related technical information to determine whether paid features should be available. Payment-card details are handled by Apple, not collected directly by the Operator."
        },
        {
          "lead": "AI requests.",
          "text": "Text entered into the AI assistant is transmitted directly to OpenAI to produce a response. The Application does not send photographs or video to OpenAI through its AI-chat function."
        }
      ]
    },
    {
      "n": 3,
      "title": "Purposes and legal bases",
      "body": [
        "We process information to perform the service you request: displaying contact and facility information, transmitting communications, maintaining message and approval statuses, supporting AI assistance and recognizing subscription entitlements (GDPR Article 6(1)(b), where applicable). We may also process limited technical information for system reliability, abuse prevention and security (Article 6(1)(f)), comply with binding legal obligations (Article 6(1)(c)), or rely on consent where a specific feature legally requires it (Article 6(1)(a)). Where legitimate interests apply, they concern maintaining a secure, functional communication service without unnecessary profiling. Users should not submit unrelated sensitive records or third-party personal information without a lawful reason to do so."
      ]
    },
    {
      "n": 4,
      "title": "Backend processing and local retention",
      "body": [
        "The Operator uses its own backend infrastructure hosted in the United States. Messages, photographs and contact requests may pass through that infrastructure for transmission, routing, service interaction and status handling. The Application is designed to retain user-facing correspondence and photographs locally, rather than as a permanent archive on an Operator-maintained content server. Short-lived processing, technical status or routing records, and information retained by recipient institutions or external platforms may nevertheless occur as needed to operate communications or satisfy applicable requirements. The Application cannot control how an institution or recipient retains content after it is delivered."
      ]
    },
    {
      "n": 5,
      "title": "AI chat and OpenAI",
      "body": [
        "AI assistance is provided using OpenAI’s gpt-4o-mini model. When you send a text request, its contents are transmitted from the Application directly to OpenAI, rather than through the Operator’s own backend. Your AI chat history is retained locally on your device. The Operator does not maintain a separate server archive of AI prompts or generated replies. OpenAI may process the requests it receives under its applicable terms and privacy practices. Do not include unnecessary sensitive personal details in AI prompts, and verify AI answers independently before relying on them."
      ]
    },
    {
      "n": 6,
      "title": "Subscriptions, Apphud and Apple",
      "body": [
        "The Application currently offers subscriptions through Apple’s in-app purchase system and uses ApphudSDK for managing purchase status and entitlements. Apple and Apphud may receive purchase or subscription records and technical information required for validation and administration. The Operator does not directly collect payment-card details. Apphud may generate subscription-related operational reports as part of this function; the Application does not use Firebase, a separate third-party behavioral analytics service, advertising tracking or a third-party crash-reporting SDK. You can review the privacy practices of Apple and Apphud through their own policies."
      ]
    },
    {
      "n": 7,
      "title": "Permissions and notifications",
      "body": [
        "The current version does not request broad system permissions for Camera, Microphone, Contacts, Location or the photo library. When you choose to attach an image using an Apple system picker, the selected content is made available for that action without a general photo-library access grant. The Application does not use Apple Push Notification service or Firebase Cloud Messaging and does not store remote push notification tokens. Relevant activity and status updates may be shown within the Application when available; these are not remote push notifications."
      ]
    },
    {
      "n": 8,
      "title": "Recipients and disclosures",
      "body": [
        "Information may be disclosed only as needed for the features you use, including to: (a) supported communication infrastructure and the relevant correctional institution or intended recipient when correspondence is submitted; (b) OpenAI, for text-based AI requests you send; (c) Apple and Apphud, for purchases and subscription administration; and (d) hosting, connectivity or other technical processors necessary to provide the Application. Information may also be disclosed where required by law, lawful governmental process or to protect rights and safety. The Operator does not sell personal information or use it for personalized third-party advertising."
      ]
    },
    {
      "n": 9,
      "title": "Storage period and deletion",
      "body": [
        "Locally stored messages, images and AI chat history remain on your device until removed using the functions available in the Application or through your device’s storage-management options. Removing the Application may remove local files, but data included in Apple or other user-controlled backups may remain under those services’ settings. The Operator has no separate account to close. Operational connection, transaction, routing or status information, where held by processors or external services, is retained only for the period justified by its operational purpose, applicable provider terms or legal obligations. The Operator cannot erase records independently held by correctional institutions, intended recipients, Apple or OpenAI."
      ]
    },
    {
      "n": 10,
      "title": "Device identifiers and network information",
      "body": [
        "The Application does not use the advertising identifier (IDFA), ask for an IDFV-based profile, or use device identifiers to track you across other companies’ apps or websites. A technical UUID may be exchanged with the Operator’s backend to maintain an application session without a personal login. Like other internet services, servers and networking providers necessarily receive connection information, potentially including IP addresses, while carrying requests; such information is not intended to form a user marketing profile. No separate advertising system is operated in the Application."
      ]
    },
    {
      "n": 11,
      "title": "International processing and security",
      "body": [
        "The Operator is based in Germany, while its backend operates in the United States. Use of OpenAI, Apple, Apphud or other service infrastructure may also involve data processing outside your country. Where European data protection law requires an international-transfer safeguard, the relevant transfer must be supported by an appropriate legal mechanism. We use reasonable technical and organizational measures intended to protect information during processing and transmission; however, no internet or device environment can be guaranteed absolutely secure. You should protect your device with appropriate access controls."
      ]
    },
    {
      "n": 12,
      "title": "Your privacy rights",
      "body": [
        "Depending on where you live and the circumstances of the processing, you may request access, rectification, erasure, restriction, portability or information about personal data processed under our control, and you may object to processing based on legitimate interests. Where processing relies on consent, you may withdraw that consent without affecting earlier lawful processing. Requests may be sent to elenaceo@ostermann.click. We may need to verify the nature of a request and will respond as required by applicable law. If information exists only on your device, we may not possess a server copy that can be remotely deleted or supplied. You may also lodge a complaint with a competent supervisory authority, including the Berlin Commissioner for Data Protection and Freedom of Information."
      ]
    },
    {
      "n": 13,
      "title": "Users aged 16 and over",
      "body": [
        "The Application is intended for persons aged 16 or older. Users below the age of legal majority must obtain any parental or guardian permission required by applicable law. We do not knowingly solicit personal information from children under 16. If you believe information about a younger child has been submitted improperly, contact us so that we can assess and address the matter within our control."
      ]
    },
    {
      "n": 14,
      "title": "Signed brand authorization",
      "body": [
        "The CORRLINKS trademark and related brand elements are used by the Operator pursuant to an executed trademark license and brand authorization agreement with Advanced Technologies Group, LLC. The agreement authorizes use of the licensed branding within its agreed scope. It does not make Advanced Technologies Group, LLC the controller of all personal information processed by the Application; responsibility for data handled by independent communication services and correctional institutions depends on their respective roles and legal obligations."
      ]
    },
    {
      "n": 15,
      "title": "Changes to this Policy",
      "body": [
        "This Policy may be updated to reflect new features, third-party services, legal requirements or operational practices. The current version will be made available with an updated “Last updated” date, and significant changes will be communicated where required by applicable law."
      ]
    },
    {
      "n": 16,
      "title": "Contact",
      "body": [
        "For privacy questions or requests regarding personal information processed under the Operator’s responsibility, please contact:",
        {
          "strong": "Elena Ostermann  ·  Individual operator"
        },
        "Carstennstraße 25H, 12205 Berlin, Germany",
        "Support and privacy inquiries: elenaceo@ostermann.click"
      ]
    }
  ]
};

export const terms: LegalDoc = {
  "intro": [
    "These Terms of Use (the “Terms”) govern access to and use of the iOS mobile software and associated functions made available by Elena Ostermann (the “Operator”, “we”, “us” or “our”) (the “Application”). By accessing or using the Application, you agree to these Terms. If you do not agree, do not use the Application."
  ],
  "sections": [
    {
      "n": 1,
      "title": "Eligibility and permitted access",
      "body": [
        "The Application is intended for users aged 16 and older. Users who are under the age of legal majority must have any parental or guardian authorization required by the laws applicable to them, particularly before purchasing a subscription. You must have legal capacity or appropriate permission to use the Application, and must comply with all rules relevant to your communications. Use is prohibited where unlawful."
      ]
    },
    {
      "n": 2,
      "title": "What the Application does",
      "body": [
        "The Application provides tools to search for supported correctional facilities and individuals in custody, organize approved contacts, submit contact requests, exchange text and photographs when permitted, view message or approval statuses, search locally available conversations, and access an optional text-based AI assistant. Features may differ by facility, jurisdiction, service availability, and the user’s eligibility. Information displayed about a facility or an individual may be incomplete, delayed or changed by external providers."
      ]
    },
    {
      "n": 3,
      "title": "Correctional-facility rules and message delivery",
      "body": [
        "Communication involving people in custody is governed by each applicable institution, platform and public authority. Messages, photographs and contact requests may be monitored, reviewed, delayed, rejected, restricted or otherwise handled under those rules. An indication that content has been sent, received or submitted does not guarantee delivery to or reading by the intended recipient. We cannot override screening decisions, approval processes, account eligibility, institutional schedules or service disruptions. You must not attempt to circumvent identity checks, contact restrictions, security controls or communication policies."
      ]
    },
    {
      "n": 4,
      "title": "No Application account",
      "body": [
        "The Application currently does not require you to open a separate account with the Operator or supply an email address, telephone number or password to use its core functions. Certain communications may require technical device-level access credentials or authorization by external services and institutions. If a feature depends on an outside service, availability and eligibility remain subject to that service’s requirements."
      ]
    },
    {
      "n": 5,
      "title": "User content and acceptable use",
      "body": [
        "You are responsible for the accuracy, lawfulness and appropriateness of any names, inmate or facility identifiers, messages, letters, photographs and requests you submit. You retain rights in your own content. You authorize the limited technical use of that content as necessary to transmit, display and process it for the feature you request. You must not submit unlawful, threatening, harassing, exploitative, deceptive or infringing material; impersonate others; disclose another person’s information without authority; or use the Application to facilitate prohibited conduct. We may restrict functionality where necessary to enforce these Terms or comply with law and institutional requirements."
      ]
    },
    {
      "n": 6,
      "title": "AI assistance",
      "body": [
        "The Application offers an AI chat assistant using OpenAI’s gpt-4o-mini model. Text you submit for an AI response is sent directly to OpenAI. The assistant may help explain general procedures or draft correspondence, but its output may be inaccurate, outdated or unsuitable for a particular facility. AI responses are not legal advice, professional advice, official correctional guidance or a guarantee that a message will be approved. Verify consequential information with the relevant institution or a qualified professional, and avoid entering unnecessary confidential or sensitive details."
      ]
    },
    {
      "n": 7,
      "title": "Subscriptions and payment",
      "body": [
        "At present, paid functionality is offered through auto-renewing subscriptions purchased using Apple’s in-app purchase system. Available features, subscription period, price, billing frequency and any applicable introductory terms are presented before purchase. Unless cancelled, a subscription renews automatically under the conditions displayed by Apple at purchase. Apple processes payments, renewals and eligible refunds, while Apphud assists with subscription status and entitlement management. To cancel renewal, use your Apple Account subscription settings; uninstalling the Application does not cancel a subscription. Subscription access generally continues through the paid period after cancellation, subject to Apple’s terms, refunds and applicable law. The Operator may add other purchase options in the future, with their terms disclosed before availability. The Application does not currently display third-party advertising."
      ]
    },
    {
      "n": 8,
      "title": "Signed brand authorization",
      "body": [
        "The CORRLINKS trademark and associated brand elements are the property of Advanced Technologies Group, LLC or its applicable rights holders. The Operator uses the CORRLINKS brand under an executed trademark license and brand authorization agreement with Advanced Technologies Group, LLC. That agreement authorizes licensed brand use for the Application within its agreed scope; it does not transfer ownership of the trademark to the Operator. The Application is operated by the Operator, and references to correctional facilities or communication networks do not alter the separate responsibilities of those organizations."
      ]
    },
    {
      "n": 9,
      "title": "External systems and availability",
      "body": [
        "The Application may interact with service infrastructure and other third-party systems that facilitate correspondence and related status information. Such providers may have their own operating requirements, privacy practices, access limits and service conditions. We do not guarantee uninterrupted service, compatibility with every institution, access to every recipient, approval of contact requests, or uninterrupted availability of external systems. We may modify, suspend or discontinue features for technical, operational, security, legal or third-party reasons, subject to applicable consumer rights."
      ]
    },
    {
      "n": 10,
      "title": "Privacy and local information",
      "body": [
        "The handling of personal information is described in the Privacy Policy. Conversation history, selected photographs and AI chat history are intended to be retained on your device, while the Application’s backend in the United States processes information needed to support service functions. The ability to erase local content depends on the Application and your device settings. You are responsible for protecting access to your device and any copies you choose to make."
      ]
    },
    {
      "n": 11,
      "title": "Intellectual property and limited use license",
      "body": [
        "Except for rights in content that you lawfully provide, the software, interfaces and original materials in the Application are owned by the Operator or relevant licensors. Subject to these Terms, you receive a personal, limited, revocable, non-exclusive, non-transferable license to use the Application on Apple-branded devices that you own or control, as permitted by Apple’s usage rules. You may not reverse engineer, redistribute, sell, sublicense, misuse or interfere with the Application except as mandatory law permits."
      ]
    },
    {
      "n": 12,
      "title": "Warranties and liability",
      "body": [
        "To the extent permitted by applicable law, the Application and information provided through it are supplied on an “as available” basis, without any promise that messages will be delivered, facilities will accept communications, AI results will be error-free or third-party systems will remain online. Nothing in these Terms excludes liability for fraud, intentional misconduct, personal injury where exclusion is unlawful, or other liabilities that cannot be limited by law. Consumer remedies and statutory warranty rights that apply in your country remain unaffected. Any other limitation of liability applies only to the extent allowed by those mandatory protections."
      ]
    },
    {
      "n": 13,
      "title": "Changes, termination and disputes",
      "body": [
        "We may update these Terms to reflect changes in the Application, applicable law, service providers or business practices. Material changes will be made available through an appropriate notice or publication method; continued use after they take effect constitutes acceptance where permitted by law. You may stop using the Application at any time, without affecting obligations arising before cessation. These Terms are governed by German law, without depriving consumers of mandatory protections afforded by the law of their habitual residence. Disputes may be brought before courts having jurisdiction under applicable consumer-protection rules."
      ]
    },
    {
      "n": 14,
      "title": "Apple App Store provisions",
      "body": [
        "These Terms are between you and the Operator, not Apple Inc. Apple is not responsible for operation, maintenance or support of the Application, nor for addressing product claims or third-party intellectual-property claims, except as required by law. The Operator is responsible for those matters to the extent applicable. Apple and its subsidiaries are third-party beneficiaries of the mobile-use provisions of these Terms and may enforce them as such. You must also comply with applicable Apple terms and any third-party service conditions."
      ]
    },
    {
      "n": 15,
      "title": "Contact",
      "body": [
        "For support, questions about these Terms, or concerns about content or functionality, contact the Operator using the details below.",
        {
          "strong": "Elena Ostermann  ·  Individual operator"
        },
        "Carstennstraße 25H, 12205 Berlin, Germany",
        "Support and privacy inquiries: elenaceo@ostermann.click"
      ]
    }
  ]
};
