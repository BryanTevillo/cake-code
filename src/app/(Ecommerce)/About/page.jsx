"use client";

import { Card } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import Logo from "../../../../public/pastel-about.png";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";
import "./styles.css";
import imagenpaula from "../../../../public/fotos/imagenpaula.webp";
import imagenitz from "../../../../public/fotos/imagenitz.webp";
import imagenale from "../../../../public/fotos/imagenale.webp";
import imagenfer from "../../../../public/fotos/imagenfer.webp";
import imagenbryan from "../../../../public/fotos/imagenbryan.jpg";

export default function page() {
  return (
    <>
      <div>
        <h1 className={luckiestguy.className} id="titulo">
          acerca de nosotros
        </h1>
        <div className={opensans.className}>
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 sm:max-w place-content-center">
            <div className="row-span-1">
              <div
                style={{ marginBottom: 50 }}
                className="w-[25rem]  xl:ml-[300px] xl:w-[600px]"
              >
                <Card
                  href="#"
                  className="max-w-lg rounded-3xl bg-pink_lite mr-100"
                >
                  <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Mision
                  </h5>
                  <p className="font-normal text-black-700 dark:text-gray-400">
                    Somos una empresa dedicada a la pastelería y repostería
                    donde las ideas nuevas que nuestros clientes tienen son
                    nuestra mejor receta, nosotros nos comprometemos a realizar
                    los mejores productos donde la calidad es lo que nos
                    diferencia de la competencia. Compartiendo no solo la mejor
                    calidad en el servicio si no que también la pasión que
                    tenemos al hacer nuestros productos.
                  </p>
                </Card>
              </div>
            </div>
            <div className="row-span-2" style={{ marginBottom: 50 }}>
              <Image
                src={Logo}
                width={380}
                className=" xl:ml-[60px]"
                alt="cake-code Logo"
              />
              <Card
                href="#"
                className="max-w-lg rounded-3xl bg-purple_card mr-100"
                id="blue"
              >
                <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Valores
                </h5>
                <p className="font-normal text-black-700 dark:text-gray-400">
                  Nos define el compromiso y la ética profesional, así como el
                  constante interés en innovar y mejorar nuestra plataforma para
                  una experiencia de usuario más agradable e intuitiva. 
                </p>
                <ul>
                  <li>
                    <CircleIcon style={{ fontSize: 8, marginRight: 10 }} />
                    Responsabilidad
                  </li>
                  <li>
                    <CircleIcon style={{ fontSize: 8, marginRight: 10 }} />
                    Compromiso
                  </li>
                  <li>
                    <CircleIcon style={{ fontSize: 8, marginRight: 10 }} />
                    Ética
                  </li>
                  <li>
                    <CircleIcon style={{ fontSize: 8, marginRight: 10 }} />
                    Innovación
                  </li>
                </ul>
              </Card>
            </div>
            <div className="md:mr-[100px] mb-[50px]">
              <Card
                href="#"
                className="max-w-lg rounded-3xl bg-blue_card md:ml-[50px] mb-[20px]"
              >
                <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Vision
                </h5>
                <p className="font-normal text-black-700 dark:text-gray-400">
                  Nuestra visión es llegar a ser un proveedor líder en pasteles
                  exquisitos, siendo reconocidos por nuestro incondicional
                  compromiso por la calidad, innovación y satisfacción de
                  nuestros clientes. Aspiramos a que nuestra empresa sea una
                  fuente de inspiración y un medio para liberar la creatividad
                  de nuestros clientes a la hora de solicitar un pedido especial
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div className="bg-[#FEFAE0]">
          <h2 className={luckiestguy.className} id="subtitulo_about">
            Conoce al equipo de trabajo
          </h2>
          <div>
            <div className="grid justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              <div className="mr-[20px] md:mx-[20px]">
                <a href="../About/Paula">
                  <Image
                    src={imagenpaula}
                    alt="Foto de Paula"
                    className="rounded-full w-[170px] h-[200px] hover:w-[200px] hover:h-[230px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]"
                  />
                  <p className="text-base text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Ana Paula Garfias Rios
                  </p>
                </a>
              </div>
              <div>
                <a href="../About/Itzel">
                  <Image
                    src={imagenitz}
                    alt="Foto de Itzel"
                    className="rounded-full w-[170px] h-[200px] hover:w-[200px] hover:h-[230px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]"
                  />
                  <p className="text-base text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Itzel Pérez Rodríguez
                  </p>
                </a>
              </div>
              <div className="mr-[20px]">
                <a href="../About/Alejandro">
                  <Image
                    src={imagenale}
                    alt="Foto de Alejandro"
                    className="rounded-full w-[170px] h-[200px] hover:w-[200px] hover:h-[230px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]"
                  />

                  <p className="text-base text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Alejandro de León Piña
                  </p>
                </a>
              </div>
              <div>
                <a href="../About/Bryan">
                  <Image
                    src={imagenbryan}
                    alt="Foto de Bryan"
                    className="rounded-full w-[170px] h-[200px] hover:w-[200px] hover:h-[230px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]"
                  />
                  <p className="text-base text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Bryan Tevillo Betancourt
                  </p>
                </a>
              </div>
              <div className="mb-[30px] col-span-2 md:col-span-1">
                <a href="../About/Fer">
                  <Image
                    src={imagenfer}
                    alt="Foto de Fernanda"
                    className="rounded-full w-[170px] h-[200px] hover:w-[200px] hover:h-[230px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]"
                  />
                  <p className="text-base text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Maria Fernanda Güemez <br /> Medina
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
