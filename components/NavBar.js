import NextLink from "next/link";
import { Navbar, Link, Dropdown, Image, Badge } from "@nextui-org/react";
import { HiOutlineMenu } from "react-icons/hi";
import { ImCart } from "react-icons/im";
import { useRouter } from "next/router";
import { useContext } from "react";
import CartContext from "context/CartContext";

export default function NavBar() {
  const router = useRouter();
  const { state } = useContext(CartContext);
  const { cart } = state;
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

  return (
    <Navbar
      maxWidth={"fluid"}
      variant="sticky"
      className="p-2"
      css={{
        color: "#000",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <Navbar.Toggle showIn="xs" id="navbar-toggle">
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
            src="/LogoMartinFierro.svg"
            alt="Logo Martin Fierro"
            width={100}
            height={100}
            objectFit="cover"
            className="cursor-pointer"
          />
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content
        activeColor="primary"
        hideIn="xs"
        variant="underline"
        className="text-xl font-semibold"
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
    </Navbar>
  );
}
