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
import imagenpaula from "../../../../public/fotos/imagenpaula.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import carr1 from "../../../../public/carrusel2/paginainicio.png";
import carr2 from "../../../../public/carrusel2/contacto.png";
import carr3 from "../../../../public/carrusel2/acercadenosotros.png";

export default function page() {
  return (
    <div>
      <div className="grid justify-items-center md:grid-cols-2">
        <Card className="bg-[#e8d2fb] h-[1000px] my-[30px] md:mx-[40px] xl:w-[500px]">
          <Image
            className="h-[400px] w-[300px] rounded-[250px] mx-[40px] md:mt-[40px] xl:mx-[70px] xl:w-[400] xl:h-[420px]"
            src={imagenpaula}
            alt="Foto de Paula"
          />
          <CardContent className="mx-[40px]">
            <Typography
              className={opensans.className}
              gutterBottom
              variant="h5"
              component="div"
            >
              <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xl:ml-[50px]">
                Ana Paula Garfias Rios
              </div>
            </Typography>
            <div className={opensans.className}>
              <p>Desarrolladora Java Full Stack</p>
              <p>Morelia, Mich</p>
              <p>paulagarfias4@gmail.com</p>
            </div>
            <br />
            <Typography className={opensans.className}>
              Hola soy Paula, ingeniera idustrial. Me considero una persona
              proactiva, con grandes interenses en seguirme preparando para el
              futuro. A la par tengo una gran afición por las tecnologías y su
              funcionalidad en el mundo actual por ello estoy estudiando y
              preparandome para desenvolverme como ingeniera software con
              amplios conocimientos en ciencia de datos.
            </Typography>
          </CardContent>
          <CardActions className="mx-[40px]">
            <Button
              sx={{ color: "black" }}
              size="small"
              target="_blank"
              href="https://github.com/anapaulagarfias"
              className={opensans.className}
            >
              <GitHubIcon fontSize="large"></GitHubIcon>Github
            </Button>
            <Button
              sx={{ color: "black" }}
              size="small"
              target="_blank"
              href="https://www.linkedin.com/in/paulagarfias"
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
          <div className="h-[1000px] md:h-[50rem] mb-[30px]">
            <Carousel slideInterval={10000}>
              <Image
                className="h-[1000px] md:h-[50rem]"
                src={carr1}
                alt="Pagina de inicio"
              />
              <Image
                className="h-[750px] w-[450px] md:h-[30rem] md:w-[50rem]"
                src={carr2}
                alt="Pagina de contacto"
              />
              <Image
                className="h-[750px] w-[450px] md:h-[40rem] md:w-[50rem]"
                src={carr3}
                alt="Pagina de about us"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

//<div className="grid justify-items-center md:grid-cols-2">
