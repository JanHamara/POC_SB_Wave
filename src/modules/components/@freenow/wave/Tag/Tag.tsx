import { Tag } from "@freenow/wave";
import styled from "styled-components";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../styled";

const FitContentTag = styled(Tag)`
  width: fit-content;
`;

export const TagPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Tag</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Dismissable (Default)</ComponentVariant>

          <FitContentTag>Filter</FitContentTag>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Non-dismissable</ComponentVariant>
          <HStack>
            <FitContentTag dismissible={false}>PHV</FitContentTag>
            <FitContentTag dismissible={false}>Taxi</FitContentTag>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
