import React from "react";
import { Link } from "react-router-dom"; 

const FiatToCryptoOnrampTerms = () => {
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
        <h1>Fiat-to-Crypto Onramp Terms</h1>
        <p>
          Cryptocurrency values can be highly volatile, and trading and holding cryptocurrencies can be extremely risky. Please carefully read the cryptocurrency risk disclosures before using this service.
        </p>

        <p>
          These Stripe Fiat-to-Crypto Onramp Terms (the “Onramp Terms”) are a legal agreement between Stripe Payments Company (“us”, “our”, “we”, or together with Stripe, Inc, “Stripe”) and you, the person who uses Stripe’s funds transfer services (“Transfer Services”) to purchase cryptocurrency (“crypto”) from our cryptocurrency exchange provider (our “Exchange Provider”). With respect to your use of the Transfer Services to purchase crypto from our Exchange Provider, we are responsible solely for transmitting your payment to our Exchange Provider. We are not responsible for fulfilling your cryptocurrency order or transferring cryptocurrencies to you, and we are not a cryptocurrency exchange. At no time does Stripe hold or possess, even beneficially, the crypto being purchased. Our Exchange Provider is solely responsible for fulfilling your cryptocurrency order and transferring cryptocurrencies to you (the “Exchange Services”, together with the Transfer Services, the “Onramp Services”).
        </p>

        <p>
          The Onramp Services (including the Exchange Services and Transfer Services) are End User Services. By accessing and using the Onramp Services, you agree to comply with all aspects of the Onramp Terms. You also agree to comply with the following additional agreements:
        </p>
        <ul>
          <li>Consumer Terms of Service (“Terms”)</li>
          <li>Link Account Terms (“Link Account Terms”)</li>
          <li>Stripe Arbitration Agreement</li>
        </ul>

        <p>
          In the event of a conflict or inconsistency between a provision in these Onramp Terms and any of the other terms, the provisions in these Onramp Terms will govern. Capitalised terms that are not defined in context in these Onramp Terms have the meanings used in the Terms.
        </p>

        <p>
          We may revise these Onramp Terms from time to time. We will use reasonable efforts to notify you of material changes to these Onramp Terms in advance of their effectiveness. The revised Onramp Terms will be effective on the date stated in the revised Onramp Terms. By using the Onramp Services after any revisions become effective, you agree to those changes. If you do not agree to any changes to these Onramp Terms, you must stop using the Onramp Services.
        </p>

        <h2>Accounts</h2>
        <h3>General Eligibility</h3>
        <p>
          If you wish to access the Onramp Services, you must create an account with Stripe (“Account”). This Account is only an account with Stripe, usable for the Onramp Services and other Stripe services. It is not an account with the Exchange Provider, and this Account cannot be used to access the Exchange Provider’s other crypto services directly. To open an Account and use the Onramp Services, you must be an individual and resident of the United States or one of its territories and at least 18 years old, or the age of majority in your state or territory of residence. We may establish additional eligibility criteria at our discretion. To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. When creating your Account, we will ask for your full legal name, date of birth, phone number, address, and any other identifying information we may require to open an Account. We may also ask for a driving license or other identifying documents. If any of this information changes, it is your obligation to update such information. We may also require you to provide additional information as a condition for continued use of the Onramp Services. You represent and warrant that all information you provide to us in connection with the Onramp Services is complete and accurate.
        </p>

        <h3>Account Security</h3>
        <p>
          When you create an Account, you are responsible for maintaining the security of your Account by protecting Account-linked devices and immediately notifying us if you discover or otherwise suspect any security breach related to your Account, receive an Account communication that you do not recognize, receive any security notification concerning your Account notifying you of an event that you do not recognize or if you discover or otherwise suspect any other unauthorized use of or access to your Account. You agree to cooperate fully in any investigation of a potential fraudulent event. You may only register one Account per user.
        </p>

        <h2>Permitted and Restricted Jurisdictions</h2>
        <p>
          Only users located in the United States or territories are eligible to use the Onramp Services. You may not use the Onramp Services if you are located in the state of Hawaii. We or our Exchange Provider may restrict use of the Onramp Services in additional states at any time. You must stop using the Onramp Services if located in the state of Hawaii after you begin using the Onramp Services. We or our Exchange Provider may restrict or terminate your use of the Onramp Services even if you were previously eligible to use the Onramp Services. You agree to notify us in advance of any changes to your state of residence.
        </p>
      </div>
    </div>
  );
};

export default FiatToCryptoOnrampTerms;
