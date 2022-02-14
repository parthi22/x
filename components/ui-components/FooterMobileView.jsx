/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Icon,
  IconLinkedCamera,
  IconYoutubeSearchedFor,
  Image,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function FooterMobileView(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(246.0000005364418,246.0000005364418,247.00000047683716,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="10px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        width="152px"
        overflow="hidden"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(246.0000005364418,246.0000005364418,247.00000047683716,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Image
          width="132px"
          height="47px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Image[0]")}
        ></Image>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        width="279px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Text
          fontFamily="IBM Plex Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.010000000000000009px"
          width="279px"
          height="24px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Copyright 2022 - xto10x Technologies"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        width="174px"
        overflow="hidden"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(246.0000005364418,246.0000005364418,247.00000047683716,1)"
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="154px"
          height="40px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0]")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="40px"
            height="40px"
            position="absolute"
            top="0px"
            left="57px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].View[0]")}
          >
            <Icon
              width="40px"
              height="40px"
              pathData="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
              viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
              color="rgba(200.00000327825546,201.00000321865082,208.0000028014183,1)"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].Flex[0].View[0].Icon[0]"
              )}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="21px"
              height="16px"
              position="absolute"
              top="12px"
              left="9px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].Flex[0].View[0].View[0]"
              )}
            >
              <Icon
                width="21px"
                height="16px"
                pathData="M18.8414 3.98749C18.8547 4.16253 18.8547 4.33756 18.8547 4.5125C18.8547 9.85003 14.5242 16 6.60915 16C4.17073 16 1.90544 15.3375 0 14.1876C0.34646 14.225 0.679553 14.2375 1.03934 14.2375C3.05142 14.2375 4.90352 13.6 6.38267 12.5125C4.49045 12.4751 2.90484 11.3126 2.35852 9.71253C2.62501 9.74996 2.8915 9.77498 3.17133 9.77498C3.55773 9.77498 3.94424 9.72494 4.30397 9.63757C2.33185 9.26248 0.852762 7.63752 0.852762 5.675L0.852762 5.62506C1.4257 5.92499 2.09203 6.11254 2.79816 6.13746C1.63895 5.4125 0.879421 4.17504 0.879421 2.77495C0.879421 2.02497 1.09253 1.33754 1.4657 0.737472C3.5844 3.18747 6.76907 4.78751 10.3401 4.96245C10.2735 4.66251 10.2335 4.35007 10.2335 4.03753C10.2335 1.8125 12.1523 0 14.5374 0C15.7766 0 16.896 0.487478 17.6821 1.27499C18.6548 1.10005 19.5875 0.762491 20.4138 0.300032C20.094 1.23756 19.4144 2.02507 18.5216 2.52496C19.3877 2.43749 20.2272 2.21251 21 1.89997C20.4138 2.69999 19.6809 3.41245 18.8414 3.98749Z"
                viewBox={{ minX: 0, minY: 0, width: 21, height: 16 }}
                color="rgba(247.00000047683716,247.00000047683716,249.00000035762787,1)"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[2].Flex[0].View[0].View[0].Icon[0]"
                )}
              ></Icon>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="40px"
            height="40px"
            position="absolute"
            top="0px"
            left="114px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].View[1]")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="40px"
              height="40px"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].Flex[0].View[1].View[0]"
              )}
            >
              <Icon
                width="40px"
                height="40px"
                pathData="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
                viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
                color="rgba(200.00000327825546,201.00000321865082,208.0000028014183,1)"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[2].Flex[0].View[1].View[0].Icon[0]"
                )}
              ></Icon>
              <IconLinkedCamera
                width="24px"
                height="24px"
                position="absolute"
                top="8px"
                left="8.5px"
                overflow="hidden"
                padding="0px 0px 0px 0px"
                color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                type="linked_camera"
                fontSize="24px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[2].Flex[0].View[1].View[0].IconLinkedCamera[0]"
                )}
              ></IconLinkedCamera>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="40px"
            height="40px"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].View[2]")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="40px"
              height="40px"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].Flex[0].View[2].View[0]"
              )}
            >
              <Icon
                width="40px"
                height="40px"
                pathData="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
                viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
                color="rgba(200.00000327825546,201.00000321865082,208.0000028014183,1)"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[2].Flex[0].View[2].View[0].Icon[0]"
                )}
              ></Icon>
              <IconYoutubeSearchedFor
                width="24px"
                height="24px"
                position="absolute"
                top="8px"
                left="8.5px"
                overflow="hidden"
                padding="0px 0px 0px 0px"
                color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                type="youtube_searched_for"
                fontSize="24px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[2].Flex[0].View[2].View[0].IconYoutubeSearchedFor[0]"
                )}
              ></IconYoutubeSearchedFor>
            </View>
          </View>
        </Flex>
      </Flex>
    </Flex>
  );
}
