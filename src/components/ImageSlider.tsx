import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../imageSlider.css";
import PlaceholderImg from "../images/placeholder.jpg";
import { ImageSliderProps } from "../interfaces";

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const lastIndex = length - 1;
    setCurrent(current > lastIndex ? 0 : current < 0 ? lastIndex : current);
  }, [current, length]);

  return (
    <div className="slider">
      {length > 1 && (
        <>
          <FaChevronLeft
            className="slider-icon left"
            onClick={() => setCurrent(current - 1)}
          />
          <FaChevronRight
            className="slider-icon right"
            onClick={() => setCurrent(current + 1)}
          />
        </>
      )}
      {images.map((img, index) => {
        const className =
          index === current
            ? "active"
            : index === current - 1 || (current === 0 && index === length - 1)
            ? "last"
            : "next";

        return (
          <div key={index} className={`slide ${className}`}>
            <object
              key={index}
              className="slide-img"
              data={img}
              type="image/png"
            >
              <img
                className="slide-img"
                src={PlaceholderImg}
                alt="No image available."
              />
            </object>
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
