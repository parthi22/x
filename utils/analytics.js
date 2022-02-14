import ReactGA from 'react-ga'

const initGA = () =>
  ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID)

const logPageView = (page) => {
  ReactGA.set({ page })
  ReactGA.pageview(page)
}

const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}

const logExceptionByError = (error) => {
  if (error.message) {
    ReactGA.exception({ description: error.message, fatal: true })
  }
}

export default {
  initGA,
  logPageView,
  logEvent,
  logException,
  logExceptionByError,
}
