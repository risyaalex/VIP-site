import { useTranslation } from 'react-i18next'

const CustomerReviews = () => {
  const { t } = useTranslation()
  return (
    <main className="section">
      <div className="container container-text">
        <h1 className="title-1">{t('Customer_Reviews_Title')}</h1>
        <p>{t('Customer_Reviews_Text')}</p>
      </div>
    </main>
  )
}

export default CustomerReviews
