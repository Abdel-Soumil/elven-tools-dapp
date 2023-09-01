import { Box } from '@chakra-ui/react';

export const HeroImage = () => {
  return (
    <Box
      minWidth="400px"
      height="400px"
      display="flex"
      justifyContent="flex-start"
      sx={{
        '@media screen and (max-width: 1000px)': {
          display: 'none',
        },
      }}
    >
      <Box as="video" src="/ape-presentation.mp4" width="500px" height="400px" muted autoPlay/>

    </Box>
  );
};
