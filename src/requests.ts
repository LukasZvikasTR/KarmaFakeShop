import axios from "axios";

export const createPurchase = async () => {
  console.log("clicked");
  const result = await axios.post("http://localhost:8080/purchases", {
    items: [
      {
        amount: 80 * 100,
        currency: "GBP",
        itemDescription: "Peace sneakers, UK 6",
        itemId: "12112213",
        itemPictureUrl:
          "https://cs1.livemaster.ru/storage/f9/29/649dcf09484b3433acce2c6992d3--handmade-shoes-hand-painted-sneakers-hippie-peace-symbol-rain.jpg",
        quantity: 1
      }
    ],
    userId: "123456"
  });

  if (result.data) window.location.href = result.data.paymentURL;

  return result;
};

export const getPurchase = async (id: string) => {
  const result = await axios.get(`http://localhost:8080/purchases/last`);

  if (result.data) return result.data;

  return result;
};
