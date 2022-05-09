import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const { Meta } = Card;
import laptop from "../../images/laptop.png";
const SingleProduct = ({ product }) => {
  const { title, description, images, slug } = product;

  return (
    <>
      <div className="col-md-7">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          {images &&
            images.length &&
            images ?
            images.map((i) => {
              return <img className="slide" key={i.public_id} src={i.url} />;
            })}
        </Carousel>
      </div>
      <div className="col-md-5">
        <Card
          actions={[
            <>
              <ShoppingCartOutlined className="text-success" /> <br />
              Add to Cart
            </>,
            <Link to="/">
              <HeartOutlined className="text-info" /> <br /> Add to Wishlist
            </Link>,
          ]}
        >
          <Meta title={title} description={description} />
          <p>
            price/category/subs/shipping/color/brand/quantity available/sold
          </p>
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
