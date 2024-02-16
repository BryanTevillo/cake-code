"use client";

import { Card } from "flowbite-react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import Logo from "../../../public/pastel-about.png";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";
import "./styles.css";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import imagenpaula from "../../../public/imagenpaula.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import imagenitz from "../../../public/imagenitz.png";
import imagenale from "../../../public/imagenale.png";
import imagenfer from "../../../public/imagenfer.png";
import imagenbryan from "../../../public/imagenbryan.png";

export default function page() {
  return (
    <>
      <div>
        <h1 className={luckiestguy.className} id="titulo">
          acerca de nosotros
        </h1>
        <div className={opensans.className}>
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 sm:max-w place-content-center">
            <div className="row-span-1">
              <div
                style={{ marginBottom: 50 }}
                className="w-[25rem]  xl:ml-[300px] xl:w-[600px]"
              >
                <Card
                  href="#"
                  className="max-w-lg rounded-3xl bg-pink_lite mr-100"
                >
                  <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Mision
                  </h5>
                  <p className="font-normal text-black-700 dark:text-gray-400">
                    Somos una empresa dedicada a la pastelería y repostería
                    donde las ideas nuevas que nuestros clientes tienen son
                    nuestra mejor receta, nosotros nos comprometemos a realizar
                    los mejores productos donde la calidad es lo que nos
                    diferencia de la competencia. Compartiendo no solo la mejor
                    calidad en el servicio si no que también la pasión que
                    tenemos al hacer nuestros productos.
                  </p>
                </Card>
              </div>
            </div>
            <div className="row-span-2" style={{ marginBottom: 50 }}>
              <Image
                src={Logo}
                width={380}
                className=" xl:ml-[60px]"
                //className="mr-3 h-50 sm:h-21 sm:w-20"
                alt="cake-code Logo"
              />
              <Card
                href="#"
                className="max-w-lg rounded-3xl bg-purple_card mr-100"
                id="blue"
              >
                <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Valores
                </h5>
                <p className="font-normal text-black-700 dark:text-gray-400">
                  Nos define el compromiso y la ética profesional, así como el
                  constante interés en innovar y mejorar nuestra plataforma para
                  una experiencia de usuario más agradable e intuitiva. 
                </p>
                <ul>
                  <li>
                    <CircleIcon style={{ fontSize: 8, marginRight: 10 }} />
                    Responsabilidad
                  </li>
                  <li>
                    <CircleIcon style={{ fontSize: 8, marginRight: 10 }} />
                    Compromiso
                  </li>
                  <li>
                    <CircleIcon style={{ fontSize: 8, marginRight: 10 }} />
                    Ética
                  </li>
                  <li>
                    <CircleIcon style={{ fontSize: 8, marginRight: 10 }} />
                    Innovación
                  </li>
                </ul>
              </Card>
            </div>
            <div style={{ marginRight: 100, marginBottom: 50 }}>
              <Card
                href="#"
                className="max-w-lg rounded-3xl bg-blue_card mr-100"
              >
                <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Vision
                </h5>
                <p className="font-normal text-black-700 dark:text-gray-400">
                  Nuestra visión es llegar a ser un proveedor líder en pasteles
                  exquisitos, siendo reconocidos por nuestro incondicional
                  compromiso por la calidad, innovación y satisfacción de
                  nuestros clientes. Aspiramos a que nuestra empresa sea una
                  fuente de inspiración y un medio para liberar la creatividad
                  de nuestros clientes a la hora de solicitar un pedido especial
                </p>
              </Card>
            </div>
          </div>
        </div>
        <h2 className={luckiestguy.className} id="subtitulo_about">
          Conoce al equipo de trabajo
        </h2>
        <div className="grid justify-items-center md:grid-cols-3">
          <div style={{ width: 450, marginBottom: 50 }}>
            <Card style={{ background: "#e8d2fb", height: 1020 }}>
              <Image
                style={{ marginLeft: 10 }}
                src={imagenpaula}
                width={380}
                alt="Foto de Paula"
              />
              <CardContent>
                <Typography
                  className={opensans.className}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                  proactiva, con grandes interenses en seguirme preparando para
                  el futuro. A la par tengo una gran afición por las tecnologías
                  y su funcionalidad en el mundo actual por ello estoy
                  estudiando y preparandome para desenvolverme como ingeniera
                  software con amplios conocimientos en ciencia de datos.
                </Typography>
              </CardContent>
              <CardActions>
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
          </div>
          <div style={{ width: 450, marginBottom: 50 }}>
            <Card style={{ background: "#ffeecc", height: 1020 }}>
              <Image
                style={{ marginLeft: 10 }}
                src={imagenitz}
                width={380}
                alt="Foto de Itzel"
              />
              <CardContent>
                <Typography
                  className={opensans.className}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                  Hola soy Itzel, Química egresada de la UNAM y Desarrolladora
                  Java FullStack en construcción, que esta entusiasmada por
                  desarrollar su carrera profesional en el ámbito tecnológico.
                  Soy una persona detallista, orientada al trabajo en equipo, y
                  estoy ansiosa por formar parte de un equipo de desarrollo
                  donde pueda poner a prueba mis habilidades y conocimientos
                  técnicos.
                </Typography>
              </CardContent>
              <CardActions>
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
          </div>
          <div style={{ width: 450, marginBottom: 50 }}>
            <Card style={{ background: "#b8dff3", height: 1020 }}>
              <Image
                style={{ marginLeft: 10 }}
                src={imagenale}
                width={380}
                alt="Foto de Alejandro"
              />
              <CardContent>
                <Typography
                  className={opensans.className}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                  decisiones en esta frase: "Destiny is not a matter of chance,
                  it is a matter of choice; it is not a thing to be waited for,
                  it is a thing to be achieved."
                </Typography>
              </CardContent>
              <CardActions>
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
          </div>
        </div>
        <div className="grid justify-items-center md:grid-cols-2">
          <div style={{ width: 450, marginBottom: 50 }}>
            <Card style={{ background: "#f3ccf3", height: 1020 }}>
              <Image
                style={{ marginLeft: 10 }}
                src={imagenfer}
                width={380}
                alt="Foto de Fernanda"
              />
              <CardContent>
                <Typography
                  className={opensans.className}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                  Soy una persona capaz, proactiva, organizada, me caracterizo
                  por mi capacidad para solucionar problemas. Busco un puesto
                  desafiante donde pueda continuar aprendiendo y dar lo mejor de
                  mí. Actualmente me encuentro capacitándome como Desarrolladora
                  Java Full Stack y me interesa seguir formándome como
                  Desarrolladora. Adicionalmente soy Ingeniera ambiental con 10
                  años de experiencia en el cumplimiento de leyes, normas
                  ambientales y de seguridad.
                </Typography>
              </CardContent>
              <CardActions>
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
          </div>
          <div>
            <div style={{ width: 450, marginBottom: 50 }}>
              <Card style={{ background: "#ffd1bd", height: 1020 }}>
                <Image
                  style={{ marginLeft: 10 }}
                  src={imagenbryan}
                  width={380}
                  alt="Foto de Bryan"
                />
                <CardContent>
                  <Typography
                    className={opensans.className}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                    desarrollo de software. Mi formación incluye una
                    licenciatura en Ingeniería en Sistemas Computacionales y una
                    sólida capacitación en lenguajes de programación como Python
                    y Java, así como en tecnologías web como HTML, JavaScript y
                    PHP.Me destaco por mi atención al detalle, mi capacidad para
                    resolver problemas y mi motivación para aprender y crecer en
                    un entorno tecnológico en constante evolución.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{ color: "black" }}
                    size="small"
                    target="_blank"
                    href="https://github.com/BryanTevillo"
                    className={opensans.className}
                  >
                    <GitHubIcon fontSize="large"></GitHubIcon>
                    Github
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
