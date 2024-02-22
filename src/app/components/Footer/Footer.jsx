"use client";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useState } from "react";
import { Modal } from "flowbite-react";

import ModalPrivacy from "../Privacy/ModalPrivacy";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className=" sticky top-[100vh]  flex flex-col items-center bg-footer text-center dark:bg-footer lg:text-left ">
      <div className=" container p-6">
        <div className="grid place-items-center md:grid-cols-3 lg:grid-cols-3">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral text-xl">
              Cake Code Shop
            </h5>

            <ul className="mb-0 list-none text-center text-zinc-500 text-lg">
              <li>
                <a href="/about" className=" text-lg">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#!">Categorias</a>
              </li>
              <li>
                <a href="/contact">Contactanos</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 sticky top-0 font-bold uppercase  text-neutral-800 dark:text-neutral text-xl">
              Redes Sociales
            </h5>

            <ul className="mb-0 list-none text-center text-zinc-500 text-lg">
              <li>
                <InstagramIcon style={{ color: "gray" }}></InstagramIcon>
                <a href="https://www.instagram.com/cakecode_/">Instagram</a>
              </li>
              <li>
                <FacebookOutlinedIcon
                  style={{ color: "gray" }}
                ></FacebookOutlinedIcon>
                <a href="https://www.facebook.com/profile.php?id=61556768994870">
                  Facebook
                </a>
              </li>
              <br />
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral text-xl">
              Información
            </h5>

            <ul className="mb-0 list-none text-center text-zinc-500  text-lg">
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Aviso de privacidad
                </a>
                <Modal show={showModal} onClose={() => setShowModal(false)}>
                  <ModalPrivacy></ModalPrivacy>
                </Modal>
              </li>
              <li>
                <a href="#!">Preguntas Frecuentes</a>
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-footer p-4 text-center text-neutral-700 dark:bg-purple-300 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://github.com/BryanTevillo/cake-code.git"
        >
          Cake-Code
        </a>
      </div>
    </footer>
  );
}

export default Footer;
