import { Pagination, Text } from "@freenow/wave";
import { useState } from "react";
import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  VStack,
} from "../../../styled";

export const PaginationPreview = () => {
  const PAGE_SIZE = 20;
  const TOTAL_ITEMS = 200;

  const [currentPage, setCurrentPage] = useState(1);

  const lastPage = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);

  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Pagination</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Normal (Default)</ComponentVariant>

          <Pagination
            value={currentPage}
            pageSize={PAGE_SIZE}
            totalItems={TOTAL_ITEMS}
            label={
              <Text secondary>
                Page{" "}
                <Text as="b" fontWeight="semibold" secondary>
                  {currentPage} of {lastPage}
                </Text>
              </Text>
            }
            onNextPage={() => setCurrentPage((current) => current + 1)}
            onPrevPage={() => setCurrentPage((current) => current - 1)}
            onSkipForward={() => setCurrentPage(lastPage)}
            onSkipBackward={() => setCurrentPage(1)}
          />
        </VStack>

        <VStack mt={4}>
          <ComponentVariant>Small</ComponentVariant>

          <Pagination
            value={currentPage}
            pageSize={PAGE_SIZE}
            totalItems={TOTAL_ITEMS}
            size='small'
            label={
              <Text secondary>
                Page{" "}
                <Text as="b" fontWeight="semibold" secondary>
                  {currentPage} of {lastPage}
                </Text>
              </Text>
            }
            onNextPage={() => setCurrentPage((current) => current + 1)}
            onPrevPage={() => setCurrentPage((current) => current - 1)}
            onSkipForward={() => setCurrentPage(lastPage)}
            onSkipBackward={() => setCurrentPage(1)}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};
