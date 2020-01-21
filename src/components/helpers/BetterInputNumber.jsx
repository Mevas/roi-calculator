import React from 'react';
import { InputNumber } from 'formik-antd';

export const BetterInputNumber = props => {
  if (props.addonAfter) {
    return (
      <>
        <InputNumber
          style={{ verticalAlign: 'middle', borderBottomRightRadius: 0, borderTopRightRadius: 0, width: props.width }}
          {...props}
        />
        <div
          className="ant-input-group-addon"
          style={{
            paddingTop: '2px',
            verticalAlign: 'middle',
            display: 'inline-table',
            lineHeight: '24px',
            height: '32px'
          }}
        >
          {props.addonAfter}
        </div>
      </>
    );
  } else {
    return <InputNumber {...props} />;
  }
};
