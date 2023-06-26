import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Paper,
  TextField,
  NativeSelect,
  FormControl,
  Grid,
} from "@material-ui/core";
import { NumericFormat as NumberFormat } from "react-number-format";

import { TableCalculate } from "../../common";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
      display: "grid",
    },
    sixPercent: {
      backgroundColor: "#eee",
    },
    tenPercent: {
      // backgroundColor: '#ddd',
    },
    rowTotal: {
      color: "red !important" as "red",
      fontWeight: "bold !important" as "bold",
      backgroundColor: "rgba(206, 17, 38, 0.05)",
    },
    selectBox: {
      marginTop: "0 !important",
    },
  })
);
interface Props {
  onRefreshCalculate: (data: any) => void;
  tableCalculate: TableCalculate;
}

export const TableCalculateComponent: React.FunctionComponent<Props> = (
  props
) => {
  let onChangeField = (name: string, value: unknown | null) => {
    value = Number(value);
    if (!value) {
      value = null;
    }
    props.onRefreshCalculate({ [name]: value });
  };

  let onChangeSelect = (
    e: React.ChangeEvent<{ name: string; value: unknown }>
  ) => {
    let value = Number(e.target.value);
    props.onRefreshCalculate({ [e.target.name]: value });
  };

  React.useEffect(() => {
    props.onRefreshCalculate({});
  }, []);

  let months = [
    { value: 12, name: "1 năm (12 tháng)" },
    { value: 24, name: "2 năm (24 tháng)" },
    { value: 36, name: "3 năm (36 tháng)" },
    { value: 48, name: "4 năm (48 tháng)" },
    { value: 60, name: "5 năm (60 tháng)" },
    { value: 72, name: "6 năm (72 tháng)" },
    { value: 84, name: "7 năm (84 tháng)" },
  ];

  const classes = useStyles();

  let data = props.tableCalculate;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={5}>
          <FormControl className={classes.formControl}>
            <label htmlFor="carPrice" style={{ fontWeight: "bold" }}>
              Giá xe
            </label>
            <NumberFormat
              key={"carPrice"}
              id="carPrice"
              customInput={TextField}
              onValueChange={(e) => {
                onChangeField("carPrice", e.floatValue);
              }}
              value={data.carPrice}
              thousandSeparator={true}
              suffix={" đ"}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <label htmlFor="borrowingPrice" style={{ fontWeight: "bold" }}>
              Số tiền cần vay (VNĐ)
            </label>
            <NumberFormat
              id="borrowingPrice"
              customInput={TextField}
              onValueChange={(e) => {
                onChangeField("borrowingPrice", e.floatValue);
              }}
              value={data.borrowingPrice}
              thousandSeparator={true}
              suffix={" đ"}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <label htmlFor="month" style={{ fontWeight: "bold" }}>
              Thời gian vay (Tháng)
            </label>
            <NativeSelect
              className={classes.selectBox}
              value={data.month}
              onChange={(e) => {
                onChangeSelect(e);
              }}
              inputProps={{ name: "month", id: "month" }}
            >
              {/* <option key={0} value={0}>-- Vui lòng chọn --</option> */}
              {months.map((e) => (
                <option key={e.value} value={e.value}>
                  {e.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.formControl}>
            <label htmlFor="prepayPercent" style={{ fontWeight: "bold" }}>
              Ngân hàng hỗ trợ (%)
            </label>
            <NumberFormat
              id="prepayPercent"
              customInput={TextField}
              onValueChange={(e) => {
                onChangeField("prepayPercent", e.floatValue);
              }}
              value={data.prepayPercent}
              thousandSeparator={true}
              suffix={" %"}
              disabled={true}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <label htmlFor="precentBankBefore" style={{ fontWeight: "bold" }}>
              Lãi suất vay năm (cố định 6 tháng đầu)
            </label>
            <NumberFormat
              id="precentBankBefore"
              customInput={TextField}
              value={data.precentBankBefore * 100}
              thousandSeparator={true}
              suffix={" %"}
              disabled={true}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <label htmlFor="precentBankAfter" style={{ fontWeight: "bold" }}>
              Lãi suất vay năm (sau điều chỉnh)
            </label>
            <NumberFormat
              id="precentBankAfter"
              customInput={TextField}
              value={data.precentBankAfter * 100}
              thousandSeparator={true}
              suffix={" %"}
              disabled={true}
            />
          </FormControl>
          <div>
            <h2>Thủ tục mua xe trả góp tại Hino Vĩnh Thịnh:</h2>
            <p>1. Mua xe tại Hino Vĩnh Thịnh</p>
            <p>2. Hino Vĩnh Thịnh chuẩn bị hồ sơ cho khách hàng.</p>
            <p>
              3. Ngân hàng thẩm định (gọi điện thoại hỏi thăm sau đó sẽ trực
              tiếp xuống nhà).
            </p>
            <p>4. Ngân hàng gửi thông báo cho vay đến Hino Vĩnh Thịnh</p>
            <p>
              5. Hino Vĩnh Thịnh sẽ gửi cho khách hàng và khách hàng thanh toán
              đợt 2 để tiến hành đóng thùng theo yêu cầu khách hàng và đi đăng
              kí xe.
            </p>
            <p>6. Khách hàng kiểm tra xe trước khi giải ngân.</p>
            <p>7. Ngân hàng giải ngân.</p>
            <p>8. Khách hàng nhận toàn bộ hồ sơ xe và nhận xe.</p>
            <p>9. Hoàn thành.</p>
            <p>
              <i>
                Quy trình mua xe trả góp tại Hino Vĩnh Thịnh sẽ hoàn thành từ
                20-25 tùy vào dòng xe cũng như thỏa thuận giữa khách hàng và
                Hino Vĩnh Thịnh.
              </i>
            </p>
            <h2>Hồ sơ đối với khách hàng cá nhân:</h2>
            <p>1. Chứng minh nhân dân hoặc Thẻ căn cước công dân.</p>
            <p> 2. Sổ hộ khẩu.</p>
            <p>3. Giấy đăng kí hết hôn hoặc giấy chứng nhận độc thân.</p>
            <p>4. Hợp đồng mua xe.</p>
            <p>5. Chứng minh thu nhập (có thể có hoặc không).</p>
            <h2>Hồ sơ đối với khách hàng doanh nghiệp:</h2>
            <p>1. Giấp phép đăng kí kinh doanh (Hoạt động trên 6 tháng).</p>
            <p>2. Thông tin của chủ doanh nghiệp.</p>
            <p>3. Báo cáo tài chính gần đây nhất.</p>
            <p>4. Tờ khai quyết toán doanh nghiệp gần đây nhất.</p>
            <p>5. Điều lệ công ty.</p>
            <p>6. Hợp đồng mua xe.</p>
          </div>
        </Grid>
        <Grid item sm={7}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Kỳ
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Số trả định kỳ
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Lãi
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Gốc
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Dư nợ
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.rows.map((row, i) => (
                  <TableRow
                    className={
                      classes[
                        i > 0 && i <= 6
                          ? "sixPercent"
                          : i + 1 == data.rows.length
                          ? "rowTotal"
                          : "tenPercent"
                      ]
                    }
                    key={row.period}
                  >
                    <TableCell align="right">{row.period}</TableCell>
                    <TableCell align="right">
                      <NumberFormat
                        value={row.recurring_number}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" đ"}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <NumberFormat
                        value={row.interest}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" đ"}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <NumberFormat
                        value={row.origin}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" đ"}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <NumberFormat
                        value={row.debt}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" đ"}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};
