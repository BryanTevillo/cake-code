"use client";

import { Label, TextInput } from "flowbite-react";
import { Card } from "flowbite-react";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import imgDireccion from "../../../public/direccion.png";
import Image from "next/image";

function page() {
  return (
    <div>
      <Card
        style={{
          marginLeft: 100,
          marginRight: 100,
          marginTop: 50,
          marginBottom: 50,
        }}
        className="bg-blue_card sm:h-full"
      >
        <div
          className="sm:max-w"
          style={{
            marginLeft: 100,
            marginBottom: 50,
          }}
        >
          <h1 className={luckiestguy.className} id="titulo">
            Contacto
          </h1>
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cake Code
              </h2>
              <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Matriz
              </h4>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                #39 Poniente 2902 Col. El Vergel, Circuito Juan Pablo II Tel.
                443-169-70-64
              </p>
              <Image src={imgDireccion} alt="Dirección de matriz" />
            </div>
            <div
              className="md:m-50 sm:m-100"
              // style={{
              //   marginLeft: 50,
              //   marginBottom: 50,
              //   //marginTop: 50,
              // }}
            >
              <div className="flex max-w-md flex-col gap-4 ">
                <div>
                  <div>
                    {" "}
                    <Label htmlFor="disabledInput1">API token</Label>
                    <TextInput
                      type="text"
                      id="disabledInput1"
                      placeholder="Disabled input"
                      disabled
                    />
                  </div>
                  <div>
                    <Label htmlFor="disabledInput2">
                      Personal access token
                    </Label>
                    <TextInput
                      type="text"
                      id="disabledInput2"
                      placeholder="Disabled readonly input"
                      disabled
                      readOnly
                    />
                  </div>
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default page;

//className="grid md:grid-cols-2"
//className="justify-selft-center"
