import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
import { Card, Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function CardSum({ img, alter, text1, text2, refer }) {
  return (
    <Card className="  w-[350px] md:w-[400px] md:h-[480px] xl:w-[350px] border-none rounded-none  ">
      <Image
        src={img}
        className="w-[300px] h-[300px] md:pl-10 xl:pl-0"
        alt={alter}
      ></Image>

      <p
        className={[
          opensans.className,
          " text-xl md:text-3xl md:text-center xl:text-2xl font-normal text-gray-700 dark:text-gray-400",
        ]}
      >
        {text1}
      </p>
      <p className="font-bold text-xl md:text-3xl xl:text-2xl text-center">
        {text2}
      </p>

      <div className="flex justify-center">
        <Link href={refer}>
          <Button className="bg-button_primary" type="signin">
            EDITAR
          </Button>
        </Link>
      </div>
    </Card>
  );
}
