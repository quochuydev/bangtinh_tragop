import React, { useCallback, useMemo } from 'react';
import { FormControl, TextField, Box, InputLabel, Paper, Typography } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { TableCalculate } from '../../common';

interface LoanFormProps {
  data: TableCalculate;
  onFieldChange: (name: string, value: number | null) => void;
}

export const LoanForm: React.FC<LoanFormProps> = ({ data, onFieldChange }) => {
  const handleValueChange = useCallback(
    (name: string) => (values: { floatValue?: number }) => {
      const value = values.floatValue;
      onFieldChange(name, value !== undefined ? value : null);
    },
    [onFieldChange]
  );

  const handlePercentChange = useCallback(
    (name: string) => (values: { floatValue?: number }) => {
      const value = values.floatValue;
      // Convert from percentage (e.g., 6.99) to decimal (e.g., 0.0699)
      onFieldChange(name, value !== undefined ? value / 100 : null);
    },
    [onFieldChange]
  );

  const summary = useMemo(() => {
    if (!data.rows || data.rows.length < 2) return null;

    // Last row is the total row
    const totalRow = data.rows[data.rows.length - 1];
    // First payment row (index 1, since index 0 is initial state)
    const firstPaymentRow = data.rows[1];

    return {
      totalInterest: totalRow?.interest ?? 0,
      totalPayment: totalRow?.recurring_number ?? 0,
      monthlyPayment: firstPaymentRow?.recurring_number ?? 0,
    };
  }, [data.rows]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FormControl fullWidth>
        <InputLabel shrink htmlFor="borrowingPrice" sx={{ fontWeight: 'bold' }}>
          Số tiền cần vay (VNĐ)
        </InputLabel>
        <NumericFormat
          id="borrowingPrice"
          customInput={TextField}
          onValueChange={handleValueChange('borrowingPrice')}
          value={data.borrowingPrice}
          thousandSeparator
          suffix=" đ"
          variant="outlined"
          size="small"
          sx={{ mt: 2 }}
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel shrink htmlFor="month" sx={{ fontWeight: 'bold' }}>
          Thời gian vay (Tháng)
        </InputLabel>
        <NumericFormat
          id="month"
          customInput={TextField}
          onValueChange={handleValueChange('month')}
          value={data.month}
          decimalScale={0}
          suffix=" tháng"
          variant="outlined"
          size="small"
          sx={{ mt: 2 }}
        />
      </FormControl>

      {data.calculationType === 'declining' && (
        <FormControl fullWidth>
          <InputLabel shrink htmlFor="discountMonths" sx={{ fontWeight: 'bold' }}>
            Số tháng ưu đãi lãi suất
          </InputLabel>
          <NumericFormat
            id="discountMonths"
            customInput={TextField}
            onValueChange={handleValueChange('discountMonths')}
            value={data.discountMonths}
            decimalScale={0}
            variant="outlined"
            size="small"
            sx={{ mt: 2 }}
          />
        </FormControl>
      )}

      <FormControl fullWidth>
        <InputLabel shrink htmlFor="precentBankBefore" sx={{ fontWeight: 'bold' }}>
          {data.calculationType === 'pmt'
            ? 'Lãi suất vay năm'
            : 'Lãi suất vay năm (trong thời gian ưu đãi)'}
        </InputLabel>
        <NumericFormat
          id="precentBankBefore"
          customInput={TextField}
          onValueChange={handlePercentChange('precentBankBefore')}
          value={data.precentBankBefore * 100}
          decimalScale={2}
          suffix=" %"
          variant="outlined"
          size="small"
          sx={{ mt: 2 }}
        />
      </FormControl>

      {data.calculationType === 'declining' && (
        <FormControl fullWidth>
          <InputLabel shrink htmlFor="precentBankAfter" sx={{ fontWeight: 'bold' }}>
            Lãi suất vay năm (sau ưu đãi)
          </InputLabel>
          <NumericFormat
            id="precentBankAfter"
            customInput={TextField}
            onValueChange={handlePercentChange('precentBankAfter')}
            value={data.precentBankAfter * 100}
            decimalScale={2}
            suffix=" %"
            variant="outlined"
            size="small"
            sx={{ mt: 2 }}
          />
        </FormControl>
      )}

      {summary && (
        <Paper elevation={2} sx={{ p: 2, mt: 1, backgroundColor: '#f5f5f5', maxWidth: '100%', boxSizing: 'border-box' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1.5 }}>
            Tóm tắt khoản vay
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 0.5 }}>
              <Typography variant="body2" sx={{ flexShrink: 0 }}>Trả hàng tháng:</Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                <NumericFormat
                  value={summary.monthlyPayment}
                  displayType="text"
                  thousandSeparator
                  suffix=" đ"
                />
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 0.5 }}>
              <Typography variant="body2" sx={{ flexShrink: 0 }}>Tổng tiền lãi:</Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'error.main', textAlign: 'right' }}>
                <NumericFormat
                  value={summary.totalInterest}
                  displayType="text"
                  thousandSeparator
                  suffix=" đ"
                />
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 0.5, borderTop: '1px solid #ddd', pt: 1 }}>
              <Typography variant="body2" sx={{ flexShrink: 0 }}>Tổng tiền phải trả:</Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                <NumericFormat
                  value={summary.totalPayment}
                  displayType="text"
                  thousandSeparator
                  suffix=" đ"
                />
              </Typography>
            </Box>
          </Box>
        </Paper>
      )}
    </Box>
  );
};
