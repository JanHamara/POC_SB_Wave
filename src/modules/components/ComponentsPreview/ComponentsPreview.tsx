import { Box, SelectList } from "@freenow/wave";
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
  InputPreview,
  LabelPreview,
  LinkPreview,
  ModalPreview,
  OffcanvasPreview,
  PaginationPreview,
  PasswordPreview,
  PhoneInputPreview,
  PopoverPreview,
  TabBarPreview,
  TablePreview,
  TagPreview,
  TextButtonPreview,
  TextPreview,
  TooltipPreview,
} from "../@freenow/wave";
import { CheckboxPreview } from "../@freenow/wave/Form/Checkbox/Checkbox";
import { DatePickerPreview } from "../@freenow/wave/Form/DatePicker/DatePicker";
import { FilePickerPreview } from "../@freenow/wave/Form/FilePicker/FilePicker";
import { RadioButtonPreview } from "../@freenow/wave/Form/RadioButton/RadioButton";
import { SearchPreview } from "../@freenow/wave/Form/Search/Search";
import { SelectPreview } from "../@freenow/wave/Form/Select/Select";
import { SelectListPreview } from "../@freenow/wave/Form/SelectList/SelectList";
import { TextareaPreview } from "../@freenow/wave/Form/Textarea/Textarea";
import { TogglePreview } from "../@freenow/wave/Form/Toggle/Toggle";

import {
  HStack,
  ComponentContainer,
  VStack,
  ComponentHeader,
  ComponentHeaderWrapper,
} from "../styled";

export const ComponentsPreview = () => (
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

    <HStack mt={10}>
      {/* Table */}
      <Box maxWidth="100%" width="100%">
        <TablePreview />
      </Box>
    </HStack>

    {/* Form Elements */}
    <VStack mt={10}>
      <Box width="100%">
        <ComponentHeaderWrapper>
          <ComponentHeader fontSize={3}>Form Elements</ComponentHeader>
        </ComponentHeaderWrapper>

        <HStack mt={4}>
          {/* Input */}
          <ComponentContainer>
            <InputPreview />
          </ComponentContainer>

          {/* Password */}
          <ComponentContainer>
            <PasswordPreview />
          </ComponentContainer>

          {/* Select */}
          <ComponentContainer>
            <SelectPreview />
          </ComponentContainer>
        </HStack>

        <HStack mt={10}>
          {/* SelectList */}
          <ComponentContainer>
            <SelectListPreview />
          </ComponentContainer>

          {/* PhoneInput */}
          <Box maxWidth="43%" width="43%">
            <PhoneInputPreview />
          </Box>

          {/* Textarea */}
          <Box maxWidth="17%" width="17%">
            <TextareaPreview />
          </Box>
        </HStack>

        <HStack mt={10}>
          {/* Search */}
          <Box maxWidth="20%" width="20%">
            <SearchPreview />
          </Box>

          {/* DatePicker & FilePicker */}
          <Box maxWidth="20%" width="20%">
            <VStack>
              <DatePickerPreview />

              <Box mt={4}>
                <FilePickerPreview />
              </Box>
            </VStack>
          </Box>

          {/* Toggle */}
          <Box maxWidth="20%" width="20%">
            <TogglePreview />
          </Box>

          {/* RadioButton & Checkbox */}
          <Box maxWidth="20%" width="20%">
            <VStack>
              <RadioButtonPreview />

              <Box mt={6}>
                <CheckboxPreview />
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </VStack>
  </>
);
