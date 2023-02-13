import { SelectList } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentInvertedBackdrop,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../../styled";

const options = [
  {
    label: 'Germany',
    value: 'Germany'
  },
  {
    label: 'Greece',
    value: 'Greece'
  }, 
  {
    label: 'Spain',
    value: 'Spain'
  }, 
  {
    label: 'Ireland',
    value: 'Ireland'
  }, 
  {
    label: 'Italy',
    value: 'Italy'
  }, 
  {
    label: 'UK',
    value: 'UK'
  }, 
]

export const SelectListPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Select List</ComponentHeader>
      </ComponentHeaderWrapper>
      <HStack>
        <VStack>
          <ComponentVariant>Boxed (Default)</ComponentVariant>

          <SelectList width="170px" label="Country" placeholder="Select country" options={options}>
          </SelectList>
        </VStack>

        <VStack>
          <ComponentVariant>Bottom-lined</ComponentVariant>

          <SelectList
            variant="bottom-lined"
            width="170px"
            placeholder="Select country"
            label="Country"
            options={options}
          >
          </SelectList>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Small</ComponentVariant>

          <SelectList
            size="small"
            width="170px"
            placeholder="Select country"
            label="Country"
            options={options}
          >
          </SelectList>
        </VStack>

        <VStack>
          <ComponentVariant> - Bottom-lined</ComponentVariant>

          <SelectList
            size="small"
            width="170px"
            variant="bottom-lined"
            placeholder="Select country"
            label="Country"
            options={options}
          >
          </SelectList>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Error</ComponentVariant>

          <SelectList
            width="170px"
            placeholder="Select country"
            label="Country"
            options={options}
            error={true}
          >
          </SelectList>
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <SelectList
            variant="bottom-lined"
            width="170px"
            placeholder="Select country"
            label="Country"
            options={options}
            error={true}
          >
          </SelectList>
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Error | Small</ComponentVariant>

          <SelectList
            size="small"
            width="170px"
            placeholder="Select country"
            label="Country"
            options={options}
            error={true}
          >
          </SelectList>
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <SelectList
            variant="bottom-lined"
            size="small"
            width="170px"
            placeholder="Select country"
            label="Country"
            options={options}
            error={true}
          >
          </SelectList>
        </VStack>
      </HStack>

      <ComponentInvertedBackdrop mt={4}>
        <HStack>
          <VStack>
            <ComponentVariant>Inverted (Default)</ComponentVariant>

            <SelectList
              width="154px"
              placeholder="Select country"
              label="Country"
              options={options}
              inverted
            >
            </SelectList>
          </VStack>

          <VStack>
            <ComponentVariant>Bottom-lined</ComponentVariant>

            <SelectList
              variant="bottom-lined"
              width="154px"
              placeholder="Select country"
              label="Country"
              options={options}
              inverted
            >
            </SelectList>
          </VStack>
        </HStack>

        <HStack mt={4}>
          <VStack>
            <ComponentVariant>Error Inverted</ComponentVariant>

            <SelectList
              width="154px"
              placeholder="Select country"
              label="Country"
              options={options}
              error={true}
            >
            </SelectList>
          </VStack>

          <VStack>
            <ComponentVariant>- Bottom-lined</ComponentVariant>

            <SelectList
              variant="bottom-lined"
              width="154px"
              placeholder="Select country"
              label="Country"
              options={options}
              error={true}
            >
            </SelectList>
          </VStack>
        </HStack>
      </ComponentInvertedBackdrop>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Multi-Choice Variant</ComponentVariant>

          <SelectList width="170px" label="Country" placeholder="Select country" options={options} isMulti>
          </SelectList>
        </VStack>

        <VStack>
          <ComponentVariant>Bottom-lined</ComponentVariant>

          <SelectList
            variant="bottom-lined"
            width="170px"
            placeholder="Select country"
            label="Country"
            options={options}
            isMulti
          >
          </SelectList>
        </VStack>
      </HStack>
    </VStack>
  );
};
