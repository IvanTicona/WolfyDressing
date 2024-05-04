import { Button, Divider } from "@nextui-org/react"
import fruit from '../images/fruit-2.jpeg'

export const Product = () => {
  return (
    <>
      <span className="text-2xl font-bold mx-5">Product</span>

      <img 
        src={fruit} 
        alt="fruit" 
        className="shadow-md w-80 my-5 mx-auto rounded-md object-cover
        md:w-fit md:m-auto"
        />

      <div className="m-5 mt-10 p-5 rounded-md shadow-xl bg-white">

        <span>Select size: </span>

        <div className="flex justify-between gap-5">
          <Button variant="ghost" color="primary">XS</Button>
          <Button variant="ghost" color="primary">S</Button>
          <Button variant="ghost" color="primary">M</Button>
        </div>

        <Divider className="my-3" />

        <span>Color: </span>

        <div className=" flex justify-between gap-5">
          <Button variant="ghost" color="warning">Red</Button>
          <Button variant="ghost" color="warning">Yellow</Button>
          <Button variant="ghost" color="warning">Black</Button>
        </div>

        <Divider className="my-3" />

        <span>Description: </span>

        <p>Premium quality fruit, fresh and delicious for your health and well-being</p>

        <Divider className="my-3" />

        <span className="text-xl">Price: Bs <strong>65</strong></span>

        <Button color="success" variant="bordered" className="w-full mt-3">Add to cart</Button>
      </div>
    </>
  )
}
