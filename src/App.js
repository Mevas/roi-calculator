import React from 'react';
import { Footer } from './components/layout/Footer';
import { Content } from './components/layout/Content';
import { Layout } from 'antd';

export const App = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Layout.Content style={{ padding: '100px' }}>
          <Content />
        </Layout.Content>

        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </div>
  );
};
