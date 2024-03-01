"use client";

import { Label, Textarea } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import Image from "next/image";
import React from "react";
import pinkCake from "../../../../../../public/customC/pinkCake.webp";
import ProgressTarjeta from "./Progreso";
import Waves from "@/app/components/WavesComponent/Waves";
import "./styles.css";

export default function Tarjeta() {
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
          7. Tarjeta
        </p>
      </div>
      <div className="relative md:h-10 xl:h-16 -ml-5" id="sub1">
        <Waves color="#ffb0cd"></Waves>
      </div>
      <div className="bg-[#eef6fb]">
        <div className=" pt-[100px] pl-[50px] pb-16 md:pt-[145px] md:pl-[80px] xl:pt-[200px] xl:pl-[120px]">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="relative float-left -ml-[1.5rem] mr-1 mt-2 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="flexRadioDefault"
              id="radioDefault01"
            />
            <label
              className={[
                opensans.className +
                  " inline-block pl-3 hover:cursor-pointer text-3xl",
              ]}
              htmlFor="radioDefault01"
            >
              Sin tarjeta
            </label>
          </div>
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-10">
            <input
              className="relative float-left -ml-[1.5rem] mr-1 mt-2 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="radio"
              name="flexRadioDefault"
              id="radioDefault01"
            />
            <label
              className={[
                opensans.className +
                  " inline-block pl-3 hover:cursor-pointer text-3xl",
              ]}
              htmlFor="radioDefault01"
            >
              Escribir mensaje (gratis)
            </label>
          </div>
        </div>
        <div className="w-[350px] ml-10 pb-20 md:ml-32 md:w-[600px] md:h-[200px] bg-[#eef6fb]">
          <Label htmlFor="comment" className="text-2xl md:text-4xl ">
            Escribe tu mensaje:
            <Textarea
              className="mt-6"
              id="comment"
              placeholder="Escribe tu mensaje aqui :D"
              required
              rows={4}
            />
          </Label>
        </div>
      </div>
      <ProgressTarjeta></ProgressTarjeta>
    </main>
  );
}
