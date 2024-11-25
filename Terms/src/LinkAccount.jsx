import React from 'react';
import { Link } from "react-router-dom"; 

const LinkAccount = () => {
  return (
    <div className="terms-container">
      <div className="sidebar">
        <h2>Consumer Terms of Service</h2>
        <ul>
          <li><a href="/linkAccount">Link Account Terms</a></li>
          <li><a href="#">Financial Connections Terms</a></li>
          <li><a href="#">Identity Terms</a></li>
        </ul>
      </div>

      <div className="content">
        <h1>Welcome!</h1>
        <p><strong>Effective on 31 July 2023</strong></p>

        <h2>1. Introduction and Scope</h2>
        <p>These Consumer Terms of Service ("Terms of Service" or "Terms") are a legal agreement between us ("us", "our", "we", or "Stripe") and you, the individual who uses one or more of the products and services we offer for your personal use under these Terms (referred to as "you" or "your"), which are Link, Financial Connections, and Identity (each, a "Consumer Service").</p>

        <h2>2. Additional Terms That Apply to You</h2>
        <ul>
          <li>Arbitration Agreement: IF YOU ARE LOCATED IN THE UNITED STATES...</li>
          <li>Link E-Sign Disclosure: You agree to the Link E-Sign Disclosure...</li>
          <li>Privacy Policy: You acknowledge the Privacy Policy...</li>
          <li>Product-Specific Terms: A Consumer Service may have specific terms...</li>
          <li>Acceptable Use Policy: Your use of a Consumer Service is subject...</li>
        </ul>

        <h2>3. Eligibility</h2>
        <p>You may only enter into these Terms if you are over the age of majority...</p>

        <h2>4. Stripe's Role</h2>
        <p>Any contract of sale made using the Consumer Services is directly between you and the Business User...</p>
      </div>
    </div>
  );
};

export default LinkAccount;
