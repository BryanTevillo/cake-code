"use client";

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import "./style.css";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
export default function Login() {
  return (
    
    <div className="grid justify-items-center md:grid-cols-1 xl:grid-cols-2">
        <Card className="max-w-lg w-[300px] mt-[50px] mb-50 md:w-[700px] xl: mb-[50px]">
      <form className="flex flex-col gap-4">
        <div>
        <div className={luckiestguy.className}>
            <Label htmlFor="email1" value="INICIAR SESIÓN" />
          </div>
          <div className="mb-1 block">
            <Label htmlFor="email1" value="Correo electrónico" />
          </div>
          <TextInput id="email1" type="email" placeholder="nombre@dominio.com" required />
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="password1" value="Contraseña" />
          </div>
          <TextInput id="password1" type="password" placeholder="********" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Recuerdame</Label>
        </div>
        <div>
            <p>¿Olvidaste tu contraseña?</p>
        </div>
        <Button className="bg-button_primary" type="signin">INICIAR SESIÓN</Button>
      </form>
    </Card>

    <div className="row-span-2 mb-[50px] " >
    <Card className="max-w w-[300px] mt-[50px] md:w-[600px] xl:w-[500px]">
      <form className="flex flex-col gap-4">

          <div className={luckiestguy.className}>
            <Label htmlFor="email1" value="REGISTRATE" />
          </div>
          <div>
            <p> Al crear una cuenta podrás registrar una opción de pago y una dirección de envio, lo que te facilitará futuras compras en nuestro sitio.</p>
          </div>

        <Button className="bg-button_primary" type="signup">CREAR CUENTA</Button>
      </form>
    </Card>
    </div>

    </div>
  )
}