"use client";
import Image from "next/image";
import PastelCereza from "@/../../public/Pastelcerezas.webp";
import { Divider } from "@mui/material";
import CountCar from "../CountCar/CountCar";
function Cart() {
  return (
    <>
      <li className="flex flex-col bg-white rounded-2xl">
        <div className="flex justify-end mr-1.5 mt-1.5 ">
          <button className="text-blue-600  hover:text-red-600">
            <span className="sr-only">Eliminar</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-5  ">
          <Image
            src={PastelCereza}
            alt=""
            className="size-16 rounded object-cover m-5"
          />

          <div>
            <h3 className="text-sm text-gray-900">
              Pastel de cereza de chocolate con fondan blanco
            </h3>

            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt className="inline">Peso:</dt>
                <dd className="inline">5kg</dd>
              </div>

              <div>
                <dt className="inline">Sabor:</dt>
                <dd className="inline">Chocolate</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-1 items-center justify-end ">
            <CountCar></CountCar>
          </div>

          <div className="flex flex-1 items-center justify-end mr-3">
            <h3>$350</h3>
          </div>
        </div>

        <div className="">
          <Divider></Divider>
          <div className="flex justify-between">
            <h3 className=" text-sm text-gray-900 ml-3">Envio</h3>
            <h3 className="mr-3"> $120</h3>
          </div>
        </div>
      </li>
    </>
  );
}

export default Cart;
