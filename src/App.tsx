import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import { TableCalculateContainer } from './components';

export default function App() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h5"
        component="h1"
        sx={{ textAlign: 'center', fontWeight: 'bold', py: 4 }}
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
    <Box sx={{ py: 3 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://quochuydev.github.io/bangtinh_tragop/">
          quochuydev
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
}
