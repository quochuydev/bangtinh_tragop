import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Input, Table, TableContainer, TableCell, TableRow, TableHead, TableBody,
  MenuItem, Box, Link, Select, Typography, Container, Paper, TextField,
  NativeSelect, FormControl, InputLabel, Grid,
} from '@material-ui/core';
import NumberFormat from 'react-number-format';

import { TableCalculate } from '../../common'

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    minWidth: 650,
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    display: 'grid'
  },
  sixPercent: {
    backgroundColor: '#eee',
  },
  tenPercent: {
    // backgroundColor: '#ddd',
  },
  rowTotal: {
    color: 'red !important' as 'red',
    fontWeight: 'bold !important' as 'bold',
    backgroundColor: 'rgba(206, 17, 38, 0.05)'
  }
}));
interface Props {
  onRefreshCalculate: (data: any) => void;
  tableCalculate: TableCalculate;
}

export const TableCalculateComponent: React.FunctionComponent<Props> = props => {
  let onChangeField = (name: string, value: unknown | null) => {
    value = Number(value);
    if (!value) {
      value = null;
    }
    props.onRefreshCalculate({ [name]: value });
  }

  let onChangeSelect = (e: React.ChangeEvent<{ name: string, value: unknown }>) => {
    let value = Number(e.target.value)
    props.onRefreshCalculate({ [e.target.name]: value });
  }

  React.useEffect(() => {
    props.onRefreshCalculate({});
  }, [])

  let months = [
    { value: 12, name: '1 năm (12 tháng)' },
    { value: 24, name: '2 năm (24 tháng)' },
    { value: 36, name: '3 năm (36 tháng)' },
    { value: 48, name: '4 năm (48 tháng)' },
    { value: 60, name: '5 năm (60 tháng)' },
    { value: 72, name: '6 năm (72 tháng)' },
    { value: 84, name: '7 năm (84 tháng)' },
  ]

  const classes = useStyles();

  let data = props.tableCalculate;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="month">
              Thời gian vay (Tháng)
            </InputLabel>
            <NativeSelect
              value={data.month}
              onChange={e => { onChangeSelect(e) }}
              inputProps={{ name: 'month', id: 'month', }}>
              {
                months.map(e => <option key={e.value} value={e.value}>{e.name}</option>)
              }
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item sm={6}>
          <FormControl className={classes.formControl}>
            <label htmlFor="carPrice">Giá xe</label>
            <NumberFormat id="carPrice" customInput={TextField} onValueChange={e => {
              onChangeField('carPrice', e.floatValue);
            }} value={data.carPrice} thousandSeparator={true} suffix={' đ'} />
          </FormControl>
        </Grid>
        <Grid item sm={6}>
          <FormControl className={classes.formControl}>
            <label htmlFor="precentBankBefore">Lãi suất vay năm (cố định 6 tháng đầu)</label>
            <NumberFormat id="precentBankBefore" customInput={TextField}
              value={data.precentBankBefore * 100} thousandSeparator={true} suffix={' %'} disabled={true} />
          </FormControl>
        </Grid>
        <Grid item sm={6}>
          <FormControl className={classes.formControl}>
            <label htmlFor="borrowingPrice">Số tiền cần vay (VNĐ)</label>
            <NumberFormat id="borrowingPrice" customInput={TextField} onValueChange={e => {
              onChangeField('borrowingPrice', e.floatValue);
            }} value={data.borrowingPrice} thousandSeparator={true} suffix={' đ'} />
          </FormControl>
        </Grid>
        <Grid item sm={6}>
          <FormControl className={classes.formControl}>
            <label htmlFor="precentBankAfter">Lãi suất vay năm (sau điều chỉnh)</label>
            <NumberFormat id="precentBankAfter" customInput={TextField}
              value={data.precentBankAfter * 100} thousandSeparator={true} suffix={' %'} disabled={true} />
          </FormControl>
        </Grid>
        <Grid item sm={6}>
          <FormControl className={classes.formControl}>
            <label htmlFor="prepayPercent">Trả trước (%)</label>
            <NumberFormat id="prepayPercent" customInput={TextField} onValueChange={e => {
              onChangeField('prepayPercent', e.floatValue);
            }} value={data.prepayPercent} thousandSeparator={true} suffix={' %'} disabled={true} />
          </FormControl>
        </Grid>

        <Grid item sm={6}>
        </Grid>
        <Grid item sm={6}>
        </Grid>
      </Grid>

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
            {data.rows.map((row, i) => (
              <TableRow className={classes[(i > 0 && i <= 6) ? 'sixPercent' : (i + 1 == data.rows.length ? 'rowTotal' : 'tenPercent')]}
                key={row.period}>
                <TableCell align="right">{row.period}</TableCell>
                <TableCell align="right">
                  <NumberFormat value={row.recurring_number} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
                </TableCell>
                <TableCell align="right">
                  <NumberFormat value={row.interest} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
                </TableCell>
                <TableCell align="right">
                  <NumberFormat value={row.origin} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
                </TableCell>
                <TableCell align="right">
                  <NumberFormat value={row.debt} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}