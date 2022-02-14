/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading } from "@aws-amplify/ui-react";
export default function PerformanceThree(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
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
      {...getOverrideProps(overrides, "Flex")}
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
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="48px"
          level="6"
          children="01  Enable 360˚ feedback loops: share org-wide feedback in real-time"
          {...getOverrideProps(overrides, "Flex.Flex[0].Heading[0]")}
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
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="48px"
          level="6"
          children="02  Tag anchors to your feedback: objectives, competencies, or values"
          {...getOverrideProps(overrides, "Flex.Flex[1].Heading[0]")}
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
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="24px"
          level="6"
          children="03  Enhance candor with anonymity feature"
          {...getOverrideProps(overrides, "Flex.Flex[2].Heading[0]")}
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
        {...getOverrideProps(overrides, "Flex.Flex[3]")}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="48px"
          level="6"
          children="04  Utilise feedback templates or create your own"
          {...getOverrideProps(overrides, "Flex.Flex[3].Heading[0]")}
        ></Heading>
      </Flex>
    </Flex>
  );
}
