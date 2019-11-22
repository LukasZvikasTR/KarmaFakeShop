import React, { FC, useEffect, useState } from "react";
import Heading from "../Heading";
import { SeparatorLine } from "../../commonStyles";
import { PaymentButton } from "../ShoppingCart";
import { getPurchase } from "../../requests";

const Purchases: FC<{}> = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const purchaseId = urlParams.get("purchaseId");

  const [purchaseInfo, setPurchaseInfo] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const result = await getPurchase(purchaseId || "");

      setLoading(false);
      if (result) {
        console.log("RE", result);
        setPurchaseInfo(result);
      }
    };
    fetchData();
  }, []);

  const renderMainHeading = () => (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
      }}
    >
      <div
        style={{
          fontSize: 25,
          fontWeight: 700
        }}
      >
        MY ORDERS
      </div>
    </div>
  );

  const renderOrderDate = () => (
    <div
      style={{
        fontSize: 18,
        fontWeight: 700,
        marginTop: 20
      }}
    >
      <div>
        ORDER DATE:
        <div>22 Nov, 2019</div>
      </div>
    </div>
  );

  const renderOderNum = () => (
    <div
      style={{
        fontSize: 18,
        fontWeight: 700,
        marginTop: 20
      }}
    >
      PAYMENT DUE DATE:
      <div>22 Dec, 2019</div>
    </div>
  );

  const renderEstimatedDelivery = () => (
    <div
      style={{
        fontSize: 25,
        fontWeight: 700,
        marginTop: 20
      }}
    >
      WE'VE GOT IT!
      <div
        style={{
          backgroundColor: "white",
          marginTop: 5,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "green",
            marginBottom: 5,
            width: 150
          }}
        >
          Estimated delivery
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "green",
            width: 150
          }}
        >
          26 Nov, 2019
        </div>
      </div>
    </div>
  );

  return loading || !purchaseInfo ? (
    <div> Loading...</div>
  ) : (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        paddingRight: 20,
        paddingLeft: 20
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 0.3,
          height: "100%",
          marginRight: 20,
          backgroundColor: "white",
          alignItems: "center",
          paddingTop: 50,
          flexDirection: "column"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              borderRadius: 100,
              height: 150,
              width: 150,
              backgroundColor: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 40
            }}
          >
            JD
          </div>
          <div style={{ fontSize: 26, marginLeft: 20 }}>Hi, John Doe</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginTop: 40
          }}
        >
          <div
            style={{
              margin: 15,
              padding: 10,
              backgroundColor: "whitesmoke",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 26,
              textAlign: "center"
            }}
          >
            Account Review
          </div>
          <div
            style={{
              padding: 10,
              margin: 15,
              backgroundColor: "whitesmoke",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 26,
              textAlign: "center"
            }}
          >
            Orders
          </div>
          <div
            style={{
              padding: 10,
              margin: 15,
              backgroundColor: "whitesmoke",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 26,
              textAlign: "center"
            }}
          >
            My Returns
          </div>
          <div
            style={{
              padding: 10,
              margin: 15,
              backgroundColor: "whitesmoke",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 26,
              textAlign: "center"
            }}
          >
            Change Password
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "whitesmoke",
          display: "flex",
          flexDirection: "column",
          flex: 0.7
        }}
      >
        {renderMainHeading()}
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 140,
            display: "flex",
            paddingBottom: 30
          }}
        >
          <div
            style={{
              paddingRight: 190,
              paddingLeft: 190,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%"
            }}
          >
            {renderEstimatedDelivery()}
            {renderOrderDate()}
            {renderOderNum()}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <SeparatorLine width="80%" />
        </div>
        <div
          style={{
            paddingTop: 40,
            paddingBottom: 40,
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            paddingRight: 190,
            paddingLeft: 190
          }}
        >
          <div>
            <img
              style={{ width: 150, height: 195, marginRight: 30 }}
              src="https://images.asos-media.com/products/nike-air-force-1-07-trainers-in-white/12257646-1-white?$l$"
            />
            <div style={{ marginTop: 10, fontSize: 25, fontWeight: "bold" }}>
              Item Description
            </div>
            <div style={{ marginTop: 10, fontSize: 20, fontWeight: 500 }}>
              Nike Air Force 1 '07 Trainers In White, White UK 6
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {purchaseInfo.status.split("_")[0].toLowerCase() === "paid" && (
              <PaymentButton
                style={{
                  backgroundColor: "green",
                  color: "white",
                  marginBottom: 20,
                  border: "none"
                }}
              >
                {purchaseInfo.status.split("_")[0].toLowerCase() !== "paid"
                  ? "Payment pending"
                  : "Paid"}
              </PaymentButton>
            )}

            <PaymentButton
              style={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                marginBottom: 20
              }}
            >
              View Order{" "}
            </PaymentButton>
            {purchaseInfo.status.split("_")[0].toLowerCase() !== "paid" && (
              <PaymentButton
                onClick={() =>
                  (window.location.href = `http://localhost:8080/pay/${purchaseId}`)
                }
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black"
                }}
              >
                Pay now{" "}
              </PaymentButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
