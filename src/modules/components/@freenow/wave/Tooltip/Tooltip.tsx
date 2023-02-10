import { Box, Tooltip } from "@freenow/wave";
import { MOCKS } from "../../../../common/constants/global";
import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentInvertedBackdrop,
  ComponentVariant,
  VStack,
} from "../../../styled";

export const TooltipPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Tooltip</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <Tooltip
            content={MOCKS.LOREM_IPSUM.SMALL}
            alwaysVisible={true}
          >
            <Box mt={6}></Box>
          </Tooltip>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Inverted</ComponentVariant>

          <ComponentInvertedBackdrop width='100%' mt={4}>
            <Tooltip
              content={MOCKS.LOREM_IPSUM.SMALL}
              alwaysVisible={true}
              inverted
            >
              <Box mt={6}></Box>
            </Tooltip>
          </ComponentInvertedBackdrop>
        </VStack>
      </VStack>
    </VStack>
  );
};
