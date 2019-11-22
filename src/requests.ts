import axios from "axios";

export const createPurchase = async () => {
  console.log("clicked");
  const result = await axios.post("http://localhost:8080/purchases", {
    items: [
      {
        amount: 80 * 100,
        currency: "GBP",
        itemDescription: "Nike Air Force 1 '07 Trainers In White, White UK 6",
        itemId: "12112213",
        itemPictureUrl:
          "https://images.asos-media.com/products/nike-air-force-1-07-trainers-in-white/12257646-1-white?$l$",
        quantity: 1
      }
    ],
    userId: "123456"
  });

  if (result.data) window.location.href = result.data.paymentURL;

  return result;
};

export const getPurchase = async (id: string) => {
  const result = await axios.get(`http://localhost:3000/purchases/last`);

  if (result.data) return result.data;

  return result;
};
