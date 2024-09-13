import React from 'react';
import { Box, Button, Text, Heading, VStack, useClipboard } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';

// Helper function to format the response
const formatResponseText = (responseData) => {
  if (!responseData || !responseData.length) return "No data available."; // Fallback if data is undefined or empty

  return responseData
    .map((personData) => {
      const menuList = personData.MenuDetail.map(
        (menu, index) => `${index + 1}. ${menu.menuName} - ${parseInt(menu.menuPrice).toLocaleString()}`
      ).join('\n');

      // Calculate the total price by summing up all menu prices
      const totalPrice = personData.MenuDetail
        .reduce((total, menu) => total + parseInt(menu.menuPrice), 0)
        .toLocaleString();

      return `
${personData.AssignPerson}

Menu List:
${menuList}

Price Total: ${totalPrice}

Please transfer to ${personData.BankType} - ${personData.BankNumber}
`;
    })
    .join('\n------------------\n');
};

const CopyTextPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extracting message and data from location state, with fallback to prevent undefined access
  const { message = "No message available", data = [] } = location.state || {};

  console.log("Data received:", data); // Debugging the data received

  // Format the response object into the desired structure
  const responseText = formatResponseText(data);

  // Chakra UI hook to handle copying text
  const { hasCopied, onCopy } = useClipboard(responseText);

  return (
    <VStack spacing={4} p={5} align="start">
      <Heading size="lg">Recepient Text</Heading>

      {/* Display the formatted response text in a box */}
      <Box
        w="100%"
        p={4}
        borderWidth="1px"
        borderRadius="md"
        bg="gray.50"
        overflow="auto"
        maxHeight="400px"
      >
        <Text whiteSpace="pre-wrap" fontFamily="monospace">
          {responseText}
        </Text>
      </Box>

      {/* Copy button */}
      <Button colorScheme="teal" onClick={onCopy}>
        {hasCopied ? "Copied!" : "Copy Text"}
      </Button>

      {/* Button to navigate back to the first page */}
      <Button colorScheme="blue" onClick={() => navigate('/')}>
        Back to First Page
      </Button>
    </VStack>
  );
};

export default CopyTextPage;
