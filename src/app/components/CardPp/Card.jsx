import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
import { Card } from "flowbite-react";
import Image from "next/image";

export default function CardP({ img, text1, text2 }) {
  return (
    <Card
      className="max-w-sm bg-transparent border-none rounded-none shadow-none place-items-center"
      renderImage={() => (
        <Image
          src={img}
          className="rounded-[30px] md:w-[200px] md:h-[300px] w-[200px] h-[280px]"
        />
      )}
    >
      <div className={opensans.className}>
        <h5 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white text-center">
          {text1}
        </h5>
        <div>
          <p className="text-xl font-normal text-black-700 dark:text-gray-400 text-center">
            {text2}
          </p>
        </div>
      </div>
    </Card>
  );
}
