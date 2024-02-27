"use client";

import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Card, Button } from "flowbite-react";
import Waves from "@/app/components/WavesComponent/Waves";
import "./styles.css";
import Image from "next/image";
import Cake1 from "../../../../../public/customC/pastel-creatupastel.webp";
import Cake2 from "../../../../../public/customC/pastel-creatupastel3.webp";
import Cake3 from "../../../../../public/customC/cake6.webp";
import Cake4 from "../../../../../public/customC/flowerCake.webp";
import Cake5 from "../../../../../public/customC/watercolorFairy.webp";
import Link from "next/link";
export default function CreaTuPastel() {
  return (
    <>
      <main>
        <div
          className="grid grid-cols-1 md:grid-cols-2    "
          id="titulo"
          style={{ padding: 0 }}
        >
          <div className=" place-items-center ml-5 mb-7 md:mt-36 md:ml-10 md:mb-0  md:order-2">
            <Card
              className="   border-none rounded-none shadow-none "
              id="titulo"
            >
              <div className="text-6xl  tracking-wide md:text-7xl  xl:text-8xl xl:place-self-center">
                <p className={[luckiestguy.className]}>Crea tu pastel</p>
                <p
                  className={[
                    opensans.className +
                      " text-xl md:text-3xl font-normal text-gray-700 dark:text-gray-400",
                  ]}
                >
                  Crea el pastel de tus sueños
                </p>
              </div>

              <div className="flex justify-center">
                <Link href="../Categories/CustomCake/Size">
                  <Button className="bg-button_primary text-lg" type="signin">
                    CREAR AHORA
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          <div className="  ml-0 pl-0  md:mt-20">
            <Image
              height={900}
              width={900}
              src={Cake1}
              alt="pastel de fresas"
              className=""
            />
          </div>
        </div>

        {/* #FFDDCC  primeras onditas*/}
        <div className="relative   md:h-10 xl:h-16 -ml-5" id="titulo">
          <Waves color="#FFDDCC"></Waves>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2  " id="sub1">
          <div className=" mt-20  place-self-center ">
            <h2
              className={[
                luckiestguy.className +
                  " text-center text-6xl md:text-7xl xl:text-6xl  ",
              ]}
            >
              ¿Qué es crea tu pastel?
            </h2>
          </div>
          <div className="place-content-around text-lg text-left mb-10 ml-5 mr-5  md:text-2xl md:w-5/6 md:mt-32 xl:text-xl xl:mt-28">
            <p>
              En un mundo en donde el tiempo es lo más valioso, queríamos hacer
              el proceso de ordenar un pastel personalizado más sencillo y
              eficiente para usted!
            </p>
            <p className="mt-5 md:mt-5  ">
              Hicimos un sistema instantáneo para usted, en el que puede elegir
              TODO, desde sabores, diseños y toppings.
            </p>

            <p className="mt-5 md:mt-5 ">
              Todo lo hemos seleccionado pensando en las necesidades de nuestros
              clientes y las tendencias en repostería, agregamos diseños muy
              llamativos que se llevan bien con todos los toppings
              seleccionados!
            </p>
            <p className="mt-5 md:mt-5 ">
              Sigue cada paso y diseña un hermoso pastel hecho solo para ti!
            </p>
          </div>
        </div>

        {/* segundas ondas */}
        <div className="relative   md:h-10 xl:h-16 -ml-5" id="sub1">
          <Waves color="#ffb0cd"></Waves>
        </div>
        <div
          className="grid grid-cols-2    "
          style={{
            paddingTop: 120,
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 0,
          }}
          id="subtitulo"
        >
          <div className="mt-8  mb-3 text-center h-20 ml-5 w-2/4 tracking-wide md:w-2/5 md:h-44 md:mt-10 md:ml-20 md:text-3xl xl:text-4xl xl:h-32 xl:w-1/3 bg-local bg-cover bg-center bg-[url('/customC/mancha_naranja.webp')]">
            <h2 className={luckiestguy.className}>Elige los toppings</h2>
          </div>
          <div className=" mt-8 ml-4 text-center tracking-wide h-20 ml-5 w-2/4 md:w-2/5 md:h-44 md:mt-10 md:ml-20 md:text-3xl xl:text-4xl xl:h-32 xl:w-1/3   bg-local bg-cover bg-center bg-[url('/customC/mancha_naranja.webp')]">
            <h2 className={luckiestguy.className}>Elige el sabor</h2>
          </div>

          <div className=" mb-3 text-center h-20 ml-10 mt-8 w-2/4 tracking-wide md:w-2/5 md:h-44  md:ml-40 md:mt-10 md:text-3xl xl:text-4xl xl:h-32 xl:w-1/3  bg-local bg-cover bg-center bg-[url('/customC/mancha_naranja.webp')]">
            <h2 className={luckiestguy.className}>Elige tu relleno</h2>
          </div>
          <div className=" mb-3 text-center h-20 ml-10 mt-8 w-2/4 tracking-wide md:w-2/5 md:h-44 md:ml-40 md:mt-10 md:text-3xl xl:text-4xl xl:h-32 xl:w-1/3  bg-local bg-cover bg-center bg-[url('/customC/mancha_naranja.webp')]">
            <h2 className={luckiestguy.className}>Elige tu diseño</h2>
          </div>

          <div
            className="col-span-2 xl:grid xl:justify-items-center"
            id="bg-gradient"
          >
            <Image
              className=" w-full  h-auto   xl:w-[900px]   "
              src={Cake2}
              alt="pastel rosa"
            ></Image>
          </div>
        </div>

        {/* terceras ondas */}
        <div className="relative  md:h-10 xl:h-16 -ml-5  " id="sub3">
          <Waves color="#b8dff3"></Waves>
        </div>

        <div id="">
          <div
            className="text-center mt-20 text-3xl md:text-7xl tracking-wide md:mt-40 xl:text-6xl "
            id=""
          >
            <h1 className={luckiestguy.className}>Recomendaciones</h1>
          </div>
          <div
            className="mt-7 ml-10 mr-10 mb-10 p-10 rounded-lg drop-shadow-xl md:mt-10"
            id="sub5"
          >
            <div
              className={[
                opensans.className + "text-md md:text-6xl md:mt-10 xl:text-4xl",
              ]}
            >
              <h2>1.- Para elegir el sabor, considera lo siguiente</h2>

              <ul className="list-disc pl-[40px] mt-[25px] xl:pl-[180px] xl:mt-[30px] md:pl-[90px] md:mt-[30px] ">
                <li>Elige un sabor que pueda gustarles a todos</li>
                <li>Elige un sabor que te guste, ¡debes amar tu pastel!</li>
              </ul>
            </div>
            <div className="border-2 border-black mt-5 mb-5 md:mt-16 md:mb-10"></div>
            <div className={opensans.className}>
              <p className="text-md md:text-6xl xl:text-4xl">
                2.- Considera tener un esquema de colores, ¡eso ayudará a elegir
                la decoración del pastel!
              </p>
              <p className="text-md text-justify ml-5 md:text-6xl md:ml-20 xl:text-4xl"></p>
            </div>
            <div className="border-2 border-black mt-5 mb-5 md:mt-16 md:mb-16"></div>
            <div className={opensans.className}>
              <p className="text-md md:text-6xl xl:text-4xl">
                3.- ¡Elige al menos dos toppings! Todos los toppings combinan
                muy bien, ¡haz que el pastel sea a tu gusto!
              </p>
            </div>
            <div className="flex justify-center mt-10 md:mt-16">
              <Link href="../Categories/CustomCake/Size">
                <Button
                  className="bg-button_primary md:w-[300px] md:h-[70px]"
                  type="signin"
                >
                  CREAR AHORA
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <h1
          className={[
            luckiestguy.className +
              " text-3xl text-center mb-10 md:text-7xl md:mt-16",
          ]}
        >
          Diseños de otros clientes
        </h1>

        <div className="grid grid-cols-1  justify-items-center  md:grid-cols-3">
          <div>
            <Image
              src={Cake3}
              alt="pastel de chocolate"
              className="md:ml-5   w-[300px] h-[250px]"
            ></Image>
          </div>
          <div>
            <Image
              src={Cake4}
              alt="pastel de flores"
              className="mt-10 md:mt-0 w-[300px] h-[250px] "
            ></Image>
          </div>
          <div>
            <Image
              src={Cake5}
              alt="pastel de acuarelas"
              className="mt-10 md:mt-0 w-[300px] h-[250px]w-[300px] h-[250px]"
            ></Image>
          </div>
        </div>
        <div className="flex justify-center mb-5 mt-10">
          <button
            type="submit"
            className=" md:w-[200px]  md:h-[45px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ver mas
          </button>
        </div>
      </main>
    </>
  );
}
