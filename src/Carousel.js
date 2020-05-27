import React from "react";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://unsplash.com/photos/T-0EW-SEbsE/download?force=true&w=640"
              className="d-block w-100"
              alt="Running dogs"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://unsplash.com/photos/FqdfVIdgR98/download?force=true&w=640"
              className="d-block w-100"
              alt="Girl with sunglasses"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://unsplash.com/photos/ISg37AI2A-s/download?force=true&w=640"
              className="d-block w-100"
              alt="Man hugging a dog"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
