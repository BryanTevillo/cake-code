import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import { Card, Button } from "flowbite-react";
import Image from "next/image";

export default function CardC({ img, text, buttontext }) {
  return (
    <Card className="w-[350px] md:w-[400px] md:h-[480px] xl:w-[350px] border-none rounded-none ">
      <Image src={img} className="w-[300px] h-[300px] md:pl-10 xl:pl-0"></Image>

      <p
        className={[
          opensans.className +
            " text-2xl text-center md:text-3xl xl:text-2xl font-normal md:text-center text-gray-700 dark:text-gray-400",
        ]}
      >
        {text}
      </p>

      <div className="flex justify-center">
        <Button className="bg-button_primary" type="signin">
          SELECCIONAR
        </Button>
      </div>
    </Card>
  );
}
