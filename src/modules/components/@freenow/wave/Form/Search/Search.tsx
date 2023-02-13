import { Box, Search, Text } from "@freenow/wave";
import { useState } from "react";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentInvertedBackdrop,
  ComponentVariant,
  VStack,
} from "../../../../styled";

const searchAPI = (name: string) =>
  `https://swapi.dev/api/people/?search=${name}`;

const mapName = (data: { name: string }, index: number) => {
  const { name } = data;

  return (
    <Box
      key={index}
      height="2.5rem"
      width="15rem"
      display="flex"
      alignItems="center"
      onClick={() => alert(`${name} was clicked!`)}
    >
      <Text marginLeft="1rem">{name}</Text>
    </Box>
  );
};

export const SearchPreview = () => {
  const [results, setResults] = useState([]);

  const fetchCharacter = async (name: string) => {
    const response = await (await fetch(searchAPI(name))).json();
    setResults(response.results?.map(mapName));
  };

  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Search</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <Search></Search>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Small</ComponentVariant>
          <Search size="small"></Search>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>With placeholder</ComponentVariant>
          <Search placeholder="Search for a city..."></Search>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>
            Integrated with API (with dropdown)
          </ComponentVariant>
          <Search
            placeholder="Enter a name"
            results={results}
            onInputChange={(name) => fetchCharacter(name)}
            onClear={() => setResults([])}
          ></Search>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Disabled</ComponentVariant>
          <Search placeholder="Search..." disabled></Search>
        </VStack>

        <ComponentInvertedBackdrop mt={4}>
          <VStack>
            <ComponentVariant>Inverted</ComponentVariant>
            <Search placeholder="Search..." inverted></Search>
          </VStack>
        </ComponentInvertedBackdrop>
      </VStack>
    </VStack>
  );
};
