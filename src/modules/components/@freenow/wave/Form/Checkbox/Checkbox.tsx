import { Box, Checkbox, HelperText } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../../styled";

export const CheckboxPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Checkbox</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <HStack>
            <Checkbox name="example" label="Taxi" />
            <Checkbox name="example" label="Scooter" />
            <Checkbox name="example" label="Bike" />
          </HStack>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Error</ComponentVariant>
          <HStack>
            <Checkbox name="example" label="Taxi" error />
            <Checkbox name="example" label="Scooter" error />
            <Checkbox name="example" label="Bike" error />
          </HStack>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Disabled</ComponentVariant>
          <HStack>
            <Checkbox name="example" label="Taxi" disabled />
            <Checkbox name="example" label="Scooter" disabled />
            <Checkbox name="example" label="Bike" disabled />
          </HStack>
        </VStack>

        <Box mt={4}>
          <HelperText variant="danger">
            We don't have inverted variants for Checkbox
          </HelperText>
        </Box>
      </VStack>
    </VStack>
  );
};
