import { useState } from "react"
import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Text,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Icon,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react"
import { FaCheck, FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom"

const Main2 = () => {
  const [isJoining, setIsJoining] = useState(false)
  const toast = useToast()

  const handleJoinNow = () => {
    setIsJoining(true)
    setTimeout(() => {
      setIsJoining(false)
      toast({
        title: "Welcome to the Community!",
        description:
          "Please fill the form to join the Mindfulness & Clarity learning community.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    }, 2000)
  }

  const learningTopics = [
    {
      title: "Mastering Mindfulness",
      description:
        "Learn how to stay present, reduce stress, and build emotional intelligence through mindfulness.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Overcoming Overthinking & Anxiety",
      description:
        "Understand the root of mental turbulence and use proven frameworks to overcome anxiety and stress.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Developing Self-Awareness",
      description:
        "Self-awareness is the cornerstone of personal transformation. Learn practical tools to cultivate it.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Emotional Resilience Training",
      description:
        "Bounce back from setbacks and navigate emotions with stability and grace.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "The Art of Conscious Living",
      description:
        "Design a lifestyle that aligns with your values and helps you thrive mentally and emotionally.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Building Focus & Mental Clarity",
      description:
        "Learn tools and techniques to declutter your mind and boost focus in the age of distraction.",
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  return (
    <Box bg="gray.900" color="white" minH="100vh">
      {/* Hero Section */}
      <Container maxW="7xl" py={20}>
        <Flex direction={{ base: "column", lg: "row" }} align="center" gap={12}>
          <VStack align="start" flex="1" spacing={6}>
            <Text fontSize="lg" color="gray.300">
              Join The #1 Community For Mindfulness & Clarity
            </Text>
            <Heading size="2xl" lineHeight="1.2">
              Gain Clarity and Calm through{" "}
              <Text as="span" color="green.400">
                Mindfulness & Self-Awareness
              </Text>{" "}
              by joining our Community
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="500px">
              Join our community and get access to "MINDFULNESS - Your Inner Clarity Blueprint" course, Weekly Workshops, and exclusive 1-on-1 clarity sessions to help you lead a balanced, meaningful life.
            </Text>
            <Button
              size="lg"
              bgGradient="linear(to-r, green.400, blue.500)"
              color="white"
              px={12}
              py={6}
              fontSize="xl"
              fontWeight="bold"
              _hover={{
                bgGradient: "linear(to-r, green.500, blue.600)",
                transform: "translateY(-2px)",
              }}
              onClick={handleJoinNow}
              isLoading={isJoining}
              loadingText="Joining..."
            >
              <Link to="/register">JOIN NOW</Link>
            </Button>
          </VStack>
          <Box flex="1" position="relative">
            <Box
              bg="blue.800"
              borderRadius="xl"
              overflow="hidden"
              position="relative"
              cursor="pointer"
              _hover={{ transform: "scale(1.02)" }}
              transition="transform 0.3s"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mindfulness Practice"
                w="100%"
                h="400px"
                objectFit="cover"
              />
              <Flex
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                align="center"
                justify="center"
                bg="blackAlpha.400"
              >
                <Box
                  bg="whiteAlpha.900"
                  borderRadius="full"
                  p={4}
                  _hover={{ bg: "white", transform: "scale(1.1)" }}
                  transition="all 0.3s"
                >
                  <Icon as={FaPlay} boxSize={8} color="gray.800" />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Container>

      {/* Learning Topics Section */}
      <Container maxW="7xl" py={20}>
        <VStack spacing={12}>
          <Heading size="xl" textAlign="center">
            What are you going to{" "}
            <Text as="span" color="green.400">
              learn?
            </Text>
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            {learningTopics.map((topic, index) => (
              <Card key={index} bg="gray.800" border="1px" borderColor="gray.700">
                <CardBody>
                  <Flex gap={4}>
                    <VStack align="start" flex="1" spacing={3}>
                      <Heading size="md" color="green.400">
                        {topic.title}
                      </Heading>
                      <Text color="gray.300" fontSize="sm">
                        {topic.description}
                      </Text>
                    </VStack>
                    <Image
                      src={topic.image || "/placeholder.svg"}
                      alt={topic.title}
                      w="120px"
                      h="80px"
                      objectFit="cover"
                      borderRadius="md"
                    />
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Main2
