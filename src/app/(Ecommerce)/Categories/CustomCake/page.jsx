"use client";

import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Card, Button } from "flowbite-react";
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

        <div className="relative   md:h-10 xl:h-16 -ml-5" id="titulo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 5 1440 200"
            className="absolute"
          >
            <path
              fill="#FFDDCC"
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
              fill="#FFDDCC"
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
              fill="#FFDDCC"
              fillOpacity=".5"
              d="M0,160L30,176C60,192,120,224,180,208C240,192,300,128,360,133.3C420,139,480,213,540,224C600,235,660,181,720,176C780,171,840,213,900,208C960,203,1020,149,1080,133.3C1140,117,1200,139,1260,160C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
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
        <div className="relative   md:h-10 xl:h-16 -ml-5" id="sub1">
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

        <div className="relative  md:h-10 xl:h-16 -ml-5  " id="sub3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 5 1440 200"
            className="absolute"
          >
            <path
              fill="#b8dff3"
              fill-opacity=".8"
              d="M0,96L21.8,112C43.6,128,87,160,131,149.3C174.5,139,218,85,262,64C305.5,43,349,53,393,69.3C436.4,85,480,107,524,122.7C567.3,139,611,149,655,144C698.2,139,742,117,785,101.3C829.1,85,873,75,916,64C960,53,1004,43,1047,58.7C1090.9,75,1135,117,1178,138.7C1221.8,160,1265,160,1309,154.7C1352.7,149,1396,139,1418,133.3L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 80 1440 320"
            className="absolute"
          >
            <path
              fill="#b8dff3"
              fill-opacity=".7"
              d="M0,128L21.8,154.7C43.6,181,87,235,131,266.7C174.5,299,218,309,262,293.3C305.5,277,349,235,393,208C436.4,181,480,171,524,149.3C567.3,128,611,96,655,117.3C698.2,139,742,213,785,240C829.1,267,873,245,916,218.7C960,192,1004,160,1047,160C1090.9,160,1135,192,1178,192C1221.8,192,1265,160,1309,170.7C1352.7,181,1396,235,1418,261.3L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 50 1440 320"
            className="absolute"
          >
            <path
              fill="#b8dff3"
              fill-opacity=".5"
              d="M0,160L30,176C60,192,120,224,180,208C240,192,300,128,360,133.3C420,139,480,213,540,224C600,235,660,181,720,176C780,171,840,213,900,208C960,203,1020,149,1080,133.3C1140,117,1200,139,1260,160C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
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
