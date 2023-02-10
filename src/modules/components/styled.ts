import { Box, Text } from "@freenow/wave";
import styled from "styled-components";

export const ComponentContainer = styled(Box).attrs({
  maxWidth: "30%",
  width: "30%",
})``;
export const ComponentHeaderWrapper = styled(Box).attrs({
  pb: 4,
  pt: 4,
  mb: 4,
})`
  border-bottom: solid 0.0625rem #C6CDD4
`;
export const ComponentHeader = styled(Text).attrs({
  secondary: true,
  mb: 4,
  mt: 4,
  fontWeight: 700,
})`
  color: #aaaaaa;
`;
export const ComponentVariant = styled(Text).attrs({
  secondary: true,
  fontSize: 1,
  mb: 2,
})`
  color: #aaaaaa
`;
export const ComponentInvertedBackdrop = styled(Box).attrs({
  // This is background color on which inverted components should look good, it is the base for dark mode
  bg: '#201A1A',
  p: 2,
})``;

export const HStack = styled(Box).attrs({
  display: "flex",
  justifyContent: "space-between",
})``;
export const VStack = styled(Box).attrs({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
})``;
