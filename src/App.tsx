import React from "react";
import { Box, Link, Typography, Container } from "@material-ui/core";
import { TableCalculateContainer } from "./components";

export default function App() {
  return (
    <Container>
      <Typography
        variant="h5"
        component="h5"
        style={{ textAlign: "center", fontWeight: "bold", padding: 30 }}
      >
        BẢNG MINH HỌA SỐ TIỀN GỐC VÀ LÃI PHẢI TRẢ HÀNG THÁNG
      </Typography>
      <TableCalculateContainer />
      <Copyright />
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href={"https://quochuydev.github.io/bangtinh_tragop/"}
      >
        quochuydev
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
