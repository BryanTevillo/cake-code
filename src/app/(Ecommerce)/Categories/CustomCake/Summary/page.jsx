"use client";

import ItemCountC from "../../../../components/CounterCustomC/CounterC";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import CardSum from "@/app/components/CardSum/CardSum";
import Link from "next/link";
import Waves from "@/app/components/WavesComponent/Waves";
import Image from "next/image";
import pinkCake from "../../../../../../public/customC/pinkCake.webp";
import mediano from "../../../../../../public/customC/mediano.webp";
import sabor from "../../../../../../public/customC/sabor.webp";
import Cake2 from "../../../../../../public/customC/extrachoco.webp";
import Topp2 from "../../../../../../public/customC/dripObs.webp";
import Topp6 from "../../../../../../public/customC/galletasChoco.webp";
import Topp1 from "../../../../../../public/customC/cumple.webp";
import Carta from "../../../../../../public/customC/carta.webp";
import ProgressResumen from "./Progreso";
import { useState } from "react";
import Alert from "@mui/material/Alert";

import "./styles.css";
export default function resumen() {
  const [showAlert, setShowAlert] = useState(false);
  const [value, setValue] = useState("one");

  const handleChageAlert = (qty) => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1200);
  };
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
        <Waves color="#FFDDCC"></Waves>
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
        <Waves color="#ffb0cd"></Waves>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:py-10 md:px-10 bg-[#eef6fb] justify-items-center gap-4 ">
        <div className="mt-20">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            1. Tamaño
          </p>
          <CardSum
            img={mediano}
            alter="mediano"
            text1="Mediano - 18 cm (20 Rebanadas)"
            text2="$2762.00"
            refer="/Categories/CustomCake/Size"
          ></CardSum>
        </div>
        <div className="mt-10 md:mt-20">
          <p className={[opensans.className + " text-xl mb-2 text-center"]}>
            2. Sabor
          </p>
          <CardSum
            img={sabor}
            alter="sabor del pastel"
            text1="Selva Negra"
            text2=""
            refer="/Categories/CustomCake/Flavor"
          ></CardSum>
        </div>

        <div className="mt-10 md:mt-20">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            3. Diseño
          </p>
          <CardSum
            img={Cake2}
            alter="diseno"
            text1="Buttercream de chocolate"
            text2=""
            refer="/Categories/CustomCake/DesignC"
          ></CardSum>
        </div>
        <div className="mt-10 md:mt-20">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            4. Toppings (1)
          </p>
          <CardSum
            img={Topp2}
            alter="toppings"
            text1="Drip de chocolate"
            text2=""
            refer="/Categories/CustomCake/Toppings1"
          ></CardSum>
        </div>
        <div className=" mt-10  md:mt-20 ">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            5. Toppings (2)
          </p>
          <CardSum
            img={Topp6}
            alter="Toppings"
            text1="Galletas y macarrones de chocolate"
            text2=""
            refer="/Categories/CustomCake/Toppings2"
          ></CardSum>
        </div>
        <div className="mt-10 md:mt-20 ">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            6. Topper
          </p>
          <CardSum
            img={Topp1}
            alter="topper"
            text1="Feliz Cumpleaños"
            text2=""
            refer="/Categories/CustomCake/Topper"
          ></CardSum>
        </div>
        <div className="mt-10 mb-10 md:mt-20 ">
          <p className={[opensans.className + " text-xl  text-center mb-2"]}>
            7. Carta
          </p>
          <CardSum
            img={Carta}
            alter="carta"
            text1="Mensaje escrito (gratis)"
            text2=""
            refer="/Categories/CustomCake/Topper"
          ></CardSum>
        </div>
      </div>
      {showAlert && (
        <Alert variant="filled" severity="success">
          Haz añadido este producto al carrito
        </Alert>
      )}
      <div className="bg-[#eef6fb] pb-10">
        <ItemCountC onAdd={handleChageAlert} />
      </div>
      <ProgressResumen></ProgressResumen>
    </main>
  );
}
