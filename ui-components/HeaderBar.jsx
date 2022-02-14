/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import BtnRequestdemo12 from "./BtnRequestdemo12";
export default function HeaderBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1440px"
      justifyContent="space-between"
      alignItems="center"
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
        width="196px"
        height="76px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Image
          width="132px"
          height="47px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/07/21232027/xto10x-logo-v2.png"
          {...getOverrideProps(overrides, "Flex.Flex[0].Image[0]")}
        ></Image>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        shrink="0"
        height="88px"
        overflow="hidden"
        position="relative"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <BtnRequestdemo12
          display="flex"
          gap="10px"
          direction="column"
          width="142px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
          {...getOverrideProps(overrides, "Flex.Flex[1].BtnRequestdemo12[0]")}
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
            {...getOverrideProps(
              overrides,
              "Flex.Flex[1].BtnRequestdemo12[0].Text[0]"
            )}
          ></Text>
        </BtnRequestdemo12>
      </Flex>
    </Flex>
  );
}
