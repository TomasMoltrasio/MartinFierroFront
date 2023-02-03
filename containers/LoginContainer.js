import { Input, Image, Text, Loading } from "@nextui-org/react";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import UserContext from "context/UserContext";
import Swal from "sweetalert2";

export default function LoginContainer() {
  const { logIn } = useContext(UserContext);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let user = {
      username,
      password,
    };
    logIn(user).then((res) => {
      if (res === false) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario o contraseña incorrectos.",
        }).then(() => {
          setLoading(false);
        });
      } else {
        router.push("/");
      }
    });
  };

  return (
    <div
      className="flex
        flex-col
        items-center
        justify-center
        w-full
        h-full
        bg-slate-400"
    >
      <form
        className="
                flex
                flex-col
                items-center
                justify-center
                w-full
                sm:w-1/2 md:w-1/3  lg:w-1/4
                h-max
                border-2
                border-black
                rounded-lg
                p-4
                gap-8
                bg-white
                "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center w-full h-max">
          <Image
            src="/LogoMartinFierro.svg"
            width={200}
            height={200}
            alt="Logo"
            objectFit="cover"
          />
          <Text h2 className="font-normal text-3xl">
            Login
          </Text>
        </div>
        <Input
          type="text"
          labelPlaceholder="Nombre de usuario"
          name="username"
          clearable
          width="100%"
          bordered
          onChange={(e) => setUsername(e.target.value)}
          as="input"
        />
        <Input
          type="password"
          name="password"
          clearable
          width="100%"
          bordered
          labelPlaceholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          as="input"
        />
        {loading ? (
          <Loading />
        ) : (
          <button
            aria-label="Confirmar"
            className="
                w-2/4
                h-max
                p-2
                bg-lime-500
                text-black
                border-2
                border-black
                rounded-lg
                shadow-lg
                hover:scale-110
                hover:bg-lime-800
                hover:text-gray-200
                focus:outline-none
                focus:ring-2
                focus:ring-gray-600
                focus:ring-opacity-50
              "
            type="submit"
          >
            Confirmar
          </button>
        )}
      </form>
    </div>
  );
}
