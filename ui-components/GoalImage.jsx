/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react'
import { getOverrideProps } from '@aws-amplify/ui-react/internal'
import { Flex, Image, Text } from '@aws-amplify/ui-react'
export default function GoalImage(props) {
  const { overrides: overridesProp, ...rest } = props
  const overrides = { ...overridesProp }
  return (
    <Flex
      gap="20px"
      direction="column"
      width="1051px"
      overflow="hidden"
      position="relative"
      padding="30px 30px 30px 30px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, 'Flex')}
    >
      <Image
        width="993px"
        height="567px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(33.00000183284283,33.00000183284283,33.00000183284283,0.20000000298023224)"
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.20000000298023224)"
        borderRadius="11px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, 'Flex.Image[0]')}
      ></Image>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="18px"
        fontWeight="600"
        color="rgba(109.00000110268593,108.00000116229057,111.00000098347664,1)"
        lineHeight="21.09375px"
        textAlign="justify"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="991px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Facilitate top-down strategy and bottom-up execution effectively. Set company objectives and align them with teams and individuals"
        {...getOverrideProps(overrides, 'Flex.Text[0]')}
      ></Text>
    </Flex>
  )
}
