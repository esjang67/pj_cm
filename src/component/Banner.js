import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
//sldkjf
function Banner() {
  return (
    <Carousel className="Banner" data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/banner/1225123.jpg/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

// import "./Banner.css";
// import Carousel from "react-bootstrap/Carousel";
// // import ExampleCarouselImage from "../img/banner";

// function Banner() {
//   return (
//     // <div>
//     //   <div
//     //     id="carouselExampleSlidesOnly"
//     //     class="carousel slide"
//     //     data-bs-ride="carousel"
//     //   >
//     //     <div class="carousel-inner">
//     //       <div class="carousel-item active">
//     //         <img
//     //           src="../img/banner/1225123.jpg"
//     //           class="d-block w-100"
//     //           alt="..."
//     //         />
//     //       </div>
//     //       <div class="carousel-item">
//     //         <img src="..." class="d-block w-100" alt="..." />
//     //       </div>
//     //       <div class="carousel-item">
//     //         <img src="..." class="d-block w-100" alt="..." />
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="Banner">
//       <Carousel className="bannerCarousel" data-bs-theme="dark">
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="../img/banner/1225123.jpg"
//             alt="1225123"
//           />

//           {/* <ExampleCarouselImage text="1225123" /> */}
//           <Carousel.Caption>
//             <h5>First slide label</h5>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }
// export default Banner;
