"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Card } from "flowbite-react";
import Waves from "@/app/components/WavesComponent/Waves";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import "./styles.css";
import Image from "next/image";
import cupcake1 from "../../../../../public/cupcake/algodon.webp";
import cupcake2 from "../../../../../public/cupcake/avellana.webp";
import cupcake3 from "../../../../../public/cupcake/cafe.webp";
import cupcake4 from "../../../../../public/cupcake/cereza.webp";
import cupcake5 from "../../../../../public/cupcake/oreo.webp";
import cupcake6 from "../../../../../public/cupcake/redvelvet.webp";
import { HiShoppingCart } from "react-icons/hi";
import { Button } from "flowbite-react";

export default function Cupcakes() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <h1 className={[luckiestguy.className + " tracking-wider"]} id="titulo">
        CUP CAKES
      </h1>
      <div className="mb-[100px] md:mb-[170px] xl:mb-[200px] relative md:h-10 -ml-5">
        <Waves color="#ffb0cd"></Waves>
      </div>
      <div>
        <form className="w-[20rem]    md:w-[30rem]  order-2 mx-auto">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre del producto, sabor..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-button_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
      <div className="pt-50 grid justify-items-center md:grid-cols-3">
        {/* card1 */}
        <div className={opensans.className}>
          <Card className="max-w-xs my-4">
            <a href="../Categories/Product">
              <Image
                src={cupcake1}
                alt="cupcake1"
                className="w-[250px] h-[310px] hover:w-[260px] hover:h-[320px]"
              />
            </a>
            <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
              Algodón de azucar
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $35.00 c/u
            </p>
            <div className="flex justify-center px-0">
              <Button className="text-white bg-button_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <HiShoppingCart className="mr-2 h-5 w-5" />
                Agregar al carrito
              </Button>
            </div>
          </Card>
        </div>
        {/* termino card1 */}
        {/* card2 */}
        <div>
          <Card className="max-w-xs my-4 ">
            <a href="../Categories/Product">
              <Image
                src={cupcake2}
                alt="cupcake2"
                className="w-[250px] h-[310px] hover:w-[260px] hover:h-[320px]"
              />
            </a>
            <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
              Avellana y ferrero rocher
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $35.00 c/u
            </p>
            <div className="flex justify-center px-0">
              <Button className="text-white bg-button_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <HiShoppingCart className="mr-2 h-5 w-5" />
                Agregar al carrito
              </Button>
            </div>
          </Card>
        </div>
        {/* termino card2 */}
        {/* card3 */}
        <div>
          <Card className="max-w-xs my-4">
            <a href="../Categories/Product">
              <Image
                src={cupcake3}
                alt="cupcake3"
                className="w-[280px] h-[310px] hover:w-[260px] hover:h-[320px]"
              />
            </a>
            <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
              Café con chocolate
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $25.00 c/u
            </p>
            <div className="flex justify-center px-0">
              <Button className="text-white bg-button_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <HiShoppingCart className="mr-2 h-5 w-5" />
                Agregar al carrito
              </Button>
            </div>
          </Card>
        </div>
        {/* termino card3 */}
        {/* card4 */}
        <div>
          <Card className="max-w-xs my-4">
            <a href="../Categories/Product">
              <Image
                src={cupcake4}
                alt="cupcake4"
                className="w-[250px] h-[310px] hover:w-[260px] hover:h-[320px]"
              />
            </a>
            <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
              Cereza y chispas de colores
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $35.00 c/u
            </p>
            <div className="flex justify-center px-0">
              <Button className="text-white bg-button_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <HiShoppingCart className="mr-2 h-5 w-5" />
                Agregar al carrito
              </Button>
            </div>
          </Card>
        </div>
        {/* termino card4 */}
        {/* card5 */}
        <div>
          <Card className="max-w-xs my-4">
            <a href="../Categories/Product">
              <Image
                src={cupcake5}
                alt="cupcake5"
                className="w-[250px] h-[310px] hover:w-[260px] hover:h-[320px]"
              />
            </a>
            <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
              Cupcake de oreo
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $37.00 c/u
            </p>
            <div className="flex justify-center px-0">
              <Button className="text-white bg-button_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <HiShoppingCart className="mr-2 h-5 w-5" />
                Agregar al carrito
              </Button>
            </div>
          </Card>
        </div>
        {/* termino card5 */}
        {/* card6 */}
        <div>
          <Card className="max-w-xs my-4">
            <a href="../Categories/Product">
              <Image
                src={cupcake6}
                alt="cupcake6"
                className="w-[250px] h-[310px] hover:w-[260px] hover:h-[320px]"
              />
            </a>
            <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
              Red velvet
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $30.00 c/u
            </p>
            <div className="flex justify-center px-0">
              <Button className="text-white bg-button_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <HiShoppingCart className="mr-2 h-5 w-5" />
                Agregar al carrito
              </Button>
            </div>
          </Card>
        </div>
        {/* termino card6 */}
      </div>
      <div className="my-8 flex overflow-x-auto sm:justify-center rounded-full">
        <Pagination
          layout="pagination"
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          previousLabel=""
          nextLabel=""
          showIcons
          className="rounded-full"
        />
      </div>
    </div>
  );
}
