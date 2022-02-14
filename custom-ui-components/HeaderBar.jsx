import React from 'react'
import classes from './HeaderBar.module.css'
import { useState } from 'react'

export default function HeaderBar() {
  const [showNav, setShowNav] = useState(false)
  const [hamBurgerOpen, setHamBurgerOpen] = useState(false)

  let changeBackground = () => {
    if (window.scrollY >= 100) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeBackground)
  }

  let boxShadow = showNav ? 'rgba(108, 109, 111, 0.1) 0px 10px 30px 0px' : null

  let transform
  if (typeof window !== 'undefined' && window.screen.width > 600) {
    transform = showNav ? 'translateY(0)' : 'translateY(-100px)'
  } else {
    transform = 'translateY(0)'
  }

  let hamBurgerBtnHandler = () => {
    setHamBurgerOpen((prv) => !prv)
  }

  let hamBurgerBtnCls = hamBurgerOpen
    ? `${classes.menu_btn} ${classes.open} ${classes.para}`
    : `${classes.menu_btn} ${classes.para}`
  let requestDemoCls = hamBurgerOpen
    ? `${classes.BtnDiv}`
    : `${classes.BtnDiv} ${classes.hamBurger}`
  return (
    <nav className={classes.nav} style={{ boxShadow: boxShadow }}>
      <div className={classes.HeaderBar}>
        <div className={classes.ImgDiv}>
          <img src="https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/07/21232027/xto10x-logo-v2.png" />
          <div className={hamBurgerBtnCls} onClick={hamBurgerBtnHandler}>
            <div className={classes.menu_btn__burger}></div>
          </div>
        </div>
        <div className={requestDemoCls}>
          <button style={{ transform }}>Request Demo</button>
        </div>
      </div>
    </nav>
  )
}
