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
    const chunks = [];
    for (let i = 0; i < cards.length; i += 3) {
      chunks.push(cards.slice(i, i + 3));
    }

    return chunks.map((chunk, index) => (
      <Carousel.Item key={index}>
        <div className="d-flex">
          {chunk.map(card => (
            <div className="card" key={card.id}>
              <img src={require(`../assets/imgs/${card.image}`)} className="card-img-top" alt={`Imagen ${card.id}`} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="#" className="btn btn-primary">Ver más</a>
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
