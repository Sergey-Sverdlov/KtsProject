import React from "react";

import styles from "@styles/Product.module.scss";
import { useNavigate } from "react-router-dom";
interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
}

const Product: React.FC<IProduct> = ({ id, image, title, price }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.product}`}
      onClick={() => navigate(`/product/${id}`)}
    >
      <img
        src={image}
        width="50px"
        className={`${styles.product_image}`}
        alt="Фото изображения"
      />{" "}
      <br />
      <span className={`${styles.product_title}`}> {title} </span> <br />
      <span className={`${styles.product_price}`}>&#8381; {price} </span>
    </div>
  );
};

export default Product;
