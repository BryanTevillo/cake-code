"use client";

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import "./style.css";

const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

function User() {
  return (
    <div id="usuario" className="grid  justify-items-center ">
      <div className={luckiestguy.className} id ="titulo">
        TUS DATOS
      </div>
        <div  className="grid   justify-items-center md:grid-cols-2">
          <div className="row-span-2 " style={{ marginBottom: 50 }}>
            <Card id="divrosa" style={{
            marginLeft: 100,
            marginRight: 100,
            marginTop: 10,
            marginBottom: 10,
            width: 500,
            padding: 30,
            
          }}
          className=" sm:h-full">
              <form  className="flex flex-col gap-4">
                <Card  className="max-w-md">
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
                <Card  className="max-w-md">
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
              </form>
            </Card>
          </div>
          <div className="row-span-2 " style={{ marginBottom: 50 }}>
            <Card id="divrosa" style={{
            marginLeft: 100,
            marginRight: 100,
            marginTop: 10,
            marginBottom: 80,
            width: 500,
            padding: 30,
            
          }}
          className="">
              <form className="flex flex-col gap-4">
                <Card className="max-w-md">
                  <div className="max-w-md">
                    <div  className="mb-2 block">
                      <Label htmlFor="pay_options" value="Opciones de pago" />
                    </div>
                    <p>Opción de pago predeterminada</p>
                    <TextInput id="pay_card" placeholder="...#### (VISA)" addon="Tarjeta de débito que termina en:" required />
                    <br />
                    <p>Opción de pago adicional</p>
                    <TextInput id="pay_card" placeholder="...#### (MASTERCARD)" addon="Tarjeta de crédito que termina en:" required />
                    <br />
                    <Button type="tarjeta">HACERLA MI OPCIÓN DE PAGO PREDETERMINADA</Button>
                    <br />
                    <Button type="tarjeta">AGREGAR OTRA TARJETA</Button>
                  </div>
                </Card>
              </form>
            </Card>
          </div>  
        </div>
    </div>
  )
}

export default User