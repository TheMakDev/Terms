import React from "react";
import { Link } from "react-router-dom";

const UnclaimedFunds = () => {
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
          <li><Link to="/link-payments">Link Bank Payments</Link></li>
          <li><Link to="/authorization">Authorization</Link></li>
          <li><Link to="/acceptable-use">Acceptable Use Policy</Link></li>
          <li><Link to="/fiat-to-crypto">Fiat-to-Crypto Onramp Terms</Link></li>
          <li><Link to="/purchase-protections">Purchase Protections</Link></li>
          <li><Link to="/unclaimed-funds">Unclaimed Funds</Link></li>
        </ul>
      </div>
    <div className="content">
      <h1>Unclaimed Funds</h1>
      <p>
        This page provides information about unclaimed funds, how to claim them, and timelines for their availability.
      </p>
      <h2>Effective on 30 October 2024</h2>
      <p>
        By submitting your information, you authorise Link to assist you with completing and submitting the form for your claim to recover unclaimed property from the state for the property or properties listed above. You agree that you are submitting your own claim on your own behalf for unclaimed property to which you are legally entitled, and that Link's only role is to provide technology that facilitates the preparation and submission of your claim to the state.
      </p>
      <p>
        You represent that you have provided the information for your claim, the information is not false, misleading or fraudulent, and you believe you have a valid claim as owner of the property you are seeking to recover. If the state requests additional information from you, you are solely responsible for providing any such information, without further involvement by Link. You acknowledge that Link has not made any representation to you about the likelihood of success of your claim; your claim may be granted or denied by the state based on the information you submit. If you disagree with the decision of the state, that is a matter solely between you and the state.
      </p>
      <p>
        Link does not charge any fee for the use of Link technology for you to prepare and submit your claim. Regardless of whether your claim is granted or denied, Link will receive no compensation with respect to your claim. Link is not acting as your agent. Link is not acting as a “locator” or performing “asset recovery” on your behalf, nor is Link locating, delivering, or recovering property. Your use of the Link technology to prepare your claim is at your own election; at any time, you may prepare and submit your claim by other means.
      </p>
      <p>
        Link does not review or verify the accuracy of the information you submit with your claim. If you provide inaccurate information to a government agency and/or seek to recover monies that do not belong to you, you may be subject to sanction, up to and including criminal penalties for fraud and other crimes.
      </p>
      <p>
        By using this service, you consent to Link collecting, using, and sharing your personal data, including your name, address, social security number, and date of birth, in accordance with Link’s Privacy Policy. Link will use your social security number and date of birth solely for the following purposes:
      </p>
      <ul>
        <li>Verifying your identity with state databases;</li>
        <li>Submitting unclaimed property claims on your behalf.</li>
      </ul>
      <p>
        Link will share your personal data with relevant state agencies to submit and process your unclaimed property claims. Link will retain your personal data only for as long as necessary to submit the unclaimed property claim. After the claim process is completed, your social security number and date of birth will be deleted after 30 days, unless otherwise required by law.
      </p>
    </div>
    </div>
  );
};

export default UnclaimedFunds;
