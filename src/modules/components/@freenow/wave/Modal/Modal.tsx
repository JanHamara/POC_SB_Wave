import { Box, Button, Headline, Modal, Text, TextButton } from "@freenow/wave";
import { useState } from "react";
import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  VStack,
} from "../../../styled";

export const ModalPreview = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isFullscreenEnabled, setIsFullscreenEnabled] = useState(false);
  const [IsNonDismissableEnabled, setIsNonDismissableEnabled] = useState(false);

  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Modal</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <Box width="200px" mb={2}>
            <Button
              size="small"
              onClick={() => setIsEnabled(true)}
              variant="secondary"
            >
              {isEnabled ? "Close modal" : "Open modal"}
            </Button>
          </Box>

          {isEnabled && (
            <Modal onClose={() => setIsEnabled(false)}>
              <Headline as="h2">Add Note</Headline>
              <Text as="p" my={3}>
                Ensure that all participants are aware of the change.
              </Text>
              <Button onClick={() => setIsEnabled(false)}>Add Note</Button>
              <TextButton onClick={() => setIsEnabled(false)}>
                Cancel
              </TextButton>
            </Modal>
          )}
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Full-screen</ComponentVariant>

          <Box width="200px" mb={2}>
            <Button
              size="small"
              onClick={() => setIsFullscreenEnabled(true)}
              variant="secondary"
            >
              {isEnabled ? "Close modal" : "Open modal"}
            </Button>
          </Box>

          {isFullscreenEnabled && (
            <Modal onClose={() => setIsFullscreenEnabled(false)} fullscreen>
              <Headline as="h2">Add Note</Headline>
              <Text as="p" my={3}>
                Ensure that all participants are aware of the change.
              </Text>
              <Button onClick={() => setIsFullscreenEnabled(false)}>
                Add Note
              </Button>
              <TextButton onClick={() => setIsFullscreenEnabled(false)}>
                Cancel
              </TextButton>
            </Modal>
          )}
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Non-dismissable</ComponentVariant>

          <Box width="200px" mb={2}>
            <Button
              size="small"
              onClick={() => setIsNonDismissableEnabled(true)}
              variant="secondary"
            >
              {isEnabled ? "Close modal" : "Open modal"}
            </Button>
          </Box>

          {IsNonDismissableEnabled && (
            <Modal onClose={() => setIsNonDismissableEnabled(false)} dismissible={false}>
              <Headline as="h2">Add Note</Headline>
              <Text as="p" my={3}>
                Ensure that all participants are aware of the change.
              </Text>
              <Button onClick={() => setIsNonDismissableEnabled(false)}>
                Add Note
              </Button>
              <TextButton onClick={() => setIsNonDismissableEnabled(false)}>
                Cancel
              </TextButton>
            </Modal>
          )}
        </VStack>
      </VStack>
    </VStack>
  );
};
