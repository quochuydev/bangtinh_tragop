import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Input, Table, TableContainer, TableCell, TableRow, TableHead, TableBody,
  MenuItem, Box, Link, Select, Typography, Container, Paper, TextField,
  NativeSelect, FormControl, InputLabel,
} from '@material-ui/core';

import { NumberSetterContainer, TableCalculateContainer } from './components'

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
        <TableCalculateContainer />
      </Box>
      <Copyright />
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={'https://quochuydev.github.io/bangtinh_tragop/'}>
        quochuydev
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}