import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { AMOUNT_INDEX, TABLE_HEADERS } from "../utils/constants";

export const TableHeader: React.FC = () => (
  <TableHead>
    <TableRow>
      {TABLE_HEADERS.map((header, index) => (
        <TableCell
          key={header}
          align={index === AMOUNT_INDEX ? "right" : "left"}
        >
          {header}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);
