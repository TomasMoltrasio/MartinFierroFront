import NextLink from "next/link";
import {
  Navbar,
  Link,
  Dropdown,
  Badge,
  Avatar,
  Modal,
} from "@nextui-org/react";
import { HiOutlineMenu } from "react-icons/hi";
import { ImCart } from "react-icons/im";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import CartContext from "context/CartContext";
import UserContext from "context/UserContext";
import { MdOutlineAddCircle, MdOutlineChangeCircle } from "react-icons/md";
import CreateProduct from "./CreateProduct";
import ChangeDay from "./ChangeDay";
import Image from "next/image";

export default function NavBar() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showModalDay, setShowModalDay] = useState(false);
  const { state } = useContext(CartContext);
  const { cart } = state;
  const { user, logOut } = useContext(UserContext);
  const cartCount =
    cart && cart.length > 0
      ? cart.reduce((acc, product) => acc + product.quantity, 0)
      : 0;

  const collapseItems = [
    {
      title: "Inicio",
      link: "/",
    },
    {
      title: "Menú",
      link: "/menu",
    },
    {
      title: "Nuestro salón",
      link: "/salon",
    },
    {
      title: "Contacto",
      link: "/contacto",
    },
  ];

  const handleShowModal = () => {
    setShowModal(false);
  };

  const handleShowModalDay = () => {
    setShowModalDay(false);
  };

  return (
    <Navbar
      maxWidth={"fluid"}
      variant="sticky"
      className="py-2"
      isCompact={true}
      isBordered={false}
      disableBlur={true}
      css={{
        color: "#000",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <Navbar.Toggle
        showIn="xs"
        id="navbar-toggle"
        aria-label="
      Toggle navigation
      "
      >
        <HiOutlineMenu size={30} />
      </Navbar.Toggle>
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <NextLink href="/">
          <Image
            src="/Logo-MF-Navidad.svg"
            alt="Logo Martin Fierro"
            width={80}
            height={80}
            objectFit="contain"
            className="cursor-pointer"
            priority={true}
          />
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content
        activeColor="primary"
        hideIn="xs"
        variant="underline"
        className="text-xl font-extralight"
      >
        <NextLink href="/">
          <Navbar.Link isActive={router.pathname === "/" ? true : false}>
            Inicio
          </Navbar.Link>
        </NextLink>
        <NextLink href="/menu">
          <Navbar.Link isActive={router.pathname === "/menu" ? true : false}>
            Menú
          </Navbar.Link>
        </NextLink>
        <NextLink href="/salon">
          <Navbar.Link isActive={router.pathname === "/salon" ? true : false}>
            Nuestro salón
          </Navbar.Link>
        </NextLink>
        <NextLink href="/contacto">
          <Navbar.Link
            isActive={router.pathname === "/contacto" ? true : false}
          >
            Contacto
          </Navbar.Link>
        </NextLink>
      </Navbar.Content>
      {user && user.token ? (
        <>
          <Navbar.Content
            css={{
              "@xs": {
                w: "12%",
                jc: "flex-end",
              },
            }}
          >
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    aria-label="User menu"
                    color="primary"
                    size="md"
                    src="/Logo-MF-Navidad.svg"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => {
                  switch (actionKey) {
                    case "logout":
                      logOut();
                      break;
                    case "cart":
                      router.push("/cart");
                      break;
                    case "add":
                      setShowModal(true);
                      break;
                    case "change":
                      setShowModalDay(true);
                      break;
                    default:
                      break;
                  }
                }}
              >
                <Dropdown.Item icon={<ImCart size={20} />} key="cart">
                  Carrito
                </Dropdown.Item>
                <Dropdown.Item
                  icon={<MdOutlineAddCircle size={20} />}
                  key="add"
                >
                  Agregar producto
                </Dropdown.Item>
                <Dropdown.Item
                  icon={<MdOutlineChangeCircle size={20} />}
                  key="change"
                >
                  Cambiar plato del día
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Cerrar sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Content>
        </>
      ) : (
        <>
          <NextLink href="/cart">
            <Navbar.Content
              css={{
                "@xs": {
                  w: "12%",
                  jc: "center",
                },
              }}
            >
              <Badge
                content={cartCount}
                isInvisible={cartCount === 0 ? true : false}
                color="error"
                className="cursor-pointer"
              >
                <ImCart size={30} className="cursor-pointer" />
              </Badge>
            </Navbar.Content>
          </NextLink>
        </>
      )}
      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={`navbar-collapse-${index}`}
            activeColor="warning"
            isActive={router.pathname === item.link ? true : false}
          >
            <NextLink href={item.link}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                onClick={() => {
                  document.getElementById("navbar-toggle").click();
                }}
              >
                {item.title}
              </Link>
            </NextLink>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      <Modal
        open={showModal}
        onClose={handleShowModal}
        closeButton
        blur
        width="100%"
        height="100%"
      >
        <CreateProduct handleShowModal={handleShowModal} />
      </Modal>
      <Modal
        open={showModalDay}
        onClose={handleShowModalDay}
        closeButton
        blur
        width="100%"
        height="100%"
      >
        <ChangeDay handleShowModalDay={handleShowModalDay} />
      </Modal>
    </Navbar>
  );
}
