import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide1 from "../imagenes/slider1.webp"
import Slide2 from "../imagenes/slider2.webp"
import Slide3 from "../imagenes/slider3.webp"
import Slide4 from "../imagenes/slider4.webp"
import Slide5 from "../imagenes/slider5.webp"
import {Carousel} from 'react-bootstrap';

function SliderHome (){
    return(
        <Carousel>
            <Carousel.Item>
            <a href="#"><img className="d-block w-100" src={Slide1} alt="First slide"/></a>
            </Carousel.Item>
                <Carousel.Item>
                    <a href="#"><img className="d-block w-100" src={Slide2} alt="Third slide"/></a>
                </Carousel.Item>
                    <Carousel.Item>
                        <a href="#"><img className="d-block w-100" src={Slide3} alt="Third slide"/></a>
                    </Carousel.Item>
                <Carousel.Item>
                    <a href="#"><img className="d-block w-100" src={Slide4} alt="Third slide"/></a>
                </Carousel.Item>
            <Carousel.Item>
                <a href="#"><img className="d-block w-100" src={Slide5} alt="First slide"/></a>
            </Carousel.Item>    
        </Carousel>
    )
}

export default SliderHome