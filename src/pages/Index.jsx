import { Box, Container, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="brand.800">
      <VStack spacing={4} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="2xl" fontWeight="bold">
            Featured Article
          </Text>
          <Text mt={2}>This is the featured article content.</Text>
        </Box>
        <Grid templateColumns={{ base: "1fr", md: "3fr 1fr" }} gap={4}>
          <GridItem>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <Box bg="gray.100" p={4} borderRadius="md">
                <Text fontSize="xl" fontWeight="bold">
                  Article 1
                </Text>
                <Text mt={2}>Content for article 1.</Text>
              </Box>
              <Box bg="gray.100" p={4} borderRadius="md">
                <Text fontSize="xl" fontWeight="bold">
                  Article 2
                </Text>
                <Text mt={2}>Content for article 2.</Text>
              </Box>
              <Box bg="gray.100" p={4} borderRadius="md">
                <Text fontSize="xl" fontWeight="bold">
                  Article 3
                </Text>
                <Text mt={2}>Content for article 3.</Text>
              </Box>
              <Box bg="gray.100" p={4} borderRadius="md">
                <Text fontSize="xl" fontWeight="bold">
                  Article 4
                </Text>
                <Text mt={2}>Content for article 4.</Text>
              </Box>
            </Grid>
          </GridItem>
          <GridItem>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">
                Trending Articles
              </Text>
              <Text mt={2}>Content for trending articles.</Text>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;