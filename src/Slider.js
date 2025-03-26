import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';

// Importar las imágenes
import imagen1 from './images/imagen1.webp';
import imagen2 from './images/imagen2.webp';
import imagen3 from './images/imagen3.webp';
import imagen4 from './images/imagen4.jpg';
import imagen5 from './images/imagen5.webp';
import imagen6 from './images/imagen6.avif';
import imagen7 from './images/imagen7.jpg';
import imagen8 from './images/imagen8.png';
import imagen9 from './images/imagen9.webp';

// Inicializar los módulos de Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

function App() {
  return (
    <div className="App">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={imagen1} alt="Imagen 1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imagen2} alt="Imagen 2" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imagen3} alt="Imagen 3" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imagen4} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imagen5} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imagen6} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imagen7} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imagen8} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={imagen9} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;