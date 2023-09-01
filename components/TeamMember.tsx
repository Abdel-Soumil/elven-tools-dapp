import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { SocialIcon } from 'react-social-icons';

interface TeamMemberProps {
  name: string;
  imageUrl: string;
  socialMediaLinks?: string[];
  bio?: string;
}

export const TeamMember: FC<TeamMemberProps> = ({
  name,
  imageUrl,
  socialMediaLinks,
  bio,
}) => {
  return (
    <Box backgroundColor={"black"} paddingTop={10} borderRadius={10}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image src={imageUrl} alt={name} width={250} height={250} />
      </Box>
      <Text textAlign="center" color={"#white"} mt={5} fontWeight="bold" fontSize="xl">
        {name}
      </Text>
      {socialMediaLinks && (
        <Box
          display="flex"
          mt={5}
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          {socialMediaLinks.map((link, index) => (
            <SocialIcon
              key={index}
              url={link}
              bgColor="white"
              style={{ width: 40, height: 40 }}
            />
          ))}
        </Box>
      )}
      {bio && (
        <Text mt={5} textAlign="center" color={"white"}>
          {bio}
        </Text>
      )}
    </Box>
  );
};
