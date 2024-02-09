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
        <div className="text-2xl font-bold" style={{ marginRight: 40 }}>
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
            <Navbar.Link href="/navbars">
              <Dropdown.Item>Pasteles</Dropdown.Item>
            </Navbar.Link>
            <Dropdown.Item>Galletas</Dropdown.Item>
            <Dropdown.Item>Cupcakes</Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown>
        </div>
        <Navbar.Link href="/navbars">
          <ShoppingCartOutlinedIcon className="text-4xl " />
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <PersonOutlineOutlinedIcon className="text-4xl " />
        </Navbar.Link>
        <Navbar.Link href="/navbars" className="text-4xl mr-20">
          <SearchOutlinedIcon />
        </Navbar.Link>

        <Navbar.Toggle />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
