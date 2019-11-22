import React from "react";
import Header from "./components/Header";
import EmailSection from "./components/EmailSection";
import DeliveryAddressSection from "./components/DeliveryAddressSection";
import PaymentSection from "./components/PaymentSection";
import ShoppingCart from "./components/ShoppingCart";
import Purchases from "./components/Purchases";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      {window.location.pathname.includes("checkout") && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 0.7 }}>
            <EmailSection />
            <DeliveryAddressSection />
            <PaymentSection />
          </div>
          <div style={{ flex: 0.3 }}>
            <ShoppingCart />
          </div>
        </div>
      )}
      {window.location.pathname.includes("purchases") && <Purchases />}
    </div>
  );
};

export default App;
