import { Headline } from "@freenow/wave";

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

          <Headline>Checkbox</Headline>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>- Variant</ComponentVariant>
          <HStack>
            <Headline>Checkbox</Headline>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
