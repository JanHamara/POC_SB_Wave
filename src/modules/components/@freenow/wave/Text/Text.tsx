import { Text } from "@freenow/wave";
import { MOCKS } from "../../../../common/constants/global";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentInvertedBackdrop,
  ComponentVariant,
  VStack,
} from "../../../styled";

export const TextPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Text</ComponentHeader>
      </ComponentHeaderWrapper>

      <VStack>
        <VStack>
          <ComponentVariant>Small</ComponentVariant>
          {/* @ts-ignore */}
          <Text fontSize="small" fontWeight="100">
            {MOCKS.LOREM_IPSUM.SMALL}
          </Text>
        </VStack>

        <VStack mt={2}>
          <ComponentVariant>
            Medium - <strong>Default Size</strong>
          </ComponentVariant>
          {/* @ts-ignore */}
          <Text fontWeight="100">{MOCKS.LOREM_IPSUM.SMALL}</Text>
        </VStack>

        <VStack mt={2}>
          <ComponentVariant>Large</ComponentVariant>
          {/* @ts-ignore */}
          <Text fontSize="large" fontWeight="100">
            {MOCKS.LOREM_IPSUM.SMALL}
          </Text>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Small | Semibold</ComponentVariant>
          {/* @ts-ignore */}
          <Text fontSize="small" fontWeight="500">
            {MOCKS.LOREM_IPSUM.SMALL}
          </Text>
        </VStack>

        <VStack mt={2}>
          <ComponentVariant>Medium | Semibold</ComponentVariant>
          {/* @ts-ignore */}
          <Text fontWeight="500">{MOCKS.LOREM_IPSUM.SMALL}</Text>
        </VStack>

        <VStack mt={2}>
          <ComponentVariant>Large | Semibold</ComponentVariant>
          {/* @ts-ignore */}
          <Text fontSize="large" fontWeight="500">
            {MOCKS.LOREM_IPSUM.SMALL}
          </Text>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Small | Bold</ComponentVariant>
          <Text fontSize="small" fontWeight="bold">
            {MOCKS.LOREM_IPSUM.SMALL}
          </Text>
        </VStack>

        <VStack mt={2}>
          <ComponentVariant>Medium | Bold</ComponentVariant>
          <Text fontWeight="bold">{MOCKS.LOREM_IPSUM.SMALL}</Text>
        </VStack>

        <VStack mt={2}>
          <ComponentVariant>Large | Bold</ComponentVariant>
          <Text fontSize="large" fontWeight="bold">
            {MOCKS.LOREM_IPSUM.SMALL}
          </Text>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Small | Secondary</ComponentVariant>
          {/* @ts-ignore */}
          <Text fontSize="small" fontWeight="500" secondary>
            {MOCKS.LOREM_IPSUM.SMALL}
          </Text>
        </VStack>

        <VStack mt={2}>
          <ComponentVariant>
            Medium | Secondary
          </ComponentVariant>
          {/* @ts-ignore */}
          <Text fontWeight="500" secondary>{MOCKS.LOREM_IPSUM.SMALL}</Text>
        </VStack>

        <VStack mt={2}>
          <ComponentVariant>Large | Secondary</ComponentVariant>
          {/* @ts-ignore */}
          <Text fontSize="large" fontWeight="500" secondary>
            {MOCKS.LOREM_IPSUM.SMALL}
          </Text>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Small | Disabled</ComponentVariant>
          {/* @ts-ignore */}
          <Text fontSize="small" fontWeight="500" disabled>
            {MOCKS.LOREM_IPSUM.SMALL}
          </Text>
        </VStack>

        <VStack mt={2}>
          <ComponentVariant>
            Medium | Disabled
          </ComponentVariant>
          {/* @ts-ignore */}
          <Text fontWeight="500" disabled>{MOCKS.LOREM_IPSUM.SMALL}</Text>
        </VStack>

        <VStack mt={2}>
          <ComponentVariant>Large | Disabled</ComponentVariant>
          {/* @ts-ignore */}
          <Text fontSize="large" fontWeight="500" disabled>
            {MOCKS.LOREM_IPSUM.SMALL}
          </Text>
        </VStack>
      </VStack>

      {/* <ComponentInvertedBackdrop mt={4}>
        <VStack>
          <VStack>
            <ComponentVariant>Small</ComponentVariant>
            <Text fontSize="small" fontWeight="100" inverted>
              {MOCKS.LOREM_IPSUM.SMALL}
            </Text>
          </VStack>

          <VStack mt={2}>
            <ComponentVariant>
              Medium - <strong>Default Size</strong>
            </ComponentVariant>
            <Text fontWeight="100" inverted>
              {MOCKS.LOREM_IPSUM.SMALL}
            </Text>
          </VStack>

          <VStack mt={2}>
            <ComponentVariant>Large</ComponentVariant>
            <Text fontSize="large" fontWeight="100" inverted>
              {MOCKS.LOREM_IPSUM.SMALL}
            </Text>
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Small | Semibold</ComponentVariant>
            <Text fontSize="small" fontWeight="500" inverted>
              {MOCKS.LOREM_IPSUM.SMALL}
            </Text>
          </VStack>

          <VStack mt={2}>
            <ComponentVariant>Medium | Semibold</ComponentVariant>
            <Text fontWeight="500" inverted>
              {MOCKS.LOREM_IPSUM.SMALL}
            </Text>
          </VStack>

          <VStack mt={2}>
            <ComponentVariant>Large | Semibold</ComponentVariant>
            <Text fontSize="large" fontWeight="500" inverted>
              {MOCKS.LOREM_IPSUM.SMALL}
            </Text>
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Small | Bold</ComponentVariant>
            <Text fontSize="small" fontWeight="bold" inverted>
              {MOCKS.LOREM_IPSUM.SMALL}
            </Text>
          </VStack>

          <VStack mt={2}>
            <ComponentVariant>Medium | Bold</ComponentVariant>
            <Text fontWeight="bold" inverted>
              {MOCKS.LOREM_IPSUM.SMALL}
            </Text>
          </VStack>

          <VStack mt={2}>
            <ComponentVariant>Large | Bold</ComponentVariant>
            <Text fontSize="large" fontWeight="bold" inverted>
              {MOCKS.LOREM_IPSUM.SMALL}
            </Text>
          </VStack>
        </VStack>
      </ComponentInvertedBackdrop> */}
    </VStack>
  );
};
