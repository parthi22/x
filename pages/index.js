import { RequestDemo1, AdvantagesComponent } from '../ui-components/index'
import CompanyScrool from '../custom-ui-components/CompanyScrool'
import GoalsHelps from '../custom-ui-components/GoalHelps/GoalsHelps'
import classes from '../styles/home.module.css'

export default function Home() {
  return (
    <main>
      <div className={classes.goals}>
        <div>
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
        <div>
          <RequestDemo1 />
        </div>
      </div>
      <CompanyScrool />
      <GoalsHelps />
    </main>
  )
}
