import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components'

const Center = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 32px;
    height: 38px;
    margin-left: -16px;
    margin-top: -19px;
`

const PageLoader = () => {
  return (
    <Center>
      <Spin size="large" />
    </Center>
  );
};
export default PageLoader;