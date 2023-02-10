import { useState } from "react";
import styled from "styled-components";
import { Box, Button, Dimming } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  VStack,
} from "../../../styled";

const DimmingFixedDimensions = styled(Dimming)`
    height: 15rem;
    position: static;
    width: 100%;
    z-index: 0;
`;

const DimmingUnfixedDimensions = styled(Dimming)`
    z-index: 1000;
`;

export const DimmingPreview = () => {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Dimming</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>
        
        <Box width='200px' mb={4}>
            <Button size='small' onClick={() => setIsEnabled(!isEnabled)} variant='secondary' style={{ zIndex: 9999, position: 'relative' }}>{ isEnabled ? 'Disable' : 'Enable'}</Button>
        </Box>

        { isEnabled ? <DimmingUnfixedDimensions></DimmingUnfixedDimensions> : <DimmingFixedDimensions></DimmingFixedDimensions>}
        </VStack>
      </VStack>
    </VStack>
  );
};
