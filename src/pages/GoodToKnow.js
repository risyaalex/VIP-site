import { useTranslation } from 'react-i18next'

const GoodToKnow = () => {
  const { t } = useTranslation()
  return (
    <main className="section">
      <div className="container container-text">
        <h1 className="title-1">{t('Good_To_Know_Title')}</h1>
        <p>{t('Good_To_Know_Text')}</p>
      </div>
    </main>
  )
}

export default GoodToKnow
