import { Password } from "@freenow/wave";
import {
  VStack,
  ComponentHeaderWrapper,
  ComponentHeader,
  ComponentVariant,
  HStack,
  ComponentInvertedBackdrop,
} from "../../../../styled";

export const PasswordPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Password</ComponentHeader>
      </ComponentHeaderWrapper>
      <HStack>
        <VStack>
          <ComponentVariant>Boxed (Default)</ComponentVariant>

          <Password
            placeholder="**********"
            width="170px"
            label="Password"
            id="email"
          />
        </VStack>

        <VStack>
          <ComponentVariant>Bottom-lined</ComponentVariant>

          <Password
            variant="bottom-lined"
            width="170px"
            placeholder="**********"
            label="Password"
            id="email"
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Small</ComponentVariant>

          <Password
            size="small"
            width="170px"
            placeholder="**********"
            label="Password"
            id="email"
          />
        </VStack>

        <VStack>
          <ComponentVariant> - Bottom-lined</ComponentVariant>

          <Password
            size="small"
            width="170px"
            variant="bottom-lined"
            placeholder="**********"
            label="Password"
            id="email"
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Error</ComponentVariant>

          <Password
            placeholder="**********"
            width="170px"
            label="Password"
            id="email"
            error={true}
          />
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <Password
            variant="bottom-lined"
            width="170px"
            placeholder="**********"
            label="Password"
            id="email"
            error={true}
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Error | Small</ComponentVariant>

          <Password
            placeholder="**********"
            size="small"
            width="170px"
            label="Password"
            id="email"
            error={true}
          />
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <Password
            variant="bottom-lined"
            size="small"
            width="170px"
            placeholder="**********"
            label="Password"
            id="email"
            error={true}
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Disabled</ComponentVariant>

          <Password
            placeholder="**********"
            width="170px"
            label="Password"
            id="email"
            disabled
          />
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <Password
            variant="bottom-lined"
            width="170px"
            placeholder="**********"
            label="Password"
            id="email"
            disabled
          />
        </VStack>
      </HStack>

      <ComponentInvertedBackdrop mt={4}>
        <HStack>
          <VStack>
            <ComponentVariant>Inverted (Default)</ComponentVariant>

            <Password
              placeholder="**********"
              width="154px"
              label="Password"
              id="email"
              inverted
            />
          </VStack>

          <VStack>
            <ComponentVariant>Bottom-lined</ComponentVariant>

            <Password
              variant="bottom-lined"
              width="154px"
              placeholder="**********"
              label="Password"
              id="email"
              inverted
            />
          </VStack>
        </HStack>

        <HStack mt={4}>
          <VStack>
            <ComponentVariant>Error Inverted</ComponentVariant>

            <Password
              placeholder="**********"
              width="154px"
              label="Password"
              id="email"
              error={true}
            />
          </VStack>

          <VStack>
            <ComponentVariant>- Bottom-lined</ComponentVariant>

            <Password
              variant="bottom-lined"
              width="154px"
              placeholder="**********"
              label="Password"
              id="email"
              error={true}
            />
          </VStack>
        </HStack>

        <HStack mt={4}>
          <VStack>
            <ComponentVariant>Disabled</ComponentVariant>

            <Password
              placeholder="**********"
              width="154px"
              label="Password"
              id="email"
              disabled
              inverted
            />
          </VStack>

          <VStack>
            <ComponentVariant>- Bottom-lined</ComponentVariant>

            <Password
              variant="bottom-lined"
              width="154px"
              placeholder="**********"
              label="Password"
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
