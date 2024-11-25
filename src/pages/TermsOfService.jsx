import React from "react";
import { Link } from "react-router-dom";
// import "./TermsOfService.css";

const TermsOfService = () => {
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
      <h1>1. Introduction and Scope</h1>
        <p>
          These Consumer Terms of Service ("<strong>Terms of Service</strong>" or "<strong>Terms</strong>") are a legal agreement between us ("<strong>us</strong>", "<strong>our</strong>", "<strong>we</strong>", or "<strong>Stripe</strong>") and you, the individual who uses one or more of the products and services we offer for your personal use under these Terms ("<strong>you</strong>" or "<strong>your</strong>"), which are Link, Financial Connections, and Identity (each, a "<strong>Consumer Service</strong>"). 
        </p>
        <p>
          The following Terms are a legally binding agreement between you and us, and it describes the terms and conditions applicable to your use of our Consumer Services. By using our Consumer Services, you agree to be bound by these Terms, and any new features or tools that are added will also be subject to these Terms. The Stripe entity with which you are entering into these Terms depends on your location and can be found <a href="#stripe-entity">here</a>.
        </p>
        <p>
          These general Terms apply to all of our Consumer Services that reference these Terms. Businesses that are using our products and services for business purposes ("<strong>Business Users</strong>") are subject to the <a href="#business-terms">Stripe Services Agreement</a>.
        </p>

        <h2>2. Additional Terms That Apply to You</h2>
        <p>
          Additional terms and conditions may apply based on your use case. Please review them carefully.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
