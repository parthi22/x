/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react'
import { getOverrideProps } from '@aws-amplify/ui-react/internal'
import { Icon, View } from '@aws-amplify/ui-react'
export default function ArrowLeft(props) {
  const { overrides: overridesProp, ...rest } = props
  const overrides = { ...overridesProp }
  return (
    <View
      width="100px"
      height="100px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, 'View')}
    >
      <View
        position="absolute"
        top="-1%"
        bottom="-1%"
        left="-1%"
        right="-1%"
        border="1px SOLID rgba(33.00000183284283,33.00000183284283,33.00000183284283,0.20000000298023224)"
        borderRadius="7px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, 'View.View[0]')}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="76.81820678710938%"
        bottom="-30.63641357421875%"
        left="66%"
        right="2%"
        transformOrigin="top left"
        transform="rotate(-180deg)"
        {...getOverrideProps(overrides, 'View.View[1]')}
      >
        <Icon
          width="29.0908203125px"
          height="26.181640625px"
          pathData="M0.97304 -1.08116C0.375934 -1.61855 -0.54376 -1.57015 -1.08116 -0.97304C-1.61855 -0.375934 -1.57015 0.54376 -0.97304 1.08116L0.97304 -1.08116ZM28.1179 27.263C28.715 27.8004 29.6347 27.752 30.1721 27.1549C30.7095 26.5578 30.6611 25.6381 30.0639 25.1007L28.1179 27.263ZM-0.97304 1.08116L28.1179 27.263L30.0639 25.1007L0.97304 -1.08116L-0.97304 1.08116Z"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 29.0908203125,
            height: 26.181640625,
          }}
          color="rgba(32.00000189244747,33.00000183284283,36.00000165402889,1)"
          position="absolute"
          top="0%"
          bottom="51.35137424405236%"
          left="4.5440673828125%"
          right="4.546838998794556%"
          {...getOverrideProps(overrides, 'View.View[1].Icon[0]')}
        ></Icon>
        <Icon
          width="32px"
          height="29.0908203125px"
          pathData="M0.481506 26.5552C-0.1156 27.0926 -0.164005 28.0123 0.37339 28.6094C0.910785 29.2065 1.83048 29.2549 2.42759 28.7175L0.481506 26.5552ZM31.5185 2.5357C32.1156 1.99831 32.164 1.07861 31.6266 0.481506C31.0892 -0.1156 30.1695 -0.164005 29.5724 0.37339L31.5185 2.5357ZM2.42759 28.7175L31.5185 2.5357L29.5724 0.37339L0.481506 26.5552L2.42759 28.7175Z"
          viewBox={{ minX: 0, minY: 0, width: 32, height: 29.0908203125 }}
          color="rgba(32.00000189244747,33.00000183284283,36.00000165402889,1)"
          position="absolute"
          top="45.9459658693008%"
          bottom="0.000003544058315353144%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, 'View.View[1].Icon[1]')}
        ></Icon>
      </View>
    </View>
  )
}
