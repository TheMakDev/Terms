import React from "react";
import { Link } from "react-router-dom"; 

const ESignDisclosure = () => {
  return (
    <div className="terms-container">
      <div className="sidebar">
        <h2>Consumer Terms</h2>
        <ul>
          <li><Link to="/">Link Account Terms</Link></li>
          <li><Link to="/">Financial Connections Terms</Link></li>
          <li><Link to="/">Identity Terms</Link></li>
        </ul>
        <h2>Additional Terms:</h2>
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
        <h1>Electronic Communications and Signature Disclosure</h1>
        
        <p>
          We may send you certain notices, disclosures, or other communications ("Communications") regarding products and services ("Services"). By using the Consumer Services, you agree to this disclosure ("Disclosure"). This Disclosure confirms (i) your consent to receive Communications electronically, and (ii) your consent to the use of electronic signatures. If you choose not to consent to this Disclosure or if you withdraw your consent, you may be unable to use the Consumer Services.
        </p>

        <h2>Communications that May be Provided in Electronic Form</h2>
        <p>
          This Disclosure applies to all Communications made to you with respect to the Services. Communications covered by this Disclosure include, but are not limited to:
          <ul>
            <li>Any disclosure statement or agreement governing your use of the Consumer Services.</li>
            <li>Any disclosure required by federal, state, or local law.</li>
            <li>Receipts and transaction history.</li>
            <li>Letters, notices, or alerts regarding the Consumer Services and any changes to the Consumer Services.</li>
            <li>Federal and state tax statements and documents.</li>
            <li>Other disclosures, notices, or communications in connection with (i) your account, (ii) account maintenance, or (iii) servicing and collection of funds.</li>
          </ul>
        </p>

        <h2>Methods of Providing Communications</h2>
        <p>
          We may provide Communications to you (i) by email, (ii) by making them accessible on Stripe's websites, mobile applications, or mobile websites, and (iii) by making them accessible through hyperlinks provided online and in emails. Communications will be provided online, and you may view them by using email software, browser software, or PDF viewer software. We may also use electronic signatures and obtain them from you.
        </p>

        <h2>Hardware and Software Requirements</h2>
        <p>
          In order to access, view, and retain electronic Communications that we provide to you, you must have:
          <ul>
            <li>An up-to-date device or devices (e.g., computer, tablet, mobile phone, etc.) which has internet access.</li>
            <li>A current, compatible web browser, including Chrome (versions greater than 49), Internet Explorer 11, the last two versions of Firefox, Safari and Edge, or the last two versions of mobile Safari on iOS.</li>
            <li>A valid email account and access to that email account.</li>
            <li>An operating system capable of receiving, accessing, and displaying records and Communications from us in electronic form via text-formatted email or access to our website using a supported browser, including any necessary software (e.g., Adobe to read PDF documents).</li>
            <li>If you wish to store or print any Communications, a device capable of storing and printing Communications.</li>
            <li>If you use a spam filter that blocks or re-routes emails from senders not listed in your email address book, you must add relevant Stripe email accounts to your email address book.</li>
          </ul>
        </p>

        <h2>How to Withdraw Your Consent</h2>
        <p>
          You may withdraw your consent to receive electronic Communications under this Disclosure by writing to us at:
          <br />
          Link │Built by Stripe
          <br />
          Attn: Legal Opt Out
          <br />
          354 Oyster Point Blvd.
          <br />
          South San Francisco, CA 94080
          <br />
          or by contacting us via email at legal-opt-out@link.com. You may only contact us by mail or e-mail to withdraw your consent. Your withdrawal of consent will cancel your ability to receive electronic Communications and may terminate your ability to use the Consumer Services. Your withdrawal of consent to receive electronic Communications will be effective after we have had a reasonable period of time to process your withdrawal.
        </p>

        <h2>Requesting Paper Copies</h2>
        <p>
          You may receive paper copies of electronic Communications from us upon request. To request a paper copy of any Communication at no charge, please contact us via email at support.link.com/contact. In your writing to us, please specify (i) the Communication you would like to receive in paper form, and (ii) your current mailing address.
        </p>

        <h2>Updating Contact Information</h2>
        <p>
          It is your responsibility to keep your contact information, including your primary email address, current. You can update your primary email address or other contact information by logging into your Link Account.
        </p>

        <h2>Federal Law</h2>
        <p>
          You acknowledge and agree that if you reside in the United States, the Consumer Services are subject to the federal Electronic Signatures in Global and National Commerce Act ("E-SIGN Act"), and that you intend for the E-SIGN Act to apply to validate your ability to engage in transactions related to the Consumer Services electronically.
        </p>
      </div>
    </div>
  );
};

export default ESignDisclosure;
