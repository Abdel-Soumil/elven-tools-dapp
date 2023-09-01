import {  Box, Text, Stack } from '@chakra-ui/react';
import { SocialMediaIcons } from './SocialMediaIcons';

export const Footer = () => {
  return (
    <Box
      height="335px"
      bgColor="elvenTools.dark.darker"
      color="elvenTools.white"
      display="flex"
      alignItems="center"
      width={"100%"}
      borderTop={"black 2px solid"}
      style={{ "background": "linear-gradient(150deg, rgba(0, 0, 0, 0) 23%, black 90%)" }}
    >
      <Box display={"flex"}
        flexDirection={"column"}
        padding={"50px 50px 0 50px"}
        maxWidth={"1200px"}
        margin={"auto"}
        className='footer'
        width={"100%"}
      >
        <Box display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          className='footer-container'
        >
          <Box display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            className='footer-logo-container'
          >
            <Box display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              className='footer-elrond-container'
            >
              <Box as="img" src="/fLogo.png" width={30} height={30} ></Box>
              <Box fontSize={"20px"} color={"#fff"} padding={"0 30px"}>
                Made for
                <br></br>
                MultiversX with 💙
              </Box>
              <Box borderLeft={"2px solid #fff"} height={"70px"}></Box>

            </Box>
            <Box as="img" src="/logo.png" width={"229px"} height={"150px"} padding={"0 30px"}></Box>
          </Box>
          <Box>
            <Stack
              direction="column"
              justifyContent="center"
              fontSize={"15px"}
              textAlign={"center"}
              gap={0}
            >
              <Text
                as="a"
                color="white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"

              >
                Home
              </Text>
              <Text
                as="a"
                color="white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"

              >
                About The Club
              </Text>
              <Text
                as="a"
                color="white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"

              >
                Roadmap
              </Text>
              <Text
                as="a"
                color="white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </Text>
            </Stack>
           <SocialMediaIcons footer={true} />
          </Box>

        </Box>
        <Box 
            fontSize={"14px"}
            color= {"#fff"}
            textAlign={"center"}
            padding= {"30px 0"}
        >
        ©{new Date().getFullYear()} We Art Club. All rights reserved.

        </Box>

      </Box >


      {/* <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>Elven Tools Dapp Template (v{`${packageJson.version}`})</Box>
        <Box fontSize="xs" fontWeight="hairline">
          All for free. Please support the project. Give it credit and tell the
          world about it. Attribution is not required but welcomed in the form
          of a backlink.
        </Box>
        <Stack
          fontSize="xs"
          fontWeight="bold"
          direction="row"
          justifyContent="center"
        >
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.elven.tools"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elven Tools ⚡
          </Text>
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.elvenjs.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Elven.js'}
          </Text>
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.useElven.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'useElven'}
          </Text>
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://github.com/xdevguild/buildo-begins"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Buildo Begins'}
          </Text>
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.julian.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            julian.io
          </Text>
        </Stack>
      </Container> */}
    </Box >
  );
};
