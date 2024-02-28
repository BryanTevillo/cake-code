import { Open_Sans} from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
import { Card, Button } from "flowbite-react";
import Image from "next/image";


function CardUsers({ img, description, price }) {
  return (
    <div className={opensans.className}>
              <Card className="max-w-xs my-4">
                <Image
                  src={img}
                  alt="Pastel1"
                  className="w-[250px] h-[310px]"
                />
                <h5 className="text-center text-xl font-bold text-gray-900 dark:text-white">
                  {description}
                </h5>
                <p className="text-center font-normal text-gray-700 dark:text-gray-400">
                  {price}
                </p>
                <div className="flex justify-center">
                  <Button
                    className="bg-button_primary text-lg  px-3 py-2  text-center"
                    type="tarjeta"
                  >
                    Comprar de nuevo
                  </Button>
                </div>
              </Card>
            </div>
  )
}

export default CardUsers