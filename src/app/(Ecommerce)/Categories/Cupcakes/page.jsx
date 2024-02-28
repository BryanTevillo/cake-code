"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";
import Waves from "@/app/components/WavesComponent/Waves";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import "./styles.css";
import cupcake1 from "../../../../../public/cupcake/algodon.webp";
import cupcake2 from "../../../../../public/cupcake/avellana.webp";
import cupcake3 from "../../../../../public/cupcake/cafe.webp";
import cupcake4 from "../../../../../public/cupcake/cereza.webp";
import cupcake5 from "../../../../../public/cupcake/oreo.webp";
import cupcake6 from "../../../../../public/cupcake/redvelvet.webp";
import Card1 from "@/app/components/CardCupcakes/CardCupcakes";
import Search from "@/app/components/Search/search";

export default function Cupcakes() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <h1 className={[luckiestguy.className + " tracking-wider"]} id="titulo">
        CUP CAKES
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
            img={cupcake1}
            text1="Vainilla y chantilli"
            text2="$25.00 c/u"
          ></Card1>
        </div>
        <div>
          <Card1
            img={cupcake2}
            text1="Avellana y ferrero rocher"
            text2="$35.00 c/u"
          ></Card1>
        </div>
        <div>
          <Card1
            img={cupcake3}
            text1="Café con chocolate"
            text2="$25.00 c/u"
          ></Card1>
        </div>
        <div>
          <Card1
            img={cupcake4}
            text1="Cereza y chantilli"
            text2="$35.00 c/u"
          ></Card1>
        </div>
        <div>
          <Card1
            img={cupcake5}
            text1="Cupcake de oreo"
            text2="$37.00 c/u"
          ></Card1>
        </div>
        <div>
          <Card1 img={cupcake6} text1="Red velvet" text2="$37.00 c/u"></Card1>
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
