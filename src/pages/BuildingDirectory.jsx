import React, { useState } from 'react';
import { Box, Container, Heading, Input, InputGroup, InputLeftElement, VStack, HStack, Text, Button, Image, Flex, Spacer } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const buildings = [
  { name: 'Empire State Building', address: '350 5th Ave, New York, NY 10118', imageUrl: 'https://via.placeholder.com/50' },
  { name: 'Willis Tower', address: '233 S Wacker Dr, Chicago, IL 60606', imageUrl: 'https://via.placeholder.com/50' },
  { name: 'One World Trade Center', address: '285 Fulton St, New York, NY 10007', imageUrl: 'https://via.placeholder.com/50' },
  { name: 'Burj Khalifa', address: '1 Sheikh Mohammed bin Rashid Blvd, Dubai, UAE', imageUrl: 'https://via.placeholder.com/50' },
  { name: 'Eiffel Tower', address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France', imageUrl: 'https://via.placeholder.com/50' },
  { name: 'Shanghai Tower', address: '501 Yincheng Middle Rd, Lujiazui, Pudong, Shanghai, China', imageUrl: 'https://via.placeholder.com/50' },
];

const BuildingDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBuildings, setFilteredBuildings] = useState(buildings);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredBuildings(buildings.filter(building =>
      building.name.toLowerCase().includes(query) ||
      building.address.toLowerCase().includes(query)
    ));
  };

  return (
    <Box>
      <Flex as="nav" bg="white" p={4} boxShadow="sm">
        <Box fontWeight="bold" fontSize="xl">RealEstate</Box>
        <Spacer />
        <HStack spacing={8}>
          <Text>Explore</Text>
          <Text>List your space</Text>
          <Text>Manage properties</Text>
          <Text>Bookings</Text>
          <Text>Inbox</Text>
          <Text>Help</Text>
          <Box boxSize="30px" bg="gray.200" borderRadius="full"></Box>
        </HStack>
      </Flex>
      <Container maxW="container.xl" py={10}>
        <Heading as="h1" size="2xl" mb={4}>Building Directory</Heading>
        <Text fontSize="lg" mb={6}>Find a building by name or location</Text>
        <InputGroup mb={10}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search by name, address or city..." value={searchQuery} onChange={handleSearchChange} />
        </InputGroup>
        <VStack spacing={4} align="stretch">
          {filteredBuildings.map((building, index) => (
            <HStack key={index} spacing={4} p={4} borderWidth="1px" borderRadius="md" bg="white" boxShadow="sm">
              <Image boxSize="50px" src={building.imageUrl} alt={building.name} />
              <Box flex="1">
                <Text fontWeight="bold">{building.name}</Text>
                <Text>{building.address}</Text>
              </Box>
              <Button colorScheme="gray" variant="outline">View</Button>
            </HStack>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default BuildingDirectory;