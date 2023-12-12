import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slide from '../assets/imgs/slider.png';

const Header = () => {
  // Estado para controlar el índice activo del carrusel
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide} // Coloca aquí la URL de tu primera imagen
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide} // Coloca aquí la URL de tu segunda imagen
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide} // Coloca aquí la URL de tu tercera imagen
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;