"use client";

import { Card } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { Button } from "flowbite-react";
export default function Card1({ img, text1, text2 }) {
  return (
    <>
      <div className={opensans.className}>
        <Card className="max-w-xs my-4">
          <a href="../Categories/Product">
            <Image
              src={img}
              width={100}
              height={100}
              alt="cupcake1"
              className="w-[250px] h-[310px] hover:w-[260px] hover:h-[320px]"
            />
          </a>
          <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
            {text1}
          </h5>
          <p className="text-center font-normal text-gray-700 dark:text-gray-400">
            {text2}
          </p>
          <div className="flex justify-center px-0">
            <Button className="text-white bg-button_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <HiShoppingCart className="mr-2 h-5 w-5" />
              Agregar al carrito
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
