import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import Image from "next/image";
import carrusel1 from "../../public/carrusel1.png";
import carrusel2 from "../../public/carrusel2.png";
import carrusel3 from "../../public/carrusel3.png";
import masvendido1 from "../../public/pastel-oreo.jpg";
import masvendido2 from "../../public/cupcake/avellana.jpg";
import masvendido3 from "../../public/galletas/lavanda.jpg";
import masvendido4 from "../../public/cupcake/cafe.jpg";
import categoria1 from "../../public/cupcake/brownie.jpg";
import categoria2 from "../../public/pastel-chocolate.jpg";
import categoria3 from "../../public/galletas/amaranto.jpg";
import categoria4 from "../../public/personaliza.jpg";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <div className="h-[220px] xl:h-[500px] md:h-[400px] 2xl:h-[700px]">
            <Carousel slideInterval={10000}>
              <Image
                className="h-[220px] md:h-[400px] xl:h-[500px] 2xl:h-[700px]"
                src={carrusel1}
                alt="Prueba nuestro nuevo pastel de chocolate MILKA"
              />
              <Image
                className="h-[220px] border-y-[22px] border-[#D8B4F8] md:border-0 xl:h-[500px] md:h-[400px] 2xl:h-[700px]"
                src={carrusel2}
                alt="Festeja tu boda con nosotros"
              />
              <Image
                className="h-[220px] md:h-[400px] xl:h-[500px] 2xl:h-[700px]"
                src={carrusel3}
                alt="Ahora ya puedes personalizar tu pastel"
              />
            </Carousel>
          </div>
        </div>
        <div className="grid justify-items-center xl:h-[40rem] bg-[#ffb0cd] opacity-80">
          <div
            className="font-bold text-lg"
            style={{ marginTop: 60, marginBottom: 30 }}
          >
            <p className={opensans.className}>SIRVIENDO DESDE 2006</p>
          </div>
          <div className="text-6xl text-center">
            <h1 className={luckiestguy.className}>Acerca de nosotros</h1>
          </div>
          <div
            style={{ marginBottom: 50, marginTop: 30 }}
            className="xl:px-80 text-center text-3xl"
          >
            <p className={opensans.className}>
              Pastelería mexicana dedicada a consentir a los amantes de la
              repostería, que estén interesados en adquirir algún postre como
              pastel, cupcake o galletas, para cualquier tipo de evento y que
              además disfruten de la posibilidad de personalizar el postre a su
              gusto.
            </p>
          </div>
          <div style={{ marginBottom: 45 }} className="text-xl">
            <b>
              <a href="/about">
                <u className={opensans.className}>Conoce al equipo</u>
              </a>
            </b>
          </div>
        </div>
        <div>
          <div className="md:border-[70px] border-[50px] sm:h-[50rem] border-[#FFD1BD] bg-[#FFDDCC]">
            <div
              style={{ marginBottom: 50, marginTop: 30 }}
              className="text-5xl text-center"
            >
              <h1 className={luckiestguy.className}>
                Los postres más vendidos
              </h1>
            </div>
            <div>
              <div className="grid justify-items-center md:grid-cols-4">
                <div>
                  <Card
                    className="max-w-sm bg-transparent border-none rounded-none shadow-none place-items-center"
                    renderImage={() => (
                      <Image
                        src={masvendido1}
                        alt="Pastel de oreo"
                        className="rounded-[30px] md:w-[200px] md:h-[300px] w-[200px] h-[280px]"
                      />
                    )}
                  >
                    <div className={opensans.className}>
                      <h5 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white text-center">
                        Pastel de oreo
                      </h5>
                      <div>
                        <p className="text-xl font-normal text-black-700 dark:text-gray-400 text-center">
                          $200
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card
                    className="max-w-sm bg-transparent border-none rounded-none shadow-none place-items-center"
                    renderImage={() => (
                      <Image
                        src={masvendido2}
                        alt="Cupcake de avellana"
                        className="rounded-[30px] md:w-[200px] md:h-[300px] w-[200px] h-[280px]"
                      />
                    )}
                  >
                    <div className={opensans.className}>
                      <h5 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white text-center">
                        Cupcake de avellana
                      </h5>
                      <div>
                        <p className="text-xl font-normal text-black-700 dark:text-gray-400 text-center">
                          $80
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card
                    className="max-w-sm bg-transparent border-none rounded-none shadow-none place-items-center"
                    renderImage={() => (
                      <Image
                        src={masvendido3}
                        alt="Galletas de lavanda"
                        className="rounded-[30px] md:w-[200px] md:h-[300px] w-[200px] h-[280px]"
                      />
                    )}
                  >
                    <div className={opensans.className}>
                      <h5 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white text-center">
                        Galletas de lavanda
                      </h5>
                      <div>
                        <p className="text-xl font-normal text-black-700 dark:text-gray-400 text-center">
                          $100
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card
                    className="max-w-sm bg-transparent border-none rounded-none shadow-none place-items-center"
                    renderImage={() => (
                      <Image
                        src={masvendido4}
                        alt="Cupcake de cafe"
                        className="rounded-[30px] md:w-[200px] md:h-[300px] w-[200px] h-[280px]"
                      />
                    )}
                  >
                    <div className={opensans.className}>
                      <h5 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white text-center">
                        Cupcake de cafe
                      </h5>
                      <div>
                        <p className="text-xl font-normal text-black-700 dark:text-gray-400 text-center">
                          $75
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="flex justify-center md:py-[25px]">
                <button
                  type="submit"
                  class="text-white text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <a href="/about">Ver más</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:border-x-[55px] border-y-[70px] xl:rounded-[300px] md:rounded-[200px] md:h-[60rem] border-[#FFFFFF] bg-[#F3CCF3]">
            <div
              className="text-5xl text-center"
              style={{ marginBottom: 50, marginTop: 50 }}
            >
              <h1 className={luckiestguy.className}>Categorias</h1>
            </div>
            <div className="grid justify-items-center grid-cols-2 md:px-[110px]">
              <div>
                <Card
                  className="max-w-sm bg-transparent border-none rounded-none shadow-none place-items-center"
                  renderImage={() => (
                    <Image
                      src={categoria1}
                      alt="Cupcake de brownie"
                      className="rounded-[30px] md:w-[235px] md:h-[240px] w-[185px] h-[190px]"
                    />
                  )}
                >
                  <div className={opensans.className}>
                    <a href="../Categorias/cupcakes">
                      <h5 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white hover:text-[#FFFFFF] text-center">
                        Cupcakes
                      </h5>
                    </a>
                  </div>
                </Card>
              </div>
              <div>
                <Card
                  className="max-w-sm bg-transparent border-none rounded-none shadow-none place-items-center"
                  renderImage={() => (
                    <Image
                      src={categoria2}
                      alt="pastel de chocolate"
                      className="rounded-[30px] md:w-[235px] md:h-[240px] w-[185px] h-[190px]"
                    />
                  )}
                >
                  <div className={opensans.className}>
                    <a href="../Categorias/Pastel">
                      <h5 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white hover:text-[#FFFFFF] text-center">
                        Pastel
                      </h5>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
            <div className="grid justify-items-center grid-cols-2 md:px-[110px]">
              <div>
                <Card
                  className="max-w-sm bg-transparent border-none rounded-none shadow-none place-items-center"
                  renderImage={() => (
                    <Image
                      src={categoria3}
                      alt="Galletas de amaranto"
                      className="rounded-[30px] md:w-[235px] md:h-[240px] w-[185px] h-[190px]"
                    />
                  )}
                >
                  <div className={opensans.className}>
                    <a href="../Categorias/Galletas">
                      <h5 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white hover:text-[#FFFFFF] text-center">
                        Galletas
                      </h5>
                    </a>
                  </div>
                </Card>
              </div>
              <div>
                <Card
                  className="max-w-sm bg-transparent border-none rounded-none shadow-none place-items-center"
                  renderImage={() => (
                    <Image
                      src={categoria4}
                      alt="Personaliza tu pastel"
                      className="rounded-[30px] md:w-[235px] md:h-[240px] w-[185px] h-[190px]"
                    />
                  )}
                >
                  <div className={opensans.className}>
                    <a href="../Categorias/CreaTuPastel">
                      <h5 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white hover:text-[#FFFFFF] text-center">
                        Personaliza tu pastel
                      </h5>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

//className="w-full"
//max-w-scree-lx mx-auto
//sm:h-[40rem]
// id="bordemasvendido"
