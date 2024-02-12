import { Carousel } from "flowbite-react";
import Image from "next/image";
import carrusel1 from "../../public/carrusel1.png";
import carrusel2 from "../../public/carrusel2.png";
import carrusel3 from "../../public/carrusel3.png";
import "./stylespaginaprincipal.css";

export default function Home() {
  return (
    <main>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border-none rounded-none">
        <Carousel id="carrusel" slideInterval={5000}>
          <Image className="max-width:100" src={carrusel1} alt="" />
          <Image className="max-width:100" src={carrusel2} alt="" />
          <Image className="max-width:100" src={carrusel3} alt="" />
          <Image className="max-width:100" src={carrusel2} alt="" />
        </Carousel>
      </div>
    </main>
  );
}
