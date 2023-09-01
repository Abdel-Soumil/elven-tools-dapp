// The component for triggering functions. For in-app navigation use Next Link component

import { Box,Text } from '@chakra-ui/react';
import { useConfig } from '@useelven/core';
import { HomeSectionTitle } from './HomeSectionTitle';

export const AboutComponent = ({}) => {
    const { chainType } = useConfig();
  return (
    <Box
        sx={{
          a: {
            color: 'elvenTools.color3.base',
          },
        }}
      >
       <HomeSectionTitle title={"About"} />
        <Text mb={4}
        textAlign={"center"}
        fontSize={"20px"}
        lineHeight={"26px"}
        padding={"20px 50px"}
        >
          This demo page is a full-featured minting landing page that will work
          well with the Elven Tools smart contract. You can use Elven Tools CLI 
          to initiate this dapp and deploy and set up the smart contract. 
          Please do not pay much attention to the UI design because I am not a
          designer. I tried to make it as pleasant and straightforward as
          possible in a short time. But if you like it, you can, of course, use
          it as it is. You can change the colors using theme settings. More in
          the docs. Also, the weird faces assets are just for testing, nothing
          special here.
          This minting landing page will operate on proper collection on the
          {chainType}. So you will be able to test it, and you will be able to
          mint some NFTs with fake xEGLD money.
        </Text>
        
    
      </Box>
  );
};
