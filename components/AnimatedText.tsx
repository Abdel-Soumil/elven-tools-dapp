import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import { FC } from 'react';
interface AnimatedTextProps {
  text: string;
  delay?:number;
  infinite?:boolean;
}


const AnimatedText:FC<AnimatedTextProps> = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout:NodeJS.Timeout;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        if(text[currentIndex]!=undefined){
        setCurrentText(prevText => prevText + text[currentIndex]);
        }
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) { // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);
  return (

    <Text whiteSpace="pre-line" as="h1"
      fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
      textAlign={{ base: 'center', md: 'left' }}
      fontWeight="black"
      lineHeight="shorter">
      {currentText}
    </Text>

  );
};

export default AnimatedText;