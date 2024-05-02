import { Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react"
import fruit from '../images/fruit-2.jpeg'


export const Home = () => {

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (
    <>
      {/* ELEMENTOS DEL HOME PAGE
          - Slider
          - Categorías
          - Productos destacados
          - Productos nuevos
          - Productos vendidos
          - Footer
      */}
      <Divider className="my-4" />
      <div className="gap-6 p-5 mx-5 sm:mx-32 grid grid-cols-2 sm:grid-cols-4">

      {list.map((item, index) => (
        <Card shadow="sm" key={index*3} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={"Wolfy Item"}
              className="w-full object-cover h-[140px]"
              src={fruit}
              />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Wolfy Item</b>
            <p className="text-default-500">Bs 65</p>
          </CardFooter>
        </Card>
      ))}
      </div>
    </>
  )
}
