import { Carousel } from "flowbite-react";
import Image from "next/image";
import carrusel1 from "../../public/carrusel1.png";
import carrusel2 from "../../public/carrusel2.png";
import carrusel3 from "../../public/carrusel3.png";
import "./stylespaginaprincipal.css";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
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
      <div className="grid justify-items-center" id="aboutus">
        <div className="font-bold text-lg">
          <p className={opensans.className}>SIRVIENDO DESDE 2006</p>
        </div>
        <h1 className={luckiestguy.className} id="subtitulo_pp">
          Acerca de nosotros
        </h1>
        <p className={opensans.className}>
          Pastelería mexicana dedicada a consentir a los amantes de la
          repostería, que estén interesados en adquirir algún postre como
          pastel, cupcake o galletas, para cualquier tipo de evento y que además
          disfruten de la posibilidad de personalizar el postre a su gusto.
        </p>
        <b>
          <u className={opensans.className}>Conoce al equipo</u>
        </b>
      </div>
    </main>
  );
}
