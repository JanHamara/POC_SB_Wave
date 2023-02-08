import { HelperText, Input } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentInvertedBackdrop,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../styled";

export const HelperTextPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>HelperText</ComponentHeader>
      </ComponentHeaderWrapper>
      <HStack>
        <VStack>
          <ComponentVariant>Info (Default)</ComponentVariant>

          <VStack>
            <Input label="Some input"></Input>
            <HelperText variant="info" mt={1}>
              Default informational helper text
            </HelperText>
          </VStack>

          <ComponentVariant mt={4}>Info | Inverted</ComponentVariant>

          <ComponentInvertedBackdrop>
            <VStack>
              <Input label="Some input" inverted></Input>
              <HelperText mt={1} inverted>
                Default informational helper text
              </HelperText>
            </VStack>
          </ComponentInvertedBackdrop>
        </VStack>

        <VStack>
          <ComponentVariant>Danger</ComponentVariant>

          <VStack>
            <Input label="Some input"></Input>
            <HelperText variant="danger" mt={1}>
              Danger / error indicating helper text
            </HelperText>
          </VStack>

          <ComponentVariant mt={4}>Danger | Inverted</ComponentVariant>

          <ComponentInvertedBackdrop>
            <VStack>
              <Input label="Some input" inverted></Input>
              <HelperText mt={1} variant='danger' inverted>
                Danger / error indicating helper text
              </HelperText>
            </VStack>
          </ComponentInvertedBackdrop>
        </VStack>
      </HStack>
    </VStack>
  );
};
