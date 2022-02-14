import React from 'react'
import { RequestDemo, AdvantagesComponent } from '../../components/ui-components'
import CompanyScrool from '../../components/custom-ui-components/CompanyScrool'
import { GoalsHelps } from '../../components/custom-ui-components/GoalHelps/GoalsHelps'
import classes from '../../styles/home.module.css'

const DesktopView = () => {
  return (
    <div className={classes.goals}>
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
    </div>
  )
}

export default DesktopView
