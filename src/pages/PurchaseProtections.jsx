import React from "react";
import { Link } from "react-router-dom"; 

const PurchaseProtections = () => {
  return (
    <div className="terms-container">
      <div className="sidebar">
        <h2>Consumer Terms</h2>
        <ul>
          <li><Link to="/linkAcount">Link Account Terms</Link></li>
          <li><Link to="/">Financial Connections Terms</Link></li>
          <li><Link to="/">Identity Terms</Link></li>
        </ul>
        <h2>Additional Terms:</h2>
        <ul>
          <li><Link to="/arbitration">Arbitration Agreement</Link></li>
          <li><Link to="/esign">E-Sign Agreement</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/link-payments">Link Bank Payments</Link></li>
          <li><Link to="/authorization">Authorization</Link></li>
          <li><Link to="/acceptable-use">Acceptable Use Policy</Link></li>
          <li><Link to="/purchase-protections">Link Purchase Protections</Link></li>
          <li><Link to="/unclaimed-funds">Unclaimed Funds</Link></li>
        </ul>
      </div>

      <div className="content">
        <h1>Link Purchase Protections</h1>
        <p><strong>Effective on 14 August 2024</strong></p>
        
        <p>
          These Link Purchase Protection Terms ("Purchase Protection Terms") are a legal agreement between us ("us", "our", "we", or "Stripe") and you (the individual that makes an Eligible Purchase (as defined below in section 1)) that governs the purchase protections benefits (collectively the “Purchase Protection Benefits”) we may make available to you in our sole discretion in accordance with these Purchase Protection Terms. By using Link to make an Eligible Purchase, you agree to be bound by these Purchase Protection Terms with respect to Purchase Protection Benefits, and any new features or modifications to the Purchase Protection Benefits will also be subject to these Purchase Protection Terms without any notice or consent required from you.
        </p>

        <p>
          The terms of the Link Consumer Terms of Service are incorporated into these Purchase Protection Terms. Capitalised terms not defined in these Purchase Protection Terms have the meaning given to them in the Link Consumer Terms of Service. In the event of any inconsistency between these Purchase Protection Terms and the Link Consumer Terms of Service, these Purchase Protection Terms prevail and apply to the extent of the inconsistency.
        </p>

        <p>
          The Purchase Protection Benefits are provided to you under a group policy issued to us as the named insured. Technology Insurance Company, Inc. (the “Insurer”) is the insurer for the insurance policy under which the Purchase Protection Benefits are provided. Cover Genius Insurance Services, LLC (dba XCover) is the insurance agency for the Insurer for the issuance and administration in all respects of the insurance policy and the Purchase Protection Benefits extended to you under these Purchase Protection Terms. XCover handles all claims administration and customer support in relation to the Purchase Protection Benefits - see more on XCover here. The group policy may be terminated or allowed to expire in accordance with its terms at any time without notice to you. We and our affiliates have no obligation to you with respect to the Purchase Protection Benefits and are not obligated to provide any payment to you including if the Insurer refuses or fails to make payment of the Purchase Protection Benefits to you.
        </p>

        <h2>1. Scope and Eligibility</h2>
        <p>
          Link Purchase Protection Benefits is currently only open to residents of the United States. If you purchase an item using Link from a merchant that is eligible for purchase protection (an “Eligible Purchase”), the Eligible Purchase will be subject to the Purchase Protection Benefits. These Purchase Protection Benefits are free to you and are subject to the coverage terms set out in the Insurer’s Guide to Benefits (“Coverage Terms”).
        </p>
        <p>
          Eligibility is based on, among other things, the merchant that you purchase goods from and the goods in question. When you pay for goods using Link, this is not a guarantee that your purchase is an Eligible Purchase. Eligible Purchases are always subject to the Coverage Terms for each type of purchase protection.
        </p>
        <p>
          An Eligible Purchase might be protected under more than one Purchase Protection Benefit, but not all Purchase Protection Benefits will apply to each Eligible Purchase.
        </p>

        <h2>2. Duration of Cover; Termination</h2>
        <p>
          Coverage of the relevant Purchase Protection Benefits will begin when you make the Eligible Purchase and continue for the applicable period stated in the Coverage Terms. Different Purchase Protection Benefits have different cover periods -- see the Coverage Terms for more details.
        </p>
        <p>
          Once an Eligible Purchase is covered under a Purchase Protection Benefit and subject to these Purchase Protection Terms, the Eligible Purchase remains covered for the period for each Purchase Protection Benefits indicated under the specific terms and details for such Purchase Protection Benefits set out in the Coverage Terms. You should note that the coverages for an Eligible Purchase under the Purchase Protection Benefits are limited in time periods, number of claims that you might make in a certain period and up to certain amounts, as provided in the Coverage Terms.
        </p>
        <p>
          If your Link Account is terminated or deleted by you or us:
          <ul>
            <li>All Purchase Protection Benefits terminate immediately (except for claims you initiated before the Link Account termination);</li>
            <li>You will no longer be able to make any new claims for purchases made prior to the termination or deletion of your Link Account.</li>
          </ul>
          We reserve the right to modify or terminate the Purchase Protection Benefits programme and availability of Purchase Protection Benefits to you for any reason (acting in our sole discretion) and at any time.
        </p>

        <h2>3. Submitting a Claim</h2>
        <p>
          All claims must be submitted to and administered by the Purchase Protection Benefits claims administrator, XCover. Stripe does not administer or adjudicate your claim.
        </p>
        <p>
          All information you submit in connection with a claim must be true, accurate, and complete.
        </p>

        <h2>4. Privacy</h2>
        <p>
          The Link Privacy Policy applies to all data processed in connection with these Purchase Protection Terms. The third parties involved in providing the purchase protection benefits to you are Stripe’s service providers for purposes of the Link Privacy Policy.
        </p>

        <h2>5. Dispute Resolution</h2>
        <p>
          If you have any questions, concerns, or complaints about your claim, please contact XCover directly at claims@xcover.com. If you have questions about your Link Account, please contact Link consumer support at support.link.com/contact.
        </p>
        <p>
          As between you and Stripe, you and us agree to resolve any disputes in connection with these Purchase Protection Terms in accordance with the dispute resolution provisions of the Consumer Terms of Service. The Arbitration Agreement applies to these Purchase Protection Terms.
        </p>

        <h2>6. Coverage Terms</h2>
        <p>
          The Purchase Protection Benefits are subject to the Coverage Terms.
        </p>
        <p>
          This Purchase Protection Benefits program is based on a programme that is usually given to holders of credit cards issued by a financial institution. Subject to these Purchase Protection Terms, Link has arranged the Purchase Protection Benefits for your benefit so you can enjoy these protections when you pay for purchases using Link. As such, in the Insurer’s Coverage Terms when you read references to benefits applying to, “You”, “Your,” “cards issued by Link”, “covered cards”, ‘cardholders’ or similar, this refers to you, the owner of a Link Account.
        </p>
      </div>
    </div>
  );
};

export default PurchaseProtections;
