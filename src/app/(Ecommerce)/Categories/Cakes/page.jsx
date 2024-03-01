"use client";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Open_Sans, Luckiest_Guy } from "next/font/google";
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });
import "./styles.css";
import Pastel1 from "../../../../../public/pastel-oreo.webp";
import Pastel2 from "../../../../../public/pastel-chocolate.webp";
import Pastel3 from "../../../../../public/pastelbaby.webp";
import Pastel4 from "../../../../../public/Pastelcerezas.webp";
import Pastel5 from "../../../../../public/pastelchocoflor.webp";
import Pastel6 from "../../../../../public/Pastelunicornio.webp";
import Waves from "@/app/components/WavesComponent/Waves";
import Card1 from "@/app/components/CardCupcakes/CardCupcakes";
import Search from "@/app/components/Search/search";

export default function Pasteles() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <h1
        className={[luckiestguy.className + " tracking-wider pb-0"]}
        id="titulo"
      >
        PASTELES
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
            img={Pastel1}
            text1="Oreo con vainilla"
            text2="$450.00"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Pastel2}
            text1="Chocolate con frutos rojos"
            text2="$350.00"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Pastel3}
            text1="Pastel para baby shower"
            text2="$250.00"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Pastel4}
            text1="Chocolate con cerezas"
            text2="$450.00"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Pastel5}
            text1="Café y flor de chocolate"
            text2="$370.00"
          ></Card1>
        </div>

        <div>
          <Card1
            img={Pastel6}
            text1="Unicornio con chocolate"
            text2="$450.00"
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
