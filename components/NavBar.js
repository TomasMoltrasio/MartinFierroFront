import NextLink from "next/link";
import { Navbar, Link, Dropdown, Image } from "@nextui-org/react";
import { HiOutlineMenu } from "react-icons/hi";
import { ImCart } from "react-icons/im";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const collapseItems = [
    {
      title: "Inicio",
      link: "/",
    },
    {
      title: "Menu",
      link: "/menu",
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
        <Dropdown variant="underline">
          <Navbar.Item isActive={router.pathname === "/menu" ? true : false}>
            <Dropdown.Button
              auto
              light
              css={{
                px: 0,
                dflex: "center",
                svg: { pe: "none" },
              }}
              ripple={false}
            >
              Menú
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="ACME features"
            css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "70px",
              "& .nextui-dropdown-item": {
                py: "$4",
                // dropdown item left icon
                svg: {
                  color: "$secondary",
                  mr: "$2",
                },
                // dropdown item title
                "& .nextui-dropdown-item-content": {
                  w: "100%",
                  fontWeight: "$semibold",
                },
              },
            }}
          >
            <Dropdown.Item href="/menu">
              <NextLink href="/menu">Ver todo el menú</NextLink>
            </Dropdown.Item>
            <Dropdown.Item href="/menu/1">
              <NextLink href="/menu/1">Meganesas</NextLink>
            </Dropdown.Item>
            <Dropdown.Item href="/menu/2">
              <NextLink href="/menu/2">Picadas</NextLink>
            </Dropdown.Item>
            <Dropdown.Item href="/menu/3">
              <NextLink href="/menu/3">Minutas</NextLink>
            </Dropdown.Item>
            <Dropdown.Item href="/menu/4">
              <NextLink href="/menu/4">Pastas</NextLink>
            </Dropdown.Item>
            <Dropdown.Item href="/menu/5">
              <NextLink href="/menu/5">Acompañamientos</NextLink>
            </Dropdown.Item>
            <Dropdown.Item href="/menu/6">
              <NextLink href="/menu/6">Postres</NextLink>
            </Dropdown.Item>
            <Dropdown.Item href="/menu/7">
              <NextLink href="/menu/7">Bebidas</NextLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <NextLink href="/contacto">
          <Navbar.Link
            isActive={router.pathname === "/contacto" ? true : false}
          >
            Contacto
          </Navbar.Link>
        </NextLink>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "center",
          },
        }}
      >
        <NextLink href="/cart">
          <ImCart size={30} className="cursor-pointer" />
        </NextLink>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={`collapse-${item}`}
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
