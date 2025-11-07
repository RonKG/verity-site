import Layout from "../components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "60px 20px",
        color: "#f0f0f0"
      }}>
        <h1 style={{
          fontSize: "1.6rem",
          marginBottom: "0.75rem",
          fontWeight: "400",
          color: '#f5f5f5'
        }}>
          Terms of Service
        </h1>

        <p style={{ color: '#cfcfcf', marginBottom: '1rem' }}>Last updated: November 7, 2025</p>

        <div style={{
          fontSize: "0.92rem",
          lineHeight: "1.7",
          color: "#d0d0d0"
        }}>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>1. Scope and Acceptance</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of The Registry platform (the "Service"). By using the Service you agree to these Terms and any policies referenced herein. If you do not agree, do not use the Service.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>2. Definitions</h2>
            <p style={{ marginBottom: '0.35rem' }}><strong>"The Registry"</strong> — The company and platform providing verified property listings, market analytics and related services.</p>
            <p style={{ marginBottom: '0.35rem' }}><strong>"User"</strong> — Any person or entity accessing the Service.</p>
            <p><strong>"Data"</strong> — Listings, transaction samples, analytics, and any content made available through the Service (including API or bespoke extracts).</p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>3. Eligibility</h2>
            <p>
              You must be at least 18 years old and legally capable of entering into contracts in order to use the Service. By using the Service you represent and warrant you meet these eligibility requirements.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>4. Permitted Use & Access</h2>
            <p>
              Subject to these Terms, The Registry grants you a limited, non-exclusive, non-transferable right to access and use the Service for personal or internal business purposes. Any commercial reuse, resale, redistribution, scraping or systematic extraction of Data without a separate commercial license is strictly prohibited.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>5. Data Quality, Verification & Use</h2>
            <p style={{ marginBottom: 0 }}>
              The Registry combines internal verification processes with third-party records to produce Data that is accurate to the best of our capabilities. We label primary sources and apply internal verification badges where applicable. However, all Data is provided "as-is" for informational purposes and should not be the sole basis for material decisions without independent due diligence.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Averages, indices and trend summaries exclude outliers according to our internal methodology. For bespoke extracts, raw data access, or commercial licensing please contact <a href="mailto:research@theregistry.co.ke" style={{ color: '#f5b942', textDecoration: 'none' }}>research@theregistry.co.ke</a>.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>6. API, Licensing & Commercial Use</h2>
            <p>
              Access to bulk data, APIs, or bespoke reports is subject to a separate licensing agreement. Unless you have a written agreement with The Registry, you may not (a) reproduce or redistribute Data for commercial purposes, (b) build competing services using our Data, or (c) sell access to Data derived from the Service.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              We offer commercial data services and APIs under fee-based contracts. Contact our research team for terms, SLAs, and pricing.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>7. Intellectual Property</h2>
            <p>
              All content on the Service, including text, graphics, logos, icons, and software, is the intellectual property of The Registry or its licensors and is protected by applicable copyright, trademark and other laws. Nothing in these Terms grants you any ownership rights in the Service or its content.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>8. User Content & Listings</h2>
            <p>
              If you submit listings, comments or other content, you represent that you have the rights to do so. You grant The Registry a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content to provide and promote the Service.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>9. Payments and Fees</h2>
            <p>
              Certain features, data extracts or commercial services may require payment. Fees, billing cycles, refunds and suspension for non-payment will be governed by the applicable order form or commercial agreement.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>10. Privacy</h2>
            <p>
              Our Privacy Policy explains how we collect and process personal data. By using the Service you consent to our collection and use of personal data as described in the <a href="/privacy" style={{ color: '#f5b942', textDecoration: 'none' }}>Privacy Policy</a>.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>11. Disclaimers & Limitation of Liability</h2>
            <p>
              The Service is provided "as-is" and The Registry disclaims all warranties to the fullest extent permitted by law. We do not guarantee completeness, accuracy, suitability or availability of Data. To the maximum extent permitted by law, The Registry and its affiliates will not be liable for indirect, incidental, consequential or punitive damages arising out of your use of the Service.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold The Registry and its officers, directors, employees and agents harmless from any claims arising out of your violation of these Terms or your use of the Service.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>13. Termination</h2>
            <p>
              We may suspend or terminate your access for breach of these Terms or for any conduct we determine is harmful to the Service. Termination does not limit any other remedies we may have.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>14. Changes to Terms</h2>
            <p>
              We may revise these Terms from time to time. Material changes will be posted with an updated "Last updated" date and, where required by law, communicated to affected users.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>15. Governing Law & Disputes</h2>
            <p>
              These Terms are governed by the laws of the Republic of Kenya without regard to conflict of law principles. Any dispute arising under these Terms will be subject to the exclusive jurisdiction of the competent courts in Nairobi, Kenya, unless the parties agree otherwise in writing.
            </p>
          </section>

          <section style={{ marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>16. Contact</h2>
            <p>
              For questions about these Terms, data licensing, or bespoke data services please contact: <a href="mailto:research@theregistry.co.ke" style={{ color: '#f5b942', textDecoration: 'none' }}>research@theregistry.co.ke</a>.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
}