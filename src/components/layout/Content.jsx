import React from 'react';
import { Calculator } from '../Calculator';
import { Card } from 'antd';

export const Content = () => {
  return (
    <>
      <Card title="Calculator" bordered={false}>
        <Calculator />
      </Card>
    </>
  );
};
