import { FC } from 'react';
import {
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from '@chakra-ui/react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <AccordionItem
      border={0}
      bgColor="elvenTools.dark.darker"
      boxShadow="0 0 10px"
      color="elvenTools.shadowColor"
      bgGradient="linear-gradient(90deg, elvenTools.dark.base 0%, elvenTools.dark.darker 70%);"
      mb={6}

    >
      <AccordionButton
        _focus={{ outline: 'none' }}
        color="elvenTools.white"
        padding={10}
        bgColor={"black"} borderRadius={5} border={"white solid 1px"}
        _expanded={{ "borderWidth":"1px 1px 0 1px" ,"borderRadius":"5px 5px 0px 0px"}}
      >
        <Box flex="1" textAlign="center">
          {question}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel  color="elvenTools.white" bgColor={"black"} borderRadius={"0px 0px 5px 5px"} border={"white solid 1px"} borderWidth={"0px 1px 1px 1px"}>{answer}</AccordionPanel>
    </AccordionItem>
  );
};
