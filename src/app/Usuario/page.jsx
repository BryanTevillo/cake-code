"use client";

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import CreditCardIcon from '@mui/icons-material/CreditCard';
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

function User() {
  return (
    <div className="grid  justify-items-center ">
        <div className={luckiestguy.className} id ="titulo">
                <Label htmlFor="email1" value="REGISTRATE" />
        </div>
        <Card style={{margin:50}} className="max-w-lg ">
      <form className="flex flex-col gap-4">
        <div>
            
            <div className="mb-1 block">
                <Label htmlFor="nombre1" value="Nombre(s)*" />
            </div>
            <TextInput id="nombre1" type="" placeholder="nombre" required />
        </div>

       
        <div>
            <div className="mb-1 block">
                <Label htmlFor="tarjeta1" value="Número de tarjeta*" />
            </div>
            <TextInput id="tarjeta1" type="" placeholder="4742 **** **** **** ****" required />
        </div>

        <div>
            <div className="mb-1 block">
                <Label htmlFor="ntarjeta1" value="Nombre en la tarjeta*" />
            </div>
            <TextInput id="ntarjeta1" type="" placeholder="NOMBRE APELLIDO" required />
        </div>
{/* <div class="row">
  <div class="column"></div>
  <div class="column"></div>
</div> */}
        <div  className=" items-center justify-end mt-1">
            <div  className="mb-1 block">
                <Label htmlFor="ftarjeta1" value="Fecha de vencimiento*" /><TextInput id="ftarjeta1" type="" placeholder="MM / AA" required />
            </div>
              <div className="mb-1 block">
                <Label htmlFor="CVCtarjeta1" value="CVC*" /> <TextInput id="CVCtarjeta1" type="" placeholder="***" required />
            </div>
            
        </div>

        <Button type="tarjeta">AGREGAR OTRA TARJETA</Button>

            <div className="flex items-center gap-2">
            <Checkbox id="privacy" />
            <Label htmlFor="privacy">Lee y firma nuestro acuerdo de privacidad</Label>
            </div>
            <Button type="tarjeta">CREAR CUENTA</Button>
            
      </form>
        </Card>    
    </div>
  )
}

export default User