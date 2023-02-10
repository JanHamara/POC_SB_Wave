import { Headline } from "@freenow/wave";
import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentInvertedBackdrop,
  ComponentVariant,
  VStack,
} from "../../../styled";

export const HeadlinePreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Headline</ComponentHeader>
      </ComponentHeaderWrapper>

      <VStack>
        <VStack>
          <ComponentVariant>H1</ComponentVariant>
          <Headline as="h1">Headline 1</Headline>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>H2</ComponentVariant>
          <Headline as="h2">Headline 2</Headline>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>H3</ComponentVariant>
          <Headline as="h3">Headline 3</Headline>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>H4</ComponentVariant>
          <Headline as="h4">Headline 4</Headline>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>H5</ComponentVariant>
          <Headline as="h5">Headline 5</Headline>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>H6</ComponentVariant>
          <Headline as="h6">Headline 6</Headline>
        </VStack>
      </VStack>

      <ComponentInvertedBackdrop mt={4}>
        <VStack>
          <VStack>
            <ComponentVariant>H1</ComponentVariant>
            <Headline as="h1" inverted>Headline 1</Headline>
          </VStack>

          <VStack mt={4}>
            <ComponentVariant>H2</ComponentVariant>
            <Headline as="h2" inverted>Headline 2</Headline>
          </VStack>

          <VStack mt={4}>
            <ComponentVariant>H3</ComponentVariant>
            <Headline as="h3" inverted>Headline 3</Headline>
          </VStack>

          <VStack mt={4}>
            <ComponentVariant>H4</ComponentVariant>
            <Headline as="h4" inverted>Headline 4</Headline>
          </VStack>

          <VStack mt={4}>
            <ComponentVariant>H5</ComponentVariant>
            <Headline as="h5" inverted>Headline 5</Headline>
          </VStack>

          <VStack mt={4}>
            <ComponentVariant>H6</ComponentVariant>
            <Headline as="h6" inverted>Headline 6</Headline>
          </VStack>
        </VStack>
      </ComponentInvertedBackdrop>
    </VStack>
  );
};
