"use client";

import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import Image from "next/image";
import Pastel4 from "../../../../public/Pastelcerezas.jpg";
import { Rating } from "flowbite-react";
import "./styles.css";

export default function Producto() {
  return (
    <div id="cuerpo">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
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
                4.95 out of 5
              </p>
            </Rating>
            <p className="mt-2 text-slate-500">
              Descripción: Delicioso pastel con relleno sabor chocolate y
              chantilli en el exterior sabor cereza con decoracion de cerezas de
              betún
            </p>
            <p className="mt-2 text-slate-500">Tamaño: Grande</p>
          </div>
        </div>
      </div>
    </div>
  );
}
