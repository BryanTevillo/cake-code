"use client";
import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
import { Dropdown, Navbar } from "flowbite-react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Logo from "../../../../public/logosinFondo.webp";
import Image from "next/image";
function Header() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className={[opensans, " bg-orange-100 px-7 text-xl "]}
    >
      <Navbar.Brand href="https://github.com/BryanTevillo/cake-code.git">
        <Image src={Logo} className="size-28" alt="cake-code Logo" />
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          className=" md:mr-1 xl:mr-10 text-2xl text-black font-bold"
        >
          Inicio
        </Navbar.Link>
        <Navbar.Link
          href="/About"
          className=" md:mr-1 xl:mr-10 text-2xl text-black font-bold"
        >
          Nosotros
        </Navbar.Link>

        <Navbar.Link
          href="/Contact"
          className=" md:mr-1 xl:mr-10 text-2xl text-black font-bold"
        >
          Contacto
        </Navbar.Link>

        <div className="text-2xl font-bold text-black ">
          <Dropdown
            arrowIcon={true}
            inline
            label={"Categorias"}
            className="bg-orange-100 "
          >
            <Dropdown.Header>
              <Navbar.Link
                style={{ fontSize: 18 }}
                href="/Categories/CustomCake"
                className="block text-sm"
              >
                Crea tu pastel
              </Navbar.Link>
            </Dropdown.Header>

            <Navbar.Link href="/Categories/Cakes">
              <Dropdown.Item style={{ fontSize: 18 }}>Pasteles</Dropdown.Item>
            </Navbar.Link>
            <Navbar.Link href="/Categories/Cookies">
              <Dropdown.Item style={{ fontSize: 18 }}>Galletas</Dropdown.Item>
            </Navbar.Link>
            <Navbar.Link href="/Categories/Cupcakes">
              <Dropdown.Item style={{ fontSize: 18 }}>Cupcakes</Dropdown.Item>
            </Navbar.Link>
            <Dropdown.Divider />
          </Dropdown>
        </div>

        <Navbar.Link href="/User/Cart">
          <ShoppingCartOutlinedIcon
            className="text-black  ml-0 md:ml-4 xl:ml-20"
            style={{ fontSize: 36 }}
          />
        </Navbar.Link>
        <Navbar.Link href="/Login">
          <PersonOutlineOutlinedIcon
            className="text-black"
            style={{ fontSize: 36 }}
          />
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <SearchOutlinedIcon
            className="  md:mr-0 xl:mr-20 text-black"
            style={{ fontSize: 36 }}
          />
        </Navbar.Link>

        <Navbar.Toggle />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
