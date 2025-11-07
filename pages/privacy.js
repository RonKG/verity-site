import Layout from "../components/Layout";

export default function Privacy() {
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
          Privacy Policy
        </h1>

        <p style={{ color: '#cfcfcf', marginBottom: '1rem' }}>Last updated: November 7, 2025</p>

        <div style={{
          fontSize: "0.92rem",
          lineHeight: "1.7",
          color: "#d0d0d0"
        }}>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>1. Overview</h2>
            <p>
              This Privacy Policy describes how The Registry collects, uses, shares and protects personal information when you use our platform. We prioritise data minimisation, verification and transparency in our research and commercial services.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>2. Information We Collect</h2>
            <p style={{ marginBottom: '0.4rem' }}>
              We collect information you provide directly (e.g., name, email, phone, listing details) and information collected automatically (e.g., usage data, device and browser information). We also ingest third-party and public records for verification purposes; such records may include property titles and transaction notices.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>3. Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies to operate the Service, to analyze trends, and to personalize your experience. You can control cookie preferences through your browser; disabling cookies may limit some functionality.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>4. How We Use Information</h2>
            <p style={{ marginBottom: '0.4rem' }}>
              We use data to provide and improve our services, verify listings, detect fraud, communicate with users, personalize content, and for research and analytics. Aggregated or anonymised Data may be used for internal reporting or commercial products.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>5. Sharing & Disclosure</h2>
            <p>
              We may share information with: (a) service providers who perform services on our behalf; (b) partners and data licensors under contract; (c) law enforcement or regulators when required by law; and (d) acquirers in the event of a corporate transaction. We require partners to maintain appropriate data protection standards.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>6. Data Retention</h2>
            <p>
              We retain personal data as long as necessary to provide services, meet legal obligations, resolve disputes, and enforce our agreements. Retention periods vary by data type and purpose; aggregated research datasets are retained according to our internal policies.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>7. Your Rights</h2>
            <p style={{ marginBottom: '0.4rem' }}>
              Subject to applicable law, you may have rights to access, correct, delete, or export your personal data, and to object to certain processing. To exercise these rights or ask questions, contact <a href="mailto:research@theregistry.co.ke" style={{ color: '#f5b942', textDecoration: 'none' }}>research@theregistry.co.ke</a>.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>8. Security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect Data. However, no online system is perfectly secure; we cannot guarantee absolute security of information transmitted to or from the Service.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>9. Third-Party Services</h2>
            <p>
              The Service integrates with third-party analytics and mapping providers (e.g., Recharts, Leaflet). These providers may collect information independently; we encourage you to review their privacy policies.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>10. International Transfers</h2>
            <p>
              We may transfer data internationally for processing and storage. We take steps to ensure adequate protections are in place when transfers occur across borders.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>11. Children</h2>
            <p>
              The Service is not directed to children under 18. We do not knowingly collect personal data from minors; if we learn we have collected such data we will take steps to delete it.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>12. Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will post the updated policy with a revised &quot;Last updated&quot; date and, where appropriate, notify users of material changes.
            </p>
          </section>

          <section style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "#f5f5f5" }}>13. Contact</h2>
            <p>
              For privacy questions, data requests, or licensing enquiries contact: <a href="mailto:research@theregistry.co.ke" style={{ color: '#f5b942', textDecoration: 'none' }}>research@theregistry.co.ke</a>.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
}