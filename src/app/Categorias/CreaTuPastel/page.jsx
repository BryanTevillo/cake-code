"use client";

import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Card } from "flowbite-react";
import "./styles.css";
import Image from "next/image";
import pinceles from "../../../../public/pincel.svg";
import Cake1 from "../../../../public/customC/pastel-creatupastel.png";
import Cake2 from "../../../../public/customC/pastel-creatupastel3.png";
import Flecha1 from "../../../../public/customC/flecha1.png";
import Link from "next/link";
export default function CreaTuPastel() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 " id="titulo">
        <div className=" mt-36  ">
          <div className=" -mb-8 -ml-5 ">
            <Image height={900} width={900} src={Cake1} className="" />
          </div>
        </div>

        <div className=" place-items-center  mt-36 ml-20">
          <Card
            className=" w-2/3 border-none rounded-none shadow-none "
            id="titulo"
          >
            <div className="text-8xl tracking-wide ">
              <h2 className={[luckiestguy.className]}>Crea tu pastel</h2>
            </div>

            <p
              className={[
                opensans.className,
                " text-3xl font-normal text-gray-700 dark:text-gray-400",
              ]}
            >
              Crea el pastel de tus sueños
            </p>
            <div className="flex justify-center">
              <Link href="../Categorias/CreaTuPastel/CustomCake">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Crear ahora
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
      {/* <Image src={pinceles}></Image> */}
      <div className="relative h-36 -ml-5" id="titulo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
          className="absolute"
        >
          <path
            fill="#FFDDCC"
            fill-opacity="1"
            d="M0,96L21.8,112C43.6,128,87,160,131,149.3C174.5,139,218,85,262,64C305.5,43,349,53,393,69.3C436.4,85,480,107,524,122.7C567.3,139,611,149,655,144C698.2,139,742,117,785,101.3C829.1,85,873,75,916,64C960,53,1004,43,1047,58.7C1090.9,75,1135,117,1178,138.7C1221.8,160,1265,160,1309,154.7C1352.7,149,1396,139,1418,133.3L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute"
        >
          <path
            fill="#FFDDCC"
            fill-opacity=".7"
            d="M0,128L21.8,154.7C43.6,181,87,235,131,266.7C174.5,299,218,309,262,293.3C305.5,277,349,235,393,208C436.4,181,480,171,524,149.3C567.3,128,611,96,655,117.3C698.2,139,742,213,785,240C829.1,267,873,245,916,218.7C960,192,1004,160,1047,160C1090.9,160,1135,192,1178,192C1221.8,192,1265,160,1309,170.7C1352.7,181,1396,235,1418,261.3L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute"
        >
          <path
            fill="#FFDDCC"
            fill-opacity=".5"
            d="M0,160L30,176C60,192,120,224,180,208C240,192,300,128,360,133.3C420,139,480,213,540,224C600,235,660,181,720,176C780,171,840,213,900,208C960,203,1020,149,1080,133.3C1140,117,1200,139,1260,160C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-4  place-content-around " id="sub1">
        <div className="text-center h-100 mt-36 mb-10 w-5/6" id="titulo-card">
          <h2 className={[luckiestguy.className]}>¿Qué es crea tu pastel?</h2>
        </div>
        <div className="place-content-around text-justify text-2xl w-5/6 mt-36 mb-10">
          <p>
            En un mundo en donde el tiempo es lo más valioso, queríamos hacer el
            proceso de ordenar un pastel personalizado más sencillo y eficiente
            para usted! Hicimos un sistema instantáneo para usted, en el que
            puede elegir TODO, desde sabores, diseños y toppings.
          </p>

          <p>
            Todo lo hemos seleccionado pensando en las necesidades de nuestros
            clientes y las tendencias en repostería, agregamos diseños muy
            llamativos que se llevan bien con todos los toppings seleccionados!
          </p>
          <p>Sigue cada paso y diseña un hermoso pastel hecho solo para ti!</p>
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-4  place-content-around"
        id="subtitulo"
      >
        <div className="order-2">
          <Image height={700} src={Cake2}></Image>
        </div>
        <div className="order-1 text-4xl mt-36 ml-36" id="">
          <div className="grid grid-cols-2">
            <div>
              <div className="w-1/3 text-center">
                <h2 className={luckiestguy.className}>Elige los toppings</h2>
              </div>

              <div className="w-1/3 text-center mt-36">
                <h2 className={luckiestguy.className}>Elige el sabor</h2>
              </div>
            </div>
            <Image src={Flecha1} height={150}></Image>
          </div>
        </div>
      </div>
    </>
  );
}
