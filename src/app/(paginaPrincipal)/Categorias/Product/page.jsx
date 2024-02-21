"use client";

import ItemCount from "../../../components/Counter/counter";
import Image from "next/image";
import Pastel4 from "../../../../../public/Pastelcerezas.webp";
import { Rating } from "flowbite-react";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import "./styles.css";

export default function Producto() {
  const [showAlert, setShowAlert] = useState(false);
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChageAlert = (qty) => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1200);
  };

  return (
    <>
      {showAlert && (
        <Alert variant="filled" severity="success">
          Haz añadido este producto al carrito
        </Alert>
      )}
      <div className="mt-8">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <a href="/">
              <Tab
                className="px-0 md:px-3 capitalize text-base hover:underline hover:bg-button_primary hover:bg-opacity-20"
                value="one"
                label="Inicio >"
              />
            </a>
            <a href="#">
              <Tab
                className="px-0 md:px-3 capitalize text-base hover:underline hover:bg-button_primary hover:bg-opacity-20"
                value="two"
                label="Categorias >"
              />
            </a>
            <a href="../Categories/Cakes">
              <Tab
                className="px-0 md:px-3 capitalize text-base hover:underline hover:bg-button_primary hover:bg-opacity-20"
                value="three"
                label="Pasteles >"
              />
            </a>
            <a href="#">
              <Tab
                className="px-0 md:px-3 capitalize text-base hover:underline hover:bg-button_primary hover:bg-opacity-20"
                value="four"
                label="Producto"
              />
            </a>
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
                  4 de 5
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
            <div className="md:shrink-0 grid justify-items-center" />
            <div className="p-8">
              <div className="block mt-1 text-xl leading-tight font-bold text-black hover:underline grid justify-items-center">
                RESUMEN DE COMPRA
              </div>
              <div>
                <p className="pt-5 px-0 mt-2 text-slate-500 text-center">
                  CANTIDAD
                </p>
                <ItemCount onAdd={handleChageAlert} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
