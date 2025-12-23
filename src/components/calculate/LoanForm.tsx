import React, { useCallback } from 'react';
import { FormControl, TextField, NativeSelect, Box, InputLabel } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { TableCalculate, MONTH_OPTIONS } from '../../common';

interface LoanFormProps {
  data: TableCalculate;
  onFieldChange: (name: string, value: number | null) => void;
  onSelectChange: (name: string, value: number) => void;
}

export const LoanForm: React.FC<LoanFormProps> = ({ data, onFieldChange, onSelectChange }) => {
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

  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSelectChange(e.target.name, Number(e.target.value));
    },
    [onSelectChange]
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FormControl fullWidth>
        <InputLabel shrink htmlFor="carPrice" sx={{ fontWeight: 'bold' }}>
          Giá xe
        </InputLabel>
        <NumericFormat
          id="carPrice"
          customInput={TextField}
          onValueChange={handleValueChange('carPrice')}
          value={data.carPrice}
          thousandSeparator
          suffix=" đ"
          variant="outlined"
          size="small"
          sx={{ mt: 2 }}
        />
      </FormControl>

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
        <NativeSelect
          value={data.month}
          onChange={handleSelectChange}
          inputProps={{ name: 'month', id: 'month' }}
          sx={{ mt: 2 }}
        >
          {MONTH_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel shrink htmlFor="prepayPercent" sx={{ fontWeight: 'bold' }}>
          Ngân hàng hỗ trợ (%)
        </InputLabel>
        <NumericFormat
          id="prepayPercent"
          customInput={TextField}
          value={data.prepayPercent}
          thousandSeparator
          suffix=" %"
          disabled
          variant="outlined"
          size="small"
          sx={{ mt: 2 }}
        />
      </FormControl>

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

      <FormControl fullWidth>
        <InputLabel shrink htmlFor="precentBankBefore" sx={{ fontWeight: 'bold' }}>
          Lãi suất vay năm (trong thời gian ưu đãi)
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
    </Box>
  );
};
