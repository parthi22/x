/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading } from "@aws-amplify/ui-react";
export default function PerfomanceOne(props) {
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
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="48px"
          level="6"
          children="01  Completely configurable performance reviews management"
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
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="48px"
          level="6"
          children="02  One dashboard for org-wide reviews with flexible mid-review changes"
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
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="48px"
          level="6"
          children="03  Streamlined review workflows with nudge features for team-mates"
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
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[3]")}
      >
        <Heading
          display="flex"
          width="334px"
          grow="1"
          basis="334px"
          height="48px"
          level="6"
          children="04  Easy data representation for stakeholders with scatter plots"
          {...getOverrideProps(overrides, "Flex.Flex[3].Heading[0]")}
        ></Heading>
      </Flex>
    </Flex>
  );
}
