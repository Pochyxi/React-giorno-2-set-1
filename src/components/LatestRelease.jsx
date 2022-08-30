import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fantasy from '../data/books/fantasy.json';

class LatestRelease extends Component {

    states = {
        asin: []
    }

    render(){
        return (
            <Container fluid className='justify-content-center text-center align-items-center'>
                <Row>
                    {
                        fantasy.map((book) => (
                            <Col id='c-col' className='flex-column' xs={12} md={6} lg={4} key={book.asin}>
                                <div className='img-div'>
                                    <img
                                        src={book.img}
                                        alt={book.title}
                                        className= 'pt-4'
                                        id='c-img'
                                    />  
                                </div>
                                
                                <div id='c-title' className='pt-2 mb-2'>
                                    <h2>title: {book.title}</h2> 
                                    
                                </div> 
                                <button
                                     className='btn btn-primary'
                                     onClick={() => {
                                        let price = document.querySelector(`#a${book.asin}`);
                                        let pricer = document.createElement('h3');
                                        pricer.innerHTML = book.price + '$';
                                        if (this.states.asin.find(asin => asin === book.asin)){
                                            price.remove(pricer)
                                            this.states.asin = this.states.asin.filter(asin => asin !== book.asin);
                                        } else {
                                            price.append(pricer)
                                            this.states.asin.push(book.asin)
                                        }
                                        
                                        
                                        console.log(this.states.asin)
                                     }}
                                     >
                                        Show price
                                </button>
                                <div className='mt-2' id={'a'+ book.asin}>

                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}
export default LatestRelease;