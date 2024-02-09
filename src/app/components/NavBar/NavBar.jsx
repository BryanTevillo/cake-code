"use client";
import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
import { Dropdown, Navbar } from "flowbite-react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Logo from "../../../../public/logosinFondo.png";
import Image from "next/image";
function Header() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className={[opensans, " bg-orange-100 px-7 text-xl font-bold"]}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <Image
          src={Logo}
          className="mr-3 h-6 sm:h-20 sm:w-auto"
          alt="cake-code Logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Inicio</Navbar.Link>
        <Navbar.Link href="/about">Nosotros</Navbar.Link>

        <Navbar.Link href="/contact">Contacto</Navbar.Link>
        <Dropdown
          arrowIcon={false}
          inline
          label="Categorias"
          className="bg-orange-100"
        >
          <Dropdown.Header>
            <Navbar.Link
              href="/Categorias/CreaTuPastel"
              className="block text-sm"
            >
              Crea tu pastel
            </Navbar.Link>
          </Dropdown.Header>
          <Dropdown.Item>Pasteles</Dropdown.Item>
          <Dropdown.Item>Galletas</Dropdown.Item>
          <Dropdown.Item>Cupcakes</Dropdown.Item>
          <Dropdown.Divider />
        </Dropdown>
        <Navbar.Link href="/navbars">
          <ShoppingCartOutlinedIcon />
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <PersonOutlineOutlinedIcon />
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <SearchOutlinedIcon />
        </Navbar.Link>

        <Navbar.Toggle />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
