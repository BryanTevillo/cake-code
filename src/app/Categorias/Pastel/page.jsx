"use client";

import { Card } from "flowbite-react";
import { Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import "./styles.css";
import Image from "next/image";
import Pastel1 from "../../../../public/pastel-oreo.jpg";
import Pastel2 from "../../../../public/pastel-chocolate.jpg";
import Pastel3 from "../../../../public/pastelbaby.jpg";
import Pastel4 from "../../../../public/Pastelcerezas.jpg";
import Pastel5 from "../../../../public/pastelchocoflor.jpg";
import Pastel6 from "../../../../public/Pastelunicornio.jpg";

export default function Pasteles() {
  return (
    <div>
      <h1 className={luckiestguy.className} id="titulo">
        PASTELES
      </h1>

      <div className="grid justify-items-center md:grid-cols-3">
        {/* card1 */}
        <div>
          <Card className="max-w-sm">
            <Image src={Pastel1} alt="Pastel1" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Oreo con vainilla
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $450.00
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card1 */}
        {/* card2 */}
        <div>
          <Card className="max-w-sm">
            <Image src={Pastel2} alt="Pastel2" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chocolate con frutos rojos
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $350.00
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card2 */}
        {/* card3 */}
        <div>
          <Card className="max-w-sm">
            <Image src={Pastel3} alt="Pastel3" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pastel de chocolate Baby shower
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $250.00
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card3 */}
        {/* card4 */}
        <div>
          <Card className="max-w-sm">
            <Image src={Pastel4} alt="Pastel4" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chocolate con cerezas
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $450.00
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card4 */}
        {/* card5 */}
        <div>
          <Card className="max-w-sm">
            <Image src={Pastel5} alt="Pastel5" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pastel sabor café con flor de chocolate
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $370.00
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card5 */}
        {/* card6 */}
        <div>
          <Card className="max-w-sm">
            <Image src={Pastel6} alt="Pastel6" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pastel unicornio sabor chocolate
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $450.00
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </Card>
        </div>
        {/* termino card6 */}
      </div>
    </div>
  );
}
