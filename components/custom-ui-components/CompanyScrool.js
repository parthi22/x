import React from 'react'
import classes from './CompanyScrool.module.css'

export default function CompanyScrool() {
  let imgs = [
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/07/21231955/client-logo-zoomcar-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/07/21231955/client-logo-zenyum-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/07/21231954/client-logo-visenze-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232412/client-logo-verloop-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232412/client-logo-vedantu-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232411/client-logo-turtlemint-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232411/client-logo-supr-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/07/21232041/client-logo-scripbox-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232410/client-logo-rupeek-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232409/client-logo-rebel-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/07/21231955/client-logo-zoomcar-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/07/21231955/client-logo-zenyum-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/07/21231954/client-logo-visenze-v2.png',
    'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232412/client-logo-verloop-v2.png',
  ]

  return (
    <div className={classes.section3}>
      <div className={classes.heading}>
        <h2>You’ll be in good company</h2>
        <h3>
          Trusted by <span>5,000+ users</span>
        </h3>
      </div>
      <div className={classes.scroolDiv}>
        {imgs.map((img, i) => (
          <div key={i}>
            <img src={img} />
          </div>
        ))}
      </div>
    </div>
  )
}
