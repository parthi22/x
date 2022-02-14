/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react'
import { getOverrideProps } from '@aws-amplify/ui-react/internal'
import { Flex, Text } from '@aws-amplify/ui-react'
export default function BtnRequestdemo12(props) {
  const { overrides: overridesProp, ...rest } = props
  const overrides = { ...overridesProp }
  return (
    <Flex
      gap="10px"
      direction="column"
      width="142px"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
      {...rest}
      {...getOverrideProps(overrides, 'Flex')}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="20px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.49px"
        width="122px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Get A Demo"
        {...getOverrideProps(overrides, 'Flex.Text[0]')}
      ></Text>
    </Flex>
  )
}
