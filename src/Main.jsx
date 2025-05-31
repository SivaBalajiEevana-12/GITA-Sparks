"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListItem,
  ListIcon,
  useToast,
  FormErrorMessage,
  Divider,
  Badge,
  Icon,
} from "@chakra-ui/react"
import { FaCircle, FaEnvelope, FaPhone, FaCreditCard } from "react-icons/fa"
import { SiVisa, SiMastercard } from "react-icons/si"
import { useNavigate } from 'react-router-dom';
import images from "./logo.jpg"

const Main = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    whatsappNumber: "",
    email: "",
    gender: "",
    dayScholarOrHostler: "",
    areaOfResidence: "",
    collegeName: "",
    courseAndYear: "",
    amount:"99.00"
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required"
    } else if (!/^\d{10}$/.test(formData.whatsappNumber.replace(/\D/g, ""))) {
      newErrors.whatsappNumber = "Please enter a valid 10-digit phone number"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.gender) {
      newErrors.gender = "Please select gender"
    }

    if (!formData.dayScholarOrHostler) {
      newErrors.dayScholarOrHostler = "Please select day scholar or hostler"
    }

    if (formData.dayScholarOrHostler === "dayscholar" && !formData.areaOfResidence.trim()) {
      newErrors.areaOfResidence = "Area of residence is required for day scholars"
    }

    if (!formData.collegeName.trim()) {
      newErrors.collegeName = "College name is required"
    }

    if (!formData.courseAndYear.trim()) {
      newErrors.courseAndYear = "Course and year is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }
  const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true)
      return
    }
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}


const handleSubmit = async () => {
  if (!validateForm()) return
  console.log("Form data:", formData)
  setIsSubmitting(true)
  const scriptLoaded = await loadRazorpayScript()
  if (!scriptLoaded) {
    alert("Failed to load Razorpay SDK. Please try again.")
    return
  }

  try {
    const res = await fetch("https://razor-pay-server-8un7.onrender.com/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 9900 }),
    })
    const orderData = await res.json()

    const options = {
      key: "rzp_test_kC99JKxEFoZUns",
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Hare Krishna Movement India",
      description: "GITA Sparks Workshop",
      order_id: orderData.id,
      handler: async function (response) {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response
        const verifyRes = await fetch("https://razor-pay-server-8un7.onrender.com/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            formData, // Optionally send user data with payment verification
          }),
        })
        const verifyData = await verifyRes.json()
        if (verifyData.status === "success") {
          alert("✅ Payment successful and verified!")
        } else {
          alert("❌ Payment failed verification.")
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.whatsapp,
      },
      theme: { color: "#2563eb" },
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
    setIsSubmitting(false);
    setFormData({
         name: "",
    whatsappNumber: "",
    email: "",
    gender: "",
    dayScholarOrHostler: "",
    areaOfResidence: "",
    collegeName: "",
    courseAndYear: "",
    amount:"99.00"
    })
    navigate('/');
  } catch (error) {
    console.error("Payment error:", error)
    alert("Something went wrong during payment initiation.")
  }
}


  const workshopTopics = [
   
  ]

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="7xl">
        {/* Header */}
        <Flex align="center" mb={6} bg="white" p={4} borderRadius="lg" shadow="sm">
          <Box
            w="50px"
            h="50px"
            bg="blue.500"
            borderRadius="md"
            mr={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" fontWeight="bold" fontSize="sm">
              HKMI
            </Text>
          </Box>
          <Text fontSize="xl" fontWeight="semibold" color="blue.600">
            Hare Krishna Movement India
          </Text>
        </Flex>

        <Flex direction={{ base: "column", lg: "row" }} gap={8}>
          {/* Left Column - Workshop Details */}
          <Box flex="1">
            <Card>
              <CardHeader>
                <Heading size="lg" color="blue.600" mb={2}>
                  GITA Sparks - Transformative Summer
                </Heading>
                <Divider />
              </CardHeader>
              <CardBody>
                {/* Workshop Banner */}
                <Box mb={6}>
                  <Image src={images} alt="GITA Sparks Workshop Banner" w="100%" borderRadius="md" />
                </Box>

                {/* Workshop Details */}
                <VStack align="start" spacing={4} mb={6}>
                  <Box>
                    <Text fontSize="lg" fontWeight="semibold" color="blue.600" mb={2}>
                      
                    </Text>
                    <List spacing={1}>
                      {workshopTopics.map((topic, index) => (
                        <ListItem key={index} fontSize="sm">
                          <ListIcon as={FaCircle} color="blue.500" boxSize={2} />
                          {topic}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </VStack>

                {/* Contact Information */}
                <Box bg="gray.50" p={4} borderRadius="md">
                  <Text fontSize="lg" fontWeight="semibold" mb={3}>
                    Contact Us:
                  </Text>
                  <VStack align="start" spacing={2}>
                    <HStack>
                      <Icon as={FaEnvelope} color="blue.500" />
                      <Text fontSize="sm">adkd@hkmvizag.org</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaPhone} color="blue.500" />
                      <Text fontSize="sm">9441567909</Text>
                    </HStack>
                  </VStack>
                </Box>

                {/* Terms & Conditions */}
                <Box mt={6} p={4} bg="yellow.50" borderRadius="md" borderLeft="4px" borderColor="yellow.400">
                  <Text fontSize="sm" fontWeight="semibold" mb={2}>
                    Terms & Conditions:
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    You agree to share information entered on this page with Hare Krishna Movement India (owner of this
                    page) and Razorpay, adhering to applicable laws.
                  </Text>
                </Box>
              </CardBody>
            </Card>
          </Box>

          {/* Right Column - Payment Form */}
          <Box w={{ base: "100%", lg: "400px" }}>
            <Card>
              <CardHeader>
                <Heading size="md" color="blue.600">
                  Payment Details
                </Heading>
                <Divider mt={2} />
              </CardHeader>
              <CardBody>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!errors.name}>
                    <FormLabel fontSize="sm">Name</FormLabel>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      size="sm"
                    />
                    <FormErrorMessage fontSize="xs">{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.whatsappNumber}>
                    <FormLabel fontSize="sm">WhatsApp Number</FormLabel>
                    <Input
                      value={formData.whatsappNumber}
                      onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                      placeholder="Enter WhatsApp number"
                      size="sm"
                    />
                    <FormErrorMessage fontSize="xs">{errors.whatsappNumber}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel fontSize="sm">Email</FormLabel>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      size="sm"
                    />
                    <FormErrorMessage fontSize="xs">{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.gender}>
                    <FormLabel fontSize="sm">Gender</FormLabel>
                    <Select
                      value={formData.gender}
                      onChange={(e) => handleInputChange("gender", e.target.value)}
                      placeholder="--Select--"
                      size="sm"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Select>
                    <FormErrorMessage fontSize="xs">{errors.gender}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.dayScholarOrHostler}>
                    <FormLabel fontSize="sm">DayScholar or Hostler</FormLabel>
                    <Select
                      value={formData.dayScholarOrHostler}
                      onChange={(e) => handleInputChange("dayScholarOrHostler", e.target.value)}
                      placeholder="--Select--"
                      size="sm"
                    >
                      <option value="dayscholar">Day Scholar</option>
                      <option value="hostler">Hostler</option>
                    </Select>
                    <FormErrorMessage fontSize="xs">{errors.dayScholarOrHostler}</FormErrorMessage>
                  </FormControl>

                  {formData.dayScholarOrHostler === "dayscholar" && (
                    <FormControl isInvalid={!!errors.areaOfResidence}>
                      <FormLabel fontSize="sm">Area of Residence if Day Scholar</FormLabel>
                      <Input
                        value={formData.areaOfResidence}
                        onChange={(e) => handleInputChange("areaOfResidence", e.target.value)}
                        placeholder="Enter area of residence"
                        size="sm"
                      />
                      <FormErrorMessage fontSize="xs">{errors.areaOfResidence}</FormErrorMessage>
                    </FormControl>
                  )}

                  <FormControl isInvalid={!!errors.collegeName}>
                    <FormLabel fontSize="sm">College Name</FormLabel>
                    <Input
                      value={formData.collegeName}
                      onChange={(e) => handleInputChange("collegeName", e.target.value)}
                      placeholder="Enter college name"
                      size="sm"
                    />
                    <FormErrorMessage fontSize="xs">{errors.collegeName}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.courseAndYear}>
                    <FormLabel fontSize="sm">Course and Year</FormLabel>
                    <Input
                      value={formData.courseAndYear}
                      onChange={(e) => handleInputChange("courseAndYear", e.target.value)}
                      placeholder="e.g., B.Tech 2nd Year"
                      size="sm"
                    />
                    <FormErrorMessage fontSize="xs">{errors.courseAndYear}</FormErrorMessage>
                  </FormControl>

                  <Divider />

                  {/* Amount Section */}
                  <Flex justify="space-between" w="100%" align="center">
                    <Text fontSize="sm" fontWeight="semibold">
                      Amount
                    </Text>
                    <Badge colorScheme="green" fontSize="md" p={2}>
                      ₹99.00
                    </Badge>
                  </Flex>

                  {/* Payment Methods */}
                  <Box w="100%">
                    <Text fontSize="xs" color="gray.600" mb={2}>
                      Accepted Payment Methods:
                    </Text>
                    <HStack spacing={2} justify="center">
                      <Text fontSize="xs" color="blue.600" fontWeight="bold">
                        UPI
                      </Text>
                      <Icon as={SiVisa} color="blue.600" />
                      <Icon as={SiMastercard} color="red.500" />
                      <Text fontSize="xs" color="blue.600" fontWeight="bold">
                        RuPay
                      </Text>
                    </HStack>
                  </Box>

                  {/* Pay Button */}
                  <Button
                    colorScheme="blue"
                    size="lg"
                    w="100%"
                    leftIcon={<FaCreditCard />}
                    onClick={handleSubmit}
                    isLoading={isSubmitting}
                    loadingText="Processing..."
                  >
                    Pay ₹{formData.amount}
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Main
