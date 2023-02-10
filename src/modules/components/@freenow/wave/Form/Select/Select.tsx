import { Headline } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../../styled";

export const SelectPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Select</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <Headline>Select</Headline>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>- Variant</ComponentVariant>
          <HStack>
            <Headline>Select</Headline>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
