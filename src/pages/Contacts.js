import { useTranslation } from 'react-i18next'

const Contacts = () => {
  const { t } = useTranslation()

  return (
    <main className="section">
      <div className="container container-text">
        <h1 className="title-1">{t('contacts_title')}</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <p>{t('contacts_address')}</p>
          </li>
          <li className="content-list__item">
            <p>
              <a href="tel:+79051234567">{t('contacts_phone')}</a>
            </p>
          </li>
          <li className="content-list__item">
            <p>
              <a href="mailto:info@votre-image-pro.ch">{t('contacts_email')}</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Contacts
