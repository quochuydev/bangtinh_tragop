import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Input, Table, TableContainer, TableCell, TableRow, TableHead, TableBody,
  MenuItem, Box, Link, Select, Typography, Container, Paper, TextField,
  NativeSelect, FormControl, InputLabel,
} from '@material-ui/core';
import { TableCalculate } from '../../common'

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    minWidth: 650,
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
}));
interface Props {
  onRefreshCalculate: (data: any) => void;
  tableCalculate: TableCalculate;
}

export const TableCalculateComponent: React.FunctionComponent<Props> = props => {
  let onChangeNumber = (e: React.ChangeEvent<{ name: string, value: unknown }>) => {
    let value = Number(e.target.value)
    props.onRefreshCalculate({ [e.target.name]: value });
  }

  let onChangeSelect = (e: React.ChangeEvent<{ name: string, value: unknown }>) => {
    props.onRefreshCalculate({ [e.target.name]: e.target.value });
  }

  let years = [
    { value: 1, name: '1 năm (12 tháng)' },
    { value: 2, name: '2 năm (24 tháng)' },
    { value: 3, name: '3 năm (36 tháng)' },
    { value: 4, name: '4 năm (48 tháng)' },
    { value: 5, name: '5 năm (60 tháng)' },
    { value: 6, name: '6 năm (72 tháng)' },
    { value: 7, name: '7 năm (84 tháng)' },
  ]

  function createData(period: number, recurring_number: number, interest: number, origin: number, debt: number) {
    return { period, recurring_number, interest, origin, debt };
  }

  let rows = [
    createData(1, 0, 0, 0, 0),
  ]

  const classes = useStyles();

  let data = props.tableCalculate;

  return (
    <div>
      {JSON.stringify(props.tableCalculate)}
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Thời gian vay (Tháng)
        </InputLabel>
        <NativeSelect
          value={data.year}
          onChange={e => { onChangeSelect(e) }}
          inputProps={{ name: 'year', id: 'age-native-label-placeholder', }}>
          {
            years.map(e => <option key={e.value} value={e.value}>{e.name}</option>)
          }
        </NativeSelect>
      </FormControl>

      <TextField id="carPrice" label="Giá xe" value={data.carPrice}
        type="number" name="carPrice" onChange={onChangeNumber} />

      <TextField id="borrowingPrice" label="Số tiền cần vay (VNĐ)" value={data.borrowingPrice}
        type="number" name="borrowingPrice" onChange={onChangeNumber} />

      <TextField id="prepayPercent" label="Trả trước (%)" value={data.prepayPercent}
        type="number" name="prepayPercent" onChange={onChangeNumber} />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Kỳ</TableCell>
              <TableCell align="right">Số trả định kỳ</TableCell>
              <TableCell align="right">Lãi</TableCell>
              <TableCell align="right">Gốc</TableCell>
              <TableCell align="right">Dư nợ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.period}>
                <TableCell align="right">{row.period}</TableCell>
                <TableCell align="right">{row.recurring_number}</TableCell>
                <TableCell align="right">{row.interest}</TableCell>
                <TableCell align="right">{row.origin}</TableCell>
                <TableCell align="right">{row.debt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}