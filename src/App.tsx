import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input, Table, TableContainer, TableCell, TableRow, TableHead, TableBody,
  MenuItem, Box, Link, Select, Typography, Container, Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function App() {
  const [age, setAge] = useState('');
  const [carPrice, setCarPrice] = useState(0);
  const [borrowingPrice, setBorrowingPrice] = useState(0);
  const [borrowingMonthTotal, setBorrowingMonthTotal] = useState(0);
  const [prepayPercent, setPrepayPercent] = useState(0);

  const columns = [
    {
      key: 'period', title: 'period'
    }
  ]


  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  let rows = [
    createData('', 0, 0, 0, 0),
  ]
  function refreshCalculate() {

  }

  function onChangeField() {

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
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Input />

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
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