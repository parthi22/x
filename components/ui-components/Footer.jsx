/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1440px"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 20px 10px 20px"
      backgroundColor="rgba(246.0000005364418,246.0000005364418,247.00000047683716,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="10px"
        direction="column"
        width="460px"
        height="38px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="460px"
        overflow="hidden"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Image
          width="106px"
          height="38px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Image[0]")}
        ></Image>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        height="55px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="460px"
        alignSelf="stretch"
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
        gap="40px"
        direction="row"
        height="55px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="460px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(246.0000005364418,246.0000005364418,247.00000047683716,1)"
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="35px"
          height="35px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0]")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="35px"
            height="35px"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].View[0]")}
          >
            <Icon
              width="35px"
              height="35px"
              pathData="M35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5Z"
              viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
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
              width="20.125px"
              height="14.087499618530273px"
              position="absolute"
              top="10.581298828125px"
              left="7.5px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].Flex[0].View[0].View[0]"
              )}
            >
              <Icon
                width="20.125px"
                height="14.08740234375px"
                pathData="M17.9177 0.421976C18.7942 0.649194 19.4758 1.33085 19.703 2.20726C20.125 3.79778 20.125 7.04375 20.125 7.04375C20.125 7.04375 20.125 10.3222 19.703 11.8802C19.4758 12.7567 18.7942 13.4383 17.9177 13.6655C16.3597 14.0875 10.0625 14.0875 10.0625 14.0875C10.0625 14.0875 3.76532 14.0875 2.20726 13.6655C1.33085 13.4383 0.649194 12.7567 0.421976 11.8802C0 10.3222 0 7.04375 0 7.04375C0 7.04375 0 3.79778 0.421976 2.20726C0.649194 1.33085 1.33085 0.649194 2.20726 0.421976C3.76532 0 10.0625 0 10.0625 0C10.0625 0 16.3597 0 17.9177 0.421976ZM13.2758 7.04384L8.0498 4.02509L8.0498 10.0626L13.2758 7.04384Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 20.125,
                  height: 14.08740234375,
                }}
                color="rgba(247.00000047683716,247.00000047683716,249.00000035762787,1)"
                position="absolute"
                top="0%"
                bottom="-0.000006769649279364065%"
                left="0%"
                right="0%"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[2].Flex[0].View[0].View[0].Icon[0]"
                )}
              >
                <Icon
                  width="20.125px"
                  height="14.08750057220459px"
                  pathData=""
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 20.125,
                    height: 14.08740234375,
                  }}
                  position="absolute"
                  top="0px"
                  left="0px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[2].Flex[0].View[0].View[0].Icon[0].Icon[0]"
                  )}
                ></Icon>
                <Icon
                  width="5.226008415222168px"
                  height="6.037499904632568px"
                  pathData=""
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 5.22607421875,
                    height: 6.03759765625,
                  }}
                  position="absolute"
                  top="4.02508544921875px"
                  left="8.0498046875px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[2].Flex[0].View[0].View[0].Icon[0].Icon[1]"
                  )}
                ></Icon>
              </Icon>
            </View>
          </View>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="35px"
          height="35px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[1]")}
        >
          <Icon
            width="35px"
            height="35px"
            pathData="M35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5Z"
            viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
            color="rgba(200.00000327825546,201.00000321865082,208.0000028014183,1)"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[1].Icon[0]")}
          ></Icon>
          <Icon
            width="18.375px"
            height="14px"
            pathData="M16.4862 3.48905C16.4979 3.64221 16.4979 3.79537 16.4979 3.94844C16.4979 8.61878 12.7087 14 5.78301 14C3.64939 14 1.66726 13.4203 0 12.4141C0.303152 12.4469 0.594609 12.4578 0.90942 12.4578C2.66999 12.4578 4.29058 11.9 5.58483 10.9484C3.92915 10.9157 2.54173 9.8985 2.06371 8.49846C2.29689 8.53121 2.53007 8.5531 2.77491 8.5531C3.11302 8.5531 3.45121 8.50932 3.76597 8.43287C2.04037 8.10467 0.746167 6.68283 0.746167 4.96562L0.746167 4.92193C1.24748 5.18437 1.83053 5.34847 2.44839 5.37028C1.43408 4.73593 0.769494 3.65316 0.769494 2.42808C0.769494 1.77185 0.955964 1.17034 1.28249 0.645288C3.13635 2.78904 5.92294 4.18907 9.04762 4.34214C8.98928 4.0797 8.95427 3.80631 8.95427 3.53284C8.95427 1.58594 10.6333 0 12.7202 0C13.8046 0 14.784 0.426543 15.4718 1.11561C16.323 0.962545 17.1391 0.66718 17.8621 0.262528C17.5822 1.08286 16.9876 1.77193 16.2064 2.20934C16.9643 2.1328 17.6988 1.93595 18.375 1.66248C17.8621 2.36249 17.2208 2.98589 16.4862 3.48905Z"
            viewBox={{ minX: 0, minY: 0, width: 18.375, height: 14 }}
            color="rgba(247.00000047683716,247.00000047683716,249.00000035762787,1)"
            position="absolute"
            top="10.625px"
            left="8.5px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[1].Icon[1]")}
          ></Icon>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="35px"
          height="35px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[2]")}
        >
          <Icon
            width="35px"
            height="35px"
            pathData="M35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5Z"
            viewBox={{ minX: 0, minY: 0, width: 35, height: 35 }}
            color="rgba(200.00000327825546,201.00000321865082,208.0000028014183,1)"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[2].Icon[0]")}
          ></Icon>
          <Icon
            width="19.24951171875px"
            height="19.25px"
            pathData="M0.000976562 2.4062C0.000976562 1.07798 1.07895 0 2.40717 0C3.73539 0 4.81337 1.07798 4.81337 2.4062C4.81337 3.73442 3.73539 4.81239 2.40717 4.81239C1.07895 4.81239 0.000976562 3.73442 0.000976562 2.4062ZM12.9935 5.77539C9.53821 5.77539 6.73633 8.56016 6.73633 11.993L6.73633 18.2865C6.73633 18.818 7.16837 19.2501 7.69988 19.2501L9.94459 19.2501C10.4761 19.2501 10.9081 18.818 10.9081 18.2865L10.9081 11.993C10.9081 10.7781 11.9604 9.80711 13.2095 9.93223C14.2939 10.0402 15.0778 11.0316 15.0778 12.1213L15.0778 18.2865C15.0778 18.818 15.5099 19.2501 16.0414 19.2501L18.2861 19.2501C18.8176 19.2501 19.2496 18.818 19.2496 18.2865L19.2496 11.993C19.2496 8.56016 16.4477 5.77539 12.9935 5.77539ZM3.84991 6.73724L0.963548 6.73724C0.432046 6.73724 0 7.16822 0 7.69972L0 18.287C0 18.8185 0.432046 19.2495 0.963548 19.2495L3.84991 19.2495C4.38142 19.2495 4.81239 18.8185 4.81239 18.287L4.81239 7.69972C4.81239 7.16822 4.38142 6.73724 3.84991 6.73724Z"
            viewBox={{ minX: 0, minY: 0, width: 19.24951171875, height: 19.25 }}
            color="rgba(247.00000047683716,247.00000047683716,249.00000035762787,1)"
            position="absolute"
            top="22.5%"
            bottom="22.499738420758927%"
            left="22.5%"
            right="22.501089913504465%"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[2].Icon[1]")}
          >
            <Icon
              width="12.51318359375px"
              height="13.474609375px"
              pathData="M6.25718 0C2.80188 0 0 2.78477 0 6.21761L0 12.5112C0 13.0427 0.432046 13.4747 0.963548 13.4747L3.20826 13.4747C3.73976 13.4747 4.17181 13.0427 4.17181 12.5112L4.17181 6.21761C4.17181 5.00275 5.22412 4.03172 6.4732 4.15684C7.5576 4.26485 8.34148 5.2562 8.34148 6.34594L8.34148 12.5112C8.34148 13.0427 8.77353 13.4747 9.30503 13.4747L11.5497 13.4747C12.0812 13.4747 12.5133 13.0427 12.5133 12.5112L12.5133 6.21761C12.5133 2.78477 9.71141 0 6.25718 0Z"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 12.51318359375,
                height: 13.474609375,
              }}
              color="rgba(34.934998601675034,31.11000034958124,31.875,1)"
              position="absolute"
              top="16.50111607142857%"
              bottom="44.99973842075893%"
              left="19.246651785714285%"
              right="45.0010871887207%"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].Flex[2].Icon[1].Icon[0]"
              )}
            ></Icon>
            <Icon
              width="4.8125px"
              height="12.51220703125px"
              pathData="M3.84991 0L0.963548 0C0.432046 0 0 0.430977 0 0.962479L0 11.5497C0 12.0812 0.432046 12.5122 0.963548 12.5122L3.84991 12.5122C4.38142 12.5122 4.81239 12.0812 4.81239 11.5497L4.81239 0.962479C4.81239 0.430977 4.38142 0 3.84991 0"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 4.8125,
                height: 12.51220703125,
              }}
              color="rgba(34.934998601675034,31.11000034958124,31.875,1)"
              position="absolute"
              top="19.249267578125%"
              bottom="45.00152860369001%"
              left="0%"
              right="86.25030653817312%"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].Flex[2].Icon[1].Icon[1]"
              )}
            ></Icon>
            <Icon
              width="4.8125px"
              height="4.8125px"
              pathData="M2.4062 0C1.07798 0 0 1.07798 0 2.4062C0 3.73442 1.07798 4.81239 2.4062 4.81239C3.73442 4.81239 4.81239 3.73442 4.81239 2.4062C4.81239 1.07798 3.73442 0 2.4062 0"
              viewBox={{ minX: 0, minY: 0, width: 4.8125, height: 4.8125 }}
              color="rgba(34.934998601675034,31.11000034958124,31.875,1)"
              position="absolute"
              top="0%"
              bottom="86.25030653817312%"
              left="0.0027901785714285715%"
              right="86.2475163596017%"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[2].Flex[2].Icon[1].Icon[2]"
              )}
            ></Icon>
          </Icon>
        </Flex>
      </Flex>
    </Flex>
  );
}
