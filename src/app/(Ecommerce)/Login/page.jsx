"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import "./style.css";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import "./style.css";
import Waves from "@/app/components/WavesComponent/Waves";
import useLocalStorage from "@/app/lib/hook";
import axios from "axios";
import { redirect } from "next/navigation";

export default function Login() {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useLocalStorage(
    "isAuthenticatedUser",
    false
  );
  const [isAuthenticatedAdmin, setIsAuthenticatedAdmin] = useLocalStorage(
    "isAuthenticatedAdmin",
    false
  );

  if (isAuthenticatedUser) {
    redirect("/User");
  }

  if (isAuthenticatedAdmin) {
    redirect("/Dashboard");
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("password"));
    console.log(formData.get("email"));
    const { data } = await axios.get("https://gorest.co.in/public/v2/users");
    console.log(data);
    if (
      data &&
      formData.get("password") === "123" &&
      formData.get("email") === "tevillo24@gmail.com"
    ) {
      console.log(data);
      setIsAuthenticatedUser(true);
    }
    if (
      data &&
      formData.get("password") === "123" &&
      formData.get("email") === "paula@gmail.com"
    ) {
      console.log(data);
      setIsAuthenticatedAdmin(true);
    }

    if (isAuthenticatedUser) {
      redirect("/User");
    }

    if (isAuthenticatedUser) {
      redirect("/Dashboard");
    }
  };

  return (
    <div>
      <div className="grid justify-items-center md:grid-cols-1 xl:grid-cols-2">
        <Card className="max-w-lg w-[300px] mt-[50px] mb-50 md:w-[700px] xl: mb-[50px]">
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div>
              <div className={luckiestguy.className}>INICIAR SESIÓN</div>
              <div className="mb-1 block">
                <Label htmlFor="email1" value="Correo electrónico" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="nombre@dominio.com"
                required
                name="email"
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
                name="password"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Recuerdame</Label>
            </div>
            <div className={opensans.className}>
              <p>¿Olvidaste tu contraseña?</p>
            </div>
            <div className="flex justify-center">
              <Button
                //onClick={handleLogout}
                className="bg-button_primary  px-2 py-1  text-center"
                type="submit"
              >
                Iniciar sesión
              </Button>
            </div>
          </form>
        </Card>

        <div className="row-span-2 mb-[50px] ">
          <Card className="max-w w-[300px] mt-[50px] md:w-[600px] xl:w-[500px]">
            <form className="flex flex-col gap-4">
              <div className={luckiestguy.className}>REGISTRATE</div>
              <div className={opensans.className}>
                <p>
                  {" "}
                  Al crear una cuenta podrás registrar una opción de pago y una
                  dirección de envio, lo que te facilitará futuras compras en
                  nuestro sitio.
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  href="/Signup"
                  className="bg-button_primary text-lg  px-2 py-1  text-center"
                  type="signup"
                >
                  Crear cuenta
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>

      <div className="h-[12px] md:h-[25px] xl:h-[30px]">
      <Waves color="#FFDDCC"></Waves>
      </div>
      <div id="divrosa">
        <div className="h-[70px] md:h-[210px] xl:h-[205px]"></div>
      </div>
    </div>
  );
}
