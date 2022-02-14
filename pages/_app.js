import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider } from '@aws-amplify/ui-react'

function Xto10X({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      {/* <HeaderBar /> */}
      <Component {...pageProps} />
      {/* <Footer width="100%" /> */}
    </AmplifyProvider>
  )
}

export default Xto10X
