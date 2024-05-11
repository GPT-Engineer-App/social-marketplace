import { Box, Container, Grid, GridItem, Heading, Image, Text, VStack, Input, Button, IconButton } from "@chakra-ui/react";
import { FaSearch, FaBell, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={4} align="stretch">
        <Box p={4} display="flex" alignItems="center" justifyContent="space-between">
          <Heading size="lg">Marketplace</Heading>
          <Box display="flex" alignItems="center">
            <Input placeholder="Search items" width="auto" marginRight={2} />
            <IconButton aria-label="Search database" icon={<FaSearch />} />
            <IconButton aria-label="Notifications" icon={<FaBell />} marginLeft={2} />
            <IconButton aria-label="Cart" icon={<FaShoppingCart />} marginLeft={2} />
          </Box>
        </Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {Array.from({ length: 10 }).map((_, index) => (
            <GridItem key={index} w="100%" boxShadow="md" borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRwbGFjZSUyMGl0ZW18ZW58MHx8fHwxNzE1Mzg5MDcxfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Product Image" />
              <Box p={4}>
                <Text fontWeight="bold">Product Name</Text>
                <Text fontSize="sm">Description of the product goes here...</Text>
                <Text fontSize="sm" color="tomato">
                  $19.99
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
