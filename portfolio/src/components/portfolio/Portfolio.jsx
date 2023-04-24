import React from 'react'
import './portfolio.css'
import { projectsData } from './Projects'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Portfolio = () => {
  return (
    <section className="section porfolio container" id="portfolio">
        <h2 className="section__title">My Portfolio</h2>
        <span className="section__subtitle">Projects I worked on</span>

        <Swiper className="portfolio__container"
        loop
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        >
          {projectsData.map(({id, title, description, link}) => {
            return(
              <SwiperSlide className='portfolio__card' key={id}>
                <h3 className='portfolio__project-title'>{title}</h3>
                <span className='portfolio__project-description'>{description}</span><br />
                <a href={link} className="button--flex project__button" target='_blank'>
                  Demo <i className="uil uil-arrow-right"></i>
                </a>
              </SwiperSlide>
            )
          })}
        </Swiper>
    </section>
  )
}

export default Portfolio
