"use client";

import { Card } from "flowbite-react";
import { Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import "./styles.css";
import Image from "next/image";
import Galleta1 from "../../../../public/galletas/amaranto.jpg";
import Galleta2 from "../../../../public/galletas/chocolate-relleno.jpg";
import Galleta3 from "../../../../public/galletas/lavanda.jpg";
import Galleta4 from "../../../../public/galletas/granola.jpg";
import Galleta5 from "../../../../public/galletas/nuez.jpg";
import Galleta6 from "../../../../public/galletas/paylimon.jpg";

export default function Galletas() {
  return (
    <div>
      <h1 className={luckiestguy.className} id="titulo">
        GALLETAS
      </h1>

      <div className="grid justify-items-center md:grid-cols-3">
        {/* card1 */}
        <div>
          <Card className="max-w-sm">
            <Image src={Galleta1} alt="Galleta1" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Amaranto con chocolate
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $20.00 c/u
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
            <Image src={Galleta2} alt="Galleta2" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Nuez con azucar glass
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $10.00 c/u
            </p>
            <div className="flex justify-center">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            <Image src={Galleta3} alt="Galleta3" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chocolate blanco con amaranto
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $15.00 c/u
            </p>
            <div class="flex justify-center">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            <Image src={Galleta4} alt="Galleta4" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Avena con granola
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $35.00 c/u
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
            <Image src={Galleta5} alt="Galleta5" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Galleta de oreo
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $35.00 c/u
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
            <Image src={Galleta6} alt="Galleta6" />
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Galleta sabor pay de limon
            </h5>
            <p className="text-center font-normal text-gray-700 dark:text-gray-400">
              $16.00 c/u
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
