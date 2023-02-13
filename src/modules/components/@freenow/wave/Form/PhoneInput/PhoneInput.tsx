import { HelperText, PhoneInput } from "@freenow/wave";
import {
  VStack,
  ComponentHeaderWrapper,
  ComponentHeader,
  ComponentVariant,
  HStack,
} from "../../../../styled";

const countryMock = {
  label: "DE",
  value: "DE",
  dialCode: "+49",
};

export const PhoneInputPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>PhoneInput</ComponentHeader>
      </ComponentHeaderWrapper>
      <HStack>
        <VStack>
          <ComponentVariant>Boxed (Default)</ComponentVariant>

          <PhoneInput
            country={countryMock}
            label="Phone Number"
            id="phone"
            width="260px"
          />
        </VStack>

        <VStack>
          <ComponentVariant>Bottom-lined</ComponentVariant>

          <PhoneInput
            country={countryMock}
            variant="bottom-lined"
            label="Phone Number"
            width="260px"
            id="phone"
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Small</ComponentVariant>

          <PhoneInput
            country={countryMock}
            size="small"
            label="Phone Number"
            width="260px"
            id="phone"
          />
        </VStack>

        <VStack>
          <ComponentVariant> - Bottom-lined</ComponentVariant>

          <PhoneInput
            country={countryMock}
            size="small"
            variant="bottom-lined"
            label="Phone Number"
            width="260px"
            id="phone"
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Error</ComponentVariant>

          <PhoneInput
            country={countryMock}
            label="Phone Number"
            id="phone"
            width="260px"
            error={true}
          />
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <PhoneInput
            country={countryMock}
            variant="bottom-lined"
            label="Phone Number"
            id="phone"
            width="260px"
            error={true}
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Error | Small</ComponentVariant>

          <PhoneInput
            country={countryMock}
            size="small"
            label="Phone Number"
            id="phone"
            width="260px"
            error={true}
          />
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <PhoneInput
            country={countryMock}
            variant="bottom-lined"
            size="small"
            label="Phone Number"
            id="phone"
            width="260px"
            error={true}
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <VStack>
          <ComponentVariant>Disabled</ComponentVariant>

          <PhoneInput
            country={countryMock}
            label="Phone Number"
            id="phone"
            width="260px"
            disabled
          />
        </VStack>

        <VStack>
          <ComponentVariant>- Bottom-lined</ComponentVariant>

          <PhoneInput
            country={countryMock}
            variant="bottom-lined"
            label="Phone Number"
            id="phone"
            width="260px"
            disabled
          />
        </VStack>
      </HStack>

      <HStack mt={4}>
        <HelperText variant='danger'>
          We don't have inverted variant for PhoneInput
        </HelperText>
      </HStack>
    </VStack>
  );
};
