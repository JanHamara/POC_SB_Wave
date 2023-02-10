import {
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
  TableRowSkeleton,
} from "@freenow/wave";

import {
  ComponentHeader,
  ComponentHeaderWrapper,
  ComponentVariant,
  VStack,
} from "../../../styled";

import { ComplexDataTable } from "./ComplexDataTable";
import { LiveTable } from "./LiveTable";


export const TablePreview = () => {
  return (
    <VStack>
      <ComponentHeaderWrapper>
        <ComponentHeader>Table</ComponentHeader>
      </ComponentHeaderWrapper>
      <VStack>
        <VStack>
          <ComponentVariant>Default</ComponentVariant>

          <Table rowStyle="zebra" width="100%">
            <caption style={{ captionSide: "bottom", padding: "1rem" }}>
              Table Caption Here
            </caption>
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Name</TableHeaderCell>
                <TableHeaderCell scope="col">E-Mail</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell scope="row">Luka Hartwig</TableCell>
                <TableCell>l.hartwig@mytaxi.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Alba Gonzales</TableCell>
                <TableCell>alba.gonzales@free-now.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Alexis Duran</TableCell>
                <TableCell>alexis.duran@free-now.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">Joe Doe</TableCell>
                <TableCell>joe.doe@free-now.com</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Table in Loading State</ComponentVariant>
          <Table rowStyle="zebra">
            <thead>
              <TableRow>
                <TableHeaderCell
                  style={{ width: "10rem", whiteSpace: "normal" }}
                >
                  Creation Date / Activity
                </TableHeaderCell>
                <TableHeaderCell style={{ width: "6.5rem" }}>
                  Name
                </TableHeaderCell>
                <TableHeaderCell style={{ width: "3rem" }}>
                  Status
                </TableHeaderCell>
                <TableHeaderCell style={{ width: "7.5rem" }}>
                  Phone
                </TableHeaderCell>
                <TableHeaderCell style={{ width: "13rem" }}>
                  E-Mail
                </TableHeaderCell>
                <TableHeaderCell style={{ width: "6.5rem" }}>
                  Actions
                </TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              {true &&
                [0, 1, 2, 3, 4].map((key) => (
                  <TableRowSkeleton key={key} columns={6} />
                ))}
            </tbody>
          </Table>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Live Table (select styles)</ComponentVariant>

          <LiveTable></LiveTable>
        </VStack>

        <VStack mt={6}>
          <ComponentVariant>Complex Data Table</ComponentVariant>
          
          <ComplexDataTable></ComplexDataTable>
        </VStack>
      </VStack>
    </VStack>
  );
};
