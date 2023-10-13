import { useTranslation } from 'react-i18next'

import ImageConsultingPackage from '../components/imageConsultingPackage/ImageConsultingPackage'
import { images } from './../helpers/imagesList'

const ImageConsulting = () => {
  const { t } = useTranslation()
  return (
    <main className="section">
      <div className="container container-text">
        <h2 className="title-1">{t('Image_consulting_Title')}</h2>
        <ul className="projects">
          {images.map((image, index) => {
            return (
              <ImageConsultingPackage
                key={index}
                title={t(image.title)}
                img={image.img}
                link={image.link}
              />
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default ImageConsulting
