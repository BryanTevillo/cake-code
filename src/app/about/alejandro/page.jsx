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
import imagenale from "../../../../public/fotos/imagenale.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import carr1 from "../../../../public/carrusel2/perfildeusuario.webp";
import carr2 from "../../../../public/carrusel2/iniciodesesion.webp";
import carr3 from "../../../../public/carrusel2/registrate.webp";

export default function page() {
  return (
    <div>
      <div className="grid justify-items-center md:grid-cols-2">
        <Card className="bg-[#b8dff3] h-[1000px] my-[30px] md:mx-[40px] xl:w-[500px]">
          <Image
            className="h-[400px] w-[300px] rounded-[250px] mx-[40px] md:mt-[40px] xl:mx-[70px] xl:w-[400] xl:h-[420px]"
            src={imagenale}
            alt="Foto de Alejandro"
          />
          <CardContent className="mx-[40px]">
            <Typography
              className={opensans.className}
              gutterBottom
              variant="h5"
              component="div"
            >
              <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xl:ml-[50px]">
                Alejandro de León Piña
              </div>
            </Typography>
            <div className={opensans.className}>
              <p>Desarrollador Java Full Stack</p>
              <p>Coyoacán, CDMX</p>
              <p>alejandrodeleon904@gmail.com</p>
            </div>
            <br />
            <Typography className={opensans.className}>
              Soy una persona muy comprometida con los proyectos en los que
              estoy involucrado. Mi pasión por seguir aprendiendo me llevó a
              estudiar Física en la que tuve mi primer contacto con la
              programación y la resolución analítica de problemas. Baso mis
              decisiones en esta frase: "Destiny is not a matter of chance, it
              is a matter of choice; it is not a thing to be waited for, it is a
              thing to be achieved."
            </Typography>
          </CardContent>
          <CardActions className="mx-[40px]">
            <Button
              sx={{ color: "black" }}
              size="small"
              target="_blank"
              href="https://github.com/AlexLionP"
              className={opensans.className}
            >
              <GitHubIcon fontSize="large"></GitHubIcon>Github
            </Button>
            <Button
              sx={{ color: "black" }}
              size="small"
              target="_blank"
              href="http://www.linkedin.com/in/alejandro-de-leon-pina"
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
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

//<div className="grid justify-items-center md:grid-cols-2">
