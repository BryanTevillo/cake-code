"use client";

import Cart from "@/app/components/CartComponent/Cart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

import { Card, Button } from "flowbite-react";
import "./style.css";
import { Divider } from "@mui/material";
function page() {
  return (
    <>
      <section className="grid  grid-cols-1 xl:grid-cols-2">
        <div className="mx-4  mb-4 ">
          <div className="mx-auto max-w-3xl">
            <div className="mt-8">
              <ul className="space-y-4">
                <section className="flex justify-center  text-3xl lg:text-4xl gap-4">
                  <ShoppingCartOutlinedIcon className="text-black   text-3xl lg:text-4xl" />
                  <h1 className={[luckiestguy.className]}>Carrito de Compra</h1>
                </section>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mx-auto  py-10 sm:px-6 sm:py-12 lg:mx-auto ">
          <div className="mx-auto max-w-3xl ">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Resumen de compra
              </h5>
              <Divider></Divider>
              <div className="flex justify-between uppercase">
                <p>Productos(4):</p>
                <p>$1500</p>
              </div>
              <p className="font-normal text-blue-700 dark:text-blue-400">
                Cp: 39350 Vicente Guerrero #18 Acapulco Gro.
              </p>
              <div className="flex justify-between font-bold uppercase">
                <p>Total:</p>
                <p>$1500</p>
              </div>
              <Button
                color=""
                className="bg-button_primary text-white hover:opacity-75"
              >
                Continuar compra
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
