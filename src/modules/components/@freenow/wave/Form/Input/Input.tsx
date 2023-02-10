import { Input } from "@freenow/wave";
import {
  VStack,
  ComponentHeaderWrapper,
  ComponentHeader,
  ComponentVariant,
  HStack,
  ComponentInvertedBackdrop,
} from "../../../../styled";

export const InputPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Input</ComponentHeader>
      </ComponentHeaderWrapper>
      <HStack>
        <VStack>
          <ComponentVariant>Boxed (Default)</ComponentVariant>

          <Input
            placeholder="user@free-now.com"
            width="170px"
            label="E-Mail Address"
            id="email"
          />
        </VStack>

        <VStack>
          <ComponentVariant>Bottom-lined</ComponentVariant>

          <Input
            variant="bottom-lined"
            width="170px"
            placeholder="user@free-now.com"
            label="E-Mail Address"
            id="email"
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Small</ComponentVariant>

          <Input
            size="small"
            width="170px"
            placeholder="user@free-now.com"
            label="E-Mail Address"
            id="email"
          />
        </VStack>

        <VStack>
          <ComponentVariant> - Bottom-lined</ComponentVariant>

          <Input
            size="small"
            width="170px"
            variant="bottom-lined"
            placeholder="user@free-now.com"
            label="E-Mail Address"
            id="email"
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Error</ComponentVariant>

          <Input
            placeholder="user@free-now.com"
            width="170px"
            label="E-Mail Address"
            id="email"
            error={true}
          />
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <Input
            variant="bottom-lined"
            width="170px"
            placeholder="user@free-now.com"
            label="E-Mail Address"
            id="email"
            error={true}
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Error | Small</ComponentVariant>

          <Input
            placeholder="user@free-now.com"
            size="small"
            width="170px"
            label="E-Mail Address"
            id="email"
            error={true}
          />
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <Input
            variant="bottom-lined"
            size="small"
            width="170px"
            placeholder="user@free-now.com"
            label="E-Mail Address"
            id="email"
            error={true}
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Disabled</ComponentVariant>

          <Input
            placeholder="user@free-now.com"
            width="170px"
            label="E-Mail Address"
            id="email"
            disabled
          />
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <Input
            variant="bottom-lined"
            width="170px"
            placeholder="user@free-now.com"
            label="E-Mail Address"
            id="email"
            disabled
          />
        </VStack>
      </HStack>

      <ComponentInvertedBackdrop mt={4}>
        <HStack>
          <VStack>
            <ComponentVariant>Inverted (Default)</ComponentVariant>

            <Input
              placeholder="user@free-now.com"
              width="154px"
              label="E-Mail Address"
              id="email"
              inverted
            />
          </VStack>

          <VStack>
            <ComponentVariant>Bottom-lined</ComponentVariant>

            <Input
              variant="bottom-lined"
              width="154px"
              placeholder="user@free-now.com"
              label="E-Mail Address"
              id="email"
              inverted
            />
          </VStack>
        </HStack>

        <HStack mt={4}>
          <VStack>
            <ComponentVariant>Error Inverted</ComponentVariant>

            <Input
              placeholder="user@free-now.com"
              width="154px"
              label="E-Mail Address"
              id="email"
              error={true}
            />
          </VStack>

          <VStack>
            <ComponentVariant>- Bottom-lined</ComponentVariant>

            <Input
              variant="bottom-lined"
              width="154px"
              placeholder="user@free-now.com"
              label="E-Mail Address"
              id="email"
              error={true}
            />
          </VStack>
        </HStack>

        <HStack mt={4}>
          <VStack>
            <ComponentVariant>Disabled</ComponentVariant>

            <Input
              placeholder="user@free-now.com"
              width="154px"
              label="E-Mail Address"
              id="email"
              disabled
              inverted
            />
          </VStack>

          <VStack>
            <ComponentVariant>- Bottom-lined</ComponentVariant>

            <Input
              variant="bottom-lined"
              width="154px"
              placeholder="user@free-now.com"
              label="E-Mail Address"
              id="email"
              disabled
              inverted
            />
          </VStack>
        </HStack>
      </ComponentInvertedBackdrop>
    </VStack>
  );
};
