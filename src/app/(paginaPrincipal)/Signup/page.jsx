"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import CreditCardIcon from "@mui/icons-material/CreditCard";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 5 1440 200"
          className="absolute"
        >
          <path
            fill="#ffddcc"
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
            fill="#ffddcc"
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
            fill="#ffddcc"
            fill-opacity=".5"
            d="M0,160L30,176C60,192,120,224,180,208C240,192,300,128,360,133.3C420,139,480,213,540,224C600,235,660,181,720,176C780,171,840,213,900,208C960,203,1020,149,1080,133.3C1140,117,1200,139,1260,160C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="h-[70px] md:h-[150px] xl:h-[205px]" id="divrosa"></div>
    </div>
  );
}
