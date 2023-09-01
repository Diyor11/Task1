import React, { useEffect } from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
const NotFound = ({path}: {path: string}) => {
    const navigate = useNavigate()

  useEffect(() => {
    navigate('/notfound');
  }, [navigate]);
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button href={path} type="primary">
            Back Home
          </Button>
        }
      />
    </>
  );
};
export default NotFound;
