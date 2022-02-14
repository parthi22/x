import React from 'react'
import { createMedia } from '@artsy/fresnel'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
})

const Goals = () => {
  return (
    <MediaContextProvider>
      <div>Hello</div>
      <Media greaterThanOrEqual="md">
        <div>desktop</div>
      </Media>
      <Media lessThan="md">
        <div>Mobile</div>
      </Media>
    </MediaContextProvider>
  )
}

export default Goals
