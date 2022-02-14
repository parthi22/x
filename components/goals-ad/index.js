import React from 'react'
import { Media } from '../../utils/screenLayout'
import Layout from '../common/Layout'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

const GoalsAdView = (props) => {
  const { head } = props
  return (
    <Layout head={head}>
      <Media greaterThan="xs">
        <DesktopView />
      </Media>
      <Media at="xs">
        <MobileView />
      </Media>
    </Layout>
  )
}

GoalsAdView.defaultProps = {
  head: {
    title: '10xGoals - Implement OKRs successfully - xto10x',
    description: 'Description for the page',
    keywords: 'OKR, xto10x',
    metatags: () => <></>,
  },
}

export default GoalsAdView
