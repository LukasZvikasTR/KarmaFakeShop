import React, { FC } from "react";
import Heading from "../Heading";
import { SeparatorLine } from "../../commonStyles";
import styled from "styled-components";
import { createPurchase } from "../../requests";
import Karma from "../../karmasign.png";

export const PaymentContent = styled.div`
  background-color: #fff;
`;

export const PaymentButton = styled.button`
  padding: 10px;
  border-width: 2px;
  border-color: whitesmoke;
  background-color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

const ShoppingCart: FC<{}> = () => (
  <div style={{ padding: 50, backgroundColor: "#fff", marginRight: 20 }}>
    <Heading headingTitle="1 ITEM" />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "inherit",
        marginTop: 20
      }}
    >
      <img
        style={{ width: 155, height: 175, marginRight: 30 }}
        src="https://cs1.livemaster.ru/storage/f9/29/649dcf09484b3433acce2c6992d3--handmade-shoes-hand-painted-sneakers-hippie-peace-symbol-rain.jpg"
      />
      <div>
        <div style={{ marginBottom: 10 }}>£ 80.00</div>
        <div style={{ marginBottom: 10 }}>Peace sneakers</div>
        <div style={{ marginBottom: 10 }}>White UK 6</div>
        <div>Qty: 1</div>
      </div>
    </div>
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
        marginBottom: 15
      }}
    >
      <div>Subtotal</div>
      <div> £80.00</div>
    </div>
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
      }}
    >
      <div>Delivery</div>
      <div>Free</div>
    </div>
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
      }}
    >
      <div>TOTAL TO PAY</div>
      <div>£80.00</div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 20
      }}
    >
      <SeparatorLine width="90%" />
    </div>
    <PaymentContent>
      <Heading headingTitle="PAYMENT TYPE" />
      <PaymentButton>Add credit/debit card</PaymentButton>
      <div
        style={{
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 80,
          backgroundColor: "inherit",
          fontWeight: 700,
          fontSize: 14
        }}
      >
        OR
      </div>
      <PaymentButton
        onClick={createPurchase}
        style={{
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center"
        }}
      >
        <img src={Karma} style={{ marginRight: 8, height: 25, width: 25 }} />
        Pay Later with Karma
      </PaymentButton>
    </PaymentContent>
  </div>
);

export default ShoppingCart;
