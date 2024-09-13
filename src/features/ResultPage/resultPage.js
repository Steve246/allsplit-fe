
import { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { useDependency } from "../../shared/hook/UseDependency";

import { useNavigate } from "react-router";

import LoadingScreen from '../../shared/components/loading/LoadingScreen'



const Form1 = ({ setBankType, setBankNumber }) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Bank Information
      </Heading>
      <FormControl mt="2%">
        <FormLabel htmlFor="bankType" fontWeight={'normal'}>
          Bank Name
        </FormLabel>
        <Input
          id="bankType"
          type="text"
          onChange={(e) => setBankType(e.target.value)}
        />
        <FormHelperText>Ex: BCA, Mandiri, etc</FormHelperText>
      </FormControl>
  
      <FormControl>
        <FormLabel htmlFor="bankNumber" fontWeight={'normal'} mt="2%">
          Bank Number
        </FormLabel>
        <Input
          id="bankNumber"
          type="number"
          onChange={(e) => setBankNumber(e.target.value)}
        />
      </FormControl>
    </>
  );
};

const Form3 = ({ items, setItems }) => {
  return (
    <Box p={6}>
      <Heading mb={4}>Recepient Result</Heading>

      {items.length > 0 ? (
        <VStack spacing={4} align="stretch">
          {items.map((item, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              shadow="md"
              bg="gray.50"
            >
              <Text fontSize="lg" fontWeight="bold">
                Name: {item.Name}
              </Text>
              <Text>Quantity: {item.Quantity}</Text>
              <Text>Price: {item.Price}</Text>

              <Input
                placeholder="Assign To"
                value={item.AssignTo}
                onChange={(e) => {
                  const updatedItems = [...items];
                  updatedItems[index].AssignTo = e.target.value;
                  setItems(updatedItems);
                }}
                mt={2}
              />
            </Box>
          ))}
        </VStack>
      ) : (
        <Text>No data available</Text>
      )}
    </Box>
  );
};



export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  
  // State to store the form data
  const [bankType, setBankType] = useState('');
  const [bankNumber, setBankNumber] = useState('');
  const location = useLocation();
  const { message, data } = location.state || {};
  const [items, setItems] = useState(Array.isArray(data) ? data : []);

  const {uploadService} = useDependency()

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false); 




  const onPostData = async (data) => {
    console.log("Masuk onPostUploadData")

    try {
      const response = await uploadService.postTransaction(data)

      
      if (response.message === "Picture Successfully Receive") {
          console.log("Ini berhasil --> ",response);
          // navigate('/result-page', {replace : true})

          navigate('/copy-page', { replace: true, state: { data: response.data, message: response.message } });

      } else {
          console.log("ini failed -->", response)
      }
  }
  finally {
      setIsLoading(false)
  }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = items.map((item) => ({
      menuName: item.Name,
      menuPrice: `${item.Price}`,
      assignTo: item.AssignTo,
      bankType,
      bankNumber,
    }));

    onPostData(finalData)

    console.log("Submitted Data:", finalData);
    toast({
      title: 'Recepient Details Created.',
      description: "We've created your recepient detail for you.",
      status: 'success',
      duration: 10000,
      isClosable: true,
    });
    // Example API call: axios.post('/api/submit', finalData);
  };

  return (
    <>
    { isLoading ? <LoadingScreen/> :
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        mt={50}
        m="10px auto"
        as="form"
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>

        {step === 1 ? (
          <Form1 setBankType={setBankType} setBankNumber={setBankNumber} />
        ) : (
          <Form3 items={items} setItems={setItems} />
        )}


        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    }</>
  );
}
