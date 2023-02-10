import { Box, Button, Headline, Offcanvas, Text, TextButton } from "@freenow/wave";
import { useState } from "react";
import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  VStack,
} from "../../../styled";

export const OffcanvasPreview = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [IsNonDismissableEnabled, setIsNonDismissableEnabled] = useState(false);

  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Offcanvas</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <Box width="200px" mb={4}>
            <Button
              size="small"
              onClick={() => setIsEnabled(true)}
              variant="secondary"
            >
              {isEnabled ? "Close offcanvas" : "Open offcanvas"}
            </Button>
          </Box>

          {isEnabled && (
            <Offcanvas onClose={() => setIsEnabled(false)}>
              <Headline as="h2">Add Note</Headline>
              <Text as="p" my={3}>
                Ensure that all participants are aware of the change.
              </Text>
              <Button onClick={() => setIsEnabled(false)}>Add Note</Button>
              <TextButton onClick={() => setIsEnabled(false)}>
                Cancel
              </TextButton>
            </Offcanvas>
          )}
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Non-dismissible</ComponentVariant>

          <Box width="200px" mb={4}>
            <Button
              size="small"
              onClick={() => setIsNonDismissableEnabled(true)}
              variant="secondary"
            >
              {isEnabled ? "Close non-dismissible" : "Open non-dismissible"}
            </Button>
          </Box>

          {IsNonDismissableEnabled && (
            <Offcanvas onClose={() => setIsNonDismissableEnabled(false)} dismissible={false}>
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
            </Offcanvas>
          )}
        </VStack>
      </VStack>
    </VStack>
  );
};
