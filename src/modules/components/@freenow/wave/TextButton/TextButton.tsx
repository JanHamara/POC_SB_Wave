import { TextButton, TrashBinIcon } from "@freenow/wave";
import {
  VStack,
  ComponentHeader,
  HStack,
  ComponentVariant,
  ComponentInvertedBackdrop,
  ComponentHeaderWrapper,
} from "../../../styled";

export const TextButtonPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>TextButton</ComponentHeader>
      </ComponentHeaderWrapper>
      <HStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>
          <TextButton>Button</TextButton>
        </VStack>
        <VStack>
          <ComponentVariant>Danger</ComponentVariant>

          <TextButton variant="danger">Button</TextButton>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Small</ComponentVariant>
          <TextButton size="small">Button</TextButton>
        </VStack>
        <VStack>
          <ComponentVariant> - Danger</ComponentVariant>

          <TextButton variant="danger" size="small">
            Button
          </TextButton>
        </VStack>
      </HStack>

      <ComponentInvertedBackdrop mt={4}>
        <HStack>
          <VStack>
            <ComponentVariant>Inverted</ComponentVariant>
            <TextButton inverted>Button</TextButton>
          </VStack>
          <VStack>
            <ComponentVariant> - Danger</ComponentVariant>

            <TextButton variant="danger" inverted>
              Button
            </TextButton>
          </VStack>
        </HStack>
      </ComponentInvertedBackdrop>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Disabled</ComponentVariant>
          <TextButton disabled={true}>Button</TextButton>
        </VStack>
        <VStack>
          <ComponentVariant> - Danger</ComponentVariant>

          <TextButton disabled={true} variant="danger">
            Button
          </TextButton>
        </VStack>
      </HStack>

      <ComponentInvertedBackdrop mt={4}>
        <HStack>
          <VStack>
            <ComponentVariant>Disabled Inverted</ComponentVariant>
            <TextButton disabled={true} inverted>
              Button
            </TextButton>
          </VStack>
          <VStack>
            <ComponentVariant> - Danger</ComponentVariant>

            <TextButton disabled={true} variant="danger" inverted>
              Button
            </TextButton>
          </VStack>
        </HStack>
      </ComponentInvertedBackdrop>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Default with Icon</ComponentVariant>
          <TextButton>
            <TrashBinIcon size={20} /> Button
          </TextButton>
        </VStack>
        <VStack>
          <ComponentVariant> - Danger</ComponentVariant>

          <TextButton variant="danger">
            <TrashBinIcon size={20} /> Button
          </TextButton>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Small with Icon</ComponentVariant>
          <TextButton size="small">
            <TrashBinIcon size={20} /> Button
          </TextButton>
        </VStack>
        <VStack>
          <ComponentVariant> - Danger</ComponentVariant>

          <TextButton size="small" variant="danger">
            <TrashBinIcon size={20} /> Button
          </TextButton>
        </VStack>
      </HStack>
    </VStack>
  );
};
