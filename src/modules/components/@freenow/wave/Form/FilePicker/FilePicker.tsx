import { Box, FilePicker, HelperText } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../../styled";

export const FilePickerPreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>FilePicker</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <FilePicker
            accept="image/png, image/jpeg"
            buttonText="Browse files"
            label="A picture of you"
            name="avatar"
            onChange={(e) => console.log("onChange", e)}
            onFileChange={(file, e) => console.log("onFileChange", file, e)}
          />
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Disabled</ComponentVariant>
          <HStack>
            <FilePicker
              accept="image/png, image/jpeg"
              buttonText="Browse files"
              label="A picture of you"
              name="avatar"
              onChange={(e) => console.log("onChange", e)}
              onFileChange={(file, e) => console.log("onFileChange", file, e)}
              disabled
            />
          </HStack>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Error</ComponentVariant>
          <HStack>
            <FilePicker
              accept="image/png, image/jpeg"
              buttonText="Browse files"
              label="A picture of you"
              name="avatar"
              onChange={(e) => console.log("onChange", e)}
              onFileChange={(file, e) => console.log("onFileChange", file, e)}
              error
            />
          </HStack>
        </VStack>

        <Box mt={4}>
          <HelperText variant="danger">
            We don't have inverted variant for FilePicker
          </HelperText>
        </Box>
      </VStack>
    </VStack>
  );
};
