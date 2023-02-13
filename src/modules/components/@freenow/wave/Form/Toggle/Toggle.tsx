import { Box, HelperText, Toggle } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../../styled";

export const TogglePreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Toggle</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <ComponentVariant>Default</ComponentVariant>

        <HStack>
          <Toggle />
          <Toggle checked />
        </HStack>
      </VStack>

      <VStack mt={4}>
        <ComponentVariant>Error</ComponentVariant>
        <HStack>
          <Toggle error />
          <Toggle checked error />
        </HStack>
      </VStack>

      <VStack mt={4}>
        <ComponentVariant>Disabled</ComponentVariant>
        <HStack>
          <Toggle disabled />
          <Toggle checked disabled />
        </HStack>
      </VStack>

      <VStack mt={4}>
        <ComponentVariant>With label</ComponentVariant>
        <HStack>
          <Toggle label="Label" />
          <Toggle checked label="Label" />
        </HStack>
      </VStack>

      <Box mt={4}>
        <HelperText variant="danger">
          We don't have inverted variants for Toggle
        </HelperText>
      </Box>
    </VStack>
  );
};
