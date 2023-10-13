import image1 from './../img/slider/04.jpg'

import image2 from './../img/slider/07.jpg'

import image3 from './../img/slider/06.jpg'

const images = [
  {
    title: 'image1_title',
    img: image1,
    imgBig: image1,
    text: 'image1_text',
    link: 'improve_your_professional_image',
  },
  {
    title: 'image2_title',
    img: image2,
    imgBig: image2,
    text: 'image2_text',
    link: 'optimize_your_image_in_the_company',
  },
  {
    title: 'image3_title',
    img: image3,
    imgBig: image3,
    text: 'image3_text',
    link: 'enhance_the_company_brand',
  },
]

export const linkToTitleMap = images.reduce((acc, image) => {
  acc[image.link] = image.title
  return acc
}, {})

export { images }
