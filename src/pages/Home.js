import { useTranslation } from 'react-i18next'
import Header from './../components/header/Header'

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <main className="section">
        <div className="container container-text">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">{t('Text1_Title')}</h2>
              <p>{t('Text1_Content')}</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">{t('Text2_Title')}</h2>
              <p>{t('Text2_Content')}</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
