import React from "react";

// import {useState, useEffect} from "react";
import Product from "@components/Product";
import axios from "axios";
import "@styles/Products.scss";

export interface products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: object;
}

const Products = (): JSX.Element => {
  const [products, setProducts] = React.useState<products[]>([]);
  // const [totalPrice, setTotalPrice] = React.useState(0);
  // const [chooseItems, setChooseItems] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const res = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      });
      setProducts(res.data);
    };
    fetch().then(() => {});
  }, []);

  if (products.length === 0) {
    return <div style={{ fontSize: "50px" }}>Загрузка</div>;
  }
  // const showPrice = (product) => {
  //     let flag = true;
  //     console.log("цена товара" + product.price)
  //     for (let i = 0; i < chooseItems.length; i++) {
  //         if (chooseItems[i].id === product.id) {
  //             flag = false
  //         }
  //     }
  //     if (flag) {
  //         chooseItems.push(product)
  //         setTotalPrice(totalPrice + product.price)
  //     }
  // }

  return (
    <div>
      <span className="all">
        Все товары <sup style={{ fontSize: "14px" }}>[{products.length}]</sup>
      </span>
      <div className="container">
        {products.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
