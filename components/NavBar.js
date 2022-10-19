import NextLink from "next/link";
import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Image,
  Button,
} from "@nextui-org/react";
import { HiOutlineMenu } from "react-icons/hi";
import { ImCart } from "react-icons/im";

export default function NavBar() {
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
      link: "/contact",
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
      <Navbar.Toggle showIn="xs">
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
        <Navbar.Link href="#">Inicio</Navbar.Link>
        <Dropdown variant="underline">
          <Navbar.Item isActive>
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
                  mr: "$4",
                },
                // dropdown item title
                "& .nextui-dropdown-item-content": {
                  w: "100%",
                  fontWeight: "$semibold",
                },
              },
            }}
          >
            <Dropdown.Item href="/category">Ver todas el menú</Dropdown.Item>
            <Dropdown.Item href="/category/1">Meganesas</Dropdown.Item>
            <Dropdown.Item href="/category/2">Picadas</Dropdown.Item>
            <Dropdown.Item href="/category/3">Minutas</Dropdown.Item>
            <Dropdown.Item href="/category/4">Pastas</Dropdown.Item>
            <Dropdown.Item href="/category/5">Acompañamientos</Dropdown.Item>
            <Dropdown.Item href="/category/6">Postres</Dropdown.Item>
            <Dropdown.Item href="/category/7">Bebidas</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Navbar.Link href="#">Contacto</Navbar.Link>
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
            key={item}
            activeColor="warning"
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
