import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import Navigation from '../navigation'
import Header from '../header';
import { Outlet } from 'react-router-dom';
import  {ModalContextProvider} from '../../context'

const { Content, Sider } = Layout;

interface Props{
    children?: ReactNode
}
const MainLayout: React.FC<Props> = () => {

  return (
    <ModalContextProvider>
      <Layout className='layout'>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          theme='light'
        >
          <Navigation />
        </Sider>
        <Layout className='layout-main'>
          <Header />
          <Content className='layout-content' style={{marginTop: '1rem'}}>
            <div style={{ minHeight: 360 }}>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </ModalContextProvider>
  );
};

export default MainLayout;