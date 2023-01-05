import { useContext, useState, useEffect } from "react";
import CartContext from "context/CartContext";
import sendWhatsappMessage from "services/sendWP";
import { Input, Radio, Textarea, Loading, Modal } from "@nextui-org/react";
import getOrderTime from "services/orderTime";
import { useRouter } from "next/router";
import MapContainer from "containers/MapContainer";

export default function Checkout({ handleShowModal }) {
  const router = useRouter();
  const { state, clearCart } = useContext(CartContext);
  const { cart } = state;
  const [orderTime, setOrderTime] = useState([]);
  const [takeAway, setTakeAway] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [between, setBetween] = useState("");
  const [note, setNote] = useState("");
  const [selectedOrderTime, setSelectedOrderTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

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
    setBetween("");
  };

  const handleSendWhatsappMessage = async () => {
    setLoading(true);
    const data = {
      name,
      address,
      between,
      note,
      cart,
      selectedOrderTime,
    };
    const url = sendWhatsappMessage(data);
    clearCart();
    handleShowModal();
    router.push(`https://wa.me/${url}`, `https://wa.me/${url}`, {
      shallow: true,
      locale: false,
    });
  };

  const handleShowMap = () => {
    setShowMap(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">Confirmar pedido</h1>
      </div>
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 justify-center w-full h-full">
          <Input
            labelLeft="Nombre"
            placeholder="Ej: Juan Perez"
            type="text"
            width="90%"
            size="md"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Textarea
            placeholder="Podes agregar un comentario a tu orden. Ej: El sandwich sin lechuga"
            type="text"
            size="md"
            width="90%"
            required
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
            <>
              <Input
                labelLeft="Dirección"
                placeholder="Ej: Alvear 679"
                type="text"
                size="md"
                width="90%"
                required
                onChange={(e) => setAddress(e.target.value)}
              />

              <Input
                labelLeft="Entre calles"
                placeholder="Ej: Arenaza y Bartolomé Correa"
                type="text"
                size="md"
                width="90%"
                required
                onChange={(e) => setBetween(e.target.value)}
              />
              <p className="text-xs text-gray-700">
                *El envío es con cargo adicional y no corre por nuestra cuenta
              </p>
              <button
                onClick={() => setShowMap(true)}
                className="w-11/12 h-10 bg-slate-200 rounded-lg mt-4 flex items-center justify-center"
              >
                <p className="text-slate-700 font-bold">
                  Consultar mapa con precios
                </p>
              </button>
            </>
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
                <option value="">Seleccionar un horario aproximado</option>
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
            aria-label="Confirmar pedido"
            className="w-2/3 my-4 h-10 border-2 text-white font-semibold border-green-800 bg-green-500 rounded-lg disabled:bg-red-500 disabled:border-red-600 hover:scale-110 transition duration-300 ease-linear"
            onClick={handleSendWhatsappMessage}
            disabled={
              !name ||
              !selectedOrderTime ||
              !cart ||
              (takeAway === true && !address) ||
              (takeAway === true && !between) ||
              selectedOrderTime === "" ||
              loading
            }
          >
            {loading ? (
              <Loading type="points" />
            ) : (
              `Confirmar pedido $${getTotal()}`
            )}
          </button>
        </div>
      </div>
      <Modal
        open={showMap}
        onClose={handleShowMap}
        closeButton
        blur
        width="400px"
        height="100%"
      >
        <MapContainer />
      </Modal>
    </div>
  );
}
