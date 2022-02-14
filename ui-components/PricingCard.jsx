/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading, Icon, Text, View } from "@aws-amplify/ui-react";
export default function PricingCard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="column"
      width="549px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="0.5px SOLID rgba(110.00000104308128,193.00000369548798,228.0000016093254,1)"
      boxShadow="4px 4px 4px rgba(0.4313725531101227, 0.7568627595901489, 0.8941176533699036, 0.20000000298023224)"
      borderRadius="10.5px"
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="24px"
        fontWeight="400"
        color="rgba(109.00000110268593,108.00000116229057,111.00000098347664,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.09px"
        width="468px"
        height="35px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Starting at just $6/user"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <Text
        fontFamily="IBM Plex Sans"
        fontSize="24px"
        fontWeight="600"
        color="rgba(109.00000110268593,108.00000116229057,111.00000098347664,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.09px"
        width="468px"
        height="35px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Per Month"
        {...getOverrideProps(overrides, "Flex.Text[1]")}
      ></Text>
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
        <View
          width="18px"
          height="17.34918785095215px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].View[0]")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].View[0].View[0]")}
          >
            <Icon
              width="18px"
              height="17.34912109375px"
              pathData="M18.75 8.34919C18.75 7.93497 18.4142 7.59919 18 7.59919C17.5858 7.59919 17.25 7.93497 17.25 8.34919L18.75 8.34919ZM12.2215 1.54554C12.606 1.69938 13.0425 1.51232 13.1964 1.12774C13.3502 0.743149 13.1631 0.30667 12.7785 0.152832L12.2215 1.54554ZM17.25 8.34919C17.25 12.903 13.5538 16.5992 9 16.5992L9 18.0992C14.3822 18.0992 18.75 13.7314 18.75 8.34919L17.25 8.34919ZM9 16.5992C4.44621 16.5992 0.75 12.903 0.75 8.34919L-0.75 8.34919C-0.75 13.7314 3.61779 18.0992 9 18.0992L9 16.5992ZM0.75 8.34919C0.75 6.10082 1.88908 3.69937 3.88545 2.21269C5.84941 0.750154 8.69656 0.135553 12.2215 1.54554L12.7785 0.152832C8.80344 -1.43724 5.40059 -0.785845 2.98955 1.00963C0.61092 2.78097 -0.75 5.62956 -0.75 8.34919L0.75 8.34919Z"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 17.34912109375 }}
              color="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].View[0].View[0].Icon[0]"
              )}
            ></Icon>
            <Icon
              width="11px"
              height="8px"
              pathData="M0.480138 4.92383C0.161931 4.65866 -0.310993 4.70165 -0.576166 5.01986C-0.841339 5.33807 -0.798346 5.81099 -0.480138 6.07617L0.480138 4.92383ZM3 8L2.51986 8.57617C2.81786 8.8245 3.25604 8.80462 3.53033 8.53033L3 8ZM11.5303 0.53033C11.8232 0.237437 11.8232 -0.237437 11.5303 -0.53033C11.2374 -0.823223 10.7626 -0.823223 10.4697 -0.53033L11.5303 0.53033ZM-0.480138 6.07617L2.51986 8.57617L3.48014 7.42383L0.480138 4.92383L-0.480138 6.07617ZM3.53033 8.53033L11.5303 0.53033L10.4697 -0.53033L2.46967 7.46967L3.53033 8.53033Z"
              viewBox={{ minX: 0, minY: 0, width: 11, height: 8 }}
              color="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
              position="absolute"
              top="10.658257375710631%"
              bottom="43.230074062461284%"
              left="33.33333333333333%"
              right="5.555555555555555%"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].View[0].View[0].Icon[1]"
              )}
            ></Icon>
          </View>
        </View>
        <Heading
          display="flex"
          width="420px"
          grow="1"
          basis="420px"
          height="24px"
          level="6"
          children="Get a bird’s-eye view of your org’s goal"
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
        <View
          width="18px"
          height="17.34918785095215px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[1].View[0]")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[1].View[0].View[0]")}
          >
            <Icon
              width="18px"
              height="17.34912109375px"
              pathData="M18.75 8.34919C18.75 7.93497 18.4142 7.59919 18 7.59919C17.5858 7.59919 17.25 7.93497 17.25 8.34919L18.75 8.34919ZM12.2215 1.54554C12.606 1.69938 13.0425 1.51232 13.1964 1.12774C13.3502 0.743149 13.1631 0.30667 12.7785 0.152832L12.2215 1.54554ZM17.25 8.34919C17.25 12.903 13.5538 16.5992 9 16.5992L9 18.0992C14.3822 18.0992 18.75 13.7314 18.75 8.34919L17.25 8.34919ZM9 16.5992C4.44621 16.5992 0.75 12.903 0.75 8.34919L-0.75 8.34919C-0.75 13.7314 3.61779 18.0992 9 18.0992L9 16.5992ZM0.75 8.34919C0.75 6.10082 1.88908 3.69937 3.88545 2.21269C5.84941 0.750154 8.69656 0.135553 12.2215 1.54554L12.7785 0.152832C8.80344 -1.43724 5.40059 -0.785845 2.98955 1.00963C0.61092 2.78097 -0.75 5.62956 -0.75 8.34919L0.75 8.34919Z"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 17.34912109375 }}
              color="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].View[0].View[0].Icon[0]"
              )}
            ></Icon>
            <Icon
              width="11px"
              height="8px"
              pathData="M0.480138 4.92383C0.161931 4.65866 -0.310993 4.70165 -0.576166 5.01986C-0.841339 5.33807 -0.798346 5.81099 -0.480138 6.07617L0.480138 4.92383ZM3 8L2.51986 8.57617C2.81786 8.8245 3.25604 8.80462 3.53033 8.53033L3 8ZM11.5303 0.53033C11.8232 0.237437 11.8232 -0.237437 11.5303 -0.53033C11.2374 -0.823223 10.7626 -0.823223 10.4697 -0.53033L11.5303 0.53033ZM-0.480138 6.07617L2.51986 8.57617L3.48014 7.42383L0.480138 4.92383L-0.480138 6.07617ZM3.53033 8.53033L11.5303 0.53033L10.4697 -0.53033L2.46967 7.46967L3.53033 8.53033Z"
              viewBox={{ minX: 0, minY: 0, width: 11, height: 8 }}
              color="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
              position="absolute"
              top="10.658257375710631%"
              bottom="43.230074062461284%"
              left="33.33333333333333%"
              right="5.555555555555555%"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].View[0].View[0].Icon[1]"
              )}
            ></Icon>
          </View>
        </View>
        <Heading
          display="flex"
          width="420px"
          grow="1"
          basis="420px"
          height="24px"
          level="6"
          children="Reduce time spent in review meetings by 60%"
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
        <View
          width="18px"
          height="17.34918785095215px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[2].View[0]")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[2].View[0].View[0]")}
          >
            <Icon
              width="18px"
              height="17.34912109375px"
              pathData="M18.75 8.34919C18.75 7.93497 18.4142 7.59919 18 7.59919C17.5858 7.59919 17.25 7.93497 17.25 8.34919L18.75 8.34919ZM12.2215 1.54554C12.606 1.69938 13.0425 1.51232 13.1964 1.12774C13.3502 0.743149 13.1631 0.30667 12.7785 0.152832L12.2215 1.54554ZM17.25 8.34919C17.25 12.903 13.5538 16.5992 9 16.5992L9 18.0992C14.3822 18.0992 18.75 13.7314 18.75 8.34919L17.25 8.34919ZM9 16.5992C4.44621 16.5992 0.75 12.903 0.75 8.34919L-0.75 8.34919C-0.75 13.7314 3.61779 18.0992 9 18.0992L9 16.5992ZM0.75 8.34919C0.75 6.10082 1.88908 3.69937 3.88545 2.21269C5.84941 0.750154 8.69656 0.135553 12.2215 1.54554L12.7785 0.152832C8.80344 -1.43724 5.40059 -0.785845 2.98955 1.00963C0.61092 2.78097 -0.75 5.62956 -0.75 8.34919L0.75 8.34919Z"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 17.34912109375 }}
              color="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].View[0].View[0].Icon[0]"
              )}
            ></Icon>
            <Icon
              width="11px"
              height="8px"
              pathData="M0.480138 4.92383C0.161931 4.65866 -0.310993 4.70165 -0.576166 5.01986C-0.841339 5.33807 -0.798346 5.81099 -0.480138 6.07617L0.480138 4.92383ZM3 8L2.51986 8.57617C2.81786 8.8245 3.25604 8.80462 3.53033 8.53033L3 8ZM11.5303 0.53033C11.8232 0.237437 11.8232 -0.237437 11.5303 -0.53033C11.2374 -0.823223 10.7626 -0.823223 10.4697 -0.53033L11.5303 0.53033ZM-0.480138 6.07617L2.51986 8.57617L3.48014 7.42383L0.480138 4.92383L-0.480138 6.07617ZM3.53033 8.53033L11.5303 0.53033L10.4697 -0.53033L2.46967 7.46967L3.53033 8.53033Z"
              viewBox={{ minX: 0, minY: 0, width: 11, height: 8 }}
              color="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
              position="absolute"
              top="10.658257375710631%"
              bottom="43.230074062461284%"
              left="33.33333333333333%"
              right="5.555555555555555%"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].View[0].View[0].Icon[1]"
              )}
            ></Icon>
          </View>
        </View>
        <Heading
          display="flex"
          width="420px"
          grow="1"
          basis="420px"
          height="24px"
          level="6"
          children="Expert-led framework to drive your strategy to execution"
          {...getOverrideProps(overrides, "Flex.Flex[2].Heading[0]")}
        ></Heading>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        borderRadius="6px"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
        {...getOverrideProps(overrides, "Flex.Flex[3]")}
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
          width="448px"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Get Started"
          {...getOverrideProps(overrides, "Flex.Flex[3].Text[0]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
