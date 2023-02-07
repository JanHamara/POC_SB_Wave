import { HStack, ComponentContainer } from "../styled";
import { AccordionPreview } from "../wave/Accordion/Accordion";
import { ButtonPreview } from "../wave/Button/Button";
import { TextButtonPreview } from "../wave/TextButton/TextButton";

export const ComponentsPreview = () => {
  return (
    <HStack>
      {/* Accordion */}
      <ComponentContainer>
        <AccordionPreview/>
      </ComponentContainer>

      {/* Button */}
      <ComponentContainer>
        <ButtonPreview/>
      </ComponentContainer>

      {/* TextButton */}
      <ComponentContainer>
        <TextButtonPreview/>
      </ComponentContainer>
    </HStack>
  );
};
