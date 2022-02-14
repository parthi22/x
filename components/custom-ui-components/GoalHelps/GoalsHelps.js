import React from 'react'
import classes from './Goals.module.css'
import { useState, useRef } from 'react'
import {
  BtnRequestdemo12,
  ArrowLeft,
  ArrowRight,
} from '../../ui-components'

export default function GoalsHelps() {
  let [step, setStep] = useState(1)
  let [Data, setData] = useState([
    { text: 'Org-wide goals alignment', id: 1, isClicked: true },
    { text: 'Reducing time spent in meetings', id: 2, isClicked: false },
    { text: 'Cross-functional collaboration', id: 3, isClicked: false },
    { text: 'Transparency and accountability', id: 4, isClicked: false },
    { text: 'Team progress dashboard', id: 5, isClicked: false },
    { text: 'Review rigor', id: 6, isClicked: false },
    { text: 'Resource planning', id: 7, isClicked: false },
  ])
  let div = useRef()
  let [currentTimeId, setCurrentTimeId] = useState()

  let scrollBoxData = [
    {
      link:
        'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232309/10xgoals-screenshot-s1-v2-768x454.png',
      text:
        'Run company-wide weekly OKR reviews using the User Board. Get a bird’s eye-view of all assigned OKRs, with detailed views into their average progress',
    },
    {
      link:
        'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232309/10xgoals-screenshot-s1-v2-768x454.png',
      text:
        'Run company-wide weekly OKR reviews using the User Board. Get a bird’s eye-view of all assigned OKRs, with detailed views into their average progress',
    },
    {
      link:
        'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232309/10xgoals-screenshot-s1-v2-768x454.png',
      text:
        'Run company-wide weekly OKR reviews using the User Board. Get a bird’s eye-view of all assigned OKRs, with detailed views into their average progress',
    },
    {
      link:
        'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232309/10xgoals-screenshot-s1-v2-768x454.png',
      text:
        'Run company-wide weekly OKR reviews using the User Board. Get a bird’s eye-view of all assigned OKRs, with detailed views into their average progress',
    },
    {
      link:
        'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232309/10xgoals-screenshot-s1-v2-768x454.png',
      text:
        'Run company-wide weekly OKR reviews using the User Board. Get a bird’s eye-view of all assigned OKRs, with detailed views into their average progress',
    },
    {
      link:
        'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232309/10xgoals-screenshot-s1-v2-768x454.png',
      text:
        'Run company-wide weekly OKR reviews using the User Board. Get a bird’s eye-view of all assigned OKRs, with detailed views into their average progress',
    },
    {
      link:
        'https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/06/21232309/10xgoals-screenshot-s1-v2-768x454.png',
      text:
        'Run company-wide weekly OKR reviews using the User Board. Get a bird’s eye-view of all assigned OKRs, with detailed views into their average progress',
    },
  ]

  let [currentChange, setCurrentChange] = useState(false)

  let changeColor = (id) => {
    let currentDataIndex
    let currentClickedData = Data.find((data, i) => {
      if (data.id === id) {
        currentDataIndex = i
        return data.id === id
      }
    })
    let newData = [...Data]
    let prvClickedIndex
    let prvClicked = Data.find((data, i) => {
      if (data.isClicked === true) {
        prvClickedIndex = i
        return data.isClicked === true
      }
    })
    if (prvClicked) {
      prvClicked.isClicked = false
      newData[prvClickedIndex] = prvClicked
    }

    currentClickedData.isClicked = true
    newData[currentDataIndex] = currentClickedData
    setStep(currentClickedData.id)
    setData(newData)
  }

  let handleClick = (id) => {
    if (currentTimeId) {
      console.log('clearing...')
      clearTimeout(currentTimeId)
    }
    changeColor(id)
    let currentWidth = div.current.offsetWidth
    setCurrentChange(true)
    div.current.scrollTo({
      top: 0,
      left: currentWidth * (id - 1),
      behavior: 'smooth',
    })
    let myTime = setTimeout(() => {
      setCurrentChange(false)
      setCurrentTimeId(false)
    }, 1000)
    setCurrentTimeId(myTime)
  }

  let handleChange = (pos) => {
    if (pos === 'left') {
      if (step === 1) {
        handleClick(7)
      } else {
        handleClick(step - 1)
      }
    }
    if (pos === 'right') {
      if (step === 7) {
        handleClick(1)
      } else {
        handleClick(step + 1)
      }
    }
  }

  let handleScroll = () => {
    let currentScroll = div.current.scrollLeft
    currentScroll = currentScroll
    let currentDivWidth = div.current.offsetWidth
    let difference = currentScroll / currentDivWidth
    if (difference < 1 && step !== 1 && !currentChange) changeColor(1)
    if (difference > 1 && difference < 2 && step !== 2 && !currentChange)
      changeColor(2)
    if (difference > 2 && difference < 3 && step !== 3 && !currentChange)
      changeColor(3)
    if (difference > 3 && difference < 4 && step !== 4 && !currentChange)
      changeColor(4)
    if (difference > 4 && difference < 5 && step !== 5 && !currentChange)
      changeColor(5)
    if (difference > 5 && difference < 5.9 && step !== 6 && !currentChange)
      changeColor(6)
    if (difference > 5.9 && difference < 7 && step !== 7 && !currentChange)
      changeColor(7)
  }

  return (
    <section>
      <div className={classes.helps}>
        <div className={classes.GoalsHelps}>
          {Data.map((data) => (
            <p
              className={`${data.isClicked ? classes.clicked : null}`}
              onClick={() => handleClick(data.id)}
              key={data.id}
            >
              <span>{0 + data.id}</span>
              {data.text}
            </p>
          ))}
        </div>

        <div className={classes.imgdiv}>
          <div
            className={`${classes.scrool_img}`}
            ref={div}
            onScroll={handleScroll}
          >
            {scrollBoxData.map((data, i) => (
              <div key={i} className={classes.slide}>
                <img src={data.link} />
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.ArrowDiv}>
        <BtnRequestdemo12 />
        <div className={classes.arrow}>
          {/* <ArrowLeft/>
        <ArrowRight/> */}
          {/* temporly I used this btn In future i will change this */}
          <button onClick={() => handleChange('left')}>Left</button>
          <button onClick={() => handleChange('right')}>Right</button>
        </div>
      </div>
    </section>
  )
}
