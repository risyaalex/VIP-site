import './styles/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import i18n from './i18n'
import Cookies from 'js-cookie'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home'
import ImageConsulting from './pages/ImageConsulting'
import ImageConsultingPackage from './pages/ImageConsultingPackage'
import WorkshopsAndConferences from './pages/WorkshopsAndConferences'
import GoodToKnow from './pages/GoodToKnow'
import CustomerReviews from './pages/CustomerReviews'
import Contacts from './pages/Contacts'

import ScrollToTop from './utils/scrollToTop'

function App() {
  useEffect(() => {
    const savedLang = Cookies.get('userLang')
    if (savedLang) {
      i18n.changeLanguage(savedLang)
    }
  }, [])

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang)
    Cookies.set('userLang', newLang, { expires: 7 })
  }

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar changeLanguage={changeLanguage} />
        <Breadcrumbs />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image-consulting" element={<ImageConsulting />} />
          <Route
            path="/image-consulting/:link"
            element={<ImageConsultingPackage />}
          />
          <Route
            path="/workshops-and-conferences"
            element={<WorkshopsAndConferences />}
          />
          <Route path="/good-to-know" element={<GoodToKnow />} />
          <Route path="/customer-reviews" element={<CustomerReviews />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
