import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import {  Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       pagination={true}
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       
       
      
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt='avatar1'></img>
            
          </div>
          <h5 className='client__name'>Ernest achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab cumque reprehenderit magni neque veniam, vitae beatae ex temporibus nostrum soluta esse. Facilis quisquam, delectus debitis autem illum sequi beatae.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt='avatar2'></img>
            
          </div>
          <h5 className='client__name'>Ernest achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab cumque reprehenderit magni neque veniam, vitae beatae ex temporibus nostrum soluta esse. Facilis quisquam, delectus debitis autem illum sequi beatae.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt='avatar3'></img>
            
          </div>
          <h5 className='client__name'>Ernest achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab cumque reprehenderit magni neque veniam, vitae beatae ex temporibus nostrum soluta esse. Facilis quisquam, delectus debitis autem illum sequi beatae.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt='avatar4'></img>
            
          </div>
          <h5 className='client__name'>Ernest achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab cumque reprehenderit magni neque veniam, vitae beatae ex temporibus nostrum soluta esse. Facilis quisquam, delectus debitis autem illum sequi beatae.
            </small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonials