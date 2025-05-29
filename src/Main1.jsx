import {
  Box, Flex, Heading, Text, Stack, Input, Select, Button, Divider, Grid, FormControl,
  FormLabel, Link, Icon, FormErrorMessage
} from "@chakra-ui/react";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function GitaSparksPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    gender: "",
    dayScholarHostler: "",
    areaOfResidence: "",
    collegeName: "",
    courseYear: "",
    amount: "99.00",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^\d{10}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Enter a valid 10-digit number";
    }
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.dayScholarHostler) newErrors.dayScholarHostler = "This field is required";
    if (formData.dayScholarHostler === "dayscholar" && !formData.areaOfResidence.trim()) {
      newErrors.areaOfResidence = "Area is required for Day Scholars";
    }
    if (!formData.collegeName.trim()) newErrors.collegeName = "College name is required";
    if (!formData.courseYear.trim()) newErrors.courseYear = "Course and year is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!validate()) return;

    const res = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 9900 }),
    });

    const orderData = await res.json();
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK. Please try again.");
      return;
    }

    const options = {
      key: "rzp_test_kC99JKxEFoZUns",
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Hare Krishna Movement India",
      description: "GITA Sparks Workshop",
      order_id: orderData.id,
      handler: async function (response) {
        const verifyRes = await fetch("http://localhost:5000/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        const verifyData = await verifyRes.json();
        if (verifyData.status === "success") {
          alert("✅ Payment successful and verified!");
        } else {
          alert("❌ Payment failed verification.");
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.whatsapp,
      },
      theme: { color: "#2563eb" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const topics = [
    "Facing challenges", "Real identity", "Action for liberation/work is worship", "Perfect knowledge",
    "Intelligent / Responsible action", "Mind control", "Closer to God", "Beyond birth and death",
    "King of all knowledge", "Meditation", "Supreme power", "Top most yoga system", "Reality of the world",
    "Who is controlling us?", "Matrix: How to come out of illusion?", "Divine and demonic qualities",
    "Developing faith", "Ultimate knowledge"
  ];

  return (
    <Box bg="gray.50" minH="100vh">
      <Box bg="white" borderBottom="1px" borderColor="gray.200" py={4} px={6} boxShadow="sm">
        <Flex align="center" maxW="7xl" mx="auto" gap={3}>
          <Box bg="blue.600" w={12} h={12} rounded="lg" display="flex" alignItems="center" justifyContent="center">
            <Text color="white" fontWeight="bold" fontSize="lg">HK</Text>
          </Box>
          <Heading size="md" color="gray.800">Hare Krishna Movement India</Heading>
        </Flex>
      </Box>

      <Box maxW="7xl" mx="auto" py={8} px={4}>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
          {/* LEFT SIDE CONTENT */}
          <Box>
            <Heading size="xl" color="blue.800" mb={2}>GITA Sparks - Transformative Summer</Heading>
            <Box bg="blue.600" h={1} w={16} rounded="full" mb={4}></Box>

            <Box bgGradient="linear(to-r, orange.400, yellow.500)" color="white" p={8} rounded="lg" mb={6}>
              <Text fontSize="6xl" textAlign="center">🕉️</Text>
              <Text fontSize="2xl" fontWeight="bold" textAlign="center">GITA SPARK</Text>
              <Text fontSize="lg" textAlign="center">Transformative summer with Bhagavad Gita</Text>
            </Box>

            <Box bg="white" rounded="md" p={6} mb={6} shadow="sm">
              <Heading size="md" mb={4} color="blue.800">Topics that will be covered</Heading>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={3}>
                {topics.map((topic, i) => (
                  <Flex key={i} align="start" gap={2}>
                    <Box mt={2} w={2} h={2} bg="blue.600" rounded="full" flexShrink={0} />
                    <Text color="blue.700" _hover={{ color: "blue.800", cursor: "pointer" }}>{topic}</Text>
                  </Flex>
                ))}
              </Grid>
            </Box>

            <Box bg="white" rounded="md" p={6} mb={6} shadow="sm">
              <Heading size="md" mb={4} color="blue.800">Contact Us</Heading>
              <Stack spacing={3}>
                <Flex align="center" gap={2}>
                  <Icon as={Mail} color="blue.600" />
                  <Link href="mailto:adkd@hkmvizag.org" color="blue.700">adkd@hkmvizag.org</Link>
                </Flex>
                <Flex align="center" gap={2}>
                  <Icon as={Phone} color="blue.600" />
                  <Text color="blue.700">9441567909</Text>
                </Flex>
              </Stack>
            </Box>
          </Box>

          {/* RIGHT SIDE FORM */}
          <Box bg="white" p={6} rounded="md" shadow="lg" position="sticky" top={8}>
            <Heading size="md" mb={4} color="blue.800">Payment Details</Heading>
            <Divider mb={4} />
            <Stack spacing={4}>
              {[
                ["name", "Name", "Enter your name"],
                ["whatsapp", "Whatsapp Number", "Enter WhatsApp number"],
                ["email", "Email", "Enter your email"],
                ["areaOfResidence", "Area of Residence if Day Scholar", "Enter area"],
                ["collegeName", "College Name", "Enter college name"],
                ["courseYear", "Course and Year", "e.g., B.Tech 2nd Year"],
              ].map(([id, label, placeholder]) => (
                <FormControl key={id} isInvalid={errors[id]}>
                  <FormLabel htmlFor={id}>{label}</FormLabel>
                  <Input
                    id={id}
                    placeholder={placeholder}
                    value={formData[id]}
                    onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                  />
                  {errors[id] && <FormErrorMessage>{errors[id]}</FormErrorMessage>}
                </FormControl>
              ))}
              <FormControl isInvalid={errors.gender}>
                <FormLabel>Gender</FormLabel>
                <Select
                  placeholder="Select gender"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
                {errors.gender && <FormErrorMessage>{errors.gender}</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={errors.dayScholarHostler}>
                <FormLabel>DayScholar or Hostler</FormLabel>
                <Select
                  placeholder="Select option"
                  value={formData.dayScholarHostler}
                  onChange={(e) => setFormData({ ...formData, dayScholarHostler: e.target.value })}
                >
                  <option value="dayscholar">Day Scholar</option>
                  <option value="hostler">Hostler</option>
                </Select>
                {errors.dayScholarHostler && <FormErrorMessage>{errors.dayScholarHostler}</FormErrorMessage>}
              </FormControl>
              

              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input isReadOnly value={`₹ ${formData.amount}`} bg="gray.100" />
              </FormControl>

              <Button onClick={handlePayment} colorScheme="blue" size="lg" w="full">
                Pay ₹ 99.00
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
