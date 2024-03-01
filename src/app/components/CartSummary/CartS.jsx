"use client";
import Image from "next/image";
import PastelCereza from "@/../../public/Pastelcerezas.webp";
import { Divider } from "@mui/material";
import CountCar from "../CountCar/CountCar";
function CartS() {
  return (
    <>
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

        <div className="flex flex-1 items-center justify-end mr-3">
          <h3>$350</h3>
        </div>
      </div>
    </>
  );
}

export default CartS;
