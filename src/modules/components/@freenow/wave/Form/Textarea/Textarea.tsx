import { Textarea } from "@freenow/wave";
import {
  ComponentHeaderWrapper,
  ComponentHeader,
  ComponentVariant,
  VStack,
  ComponentInvertedBackdrop,
} from "../../../../styled";

export const TextareaPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Textarea</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <Textarea
            placeholder="Type here..."
            width="200px"
            label="Message"
            id="email"
          />
        </VStack>
      </VStack>

      <VStack mt={4}>
        <VStack>
          <ComponentVariant>Error</ComponentVariant>

          <Textarea
            placeholder="Type here..."
            size="small"
            width="200px"
            label="Message"
            id="email"
            error={true}
          />
        </VStack>
      </VStack>

      <VStack mt={4}>
        <VStack>
          <ComponentVariant>Disabled</ComponentVariant>

          <Textarea
            placeholder="Type here..."
            width="200px"
            label="Message"
            id="email"
            disabled
          />
        </VStack>
      </VStack>

      <ComponentInvertedBackdrop mt={4}>
        <VStack>
          <VStack>
            <ComponentVariant>Inverted (Default)</ComponentVariant>

            <Textarea
              placeholder="Type here..."
              width="200px"
              label="Message"
              id="email"
              inverted
            />
          </VStack>
        </VStack>

        <VStack mt={4}>
          <VStack>
            <ComponentVariant>Disabled</ComponentVariant>

            <Textarea
              placeholder="Type here..."
              width="200px"
              label="Message"
              id="email"
              disabled
              inverted
            />
          </VStack>
        </VStack>
      </ComponentInvertedBackdrop>
    </VStack>
  );
};
