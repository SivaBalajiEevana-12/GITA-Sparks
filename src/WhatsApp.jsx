import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  Image,
  VStack,
  List,
  ListItem,
  ListIcon,
  Center,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { FaWhatsapp, FaHeart } from "react-icons/fa";
import image from "./image.png"
import { Link } from "react-router-dom";

const WhatsApp = () => {
  return (
    <Box bg="gray.50" minH="100vh" py={10} px={4}>
      {/* <Center mb={8}>
        <Image
          src="/logo.png" // Replace with your actual path
          alt="Hare Krishna Logo"
          boxSize="150px"
          objectFit="contain"
        />
      </Center> */}
       <Box textAlign="center" mt={5} mb={5}>
    <Heading color="green.500">🎉 Payment Successful!</Heading>
    <Text mt={4}>Thank you for registering for GITA Sparks. See you soon!</Text>
    {/* <Button as={Link} to="/" mt={6} colorScheme="blue">
      Back to Home
    </Button> */}
  </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="flex-start"
        justify="space-between"
        gap={10}
        maxW="1000px"
        mx="auto"
        px={4}
      >
        {/* Left: Content */}
        <Box flex="1">
          <Heading
            as="h2"
            size="lg"
            mb={3}
            color="green.700"
            fontWeight="bold"
          >
            Join the Gita Sparks WhatsApp Group
          </Heading>
          <Text fontSize="md" color="gray.700" mb={6}>
            Stay connected with daily inspiration, mindfulness guidance, and
            spiritual clarity — right on your WhatsApp.
          </Text>

          <Box mb={4}>
            <Text fontWeight="bold" mb={2}>
              🌟 What You'll Receive:
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Daily Bhagavad Gita teachings
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Practical wisdom for modern life
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Meditation & Mindfulness tools
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Direct updates & reminders
              </ListItem>
            </List>
          </Box>

          <Button
            colorScheme="green"
            size="lg"
            leftIcon={<FaWhatsapp />}
            mt={4}
            as="a"
            href="https://chat.whatsapp.com/BgKZOANIvI0JSuBWStpyf2" // Replace with your WhatsApp link
            target="_blank"
          >
            Join WhatsApp Now
          </Button>
        </Box>

        {/* Right: Logo or Image */}
        <Box flexShrink={0}>
          <Image
            src={image}// Replace with your actual path
            alt="Hare Krishna Movement"
            maxW="250px"
            borderRadius="md"
            boxShadow="lg"
          />
        </Box>
      </Flex>

      {/* Thank You Section */}
      <VStack mt={16} spacing={4} textAlign="center">
        <Icon as={FaHeart} w={6} h={6} color="red.400" />
        <Heading as="h3" size="md" color="gray.700">
          Thank You for Being a Part of This Journey 🙏
        </Heading>
        <Text maxW="600px" fontSize="sm" color="gray.600">
          Your willingness to explore mindfulness and the teachings of the
          Bhagavad Gita is truly appreciated. We’re excited to have you in our
          growing spiritual community. Let’s grow together!
        </Text>
      </VStack>
    </Box>
  );
};

export default WhatsApp;
