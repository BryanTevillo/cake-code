"use client";

import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Card, Button } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import pinkCake from "../../../../../public/customC/pinkCake.webp";
import mediano from "../../../../../public/customC/mediano.png";
import Cake2 from "../../../../../public/customC/extrachoco.webp";
import Topp2 from "../../../../../public/customC/dripObs.webp";
import Topp6 from "../../../../../public/customC/galletasChoco.webp";
import Topp1 from "../../../../../public/customC/cumple.webp";
import Carta from "../../../../../public/customC/carta.webp";
import ProgressResumen from "./Progreso";

import "./styles.css";
export default function resumen() {
  return (
    <main>
      <div
        className="grid  grid-cols-1 md:grid-cols-2 "
        style={{ paddingBottom: 0 }}
        id="titulo"
      >
        <div className="mt-10">
          <h1
            className={[
              luckiestguy.className +
                " text-5xl tracking-wide text-center md:text-6xl xl:text-7xl md:pt-16 xl:pt-20",
            ]}
          >
            Vamos a crear tu pastel!
          </h1>
          <h2
            className={[
              opensans.className + " text-3xl mt-2 text-center text-gray-700",
            ]}
          >
            Sigue los pasos
          </h2>
        </div>
        <div>
          <Image
            className=" w-full  h-auto -mb-20 mt-10 md:-mb-30 md:mt-0 xl:w-[500px] xl:mt-16  "
            src={pinkCake}
          ></Image>
        </div>
      </div>
      <div className="relative md:h-10 xl:h-16 -ml-5" id="titulo">
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
      <div className="h-[100px] md:h-[190px] xl:h-[220px]" id="sub1">
        <p
          className={[
            opensans.className +
              " text-3xl text-center text-gray-700 pt-12 md:text-6xl md:pt-24 xl:pt-28",
          ]}
        >
          8. Resumen de compra
        </p>
      </div>
      <div className="relative md:h-10 xl:h-16 -ml-5" id="sub1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 5 1440 200"
          className="absolute"
        >
          <path
            fill="#ffb0cd"
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
            fill="#ffb0cd"
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
            fill="#ffb0cd"
            fill-opacity=".5"
            d="M0,160L30,176C60,192,120,224,180,208C240,192,300,128,360,133.3C420,139,480,213,540,224C600,235,660,181,720,176C780,171,840,213,900,208C960,203,1020,149,1080,133.3C1140,117,1200,139,1260,160C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:py-10 md:px-10 bg-[#eef6fb] justify-items-center gap-4 ">
        <div className="mt-20">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            1. Tamaño
          </p>
          <Card className="  w-[350px] md:w-[400px] md:h-[480px] xl:w-[350px] border-none rounded-none  ">
            <Image
              src={mediano}
              className="w-[300px] h-[300px] md:pl-10 xl:pl-0"
            ></Image>

            <p
              className={[
                opensans.className,
                " text-xl md:text-3xl md:text-center xl:text-2xl font-normal text-gray-700 dark:text-gray-400",
              ]}
            >
              Mediano - 18 cm (20 Rebanadas)
            </p>
            <p className="font-bold text-xl md:text-3xl xl:text-2xl text-center">
              $2762.00
            </p>

            <div className="flex justify-center">
              <Link href={"/Categorias/CreaTuPastel/Tamano"}>
                <Button className="bg-button_primary" type="signin">
                  EDITAR
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        <div className="mt-10 md:mt-20">
          <p className={[opensans.className + " text-xl  text-center"]}>
            2. Sabor
          </p>
          <Card className=" w-[350px] h-[498px] md:w-[400px] md:h-[480px] xl:w-[350px] border-none rounded-none  ">
            <h2
              className={[
                luckiestguy.className + " text-center text-4xl tracking-wide",
              ]}
            >
              Sabor Seleccionado
            </h2>

            <p
              className={[
                opensans.className,
                " text-xl md:text-3xl md:text-center xl:text-2xl font-normal text-gray-700 dark:text-gray-400",
              ]}
            >
              Selva Negra
            </p>

            <div className="flex justify-center">
              <Link href={"/Categorias/CreaTuPastel/Sabor"}>
                <Button className="bg-button_primary" type="signin">
                  EDITAR
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-10 md:mt-20">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            3. Diseño
          </p>
          <Card className=" w-[350px] md:w-[400px] md:h-[480px] xl:w-[350px] border-none rounded-none  ">
            <Image
              src={Cake2}
              className="w-[300px] h-[300px] md:pl-10 xl:pl-0"
            ></Image>

            <p
              className={[
                opensans.className,
                " text-2xl md:text-3xl md:text-center xl:text-2xl font-normal text-gray-700 dark:text-gray-400",
              ]}
            >
              Buttercream de chocolate
            </p>

            <div className="flex justify-center">
              <Link href={"/Categorias/CreaTuPastel/Diseno"}>
                <Button className="bg-button_primary" type="signin">
                  EDITAR
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        <div className="mt-10 md:mt-20">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            4. Toppings (1)
          </p>
          <Card className=" w-[350px] md:w-[400px] md:h-[480px] xl:w-[350px] border-none rounded-none  ">
            <Image
              src={Topp2}
              className="w-[300px] h-[300px] md:pl-10 xl:pl-0"
            ></Image>

            <p
              className={[
                opensans.className,
                " text-2xl text-center md:text-3xl md:text-center xl:text-2xl font-normal text-gray-700 dark:text-gray-400",
              ]}
            >
              Drip de chocolate
            </p>

            <div className="flex justify-center">
              <Link href={"/Categorias/CreaTuPastel/Toppings1"}>
                <Button className="bg-button_primary" type="signin">
                  EDITAR
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        <div className=" mt-10  md:mt-20 ">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            5. Toppings (2)
          </p>
          <Card className=" w-[350px]  md:w-[400px] md:h-[480px] xl:w-[350px] border-none rounded-none  ">
            <Image
              src={Topp6}
              className="w-[300px] h-[300px] md:pl-10 xl:pl-0"
            ></Image>

            <p
              className={[
                opensans.className,
                " text-2xl text-center md:text-3xl md:text-center xl:text-2xl font-normal text-gray-700 dark:text-gray-400",
              ]}
            >
              Galletas y macarrones de chocolate
            </p>

            <div className="flex justify-center">
              <Link href={"/Categorias/CreaTuPastel/Toppings2"}>
                <Button className="bg-button_primary" type="signin">
                  EDITAR
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        <div className="mt-10 md:mt-20 ">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            6. Topper
          </p>
          <Card className="w-[350px] md:w-[400px] md:h-[480px] xl:w-[350px] border-none rounded-none ">
            <Image
              src={Topp1}
              className="w-[300px] h-[300px] md:pl-10 xl:pl-0"
            ></Image>

            <p
              className={[
                opensans.className +
                  " text-2xl text-center md:text-3xl xl:text-2xl font-normal md:text-center text-gray-700 dark:text-gray-400",
              ]}
            >
              Feliz Cumpleaños
            </p>

            <div className="flex justify-center">
              <Link href={"/Categorias/CreaTuPastel/Topper"}>
                <Button className="bg-button_primary" type="signin">
                  EDITAR
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        <div className="mt-10 mb-10 md:mt-20 ">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            7. Carta
          </p>
          <Card className="w-[350px] md:w-[400px] md:h-[480px] xl:w-[350px] border-none rounded-none ">
            <Image
              src={Carta}
              className="w-[300px] h-[300px] md:pl-10 xl:pl-0"
            ></Image>

            <p
              className={[
                opensans.className +
                  " text-2xl text-center md:text-3xl xl:text-2xl font-normal md:text-center text-gray-700 dark:text-gray-400",
              ]}
            >
              Mensaje escrito (gratis)
            </p>

            <div className="flex justify-center">
              <Link href={"/Categorias/CreaTuPastel/Tarjeta"}>
                <Button className="bg-button_primary" type="signin">
                  EDITAR
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
      <ProgressResumen></ProgressResumen>
    </main>
  );
}
