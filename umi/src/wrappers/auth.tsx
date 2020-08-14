import { Redirect } from 'umi';
import React from 'react';

function useAuth() {
  return {
    isLogin: false,
  };
}

export default (props: any) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
