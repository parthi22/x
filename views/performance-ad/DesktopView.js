import React from 'react'
import { AdvantagesComponent } from '../../components/ui-components'

const DesktopView = () => {
  return (
    <AdvantagesComponent
      width="100%"
      overrides={{
        'Flex.Flex[2].Heading[0]': {
          height: '100%',
        },
        'Flex.Flex[3].Heading[0]': {
          height: '100%',
        },
        'Flex.Flex[4].Heading[0]': {
          height: '100%',
        },
      }}
    />
  )
}

export default DesktopView
