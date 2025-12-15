import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer & Terms | RoofScale</title>
        <meta name="description" content="Earnings and liability disclaimer for RoofScale agency services." />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-black text-slate-dark mb-2">Disclaimer & Terms</h1>
          <p className="text-muted-foreground mb-12">Earnings and liability disclaimer for agency services</p>

          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">1. Scope of Application</h2>
              <p>These Terms govern the use of roof-scale.com and the business relationship between Roof Scale ("Agency") and its business clients ("Client"). Services are provided exclusively B2B.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">2. Nature of Services (No Guarantee of Results)</h2>
              <p>The Agency provides lead generation and appointment setting services. We provide the Client with the opportunity to hold sales conversations with potential leads. We expressly do not guarantee closed deals, signed contracts, or specific revenue figures. Conversion depends on the Client's own sales skills, offer, and market conditions. Unless explicitly agreed in writing, we do not perform sales closing for the Client.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">3. Earnings Disclaimer</h2>
              <p>Any case studies, testimonials, or revenue examples are exceptional and not guarantees of future results. You acknowledge the Agency makes no promises or warranties about future prospects or earnings.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">4. Liability</h2>
              <p className="mb-4">The Agency is liable for intent or gross negligence under German law. In cases of slight negligence, liability is limited to essential contractual duties (cardinal duties) and to foreseeable, typical damages.</p>
              <p className="bg-muted p-4 rounded-lg text-sm"><strong>US Specific Disclaimer:</strong> TO THE FULLEST EXTENT PERMITTED BY LAW, THE AGENCY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE AGENCY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS).</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">5. External Links</h2>
              <p>Our website may contain links to third‑party websites (e.g., booking tools). We have no influence on their content and assume no liability for them.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">6. Booking & Payment</h2>
              <p>No binding contract is formed by visiting the website. A binding service agreement is concluded only via a separate contract following a strategy call. Payment terms will be defined in that agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">7. Governing Law & Jurisdiction</h2>
              <p>German law applies. Exclusive venue and jurisdiction is Hamburg, Germany.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-dark mb-3">8. Severability Clause</h2>
              <p>If any provision is invalid, the validity of the remaining provisions remains unaffected.</p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Terms;
