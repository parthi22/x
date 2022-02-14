import React from 'react'
import PropTypes from 'prop-types'
import { Media, MediaContextProvider } from '../../utils/screenLayout'
import SiteHead from './SiteHead'
import FooterMobileView from '../../ui-components/FooterMobileView'
import HeaderBar from '../../ui-components/HeaderBar'
import Footer from '../../ui-components/Footer'

const Layout = (props) => {
  const { head, children } = props
  return (
    <React.Fragment>
      <MediaContextProvider>
        <HeaderBar width="100%"/>
        <SiteHead {...head} />
        {children}
        <Media greaterThan="xs">
          <Footer width="100%" />
        </Media>
        <Media at="xs">
          <FooterMobileView />
        </Media>
      </MediaContextProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  head: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    metatags: PropTypes.func,
  }).isRequired,
}

export default Layout
