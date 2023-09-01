import { Box, Button, Text } from '@chakra-ui/react';
import { CollectionInfoBox } from './CollectionInfoBox';
import { useElvenScQuery } from '../hooks/useElvenScQuery';
import { SCQueryType, useConfig } from '@useelven/core';
import NextLink from 'next/link';
import {  Link } from '@chakra-ui/react';
import AnimatedText from './AnimatedText';


export const Hero = () => {
  const { explorerAddress, chainType } = useConfig();
  const { data: collectionSize, isLoading: collectionSizeLoading } =
    useElvenScQuery<number>({
      funcName: 'getTotalSupply',
      type: SCQueryType.NUMBER,
    });

  const { data: totalTokensLeft, isLoading: totalTokensLeftIsLoading } =
    useElvenScQuery<number>({
      type: SCQueryType.NUMBER,
      funcName: 'getTotalTokensLeft',
    });

  const minted =
    collectionSize && totalTokensLeft ? collectionSize - totalTokensLeft : 0;

  return (
    <Box width="100%">
       {/* <VStack spacing={4} alignItems="center">
        {"Open source Dapp template for the Elven Tools and MultiversX blockchain.".split('').map((char, index) => (
          <AnimatedText key={index} text={char} index={index} />
        ))}
      </VStack> */}
      
          <AnimatedText text={"The new famous project on MultiversX  blockchain."} delay={70} infinite={false} />

      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'left' }}
      >
        hello bro {' '}
        
          {chainType} 
        ! modifie ici 
      </Text>
      <Box
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-start' }}
        mt={10}
        gap={3}
        sx={{
          '@media screen and (max-width: 650px)': {
            flexDirection: 'column',
          },
        }}
      >

        
        <CollectionInfoBox
          content={`${minted} / ${collectionSize || 0}`}
          isLoading={collectionSizeLoading || totalTokensLeftIsLoading}
          label="Minted per collection supply"
        />
        <Link
          as={NextLink}
          href="/mint"
          _hover={ {bg: 'elvenTools.color1.lighter'} }
        >
          <Button colorScheme='white' variant='outline' paddingTop={3} paddingBottom={3} height={"50px"}>
            Mint NFT
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
