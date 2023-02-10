import { Box, Divider } from "@freenow/wave";
import styled from "styled-components";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../styled";

const SectionBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333333;
  padding: 1rem 1rem;
`

export const DividerPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Divider</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Horizontal</ComponentVariant>
        
          <VStack>
            <SectionBox>Section 1</SectionBox>
            <Divider></Divider>
            <SectionBox>Section 2</SectionBox>
          </VStack>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Vertical</ComponentVariant>
        
          <HStack>
            <SectionBox>Section 1</SectionBox>
            <Divider vertical></Divider>
            <SectionBox>Section 2</SectionBox>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
