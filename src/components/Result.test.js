import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { calculator } from './Result/Result';

test('calculates the correct values', () => {
  const data1 = {
    period: 10,
    periodUnit: 1,
    interest: 0.1,
    initialInvestment: 100,
    additionalInvestment: 10,
    additionalInvestmentFrequency: 12,
    additionalInvestmentFrequencyUnit: 1,
    compoundingFrequency: 12
  };

  const { totalInvested, simpleInterest, totalInterest, futureValue } = calculator(data1);

  expect(totalInvested).toBe(1200);
  expect(totalInterest).toBe(1019.15);
  expect(futureValue).toBe(2319.15);

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  // expect(screen.queryByText(testMessage)).toBeNull();

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  // fireEvent.click(screen.getByLabelText(/show/i));

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  // expect(screen.getByText(testMessage)).toBeInTheDocument();
});
