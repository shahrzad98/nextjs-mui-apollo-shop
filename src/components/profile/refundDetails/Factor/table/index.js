import { useReturnedOrderDetail } from '@digify/theme-kit';
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import React from 'react';
const TableContainerStyle = styled(TableContainer)`
  border: 1px solid rgba(28, 27, 32, 0.1);
  .MuiTableHead-root {
    .MuiTableCell-root {
      border-bottom: none;
    }
    background: rgba(28, 27, 32, 0.05);
    opacity: 0.4;
  }
  .MuiTableBody-root {
    .MuiTableCell-root {
      border-bottom: 1px solid rgba(28, 27, 32, 0.1);
    }
    tr:last-of-type {
      .MuiTableCell-root {
        border: none;
      }
    }
  }
`;
export default function TableFactor() {
  const { data } = useReturnedOrderDetail();
  const { items } = data;
  const headCell = {
    index: 'ردیف',
    product_label: 'نام محصول',
    c: 'قیمت اولیه',
    e: 'تخفیف',
    f: 'مقدار کد تخفیف',
    d: 'مالیات وارزش افزوده',
    h: 'قیمت مرجوعی'
  };

  return (
    <TableContainerStyle>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.entries(headCell).map(([, value], index) => (
              <TableCell key={index} align="center">
                {value}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((ele, index) => (
            <TableRow key={index}>
              <TableCell key={index} align="center">
                {index}
              </TableCell>
              <TableCell key={index} align="center">
                {ele.returnedCost}
              </TableCell>
              <TableCell key={index} align="center">
                {ele.returnedCost}
              </TableCell>
              <TableCell key={index} align="center">
                {ele.returnedCost}
              </TableCell>
              <TableCell key={index} align="center">
                {ele.returnedCost}
              </TableCell>
              <TableCell key={index} align="center">
                {ele.returnedCost}
              </TableCell>
              <TableCell key={index} align="center">
                {ele.returnedCost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerStyle>
  );
}
