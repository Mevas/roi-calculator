import React from 'react';
import { ResponsiveStream } from '@nivo/stream';
import { linearGradientDef } from '@nivo/core';

export const Chart = ({ data }) => (
  <div style={{ width: '750px', height: '400px' }}>
    <ResponsiveStream
      data={data}
      keys={['Total Investment', 'Total Interest']}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 3,
        tickPadding: 3,
        tickRotation: 0,
        legend: 'Years',
        legendOffset: 36
      }}
      axisLeft={{ orient: 'left', tickSize: 3, tickPadding: 3, tickRotation: 0, legend: 'Return', legendOffset: -40 }}
      enableGridX={false}
      enableGridY={true}
      colors={['rgb(17, 176, 62)', 'rgb(89, 175, 255)', 'rgb(125, 0, 209)']}
      offsetType="none"
      fillOpacity={0.85}
      borderWidth={1}
      borderColor="white"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          translateX: 10,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000'
              }
            }
          ]
        }
      ]}
      defs={[
        linearGradientDef('neon', [
          { offset: 0, color: 'rgb(173, 14, 141)' },
          { offset: 100, color: 'rgb(125, 0, 209)', opacity: 0.5 }
        ]),
        linearGradientDef('indigo', [
          { offset: 0, color: 'rgb(17, 176, 62)' },
          { offset: 100, color: 'rgb(57, 227, 105)', opacity: 0.5 }
        ]),
        linearGradientDef('ocean-blue', [
          { offset: 0, color: 'rgb(89, 175, 255)' },
          { offset: 100, color: 'rgb(92, 92, 255)', opacity: 0.5 }
        ])
      ]}
      fill={[
        { match: { id: 'Total Interest' }, id: 'neon' },
        { match: { id: 'Total Investment' }, id: 'ocean-blue' },
        { match: { id: 'Initial Investment' }, id: 'indigo' }
      ]}
    />
  </div>
);
