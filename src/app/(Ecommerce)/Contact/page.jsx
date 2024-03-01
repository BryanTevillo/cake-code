"use client";

import { Label, TextInput, Button, Card, Checkbox } from "flowbite-react";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import { Open_Sans, Luckiest_Guy } from "next/font/google";
import Waves from "@/app/components/WavesComponent/Waves";

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
                    <form
                      action="https://formspree.io/f/xeqykvbz"
                      method="POST"
                    >
                      <label htmlFor="name">Nombre completo*</label>
                      <TextInput
                        type="text"
                        id="name"
                        name="Nombre:"
                        required
                      />
                      <br />
                      <label htmlFor="phone">Telefono*</label>
                      <TextInput
                        type="text"
                        id="phone"
                        name="Telefono:"
                        required
                      />
                      <br />
                      <label htmlFor="email">Correo Electronico*</label>
                      <TextInput
                        type="text"
                        id="email"
                        name="Correo:"
                        required
                      />
                      <br />
                      <label htmlFor="event">
                        <p>Evento</p>
                        <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          (Por ejemplo: Cumpleaños, boda, bautizo, baby shower,
                          etc.)
                        </p>
                      </label>
                      <TextInput type="text" id="event" name="Evento:" />
                      <br />
                      <label htmlFor="date">Fecha de evento</label>
                      <TextInput
                        type="date"
                        id="date"
                        name="Fecha de evento:"
                      />
                      <br />
                      <label htmlFor="num-servering">Número de invitados</label>
                      <TextInput
                        type="number"
                        id="num-servering"
                        name="num-servering"
                        min={1}
                      />
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
                        name="Mensaje para organizador:"
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
                            name="Fue seleccionado el pastel de chocolate"
                          />
                          <label for="chocolate">Chocolate</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="vanilla"
                            style={{ marginRight: 10 }}
                            name="Fue seleccionado el pastel de vainilla"
                          />
                          <label for="vanilla">French Vanilla</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="fresa"
                            style={{ marginRight: 10 }}
                            name="Fue seleccionado el pastel de fresa"
                          />
                          <label for="fresa">Fresa</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="redvelvet"
                            style={{ marginRight: 10 }}
                            name="Fue seleccionado el pastel de redvelvet"
                          />
                          <label for="redvelvet">Red Velvet</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="zanahoria"
                            style={{ marginRight: 10 }}
                            name="Fue seleccionado el pastel de zanahoria"
                          />
                          <label for="zanahoria">Zanahoria</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="limon"
                            style={{ marginRight: 10 }}
                            name="Fue seleccionado el pastel de limon"
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
                            name="Fue seleccionado el relleno de chocolate"
                          />
                          <label for="chocolate-relleno">Chocolate</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="vanilla-relleno"
                            style={{ marginRight: 10 }}
                            name="Fue seleccionado el relleno de vainilla"
                          />
                          <label for="vanilla-relleno">Vanilla</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="fresa-relleno"
                            style={{ marginRight: 10 }}
                            name="Fue seleccionado el relleno de fresa"
                          />
                          <label for="fresa-relleno">Fresa</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="mocha-relleno"
                            style={{ marginRight: 10 }}
                            name="Fue seleccionado el relleno de mocha"
                          />
                          <label for="mocharelleno">Mocha</label>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <input
                            type="checkbox"
                            id="galleta-relleno"
                            style={{ marginRight: 10 }}
                            name="Fue seleccionado el relleno de galleta"
                          />
                          <label for="galleta-relleno">Galleta</label>
                        </div>
                      </fieldset>
                      <div className="flex justify-center">
                        <Button
                          type="submit"
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
        <Waves color="#ffddcc"></Waves>
      </div>
      <div className="h-[70px] md:h-[210px] xl:h-[205px] bg-[#ffb0cd]"></div>
    </div>
  );
}

export default page;
