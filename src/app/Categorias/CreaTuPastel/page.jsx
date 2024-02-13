"use client";

import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Card } from "flowbite-react";
import "./styles.css";
import Image from "next/image";
import pinceles from "../../../../public/pincel.svg";
import Cake1 from "../../../../public/pastel-creatupastel.png";
import Cake2 from "../../../../public/pastel-creatupastel2.png";
export default function CreaTuPastel() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 " id="titulo">
        {/* <h1 className={luckiestguy.className}>
          Hola, soy una pagina de pasteles
        </h1> */}
        <div className="grid grid-cols-2 gap-4  ">
          <div className="">
            <Image src={Cake1} className=" md:size-auto  mt-10" id="image" />
          </div>
          <div className="size-32">
            <Image src={Cake2} className="md:size-auto pt-12 mt-12" />
          </div>
        </div>
        <Card className="max-w-xl" id="titulo">
          <div>
            <Image
              src={pinceles}
              alt="image 1"
              id="card-image"
              className="absolute bg-local"
            />
            <div className="">
              <h2 className={[luckiestguy.className]} id="titulo-card">
                Crea tu pastel
              </h2>
            </div>
          </div>
          <p
            className={[
              opensans.className,
              " text-xl font-normal text-gray-700 dark:text-gray-400",
            ]}
          >
            Crea el pastel de tus sueños
          </p>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              href="#"
              className="items-center rounded-lg bg-cyan-700 px-12 py-4 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Crear Ahora
            </a>
          </div>
        </Card>
      </div>
      {/* <Image src={pinceles}></Image> */}
      <div className="h-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
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
      <h2 className="" id="subtitulo">
        Soy un subtitulo
      </h2>
      <h2 className={[opensans, " static "]} id="subtitulo">
        Soy un subtitulo de pasteles
      </h2>
    </>
  );
}
