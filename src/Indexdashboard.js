import React, { Component, Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './App.css'


class IndexDashboard extends Component {
  render() {
    return (
      <Fragment>
        <h2 className="text">Welcome!</h2>
        <div style={{ display: 'block', width: 1500, padding: 50 }}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
         src="https://get.pxhere.com/photo/home-shop-business-shopping-room-lighting-garment-interior-design-clothing-store-boutique-design-mirror-wardrobe-sale-commerce-clothes-retail-consumer-men's-fashion-1062572.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h1>Clothes</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2017/04/06/11/24/fashion-2208045_1280.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h1>Accessories</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
         src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h1>Grocery</h1>
          </Carousel.Caption>
        </Carousel.Item>
            <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
         src="https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h1>Home & Kitchen Stuffs</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  
      </Fragment>
    );
  }
}
export default IndexDashboard;
