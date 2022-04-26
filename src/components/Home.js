import React from 'react'
import logo from './assets/logo.svg'
import bigPlate from './assets/pp3.jpg'
import plate from './assets/pp4.jpg'
import cutlery from './assets/cutlery.svg'
import flower from './assets/flower.svg'

const Home = () => {
  return (
    <div className='home'>
      {/* ===========HERO============= */}
      <div className='hero'>
        <div className='hero__left'>
          <img src={logo} alt={logo} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button>Order your meal</button>
        </div>
        <div className='hero__right'>
          <img src={bigPlate} alt={bigPlate} />
        </div>
      </div>
      {/* ===========CUTLERY============= */}
      <div className='mid-hero'>
        <div className='mid--hero'>
          <img src={flower} alt={flower} />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='mid--hero'>
          <img src={cutlery} alt={cutlery} />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>

      {/* ===========OUR MEALS============= */}
      <div className='our-meals'>
        <h2>Our Meals</h2>
        <div className='our-meal'>
          <div className='one-meal'>
            <img src={plate} alt={plate} />
            <div className='meal-details'>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <span>$40.00</span>
              <button>Order Now</button>
            </div>
          </div>
          <div className='one-meal'>
            <img src={plate} alt={plate} />
            <div className='meal-details'>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <span>$40.00</span>
              <button>Order Now</button>
            </div>
          </div>
          <div className='one-meal'>
            <img src={plate} alt={plate} />
            <div className='meal-details'>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <span>$40.00</span>
              <button>Order Now</button>
            </div>
          </div>
          <div className='one-meal'>
            <img src={plate} alt={plate} />
            <div className='meal-details'>
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <span>$40.00</span>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home