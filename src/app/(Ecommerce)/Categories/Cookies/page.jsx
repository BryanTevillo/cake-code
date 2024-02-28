"use client";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import Waves from "@/app/components/WavesComponent/Waves";
import "./styles.css";

import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import Galleta1 from "../../../../../public/galletas/amaranto.webp";
import Galleta2 from "../../../../../public/galletas/chocolate-relleno.webp";
import Galleta3 from "../../../../../public/galletas/lavanda.webp";
import Galleta4 from "../../../../../public/galletas/granola.webp";
import Galleta5 from "../../../../../public/galletas/nuez.webp";
import Galleta6 from "../../../../../public/galletas/paylimon.webp";
import Card1 from "@/app/components/CardCupcakes/CardCupcakes";

export default function Galletas() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <h1 className={[luckiestguy.className + " tracking-wider"]} id="titulo">
        GALLETAS
      </h1>
      <div className="mb-[100px] md:mb-[170px] xl:mb-[200px] relative md:h-10 -ml-5">
        <Waves color="#ffb0cd"></Waves>
      </div>
      <div>
        <form className="w-[20rem]    md:w-[30rem]  order-2 mx-auto ">
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
        <div className={opensans.className}>
          <Card1
            img={Galleta1}
            text1="Amaranto con chocolate"
            text2="$25.00 c/u"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Galleta2}
            text1="Chocolate con relleno"
            text2="$28.00 c/u"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Galleta3}
            text1="Chocolate blanco "
            text2="$20.00 c/u"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Galleta4}
            text1="Granola y lavanda"
            text2="$40.00 c/u"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Galleta5}
            text1="Vainilla y azucar glass"
            text2="$25.00 c/u"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Galleta6}
            text1="Galleta de limón"
            text2="$30.00 c/u"
          ></Card1>
        </div>
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
