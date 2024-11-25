import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsOfService from "./pages/TermsOfService";
import ArbitrationAgreement from "./pages/ArbitrationAgreement";
import AcceptableUsePolicy from "./pages/AcceptableUsePolicy";
import UnclaimedFunds from "./pages/UnclaimedFunds";
import ESignAgreement from "./pages/ESignAgreement";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LinkBankPayments from "./pages/LinkBankPayments";
import FiatToCryptoTerms from "./pages/FiatToCryptoTerms";
import PurchaseProtections from "./pages/PurchaseProtections";
import LinkAccount from "./LinkAccount";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TermsOfService />} />
        <Route path="/linkAccount" element={<LinkAccount />} />
        <Route path="/arbitration" element={<ArbitrationAgreement />} />
        <Route path="/acceptable-use" element={<AcceptableUsePolicy />} />
        <Route path="/unclaimed-funds" element={<UnclaimedFunds />} /> 
        <Route path="/esign" element={<ESignAgreement />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/link-payments" element={<LinkBankPayments />} />
        <Route path="/fiat-to-crypto" element={<FiatToCryptoTerms />} />
        <Route path="/purchase-protections" element={<PurchaseProtections />} />
        
        
      </Routes>
    </Router>
  );
};

export default App;
