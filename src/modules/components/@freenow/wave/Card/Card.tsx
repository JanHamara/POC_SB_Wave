import { Card } from "@freenow/wave";

import { MOCKS } from "../../../../common/constants/global";
import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  VStack,
} from "../../../styled";

export const CardPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Card</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default | Level 0</ComponentVariant>
          <Card>{MOCKS.LOREM_IPSUM.MEDIUM}</Card>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Default | Level 100</ComponentVariant>
          <Card level={100}>{MOCKS.LOREM_IPSUM.MEDIUM}</Card>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Default | Level 200</ComponentVariant>
          <Card level={200}>{MOCKS.LOREM_IPSUM.MEDIUM}</Card>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Default | Level 300</ComponentVariant>
          <Card level={300}>{MOCKS.LOREM_IPSUM.MEDIUM}</Card>
        </VStack>
      </VStack>
    </VStack>
  );
};
