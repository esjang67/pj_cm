import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import img_banner1 from '../img/banner/banner1.jpg';
import img_banner2 from '../img/banner/banner2.png';
import img_banner3 from '../img/banner/banner3.jpg';

//sldkjf
function Banner() {
  return (
    <Carousel className="Banner" data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={img_banner1}
          alt="Banner1"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={img_banner2}
          alt="Banner2"
        />
      </Carousel.Item>      
      <Carousel.Item>
        <img
          className="d-block w-90"
          src={img_banner3}
          alt="Banner3"
        />
      </Carousel.Item>            
    </Carousel>
  );
}

export default Banner;
