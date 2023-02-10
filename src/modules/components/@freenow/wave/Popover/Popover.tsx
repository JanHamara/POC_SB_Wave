import { Button, Link, Popover, Text } from "@freenow/wave";
import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  VStack,
} from "../../../styled";

export const PopoverPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Popover</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Text Trigger (Default)</ComponentVariant>

          <Popover
            content={
              <Text>
                Content for the Popover. Can contain Icons, Forms or other
                elements.
              </Text>
            }
          >
            Trigger
          </Popover>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Button Trigger</ComponentVariant>

          <Popover
            content={
              <Text>
                Content for the Popover. Can contain Icons, Forms or other
                elements.
              </Text>
            }
          >
            <Button>Trigger</Button>
          </Popover>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Link Trigger</ComponentVariant>

          <Popover
            content={
              <Text>
                Content for the Popover. Can contain Icons, Forms or other
                elements.
              </Text>
            }
          >
            <Link>Trigger</Link>
          </Popover>
        </VStack>
      </VStack>
    </VStack>
  );
};
