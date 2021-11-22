import './App.css';
import { useSelector } from 'react-redux';
import { PublicRoute } from './components/route/publicRoute';
import { PrivateRoute } from './components/route/privateRoute';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';

function App() {
  const language = useSelector(state => state.lang.language)
  const auth = useSelector(state => state.login.auth)
  let locale;

  switch (language) {
    case 'RUSSIAN': {
      locale = LOCALES.RUSSIAN
      break;
    }
    case 'ENGLISH': {
      locale = LOCALES.ENGLISH
      break;
    }
    case 'FRENCH': {
      locale = LOCALES.FRENCH
      break;
    }
    default: locale = LOCALES.RUSSIAN
  }

  return (auth) ? <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.RUSSIAN}><PrivateRoute /></IntlProvider > : <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.ENGLISH}><PublicRoute /></IntlProvider>

}

export default App;
