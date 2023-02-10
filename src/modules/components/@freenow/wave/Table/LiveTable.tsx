import {
  Select,
  Box,
  Table,
  Text,
  TableRow,
  TableHeaderCell,
  TableCell,
  Label,
  PhoneIcon,
  Colors,
  EnvelopeIcon,
  Button,
} from "@freenow/wave";
import { useState } from "react";
import { HStack } from "../../../styled";

export const LiveTable = () => {
  const [rowStyle, setRowStyle] = useState<"zebra" | "lines" | "blank">(
    "zebra"
  );
  const [columnSpace, setColumnSpace] = useState("normal");
  const [rowSize, setRowSize] = useState("normal");

  return (
    <>
      <HStack mt={4}>
        <Select
          label="rowStyle"
          width="10rem"
          onChange={(e) =>
            setRowStyle(e.target.value as "zebra" | "lines" | "blank")
          }
          value={rowStyle}
          mr={1}
        >
          <option value="zebra">zebra</option>
          <option value="lines">lines</option>
          <option value="blank">blank</option>
        </Select>

        <Select
          label="columnSpace"
          width="10rem"
          onChange={(e) => setColumnSpace(e.target.value)}
          value={columnSpace}
          mr={1}
        >
          <option value="small">small</option>
          <option value="normal">normal (default)</option>
        </Select>

        <Select
          label="rowSize"
          width="10rem"
          onChange={(e) => setRowSize(e.target.value)}
          value={rowSize}
        >
          <option value="small">small</option>
          <option value="normal">normal (default)</option>
          <option value="large">large</option>
        </Select>
      </HStack>

      <Box mt={4}>
        <Table
          rowStyle={rowStyle}
          columnSpace={columnSpace}
          rowSize={rowSize}
          width="100%"
        >
          <caption style={{ captionSide: "bottom", padding: "1rem" }}>
            The wonderful Wave list
          </caption>
          <thead>
            <TableRow>
              <TableHeaderCell scope="col">
                Creation Date / Activity
              </TableHeaderCell>
              <TableHeaderCell scope="col">Name</TableHeaderCell>
              <TableHeaderCell scope="col">City</TableHeaderCell>
              <TableHeaderCell scope="col">Phone</TableHeaderCell>
              <TableHeaderCell scope="col">E-Mail</TableHeaderCell>
              <TableHeaderCell scope="col">Actions</TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>
                5 July 2019 - 11:14
                <br />
                <Text fontSize={0} secondary>
                  No activity yet
                </Text>
              </TableCell>
              <TableCell scope="row">Leander Klein</TableCell>
              <TableCell>
                <Label>New</Label>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <PhoneIcon size={18} color={Colors.ACTION_BLUE_900} />
                  &nbsp;+4915127182377
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <EnvelopeIcon size={18} color={Colors.ACTION_BLUE_900} />
                  &nbsp;leander.klein@free-now.com
                </Box>
              </TableCell>
              <TableCell>
                <Button variant="secondary" size="small">
                  ...
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                31 January 2020 - 02:48
                <br />
                <Text fontSize={0} secondary>
                  No activity yet
                </Text>
              </TableCell>
              <TableCell scope="row">Marc Berg</TableCell>
              <TableCell>
                <Label variant="success">Active</Label>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <PhoneIcon size={18} color={Colors.ACTION_BLUE_900} />
                  &nbsp;+4915139912828
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <EnvelopeIcon size={18} color={Colors.ACTION_BLUE_900} />
                  &nbsp;m.berg@free-now.com
                </Box>
              </TableCell>
              <TableCell>
                <Button variant="secondary" size="small">
                  ...
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                27 February 2020 - 16:02
                <br />
                <Text fontSize={0} secondary>
                  17 Tours
                </Text>
              </TableCell>
              <TableCell scope="row">Ecki Diepenhorst</TableCell>
              <TableCell>
                <Label variant="success">Active</Label>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <PhoneIcon size={18} color={Colors.ACTION_BLUE_900} />
                  &nbsp;+4915139912828
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <EnvelopeIcon size={18} color={Colors.ACTION_BLUE_900} />
                  &nbsp;e.diepenhorst@free-now.com
                </Box>
              </TableCell>
              <TableCell>
                <Button variant="secondary" size="small">
                  ...
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                30 March 2020 - 18:19
                <br />
                <Text fontSize={0} secondary>
                  17 Tours
                </Text>
              </TableCell>
              <TableCell scope="row">John Doe</TableCell>
              <TableCell>
                <Label variant="danger">Fraud</Label>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <PhoneIcon size={18} color={Colors.ACTION_BLUE_900} />
                  &nbsp;+491672182732
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <EnvelopeIcon size={18} color={Colors.ACTION_BLUE_900} />
                  &nbsp;j.doe@free-now.com
                </Box>
              </TableCell>
              <TableCell>
                <Button variant="secondary" size="small">
                  ...
                </Button>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </Box>
    </>
  );
};
