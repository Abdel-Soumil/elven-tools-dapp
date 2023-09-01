import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Text
      as="h2"
      fontSize={{ base: '2xl', lg: '3xl' }}
      fontWeight="black"
      mb={10}
      textAlign="center"
    >
      {title}{' '}
    </Text>
  );
};
