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
        <h1>Arbitration Agreement</h1>
        <p>
          <strong>PLEASE READ THE FOLLOWING SECTION CAREFULLY.</strong> IF YOU RESIDE IN THE UNITED STATES, IT REQUIRES YOU TO RESOLVE DISPUTES BETWEEN YOU AND STRIPE ON AN INDIVIDUAL BASIS THROUGH ARBITRATION, PROHIBITS YOU FROM MAINTAINING OR PARTICIPATING IN A CLASS ACTION LAWSUIT, WAIVES YOUR RIGHT TO A JURY TRIAL, AND LIMITS THE TIME IN WHICH A CLAIM MAY BE BROUGHT. THIS SECTION OF THE TERMS SHALL BE REFERRED TO AS THE "ARBITRATION AGREEMENT."
        </p>

        <h2>Scope of Arbitration Agreement</h2>
        <p>
          If you reside in the United States, you agree that any and all disputes or claims that have arisen or may arise between you and Stripe or that relate in any way to the Consumer Services, including without limitation federal and state statutory claims, common law claims, and those based in contract, tort, fraud, misrepresentation, or any other legal theory, shall be resolved exclusively through final and binding individual arbitration, rather than in court, except that you or we may assert claims in small claims court...
        </p>
        {/* Add subsequent sections here as needed */}
        
        <h2>Informal Resolution</h2>
        <p>
          You and Stripe agree that good-faith informal efforts to resolve disputes often can result in a prompt, low-cost, and mutually beneficial outcome. You and Stripe therefore agree that, before either you or Stripe demand individual arbitration against the other...
        </p>
        
        <h2>Arbitration Rules and Forum</h2>
        <p>
          This Arbitration Agreement is governed by the Federal Arbitration Act ("FAA") in all respects. If for whatever reason the rules and procedures of the FAA cannot apply, the state law governing arbitration agreements in the state in which you reside shall apply...
        </p>

        <h2>Waiver of Jury Trial</h2>
        <p>
          YOU AND STRIPE WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND RECEIVE A JUDGE OR JURY TRIAL. You and Stripe are instead electing to have claims and disputes resolved by arbitration...
        </p>

        <h2>Waiver of Class or Consolidated Actions</h2>
        <p>
          EXCEPT AS EXPRESSLY AGREED TO IN THIS AGREEMENT, YOU AND STRIPE AGREE TO WAIVE ANY RIGHT TO RESOLVE CLAIMS WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT ON A CLASS, COLLECTIVE, REPRESENTATIVE, OR PRIVATE ATTORNEY GENERAL BASIS...
        </p>

        <h2>One Year Limitations Period</h2>
        <p>
          You agree that any claim against Stripe must be brought within one year of the date on which you first become aware, or reasonably should have become aware, of facts giving rise to such claim...
        </p>

        <h2>Opt Out</h2>
        <p>
          Within 30 days of first accepting the Terms of Service containing this Arbitration Agreement, you can choose to reject this Arbitration Agreement by sending us a written opt-out notice by post...
        </p>

        <h2>Severability and Survival</h2>
        <p>
          If, after exhaustion of all appeals, any of these prohibitions on non-individualised relief, class, collective, representative, private attorney general, or consolidated relief is found to be unenforceable...
        </p>

        <h2>Court Proceedings</h2>
        <p>
          Subject to and without waiver of the Arbitration Agreement, you and we each submit to exclusive personal jurisdiction and agree that any judicial proceedings (other than small claims actions) will be brought in the federal courts...
        </p>
      </div>
    </div>
  );
};

export default AcceptableUsePolicy;
