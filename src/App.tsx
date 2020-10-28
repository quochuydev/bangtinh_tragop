import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Input, Table, TableContainer, TableCell, TableRow, TableHead, TableBody,
  MenuItem, Box, Link, Select, Typography, Container, Paper, TextField,
  NativeSelect, FormControl, InputLabel,
} from '@material-ui/core';

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
  const [age, setAge] = useState('');
  const initData = {
    carPrice: 0,
  }
  const [data, setData] = useState(initData);
  const [carPrice, setCarPrice] = useState(0);
  const [borrowingPrice, setBorrowingPrice] = useState(0);
  const [borrowingMonthTotal, setBorrowingMonthTotal] = useState(0);
  const [prepayPercent, setPrepayPercent] = useState(0);

  const columns = [
    {
      key: 'period', title: 'period'
    }
  ]


  function createData(period: number, recurring_number: number, interest: number, origin: number, debt: number) {
    return { period, recurring_number, interest, origin, debt };
  }

  let rows = [
    createData(1, 0, 0, 0, 0),
  ]
  function refreshCalculate() {

  }

  let onChangeField = (e: React.ChangeEvent<{ name: string, value: unknown }>) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

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

        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Age
        </InputLabel>
          <NativeSelect
            value={10}
            onChange={handleChange}
            inputProps={{ name: 'age', id: 'age-native-label-placeholder', }}          >
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>

        <TextField id="carPrice" label="Giá xe" defaultValue={initData.carPrice}
          type="number" name="carPrice" onChange={onChangeField} />

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