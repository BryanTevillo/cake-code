"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AvisoModal from "../components/Privacy/AvisoModal";
import "./styles.css";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

export default function Signup() {
  return (
    <div id="signup" className="grid  justify-items-center ">
      <div  className={luckiestguy.className} id="titulo">
       REGISTRATE
      </div>
      <Card id="divrosa" style={{ marginLeft: 100,
            marginRight: 100,
            marginTop: 10,
            marginBottom: 50,
            width: 500,
            padding: 30, }} className="max-w-lg ">
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
            <TextInput id="apellido1" type="" placeholder="apellido" required />
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

          <Button type="direccion">AGREGAR OTRA DIRECCIÓN DE ENVÍO</Button>

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
              <TextInput id="CVCtarjeta1" type="" placeholder="***" required />
            </div>
          </div>

          <Button type="tarjeta">AGREGAR OTRA TARJETA</Button>

          <div className="flex items-center gap-2">
            <Checkbox id="privacy" />
            <Label htmlFor="privacy">
              Lee y firma nuestra <AvisoModal></AvisoModal>
            </Label>
          </div>
          <Button type="tarjeta">CREAR CUENTA</Button>
        </form>
      </Card>
    </div>
  );
}
