import { HStack, ComponentContainer } from "../styled";
import { AccordionPreview } from "../@freenow/wave/Accordion/Accordion";
import { ButtonPreview } from "../@freenow/wave/Button/Button";
import { TextButtonPreview } from "../@freenow/wave/TextButton/TextButton";
import { CardPreview } from "../@freenow/wave/Card/Card";
import { HeadlinePreview } from "../@freenow/wave/Headline/Headline";
import { TextPreview } from "../@freenow/wave/Text/Text";
import { DimmingPreview } from "../@freenow/wave/Dimming/Dimming";
import { DividerPreview } from "../@freenow/wave/Divider/Divider";
import { HelperTextPreview } from "../@freenow/wave/HelperText/HelperText";
import { Box } from "@freenow/wave";
import { InfoBannerPreview } from "../@freenow/wave/InfoBanner/InfoBanner";
import { LabelPreview } from "../@freenow/wave/Label/Label";
import { TagPreview } from "../@freenow/wave/Tag/Tag";
import { InlineSpinnerPreview } from "../@freenow/wave/InlineSpinner/InlineSpinner";
import { LinkPreview } from "../@freenow/wave/Link/Link";
import { ModalPreview } from "../@freenow/wave/Modal/Modal";

export const ComponentsPreview = () => {
  return (
    <>
      <HStack>
        {/* Accordion */}
        <ComponentContainer>
          <AccordionPreview />
        </ComponentContainer>

        {/* Button */}
        <ComponentContainer>
          <ButtonPreview />
        </ComponentContainer>

        {/* TextButton */}
        <ComponentContainer>
          <TextButtonPreview />
        </ComponentContainer>
      </HStack>

      <HStack mt={10}>
        {/* Card */}
        <ComponentContainer>
          <CardPreview />
        </ComponentContainer>

        {/* Headline */}
        <ComponentContainer>
          <HeadlinePreview />
        </ComponentContainer>

        {/* TextButton */}
        <ComponentContainer>
          <TextPreview />
        </ComponentContainer>
      </HStack>

      <HStack mt={10}>
        {/* Dimming */}
        <Box maxWidth="20%" width="20%">
          <DimmingPreview />
        </Box>

        {/* Divider */}
        <Box maxWidth="20%" width="20%">
          <DividerPreview />
        </Box>

        {/* HelperText */}
        <Box maxWidth="40%" width="40%">
          <HelperTextPreview />
        </Box>
      </HStack>

      <HStack mt={10}>
        {/* InfoBanner */}
        <Box maxWidth="50%" width="50%">
          <InfoBannerPreview />
        </Box>

        {/* Label */}
        <Box maxWidth="20%" width="20%">
          <LabelPreview />
        </Box>

        {/* Tag */}
        <Box maxWidth="15%" width="15%">
          <TagPreview />
        </Box>
      </HStack>

      <HStack mt={10}>
        {/* InlineSpinner */}
        <Box maxWidth="10%" width="10%">
          <InlineSpinnerPreview />
        </Box>

        {/* Link */}
        <Box maxWidth="40%" width="40%">
          <LinkPreview />
        </Box>

        {/* Modal */}
        <Box maxWidth="30%" width="50%">
          <ModalPreview />
        </Box>
      </HStack>
    </>
  );
};
