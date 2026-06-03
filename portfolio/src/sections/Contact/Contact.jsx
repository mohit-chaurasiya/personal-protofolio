import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

import ContactSocials from "./ContactSocials";

import ContactForm from "./ContactForm";
import ContactTip from "./ContactTip";

export default function Contact() {
  return (
    <section id="contact" className="px-4 md:px-10 lg:px-20 py-28">
      <ContactHeader />

      <div className="grid lg:grid-cols-[380px_1fr] gap-8 mt-16">
        {/* LEFT */}

        <div className="space-y-6">
          <ContactInfo />

          <ContactSocials />
          <ContactTip />
        </div>

        {/* RIGHT */}

        <ContactForm />
      </div>
    </section>
  );
}
