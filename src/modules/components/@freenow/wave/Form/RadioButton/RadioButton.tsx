import { Headline } from "@freenow/wave";

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
        <ComponentHeader>Tag</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <Headline>RadioButton</Headline>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>- Variant</ComponentVariant>
          <HStack>
            <Headline>RadioButton</Headline>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
