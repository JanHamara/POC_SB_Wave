import { Headline } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../../styled";

export const DatePickerPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>DatePicker</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <Headline>DatePicker</Headline>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>- Variant</ComponentVariant>
          <HStack>
            <Headline>DatePicker</Headline>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
