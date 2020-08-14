import { IRouteComponentProps } from 'umi';
import React from 'react';
import About from './about';
import LinkCom from './link';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  if (location.pathname === '/about') {
    return (
      <div>
        <LinkCom />
        <About>{children}</About>
      </div>
    );
  }
  return (
    <div>
      <LinkCom />
      {children}
    </div>
  );
}
