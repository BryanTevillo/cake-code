"use client";

import { Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import CartS from "../../../../components/CartSummary/CartS";

import { Card, Button } from "flowbite-react";
import "./style.css";
import { Divider } from "@mui/material";
import { useState } from "react";
import Alert from "@mui/material/Alert";

function summary() {
  const [showAlert, setShowAlert] = useState(false);
  const [value, setValue] = useState("one");

  const handleChageAlert = (qty) => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1200);
  };
  return (
    <>
      {showAlert && (
        <Alert variant="filled" severity="success">
          Compra completada con exito
        </Alert>
      )}
      <section className="grid  grid-cols-1 xl:grid-cols-2">
        <div className="mx-4  mb-4 ">
          <div className="mx-auto max-w-3xl">
            <div className="mt-8">
              <ul className="space-y-4">
                <section className="flex  text-2xl lg:text-4xl gap-4">
                  <h1 className={[luckiestguy.className]}>
                    Revisa y confirma tu compra
                  </h1>
                </section>
                <section>
                  <p className="flex justify-left  text-xl lg:text-2xl gap-4">
                    Detalle del envio
                  </p>
                </section>
                <li className="flex flex-col bg-white rounded-2xl">
                  <div className="flex items-center gap-5  ">
                    <div className="pl-5 ">
                      <svg
                        className="w-10 h-10 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#428BFA"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 0 0-2 2v9c0 .6.4 1 1 1h.5v.5a3.5 3.5 0 1 0 7-.5h3v.5a3.5 3.5 0 1 0 7-.5h.5c.6 0 1-.4 1-1v-4l-.1-.4-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.2 11.6.3.9a1.5 1.5 0 1 1-.3-1Zm-10 0 .3.9a1.5 1.5 0 1 1-.3-1ZM14 10V8h4.4l1 2H14Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-sm text-gray-900">
                        Recibe en domicilio
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline"></dt>
                          <dd className="inline"></dd>
                        </div>

                        <div className=" w-[150px] md:w-[300px] xl:w-[450x]">
                          <dt className="inline">
                            MIGUEL ALEMAN 44 | ENTRE PEDRO ASCENCIO ALQUISIRAS Y
                            CALLE 18 DE MARZO, Chilpancingo De Los Bravo -
                            Guerrero
                          </dt>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-end justify-end mr-3 text-[#428BFA]">
                      <h3>Modificar direccion </h3>
                    </div>
                  </div>
                </li>

                <li className="flex flex-col bg-white rounded-2xl">
                  <div className="flex items-center gap-5  ">
                    <div className="pl-5 pt-2 pb-2">
                      <svg
                        className="w-10 h-10 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#428BFA"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 7h-4v3a1 1 0 1 1-2 0V7H6a1 1 0 0 0-1 1L4 19.7A2 2 0 0 0 6 22h12c1 0 2-1 2-2.2L19 8c0-.5-.5-.9-1-.9h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 1 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-900">
                        Recibes 4 Productos
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline"></dt>
                          <dd className="inline"></dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end mr-3 text-[#428BFA]">
                      <h3>Modificar productos</h3>
                    </div>
                  </div>

                  <div className="">
                    <Divider></Divider>
                    <div className="flex justify-between">
                      <CartS></CartS>
                    </div>
                  </div>
                </li>
                <section className="flex justify-left  text-xl lg:text-2xl gap-4">
                  <h1>Detalles del pago</h1>
                </section>
                <li className="flex flex-col bg-white rounded-2xl">
                  <div className="flex items-center gap-5 ">
                    <div className="pl-5 pt-2 b-2">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-3 me-2 -ms-1"
                        viewBox="0 0 660 203"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996"
                          fill="#0E4595"
                        />
                        <path
                          d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718"
                          fill="#F2AE14"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-900 pt-2">
                        Visa ******098
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline"></dt>
                          <dd className="inline"></dd>
                        </div>

                        <div>
                          <dt className="inline">Pagas 4 x $1200</dt>
                        </div>
                      </dl>
                    </div>
                    <div className="flex flex-1 items-center justify-end mr-3 text-[#428BFA]">
                      <h3>Modificar</h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mx-auto  py-10 sm:px-6 sm:py-12 lg:mx-auto ">
          <div className="mx-auto max-w-3xl ">
            <Card className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Resumen de compra
              </h5>
              <Divider></Divider>
              <div className="flex justify-between uppercase">
                <p>Productos(4):</p>
                <p>$1500</p>
              </div>
              <p className="font-normal text-blue-700 dark:text-blue-400">
                Cp: 39350 Vicente Guerrero #18 Acapulco Gro.
              </p>
              <div className="flex justify-between font-bold uppercase">
                <p>Total:</p>
                <p>$1500</p>
              </div>
              <Button
                onAdd={handleChageAlert}
                color=""
                className="bg-button_primary text-white hover:opacity-75"
              >
                Confirmar compra
              </Button>
            </Card>
          </div>
        </div>

        {/* <svg aria-hidden="true" class="w-10 h-3 me-2 -ms-1" viewBox="0 0 660 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996" fill="#0E4595"/><path d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718" fill="#F2AE14"/></svg> */}
      </section>
    </>
  );
}

export default summary;
