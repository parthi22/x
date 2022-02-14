/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Heading,
  IconCheck,
  PasswordField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function RequestDemo1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="40px"
      direction="column"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(223.125,223.125,223.125,1)"
      borderRadius="8px"
      padding="29px 29px 29px 29px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Heading
        alignItems="flex-start"
        display="flex"
        shrink="0"
        width="164px"
        level="6"
        children="Request Demo"
        {...getOverrideProps(overrides, "Flex.Heading[0]")}
      ></Heading>
      <Flex
        gap="17px"
        direction="column"
        shrink="0"
        width="379px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="35px"
          direction="row"
          width="379px"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Flex
            gap="8px"
            direction="column"
            shrink="0"
            height="88px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              fontFamily="IBM Plex Sans"
              fontSize="14px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="First Name *"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <PasswordField
              display="flex"
              width="172px"
              shrink="0"
              size="default"
              labelHidden="true"
              variation="default"
              hideShowPassword="true"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].PasswordField[0]"
              )}
            ></PasswordField>
          </Flex>
          <Flex
            gap="8px"
            direction="column"
            shrink="0"
            height="88px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1]")}
          >
            <Text
              fontFamily="IBM Plex Sans"
              fontSize="14px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Last Name *"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].Text[0]"
              )}
            ></Text>
            <PasswordField
              display="flex"
              width="172px"
              shrink="0"
              size="default"
              labelHidden="true"
              variation="default"
              hideShowPassword="true"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].PasswordField[0]"
              )}
            ></PasswordField>
          </Flex>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          width="379px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <Text
            fontFamily="IBM Plex Sans"
            fontSize="14px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="Work Email*"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Text[0]")}
          ></Text>
          <PasswordField
            display="flex"
            width="379px"
            shrink="0"
            size="default"
            labelHidden="true"
            variation="default"
            hideShowPassword="true"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[1].PasswordField[0]"
            )}
          ></PasswordField>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          width="379px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2]")}
        >
          <Text
            fontFamily="IBM Plex Sans"
            fontSize="14px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="Phone*"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Text[0]")}
          ></Text>
          <PasswordField
            display="flex"
            width="379px"
            shrink="0"
            size="default"
            labelHidden="true"
            variation="default"
            hideShowPassword="true"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[2].PasswordField[0]"
            )}
          ></PasswordField>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        width="380px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Button
          display="flex"
          gap="10px"
          direction="row"
          width="380px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="36px"
          position="relative"
          borderRadius="4px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
          {...getOverrideProps(overrides, "Flex.Flex[1].Button[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.49px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="Request Demo"
            {...getOverrideProps(overrides, "Flex.Flex[1].Button[0].Text[0]")}
          ></Text>
        </Button>
      </Flex>
      <View
        width="389px"
        height="24px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      >
        <Flex
          gap="3px"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="58.354755784061695%"
          direction="row"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.View[0].Flex[0]")}
        >
          <IconCheck
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            color="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
            type="check"
            fontSize="24px"
            {...getOverrideProps(
              overrides,
              "Flex.View[0].Flex[0].IconCheck[0]"
            )}
          ></IconCheck>
          <Text
            fontFamily="IBM Plex Sans"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="1-month free trial access"
            {...getOverrideProps(overrides, "Flex.View[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          gap="3px"
          position="absolute"
          top="0%"
          bottom="0%"
          left="60.9254498714653%"
          right="0%"
          direction="row"
          alignItems="flex-start"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.View[0].Flex[1]")}
        >
          <IconCheck
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            color="rgba(186.0000041127205,51.00000075995922,53.00000064074993,1)"
            type="check"
            fontSize="24px"
            {...getOverrideProps(
              overrides,
              "Flex.View[0].Flex[1].IconCheck[0]"
            )}
          ></IconCheck>
          <Text
            fontFamily="IBM Plex Sans"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="No credit card required"
            {...getOverrideProps(overrides, "Flex.View[0].Flex[1].Text[0]")}
          ></Text>
        </Flex>
      </View>
    </Flex>
  );
}
