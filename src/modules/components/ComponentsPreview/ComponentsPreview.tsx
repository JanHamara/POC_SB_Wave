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
        <Box maxWidth="20%" width='20%'>
          <DimmingPreview />
        </Box>

        {/* Divider */}
        <Box maxWidth="20%" width='20%'>
          <DividerPreview />
        </Box>

        {/* HelperText */}
        <Box maxWidth="40%" width='40%'>
          <HelperTextPreview />
        </Box>
      </HStack>
    </>
  );
};
