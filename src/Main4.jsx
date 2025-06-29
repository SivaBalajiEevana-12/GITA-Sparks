import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  Card,
  CardBody,
  Icon,
  Flex,
  Link,
  extendTheme,
} from "@chakra-ui/react"
import { FaUsers, FaLightbulb, FaChartLine, FaDollarSign, FaSearch, FaBrain } from "react-icons/fa"

// Custom theme with gradient backgrounds
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
      },
    },
  },
})

// FAQ Component
const FAQSection = () => {
  const faqs = [
    {
      question: "Who is this webinar for?",
      answer: "Working Professional, Businessperson, Creators, Influencers, Homemakers, Students, Every Sincere Seeker",
    },
    {
      question: "Will you share the recording?",
      answer: "We're sorry, but recording of the webinar will not be provided",
    },
    {
      question: "How can I learn more about the Bhagavad Gita?",
      answer:
        "After the webinar, we will share the details of our regular programs for systematic learning of the Bhagavad Gita",
    },
    {
      question: "How can I contact you for further queries?",
      answer: (
        <Text>
          For any further questions or inquiries, please contact{" "}
          <Link href="mailto:srilaprabhupadaworld@gmail.com" color="white" textDecoration="underline">
            srilaprabhupadaworld@gmail.com
          </Link>
        </Text>
      ),
    },
  ]

  return (
    <Box py={16} px={4}>
      <Container maxW="6xl">
        <Heading as="h2" size="2xl" textAlign="center" color="white" mb={12}>
          FAQ
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {faqs.map((faq, index) => (
            <VStack key={index} align="start" spacing={4}>
              <Heading as="h3" size="lg" color="white">
                {faq.question}
              </Heading>
              <Text color="white" fontSize="md" lineHeight="1.6">
                {faq.answer}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

// Feature Cards Component
const FeatureCards = () => {
  const features = [
    {
      icon: FaUsers,
      title: "Looking for a like minded spiritual community",
      color: "pink.400",
    },
    {
      icon: FaLightbulb,
      title: "Wish to make rapid spiritual advancement",
      color: "pink.400",
    },
    {
      icon: FaChartLine,
      title: "Want to practice spirituality without giving up your work",
      color: "pink.400",
    },
    {
      icon: FaDollarSign,
      title: "Feeling depression and anxieties",
      color: "purple.400",
    },
    {
      icon: FaSearch,
      title: "Feeling lack of satisfaction despite being successful",
      color: "blue.400",
    },
    {
      icon: FaBrain,
      title: "Unable to keep your mind focussed",
      color: "blue.600",
    },
  ]

  return (
    <Box py={16} px={4}>
      <Container maxW="6xl">
        <Heading as="h2" size="xl" textAlign="center" color="white" mb={2}>
          Attend this webinar
        </Heading>
        <Text textAlign="center" color="white" mb={12} fontSize="lg">
          if you relate to one of the following
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={12}>
          {features.map((feature, index) => (
            <Card key={index} bg="white" borderRadius="xl" p={6} h="200px">
              <CardBody>
                <VStack spacing={4} align="start" h="full">
                  <Icon as={feature.icon} boxSize={12} color={feature.color} />
                  <Text fontSize="lg" fontWeight="bold" color="gray.800" lineHeight="1.4">
                    {feature.title}
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* Registration CTA */}
        <Box bg="rgba(0,0,0,0.3)" borderRadius="2xl" p={8}>
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={4}>
            <Heading as="h3" size="lg" color="white">
              Limited seats...register soon!
            </Heading>
            <Button
              size="lg"
              bg="white"
              color="gray.800"
              px={8}
              py={6}
              borderRadius="xl"
              fontWeight="bold"
              _hover={{ bg: "gray.100" }}
            >
              Register today for FREE
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

// Learning Sections Component
const LearningSections = () => {
  return (
    <Box bg="white" py={16} px={4}>
      <Container maxW="6xl">
        <Heading as="h2" size="2xl" textAlign="center" color="gray.800" mb={16}>
          What you will learn?
        </Heading>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} mb={16}>
          {/* Three Secrets */}
          <VStack align="start" spacing={6}>
            <Heading as="h3" size="4xl" color="gray.800">
              1
            </Heading>
            <Heading as="h4" size="xl" color="gray.800">
              Three Secrets
            </Heading>
            <Text fontSize="lg" fontWeight="bold" color="gray.700">
              3 secrets of unlocking the mystery of the Gita
            </Text>
            <Text color="gray.600" lineHeight="1.6">
              Learn the three step action plan as taught by Lord Krishna himself in the Bhagavad Gita to unlock, realize
              and practically apply the knowledge of Bhagavad Gita in one's daily life
            </Text>
          </VStack>

          {/* Three Mistakes */}
          <VStack align="start" spacing={6}>
            <Heading as="h3" size="4xl" color="gray.800">
              2
            </Heading>
            <Heading as="h4" size="xl" color="gray.800">
              Three mistakes
            </Heading>
            <Text fontSize="lg" fontWeight="bold" color="gray.700">
              3 big mistakes people do in understanding Gita
            </Text>
            <Text color="gray.600" lineHeight="1.6">
              In a world full of restlessness, dissatisfaction and anxieties, where the successful are even more
              depressed, one must learn to apply the simple happiness formula mentioned in the Vedas
            </Text>
          </VStack>
        </SimpleGrid>

        {/* Three Steps Section */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} mb={16}>
          <VStack align="start" spacing={6}>
            <Heading as="h3" size="4xl" color="gray.800">
              3
            </Heading>
            <Heading as="h4" size="xl" color="gray.800">
              Three Steps
            </Heading>
            <Text fontSize="lg" fontWeight="bold" color="gray.700">
              Three step action plan
            </Text>
            <Text color="gray.600" lineHeight="1.6">
              Theoretical Webinars are of little use unless they enable the audience to take solid action plan. We will
              give you precise actions steps to help you implement the Bhagavad Gita in your life
            </Text>
          </VStack>

          {/* Bonus Section */}
          <VStack align="start" spacing={6}>
            <Heading as="h3" size="4xl" color="gray.800">
              4
            </Heading>
            <Heading as="h4" size="xl" color="gray.800">
              Bonus : Mantra Meditation
            </Heading>
            <Text fontSize="lg" fontWeight="bold" color="gray.700">
              Remain in a meditative state throughout the day
            </Text>
            <Text color="gray.600" lineHeight="1.6">
              Learn the secret of remaining in a blissful meditative state 24x7 in all your activities of eating,
              working, learning and with practice...even while sleeping!
            </Text>
          </VStack>
        </SimpleGrid>

        {/* Final Registration CTA */}
        <Box bg="rgba(0,0,0,0.1)" borderRadius="2xl" p={8}>
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={4}>
            <Heading as="h3" size="lg" color="gray.800">
              Limited seats...register soon!
            </Heading>
            <Button
              size="lg"
              bg="gray.800"
              color="white"
              px={8}
              py={6}
              borderRadius="xl"
              fontWeight="bold"
              _hover={{ bg: "gray.700" }}
            >
              Register today for FREE
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

// Main App Component
function Main4() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh">
        <FAQSection />
        <FeatureCards />
        <LearningSections />
      </Box>
    </ChakraProvider>
  )
}

export default Main4
