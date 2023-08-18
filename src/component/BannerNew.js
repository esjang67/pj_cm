import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import img_banner1 from "../img/banner/banner1.jpg";
import img_banner2 from "../img/banner/banner2.png";
import img_banner3 from "../img/banner/banner3.jpg";

const BannerNew = () => {
  
  return (
    <section className='section' aria-labelledby='example1'>
      
      <div className='carousel-container short'>
        <Carousel
          isLoop={true}
          isAutoPlaying={true}
          canAutoPlay={true}
          autoPlayInterval={2000}
          isMaximized={false}
          hasSizeButton={false}
          hasMediaButton={false}
          hasIndexBoard={false}
          // hasLeftButton={false}
          // hasRightButton={false}
          hasThumbnails={false}

          leftIcon={
            <span
              className='icon-text'
              role='img'
              aria-label='left'
              style={{
                fontSize: 'min(50px, 5vw)',
                backgroundColor:'transparent',
                border:'1px solid red',
                margin:0,padding:0
              }}
            >
              {`<`}
            </span>
          }
          rightIcon={
            <span
              className='icon-text'
              role='img'
              aria-label='right'
              style={{
                fontSize: 'min(50px, 5vw)'
              }}
            >
              ▶
            </span>
          }
        >
          <div className='text-slide'>
            <img src={img_banner1} alt='s' style={{width:'100%'}} />
          </div>
          <div className='text-slide'>
            <img src={img_banner2} alt='s' style={{width:'100%'}} />
          </div>
          <div className='text-slide'>
            <img src={img_banner3} alt='s' style={{width:'100%'}} />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BannerNew;