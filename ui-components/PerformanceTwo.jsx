/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react'
import { getOverrideProps } from '@aws-amplify/ui-react/internal'
import { Flex, Heading } from '@aws-amplify/ui-react'
export default function PerformanceTwo(props) {
  const { overrides: overridesProp, ...rest } = props
  const overrides = { ...overridesProp }
  return (
    <Flex
      gap="10px"
      direction="column"
      width="374px"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, 'Flex')}
    >
      <Flex
        gap="10px"
        direction="row"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="0px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, 'Flex.Flex[0]')}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="48px"
          level="6"
          children="01  Dedicated recognition feed for your organisation"
          {...getOverrideProps(overrides, 'Flex.Flex[0].Heading[0]')}
        ></Heading>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="0px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, 'Flex.Flex[1]')}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="24px"
          level="6"
          children="02  Rewards catalog to gamify the process"
          {...getOverrideProps(overrides, 'Flex.Flex[1].Heading[0]')}
        ></Heading>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="0px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, 'Flex.Flex[2]')}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="48px"
          level="6"
          children="03  Points tracker for easy rewards/transactions view"
          {...getOverrideProps(overrides, 'Flex.Flex[2].Heading[0]')}
        ></Heading>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="0px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, 'Flex.Flex[3]')}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="48px"
          level="6"
          children="04  Recognition timeline reports with easy exports"
          {...getOverrideProps(overrides, 'Flex.Flex[3].Heading[0]')}
        ></Heading>
      </Flex>
    </Flex>
  )
}
