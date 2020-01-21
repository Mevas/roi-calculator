import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Select, FormItem } from 'formik-antd';
import { BetterInputNumber } from './helpers/BetterInputNumber';
import { Result } from './Result/Result';

export const Calculator = () => {
  const validationSchema = Yup.object({
    period: Yup.number()
      .required('Required')
      .label('Period'),
    interest: Yup.number()
      .required('Required')
      .label('Interest')
  });

  const [period, setPeriod] = useState(10);
  const [periodUnit, setPeriodUnit] = useState(1);
  const [interest, setInterest] = useState(10 / 100);
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [additionalInvestment, setAdditionalInvestment] = useState(10);
  const [additionalInvestmentFrequency, setAdditionalInvestmentFrequency] = useState(12);
  const [additionalInvestmentFrequencyUnit, setAdditionalInvestmentFrequencyUnit] = useState(1);
  const [compoundingFrequency, setCompoundingFrequency] = useState(12);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  const focusHandler = event => event.target.select();

  return (
    <div>
      <Formik
        initialValues={{
          period: period,
          'unit-of-time': periodUnit,
          interest: interest * 100,
          initialInvestment: initialInvestment,
          additionalInvestment: additionalInvestment,
          additionalInvestmentFrequency: additionalInvestmentFrequency,
          additionalInvestmentFrequencyUnit: additionalInvestmentFrequencyUnit,
          compoundingFrequency: compoundingFrequency
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          setPeriod(values.period);
          setPeriodUnit(values['unit-of-time']);
          setInterest(values.interest / 100);
          setInitialInvestment(values.initialInvestment);
          setAdditionalInvestment(values.additionalInvestment);
          setAdditionalInvestmentFrequency(values.additionalInvestmentFrequency);
          setAdditionalInvestmentFrequencyUnit(values.additionalInvestmentFrequencyUnit);
          setCompoundingFrequency(values.compoundingFrequency);
        }}
      >
        {({ values, handleSubmit }) => (
          <Form layout="horizontal" {...formItemLayout} onChange={handleSubmit}>
            <FormItem name="period" label="Period">
              <BetterInputNumber
                step="1"
                min={0}
                max={1000}
                name="period"
                addonAfter={
                  <Select name="unit-of-time" placeholder="Unit of time" onChange={handleSubmit} style={{ width: '100px' }}>
                    <Select.Option value={0.00273973}>Days</Select.Option>
                    <Select.Option value={0.0191781}>Weeks</Select.Option>
                    <Select.Option value={0.0833334}>Months</Select.Option>
                    <Select.Option value={1}>Years</Select.Option>
                  </Select>
                }
                placeholder={'Amount of ' + values['unit-of-time']}
                onFocus={focusHandler}
                onChange={handleSubmit}
              />
            </FormItem>

            <FormItem name="interest" label="Interest">
              <BetterInputNumber
                step=".1"
                min={0.01}
                max={1000}
                name="interest"
                addonAfter="%"
                onFocus={focusHandler}
                onChange={handleSubmit}
              />
            </FormItem>

            <FormItem name="initialInvestment" label="Initial investment">
              <BetterInputNumber step="1" min={0} name="initialInvestment" onFocus={focusHandler} onChange={handleSubmit} />
            </FormItem>

            <FormItem name="additionalInvestment" label="Additional investment">
              <BetterInputNumber step="1" min={0} name="additionalInvestment" onFocus={focusHandler} onChange={handleSubmit} />
            </FormItem>

            <FormItem name="additionalInvestmentFrequency" label="Investment frequency" layout="inline">
              <BetterInputNumber
                step="1"
                min={0}
                max={1000}
                name="additionalInvestmentFrequency"
                onFocus={focusHandler}
                onChange={handleSubmit}
              />
              <span> time{values.additionalInvestmentFrequency > 1 ? 's' : ''} per </span>
              <Select name="additionalInvestmentFrequencyUnit" onChange={handleSubmit} style={{ width: '100px' }}>
                <Select.Option value={0.00273973}>Day</Select.Option>
                <Select.Option value={0.0191781}>Week</Select.Option>
                <Select.Option value={0.0833334}>Month</Select.Option>
                <Select.Option value={1}>Year</Select.Option>
              </Select>
            </FormItem>

            <FormItem name="compoundingFrequency" label="Compounding frequency">
              <Select name="compoundingFrequency" onChange={handleSubmit} style={{ width: '100px' }}>
                <Select.Option value={999}>Continuously</Select.Option>
                <Select.Option value={365}>Daily</Select.Option>
                <Select.Option value={12}>Monthly</Select.Option>
                <Select.Option value={4}>Quarterly</Select.Option>
                <Select.Option value={2}>Semi-yearly</Select.Option>
                <Select.Option value={1}>Yearly</Select.Option>
              </Select>
            </FormItem>
            <pre className="language-json">{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
      <Result
        period={period}
        periodUnit={periodUnit}
        interest={interest}
        initialInvestment={initialInvestment}
        additionalInvestmentFrequency={additionalInvestmentFrequency}
        additionalInvestmentFrequencyUnit={additionalInvestmentFrequencyUnit}
        additionalInvestment={additionalInvestment}
        compoundingFrequency={compoundingFrequency}
      />
    </div>
  );
};
