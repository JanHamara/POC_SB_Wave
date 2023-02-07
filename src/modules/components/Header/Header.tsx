import { Box, Headline, Logo, Spaces, Text } from "@freenow/wave";
import LayoutContainer from "../LayoutContainer/LayoutContainer";

export const Header = () => {
  return (
    <Box style={{ boxShadow: "0 0 15px #CCCCCC" }}>
      <LayoutContainer style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Logo></Logo>
          <Box display="flex" alignItems='center'>
            <Headline as="h4">@freenow/wave</Headline>
            <Box
              width="1px"
              height={Spaces[4]}
              background="#444444"
              mx={2}
            ></Box>
            <Text>Components Preview</Text>
          </Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
};
