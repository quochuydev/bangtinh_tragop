import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Input, Table, TableContainer, TableCell, TableRow, TableHead, TableBody,
  MenuItem, Box, Link, Select, Typography, Container, Paper, TextField,
  NativeSelect, FormControl, InputLabel,
} from '@material-ui/core';

import { NumberSetterContainer } from './components'

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    minWidth: 650,
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function App() {
  const initData = {
    carPrice: 0, borrowingPrice: 0, prepayPercent: 0,
  }
  const [data, setData] = useState<{ carPrice: number; borrowingPrice: number; prepayPercent: number }>(initData);

  const columns = [
    {
      key: 'period', title: 'period'
    },
  ]

  function createData(period: number, recurring_number: number, interest: number, origin: number, debt: number) {
    return { period, recurring_number, interest, origin, debt };
  }

  let rows = [
    createData(1, 0, 0, 0, 0),
  ]

  function refreshCalculate() {

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

  let onChangeField = (e: React.ChangeEvent<{ name: string, value: unknown }>) => {
    const name = e.target.name as keyof typeof data;
    let value: number = Number(e.target.value);
    setData({ ...data, [name]: value });
    refreshCalculate();
  }

  const classes = useStyles();

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h5" component="h5" gutterBottom>
          BẢNG MINH HỌA GỐC VÀ LÃI PHẢI TRẢ
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom>
          SẢN PHẨM TRUYỀN THỐNG - THANH TOÁN GỐC LÃI  HÀNG THÁNG
        </Typography>


        <NumberSetterContainer />
        
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Thời gian vay (Tháng)
        </InputLabel>
          <NativeSelect
            value={1}
            onChange={e => { }}
            inputProps={{ name: 'age', id: 'age-native-label-placeholder', }}>
            {
              years.map(e => <option key={e.value} value={e.value}>{e.name}</option>)
            }
          </NativeSelect>
        </FormControl>

        <TextField id="carPrice" label="Giá xe" value={data.carPrice}
          type="number" name="carPrice" onChange={onChangeField} />

        <TextField id="borrowingPrice" label="Số tiền cần vay (VNĐ)" value={data.borrowingPrice}
          type="number" name="borrowingPrice" onChange={onChangeField} />

        <TextField id="prepayPercent" label="Trả trước (%)" value={data.prepayPercent}
          type="number" name="prepayPercent" onChange={onChangeField} />

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
      </Box>
      <Copyright />
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        quochuydev
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}