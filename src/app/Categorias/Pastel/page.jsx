"use client";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Card } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import "./styles.css";
import Image from "next/image";
import Pastel1 from "../../../../public/pastel-oreo.webp";
import Pastel2 from "../../../../public/pastel-chocolate.webp";
import Pastel3 from "../../../../public/pastelbaby.webp";
import Pastel4 from "../../../../public/Pastelcerezas.webp";
import Pastel5 from "../../../../public/pastelchocoflor.webp";
import Pastel6 from "../../../../public/Pastelunicornio.webp";
import { HiShoppingCart } from "react-icons/hi";
import { Button } from "flowbite-react";

export default function Pasteles() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <h1 className={luckiestguy.className} id="titulo">
        PASTELES
      </h1>
      <div>
        <div className="grid justify-items-center md:grid-cols-3">
          {/* card1 */}
          <div className={opensans.className}>
            <div className="py-8 max-w-xs my-4 bg-[#ecf5fb]">
              <Image
                src={Pastel1}
                alt="Pastel1"
                className="w-[250px] h-[310px]"
                href="http://www.google.com"
              />
              <h5 className="my-2 text-center text-xl font-bold text-gray-900 dark:text-white">
                Oreo con vainilla
              </h5>
              <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                $450.00
              </p>
              <div className="my-2 flex justify-center px-0">
                <Button className="text-white bg-button_primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <HiShoppingCart className="mr-2 h-5 w-5" />
                  Agregar al carrito
                </Button>
              </div>
            </div>
          </div>
          {/* termino card1 */}
          {/* card2 */}
          <div>
            <Card className="max-w-xs my-4 bg-[#ecf5fb]">
              <Image
                src={Pastel2}
                alt="Pastel2"
                className="w-[250px] h-[310px]"
              />
              <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                Chocolate con frutos rojos
              </h5>
              <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                $350.00
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
            <Card className="max-w-xs my-4 bg-[#f3ccf3]">
              <Image
                src={Pastel3}
                alt="Pastel3"
                className="w-[280px] h-[310px]"
              />
              <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                Chocolate para Baby shower
              </h5>
              <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                $250.00
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
              <Image
                src={Pastel4}
                alt="Pastel4"
                className="w-[250px] h-[310px]"
              />
              <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                Chocolate con cerezas
              </h5>
              <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                $450.00
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
              <Image
                src={Pastel5}
                alt="Pastel5"
                className="w-[250px] h-[310px]"
              />
              <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                Café con flor de chocolate
              </h5>
              <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                $370.00
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
              <Image
                src={Pastel6}
                alt="Pastel6"
                className="w-[250px] h-[310px]"
              />
              <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                Unicornio sabor chocolate
              </h5>
              <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                $450.00
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
    </div>
  );
}
