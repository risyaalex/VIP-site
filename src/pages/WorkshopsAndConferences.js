import { useTranslation } from 'react-i18next'

const WorkshopsAndConferences = () => {
  const { t } = useTranslation()
  return (
    <main className="section">
      <div className="container container-text">
        <h1 className="title-1">{t('Workshops_And_Conferences_Title')}</h1>
        
        <p>{t('Workshops_And_Conferences_Text')}</p>
      </div>
    </main>
  )
}

export default WorkshopsAndConferences
