"use client";

import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Card } from "flowbite-react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import imagenitz from "../../../../public/fotos/imagenitz.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import carr1 from "../../../../public/carrusel2/creatupastel.webp";
import carr2 from "../../../../public/carrusel2/tamaño.webp";
import carr3 from "../../../../public/carrusel2/sabor.webp";
import carr4 from "../../../../public/carrusel2/diseño.webp";
import carr5 from "../../../../public/carrusel2/toppings1.webp";
import carr6 from "../../../../public/carrusel2/toppings2.webp";
import carr7 from "../../../../public/carrusel2/topper.webp";
import carr8 from "../../../../public/carrusel2/tarjeta.webp";
import carr9 from "../../../../public/carrusel2/confirmacion.webp";

export default function page() {
  return (
    <div>
      <div className="grid justify-items-center md:grid-cols-2">
        <Card className="bg-[#ffeecc] h-[1000px] my-[30px] md:mx-[40px] xl:w-[500px]">
          <Image
            className="h-[400px] w-[300px] rounded-[250px] mx-[40px] md:mt-[40px] xl:mx-[70px] xl:w-[400] xl:h-[420px]"
            src={imagenitz}
            alt="Foto de Itzel"
          />
          <CardContent className="mx-[40px]">
            <Typography
              className={opensans.className}
              gutterBottom
              variant="h5"
              component="div"
            >
              <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xl:ml-[50px]">
                Itzel Pérez Rodríguez
              </div>
            </Typography>
            <div className={opensans.className}>
              <p>Desarrolladora Java Full Stack</p>
              <p>Tlalpan, CDMX</p>
              <p>itzelperez.rq@gmail.com</p>
            </div>
            <br />
            <Typography className={opensans.className}>
              Hola soy Itzel, Química egresada de la UNAM y Desarrolladora Java
              FullStack en construcción, que esta entusiasmada por desarrollar
              su carrera profesional en el ámbito tecnológico. Soy una persona
              detallista, orientada al trabajo en equipo, y estoy ansiosa por
              formar parte de un equipo de desarrollo donde pueda poner a prueba
              mis habilidades y conocimientos técnicos.
            </Typography>
          </CardContent>
          <CardActions className="mx-[40px]">
            <Button
              sx={{ color: "black" }}
              size="small"
              target="_blank"
              href="https://github.com/ItzelPr03"
              className={opensans.className}
            >
              <GitHubIcon fontSize="large"></GitHubIcon>Github
            </Button>
            <Button
              sx={{ color: "black" }}
              size="small"
              target="_blank"
              href="http://www.linkedin.com/in/itzel-perez-rodriguez"
              className={opensans.className}
            >
              <LinkedInIcon fontSize="large"></LinkedInIcon>LinkedIn
            </Button>
          </CardActions>
        </Card>
        <div>
          <div className="text-center text-3xl tracking-wide rounded-[200px] md:rounded-none md:mt-[30px]">
            <p className={luckiestguy.className}>Diseños desarrollados</p>
          </div>
          <br />
          <div className="h-[1000px] md:h-[50rem] mb-[30px]">
            <Carousel slideInterval={10000}>
              <Image
                className="h-[1000px] md:h-[50rem]"
                src={carr1}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[750px] w-[450px] md:h-[30rem] md:w-[50rem]"
                src={carr2}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[750px] w-[450px] md:h-[40rem] md:w-[50rem]"
                src={carr3}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[1000px] md:h-[50rem]"
                src={carr4}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[1000px] md:h-[50rem]"
                src={carr5}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[1000px] md:h-[50rem]"
                src={carr6}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[750px] w-[450px] md:h-[30rem] md:w-[50rem]"
                src={carr7}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[750px] w-[450px] md:h-[40rem] md:w-[50rem]"
                src={carr8}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[1000px] md:h-[50rem]"
                src={carr9}
                alt="Confirmacion"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

//<div className="grid justify-items-center md:grid-cols-2">
