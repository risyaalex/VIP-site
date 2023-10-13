import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'
import img1 from './../../img/slider/01.jpg'
import img2 from './../../img/slider/02.jpg'
import img3 from './../../img/slider/03.jpg'
import leftArrow from './icons/left.svg'
import rightArrow from './icons/right.svg'

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    setCurrentSlide(0)
    sliderRef.current.slickGoTo(0)
  }, [])

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props
    return (
      <div className={className} onClick={onClick}>
        <img
          src={leftArrow}
          alt="Left Arrow"
          style={{ height: '3rem', color: 'grey' }}
        />
      </div>
    )
  }

  const CustomNextArrow = (props) => {
    const { className, onClick } = props
    return (
      <div className={className} onClick={onClick}>
        <img
          src={rightArrow}
          alt="Right Arrow"
          style={{ height: '3rem', color: 'grey' }}
        />
      </div>
    )
  }

  const settings = {
    initialSlide: 0,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex)
    },
    afterChange: (current) => {
      setCurrentSlide(current)
    },
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <Slider {...settings} ref={sliderRef}>
          <div className="slideStyleDiv">
            <img
              src={img1}
              alt="VIP"
              className={`slideStyle ${currentSlide === 0 ? 'zoomed' : ''}`}
            />
          </div>
          <div className="slideStyleDiv">
            <img
              src={img2}
              alt="VIP"
              className={`slideStyle ${currentSlide === 1 ? 'zoomed' : ''}`}
            />
          </div>
          <div className="slideStyleDiv">
            <img
              src={img3}
              alt="VIP"
              className={`slideStyle ${currentSlide === 2 ? 'zoomed' : ''}`}
            />
          </div>
        </Slider>
        {/* <h1 className="header__title">
          <strong>Votre Image Pro</strong>
        </h1>
        <div className="header__text">
          <p>text text text</p>
        </div>
        <a href="#!" className="btn">
          Button
        </a> */}
      </div>
    </header>
  )
}

export default Header
