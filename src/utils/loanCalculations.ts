import { PeriodLine } from '../common';

interface LoanParams {
  borrowingPrice: number;
  month: number;
  precentBankBefore: number;
  precentBankAfter: number;
  discountMonths: number;
}

function roundNumber(input: number): number {
  return Math.round(input);
}

function createPeriodLine(
  period: string,
  recurring_number: number | null,
  interest: number | null,
  origin: number | null,
  debt: number | null
): PeriodLine {
  return { period, recurring_number, interest, origin, debt };
}

export function calculateInstallmentSchedule(params: LoanParams): PeriodLine[] {
  const { borrowingPrice, month, precentBankBefore, precentBankAfter, discountMonths } = params;

  if (!borrowingPrice || borrowingPrice <= 0 || !month || month <= 0) {
    return [createPeriodLine('', null, null, null, borrowingPrice || 0)];
  }

  const pricePerMonth = borrowingPrice / month;
  const rows: PeriodLine[] = [createPeriodLine('', null, null, null, borrowingPrice)];

  let totalRecurringNumber = 0;
  let totalInterest = 0;

  for (let i = 1; i <= month; i++) {
    const interestRate = i <= discountMonths ? precentBankBefore : precentBankAfter;
    const debtLast = rows[i - 1].debt || 0;
    const interest = (debtLast * interestRate) / 12;

    let origin = pricePerMonth;
    if (i === month) {
      origin = debtLast;
    }

    const recurringNumber = interest + origin;
    const debt = roundNumber(debtLast - origin);

    totalRecurringNumber += recurringNumber;
    totalInterest += interest;

    rows.push(
      createPeriodLine(
        String(i),
        roundNumber(recurringNumber),
        roundNumber(interest),
        roundNumber(origin),
        debt
      )
    );
  }

  rows.push(
    createPeriodLine(
      'TOTAL',
      roundNumber(totalRecurringNumber),
      roundNumber(totalInterest),
      roundNumber(rows[0].debt || 0),
      null
    )
  );

  return rows;
}

export function calculatePrepayPercent(borrowingPrice: number, carPrice: number): number {
  if (!carPrice || carPrice <= 0) {
    return 0;
  }
  return (borrowingPrice / carPrice) * 100;
}
