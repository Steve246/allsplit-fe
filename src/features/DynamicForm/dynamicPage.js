import React, { useState, useEffect } from "react";
import { FormControl, FormLabel, Input, Button, Select, Box } from "@chakra-ui/react";

const DynamicForm = () => {
  // State to hold menu data from API
  const [menuData, setMenuData] = useState([]);

  // Simulate fetching menu data from an API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/menu"); // Replace with actual API call
      const data = await response.json();
      
      // Set API response to state (menuName and menuPrice)
      setMenuData(data);
    };

    fetchData();
  }, []);

  // State to hold user-selected data (assignTo, bankType, and bankNumber)
  const [formValues, setFormValues] = useState([]);

  // Update form values based on user input
  const handleInputChange = (index, field, value) => {
    const updatedValues = [...formValues];
    updatedValues[index] = { ...updatedValues[index], [field]: value };
    setFormValues(updatedValues);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine menuData (menuName, menuPrice) with formValues (assignTo, bankType, bankNumber)
    const combinedData = menuData.map((item, index) => ({
      ...item,
      ...formValues[index],
    }));

    console.log("Submitted Data:", combinedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {menuData.map((menu, index) => (
        <Box key={index} borderWidth="1px" borderRadius="md" p={4} mb={4}>
          <FormControl mb={4}>
            <FormLabel>Menu Name</FormLabel>
            <Input type="text" value={menu.menuName} isReadOnly />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Menu Price</FormLabel>
            <Input type="number" value={menu.menuPrice} isReadOnly />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Assign To</FormLabel>
            <Select
              placeholder="Select assign to"
              onChange={(e) => handleInputChange(index, "assignTo", e.target.value)}
            >
              <option value="Steven">Steven</option>
              <option value="Luis">Luis</option>
              <option value="Michael">Michael</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Bank Type</FormLabel>
            <Select
              placeholder="Select bank type"
              onChange={(e) => handleInputChange(index, "bankType", e.target.value)}
            >
              <option value="BCA">BCA</option>
              <option value="Mandiri">Mandiri</option>
              <option value="BNI">BNI</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Bank Number</FormLabel>
            <Input
              type="text"
              onChange={(e) => handleInputChange(index, "bankNumber", e.target.value)}
            />
          </FormControl>
        </Box>
      ))}

      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </form>
  );
};

export default DynamicForm;
