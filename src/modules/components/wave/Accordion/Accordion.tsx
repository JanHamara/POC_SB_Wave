import { Accordion } from "@freenow/wave";

import { MOCKS } from "../../../common/constants/global";
import { ComponentHeader, VStack } from "../../styled";

export const AccordionPreview = () => {
  return (
    <VStack>
      <ComponentHeader>Accordion</ComponentHeader>

      <Accordion heading="Accordion Header 1" defaultExpanded>
        <div>{MOCKS.LOREM_IPSUM.MEDIUM}</div>
      </Accordion>

      <ComponentHeader>Accordion | Compact</ComponentHeader>

      <VStack>
        <Accordion heading="Accordion Header 1" variant="compact">
          <div>{MOCKS.LOREM_IPSUM.MEDIUM}</div>
        </Accordion>
        <Accordion
          heading="Accordion Header 2"
          description="With description"
          variant="compact"
        >
          <div>{MOCKS.LOREM_IPSUM.MEDIUM}</div>
        </Accordion>
        <Accordion
          heading="Accordion Header 3"
          description="With description"
          variant="compact"
        >
          <div>{MOCKS.LOREM_IPSUM.MEDIUM}</div>
        </Accordion>
        <Accordion
          heading="Accordion Header 3"
          description="With description"
          variant="compact"
          defaultExpanded
        >
          <div>Default expanded accordion</div>
        </Accordion>
      </VStack>
    </VStack>
  );
};
