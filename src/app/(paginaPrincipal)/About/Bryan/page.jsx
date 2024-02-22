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
import imagenbryan from "../../../../../public/fotos/imagenbryan.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import carr1 from "../../../../../public/carrusel2/carritodecompra.webp";
import carr2 from "../../../../../public/carrusel2/opcionesdepago.webp";
import carr3 from "../../../../../public/carrusel2/opcionesdeenvio.webp";
import carr4 from "../../../../../public/carrusel2/confirmarcompra.webp";

export default function page() {
  return (
    <div>
      <div className="grid justify-items-center md:grid-cols-2">
        <Card className="bg-[#ffd1bd] h-[1000px] my-[30px] md:mx-[40px] xl:w-[500px]">
          <Image
            className="h-[600px] w-[350px] rounded-[250px] mx-[40px] md:mt-[40px] ml-[15px] xl:mx-[50px] xl:w-[400] xl:h-[420px]"
            src={imagenbryan}
            alt="Foto de Bryan"
          />
          <CardContent className="mx-[40px]">
            <Typography
              className={opensans.className}
              gutterBottom
              variant="h5"
              component="div"
            >
              <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xl:ml-[50px]">
                Bryan Tevillo Betancourt
              </div>
            </Typography>
            <div className={opensans.className}>
              <p>Desarrollador Java Full Stack</p>
              <p>Acapulco de Juárez, Guerrero</p>
              <p>tevillo24@gmail.com</p>
            </div>
            <br />
            <Typography className={opensans.className}>
              Soy un apasionado ingeniero en sistemas computacionales con
              experiencia en soporte técnico y un fuerte interés en el
              desarrollo de software. Mi formación incluye una licenciatura en
              Ingeniería en Sistemas Computacionales y una sólida capacitación
              en lenguajes de programación como Python y Java, así como en
              tecnologías web como HTML, JavaScript y PHP.Me destaco por mi
              atención al detalle, mi capacidad para resolver problemas y mi
              motivación para aprender y crecer en un entorno tecnológico en
              constante evolución.
            </Typography>
          </CardContent>
          <CardActions className="mx-[40px]">
            <Button
              sx={{ color: "black" }}
              size="small"
              target="_blank"
              href="https://github.com/BryanTevillo"
              className={opensans.className}
            >
              <GitHubIcon fontSize="large"></GitHubIcon>Github
            </Button>
            <Button
              sx={{ color: "black" }}
              size="small"
              target="_blank"
              href="https://www.linkedin.com/in/bryan-tevillo/"
              className={opensans.className}
            >
              <LinkedInIcon fontSize="large"></LinkedInIcon>LinkedIn
            </Button>
          </CardActions>
        </Card>
        <div className="my-[30px]">
          <div className="text-center text-3xl tracking-wide rounded-[200px] md:rounded-none md:mt-[30px]">
            <p className={luckiestguy.className}>Diseños desarrollados</p>
          </div>
          <br />
          <div className="h-[340px] w-[430px] md:h-[25rem] md:w-[30rem] lx:h-[40rem] xl:w-[38rem]">
            <Carousel slideInterval={10000}>
              <Image
                className="h-[340px] w-[430px] md:h-[25rem] md:w-[30rem] lx:h-[40rem] xl:w-[38rem]"
                src={carr1}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[340px] w-[430px] md:h-[25rem] md:w-[30rem] lx:h-[40rem] xl:w-[38rem]"
                src={carr2}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[340px] w-[430px] md:h-[25rem] md:w-[30rem] lx:h-[40rem] xl:w-[38rem]"
                src={carr3}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[340px] w-[430px] md:h-[25rem] md:w-[30rem] lx:h-[40rem] xl:w-[38rem]"
                src={carr4}
                alt="Diseña tu pastel"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

//<div className="grid justify-items-center md:grid-cols-2">
