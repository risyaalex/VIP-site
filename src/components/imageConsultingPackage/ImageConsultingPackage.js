import { NavLink } from 'react-router-dom'
import './style.css'

const ImageConsultingPackage = ({ title, img, link }) => {
  return (
    <NavLink to={`/image-consulting/${link}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  )
}

export default ImageConsultingPackage
