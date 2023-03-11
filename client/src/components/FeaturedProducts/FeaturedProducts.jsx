import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          deserunt cumque assumenda facilis porro ad. Numquam perferendis vero,
          nihil odio, quisquam minima animi aliquid sequi accusamus quae ipsa
          earum quis?
        </p>
      </div>
      <div className="bottom">
        {error ? "Something went wrong!"  : (loading ? "Loading..." : data.map((item) => (
          <Card item={item} key={item.id} />
        )))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
