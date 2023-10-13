import React, { useState, useEffect } from 'react'
import './style.css'
import toTop from './../../img/icons/toTop.svg'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop}>
          <img src={toTop} alt="Link" />
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton
