import { InlineSpinner } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../styled";

export const InlineSpinnerPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Inline Spinner</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Medium (Default)</ComponentVariant>
        
            <InlineSpinner></InlineSpinner>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Small</ComponentVariant>
        
          <HStack>
            <InlineSpinner size='small'></InlineSpinner>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
