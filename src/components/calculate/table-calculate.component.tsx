import React, { useEffect, useCallback } from 'react';
import { Grid, Box } from '@mui/material';
import { TableCalculate } from '../../common';
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

  const handleSelectChange = useCallback(
    (name: string, value: number) => {
      onRefreshCalculate({ [name]: value });
    },
    [onRefreshCalculate]
  );

  return (
    <Box>
      <Grid container spacing={3} direction={isMobile ? 'column' : 'row'}>
        <Grid item xs={12} sm={5}>
          <LoanForm
            data={tableCalculate}
            onFieldChange={handleFieldChange}
            onSelectChange={handleSelectChange}
          />
          {!isMobile && (
            <Box sx={{ mt: 3 }}>
              <LoanDescription />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={7}>
          <LoanTable rows={tableCalculate.rows} discountMonths={tableCalculate.discountMonths} />
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
