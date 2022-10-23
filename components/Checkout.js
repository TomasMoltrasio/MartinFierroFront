import { useContext, useState, useEffect } from "react";
import CartContext from "context/CartContext";
import { sendWhatsappMessage } from "services/checkout";
import { Input, Radio, Textarea } from "@nextui-org/react";
import getOrderTime from "services/orderTime";

export default function Checkout() {
  const { state } = useContext(CartContext);
  const { cart } = state;
  const [orderTime, setOrderTime] = useState([]);
  const [takeAway, setTakeAway] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [selectedOrderTime, setSelectedOrderTime] = useState("");

  useEffect(() => {
    setOrderTime(getOrderTime());
  }, []);

  const getTotal = () => {
    if (cart && cart.length > 0) {
      return cart.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);
    }
    return 0;
  };

  const handleTakeAway = (value) => {
    setTakeAway(value);
    setAddress("");
  };

  const handleSendWhatsappMessage = async () => {
    const data = {
      name,
      phone,
      address,
      note,
      cart,
      selectedOrderTime,
    };
    const { url } = await sendWhatsappMessage(data);
    window.open(url, "_blank");
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">Confirmar pedido</h1>
      </div>
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 justify-center w-full h-full">
          <Input
            placeholder="Nombre"
            type="text"
            width="100%"
            size="md"
            underlined
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Teléfono"
            type="text"
            size="md"
            width="100%"
            underlined
            onChange={(e) => setPhone(e.target.value)}
          />
          <Textarea
            placeholder="Comentarios de la orden"
            type="text"
            size="md"
            width="100%"
            underlined
            onChange={(e) => setNote(e.target.value)}
          />
          <Radio.Group
            value={takeAway}
            orientation="horizontal"
            size="sm"
            onChange={(value) => handleTakeAway(value)}
            className="mb-4"
          >
            <Radio value={false}>Retiro en local</Radio>
            <Radio value={true}>Envío a domicilio</Radio>
          </Radio.Group>
          {takeAway ? (
            <Input
              placeholder="Dirección"
              type="text"
              size="md"
              width="100%"
              underlined
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : null}
        </div>
      </div>

      <div className="w-full h-1/3 flex flex-col items-center justify-center mt-4">
        <div className="flex flex-col items-center justify-center w-full h-full">
          {orderTime && orderTime.length > 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <label>Horario de entrega</label>
              <select
                onChange={(e) => setSelectedOrderTime(e.target.value)}
                className="w-11/12 h-10 border-2 border-slate-200 rounded-lg mt-1 px-4"
              >
                <option value="">Seleccionar horario</option>
                {orderTime.map((time) => (
                  <option key={`horario-${time}`}>{time}</option>
                ))}
              </select>
            </div>
          ) : (
            <p>No hay horarios disponibles</p>
          )}
        </div>
      </div>
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <button
            className="w-2/3 my-4 h-10 border-2 text-white font-semibold border-green-800 bg-green-500 rounded-lg disabled:bg-red-500 disabled:border-red-600 hover:scale-110"
            onClick={handleSendWhatsappMessage}
            disabled={
              !name ||
              !phone ||
              !selectedOrderTime ||
              !cart ||
              (takeAway === true && !address) ||
              selectedOrderTime === ""
            }
          >
            {`Confirmar pedido $${getTotal()}`}
          </button>
        </div>
      </div>
    </div>
  );
}
