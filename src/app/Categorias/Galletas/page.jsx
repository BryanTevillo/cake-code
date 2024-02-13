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
        Galletas
      </h1>
      <div className="grid justify-items-center md:grid-cols-3">
        {/* card1 */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image className="p-5 rounded-t-lg" src={Galleta1} alt="Galleta1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Amaranto con chocolate
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
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
          </div>
        </div>
        {/* terminar card1 */}

        {/* card2 */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image className="p-5 rounded-t-lg" src={Galleta2} alt="Galleta1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chocolate con relleno de crema
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $20.00 c/u
            </p>
            <div class="flex justify-center">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/* terminar card2 */}

        {/* card3 */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 resize-y">
          <div>
            <Image className="p-5 rounded-t-lg" src={Galleta3} alt="Galleta1" />{" "}
          </div>
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chocolate blanco con lavanda
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $15.00
            </p>
          </div>
          <div class="flex justify-center">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
        {/* terminar card3 */}

        {/* card4 */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image className="p-5 rounded-t-lg" src={Galleta4} alt="Galleta1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Avena con granola
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $16.00 c/u
            </p>
            <div class="flex justify-center">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        {/* terminar card4 */}

        {/* card5 */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image className="p-5 rounded-t-lg" src={Galleta5} alt="Galleta1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Nuéz con azucar glass
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
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
          </div>
        </div>
        {/* terminar card5 */}

        {/* card6 */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image className="p-5 rounded-t-lg" src={Galleta6} alt="Galleta1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Galletas con sabor pay de limon
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
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
          </div>
        </div>
        {/* terminar card6 */}
      </div>
    </div>
  );
}
