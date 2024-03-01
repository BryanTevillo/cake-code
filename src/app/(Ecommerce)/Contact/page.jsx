"use client";

import { Label, TextInput, Button, Card, Checkbox } from "flowbite-react";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import { Open_Sans, Luckiest_Guy } from "next/font/google";

function page() {
  return (
    <div>
      <div className="flex justify-center items-center bg-[#ffddcc]">
        <Card
          style={{
            marginLeft: 100,
            marginRight: 100,
            marginTop: 50,
            marginBottom: 50,
            width: 900,
            padding: 30,
          }}
          className="sm:h-full"
        >
          <div className="sm:max-w">
            <div className="text-2xl">
              <h1 className={luckiestguy.className} id="titulo">
                Contacto
              </h1>
            </div>
            <div className="md:m-50 sm:m-100">
              <div>
                <div
                  className="text-lg"
                  style={{
                    marginTop: 20,
                    marginBottom: 30,
                  }}
                >
                  <p className={opensans.className}>
                    Dulces clientes: ¡asegúrense de brindarnos la mayor cantidad
                    de información posible sobre su solicitud! Para que podamos
                    responderle rápidamente, debemos tener la fecha del evento,
                    la cantidad de porciones y una pequeña descripción de cómo
                    le gustaría su pastel. Respondemos a los formularios de
                    consulta en el orden en que aparecen.
                  </p>
                  <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nota: Los datos con asterisco (*) son obligatorios.
                  </p>
                </div>
                <div className={opensans.className}>
                  <div className="text-lg">
                    <form action="">
                      <label htmlFor="name">Nombre completo*</label>
                      <TextInput type="text" id="name" required />
                      <br />
                      <label htmlFor="phone">Telefono*</label>
                      <TextInput type="text" id="phone" required />
                      <br />
                      <label htmlFor="email">Correo Electronico*</label>
                      <TextInput type="text" id="email" required />
                      <br />
                      <label htmlFor="event">
                        <p>Evento</p>
                        <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          (Por ejemplo: Cumpleaños, boda, bautizo, baby shower,
                          etc.)
                        </p>
                      </label>
                      <TextInput type="text" id="event" />
                      <br />
                      <label htmlFor="date">Fecha de evento</label>
                      <TextInput type="date" id="date" />
                      <br />
                      <label htmlFor="num-servering">Número de invitados</label>
                      <TextInput type="number" id="num-servering" min={1} />
                      <br />
                      <label htmlFor="message">
                        <p className={opensans.className}>Mensaje*</p>
                        <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          (Escríbenos en qué podemos ayudarte y danos detalles
                          de cómo te gustaría tu postre😊)
                        </p>
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        maxlength="200"
                        placeholder="Máximo 200 letras"
                        required
                      ></textarea>
                      <br />
                      <p>
                        Ayúdanos a conocerte un poco más seleccionando tus
                        sabores y rellenos favoritos para tu pastel en las dos
                        siguientes secciones.
                      </p>
                      <br />
                      <fieldset>
                        <legend style={{ marginBottom: 10 }}>
                          Sabor del pastel
                        </legend>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="chocolate"
                            style={{ marginRight: 10 }}
                          />
                          <label for="chocolate">Chocolate</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="vanilla"
                            style={{ marginRight: 10 }}
                          />
                          <label for="vanilla">French Vanilla</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="fresa"
                            style={{ marginRight: 10 }}
                          />
                          <label for="fresa">Fresa</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="redvelvet"
                            style={{ marginRight: 10 }}
                          />
                          <label for="redvelvet">Red Velvet</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="zanahoria"
                            style={{ marginRight: 10 }}
                          />
                          <label for="zanahoria">Zanahoria</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="limon"
                            style={{ marginRight: 10 }}
                          />
                          <label for="limon">Limon</label>
                        </div>
                      </fieldset>
                      <br />
                      <fieldset>
                        <legend style={{ marginBottom: 10 }}>
                          Relleno del pastel
                        </legend>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="chocolate-relleno"
                            style={{ marginRight: 10 }}
                          />
                          <label for="chocolate-relleno">Chocolate</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="vanilla-relleno"
                            style={{ marginRight: 10 }}
                          />
                          <label for="vanilla-relleno">Vanilla</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="fresa-relleno"
                            style={{ marginRight: 10 }}
                          />
                          <label for="fresa-relleno">Fresa</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="mocha-relleno"
                            style={{ marginRight: 10 }}
                          />
                          <label for="mocharelleno">Mocha</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="galleta-relleno"
                            style={{ marginRight: 10 }}
                          />
                          <label for="galleta-relleno">Galleta</label>
                        </div>
                      </fieldset>
                      <div className="flex justify-center">
                        <Button
                          type="send"
                          className="bg-button_primary px-2 py-1 text-center"
                        >
                          <p className="text-base">Enviar</p>
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="h-[12px] md:h-[25px] xl:h-[30px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 5 1440 200"
          className="absolute"
        >
          <path
            fill="#ffddcc"
            fill-opacity=".8"
            d="M0,96L21.8,112C43.6,128,87,160,131,149.3C174.5,139,218,85,262,64C305.5,43,349,53,393,69.3C436.4,85,480,107,524,122.7C567.3,139,611,149,655,144C698.2,139,742,117,785,101.3C829.1,85,873,75,916,64C960,53,1004,43,1047,58.7C1090.9,75,1135,117,1178,138.7C1221.8,160,1265,160,1309,154.7C1352.7,149,1396,139,1418,133.3L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 80 1440 320"
          className="absolute"
        >
          <path
            fill="#ffddcc"
            fill-opacity=".7"
            d="M0,128L21.8,154.7C43.6,181,87,235,131,266.7C174.5,299,218,309,262,293.3C305.5,277,349,235,393,208C436.4,181,480,171,524,149.3C567.3,128,611,96,655,117.3C698.2,139,742,213,785,240C829.1,267,873,245,916,218.7C960,192,1004,160,1047,160C1090.9,160,1135,192,1178,192C1221.8,192,1265,160,1309,170.7C1352.7,181,1396,235,1418,261.3L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 50 1440 320"
          className="absolute"
        >
          <path
            fill="#ffddcc"
            fill-opacity=".5"
            d="M0,160L30,176C60,192,120,224,180,208C240,192,300,128,360,133.3C420,139,480,213,540,224C600,235,660,181,720,176C780,171,840,213,900,208C960,203,1020,149,1080,133.3C1140,117,1200,139,1260,160C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="h-[70px] md:h-[210px] xl:h-[205px] bg-[#ffb0cd]"></div>
    </div>
  );
}

export default page;
