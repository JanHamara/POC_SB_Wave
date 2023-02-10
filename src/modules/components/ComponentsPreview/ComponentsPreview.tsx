import { Box } from "@freenow/wave";
import {
  AccordionPreview,
  ButtonPreview,
  CardPreview,
  DimmingPreview,
  DividerPreview,
  HeadlinePreview,
  HelperTextPreview,
  InfoBannerPreview,
  InlineSpinnerPreview,
  LabelPreview,
  LinkPreview,
  ModalPreview,
  OffcanvasPreview,
  PaginationPreview,
  PopoverPreview,
  TabBarPreview,
  TagPreview,
  TextButtonPreview,
  TextPreview,
  TooltipPreview,
} from "../@freenow/wave";
import { HStack, ComponentContainer, VStack } from "../styled";

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
          <VStack>
            <TagPreview />
            <Box mt={8}></Box>
            <InlineSpinnerPreview />
          </VStack>
        </Box>
      </HStack>

      <HStack mt={10}>
        {/* Link */}
        <Box maxWidth="40%" width="40%">
          <LinkPreview />
        </Box>

        {/* Modal */}
        <Box maxWidth="15%" width="15%">
          <ModalPreview />
        </Box>

        {/* Offcanvas */}
        <Box maxWidth="15%" width="15%">
          <OffcanvasPreview />
        </Box>
      </HStack>

      <HStack mt={10}>
        {/* Pagination */}
        <Box maxWidth="20%" width="20%">
          <PaginationPreview />
        </Box>

        {/* Popover */}
        <Box maxWidth="15%" width="15%">
          <PopoverPreview />
        </Box>

        {/* TabBar */}
        <Box maxWidth="20%" width="20%">
          <TabBarPreview />
        </Box>

        {/* Tooltip */}
        <Box maxWidth="20%" width="20%">
          <TooltipPreview />
        </Box>
      </HStack>
    </>
  );
};
