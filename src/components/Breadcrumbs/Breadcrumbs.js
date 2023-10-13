import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { linkToTitleMap } from './../../helpers/imagesList'

const Breadcrumbs = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  const pathToKeyMap = {
    'image-consulting': 'Image_consulting',
    'workshops-and-conferences': 'Workshops_and_conferences',
    'good-to-know': 'Good_to_know',
    'customer-reviews': 'Customer_reviews',
    contacts: 'Contacts',
    projects: 'Projects',
    project: 'Image_consulting',
  }

  if (pathnames.length === 0) {
    return null
  }

  return (
    <div className="breadcrumbs">
      <Link to="/">{t('About')}</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`
        const translationKey = pathToKeyMap[value] || value

        const displayValue = linkToTitleMap[value]
          ? t(linkToTitleMap[value])
          : t(translationKey)

        return (
          <span key={to}>
            {' > '}
            <Link to={to}>{displayValue}</Link>
          </span>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
