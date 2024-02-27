import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
import { Card, Button } from "flowbite-react";
import Image from "next/image";

export default function CardSize({ img, text1, text2 }) {
  return (
    <Card className="w-auto md:w-[400px] xl:w-[350px] border-none rounded-none ">
      <Image src={img} className="w-[300px] h-[300px] md:pl-10 xl:pl-0"></Image>

      <p
        className={[
          opensans.className +
            " text-xl md:text-3xl xl:text-2xl font-normal md:text-center text-gray-700 dark:text-gray-400",
        ]}
      >
        {text1}
      </p>
      <p className="font-bold text-2xl md:text-3xl xl:text-2xl text-center">
        {text2}
      </p>

      <div className="flex justify-center">
        <Button className="bg-button_primary" type="signin">
          SELECCIONAR
        </Button>
      </div>
    </Card>
  );
}
