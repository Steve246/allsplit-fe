
import { AddIcon } from '@chakra-ui/icons';
import {
  Center,
  Image,
  ScaleFade,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import UseUploadImage from './useAppUpload';



const AppUpload = ({
    size = '100px',
    rounded = 'full',
    props
  }) => {
    
    const {
      uploadedFile,
      setUploadedFile,
      handleFileChange
    } = UseUploadImage(props);
  
    return (
      <Center
        w={size}
        h={size}
        as={chakra.label}
        htmlFor="file"
        bg="whiteAlpha.500"
        border="1px dashed gray"
        rounded={rounded}
        cursor="pointer"
        overflow="hidden"
        position="relative"
      >
        <Center
          position="absolute"
          w="100%"
          h="100%"
          _hover={{ bg: 'blackAlpha.600' }}
        >
          <VStack>
            <AddIcon />
            <Text>Upload</Text>
          </VStack>
        </Center>
  
        {uploadedFile && (
          <ScaleFade initialScale={0.9} in={uploadedFile !== null}>
            <Image
              w="100%"
              h={'100%'}
              src={URL.createObjectURL(uploadedFile)}
              alt="Uploaded"
              rounded={rounded}
            />
          </ScaleFade>
        )}
  
        <chakra.input
          required
          style={{ display: 'none' }}
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
        />
      </Center>
    );
  };
  
  export default AppUpload;