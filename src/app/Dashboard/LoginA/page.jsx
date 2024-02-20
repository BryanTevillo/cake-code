"use client";

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import "./style.css";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
export default function page() {
  return (
    <div>

        <div id="usuario" className="grid justify-items-center ">
            <div className={luckiestguy.className} id ="titulo">
             Hola Admin
            </div>


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
        
        <div className="flex justify-center">
        <Button href="/Usuario" className="bg-button_primary text-lg  px-2 py-1  text-center" type="signin">Iniciar sesión</Button>
      </div>
      </form>
    </Card>
  </div>

  


      
</div>
  )
}