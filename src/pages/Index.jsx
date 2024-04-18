// Complete the Index page component here
// Use chakra-ui
import { Box, Heading, Text, VStack, Audio, SimpleGrid } from "@chakra-ui/react";

const voices = [
  {
    name: "Voice 1",
    accent: "British",
    gender: "Female",
    age: "30s",
    descriptive: "Warm and clear",
    use_case: "Narration",
    category: "Audiobooks",
    language: "English",
    description: "Suitable for audiobook narrations and storytelling.",
    preview_url: "https://example.com/audio1.mp3",
    rate: 1.5,
    free_users_allowed: true,
    live_moderation_enabled: false,
    notice_period: 30,
  },
  {
    name: "Voice 2",
    accent: "American",
    gender: "Male",
    age: "40s",
    descriptive: "Deep and authoritative",
    use_case: "E-learning",
    category: "Educational",
    language: "English",
    description: "Ideal for educational content and e-learning modules.",
    preview_url: "https://example.com/audio2.mp3",
    rate: 2.0,
    free_users_allowed: false,
    live_moderation_enabled: true,
    notice_period: 60,
  },
];

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Voice Samples Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {voices.map((voice, index) => (
          <VStack key={index} p={5} boxShadow="md" borderRadius="lg">
            <Text fontWeight="bold">{voice.name || "Unnamed Voice"}</Text>
            <Text>{voice.accent}</Text>
            <Text>{`${voice.gender}, ${voice.age}`}</Text>
            <Text>{voice.descriptive}</Text>
            <Text>{voice.use_case}</Text>
            <Text>{voice.category}</Text>
            <Text>{voice.language}</Text>
            <Text fontSize="sm">{voice.description}</Text>
            <audio controls>
              <source src={voice.preview_url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <Text>Rate: ${voice.rate.toFixed(2)}</Text>
            <Text>Free Users Allowed: {voice.free_users_allowed ? "Yes" : "No"}</Text>
            <Text>Live Moderation: {voice.live_moderation_enabled ? "Enabled" : "Disabled"}</Text>
            <Text>Notice Period: {voice.notice_period} days</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
