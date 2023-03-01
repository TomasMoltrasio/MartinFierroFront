const phoneNumber = "5492241527444";

const getQuantity = (garnish) => {
  let quantity = 0;
  Object.keys(garnish).map((key) => {
    quantity += garnish[key];
  });
  return quantity;
};

const getBetween = (between) => {
  if (between === "") {
    return "";
  } else {
    return `%0A*Entre:* ${between}`;
  }
};

const getAddress = (address) => {
  if (address === "") {
    return "%0A*Retiro por el local*";
  } else {
    return `%0A*Direccion:* ${address}`;
  }
};

const getNote = (note) => {
  if (note === "") {
    return "";
  } else {
    return `%0A*Nota:* ${note}`;
  }
};

const getGarnish = (garnish) => {
  if (garnish === "nada ") {
    return "sin guarnición";
  } else {
    return `con ${garnish}`;
  }
};

const getTotalWithDiscount = (total, cart) => {
  const discount = 0.1;
  if (cart && cart.length > 0) {
    return Math.round((total - total * discount) / 100) * 100;
  }
  return 0;
};

export default function sendWhatsappMessage(body) {
  const { name, cart, address, selectedOrderTime, note, between } = body;
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const message =
    `*Nueva Orden*%0A%0A*Nombre:* ${name}${getAddress(address)}${getBetween(
      between
    )}%0A*Horario:* ${selectedOrderTime}${getNote(
      note
    )}%0A%0A*Productos:*%0A${cart
      .map((item) => {
        if (item.category === "Empanadas") {
          return `${getQuantity(item.garnish)}x ${item.name} ${
            item.of
          } (${Object.keys(item.garnish)
            .map((key) => {
              if (item.garnish[key] > 0) {
                return `${key} x${item.garnish[key]}`;
              } else {
                return "";
              }
            })
            .filter((item) => item !== "")
            .join(", ")}) - x $${item.price}`;
        } else if (item.garnish === " ") {
          return `${item.quantity} x ${item.name} ${item.of} - $${
            item.price * item.quantity
          }`;
        } else {
          return `${item.quantity} x ${item.name} ${item.of} ${getGarnish(
            item.garnish
          )} - $${item.price * item.quantity}`;
        }
      })
      .join("%0A")}` +
    `%0A%0A*Total:* $${total}` +
    `%0A*Total con descuento:* $${getTotalWithDiscount(total, cart)}`;
  const url = `${phoneNumber}?text=${message}`;
  return url;
}
