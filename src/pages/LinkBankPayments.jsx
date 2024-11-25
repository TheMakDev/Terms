import React from "react";
import { Link } from "react-router-dom"; 

const LinkBankPaymentsAuthorization = () => {
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
        <h1>Link Bank Payments Authorization</h1>
        <p>
          <strong>Last updated:</strong> 24 March 2023
        </p>
        
        <p>
          Link bank payments transfer funds from the bank account you have saved to your merchant (i.e. our Business User) via an ACH debit to pay for your purchase from that merchant.
        </p>

        <p>
          When you order or purchase products or services from your merchant and agree to pay for those products or services with a bank account you connected to your Link account, you authorise your merchant and if applicable, your merchant’s affiliated entities (collectively, "Merchant"), to debit that specified bank account for the amount specified by the Merchant for those products or services, pursuant to the Merchant’s website and terms, until this authorisation is revoked.
        </p>

        <p>
          If you use the Merchant’s services or purchase additional products periodically pursuant to Merchant’s terms, you authorise this Merchant to debit your bank account periodically, until this authorisation is revoked.
        </p>

        <h2>Revocation of Authorization</h2>
        <p>
          For merchants that you pay using your Link account, you may cancel an authorisation to debit a bank account you connected to your Link account at any time by deleting that bank account from your Link account at least three (3) days prior to a scheduled debit. You also may cancel this authorisation at any time by providing notice to the Merchant that you will no longer be paying using your Link account at least thirty (30) days prior to a scheduled debit.
        </p>
      </div>
    </div>
  );
};

export default LinkBankPaymentsAuthorization;
