"use client";
import ItemCount from "./contador/contador";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import Image from "next/image";
import Pastel4 from "../../../../public/Pastelcerezas.webp";
import { HiShoppingCart } from "react-icons/hi";
import { Button, Rating } from "flowbite-react";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "./styles.css";

export default function Producto() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="mt-8">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab className="px-0 md:px-3" value="one" label="Inicio >" />
            <Tab className="px-0 md:px-3" value="two" label="Categorias >" />
            <Tab className="px-0 md:px-3" value="three" label="Pasteles >" />
            <Tab className="px-0 md:px-3" value="four" label="Producto" />
          </Tabs>
        </Box>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 pt-0 px-8 pb-8 flex flex-row">
        <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-[50px]">
          <div className="md:flex">
            <div className="md:shrink-0 grid justify-items-center">
              <Image
                src={Pastel4}
                alt="pastel4"
                className="w-[250px] h-[310px]"
              />
            </div>
            <div className="p-8">
              <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline grid justify-items-center">
                Pastel de chocolate con decoración de cerezas
              </div>
              <a
                href="#"
                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
              >
                $450.00
              </a>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.95 de 5
                </p>
              </Rating>
              <p className="mt-2 text-slate-500">
                Descripción: Delicioso pastel con relleno sabor chocolate y
                chantilli en el exterior sabor cereza con decoracion de cerezas
                de betún
              </p>
              <p className="mt-2 text-slate-500">Tamaño: Grande</p>
            </div>
          </div>
        </div>
        <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-[50px]">
          <div className="md:flex">
            {/* otra caja */}
            <div className="md:shrink-0 grid justify-items-center" />
            <div className="p-8">
              <div className="block mt-1 text-xl leading-tight font-bold text-black hover:underline grid justify-items-center">
                RESUMEN DE COMPRA
              </div>
              <div>
                <p className="py-5 px-0 mt-2 text-slate-500">CANTIDAD</p>
                <ItemCount />
              </div>
              <div className=" py-5">
                <button
                  type="submit"
                  className="w-80 text-white bg-button_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  COMPRAR AHORA
                </button>
              </div>
              <div className=" px-0">
                <Button className=" w-80 text-blue-500 bg-button_primary bg-opacity-20 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <HiShoppingCart className="mr-2 h-5 w-5" />
                  AGREGAR AL CARRITO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
