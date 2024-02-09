"use client";

import { Card } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import Logo from "../../../public/pastel-about.png";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";
import "./styles.css";
export default function page() {
  return (
    <div>
      <h1 className={luckiestguy.className} id="titulo">
        acerca de nosotros
      </h1>
      <div className="grid   justify-items-center md:grid-cols-2">
        <div style={{ marginBottom: 50 }}>
          <Card href="#" className="max-w-lg rounded-3xl bg-pink_lite">
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Mision
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Somos una empresa dedicada a la pastelería y repostería donde las 
              ideas nuevas que nuestros clientes tienen son nuestra mejor
              receta, nosotros nos comprometemos a realizar los mejores
              productos donde la calidad es lo que nos diferencia de la
              competencia. Compartiendo no solo la mejor calidad en el servicio
              si no que también la pasión que tenemos al hacer nuestros
              productos.
            </p>
          </Card>
        </div>

        <div className="row-span-2 " style={{ marginBottom: 50 }}>
          <Image
            src={Logo}
            width={380}
            style={{ marginLeft: 60 }}
            //className="mr-3 h-50 sm:h-21 sm:w-20"
            alt="cake-code Logo"
          />
          <Card
            href="#"
            className="max-w-lg rounded-3xl bg-purple_card mr-100 "
            id="blue"
          >
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Valores
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Nos define el compromiso y la ética profesional, así como el
              constante interés en innovar y mejorar nuestra plataforma para una
              experiencia de usuario más agradable e intuitiva. 
            </p>
            <ul>
              <li>
                <CircleIcon className="text-xs" />
                Responsabilidad
              </li>
              <li>
                <CircleIcon className="text-xs" />
                Compromiso
              </li>
              <li>
                <CircleIcon className="text-xs" />
                Ética
              </li>
              <li>
                <CircleIcon className="text-xs" />
                Innovación
              </li>
            </ul>
          </Card>
        </div>
        <div style={{ marginRight: 100, marginBottom: 50 }}>
          <Card href="#" className="max-w-lg rounded-3xl bg-blue_card">
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Vision
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Nuestra visión es llegar a ser un proveedor líder en pasteles
              exquisitos, siendo reconocidos por nuestro incondicional
              compromiso por la calidad, innovación y satisfacción de nuestros
              clientes. Aspiramos a que nuestra empresa sea una fuente de
              inspiración y un medio para liberar la creatividad de nuestros
              clientes a la hora de solicitar un pedido especial
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
