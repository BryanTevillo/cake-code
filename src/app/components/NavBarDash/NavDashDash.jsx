"use client";
import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
import { Dropdown, Navbar } from "flowbite-react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Logo from "../../../../public/logosinFondo.webp";
import Image from "next/image";
function HeaderDash() {
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
          href="/Dashboard"
          className=" md:mr-1 xl:mr-10 text-2xl text-black font-bold"
        >
          Inicio
        </Navbar.Link>

        <div className="text-2xl font-bold text-black ">
          <Dropdown
            arrowIcon={true}
            inline
            label={"Pagina Ecommerce"}
            className="bg-orange-100 "
          >
            <Dropdown.Header>
              <Navbar.Link
                style={{ fontSize: 18 }}
                href="/"
                className="block text-sm"
              >
                Inicio
              </Navbar.Link>
            </Dropdown.Header>

            <Navbar.Link href="/About">
              <Dropdown.Item style={{ fontSize: 18 }}>Nosotros</Dropdown.Item>
            </Navbar.Link>
            <Navbar.Link href="/Contact">
              <Dropdown.Item style={{ fontSize: 18 }}>Contacto</Dropdown.Item>
            </Navbar.Link>

            <Dropdown.Divider />
          </Dropdown>
        </div>

        <Navbar.Link
          href="/Dashboard/Products"
          className=" md:mr-1 xl:mr-10 text-2xl text-black font-bold"
        >
          Productos
        </Navbar.Link>

        <Navbar.Link href="/Dashboard/LoginD">
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

export default HeaderDash;
