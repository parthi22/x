/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react'
import { getOverrideProps } from '@aws-amplify/ui-react/internal'
import { Flex, IconAdd, Text } from '@aws-amplify/ui-react'
export default function FrequentlyAskedQuestion(props) {
  const { overrides: overridesProp, ...rest } = props
  const overrides = { ...overridesProp }
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1313px"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, 'Flex')}
    >
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="20px"
        fontWeight="400"
        color="rgba(109.00000110268593,108.00000116229057,111.00000098347664,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.05000000000000002px"
        width="1249px"
        grow="1"
        basis="1249px"
        position="relative"
        padding="0px 0px 0px 0px"
        children="What are the differences between OKRs and traditional goal-setting  methodologies like KPIs, Balanced Scorecards, and SMART goals?"
        {...getOverrideProps(overrides, 'Flex.Text[0]')}
      ></Text>
      <IconAdd
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        color="rgba(109.00000110268593,108.00000116229057,111.00000098347664,1)"
        type="add"
        fontSize="24px"
        {...getOverrideProps(overrides, 'Flex.IconAdd[0]')}
      ></IconAdd>
    </Flex>
  )
}
