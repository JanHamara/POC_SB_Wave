import { InfoBanner } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../styled";

export const InfoBannerPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>InfoBanner</ComponentHeader>
      </ComponentHeaderWrapper>

      <HStack>
        <VStack mr={4}>
          <VStack>
            <ComponentVariant>Info (Default)</ComponentVariant>
            <InfoBanner
              title="Some informational title"
              description="More description to describe the info"
              linkUrl="https://wave.free-now.com/components/info-banner"
              linkText="Call to action"
            />
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Success</ComponentVariant>
            <InfoBanner
              title="Success!"
              description="More description to describe the info"
              linkUrl="https://wave.free-now.com/components/info-banner"
              linkText="Call to action"
              variant="success"
            />
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Warning</ComponentVariant>
            <InfoBanner
              title="Warning!"
              description="More description to describe the info"
              linkUrl="https://wave.free-now.com/components/info-banner"
              linkText="Call to action"
              variant="warning"
            />
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Success</ComponentVariant>
            <InfoBanner
              title="Error!"
              description="More description to describe the info"
              linkUrl="https://wave.free-now.com/components/info-banner"
              linkText="Call to action"
              variant="error"
            />
          </VStack>
        </VStack>

        <VStack ml={4}>
          <VStack>
            <ComponentVariant>Info | Emphasized</ComponentVariant>
            <InfoBanner
              title="Some informational title"
              description="More description to describe the info"
              linkUrl="https://wave.free-now.com/components/info-banner"
              linkText="Call to action"
              emphasized
            />
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Success | Emphasized</ComponentVariant>
            <InfoBanner
              title="Success!"
              description="More description to describe the info"
              linkUrl="https://wave.free-now.com/components/info-banner"
              linkText="Call to action"
              variant="success"
              emphasized
            />
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Warning | Emphasized</ComponentVariant>
            <InfoBanner
              title="Warning!"
              description="More description to describe the info"
              linkUrl="https://wave.free-now.com/components/info-banner"
              linkText="Call to action"
              variant="warning"
              emphasized
            />
          </VStack>

          <VStack mt={6}>
            <ComponentVariant>Success | Emphasized</ComponentVariant>
            <InfoBanner
              title="Error!"
              description="More description to describe the info"
              linkUrl="https://wave.free-now.com/components/info-banner"
              linkText="Call to action"
              variant="error"
              emphasized
            />
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
