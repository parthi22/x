/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react'
import { getOverrideProps } from '@aws-amplify/ui-react/internal'
import { Flex, Icon, Image, Text, View } from '@aws-amplify/ui-react'
export default function FooterMobileView(props) {
  const { overrides: overridesProp, ...rest } = props
  const overrides = { ...overridesProp }
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
      {...getOverrideProps(overrides, 'Flex')}
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
        {...getOverrideProps(overrides, 'Flex.Flex[0]')}
      >
        <Image
          width="132px"
          height="47px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://d2gxm2c63thfmv.cloudfront.net/wp-content/uploads/2021/07/21232027/xto10x-logo-v2.png"
          {...getOverrideProps(overrides, 'Flex.Flex[0].Image[0]')}
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
        {...getOverrideProps(overrides, 'Flex.Flex[1]')}
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
          {...getOverrideProps(overrides, 'Flex.Flex[1].Text[0]')}
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
        {...getOverrideProps(overrides, 'Flex.Flex[2]')}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="154px"
          height="40px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, 'Flex.Flex[2].Flex[0]')}
        >
          <View
            padding="0px 0px 0px 0px"
            width="40px"
            height="40px"
            position="absolute"
            top="0px"
            left="57px"
            {...getOverrideProps(overrides, 'Flex.Flex[2].Flex[0].View[0]')}
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
                'Flex.Flex[2].Flex[0].View[0].Icon[0]',
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
                'Flex.Flex[2].Flex[0].View[0].View[0]',
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
                  'Flex.Flex[2].Flex[0].View[0].View[0].Icon[0]',
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
            {...getOverrideProps(overrides, 'Flex.Flex[2].Flex[0].View[1]')}
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
                'Flex.Flex[2].Flex[0].View[1].View[0]',
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
                  'Flex.Flex[2].Flex[0].View[1].View[0].Icon[0]',
                )}
              ></Icon>
            </View>
            <Icon
              width="22.00048828125px"
              height="22px"
              pathData="M0.000542523 2.74994C0.000542523 1.23197 1.23252 0 2.75048 0C4.26845 0 5.50042 1.23197 5.50042 2.74994C5.50042 4.26791 4.26845 5.49988 2.75048 5.49988C1.23252 5.49988 0.000542523 4.26791 0.000542523 2.74994ZM14.8508 6.60034C10.9019 6.60034 7.69971 9.78294 7.69971 13.7062L7.69971 20.8988C7.69971 21.5062 8.19347 22 8.80091 22L11.3663 22C11.9737 22 12.4675 21.5062 12.4675 20.8988L12.4675 13.7062C12.4675 12.3178 13.6701 11.208 15.0977 11.351C16.337 11.4745 17.2328 12.6074 17.2328 13.8528L17.2328 20.8988C17.2328 21.5062 17.7266 22 18.334 22L20.8994 22C21.5068 22 22.0006 21.5062 22.0006 20.8988L22.0006 13.7062C22.0006 9.78294 18.7985 6.60034 14.8508 6.60034ZM4.3999 7.69971L1.1012 7.69971C0.493767 7.69971 0 8.19225 0 8.79968L0 20.8994C0 21.5068 0.493767 21.9994 1.1012 21.9994L4.3999 21.9994C5.00733 21.9994 5.49988 21.5068 5.49988 20.8994L5.49988 8.79968C5.49988 8.19225 5.00733 7.69971 4.3999 7.69971Z"
              viewBox={{ minX: 0, minY: 0, width: 22.00048828125, height: 22 }}
              color="rgba(247.00000047683716,247.00000047683716,249.00000035762787,1)"
              position="absolute"
              top="22.5%"
              bottom="22.5%"
              left="22.5%"
              right="22.49847412109375%"
              {...getOverrideProps(
                overrides,
                'Flex.Flex[2].Flex[0].View[1].Icon[0]',
              )}
            >
              <Icon
                width="14.30078125px"
                height="15.399658203125px"
                pathData="M7.15106 0C3.20215 0 0 3.1826 0 7.10584L0 14.2985C0 14.9059 0.493767 15.3997 1.1012 15.3997L3.66658 15.3997C4.27402 15.3997 4.76778 14.9059 4.76778 14.2985L4.76778 7.10584C4.76778 5.71743 5.97042 4.60768 7.39795 4.75067C8.63725 4.87411 9.53312 6.00709 9.53312 7.25251L9.53312 14.2985C9.53312 14.9059 10.0269 15.3997 10.6343 15.3997L13.1997 15.3997C13.8071 15.3997 14.3009 14.9059 14.3009 14.2985L14.3009 7.10584C14.3009 3.1826 11.0988 0 7.15106 0Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 14.30078125,
                  height: 15.399658203125,
                }}
                color="rgba(34.934998601675034,31.11000034958124,31.875,1)"
                position="absolute"
                top="16.5008544921875%"
                bottom="45%"
                left="19.249267578125%"
                right="44.99847173690796%"
                {...getOverrideProps(
                  overrides,
                  'Flex.Flex[2].Flex[0].View[1].Icon[0].Icon[0]',
                )}
              ></Icon>
              <Icon
                width="5.5px"
                height="14.299560546875px"
                pathData="M4.3999 0L1.1012 0C0.493767 0 0 0.492545 0 1.09998L0 13.1997C0 13.8071 0.493767 14.2997 1.1012 14.2997L4.3999 14.2997C5.00733 14.2997 5.49988 13.8071 5.49988 13.1997L5.49988 1.09998C5.49988 0.492545 5.00733 0 4.3999 0"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.5,
                  height: 14.299560546875,
                }}
                color="rgba(34.934998601675034,31.11000034958124,31.875,1)"
                position="absolute"
                top="19.249267578125%"
                bottom="45.00152826309204%"
                left="0%"
                right="86.25030636787415%"
                {...getOverrideProps(
                  overrides,
                  'Flex.Flex[2].Flex[0].View[1].Icon[0].Icon[1]',
                )}
              ></Icon>
              <Icon
                width="5.5px"
                height="5.499755859375px"
                pathData="M2.74994 0C1.23197 0 0 1.23197 0 2.74994C0 4.26791 1.23197 5.49988 2.74994 5.49988C4.26791 5.49988 5.49988 4.26791 5.49988 2.74994C5.49988 1.23197 4.26791 0 2.74994 0"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.5,
                  height: 5.499755859375,
                }}
                color="rgba(34.934998601675034,31.11000034958124,31.875,1)"
                position="absolute"
                top="0%"
                bottom="86.25030636787415%"
                left="0.0013563066022470593%"
                right="86.2489500612719%"
                {...getOverrideProps(
                  overrides,
                  'Flex.Flex[2].Flex[0].View[1].Icon[0].Icon[2]',
                )}
              ></Icon>
            </Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="40px"
            height="40px"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, 'Flex.Flex[2].Flex[0].View[2]')}
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
                'Flex.Flex[2].Flex[0].View[2].View[0]',
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
                  'Flex.Flex[2].Flex[0].View[2].View[0].Icon[0]',
                )}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="23px"
              height="16.100000381469727px"
              position="absolute"
              top="12px"
              left="8px"
              {...getOverrideProps(
                overrides,
                'Flex.Flex[2].Flex[0].View[2].View[1]',
              )}
            >
              <Icon
                width="23px"
                height="16.100000381469727px"
                pathData="M20.4774 0.482258C21.479 0.741935 22.2581 1.52097 22.5177 2.52258C23 4.34032 23 8.05 23 8.05C23 8.05 23 11.7968 22.5177 13.5774C22.2581 14.579 21.479 15.3581 20.4774 15.6177C18.6968 16.1 11.5 16.1 11.5 16.1C11.5 16.1 4.30323 16.1 2.52258 15.6177C1.52097 15.3581 0.741935 14.579 0.482258 13.5774C0 11.7968 0 8.05 0 8.05C0 8.05 0 4.34032 0.482258 2.52258C0.741935 1.52097 1.52097 0.741935 2.52258 0.482258C4.30323 0 11.5 0 11.5 0C11.5 0 18.6968 0 20.4774 0.482258ZM15.1723 8.04987L9.19974 4.59987L9.19974 11.4999L15.1723 8.04987Z"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 23,
                  height: 16.10009765625,
                }}
                color="rgba(247.00000047683716,247.00000047683716,249.00000035762787,1)"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(
                  overrides,
                  'Flex.Flex[2].Flex[0].View[2].View[1].Icon[0]',
                )}
              >
                <Icon
                  width="23px"
                  height="16.100000381469727px"
                  pathData=""
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 23,
                    height: 16.10009765625,
                  }}
                  position="absolute"
                  top="0px"
                  left="0px"
                  {...getOverrideProps(
                    overrides,
                    'Flex.Flex[2].Flex[0].View[2].View[1].Icon[0].Icon[0]',
                  )}
                ></Icon>
                <Icon
                  width="5.972580909729004px"
                  height="6.900000095367432px"
                  pathData=""
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 5.97265625,
                    height: 6.89990234375,
                  }}
                  position="absolute"
                  top="4.599867820739746px"
                  left="9.199735641479492px"
                  {...getOverrideProps(
                    overrides,
                    'Flex.Flex[2].Flex[0].View[2].View[1].Icon[0].Icon[1]',
                  )}
                ></Icon>
              </Icon>
            </View>
          </View>
        </Flex>
      </Flex>
    </Flex>
  )
}
