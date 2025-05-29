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

const Main2= () => {
  const [isJoining, setIsJoining] = useState(false)
  const toast = useToast()

  const handleJoinNow = () => {
    setIsJoining(true)
    setTimeout(() => {
      setIsJoining(false)
      toast({
        title: "Welcome to the Community!",
        description: "Please fill the form to join the Bhagavad Gita learning community.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    }, 2000)
  }

  const features = [
    {
      title: "Notes & Multimedia Resources",
      description: "Get just the right and well curated content for systematic spiritual growth",
    },
    {
      title: "Gamified Learning Systems",
      description:
        "Experience rapid spiritual advancement through spiritual trackers, quizzes, leaderboards and rewards",
    },
    {
      title: "Special Festival Invites",
      description: "Celebrate festivals with the community in the beautiful temples of the Hare Krishna Movement",
    },
    {
      title: "Personal Care And Attention",
      description:
        "In the age of automation and AI, we appreciate your individuality and proactively provide personal guidance.",
    },
  ]

  const supportFeatures = [
    {
      title: "Weekly QnA Sessions",
      description: "Get answers to any and every query related to sessions or life in general",
    },
    {
      title: "1on1 Clarity Calls",
      description: "Get all your questions sorted to your full satisfaction by seasoned spiritual practitioners",
    },
    {
      title: "Community Support",
      description: "Gain access to my private exclusive streams and community group today.",
    },
    {
      title: "Active Accountability System",
      description:
        "A key factor for systematic growth in any field. Experience one of the best accountability ecosystems.",
    },
  ]

  const bonuses = [
    {
      title: "Residential Training Programs",
      description: "Be a privileged participant in the exclusive Residential Trainings meant only for the community.",
    },
    {
      title: "Trips & Pilgrimages",
      description: "Get the most powerful spiritual experience in the association of devotees",
    },
    {
      title: "Notes & Multimedia Resources",
      description: "Get just the right and well curated content for systematic spiritual growth",
    },
    {
      title: "Gamified Learning Systems",
      description:
        "Experience rapid spiritual advancement through spiritual trackers, quizzes, leaderboards and rewards",
    },
  ]

  const courses = [
    {
      title: "Applied Gita Blueprint Course",
      description: "Build a solid foundation of spiritual life by getting absolute clarity of the basics",
    },
    {
      title: "Weekly Bhagavad Gita Webinars",
      description: "To keep your spiritual momentum intact and give deep insights into the subject matter.",
    },
  ]

  const learningTopics = [
    {
      title: "Practical Implementation of the Bhagavad Gita",
      description:
        "Putting 1 point of knowledge into action is more powerful than learning a 1000 and implementing none.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "The Science of Self Realization",
      description:
        "The greatest of all sciences is the Science of Self, knowing which, one transcends all the miseries of life.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "How to win over Anxieties and Depression?",
      description:
        "Anxieties and Depression are created only because of misidentifying oneself with temporary body and mind. Let's rise above.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "How to defeat Chronic Addictions ?",
      description:
        "When one relishes higher taste of spiritual life, one automatically gives up low grade pleasures of material addictions.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Art of Remaining Peaceful Always",
      description: "Learn the Peace Formula as explained by Lord Krishna in the fifth chapter of the Bhagavad Gita.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "How to Tackle Lust and Anger?",
      description:
        "Ordinarily insurmountable, Lust and Anger can easily be controlled by a devotee who develops Love of God in one's life.",
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  const lifestyleCards = [
    {
      title: "Ideal Lifestyle For Swift Spiritual Progress",
      description:
        "This body is a machine strictly governed by the laws of nature. Learn the scientific principles of healthy living and food habits.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "Unique Process Of Mantra Meditation",
      description:
        "Explore the most powerful and practical meditation recommended in all the scriptures for this age of Kaliyuga.",
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
              Join The #1 Community For Learning Bhagavad Gita
            </Text>
            <Heading size="2xl" lineHeight="1.2">
              Master the Real Life application of{" "}
              <Text as="span" color="green.400">
                Bhagavad Gita
              </Text>{" "}
              by joining our Community
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="500px">
              Join our community and get access to "JIGYASA-Applied Gita Blueprint" course, Weekly Bhagavad Gita
              Webinars and exclusive 1on1 clarity session to help you embark smoothly on the spiritual path.
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
              <Link to='/register'>JOIN NOW</Link>
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
                alt="Krishna and Arjuna from Bhagavad Gita"
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

      {/* What are you going to learn Section */}
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

      {/* Lifestyle Cards Section */}
      <Container maxW="7xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {lifestyleCards.map((card, index) => (
            <Card key={index} bg="gray.800" border="1px" borderColor="gray.700">
              <CardBody>
                <Flex gap={4}>
                  <VStack align="start" flex="1" spacing={3}>
                    <Heading size="md" color="green.400">
                      {card.title}
                    </Heading>
                    <Text color="gray.300" fontSize="sm">
                      {card.description}
                    </Text>
                  </VStack>
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
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
      </Container>

      {/* Join Now Button */}
      <Container maxW="7xl" py={8}>
        <Flex justify="center">
          <Button
            size="lg"
            bgGradient="linear(to-r, green.400, blue.500)"
            color="white"
            px={20}
            py={6}
            fontSize="xl"
            fontWeight="bold"
            borderRadius="full"
            _hover={{
              bgGradient: "linear(to-r, green.500, blue.600)",
              transform: "translateY(-2px)",
            }}
            onClick={handleJoinNow}
            isLoading={isJoining}
            loadingText="Joining..."
          >
            <Link to='/register'>JOIN NOW</Link>
          </Button>
        </Flex>
      </Container>

      {/* What do you get Section */}
      <Container maxW="7xl" py={20}>
        <VStack spacing={12}>
          <Heading size="xl" textAlign="center">
            What do you get?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            {courses.map((course, index) => (
              <Card key={index} bg="gray.800" border="2px" borderColor="green.400">
                <CardBody>
                  <HStack spacing={3} mb={3}>
                    <Icon as={FaCheck} color="green.400" />
                    <Heading size="md" color="green.400">
                      {course.title}
                    </Heading>
                  </HStack>
                  <Text color="gray.300">{course.description}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Support Features Section */}
      <Container maxW="7xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {supportFeatures.map((feature, index) => (
            <Card key={index} bg="gray.800" border="2px" borderColor="green.400">
              <CardBody>
                <HStack spacing={3} mb={3}>
                  <Icon as={FaCheck} color="green.400" />
                  <Heading size="md" color="green.400">
                    {feature.title}
                  </Heading>
                </HStack>
                <Text color="gray.300">{feature.description}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* Other Added Bonuses Section */}
      <Container maxW="7xl" py={20}>
        <VStack spacing={12}>
          <Heading size="xl" textAlign="center">
            Other added Bonuses..
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            {bonuses.map((bonus, index) => (
              <Card key={index} bg="gray.800" border="1px" borderColor="gray.600" borderStyle="dashed">
                <CardBody>
                  <Heading size="md" color="white" mb={3}>
                    {bonus.title}
                  </Heading>
                  <Text color="gray.300">{bonus.description}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Features Section */}
      <Container maxW="7xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {features.map((feature, index) => (
            <Card key={index} bg="gray.800" border="1px" borderColor="gray.600" borderStyle="dashed">
              <CardBody>
                <Heading size="md" color="white" mb={3}>
                  {feature.title}
                </Heading>
                <Text color="gray.300">{feature.description}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* Final Join Now Button */}
      <Container maxW="7xl" py={20}>
        <Flex justify="center">
          <Button
            size="lg"
            bgGradient="linear(to-r, green.400, blue.500)"
            color="white"
            px={20}
            py={6}
            fontSize="xl"
            fontWeight="bold"
            borderRadius="full"
            _hover={{
              bgGradient: "linear(to-r, green.500, blue.600)",
              transform: "translateY(-2px)",
            }}
            onClick={handleJoinNow}
            isLoading={isJoining}
            loadingText="Joining..."
          >
           <Link to='/register'>JOIN NOW</Link>
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default Main2;
