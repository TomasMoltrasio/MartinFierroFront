import endPoints from "./api";

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

export { sendWhatsappMessage };
