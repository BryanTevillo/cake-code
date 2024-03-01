"use client";

import { Button, Card, TextInput } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import "./style.css";
import Divider from "@mui/material/Divider";
import Waves from "@/app/components/WavesComponent/Waves";
import CardUsers from "@/app/components/CardUsers/CardUsers";
import Image from "next/image";
import Pastel1 from "../../../../public/pastel-oreo.webp";
import Pastel2 from "../../../../public/pastel-chocolate.webp";
import Pastel3 from "../../../../public/pastelbaby.webp";
import Pastel4 from "../../../../public/Pastelcerezas.webp";
import Pastel5 from  "../../../../public/Pastelunicornio.webp";

const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

import useLocalStorage from "@/app/lib/hook";

import { redirect } from "next/navigation";


function User() {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useLocalStorage(
    "isAuthenticatedUser",
    false
  );
  const [isAuthenticatedAdmin, setIsAuthenticatedAdmin] = useLocalStorage(
    "isAuthenticatedAdmin",
    false
  );

  if (!isAuthenticatedUser) {
    redirect("/Login");
  }
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
        <Waves color="#FFDDCC"></Waves>
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
            
            <CardUsers
              img={Pastel1}
              description={"Oreo con vainilla"}
              price={"450.00"}
            ></CardUsers>
            <CardUsers
              img={Pastel2}
              description={"Chocolate con frutos rojos"}
              price={"350.00"}
            ></CardUsers>
            <CardUsers
              img={Pastel5}
              description={"Pastel Unicornio"}
              price={"$550.00"}
            ></CardUsers>
            <CardUsers
              img={Pastel4}
              description={"Chocolate con cerezas"}
              price={"$250.00"}
            ></CardUsers>

          </div>
        </div>
        <div className="h-[12px]  md:h-[25px] xl:h-[30px]">
        <Waves color="#CAEDFF"></Waves>
        </div>
        <div className="h-[70px] md:h-[150px] xl:h-[205px]" id="divrosa"></div>
      </div>
    </div>
  );
}
export default User;
