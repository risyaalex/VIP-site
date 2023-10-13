import { useTranslation } from 'react-i18next'

import { useParams } from 'react-router-dom'
import { images } from './../helpers/imagesList'

const ImageConsultingPackage = () => {
  const { t } = useTranslation()
  const { link } = useParams()
  const selectedImage = images.find((image) => image.link === link)

  return (
    <main className="section">
      <div className="container container-text">
        <div className="project-details">
          <h1 className="title-1">{t(selectedImage.title)}</h1>

          <img
            src={selectedImage.imgBig}
            alt={t(selectedImage.title)}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{t(selectedImage.text)}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ImageConsultingPackage
