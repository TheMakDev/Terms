import React from "react";
import { Link } from "react-router-dom"; 

const AcceptableUsePolicy = () => {
  return (
    <div className="terms-container">
      <div className="sidebar">
        <h2>Consumer Terms</h2>
        <ul>
          <li><Link to="/">Link Account Terms</Link></li>
          <li><Link to="/">Financial Connections Terms</Link></li>
          <li><Link to="/">Identity Terms</Link></li>
        </ul>
        <h2>Additional Terms</h2>
        <ul>
          <li><Link to="/arbitration">Arbitration Agreement</Link></li>
          <li><Link to="/esign">E-Sign Agreement</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/link-payments">Link Bank Payments Authorization</Link></li>
          <li><Link to="/acceptable-use">Acceptable Use Policy</Link></li>
          <li><Link to="/fiat-to-crypto">Fiat-to-Crypto Onramp Terms</Link></li>
          <li><Link to="/purchase-protections">Purchase Protections</Link></li>
          <li><Link to="/unclaimed-funds">Unclaimed Funds</Link></li>
        </ul>
      </div>

      <div className="content">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated: 16th January 2024</strong></p>
        <p>This Privacy Policy will be updated on 16 January 2025. Please review the upcoming changes here.</p>

        <p>Welcome to Stripe! We provide financial infrastructure for the internet. Individuals and businesses of all sizes use our technology and services to facilitate purchases, accept payments, send payouts, and manage online businesses.</p>

        <p>This Privacy Policy (“Policy”) describes the Personal Data we collect, how we use and share it, along with details on how you can contact us with privacy-related enquiries. Additionally, the Policy outlines your rights as a data subject and choices you have, including the right to object to certain usages of your Personal Data by us. For further information about our privacy practices, including our Supplemental US Notice, please refer to our Link Privacy Centre.</p>

        <h2>1. Personal Data We Collect and How We Use and Share It</h2>
        <p>We collect Personal Data, such as your name, email address, IP address, and payment information, to facilitate transactions and provide our services. This data is used to process payments, send payouts, and support business operations. We may also share your data with trusted third parties, including financial institutions and partners.</p>

        <h2>2. More Ways We Collect, Use, and Share Personal Data</h2>
        <p>We may collect data automatically when you interact with our services or website. This includes device information, usage data, and cookies. We use this data to improve user experience, monitor services, and perform analytics. Additionally, we may share data with our business partners for marketing and analytics purposes.</p>

        <h2>3. Legal Bases for Processing Personal Data</h2>
        <p>We process your Personal Data based on your consent, our contractual obligations, and our legitimate business interests. In certain cases, we may also process your data for legal compliance purposes.</p>

        <h2>4. Your Rights and Choices</h2>
        <p>You have rights regarding your Personal Data, including the right to access, correct, or delete your information. You may also object to or restrict certain processing activities. If you are in the European Union or the United Kingdom, you have additional rights under applicable data protection laws.</p>

        <h2>5. Security and Data Retention</h2>
        <p>We implement strict security measures to protect your Personal Data. We retain your data only as long as necessary to fulfill the purposes outlined in this Policy, or as required by law.</p>

        <h2>6. International Data Transfers</h2>
        <p>Your Personal Data may be transferred to and processed in countries outside your jurisdiction. We take steps to ensure that any such transfers are compliant with applicable data protection laws.</p>

        <h2>7. Updates and Notifications</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes through the website or by other means, as appropriate.</p>

        <h2>8. Jurisdiction-Specific Provisions</h2>
        <p>If you reside in a jurisdiction with specific data protection laws, those provisions apply in addition to the information provided in this Policy.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions or concerns about your privacy, or if you wish to exercise your rights, please contact us using the details provided in the Link Privacy Centre.</p>

        <h2>10. US Consumer Privacy Notice</h2>
        <p>This section explains specific privacy practices related to consumers residing in the United States. If you are a US resident, please review this section for additional details on your rights under US law.</p>
      </div>
    </div>
  );
};

export default AcceptableUsePolicy;
