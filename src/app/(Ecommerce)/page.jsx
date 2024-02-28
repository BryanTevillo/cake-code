import { Carousel, Button } from "flowbite-react";
import Image from "next/image";
import carrusel1 from "../../../public/carrusel1/carrusel1.webp";
import carrusel2 from "../../../public/carrusel1/carrusel2.webp";
import carrusel3 from "../../../public/carrusel1/carrusel3.webp";
import masvendido1 from "../../../public/pastel-oreo.webp";
import masvendido2 from "../../../public/cupcake/avellana.webp";
import masvendido3 from "../../../public/galletas/lavanda.webp";
import masvendido4 from "../../../public/cupcake/cafe.webp";
import categoria1 from "../../../public/cupcake/brownie.webp";
import categoria2 from "../../../public/pastel-chocolate.webp";
import categoria3 from "../../../public/galletas/amaranto.webp";
import categoria4 from "../../../public/categoria/personaliza.webp";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
import CardP from "@/app/components/CardPp/Card";
import CardCat from "@/app/components/CardPp/Card1";

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
              <a href="/About">
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
                  <CardP
                    img={masvendido1}
                    text1="Pastel de oreo"
                    text2="$200"
                  ></CardP>
                </div>
                <div>
                  <CardP
                    img={masvendido2}
                    text1="Cupcake de avellana"
                    text2="$80"
                  ></CardP>
                </div>
                <div>
                  <CardP
                    img={masvendido3}
                    text1="Galletas de lavanda"
                    text2="$100"
                  ></CardP>
                </div>
                <div>
                  <CardP
                    img={masvendido4}
                    text1="Cupcake de cafe"
                    text2="$75"
                  ></CardP>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  href="/Categories/Cakes"
                  className="bg-button_primary  px-2 py-1 text-center"
                >
                  <p className="text-xl">Ver más</p>
                </Button>
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
                <CardCat
                  href="../Categories/Cupcakes"
                  img={categoria1}
                  text="Cupcakes"
                ></CardCat>
              </div>
              <div>
                <CardCat
                  href="../Categories/Cakes"
                  img={categoria2}
                  text="Pastel"
                ></CardCat>
              </div>
            </div>
            <div className="grid justify-items-center grid-cols-2 md:px-[110px]">
              <div>
                <CardCat
                  href="../Categories/CustomCake"
                  img={categoria3}
                  text="Galletas"
                ></CardCat>
              </div>
              <div>
                <CardCat
                  href="../Categories/Cookies"
                  img={categoria4}
                  text="Personaliza tu pastel"
                ></CardCat>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
