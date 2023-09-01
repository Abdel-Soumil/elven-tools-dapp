import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = ({ footer = false }) => {
  return (
    <>
      {footer ? <Box display="flex" alignItems="center" justifyContent={"center"} gap={3}>
        <SocialIcon
          url="https://www.twitter.com/ElvenTools"
          bgColor='transparent'
          fgColor="#fff"
          style={{ width: 40, height: 40 }}
        />

      </Box> : <Box display="flex" alignItems="center" gap={3}>
        <SocialIcon
          url="https://www.twitter.com/ElvenTools"
          bgColor="#000"
          fgColor="#fff"
          style={{ width: 80, height: 80 }}
        />
        

      </Box>
      }
    </>
  );
};
