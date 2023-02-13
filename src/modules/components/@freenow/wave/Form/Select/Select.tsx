import { Select } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentInvertedBackdrop,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../../styled";

const countries = (
  <>
    <option>Germany</option>
    <option>Greece</option>
    <option>Spain</option>
    <option>Ireland</option>
    <option>Italy</option>
    <option>UK</option>
  </>
);

export const SelectPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Select</ComponentHeader>
      </ComponentHeaderWrapper>
      <HStack>
        <VStack>
          <ComponentVariant>Boxed (Default)</ComponentVariant>

          <Select width="170px" label="Country" placeholder="Select country">
            {countries}
          </Select>
        </VStack>

        <VStack>
          <ComponentVariant>Bottom-lined</ComponentVariant>

          <Select
            variant="bottom-lined"
            width="170px"
            placeholder="Select country"
            label="Country"
          >
            {countries}
          </Select>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Small</ComponentVariant>

          <Select
            size="small"
            width="170px"
            placeholder="Select country"
            label="Country"
          >
            {countries}
          </Select>
        </VStack>

        <VStack>
          <ComponentVariant> - Bottom-lined</ComponentVariant>

          <Select
            size="small"
            width="170px"
            variant="bottom-lined"
            placeholder="Select country"
            label="Country"
          >
            {countries}
          </Select>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Error</ComponentVariant>

          <Select
            width="170px"
            placeholder="Select country"
            label="Country"
            error={true}
          >
            {countries}
          </Select>
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <Select
            variant="bottom-lined"
            width="170px"
            placeholder="Select country"
            label="Country"
            error={true}
          >
            {countries}
          </Select>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Error | Small</ComponentVariant>

          <Select
            size="small"
            width="170px"
            placeholder="Select country"
            label="Country"
            error={true}
          >
            {countries}
          </Select>
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <Select
            variant="bottom-lined"
            size="small"
            width="170px"
            placeholder="Select country"
            label="Country"
            error={true}
          >
            {countries}
          </Select>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Disabled</ComponentVariant>

          <Select
            width="170px"
            placeholder="Select country"
            label="Country"
            disabled
          >
            {countries}
          </Select>
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <Select
            variant="bottom-lined"
            width="170px"
            placeholder="Select country"
            label="Country"
            disabled
          >
            {countries}
          </Select>
        </VStack>
      </HStack>

      <ComponentInvertedBackdrop mt={4}>
        <HStack>
          <VStack>
            <ComponentVariant>Inverted (Default)</ComponentVariant>

            <Select
              width="154px"
              placeholder="Select country"
              label="Country"
              inverted
            >
              {countries}
            </Select>
          </VStack>

          <VStack>
            <ComponentVariant>Bottom-lined</ComponentVariant>

            <Select
              variant="bottom-lined"
              width="154px"
              placeholder="Select country"
              label="Country"
              inverted
            >
              {countries}
            </Select>
          </VStack>
        </HStack>

        <HStack mt={4}>
          <VStack>
            <ComponentVariant>Error Inverted</ComponentVariant>

            <Select
              width="154px"
              placeholder="Select country"
              label="Country"
              error={true}
            >
              {countries}
            </Select>
          </VStack>

          <VStack>
            <ComponentVariant>- Bottom-lined</ComponentVariant>

            <Select
              variant="bottom-lined"
              width="154px"
              placeholder="Select country"
              label="Country"
              error={true}
            >
              {countries}
            </Select>
          </VStack>
        </HStack>

        <HStack mt={4}>
          <VStack>
            <ComponentVariant>Disabled</ComponentVariant>

            <Select
              width="154px"
              placeholder="Select country"
              label="Country"
              disabled
              inverted
            >
              {countries}
            </Select>
          </VStack>

          <VStack>
            <ComponentVariant>- Bottom-lined</ComponentVariant>

            <Select
              variant="bottom-lined"
              width="154px"
              placeholder="Select country"
              label="Country"
              disabled
              inverted
            >
              {countries}
            </Select>
          </VStack>
        </HStack>
      </ComponentInvertedBackdrop>
    </VStack>
  );
};
