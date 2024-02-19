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
import imagenfer from "../../../../public/fotos/imagenfer.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import carr1 from "../../../../public/carrusel2/pasteles.webp";
import carr2 from "../../../../public/carrusel2/galletas.webp";
import carr3 from "../../../../public/carrusel2/cupcakes.webp";

export default function page() {
  return (
    <div>
      <div className="grid justify-items-center md:grid-cols-2">
        <Card className="bg-[#f3ccf3] h-[1000px] my-[30px] md:mx-[40px] xl:w-[500px]">
          <Image
            className="h-[400px] w-[300px] rounded-[250px] mx-[40px] md:mt-[40px] xl:mx-[70px] xl:w-[400] xl:h-[420px]"
            src={imagenfer}
            alt="Foto de Fernanda"
          />
          <CardContent className="mx-[40px]">
            <Typography
              className={opensans.className}
              gutterBottom
              variant="h5"
              component="div"
            >
              <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white xl:ml-[20px]">
                Maria Fernanda Güemez Medina
              </div>
            </Typography>
            <div className={opensans.className}>
              <p>Desarrolladora Java Full Stack</p>
              <p>Mérida, Yucatán</p>
              <p>fernanda.guemez@gmail.com</p>
            </div>
            <br />
            <Typography className={opensans.className}>
              Soy una persona capaz, proactiva, organizada, me caracterizo por
              mi capacidad para solucionar problemas. Busco un puesto desafiante
              donde pueda continuar aprendiendo y dar lo mejor de mí.
              Actualmente me encuentro capacitándome como Desarrolladora Java
              Full Stack y me interesa seguir formándome como Desarrolladora.
              Adicionalmente soy Ingeniera ambiental con 10 años de experiencia
              en el cumplimiento de leyes, normas ambientales y de seguridad.
            </Typography>
          </CardContent>
          <CardActions className="mx-[40px]">
            <Button
              sx={{ color: "black" }}
              size="small"
              target="_blank"
              href="https://github.com/FernandaGuemez"
              className={opensans.className}
            >
              <GitHubIcon fontSize="large"></GitHubIcon>Github
            </Button>
            <Button
              sx={{ color: "black" }}
              size="small"
              target="_blank"
              href="https://www.linkedin.com/in/maria-fernanda-g%C3%BC%C3%A9mez-medina-568140291/"
              className={opensans.className}
            >
              <LinkedInIcon fontSize="large"></LinkedInIcon>LinkedIn
            </Button>
          </CardActions>
        </Card>
        <div>
          <div className="text-center text-3xl bg-[#FFD1BD] rounded-[200px] md:rounded-none md:mt-[30px]">
            <p className={luckiestguy.className}>Diseños desarrollados</p>
          </div>
          <br />
          <div className="h-[900px] w-[450px] md:h-[50rem] mb-[30px]">
            <Carousel slideInterval={10000}>
              <Image
                className="h-[900px] md:h-[50rem]"
                src={carr1}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[900px] md:h-[40rem] md:w-[30rem]"
                src={carr2}
                alt="Diseña tu pastel"
              />
              <Image
                className="h-[900px] w-[450px] md:h-[40rem] md:w-[40rem]"
                src={carr3}
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
