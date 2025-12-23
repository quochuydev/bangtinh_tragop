import React from 'react';
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Paper,
} from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { PeriodLine, LOAN_CONSTANTS } from '../../common';

interface LoanTableProps {
  rows: PeriodLine[];
}

const getRowStyle = (index: number, totalRows: number) => {
  if (index > 0 && index <= LOAN_CONSTANTS.PROMOTIONAL_PERIOD_MONTHS) {
    return { backgroundColor: '#eee' };
  }
  if (index + 1 === totalRows) {
    return {
      color: 'red',
      fontWeight: 'bold',
      backgroundColor: 'rgba(206, 17, 38, 0.05)',
    };
  }
  return {};
};

const CurrencyCell: React.FC<{ value: number | null }> = ({ value }) => (
  <NumericFormat value={value} displayType="text" thousandSeparator suffix=" đ" />
);

export const LoanTable: React.FC<LoanTableProps> = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="loan calculation table">
        <TableHead>
          <TableRow>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              Kỳ
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              Số trả định kỳ
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              Lãi
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              Gốc
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              Dư nợ
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.period || `row-${index}`} sx={getRowStyle(index, rows.length)}>
              <TableCell align="right">{row.period}</TableCell>
              <TableCell align="right">
                <CurrencyCell value={row.recurring_number} />
              </TableCell>
              <TableCell align="right">
                <CurrencyCell value={row.interest} />
              </TableCell>
              <TableCell align="right">
                <CurrencyCell value={row.origin} />
              </TableCell>
              <TableCell align="right">
                <CurrencyCell value={row.debt} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
