import React, { useEffect, useCallback } from 'react';
import { Grid, Box, Tabs, Tab } from '@mui/material';
import { CalculationType, PMT_DEFAULTS, TableCalculate } from '../../common';
import { useIsMobile } from '../../hooks/useIsMobile';
import { LoanForm } from './LoanForm';
import { LoanTable } from './LoanTable';
import { LoanDescription } from './LoanDescription';

interface Props {
  onRefreshCalculate: (data: Partial<TableCalculate>) => void;
  tableCalculate: TableCalculate;
}

export const TableCalculateComponent: React.FC<Props> = ({ onRefreshCalculate, tableCalculate }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    onRefreshCalculate({});
  }, [onRefreshCalculate]);

  const handleFieldChange = useCallback(
    (name: string, value: number | null) => {
      onRefreshCalculate({ [name]: value });
    },
    [onRefreshCalculate]
  );

  const handleTabChange = useCallback(
    (_: React.SyntheticEvent, newValue: CalculationType) => {
      if (newValue === 'pmt') {
        onRefreshCalculate({
          calculationType: 'pmt',
          borrowingPrice: PMT_DEFAULTS.borrowingPrice,
          month: PMT_DEFAULTS.month,
          precentBankBefore: PMT_DEFAULTS.annualRate,
        });
      } else {
        onRefreshCalculate({ calculationType: 'declining' });
      }
    },
    [onRefreshCalculate]
  );

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs
          value={tableCalculate.calculationType}
          onChange={handleTabChange}
          variant={isMobile ? 'fullWidth' : 'standard'}
        >
          <Tab label="Lãi giảm dần" value="declining" />
          <Tab label="Trả góp đều (PMT)" value="pmt" />
        </Tabs>
      </Box>
      <Grid container spacing={3} direction={isMobile ? 'column' : 'row'}>
        <Grid item xs={12} sm={5}>
          <LoanForm
            data={tableCalculate}
            onFieldChange={handleFieldChange}
          />
          {!isMobile && (
            <Box sx={{ mt: 3 }}>
              <LoanDescription />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={7}>
          <LoanTable
            rows={tableCalculate.rows}
            discountMonths={tableCalculate.calculationType === 'pmt' ? 0 : tableCalculate.discountMonths}
          />
        </Grid>
      </Grid>

      {isMobile && (
        <Box sx={{ mt: 3 }}>
          <LoanDescription />
        </Box>
      )}
    </Box>
  );
};
