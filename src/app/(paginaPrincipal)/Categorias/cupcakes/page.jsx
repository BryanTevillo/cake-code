"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Card } from "flowbite-react";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 5 1440 200"
          className="absolute"
        >
          <path
            fill="#ffb0cd"
            fillOpacity=".8"
            d="M0,96L21.8,112C43.6,128,87,160,131,149.3C174.5,139,218,85,262,64C305.5,43,349,53,393,69.3C436.4,85,480,107,524,122.7C567.3,139,611,149,655,144C698.2,139,742,117,785,101.3C829.1,85,873,75,916,64C960,53,1004,43,1047,58.7C1090.9,75,1135,117,1178,138.7C1221.8,160,1265,160,1309,154.7C1352.7,149,1396,139,1418,133.3L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 80 1440 320"
          className="absolute"
        >
          <path
            fill="#ffb0cd"
            fillOpacity=".7"
            d="M0,128L21.8,154.7C43.6,181,87,235,131,266.7C174.5,299,218,309,262,293.3C305.5,277,349,235,393,208C436.4,181,480,171,524,149.3C567.3,128,611,96,655,117.3C698.2,139,742,213,785,240C829.1,267,873,245,916,218.7C960,192,1004,160,1047,160C1090.9,160,1135,192,1178,192C1221.8,192,1265,160,1309,170.7C1352.7,181,1396,235,1418,261.3L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 50 1440 320"
          className="absolute"
        >
          <path
            fill="#ffb0cd"
            fillOpacity=".5"
            d="M0,160L30,176C60,192,120,224,180,208C240,192,300,128,360,133.3C420,139,480,213,540,224C600,235,660,181,720,176C780,171,840,213,900,208C960,203,1020,149,1080,133.3C1140,117,1200,139,1260,160C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="grid justify-items-end">
        <form className="w-[20rem]    md:w-[30rem]  order-2 ">
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
