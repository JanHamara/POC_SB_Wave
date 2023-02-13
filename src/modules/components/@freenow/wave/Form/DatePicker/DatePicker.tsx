import React, { useState } from "react";
import { Box, DatePicker, DateRangePicker, HelperText } from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  HStack,
  VStack,
} from "../../../../styled";

export const DatePickerPreview = () => {
  const [date, setDate] = useState();
  const [dateRange, setDateRange] = useState();

  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>DatePicker</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <DatePicker
            value={date}
            /* @ts-ignore */
            onChange={setDate}
            label="Expiry Date"
            placeholder="DD/MM/YYYY"
          ></DatePicker>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant> - Disabled</ComponentVariant>
          <HStack>
            <DatePicker disabled></DatePicker>
          </HStack>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Date Range Picker</ComponentVariant>
          <HStack>
            <DateRangePicker
              value={dateRange}
              /* @ts-ignore */
              onChange={setDateRange}
            ></DateRangePicker>
          </HStack>
        </VStack>

        <VStack mt={4}>
          <ComponentVariant> - Disabled</ComponentVariant>
          <HStack>
            <DateRangePicker disabled></DateRangePicker>
          </HStack>
        </VStack>

        <Box mt={4}>
          <HelperText variant="danger">
            We don't have inverted variant for DatePicker
          </HelperText>
        </Box>
      </VStack>
    </VStack>
  );
};
