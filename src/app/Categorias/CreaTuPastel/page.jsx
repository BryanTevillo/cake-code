import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import "./styles.css";
export default function CreaTuPastel() {
  return (
    <>
      <h1 className={luckiestguy.className} id="titulo">
        Hola, soy una pagina de pasteles
      </h1>
      <h2 className={opensans.className} id="subtitulo">
        Soy un subtitulo de pasteles
      </h2>
    </>
  );
}
