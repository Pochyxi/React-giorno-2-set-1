import { Component } from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';
import fantasy from '../data/books/fantasy.json';

class Welcome extends Component {
    render() {
        return (
            <Jumbotron className='text-center'>
                <h2>Libri a meno di 7$</h2>
                <Carousel>
                    {
                      fantasy.filter(book => book.price < 7).map(book => {
                          console.log(book)
                          return (
                              <Carousel.Item>
                                <img
                                id='caru-img'
                                className="d-block w-30"
                                src={book.img}
                                alt="First slide"
                                />
                                <Carousel.Caption className="text-dark">
                                <h3>{book.title}</h3>
                                <p>{book.price}$</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                          )
                      })
                    }
                
                </Carousel>
            </Jumbotron>
        )
    }
}

export default Welcome;