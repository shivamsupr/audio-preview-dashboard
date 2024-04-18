// Complete the Index page component here
// Use chakra-ui
import { Box, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import americanVoiceLibrary from '../elevenlabs-american-voice-library.json';

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Voice Samples Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {americanVoiceLibrary.map((voice, index) => (
          <VStack key={index} p={5} boxShadow="md" borderRadius="lg">
            <Text>{voice.voice_id}</Text>
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
