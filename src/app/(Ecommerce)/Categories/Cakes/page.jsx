"use client";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import "./styles.css";
import Pastel1 from "../../../../../public/pastel-oreo.webp";
import Pastel2 from "../../../../../public/pastel-chocolate.webp";
import Pastel3 from "../../../../../public/pastelbaby.webp";
import Pastel4 from "../../../../../public/Pastelcerezas.webp";
import Pastel5 from "../../../../../public/pastelchocoflor.webp";
import Pastel6 from "../../../../../public/Pastelunicornio.webp";
import Waves from "@/app/components/WavesComponent/Waves";
import Card1 from "@/app/components/CardCupcakes/CardCupcakes";

export default function Pasteles() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <h1
        className={[luckiestguy.className + " tracking-wider pb-0"]}
        id="titulo"
      >
        PASTELES
      </h1>
      <div className="mb-[100px] md:mb-[170px] xl:mb-[200px] relative md:h-10 -ml-5">
        <Waves color="#ffb0cd"></Waves>
      </div>
      <div>
        <form className="w-[20rem] md:w-[30rem] order-2 mx-auto">
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
            img={Pastel1}
            text1="Oreo con vainilla"
            text2="$450.00"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Pastel2}
            text1="Chocolate con frutos rojos"
            text2="$350.00"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Pastel3}
            text1="Pastel para baby shower"
            text2="$250.00"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Pastel4}
            text1="Chocolate con cerezas"
            text2="$450.00"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Pastel5}
            text1="Café y flor de chocolate"
            text2="$370.00"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Pastel6}
            text1="Unicornio con chocolate"
            text2="$450.00"
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
