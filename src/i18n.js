import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Menu
        About: 'About',
        Projects: 'Projects',
        Image_consulting: 'Image consulting',
        Workshops_and_conferences: 'Workshops and conferences',
        Good_to_know: 'Good to know',
        Customer_reviews: 'Customer reviews',
        Contacts: 'Contacts',
        // Home
        Text1_Title: 'Text',
        Text1_Content: 'English',
        Text2_Title: 'Text',
        Text2_Content: 'English',
        //Image Consalting
        Image_consulting_Title: 'Image consulting',
        image1_title: 'Improve your professional image',
        image1_text: 'text text text',
        image2_title: `Optimize your image in the company`,
        image2_text: 'text text text',
        image3_title: 'Enhance the company brand',
        image3_text: 'text text text',
        //Workshops And Conferences
        Workshops_And_Conferences_Title: 'Workshops And Conferences',
        Workshops_And_Conferences_Text: 'text text text',
        //Good To Know
        Good_To_Know_Title: 'Good To Know',
        Good_To_Know_Text: 'text text text',
        //Customer Reviews
        Customer_Reviews_Title: 'Customer reviews',
        Customer_Reviews_Text: 'text text text',
        // Contacts
        contacts_title: 'Contacts',
        contacts_address: '1950 Sion, Switzerland',
        contacts_phone: '+41 76 726 28 35',
        contacts_email: 'info@votre-image-pro.ch',
      },
    },
    fr: {
      translation: {
        // Menu
        About: 'À propos',
        Projects: 'Projets',
        Image_consulting: 'Conseil en image',
        Workshops_and_conferences: 'Ateliers et conférences',
        Good_to_know: 'Bon à savoir',
        Customer_reviews: 'Avisclients',
        Contacts: 'Contacts',
        // Home
        Text1_Title: 'Texte',
        Text1_Content: 'Français',
        Text2_Title: 'Texte',
        Text2_Content: 'Français',
        //Image Consalting
        Image_consulting_Title: 'Conseil en image',
        image1_title: 'Améliorer votre image professionnelle',
        image1_text: 'texte texte texte',
        image2_title: `Optimiser votre image dans l'entreprise`,
        image2_text: 'texte texte texte',
        image3_title: 'Valoriser de la marque-entreprise',
        image3_text: 'texte texte texte',
        //Workshops And Conferences
        Workshops_And_Conferences_Title: 'Ateliers et conférences',
        Workshops_And_Conferences_Text: 'texte texte texte',
        //Good To Know
        Good_To_Know_Title: 'Bon à savoir',
        Good_To_Know_Text: 'texte texte texte',
        //Customer Reviews
        Customer_Reviews_Title: 'Avisclients',
        Customer_Reviews_Text: 'texte texte texte',
        // Contacts
        contacts_title: 'Contacts',
        contacts_address: '1950 Sion, Suisse',
        contacts_phone: '+41 76 726 28 35',
        contacts_email: 'info@votre-image-pro.ch',
      },
    },
  },
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
