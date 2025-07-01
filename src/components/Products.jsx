import React from 'react'
import { CartContextProvider } from './CartContextProvider'
import Card from './Card';

function Products() {
    return (
        <main className="grid grid-cols-5 gap-5">
          <Card
            img={"public/keyboard.jpg"}
            name={"Redragon K617 Fizz 60"}
            price={"₹2290.00"}
          />
          <Card
            img={"public/usb.jpg"}
            name={"USB-C Adapter"}
            price={"₹289.00"}
          />
          <Card
            img={"public/monitor.jpg"}
            name={"Computer Monitor"}
            price={"₹9990.00"}
          />
          <Card
            img={"public/wallart.jpg"}
            name={"Wall Art 1"}
            price={"₹200.00"}
          />
          <Card
            img={"public/wallArt2.jpg"}
            name={"Wall Art 1"}
            price={"₹200.00"}
          />
          <Card
            img={"public/book1.jpg"}
            name={"Finish What You Start"}
            price={"₹270.00"}
          />
          <Card
            img={"public/book2.jpg"}
            name={"The Art of Impossible"}
            price={"₹375.00"}
          />
          <Card
            img={"public/item.jpg"}
            name={"Wall Hanging"}
            price={"₹200.00"}
          />
        </main>
    );
}

export default Products
