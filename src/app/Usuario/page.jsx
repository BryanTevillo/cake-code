"use client";

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { Open_Sans, Luckiest_Guy } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

function User() {
  return (
    <div className="grid  justify-items-center ">
        <div className={luckiestguy.className} id ="titulo">
                <Label htmlFor="email1" value="TUS DATOS" />
        </div>
<Card>
        <Card href="#" className="max-w-md">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Datos de contacto" />
            </div>
            <TextInput id="username_contact" placeholder="Bonnie Green" addon="Nombre:" required />
            <TextInput id="telefono" placeholder="(###) #######" addon="Número de teléfono:" required />
            <TextInput id="email" placeholder="correo@dominio.com" addon="Correo electrónico:" required />
          </div>
        </Card>
        <br />
        <Card href="#" className="max-w-md">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="username_adress" value="Información de envío" />
            </div>
            <p>Dirección predeterminada</p>
            <TextInput id="adress" placeholder="Ejemplo" addon="Dirección:" required />
            <TextInput id="postal_code" placeholder="(###) #######" addon="Código postal:" required />
            <br />
            <p>Dirección adicional</p>
            <TextInput id="adress" placeholder="Ejemplo" addon="Dirección:" required />
            <TextInput id="postal_code" placeholder="(###) #######" addon="Código postal:" required />
            <br />
            <Button type="tarjeta">HACERLA MI DIRECCIÓN PREDETERMINADA</Button>
            <br />
            <Button type="tarjeta">AGREGAR OTRA DIRECCIÓN DE ENVÍO</Button>
          </div>
        </Card>
</Card>

<Card>
        <Card href="#" className="max-w-md">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="pay_options" value="Opciones de pago" />
            </div>
            <p>Opción de pago predeterminada</p>
            <TextInput id="pay_card" placeholder="...#### (VISA)" addon="Tarjeta de débito que termina en:" required />
            <br />
            <p>Opción de pago adicional</p>
            <TextInput id="pay_card" placeholder="...#### (MASTERCARD)" addon="Tarjeta de crébito que termina en:" required />
            <br />
            <Button type="tarjeta">HACERLA MI OPCIÓN DE PAGO PREDETERMINADA</Button>
            <br />
            <Button type="tarjeta">AGREGAR OTRA TARJETA</Button>
          </div>
        </Card>
        
</Card>  
    </div>
  )
}

export default User