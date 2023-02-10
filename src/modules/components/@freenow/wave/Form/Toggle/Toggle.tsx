import { Headline } from "@freenow/wave";

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
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <Headline>Toggle</Headline>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>- Variant</ComponentVariant>
          <HStack>
            <Headline>Toggle</Headline>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
