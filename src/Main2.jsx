import { useState } from "react"
import {
  Box,
  Container,
  Flex,
  VStack,
  Text,
  Button,
  Card,
  CardBody,
  Heading,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react"
import { FaPlay } from "react-icons/fa"
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
    { title: "Facing Challenges", description: "Learn how to navigate difficulties with clarity and strength." },
    { title: "Real Identity", description: "Discover your true self beyond labels and roles." },
    { title: "Action for Liberation / Work is Worship", description: "Understand the spiritual value of everyday actions." },
    { title: "Perfect Knowledge", description: "Explore profound truths that guide enlightened living." },
    { title: "Intelligent / Responsible Action", description: "Act with awareness and responsibility in every choice." },
    { title: "Mind Control", description: "Master techniques to control and calm the mind." },
    { title: "Closer to God", description: "Strengthen your spiritual connection and devotion." },
    { title: "Beyond Birth and Death", description: "Understand the cycle of life and the eternal soul." },
    { title: "King of All Knowledge", description: "Unlock the most powerful wisdom for inner growth." },
    { title: "Meditation", description: "Practice meditation to gain peace, clarity, and insight." },
    { title: "Supreme Power", description: "Explore the source of all strength and guidance." },
    { title: "Top Most Yoga System", description: "Learn about the highest form of yoga and union." },
    { title: "Reality of the World", description: "Unveil the truth behind the physical and spiritual world." },
    { title: "Who is Controlling Us?", description: "Investigate the unseen forces influencing our lives." },
    { title: "Matrix: How to Come Out of Illusion?", description: "Break free from mental and material illusions." },
    { title: "Divine and Demonic Qualities", description: "Recognize and cultivate divine attributes within." },
    { title: "Developing Faith", description: "Strengthen belief and trust through knowledge and experience." },
    { title: "Ultimate Knowledge", description: "Reach the pinnacle of wisdom and realization." },
  ]

  return (
    <Box bg="#f7f9fc" color="#1a1a1a" minH="100vh">
      <Container maxW="7xl" py={20}>
        <Flex direction={{ base: "column", lg: "row" }} align="flex-start" gap={12}>
          <VStack align="start" flex="1" spacing={6}>
            <Text fontSize="lg" color="#4a4a4a">
              Join The #1 Community For Mindfulness & Clarity
            </Text>
            <Heading size="2xl" lineHeight="1.2">
              Gain Clarity and Calm through{" "}
              <Text as="span" color="#800000">
                Mindfulness & Self-Awareness
              </Text>{" "}
              by joining our Community
            </Heading>
            <Text fontSize="lg" color="#4a4a4a">
              Join our community and get access to "MINDFULNESS - Your Inner Clarity Blueprint" course, Weekly Workshops, and exclusive 1-on-1 clarity sessions to help you lead a balanced, meaningful life.
            </Text>
            <Link to="/register">
              <Button
                size="lg"
                bg="#007bff"
                color="white"
                px={12}
                py={6}
                fontSize="xl"
                fontWeight="bold"
                _hover={{ bg: "#0069d9", transform: "translateY(-2px)" }}
                onClick={handleJoinNow}
                isLoading={isJoining}
                loadingText="Joining..."
              >
                JOIN NOW
              </Button>
            </Link>
          </VStack>
        </Flex>
      </Container>

      {/* Learning Topics Section */}
      <Container maxW="7xl" py={20}>
        <VStack spacing={12}>
          <Heading size="xl" textAlign="center">
            Topics that will be covered in the{" "}
            <Text as="span" color="#800000">
              Workshop
            </Text>
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            {learningTopics.map((topic, index) => (
              <Card key={index} bg="white" border="1px" borderColor="gray.300">
                <CardBody>
                  <Flex gap={4}>
                    <VStack align="start" flex="1" spacing={3}>
                      <Heading size="md" color="#800000">
                        {topic.title}
                      </Heading>
                      <Text color="#4a4a4a" fontSize="lg">
                        {topic.description}
                      </Text>
                    </VStack>
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Payment Info Section - Before Terms & Conditions */}
        <Box
          bg="white"
          mt={20}
          py={10}
          px={8}
          borderRadius="lg"
          boxShadow="md"
          border="1px solid #e2e8f0"
        >
          <Heading size="lg" mb={4} color="#2c5282">
            Payment Information
          </Heading>
          <Text fontSize="md" color="gray.700" lineHeight="1.9">
            To join our transformative journey toward clarity and mindfulness, please pay a one-time fee of{" "}
            <strong>₹99</strong>. Once registered, you will receive access to exclusive weekly workshops, personalized
            guidance, and our structured self-awareness program.
            <br /><br />
            <strong>After payment, kindly share the following via WhatsApp:</strong>
            <br />
            - Name<br />
            - WhatsApp Number<br />
            - Email ID<br />
            - Gender<br />
            - College<br />
            - Course & Year<br /><br />
            Once your payment is verified, we will add you to our private group where all workshops and interactions happen.
          </Text>

          <Link to='/register'><Button
            colorScheme="blue"
            mt={6}
            size="lg"
            leftIcon={<FaPlay />}
            onClick={handleJoinNow}
            isLoading={isJoining}
            loadingText="Processing..."
          >
            Pay ₹99.00 & Join
          </Button>
          </Link>
        </Box>

        {/* Terms & Conditions Section */}
        <Box bg="#fff7e6" mt={20} py={6} px={4} borderRadius="md">
          <Text fontWeight="bold" color="#1a1a1a" fontSize="xl">
            Terms & Conditions:
          </Text>
          <Text color="#4a4a4a" fontSize="lg">
            You agree to share information entered on this page with Hare Krishna Movement India
            (owner of this page) and Razorpay, adhering to applicable laws.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Main2
