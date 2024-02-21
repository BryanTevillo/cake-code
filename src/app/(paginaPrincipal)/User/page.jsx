"use client";

import { Button, Card, TextInput } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import "./style.css";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Pastel1 from "../../../../public/pastel-oreo.webp";
import Pastel2 from "../../../../public/pastel-chocolate.webp";
import Pastel3 from "../../../../public/pastelbaby.webp";
import Pastel4 from "../../../../public/Pastelcerezas.webp";

const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

function User() {
  return (
    <div>
      <div id="usuario" className="grid justify-items-center ">
        <div className={luckiestguy.className} id="titulo">
          TUS DATOS
        </div>
        <div className="grid justify-items-center md:grid-cols-1 xl:grid-cols-2">
          <div className="row-span-2 max-w-sm xl:mr-[100px]">
            <Card
              id=""
              className=" max-w-sm w-[500px] mt-[50px] ml-[0px] mr-[10px] mb-[20px]  md:w-[900px] xl: w-[800px] mr-[50px] mt-[10px] mb-[50px]"
            >
              <form className="flex flex-col ">
                <Card className="max-w-md ">
                  <div className="max-w-md space-y-5">
                    <div className="mb-2 block font-bold">
                      Datos de contacto
                      <Divider />
                    </div>
                    <TextInput
                      id="username_contact"
                      placeholder="Bonnie Green"
                      addon="Nombre:"
                      required
                    />
                    <TextInput
                      id="telefono"
                      placeholder="(###) #######"
                      addon="Número de teléfono:"
                      required
                    />
                    <TextInput
                      id="email"
                      placeholder="correo@dominio.com"
                      addon="Correo electrónico:"
                      required
                    />
                  </div>
                </Card>
                <br />
                <Card className="max-w-md">
                  <div className="max-w-md space-y-5">
                    <div className="mb-2 block font-bold">
                      Información de envío
                      <Divider />
                    </div>
                    <div className="font-semibold" p>
                      Dirección predeterminada
                    </div>
                    <Divider />
                    <TextInput
                      id="adress"
                      placeholder="Ejemplo"
                      addon="Dirección:"
                      required
                    />
                    <TextInput
                      id="postal_code"
                      placeholder="(###) #######"
                      addon="Código postal:"
                      required
                    />
                    <br />
                    <div className="font-semibold">Dirección adicional</div>
                    <Divider />
                    <TextInput
                      id="adress"
                      placeholder="Ejemplo"
                      addon="Dirección:"
                      required
                    />
                    <TextInput
                      id="postal_code"
                      placeholder="(###) #######"
                      addon="Código postal:"
                      required
                    />
                    <br />
                    <div className="flex justify-center">
                      <Button
                        className="bg-button_primary text-lg  px-2 py-1 "
                        type="tarjeta"
                      >
                        Actualizar dirección
                      </Button>
                    </div>
                    <br />
                    <div className="flex justify-center">
                      <Button
                        className="bg-button_primary text-lg  px-2 py-1"
                        type="tarjeta"
                      >
                        Agregar nueva dirección
                      </Button>
                    </div>
                  </div>
                </Card>
              </form>
            </Card>
          </div>
          <div className="row-span-2 mb-[50px] xl:ml-[100px]">
            <Card
              id=""
              className=" max-w-sm w-[500px] mt-[10px] mb-[50px] ml-[10px] mr-[10px] md:w-[500px] xl: w-[800px] mb-[50px]"
            >
              <form className="flex flex-col gap-4">
                <Card className="max-w-md">
                  <div className="max-w-md">
                    <div className="mb-2 block font-bold">
                      Opciones de pago
                      <Divider />
                      <br />
                    </div>
                    <div className="font-semibold">
                      Opción de pago predeterminada
                    </div>
                    <Divider />
                    <br />
                    <TextInput
                      id="pay_card"
                      placeholder="...#### (VISA)"
                      addon="Tarjeta de débito que termina en:"
                      required
                    />
                    <br />
                    <div className="font-semibold">
                      Opción de pago adicional
                    </div>
                    <br />
                    <TextInput
                      id="pay_card"
                      placeholder="...#### (VISA)"
                      addon="Tarjeta de crédito que termina en:"
                      required
                    />
                    <br />
                    <div className="flex justify-center">
                      <Button
                        className="bg-button_primary text-lg  px-2 py-1"
                        type="tarjeta"
                      >
                        Actualizar opción de pago
                      </Button>
                    </div>
                    <br />
                    <div className="flex justify-center">
                      <Button
                        className="bg-button_primary text-lg  px-2 py-1  text-center"
                        type="tarjeta"
                      >
                        Agregar nueva tarjeta
                      </Button>
                    </div>
                  </div>
                </Card>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <div>
        <div className="h-[23px]  md:h-[50px] xl:h-[70px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 5 1440 200"
            className="absolute"
          >
            <path
              fill="#FFDDCC"
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
              fill="#FFDDCC"
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
              fill="#FFDDCC"
              fill-opacity=".5"
              d="M0,160L30,176C60,192,120,224,180,208C240,192,300,128,360,133.3C420,139,480,213,540,224C600,235,660,181,720,176C780,171,840,213,900,208C960,203,1020,149,1080,133.3C1140,117,1200,139,1260,160C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div
          className="min-h-full sm:h-[50px] md:h-[1700px] grid justify-items-center"
          id="usuario2"
        >
          <div
            className={luckiestguy.className + " md:mt-[50px] xl:mt-[100px]"}
            id="titulo"
          >
            TU HISTORIAL DE COMPRAS
          </div>
          <div className="grid justify-items-center md:grid-cols-2 xl:grid-cols-3">
            <div className={opensans.className}>
              <Card className="max-w-xs my-4">
                <Image
                  src={Pastel1}
                  alt="Pastel1"
                  className="w-[250px] h-[310px]"
                />
                <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                  Oreo con vainilla
                </h5>
                <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                  $450.00
                </p>
                <div className="flex justify-center">
                  <Button
                    className="bg-button_primary text-lg  px-3 py-2  text-center"
                    type="tarjeta"
                  >
                    Comprar de nuevo
                  </Button>
                </div>
              </Card>
            </div>
            <div>
              <Card className="max-w-xs my-4">
                <Image
                  src={Pastel2}
                  alt="Pastel2"
                  className="w-[250px] h-[310px]"
                />
                <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                  Chocolate con frutos rojos
                </h5>
                <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                  $350.00
                </p>
                <div className="flex justify-center">
                  <Button
                    className="bg-button_primary text-lg  px-3 py-2  text-center"
                    type="tarjeta"
                  >
                    Comprar de nuevo
                  </Button>
                </div>
              </Card>
            </div>
            <div>
              <Card className="max-w-xs my-4">
                <Image
                  src={Pastel3}
                  alt="Pastel3"
                  className="w-[280px] h-[310px]"
                />
                <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                  Chocolate para Baby shower
                </h5>
                <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                  $250.00
                </p>
                <div className="flex justify-center">
                  <Button
                    className="bg-button_primary text-lg  px-3 py-2  text-center"
                    type="tarjeta"
                  >
                    Comprar de nuevo
                  </Button>
                </div>
              </Card>
            </div>
            <div>
              <Card className="max-w-xs my-4">
                <Image
                  src={Pastel4}
                  alt="Pastel4"
                  className="w-[250px] h-[310px]"
                />
                <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                  Chocolate con cerezas
                </h5>
                <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                  $450.00
                </p>
                <div className="flex justify-center">
                  <Button
                    className="bg-button_primary text-lg  px-3 py-2  text-center"
                    type="tarjeta"
                  >
                    Comprar de nuevo
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="h-[12px]  md:h-[25px] xl:h-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 5 1440 200"
            className="absolute"
          >
            <path
              fill="#CAEDFF"
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
              fill="#CAEDFF"
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
              fill="#CAEDFF"
              fill-opacity=".5"
              d="M0,160L30,176C60,192,120,224,180,208C240,192,300,128,360,133.3C420,139,480,213,540,224C600,235,660,181,720,176C780,171,840,213,900,208C960,203,1020,149,1080,133.3C1140,117,1200,139,1260,160C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="h-[70px] md:h-[150px] xl:h-[205px]" id="divrosa"></div>
      </div>
    </div>
  );
}

export default User;
