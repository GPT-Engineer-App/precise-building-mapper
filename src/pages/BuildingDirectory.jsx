import React from 'react';
import { Box, Container, Heading, Input, InputGroup, InputLeftElement, VStack, HStack, Text, Button, Image, Flex, Spacer } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const buildings = [
  { name: 'Building Name', address: 'Address', imageUrl: 'https://via.placeholder.com/50' },
  { name: 'Building Name', address: 'Address', imageUrl: 'https://via.placeholder.com/50' },
  { name: 'Building Name', address: 'Address', imageUrl: 'https://via.placeholder.com/50' },
  { name: 'Building Name', address: 'Address', imageUrl: 'https://via.placeholder.com/50' },
  { name: 'Building Name', address: 'Address', imageUrl: 'https://via.placeholder.com/50' },
  { name: 'Building Name', address: 'Address', imageUrl: 'https://via.placeholder.com/50' },
];

const BuildingDirectory = () => {
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
          <Input type="text" placeholder="Search by name, address or city..." />
        </InputGroup>
        <VStack spacing={4} align="stretch">
          {buildings.map((building, index) => (
            <HStack key={index} spacing={4} p={4} borderWidth="1px" borderRadius="md" bg="gray.50">
              <Image boxSize="50px" src={building.imageUrl} alt={building.name} />
              <Box flex="1">
                <Text fontWeight="bold">{building.name}</Text>
                <Text>{building.address}</Text>
              </Box>
              <Button colorScheme="gray">View</Button>
            </HStack>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default BuildingDirectory;