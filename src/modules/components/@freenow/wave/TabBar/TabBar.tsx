import { TabBar } from "@freenow/wave";
import { useState } from "react";
import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  VStack,
} from "../../../styled";

export const TabBarPreview = () => {
  const [selected, setSelected] = useState(0);
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>TabBar</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <TabBar>
            <TabBar.Link
              onClick={() => setSelected(0)}
              selected={selected === 0}
            >
              Dashboard
            </TabBar.Link>
            <TabBar.Link
              onClick={() => setSelected(1)}
              selected={selected === 1}
            >
              Information
            </TabBar.Link>
            <TabBar.Link
              onClick={() => setSelected(2)}
              selected={selected === 2}
            >
              Notes
            </TabBar.Link>
          </TabBar>
        </VStack>
      </VStack>
    </VStack>
  );
};
