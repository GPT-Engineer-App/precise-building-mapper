import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Heading, Image, Text, VStack, HStack, Flex, Spacer } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const buildings = [
  { id: 1, name: 'Building Name 1', address: 'Address 1', imageUrl: 'https://via.placeholder.com/150', characteristics: 'Characteristics 1', graphData: [10, 20, 30, 40] },
  { id: 2, name: 'Building Name 2', address: 'Address 2', imageUrl: 'https://via.placeholder.com/150', characteristics: 'Characteristics 2', graphData: [15, 25, 35, 45] },
  // Add more buildings as needed
];

const BuildingDetails = () => {
  const { id } = useParams();
  const building = buildings.find(b => b.id === parseInt(id));

  if (!building) {
    return <Text>Building not found</Text>;
  }

  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Building Data',
        data: building.graphData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <Box>
      <Flex as="nav" bg="white" p={4} boxShadow="sm" alignItems="center">
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
        <Heading as="h1" size="2xl" mb={4}>{building.name}</Heading>
        <Text fontSize="lg" mb={6}>{building.address}</Text>
        <Image src={building.imageUrl} alt={building.name} mb={6} />
        <Text fontSize="md" mb={6}>{building.characteristics}</Text>
        <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
          <Line data={data} />
        </Box>
      </Container>
    </Box>
  );
};

export default BuildingDetails;