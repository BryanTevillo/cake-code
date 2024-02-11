"use client";

import { Label, TextInput } from "flowbite-react";
import { Card } from "flowbite-react";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
//Revisar el tipo de letra con el equipo
const opensans = Open_Sans({ subsets: ["latin"] });
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import imgDireccion from "../../../public/direccion.png";
import Image from "next/image";
import { CenterFocusStrong } from "@mui/icons-material";

function page() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Card
          style={{
            marginLeft: 100,
            marginRight: 100,
            marginTop: 50,
            marginBottom: 50,
            width: 900,
            padding: 30,
          }}
          className="bg-blue_card sm:h-full"
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
                      <div class="flex justify-center">
                        <button
                          type="submit"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default page;

//className="grid md:grid-cols-2"
//className="justify-selft-center"
