"use client";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import Waves from "@/app/components/WavesComponent/Waves";
import "./styles.css";

import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import Galleta1 from "../../../../../public/galletas/amaranto.webp";
import Galleta2 from "../../../../../public/galletas/chocolate-relleno.webp";
import Galleta3 from "../../../../../public/galletas/lavanda.webp";
import Galleta4 from "../../../../../public/galletas/granola.webp";
import Galleta5 from "../../../../../public/galletas/nuez.webp";
import Galleta6 from "../../../../../public/galletas/paylimon.webp";
import Card1 from "@/app/components/CardCupcakes/CardCupcakes";
import Search from "@/app/components/Search/search";

export default function Galletas() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <h1 className={[luckiestguy.className + " tracking-wider"]} id="titulo">
        GALLETAS
      </h1>
      <div className="mb-[100px] md:mb-[170px] xl:mb-[200px] relative md:h-10 -ml-5">
        <Waves color="#ffb0cd"></Waves>
      </div>
      <div>
        <Search></Search>
      </div>
      <div className="pt-50 grid justify-items-center md:grid-cols-3">
        <div className={opensans.className}>
          <Card1
            img={Galleta1}
            text1="Amaranto con chocolate"
            text2="$25.00 c/u"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Galleta2}
            text1="Chocolate con relleno"
            text2="$28.00 c/u"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Galleta3}
            text1="Chocolate blanco "
            text2="$20.00 c/u"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Galleta4}
            text1="Granola y lavanda"
            text2="$40.00 c/u"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Galleta5}
            text1="Vainilla y azucar glass"
            text2="$25.00 c/u"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Galleta6}
            text1="Galleta de limón"
            text2="$30.00 c/u"
          ></Card1>
        </div>
      </div>
      <div className="my-8 flex overflow-x-auto sm:justify-center rounded-full">
        <Pagination
          layout="pagination"
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          previousLabel=""
          nextLabel=""
          showIcons
          className="rounded-full"
        />
      </div>
    </div>
  );
}
