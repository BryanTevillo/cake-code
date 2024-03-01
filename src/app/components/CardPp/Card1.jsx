import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
import { Card } from "flowbite-react";
import Image from "next/image";

export default function CardCat({ href, img, text }) {
  return (
    <Card
      className="max-w-sm bg-transparent border-none rounded-none shadow-none place-items-center"
      renderImage={() => (
        <a href={href}>
          <Image
            src={img}
            className="rounded-[30px] md:w-[235px] md:h-[240px] w-[185px] h-[190px]"
          />
        </a>
      )}
    >
      <div className={opensans.className}>
        <a href={href}>
          <h5 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white hover:text-[#FFFFFF] text-center">
            {text}
          </h5>
        </a>
      </div>
    </Card>
  );
}
