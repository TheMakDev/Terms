import React from "react";
import { Link } from "react-router-dom";
// import "./AcceptableUsePolicy.css"; // Import the CSS file for styling

const AcceptableUsePolicy = () => {
  return (
    <div className="terms-container">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="content">
        <h1>Acceptable Use Policy</h1>
        <p>
          This page details acceptable usage policies, including prohibited activities and guidelines for ethical platform use.
        </p>
        <p>The Consumer Services are only for non-commercial use. You must not, and must not allow others to:</p>
        <ul className="policy-list">
          <li>Breach these Terms or any other agreement between you and us;</li>
          <li>
            Violate any law, statute, ordinance, or regulation (for example, those governing financial services, consumer protections, unfair competition, anti-discrimination, or false advertising);
          </li>
          <li>Infringe our or any third party's Intellectual Property Rights;</li>
          <li>
            Create or control more than one personal account for yourself without our express authorization, through, among other methods, using a name that is not yours, using a temporary email address or phone number, or providing any other falsified personal information;
          </li>
          <li>Provide false, inaccurate, or misleading information;</li>
          <li>
            Refuse to cooperate in an investigation or provide confirmation of your identity or any information you provide to us;
          </li>
          <li>
            Attempt to double dip during the course of a dispute by receiving or attempting to receive money from both us and the recipient of a payment, bank, or card issuer for the same transaction;
          </li>
          <li>
            Use the Consumer Services in a manner that results in or may result in complaints, disputes, claims, reversals, chargebacks, fees, fines, penalties, or other liability or losses;
          </li>
          <li>
            Use your Consumer Services in a manner that we, Visa, Mastercard, American Express, Discover, or any other electronic funds transfer network reasonably believes to be an abuse of the card system or a violation of card association or network rules;
          </li>
          <li>Facilitate any viruses, trojan horses, malware, worms, or other harmful routines;</li>
          <li>Use an anonymizing proxy or automated tools without prior written permission;</li>
          <li>Interfere with or disrupt our systems or services;</li>
          <li>Take any action that may cause us to lose any of the services from our Internet service providers, payment processors, or other suppliers or service providers;</li>
          <li>Use the Consumer Services to test credit card behaviours, or make excessive or unexplainable transactions;</li>
          <li>Harass and/or threaten our employees, agents, or other users;</li>
          <li>Use the Consumer Services for a commercial or business purpose or in any way other than your own personal purposes;</li>
          <li>Use the Consumer Services in a way that violates prohibitions relevant sanctions authorities impose;</li>
          <li>Create content, products, or services using any part of the Consumer Services;</li>
          <li>
            Use or reproduce any part of the Consumer Services (including any trademarks presented in the Consumer Services), except as law expressly allows;
          </li>
          <li>Work around any of the technical limitations of the Consumer Services, or enable functionality that is disabled or prohibited;</li>
          <li>Decompile, extract source code, or reverse engineer the Consumer Services;</li>
          <li>
            Transfer or move software, technology, or services (including our software or encryption software) to or from any country in a way that law does not permit.
          </li>
        </ul>
        <p>By accepting these terms, you agree to comply with all policies and guidelines stated above.</p>
      </div>
    </div>
  );
};

export default AcceptableUsePolicy;
