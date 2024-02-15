import { Carousel } from "flowbite-react";
import Image from "next/image";
import carrusel1 from "../../public/carrusel1.png";
import carrusel2 from "../../public/carrusel2.png";
import carrusel3 from "../../public/carrusel3.png";
import "./stylespaginaprincipal.css";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import { Height } from "@mui/icons-material";
const opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border-none rounded-none">
            <Carousel id="carrusel" slideInterval={2000}>
              <Image className="max-width:100" src={carrusel1} alt="" />
              <Image className="max-width:100" src={carrusel2} alt="" />
              <Image className="max-width:100" src={carrusel3} alt="" />
              <Image className="max-width:100" src={carrusel2} alt="" />
            </Carousel>
          </div>
        </div>
        <div
          id="aboutus"
          className="grid justify-items-center sm:h-[300px] md:h-auto "
        >
          <div
            className="font-bold text-lg"
            style={{ marginTop: 60, marginBottom: 30 }}
          >
            <p className={opensans.className}>SIRVIENDO DESDE 2006</p>
          </div>
          <div id="subtitulo_pp">
            <h1 className={luckiestguy.className}>Acerca de nosotros</h1>
          </div>
          <div style={{ marginBottom: 50, marginTop: 30 }} className="lg:px-80">
            <p className={opensans.className} id="subtitulo_txt">
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
        <div className="border-[100px] sm:h-[40rem] border-[#FFD1BD]">
          <div id="subtitulo_pp">
            <h1 className={luckiestguy.className}>Los postres más vendidos</h1>
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
