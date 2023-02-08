import { Label } from "@freenow/wave";
import styled from "styled-components";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../styled";

const FitContentLabel = styled(Label)`
  width: fit-content;
`;

export const LabelPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Label</ComponentHeader>
      </ComponentHeaderWrapper>

      <HStack>
        <VStack mr={2}>
          <VStack>
            <ComponentVariant>Default</ComponentVariant>
            <FitContentLabel>Label</FitContentLabel>
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Info</ComponentVariant>
            <FitContentLabel variant="info">Information</FitContentLabel>
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Success</ComponentVariant>
            <FitContentLabel variant="success">Success</FitContentLabel>
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Warning</ComponentVariant>
            <FitContentLabel variant="warning">Warning</FitContentLabel>
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Danger</ComponentVariant>
            <FitContentLabel variant="danger">Danger</FitContentLabel>
          </VStack>
        </VStack>

        <VStack ml={2}>
          <VStack>
            <ComponentVariant>Default | Filled</ComponentVariant>
            <FitContentLabel filled>Label</FitContentLabel>
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Info | Filled</ComponentVariant>
            <FitContentLabel variant="info" filled>Information</FitContentLabel>
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Success | Filled</ComponentVariant>
            <FitContentLabel variant="success" filled>Success</FitContentLabel>
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Warning | Filled</ComponentVariant>
            <FitContentLabel variant="warning" filled>Warning</FitContentLabel>
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Danger | Filled</ComponentVariant>
            <FitContentLabel variant="danger" filled>Danger</FitContentLabel>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
