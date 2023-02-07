import { Button, TrashBinIcon } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentInvertedBackdrop,
  ComponentVariant,
  HStack,
  VStack,
} from "../../styled";

export const ButtonPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Button</ComponentHeader>
      </ComponentHeaderWrapper>

      <HStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>
          <Button>Button</Button>
        </VStack>
        <VStack>
          <ComponentVariant>Secondary</ComponentVariant>
          <Button variant="secondary">Button</Button>
        </VStack>
        <VStack>
          <ComponentVariant>Danger</ComponentVariant>

          <Button variant="danger">Button</Button>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Small</ComponentVariant>
          <Button size="small">Button</Button>
        </VStack>
        <VStack>
          <ComponentVariant> - Secondary</ComponentVariant>
          <Button variant="secondary" size="small">
            Button
          </Button>
        </VStack>
        <VStack>
          <ComponentVariant> - Danger</ComponentVariant>

          <Button variant="danger" size="small">
            Button
          </Button>
        </VStack>
      </HStack>

      <ComponentInvertedBackdrop mt={4}>
        <HStack>
          <VStack>
            <ComponentVariant>Inverted</ComponentVariant>
            <Button inverted>Button</Button>
          </VStack>
          <VStack>
            <ComponentVariant> - Secondary</ComponentVariant>
            <Button variant="secondary" inverted>
              Button
            </Button>
          </VStack>
          <VStack>
            <ComponentVariant> - Danger</ComponentVariant>

            <Button variant="danger" inverted>
              Button
            </Button>
          </VStack>
        </HStack>
      </ComponentInvertedBackdrop>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Disabled</ComponentVariant>
          <Button disabled={true}>Button</Button>
        </VStack>
        <VStack>
          <ComponentVariant> - Secondary</ComponentVariant>
          <Button disabled={true} variant="secondary">
            Button
          </Button>
        </VStack>
        <VStack>
          <ComponentVariant> - Danger</ComponentVariant>

          <Button disabled={true} variant="danger">
            Button
          </Button>
        </VStack>
      </HStack>

      <ComponentInvertedBackdrop mt={4}>
        <HStack>
          <VStack>
            <ComponentVariant>Disabled Inverted</ComponentVariant>
            <Button disabled={true} inverted>
              Button
            </Button>
          </VStack>
          <VStack>
            <ComponentVariant> - Secondary</ComponentVariant>
            <Button disabled={true} variant="secondary" inverted>
              Button
            </Button>
          </VStack>
          <VStack>
            <ComponentVariant> - Danger</ComponentVariant>

            <Button disabled={true} variant="danger" inverted>
              Button
            </Button>
          </VStack>
        </HStack>
      </ComponentInvertedBackdrop>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Default with Icon</ComponentVariant>
          <Button>
            <TrashBinIcon size={20} /> Button
          </Button>
        </VStack>
        <VStack>
          <ComponentVariant> - Secondary</ComponentVariant>
          <Button variant="secondary">
            <TrashBinIcon size={20} /> Button
          </Button>
        </VStack>
        <VStack>
          <ComponentVariant> - Danger</ComponentVariant>

          <Button variant="danger">
            <TrashBinIcon size={20} /> Button
          </Button>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Small with Icon</ComponentVariant>
          <Button size="small">
            <TrashBinIcon size={20} /> Button
          </Button>
        </VStack>
        <VStack>
          <ComponentVariant> - Secondary</ComponentVariant>
          <Button size="small" variant="secondary">
            <TrashBinIcon size={20} /> Button
          </Button>
        </VStack>
        <VStack>
          <ComponentVariant> - Danger</ComponentVariant>

          <Button size="small" variant="danger">
            <TrashBinIcon size={20} /> Button
          </Button>
        </VStack>
      </HStack>
    </VStack>
  );
};
