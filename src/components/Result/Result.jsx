import React from 'react';

import { Chart } from './Chart';

export const calculator = ({
  period,
  periodUnit,
  interest,
  initialInvestment,
  additionalInvestment,
  additionalInvestmentFrequency,
  additionalInvestmentFrequencyUnit,
  compoundingFrequency
}) => {
  period *= periodUnit;
  additionalInvestmentFrequency /= additionalInvestmentFrequencyUnit;

  let rate = (1 + interest / compoundingFrequency) ** (compoundingFrequency / additionalInvestmentFrequency) - 1;
  let nper = additionalInvestmentFrequency * period;
  let futureValue = initialInvestment * (1 + rate) ** nper + additionalInvestment * (((1 + rate) ** nper - 1) / rate);
  let totalInvested = additionalInvestment * nper;
  let totalInterest = futureValue - initialInvestment - totalInvested;

  totalInvested = +totalInvested.toFixed(2);
  totalInterest = +totalInterest.toFixed(2);
  futureValue = +futureValue.toFixed(2);

  return { totalInvested, totalInterest, futureValue };
};

export const Result = props => {
  const { period, initialInvestment } = props;

  let data = [];

  for (let i = 0; i <= period; i++) {
    let d = { ...props, period: i };
    const { totalInvested, totalInterest, futureValue } = calculator(d);
    data.push({ 'Initial Investment': initialInvestment, 'Total Investment': totalInvested + initialInvestment, 'Total Interest': totalInterest, 'Total Returns': futureValue, i });
  }

  let finalResult = data[period];

  // ((additionalInvestment * additionalInvestmentFrequency) / additionalInvestmentFrequencyUnit) *
  // (((1 + interest / additionalInvestmentFrequencyUnit) ** (additionalInvestmentFrequencyUnit * period) - 1) /
  //   (interest / additionalInvestmentFrequencyUnit));
  // for (let i = 1; i <= 12; i++) {
  //   futureValue = futureValue + additionalInvestment + futureValue * interest / 12;
  // }
  //PMT × {[(1 + r/n)(nt) - 1] / (r/n)}
  // initialInvestment + initialInvestment * interest * period;
  // (compoundingFrequency !== 999
  //   ? initialInvestment * (1 + interest / compoundingFrequency) ** (compoundingFrequency * period)
  //   : initialInvestment * Math.E ** (interest * period)) - simpleInterest;

  return (
    <div>
      {JSON.stringify(finalResult, null, 2)}
      {/*{JSON.stringify(data, null, 2)}*/}
      <Chart data={data} />
    </div>
  );
};
