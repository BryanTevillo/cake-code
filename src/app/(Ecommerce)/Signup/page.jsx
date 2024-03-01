"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Waves from "@/app/components/WavesComponent/Waves";
import { useState } from "react";
import { Modal } from "flowbite-react";
import ModalPrivacy from "../../components/Privacy/ModalPrivacy";
import "./styles.css";

const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

export default function Signup() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div id="signup" className="grid justify-items-center ">
        <div className={luckiestguy.className} id="titulo">
          REGISTRATE
        </div>
        <Card
          id=""
          className="max-w-lg w-[300px] mt-[50px] mb-50 md:w-[700px] xl: mb-[50px]"
        >
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-1 block">
                <Label htmlFor="nombre1" value="Nombre(s)*" />
              </div>
              <TextInput id="nombre1" type="" placeholder="nombre" required />
            </div>

            <div>
              <div className="mb-1 block">
                <Label htmlFor="apellido1" value="Apellidos*" />
              </div>
              <TextInput
                id="apellido1"
                type=""
                placeholder="apellido"
                required
              />
            </div>

            <div>
              <div className="mb-1 block">
                <Label htmlFor="telefono1" value="Teléfono*" />
              </div>
              <TextInput
                id="telefono1"
                type=""
                placeholder="(###) ### ## ##"
                required
              />
            </div>

            <div>
              <div className="mb-1 block">
                <Label htmlFor="email1" value="Correo electrónico*" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="nombre@dominio.com"
                required
              />
            </div>

            <div>
              <div className="mb-1 block">
                <Label htmlFor="password1" value="Contraseña" />
              </div>
              <TextInput
                id="password1"
                type="password"
                placeholder="********"
                required
              />
            </div>

            <div>
              <div className="mb-1 block">
                <Label htmlFor="adress1" value="Dirección*" />
              </div>
              <TextInput
                id="adress1"
                type=""
                placeholder="Calle / número"
                required
              />
            </div>

            <div>
              <div className="mb-1 block">
                <Label htmlFor="postal1" value="Codigo Postal*" />
              </div>
              <TextInput id="postal1" type="" placeholder="#####" required />
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-button_primary text-lg  md:w-[200px] md:h-[40px] md:text-4xl  text-center"
                type="direccion"
              >
                Agregar otra dirección
              </Button>
            </div>
            <div>
              <Label
                htmlFor="tarjeta1"
                value="Agregar una tarjeta de crédito o débito  "
              />
              <CreditCardIcon />
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="tarjeta1" value="Número de tarjeta*" />
              </div>
              <TextInput
                id="tarjeta1"
                type=""
                placeholder="4742 **** **** **** ****"
                required
              />
            </div>

            <div>
              <div className="mb-1 block">
                <Label htmlFor="ntarjeta1" value="Nombre en la tarjeta*" />
              </div>
              <TextInput
                id="ntarjeta1"
                type=""
                placeholder="NOMBRE APELLIDO"
                required
              />
            </div>
            {/* <div class="row">
  <div class="column"></div>
  <div class="column"></div>
</div> */}
            <div className=" items-center justify-end mt-1">
              <div className="mb-1 block">
                <Label htmlFor="ftarjeta1" value="Fecha de vencimiento*" />
                <TextInput
                  id="ftarjeta1"
                  type=""
                  placeholder="MM / AA"
                  required
                />
              </div>
              <div className="mb-1 block">
                <Label htmlFor="CVCtarjeta1" value="CVC*" />{" "}
                <TextInput
                  id="CVCtarjeta1"
                  type=""
                  placeholder="***"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-button_primary text-lg  px-2 py-1  text-center"
                type="tarjeta"
              >
                Agregar otra tarjeta
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="privacyCheck" />
              <Label htmlFor="privacy">
                Lee y firma nuestro{" "}
                <a
                  href="#"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Aviso de privacidad
                </a>
                <Modal show={showModal} onClose={() => setShowModal(false)}>
                  <ModalPrivacy></ModalPrivacy>
                </Modal>
              </Label>
            </div>
            <div className="flex justify-center">
              <Button
                href="/Usuario"
                className="bg-button_primary text-lg  px-2 py-1  text-center"
                type="tarjeta"
              >
                Crear cuenta
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <div className="h-[12px]  md:h-[25px] xl:h-[30px]">
      <Waves color="#FFDDCC"></Waves>
      </div>
      <div className="h-[70px] md:h-[150px] xl:h-[205px]" id="divrosa"></div>
    </div>
  );
}
