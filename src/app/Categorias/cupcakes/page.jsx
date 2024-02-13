import { Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import "./styles.css";
import Image from "next/image";
import cupcake1 from "../../../../public/cupcake/algodon.jpg";
import cupcake2 from "../../../../public/cupcake/avellana.jpg";
import cupcake3 from "../../../../public/cupcake/cafe.jpg";
import cupcake4 from "../../../../public/cupcake/cereza.jpg";
import cupcake5 from "../../../../public/cupcake/oreo.jpg";
import cupcake6 from "../../../../public/cupcake/redvelvet.jpg";

export default function Cupcakes() {
  return (
    <div>
      <h1 className={luckiestguy.className} id="titulo">
        CUP CAKES
      </h1>
      <div className="grid justify-items-center md:grid-cols-3">
        {/* card1 */}
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image className="p-5 rounded-t-lg" src={cupcake1} alt="cupcake1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Vainilla con chantilli
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $35.00 c/u
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
          <Image className="p-5 rounded-t-lg" src={cupcake2} alt="cupcake1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Avellana y ferrero rocher
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $50.00 c/u
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
            <Image className="p-5 rounded-t-lg" src={cupcake3} alt="cupcake1" />{" "}
          </div>
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Café con chocolate
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $45.00 c/u
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
          <Image className="p-5 rounded-t-lg" src={cupcake4} alt="cupcake1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cereza con chispas de colores
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $35.00 c/u
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
          <Image className="p-5 rounded-t-lg" src={cupcake5} alt="cupcake1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cacao y crema
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $40.00 c/u
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
          <Image className="p-5 rounded-t-lg" src={cupcake6} alt="cupcake1" />
          <div className="p-1">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Red velvet
            </h5>
            <p className="text-center mb-3 font-normal dark:text-gray-400">
              $45.00 c/u
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
