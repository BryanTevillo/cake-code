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
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image className="p-5 rounded-t-lg" src={Pastel1} alt="pastel1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Oreo con vainilla
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $350.00
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
          <Image className="p-5 rounded-t-lg" src={Pastel2} alt="pastel1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chocolate con frutos rojos
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $350.00
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
            <Image className="p-5 rounded-t-lg" src={Pastel3} alt="pastel1" />{" "}
          </div>
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pastel de coco para Baby Shower
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $350.00
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
          <Image className="p-5 rounded-t-lg" src={Pastel4} alt="pastel1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chocolate con cerezas
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $350.00
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
          <Image className="p-5 rounded-t-lg" src={Pastel5} alt="pastel1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Café con flor de chocolate
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $350.00
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
          <Image className="p-5 rounded-t-lg" src={Pastel6} alt="pastel1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pastel unicornio sabor chocolate
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $350.00
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
