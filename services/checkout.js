import endPoints from "./api";

const getOrderTime = async () => {
  try {
    const response = await fetch(endPoints.checkout.getOrderTime);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const sendWhatsappMessage = async (payload) => {
  try {
    const response = await fetch(endPoints.checkout.sendWhatsappMessage, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getOrderTime, sendWhatsappMessage };
