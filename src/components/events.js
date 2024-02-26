import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import data from '../data/events.json';
import '../styles/events.css';

const CarouselWithCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <div className='events container'>
      <h2>Noticias y Eventos</h2>
      <Carousel interval={5000} indicators={false} pause={false} fade={false} wrap={true}> {/* Aquí configuramos el Carousel */}
        {cards.map((card, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <div className="card h-100 mw-100">
                  <img
                    src={require(`../assets/imgs/${card.image}`)}
                    className="card-img-top"
                    alt={`Imagen ${card.id}`}
                  />        
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text" style={{ textAlign: 'left' }}>{card.text}</p>
                    <div className="d-flex justify-content-end">
                      <a href='/' className="btn btn-primary">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselWithCards;