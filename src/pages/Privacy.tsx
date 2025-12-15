import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | RoofScale</title>
        <meta name="description" content="How RoofScale processes personal data in connection with this website and appointment scheduling." />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-black text-slate-dark mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">How we process personal data in connection with this website and appointment scheduling.</p>
          <p className="text-sm text-muted-foreground mb-12">Effective Date: July 17, 2025</p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">1. General Information</h2>
              <p>We take the protection of your personal data seriously. This Privacy Policy explains how we collect, use, and protect your information when you visit our website. As a German company, we adhere to the GDPR and respect applicable US privacy laws (such as the CCPA/CPRA).</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">2. Controller</h2>
              <p>Roof Scale, Wesselstraße 10, 22399 Hamburg, Germany, info@roof-scale.com</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">3. No Tracking Cookies & No Analytics</h2>
              <p>We do not use third‑party tracking cookies, advertising pixels (e.g., Meta Pixel), or analytics software (e.g., Google Analytics) on this website.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">4. Server Log Files (Hosting)</h2>
              <p className="mb-4">Our website is hosted by Hetzner Online GmbH (Germany). When you visit our site, the server automatically collects and stores information in server log files:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP address (anonymized)</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referrer URL</li>
                <li>Time of the server request</li>
              </ul>
              <p className="mt-4">This data is not combined with other sources. Collection is necessary for stability and security (Legal basis: Art. 6(1)(f) GDPR).</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">5. Contact & Appointment Booking</h2>
              <p className="mb-4">If you contact us via email or click a link to book a strategy call, personal data will be processed.</p>
              <p className="mb-2"><strong>Email Contact:</strong> If you send us an email, your email address and message will be stored to process your inquiry.</p>
              <p><strong>External Booking Tools:</strong> Our links redirect to third‑party scheduling providers. Any data you enter there (name, email, phone) is processed by that provider under its own privacy policy and used to organize the call.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">6. Data Transfer to the USA</h2>
              <p>We serve clients in the USA and may use US‑based tools (e.g., Zoom, Google Workspace). Appropriate safeguards (EU‑US DPF or Standard Contractual Clauses) apply to any transfers.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">7. Your Rights (GDPR & CCPA)</h2>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                <li>Access, deletion, correction, restriction, portability, and objection (GDPR Articles 15–21)</li>
                <li>California (CCPA/CPRA): right to know and delete; we do not sell personal information</li>
              </ul>
              <p>To exercise rights, contact us at info@roof-scale.com.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">8. Security</h2>
              <p>This site uses SSL/TLS encryption to protect the transmission of confidential content.</p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Privacy;
