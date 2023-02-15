import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG1} alt="Project1"></img>
            </div>
                <h3>This is a portfolio item title</h3>
                <a href='https://github.com' className='btn' target='_blank'>Git Hub</a>
                <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG2} alt="Project2"></img>
            </div>
                <h3>This is a portfolio item title</h3>
                <a href='https://github.com' className='btn' target='_blank'>Git Hub</a>
                <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG3} alt="Project3"></img>
            </div>
                <h3>This is a portfolio item title</h3>
                <a href='https://github.com' className='btn' target='_blank'>Git Hub</a>
                <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG4} alt="Project4"></img>
            </div>
                <h3>This is a portfolio item title</h3>
                <a href='https://github.com' className='btn' target='_blank'>Git Hub</a>
                <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG5} alt="Project5"></img>
            </div>
                <h3>This is a portfolio item title</h3>
                <a href='https://github.com' className='btn' target='_blank'>Git Hub</a>
                <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={IMG6} alt="Project6"></img>
            </div>
                <h3>This is a portfolio item title</h3>
                <a href='https://github.com' className='btn' target='_blank'>Git Hub</a>
                <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
      </div>
    </section>
  )
}

export default Portfolio