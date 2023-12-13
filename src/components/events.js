import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import data from '../data/events.json'; // Asegúrate de ajustar la ruta
import '../styles/events.css';

const CarouselWithCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data); // Asumiendo que 'data' es tu JSON importado
  }, []);

  const renderCarouselItems = () => {
    // Definir cuántas tarjetas se deben mostrar según el ancho de la ventana
    const cardsPerSlide = window.innerWidth < 600 ? 1 : window.innerWidth < 850 ? 2 : 3;
    
    const chunks = [];
    for (let i = 0; i < cards.length; i += cardsPerSlide) {
      chunks.push(cards.slice(i, i + cardsPerSlide));
    }
  
    return chunks.map((chunk, index) => (
      <Carousel.Item key={index}>
        <div className="d-flex flex-wrap justify-content-around">
          {chunk.map(card => (
            <div className={`card ${cardsPerSlide === 2 ? 'flex-basis-50' : 'flex-basis-33'}`} key={card.id}>
              <img src={require(`../assets/imgs/${card.image}`)} className="card-img-top" alt={`Imagen ${card.id}`} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href='/' className="btn btn-primary">Ver más</a>
              </div>
            </div>
          ))}
        </div>
      </Carousel.Item>
    ));
  };

  return (
    <div className='events'>
      <h2>Noticias y Eventos</h2>
      <Carousel interval={5000}>
        {renderCarouselItems()}
      </Carousel>
    </div>
  );
};

export default CarouselWithCards;
