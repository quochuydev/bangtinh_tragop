import React from 'react';
import { Box, Typography } from '@mui/material';

export const LoanDescription: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" component="h2" gutterBottom>
        Thủ tục mua xe trả góp cùng Hino Vlog:
      </Typography>
      <Typography paragraph>1. Mua xe tại và ký hợp đồng cùng Hino Vlog tại Đại lý Hino chính hãng.</Typography>
      <Typography paragraph>2. Hino Vlog chuẩn bị hồ sơ cho khách hàng.</Typography>
      <Typography paragraph>3. Ngân hàng thẩm định (gọi điện thoại hỏi thăm sau đó sẽ trực tiếp xuống nhà).</Typography>
      <Typography paragraph>4. Ngân hàng gửi thông báo cho vay đến đại lý Hino chính hãng.</Typography>
      <Typography paragraph>
        5. Đại lý Hino sẽ gửi cho khách hàng và khách hàng thanh toán đợt 2 để tiến hành đóng thùng theo yêu cầu khách
        hàng và đi đăng kí xe.
      </Typography>
      <Typography paragraph>6. Khách hàng kiểm tra xe trước khi giải ngân.</Typography>
      <Typography paragraph>7. Ngân hàng giải ngân.</Typography>
      <Typography paragraph>8. Khách hàng nhận toàn bộ hồ sơ xe và nhận xe.</Typography>
      <Typography paragraph>9. Hoàn thành.</Typography>
      <Typography paragraph fontStyle="italic">
        Quy trình mua xe trả góp cùng Hino Vlog sẽ hoàn thành từ 20-25 ngày tùy vào dòng xe cũng như thỏa thuận giữa
        Khách hàng và Đại lý Hino chính hãng.
      </Typography>

      <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 2 }}>
        Hồ sơ đối với khách hàng cá nhân:
      </Typography>
      <Typography paragraph>1. Chứng minh nhân dân hoặc Thẻ căn cước công dân.</Typography>
      <Typography paragraph>2. Sổ hộ khẩu.</Typography>
      <Typography paragraph>3. Giấy đăng kí hết hôn hoặc giấy chứng nhận độc thân.</Typography>
      <Typography paragraph>4. Hợp đồng mua xe.</Typography>
      <Typography paragraph>5. Chứng minh thu nhập (có thể có hoặc không).</Typography>

      <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 2 }}>
        Hồ sơ đối với khách hàng doanh nghiệp:
      </Typography>
      <Typography paragraph>1. Giấp phép đăng kí kinh doanh (Hoạt động trên 6 tháng).</Typography>
      <Typography paragraph>2. Thông tin của chủ doanh nghiệp.</Typography>
      <Typography paragraph>3. Báo cáo tài chính gần đây nhất.</Typography>
      <Typography paragraph>4. Tờ khai quyết toán doanh nghiệp gần đây nhất.</Typography>
      <Typography paragraph>5. Điều lệ công ty.</Typography>
      <Typography paragraph>6. Hợp đồng mua xe.</Typography>
    </Box>
  );
};
