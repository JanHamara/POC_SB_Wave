import { Box, HelperText, RadioButton } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../../styled";

export const RadioButtonPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>RadioButton</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <ComponentVariant>Default</ComponentVariant>

        <HStack>
          <RadioButton name="example" label="Taxi" />
          <RadioButton name="example" label="Scooter" />
          <RadioButton name="example" label="Bike" />
        </HStack>
      </VStack>

      <VStack mt={4}>
        <ComponentVariant>Error</ComponentVariant>
        <HStack>
          <RadioButton name="example" label="Taxi" error />
          <RadioButton name="example" label="Scooter" error />
          <RadioButton name="example" label="Bike" error />
        </HStack>
      </VStack>

      <VStack mt={4}>
        <ComponentVariant>Disabled</ComponentVariant>
        <HStack>
          <RadioButton name="example" label="Taxi" disabled />
          <RadioButton name="example" label="Scooter" disabled />
          <RadioButton name="example" label="Bike" disabled />
        </HStack>
      </VStack>

      <Box mt={4}>
        <HelperText variant="danger">
          We don't have inverted variants for RadioButton
        </HelperText>
      </Box>
    </VStack>
  );
};
