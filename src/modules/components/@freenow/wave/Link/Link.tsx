import { Link } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentInvertedBackdrop,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../styled";

export const LinkPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Link</ComponentHeader>
      </ComponentHeaderWrapper>
      <HStack>
        <VStack mr={2}>
          <VStack>
            <ComponentVariant>Default - 1rem</ComponentVariant>

            <Link>Link</Link>
          </VStack>

          <VStack mt={4}>
            <ComponentVariant>
              Medium (fontSize = 1) - 0.875rem
            </ComponentVariant>

            <Link fontSize={1}>Link</Link>
          </VStack>

          <VStack mt={4}>
            <ComponentVariant>Small (fontSize = 0) - 0.75rem</ComponentVariant>

            <Link fontSize={0}>Link</Link>
          </VStack>
        </VStack>

        <ComponentInvertedBackdrop>
          <VStack>
            <VStack>
              <ComponentVariant>Default - 1rem</ComponentVariant>

              <Link inverted>Link</Link>
            </VStack>

            <VStack mt={4}>
              <ComponentVariant>
                Medium (fontSize = 1) - 0.875rem
              </ComponentVariant>

              <Link fontSize={1} inverted>Link</Link>
            </VStack>

            <VStack mt={4}>
              <ComponentVariant>
                Small (fontSize = 0) - 0.75rem
              </ComponentVariant>

              <Link fontSize={0} inverted>Link</Link>
            </VStack>
          </VStack>
        </ComponentInvertedBackdrop>
      </HStack>
    </VStack>
  );
};
