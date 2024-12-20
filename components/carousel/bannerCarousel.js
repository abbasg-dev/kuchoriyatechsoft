import CarouselItem from "../carousel-item/CarouselItem";
import styles from "./bannerCarousel.module.css";
import Carousel from "react-elastic-carousel";
import React from "react";

const BannerCarousel = () => {
  const items = [
    {
      title: "Innovative software solutions for a changing world",
      text: [
        "We design software solutions that accelerate",
        <br />,
        "progress and adapt to our world's ever-changing",
        <br />,
        " landscape.",
      ],
      imageUrl: "/banner1.jpg",
    },
    {
      title: "Kuchoriya Softwares",
      text: [
        "Since our founding in 2009, we have grown to become",
        <br />,
        " a recognized global brand by serving more than 1000",
        <br />,
        " clients, and we are proud to offer full-range, ",
        <br />,
        "end-to-end development and designing solutions",
      ],
      imageUrl: "/banner2.jpg",
    },
  ];
  return (
    <Carousel
      showArrows={false}
      itemsToShow={1}
      renderPagination={({ pages, activePage, onClick }) => {
        return (
          <div style={{ marginTop: 10 }} className="d-flex">
            {pages?.map((page) => {
              const isActivePage = activePage === page;
              return (
                <input
                  type="radio"
                  className={styles.radioButton}
                  key={page}
                  checked={isActivePage}
                  onClick={() => onClick(page)}
                />
              );
            })}
          </div>
        );
      }}
    >
      {items?.map((item) => {
        return (
          <CarouselItem
            title={item.title}
            text={item.text}
            imageUrl={item.imageUrl}
          />
        );
      })}
    </Carousel>
  );
};

export default BannerCarousel;
